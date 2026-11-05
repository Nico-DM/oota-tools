# D&D Maps

## Rutas portables

`dnd_estado.json` guarda la carpeta de mapas, el mapa abierto y las imágenes de
las fichas como rutas **relativas a la carpeta del propio archivo**, con barras
`/`. Así el proyecto se puede mover de lugar o abrir en Windows, Linux o macOS
sin editar el estado a mano. Al cargar, el programa las vuelve a convertir en
rutas absolutas para trabajar.

Los mapas incluidos viven en `maps/`. Si el estado viene de otra computadora,
las rutas viejas se intentan ubicar por el final del recorrido: por ejemplo
`.../MAPS/Chapter 11/Gravenhollow/x.png` se reconoce como
`maps/chapter_11/Gravenhollow/x.png`.

## Luces y línea de visión

Una luz solo revela las zonas que algún jugador con visión puede ver. Si una
sala está iluminada pero queda detrás de una pared para todos los jugadores,
sigue cubierta por la niebla. Esto se aplica a la ventana de jugadores; la del
DM sigue mostrando el alcance completo de cada luz. La memoria del recorrido,
si está activada, se mantiene aparte y conserva lo que los jugadores ya vieron.

## Levantar todo (una sola PC, el DM)

Requiere instalar [uv](https://docs.astral.sh/uv/getting-started/installation/)

```bash
uv venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
uv run dnd.py
```

Esto abre dos ventanas, la del DM y la de los jugadores.

## Fuentes pixeladas en Linux (Tk sin Xft)

Los Python portables que descarga uv traen un Tk compilado **sin Xft**. En
Linux eso hace que Tkinter caiga a las fuentes X11 viejas: solo aparecen unas
pocas familias y no hay antialiasing.

Para comprobarlo:

```bash
python3 -c "import tkinter, tkinter.font as f; r=tkinter.Tk(); print(len(f.families())); r.destroy()"
```

Con Xft devuelve cientos de familias; sin Xft, normalmente 4 (`fixed`,
`liberation sans`, `liberation serif`, `liberation mono`).

La solución es usar un Python del sistema cuyo Tk sí tenga Xft:

- **Fedora / Bazzite / Silverblue:** `rpm-ostree install python3-tkinter` y
  reiniciar. En Fedora tradicional alcanza con `sudo dnf install python3-tkinter`.
- **Debian / Ubuntu:** `sudo apt install python3-tk`.

Después de eso, `./run.py` detecta ese Python y lo usa automáticamente para los
mapas. Si le falta Pillow (o su soporte para Tk), el lanzador recrea el `.venv`
de `dnd-maps/` con uv para instalarlo. También podés forzar el intérprete con
la variable `OOTA_MAPS_PYTHON`:

```bash
OOTA_MAPS_PYTHON=/usr/bin/python3 ./run.py
```

Para lanzar solo los mapas con el Tk del sistema (uv instala Pillow en ese
entorno):

```bash
uv venv --python /usr/bin/python3
uv run dnd.py
```

Si en vez de `uv run` ejecutás `python3 dnd.py` directamente con el Python del
sistema, además de tkinter necesitás Pillow >= 10.1 con ImageTk. En Fedora:
`python3-pillow-tk`; en Debian/Ubuntu/ChromeOS el paquete del sistema puede ser
más viejo, así que conviene instalarlo dentro de un venv:

```bash
python3 -m venv --clear .venv
.venv/bin/pip install 'Pillow>=10.1'
.venv/bin/python dnd.py
```
