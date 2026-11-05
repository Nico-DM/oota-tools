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
