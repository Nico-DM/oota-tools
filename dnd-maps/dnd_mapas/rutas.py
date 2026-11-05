"""Rutas del proyecto: el estado guarda rutas relativas a dnd_estado.json, con barras '/'.

Así el mismo dnd_estado.json funciona en otra computadora (Windows, Linux o macOS)
aunque la carpeta del proyecto esté en otro lugar. El programa sigue trabajando
con rutas absolutas en memoria; la conversión ocurre solo al leer y escribir.
"""
from __future__ import annotations
import os
import re

_SEPARADORES = re.compile(r'[\\/]+')
_UNIDAD = re.compile(r'^[A-Za-z]:')


def partes(ruta):
    """Componentes de una ruta, aceptando tanto '\\' (Windows) como '/' (Unix)."""
    return [parte for parte in _SEPARADORES.split(os.fspath(ruta)) if parte not in ('', '.')]


def es_absoluta(ruta):
    """True también para rutas de Windows leídas en Linux ('C:/...', 'C:\\...')."""
    ruta = os.fspath(ruta)
    return bool(os.path.isabs(ruta) or _UNIDAD.match(ruta) or ruta.startswith(('\\\\', '//')))


def normalizar(ruta):
    """La ruta con los separadores del sistema, sin importar con cuáles se escribió."""
    ruta = os.fspath(ruta)
    if not ruta: return ruta
    if ruta.startswith(('\\\\', '//')):
        componentes = partes(ruta)
        return os.sep * 2 + os.path.join(*componentes) if componentes else os.sep * 2
    unidad = ruta[:2] if _UNIDAD.match(ruta) else ''
    resto = ruta[2:] if unidad else ruta
    componentes = partes(resto)
    if unidad: return unidad + os.sep + os.path.join(*componentes) if componentes else unidad + os.sep
    if resto.startswith(('/', '\\')): return os.sep + os.path.join(*componentes) if componentes else os.sep
    return os.path.join(*componentes) if componentes else '.'


def resolver(ruta, base):
    """La ruta absoluta correspondiente, tomando las relativas desde 'base'."""
    if not ruta: return ruta
    if es_absoluta(ruta): return normalizar(ruta)
    return os.path.normpath(os.path.join(base, *partes(ruta)))


def dentro_de(ruta, base):
    """True si la ruta cae dentro de la carpeta base."""
    try:
        return os.path.commonpath([os.path.abspath(ruta), os.path.abspath(base)]) == os.path.abspath(base)
    except ValueError:
        return False   # por ejemplo, otra unidad de disco en Windows


def a_relativa(ruta, base):
    """La forma que se guarda: relativa a 'base' y con '/', si la ruta se puede ubicar."""
    if not ruta: return ruta
    absoluta = resolver(ruta, base)
    # Una ruta absoluta que ya no existe y está fuera del proyecto se deja como está:
    # convertirla en algo como '../../C:/Users/...' no la haría más portable.
    if es_absoluta(ruta) and not os.path.exists(absoluta) and not dentro_de(absoluta, base): return ruta
    try:
        relativa = os.path.relpath(absoluta, base)
    except ValueError:
        return ruta   # otra unidad de disco en Windows: no hay ruta relativa posible
    return relativa.replace(os.sep, '/')
