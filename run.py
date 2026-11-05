#!/usr/bin/env python3
"""Lanzador único para las tres herramientas de oota-tools.

Uso:
    ./run.py                 # mapas + Dungeons & Phones + guía del DM
    ./run.py --no-maps       # solo las dos herramientas web (sin ventanas Tk)
    ./run.py --open          # además abre la guía y la PWA en el navegador
    ./run.py --help          # todas las opciones

Cada herramienta sigue viviendo en su carpeta y se ejecuta con su propio
entorno (uv / .venv). Este script solo las arranca juntas, muestra las URLs
y las cierra todas al recibir Ctrl+C.
"""
from __future__ import annotations

import argparse
import os
import shutil
import signal
import socket
import subprocess
import sys
import threading
import time
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MAPS_DIR = ROOT / "dnd-maps"
PHONES_DIR = ROOT / "dungeons-and-phones" / "backend"
GUIDE_DIR = ROOT / "dm-guide"

PHONES_PORT = 8000
GUIDE_PORT = 8001


class _Stop(Exception):
    """Se lanza desde los manejadores de SIGINT/SIGTERM para cerrar ordenadamente."""


def _port_busy(host: str, port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            sock.bind((host, port))
        except OSError:
            return True
    return False


_TK_PROBE = r"""
import pathlib
import subprocess
import sys

try:
    import _tkinter
except Exception:
    sys.exit(1)  # no hay tkinter

# El Tk portable de uv se compila sin Xft: no enlaza libXft y las fuentes
# salen pixeladas. ldd sobre _tkinter muestra también las dependencias de Tk.
modulo = pathlib.Path(_tkinter.__file__).resolve()
try:
    enlaces = subprocess.run(
        ["ldd", str(modulo)], capture_output=True, text=True, timeout=10
    ).stdout
except Exception:
    sys.exit(1)

if "libXft" not in enlaces:
    sys.exit(2)

try:
    from PIL import ImageTk  # noqa: F401
except Exception:
    sys.exit(3)  # Tk con Xft, pero falta Pillow (o su soporte de Tk)

sys.exit(0)
"""


def _probar_tk(python: str) -> str:
    """Estado de Tk para un intérprete: 'xft', 'sin-xft', 'falta-pillow' o 'no-sirve'."""
    try:
        resultado = subprocess.run(
            [python, "-c", _TK_PROBE],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            timeout=15,
        )
    except (OSError, subprocess.TimeoutExpired):
        return "no-sirve"
    return {
        0: "xft",
        2: "sin-xft",
        3: "falta-pillow",
    }.get(resultado.returncode, "no-sirve")


def _candidatos_python() -> list[str]:
    """Intérpretes que podrían tener un Tk con Xft, sin repetir."""
    venv_python = MAPS_DIR / (
        ".venv/Scripts/python.exe" if os.name == "nt" else ".venv/bin/python"
    )
    candidatos: list[str] = []
    vistos: set[str] = set()
    for ruta in (
        str(venv_python),
        shutil.which("python3"),
        "/usr/bin/python3",
        "/usr/local/bin/python3",
        sys.executable,
    ):
        if not ruta:
            continue
        real = os.path.realpath(ruta)
        if not os.path.isfile(real) or real in vistos:
            continue
        vistos.add(real)
        candidatos.append(ruta)
    return candidatos


def _con_dependencias(python: str) -> list[str]:
    """Comando que usa ese Python y deja que uv instale Pillow si falta."""
    uv = shutil.which("uv")
    if uv:
        return [uv, "run", "--python", python, "python"]
    return [python]


def _maps_cmd() -> tuple[list[str], bool]:
    """Comando para los mapas y si el Tk elegido parece no tener Xft."""
    elegido = os.environ.get("OOTA_MAPS_PYTHON")
    if elegido:
        estado = _probar_tk(elegido)
        if estado == "falta-pillow":
            return _con_dependencias(elegido), False
        return [elegido], estado == "sin-xft"

    sin_xft = False
    for python in _candidatos_python():
        estado = _probar_tk(python)
        if estado == "xft":
            return [python], False
        if estado == "falta-pillow":
            return _con_dependencias(python), False
        if estado == "sin-xft":
            sin_xft = True
    return _python_cmd(MAPS_DIR, "D&D Maps"), sin_xft


def _python_cmd(project: Path, label: str) -> list[str]:
    """Comando para ejecutar Python dentro del entorno de un subproyecto."""
    uv = shutil.which("uv")
    if uv:
        return [uv, "run", "python"]

    venv_python = project / (
        ".venv/Scripts/python.exe" if os.name == "nt" else ".venv/bin/python"
    )
    if venv_python.is_file():
        return [str(venv_python)]

    raise SystemExit(
        f"[oota] No encontré un entorno para {label}.\n"
        "       Instalá uv (https://docs.astral.sh/uv/) o creá el .venv "
        f"dentro de {project}."
    )


class _QuietGuideHandler(SimpleHTTPRequestHandler):
    """Sirve la guía sin llenar la consola con una línea por cada archivo."""

    def log_message(self, *_args) -> None:
        pass


def _start_guide(host: str, port: int) -> ThreadingHTTPServer:
    handler = partial(_QuietGuideHandler, directory=str(GUIDE_DIR))
    server = ThreadingHTTPServer((host, port), handler)
    thread = threading.Thread(
        target=server.serve_forever, name="guia-dm", daemon=True
    )
    thread.start()
    return server


def _terminate(proc: subprocess.Popen) -> None:
    if proc.poll() is not None:
        return
    if os.name == "nt":
        proc.terminate()
        return
    try:
        os.killpg(os.getpgid(proc.pid), signal.SIGTERM)
    except ProcessLookupError:
        pass


def _kill(proc: subprocess.Popen) -> None:
    if proc.poll() is not None:
        return
    if os.name == "nt":
        proc.kill()
        return
    try:
        os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
    except ProcessLookupError:
        pass


def _stop_processes(processes: list[tuple[str, subprocess.Popen]]) -> None:
    for _, proc in processes:
        _terminate(proc)

    deadline = time.monotonic() + 5
    for name, proc in processes:
        try:
            proc.wait(timeout=max(0.1, deadline - time.monotonic()))
        except subprocess.TimeoutExpired:
            print(f"[oota] {name} no cerró a tiempo; lo fuerzo.", flush=True)
            _kill(proc)
            proc.wait()


def _can_connect(host: str, port: int) -> bool:
    target = "127.0.0.1" if host in ("", "0.0.0.0") else host
    try:
        with socket.create_connection((target, port), timeout=0.25):
            return True
    except OSError:
        return False


def _open_when_ready(wait_for: list[tuple[str, int]], urls: list[str]) -> None:
    for host, port in wait_for:
        deadline = time.monotonic() + 15
        while time.monotonic() < deadline:
            if _can_connect(host, port):
                break
            time.sleep(0.25)
    for url in urls:
        webbrowser.open(url)


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Arranca juntas las tres herramientas de oota-tools.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        "--no-maps",
        action="store_true",
        help="no abre las ventanas de mapas (Tk)",
    )
    parser.add_argument(
        "--no-phones",
        action="store_true",
        help="no levanta el servidor de Dungeons & Phones",
    )
    parser.add_argument(
        "--no-guide",
        action="store_true",
        help="no sirve la guía del DM",
    )
    parser.add_argument(
        "--open",
        action="store_true",
        help="abre la guía y la PWA en el navegador cuando estén listas",
    )
    parser.add_argument(
        "--guide-port",
        type=int,
        default=GUIDE_PORT,
        help="puerto para la guía del DM",
    )
    parser.add_argument(
        "--guide-host",
        default="127.0.0.1",
        help="interfaz donde escucha la guía (usá 0.0.0.0 para verla desde otro dispositivo)",
    )
    return parser.parse_args()


def main() -> int:
    args = _parse_args()

    if args.no_maps and args.no_phones and args.no_guide:
        print("[oota] No hay nada para arrancar: elegiste desactivar las tres herramientas.")
        return 2

    run_maps = not args.no_maps
    run_phones = not args.no_phones
    run_guide = not args.no_guide

    if run_guide and not (GUIDE_DIR / "capitulos").is_dir():
        print(
            "[oota] Aviso: falta dm-guide/capitulos/; la guía va a cargar sin capítulos.",
            flush=True,
        )

    if run_phones and _port_busy("0.0.0.0", PHONES_PORT):
        raise SystemExit(
            f"[oota] El puerto {PHONES_PORT} (Dungeons & Phones) ya está en uso.\n"
            "       Cerrá el proceso que lo ocupa y volvé a intentar."
        )
    if run_guide and _port_busy(args.guide_host, args.guide_port):
        raise SystemExit(
            f"[oota] El puerto {args.guide_port} (guía del DM) ya está en uso.\n"
            "       Probá con --guide-port <otro-puerto>."
        )

    processes: list[tuple[str, subprocess.Popen]] = []
    guide_server: ThreadingHTTPServer | None = None

    try:
        if run_guide:
            guide_server = _start_guide(args.guide_host, args.guide_port)

        if run_phones:
            cmd = _python_cmd(PHONES_DIR, "Dungeons & Phones") + ["run.py"]
            print("[oota] Iniciando Dungeons & Phones…", flush=True)
            processes.append(
                (
                    "Dungeons & Phones",
                    subprocess.Popen(
                        cmd,
                        cwd=PHONES_DIR,
                        start_new_session=(os.name != "nt"),
                    ),
                )
            )

        if run_maps:
            cmd, sin_xft = _maps_cmd()
            if "--python" in cmd:
                print(
                    "[oota] Preparando los mapas con el Python del sistema "
                    "(Tk con Xft)…",
                    flush=True,
                )
            if sin_xft:
                print(
                    "[oota] Aviso: el Tk de este Python no tiene Xft; las fuentes\n"
                    "       de los mapas se van a ver pixeladas. Instalá\n"
                    "       python3-tkinter del sistema o mirá dnd-maps/README.md.",
                    flush=True,
                )
            cmd = cmd + ["dnd.py"]
            print("[oota] Iniciando D&D Maps…", flush=True)
            processes.append(
                (
                    "D&D Maps",
                    subprocess.Popen(
                        cmd,
                        cwd=MAPS_DIR,
                        start_new_session=(os.name != "nt"),
                    ),
                )
            )

        print()
        print("=" * 68)
        print("  OOTA TOOLS — mesa del DM")
        print("=" * 68)
        if run_guide:
            print(f"  Guía del DM          http://127.0.0.1:{args.guide_port}")
        if run_phones:
            print(f"  Dungeons & Phones    http://localhost:{PHONES_PORT}")
            print("                       (el QR para celulares aparece arriba)")
        if run_maps:
            print("  Mapas D&D            ventanas Tk: Mesa del DM + Mapa de jugadores")
        print("=" * 68)
        print("  Ctrl+C cierra todas las herramientas.")
        print(flush=True)

        if args.open:
            urls: list[str] = []
            wait_for: list[tuple[str, int]] = []
            if run_guide:
                urls.append(f"http://127.0.0.1:{args.guide_port}/")
                wait_for.append((args.guide_host, args.guide_port))
            if run_phones:
                urls.append(f"http://localhost:{PHONES_PORT}/")
                wait_for.append(("127.0.0.1", PHONES_PORT))
            if urls:
                threading.Thread(
                    target=_open_when_ready,
                    args=(wait_for, urls),
                    daemon=True,
                ).start()

        running = list(processes)
        while running or guide_server is not None:
            for item in list(running):
                name, proc = item
                code = proc.poll()
                if code is None:
                    continue
                running.remove(item)
                print(f"[oota] {name} terminó (código {code}).", flush=True)
            time.sleep(0.5)

        return 0

    except (KeyboardInterrupt, _Stop):
        return 0

    finally:
        if processes:
            print("[oota] Cerrando herramientas…", flush=True)
            _stop_processes(processes)
        if guide_server is not None:
            guide_server.shutdown()
            guide_server.server_close()


def _handle_stop(_signum, _frame) -> None:
    raise _Stop


if __name__ == "__main__":
    signal.signal(signal.SIGTERM, _handle_stop)
    sys.exit(main())
