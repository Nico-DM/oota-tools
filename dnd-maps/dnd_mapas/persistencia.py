"""Guardar y cargar la sesión en un archivo JSON (y leer los formatos de versiones anteriores)."""
import json, os, re
from . import rutas
from .sesion import Sesion

# Nombres que usaba el archivo de estado en versiones anteriores del programa (se convierten al cargar).
_CLAVES_ESTADO_VIEJAS = dict(grid='grilla_visible', fog='niebla_visible', gop='opacidad_grilla', fop='opacidad_niebla',
                             mem='recordar_recorrido', img='mapa_actual', players='jugadores', maps='mapas', chars='personajes',
                             nid='proximo_id', dir='carpeta', font='tamano_texto')
_CLAVES_ITEM_VIEJAS = dict(x='col', y='fila', r='rango_fuerte', r2='rango_tenue', s='lado', c='color', n='nombre',
                           v='con_vision', img='imagen', cid='id_personaje')
_CLAVES_MAPA_VIEJAS = dict(cell='tam_casilla', gx='desfase_x', gy='desfase_y', lights='luces', explored='explorado')

_EXTENSIONES_IMAGEN = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.avif')
_DIRECTORIOS_IGNORADOS = {'.git', '.venv', '__pycache__', 'node_modules'}

def _renombrar(datos, claves): return {claves.get(k, k): v for k, v in datos.items()}

def migrar_formato_viejo(datos):
    if not any(k in datos for k in ('players', 'maps', 'grid')): return datos
    datos = _renombrar(datos, _CLAVES_ESTADO_VIEJAS)
    for lista in ('jugadores', 'personajes'):
        datos[lista] = [_renombrar(i, _CLAVES_ITEM_VIEJAS) for i in datos.get(lista, [])]
    datos['mapas'] = {ruta: _renombrar(dict(m, lights=[_renombrar(l, _CLAVES_ITEM_VIEJAS) for l in m.get('lights', [])],
                                            explored=[_renombrar(z, _CLAVES_ITEM_VIEJAS) for z in m.get('explored', [])]), _CLAVES_MAPA_VIEJAS)
                      for ruta, m in datos.get('mapas', {}).items()}
    return datos


# --- rutas: en el archivo se guardan relativas a dnd_estado.json; en memoria son absolutas

def _indice_de_archivos(base):
    """{ruta relativa en minúsculas: ruta completa} de las imágenes dentro del proyecto."""
    indice = {}
    for raiz, directorios, archivos in os.walk(base):
        directorios[:] = [d for d in directorios if d not in _DIRECTORIOS_IGNORADOS and not d.startswith('.')]
        for nombre in archivos:
            if nombre.lower().endswith(_EXTENSIONES_IMAGEN):
                completa = os.path.join(raiz, nombre)
                indice[os.path.relpath(completa, base).replace(os.sep, '/').casefold()] = completa
    return indice

def _variantes_de_capitulo(componentes):
    """'Chapter 11' (formato viejo) y 'chapter_11' (formato actual) son la misma carpeta."""
    yield componentes
    normalizadas = [re.sub(r'^chapter\s+(\d+)$', lambda m: f'chapter_{int(m.group(1)):02d}', parte, flags=re.IGNORECASE)
                    for parte in componentes]
    if normalizadas != componentes: yield normalizadas

def _buscar_archivo_viejo(ruta, indice):
    """Ubica una ruta absoluta de otra computadora por el final de su recorrido (carpeta y nombre)."""
    componentes = rutas.partes(ruta)
    for inicio in range(len(componentes)):
        for variante in _variantes_de_capitulo(componentes[inicio:]):
            clave = '/'.join(parte.casefold() for parte in variante)
            for candidato in (clave, 'maps/' + clave):
                if candidato in indice: return indice[candidato]
            coincidencias = [completa for relativa, completa in indice.items() if relativa.endswith('/' + clave)]
            if len(coincidencias) == 1: return coincidencias[0]
    return None

def _resolver_archivo(ruta, base, indice):
    if not ruta: return ruta
    resuelta = rutas.resolver(ruta, base)
    if os.path.exists(resuelta): return resuelta
    if rutas.es_absoluta(ruta): return _buscar_archivo_viejo(ruta, indice) or resuelta
    return resuelta

def _resolver_carpeta(ruta, base):
    if not ruta: return ruta
    resuelta = rutas.resolver(ruta, base)
    if os.path.isdir(resuelta): return resuelta
    if rutas.es_absoluta(ruta):
        maps = os.path.join(base, 'maps')
        if os.path.basename(rutas.normalizar(ruta)).casefold() in ('maps', 'dnd-maps') and os.path.isdir(maps): return maps
        return resuelta
    return resuelta

def migrar_rutas(datos, base):
    """Pasa a absolutas las rutas guardadas (relativas al JSON, o absolutas de otra PC)."""
    datos = dict(datos); indice = _indice_de_archivos(base); correspondencia, mapas = {}, {}
    for ruta, mapa in datos.get('mapas', {}).items():
        nueva = _resolver_archivo(ruta, base, indice); correspondencia[ruta] = nueva; mapas[nueva] = mapa
    datos['mapas'] = mapas
    actual = datos.get('mapa_actual')
    if actual in correspondencia: datos['mapa_actual'] = correspondencia[actual]
    elif actual: datos['mapa_actual'] = _resolver_archivo(actual, base, indice)
    if datos.get('carpeta'): datos['carpeta'] = _resolver_carpeta(datos['carpeta'], base)
    for lista in ('jugadores', 'personajes'):
        for item in datos.get(lista, []):
            if item.get('imagen'): item['imagen'] = _resolver_archivo(item['imagen'], base, indice)
    return datos

def rutas_relativas(datos, base):
    """Pasa a relativas (y con '/') las rutas que se van a guardar."""
    datos = dict(datos)
    datos['mapas'] = {rutas.a_relativa(ruta, base): mapa for ruta, mapa in datos.get('mapas', {}).items()}
    if datos.get('mapa_actual'): datos['mapa_actual'] = rutas.a_relativa(datos['mapa_actual'], base)
    if datos.get('carpeta'): datos['carpeta'] = rutas.a_relativa(datos['carpeta'], base)
    for lista in ('jugadores', 'personajes'):
        for item in datos.get(lista, []):
            if item.get('imagen'): item['imagen'] = rutas.a_relativa(item['imagen'], base)
    return datos


def guardar_sesion(sesion, ruta):
    base = os.path.dirname(os.path.abspath(ruta)); datos = rutas_relativas(sesion.a_dict(), base)
    with open(ruta + '.tmp', 'w', encoding='utf-8') as archivo: json.dump(datos, archivo, ensure_ascii=False)
    os.replace(ruta + '.tmp', ruta)   # escritura atómica: un cierre a mitad no deja el archivo roto

def cargar_sesion(ruta):
    """La sesión guardada, o una vacía si no hay archivo. Un archivo dañado se conserva como .bak."""
    base = os.path.dirname(os.path.abspath(ruta))
    try:
        with open(ruta, encoding='utf-8') as archivo: datos = json.load(archivo)
        return Sesion.desde_dict(migrar_rutas(migrar_formato_viejo(datos), base))
    except FileNotFoundError: return Sesion()
    except (OSError, ValueError, TypeError, AttributeError):
        try: os.replace(ruta, ruta + '.bak')
        except OSError: pass
        return Sesion()
