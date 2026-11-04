"""Guardar y cargar la sesión en un archivo JSON (y leer los formatos de versiones anteriores)."""
import json, os
from .sesion import Sesion

# Nombres que usaba el archivo de estado en versiones anteriores del programa (se convierten al cargar).
_CLAVES_ESTADO_VIEJAS = dict(grid='grilla_visible', fog='niebla_visible', gop='opacidad_grilla', fop='opacidad_niebla',
                             mem='recordar_recorrido', img='mapa_actual', players='jugadores', maps='mapas', chars='personajes',
                             nid='proximo_id', dir='carpeta', font='tamano_texto')
_CLAVES_ITEM_VIEJAS = dict(x='col', y='fila', r='rango_fuerte', r2='rango_tenue', s='lado', c='color', n='nombre',
                           v='con_vision', img='imagen', cid='id_personaje')
_CLAVES_MAPA_VIEJAS = dict(cell='tam_casilla', gx='desfase_x', gy='desfase_y', lights='luces', explored='explorado')

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

def guardar_sesion(sesion, ruta):
    with open(ruta + '.tmp', 'w', encoding='utf-8') as archivo: json.dump(sesion.a_dict(), archivo, ensure_ascii=False)
    os.replace(ruta + '.tmp', ruta)   # escritura atómica: un cierre a mitad no deja el archivo roto

def cargar_sesion(ruta):
    """La sesión guardada, o una vacía si no hay archivo. Un archivo dañado se conserva como .bak."""
    try:
        with open(ruta, encoding='utf-8') as archivo: return Sesion.desde_dict(migrar_formato_viejo(json.load(archivo)))
    except FileNotFoundError: return Sesion()
    except (OSError, ValueError): os.replace(ruta, ruta + '.bak'); return Sesion()
