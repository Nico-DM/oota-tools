"""Mapas D&D: ventana del DM + ventana de jugadores. Requiere Pillow>=10.1. Uso: python dnd.py

El código vive en la carpeta dnd_mapas/:
  items.py         Jugador, Luz, Zona y Personaje (campos, valores por defecto y cómo se guardan)
  mapa.py          un mapa: grilla, luces, paredes, zonas exploradas; geometría y colisión con paredes
  sesion.py        todo lo que se guarda entre usos (opciones, mapas, jugadores, personajes)
  persistencia.py  guardar y cargar la sesión en dnd_estado.json (y leer formatos viejos)
  rutas.py         rutas relativas al estado, para que funcione en cualquier computadora
  render.py        dibujo: grilla, niebla de guerra, luces, sombras de paredes, fichas
  editor.py        las reglas para editar el mapa (no sabe nada de Tk)
  herramientas.py  las herramientas del mouse: mover, colocar, dibujar y borrar paredes
  vista_tk.py      la ventana (adaptador delgado entre Tk y el Editor)
"""
from dnd_mapas.vista_tk import main

if __name__ == '__main__': main()
