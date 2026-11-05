# oota-tools

Herramientas para la mesa de **Out of the Abyss**:

| Herramienta | Qué es |
| --- | --- |
| `dnd-maps/` | Mapas con niebla de guerra: ventana del DM + ventana de jugadores (Tk). |
| `dungeons-and-phones/` | Servidor FastAPI + PWA para trackear HP desde los celulares. |
| `dm-guide/` | Guía interactiva del DM, servida como sitio estático. |

## Arrancar todo junto

Desde la raíz del repo:

```bash
./run.py
```

Eso levanta las tres herramientas a la vez:

- **Mapas D&D**: abre las ventanas Tk «Mesa del DM» y «Mapa de jugadores».
- **Dungeons & Phones**: queda en `http://localhost:8000` (el QR para los
  celulares y la IP de la red aparecen en la consola).
- **Guía del DM**: queda en `http://127.0.0.1:8001`.

`Ctrl+C` cierra todo de forma ordenada.

### Opciones

```bash
./run.py --open                  # además abre la guía y la PWA en el navegador
./run.py --no-maps               # sin ventanas Tk (por ejemplo, en un servidor)
./run.py --no-phones             # sin el servidor de Dungeons & Phones
./run.py --no-guide              # sin la guía del DM
./run.py --guide-port 9000       # cambia el puerto de la guía
./run.py --guide-host 0.0.0.0    # permite abrir la guía desde otro dispositivo
./run.py --public-ip 192.168.1.42 # IP que se anuncia a los celulares (ChromeOS/Crostini)
```

Si cerrás una de las ventanas o una herramienta termina, las demás siguen
corriendo; `Ctrl+C` cierra el resto.

### Requisitos

- Python 3.12 o superior.
- [uv](https://docs.astral.sh/uv/getting-started/installation/) instalado, o
  los entornos `.venv` ya creados dentro de `dnd-maps/` y
  `dungeons-and-phones/backend/`. El lanzador usa `uv run` para que cada
  herramienta corra con sus propias dependencias.
- En Linux, para que las ventanas Tk se vean nítidas hace falta un Tk con Xft.
  Los Python de uv vienen sin Xft (fuentes pixeladas); instalá `python3-tkinter`
  del sistema y `./run.py` lo va a preferir. Detalles en
  [`dnd-maps/README.md`](dnd-maps/README.md#fuentes-pixeladas-en-linux-tk-sin-xft).

Cada herramienta también se puede seguir usando por separado; las
instrucciones están en el README de cada carpeta.

### ChromeOS (Chromebook)

Todo corre dentro del entorno Linux de ChromeOS (Crostini), sin necesidad de
modo desarrollador. El detalle es que ese entorno vive en una VM con red NAT:
la IP que ve el programa (`100.115.92.x`) no es alcanzable desde los celulares,
y mDNS (`dungeonsandphones.local`) tampoco cruza el contenedor. Hay que exponer
el puerto y decirle a la app cuál es la IP real del equipo.

1. Instalá las dependencias en la terminal de Linux:

   ```bash
   sudo apt update && sudo apt install -y python3-tk git curl
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. En **Configuración → Acerca de ChromeOS → Desarrolladores → Linux →
   Port forwarding**, agregá `8000`/TCP (y `8001`/TCP si querés abrir la guía
   desde otro dispositivo). ChromeOS tiene que estar con Linux iniciado.

3. Averiguá la IP del Chromebook en **Configuración → Red → tu WiFi** y
   arrancá las herramientas pasándosela:

   ```bash
   ./run.py --public-ip 192.168.1.42
   # o: DUNGEONS_PUBLIC_IP=192.168.1.42 ./run.py
   ```

Con `--public-ip`, los links y el QR de Dungeons & Phones usan esa IP
directamente y se omite el anuncio mDNS. El QR que genera el programa ya queda
listo para escanear desde los celulares.

Nota: la PWA no se va a poder "instalar" sobre HTTP (los service workers piden
HTTPS), pero la página funciona igual en el navegador. Y si vas a usar el mapa
de jugadores en un proyector o segunda pantalla, probá antes que las ventanas
Linux puedan moverse a ese monitor en tu modelo.
