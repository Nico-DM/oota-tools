"""La sesión: todo lo que se guarda entre usos del programa (opciones, mapas, jugadores, personajes)."""
from __future__ import annotations
from dataclasses import dataclass, field
from .items import Jugador, Personaje
from .mapa import Mapa


@dataclass
class Opciones:
    grilla_visible: bool = True
    niebla_visible: bool = True
    opacidad_grilla: int = 35
    opacidad_niebla: int = 97
    recordar_recorrido: bool = False


@dataclass
class Sesion:
    opciones: Opciones = field(default_factory=Opciones)
    mapas: dict = field(default_factory=dict)          # ruta de la imagen -> Mapa
    jugadores: list = field(default_factory=list)
    personajes: list = field(default_factory=list)     # biblioteca de personajes guardados
    mapa_actual: str | None = None
    proximo_id: int = 1
    carpeta: str | None = None
    tamano_texto: int = 11

    @property
    def mapa(self): return self.mapas[self.mapa_actual]

    def _posiciones(self): return {str(j.id): [j.col, j.fila] for j in self.jugadores}

    def guardar_posiciones(self):
        """El mapa abierto recuerda dónde están los jugadores (al cambiar de mapa)."""
        if self.mapa_actual in self.mapas: self.mapa.posiciones = self._posiciones()

    def aplicar_posiciones(self, mapa):
        for jugador in self.jugadores:
            posicion = mapa.posiciones.get(str(jugador.id))
            if posicion: jugador.col, jugador.fila = posicion

    def a_dict(self):
        mapas = {ruta: mapa.a_dict() for ruta, mapa in self.mapas.items()}
        if self.mapa_actual in mapas: mapas[self.mapa_actual]['posiciones'] = self._posiciones()   # el mapa abierto: posiciones de ahora
        return dict(self.opciones.__dict__, mapa_actual=self.mapa_actual, jugadores=[j.a_dict() for j in self.jugadores], mapas=mapas,
                    personajes=[p.a_dict() for p in self.personajes], proximo_id=self.proximo_id, carpeta=self.carpeta, tamano_texto=self.tamano_texto)

    @classmethod
    def desde_dict(cls, datos):
        jugadores = [Jugador.desde_dict(j) for j in datos.get('jugadores', [])]
        return cls(Opciones(**{k: datos[k] for k in Opciones.__dataclass_fields__ if k in datos}),
                   {ruta: Mapa.desde_dict(m) for ruta, m in datos.get('mapas', {}).items()}, jugadores,
                   [Personaje.desde_dict(p) for p in datos.get('personajes', [])], datos.get('mapa_actual'),
                   max([datos.get('proximo_id', 1)] + [j.id + 1 for j in jugadores]), datos.get('carpeta'), datos.get('tamano_texto', 11))
