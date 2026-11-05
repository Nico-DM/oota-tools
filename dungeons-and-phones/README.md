# Dungeons & Phones

## Levantar todo (una sola PC, el DM)

Requiere instalar [uv](https://docs.astral.sh/uv/getting-started/installation/)

```bash
cd backend
uv venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
uv run run.py
```

Esto:
- Levanta la API **y la PWA** en `http://0.0.0.0:8000` (mismo puerto).
- Anuncia el nombre `dungeonsandphones.local` en la red WiFi (vía mDNS)
  y lo imprime como la URL que hay que abrir en el celular:
  `http://dungeonsandphones.local:8000`. Este link **no cambia** aunque
  la PC cambie de red o de IP — solo hace falta que `run.py` siga
  corriendo en la PC del DM, que es quien lo anuncia.
- Genera `connection_qr.png` con el QR de esa URL, y lo sirve también
  en `http://<ip local>:8000/connection-qr.png` para mostrarlo en pantalla.
- Por las dudas, también imprime la IP directa como alternativa: en
  algunas redes WiFi (hoteles, universidades, algunas corporativas)
  el multicast que usa mDNS está bloqueado y `dungeonsandphones.local`
  no resuelve. Si a algún jugador no le carga, que use esa IP directa
  en vez del link genérico.

## IP fija y contenedores (ChromeOS / Crostini, Docker)

Si el programa corre en un entorno con red NAT, `run.py` detecta la IP
interna del contenedor (por ejemplo `100.115.92.x` en ChromeOS), que los
celulares de la WiFi no pueden alcanzar. Ahí mDNS tampoco funciona.

Pasá la IP real del equipo y `run.py` la usa para el link y el QR, y deja
de anunciar `dungeonsandphones.local`:

```bash
DUNGEONS_PUBLIC_IP=192.168.1.42 uv run run.py
# también acepta una URL: DUNGEONS_PUBLIC_IP=http://192.168.1.42
```

Además hay que exponer el puerto `8000` hacia la red. En ChromeOS:
**Configuración → Acerca de ChromeOS → Desarrolladores → Linux → Port
forwarding → agregar 8000/TCP**.
