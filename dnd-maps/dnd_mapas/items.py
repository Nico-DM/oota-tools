"""Items del mapa. Cada clase define en UN solo lugar sus campos, sus valores por defecto y cómo se guarda."""
from __future__ import annotations
from dataclasses import Field, dataclass, fields
from typing import Any, ClassVar

COLORES_FICHA = ['#e5484d', '#3e9bff', '#46c37b', '#f5a524', '#a66bff', '#ff7ac6']
TAMANOS_FICHA = ['1 cubo', '4 cubos', '9 cubos', '16 cubos']   # lado 1, 2, 3, 4
CAMPOS_PERSONAJE = ('nombre', 'color', 'rango_fuerte', 'rango_tenue', 'lado', 'imagen', 'tapada_por_paredes')


class _Guardable:
    """Se guarda como dict con sus campos; al cargar, lo que falte toma el valor por defecto y lo que sobre se ignora."""
    __dataclass_fields__: ClassVar[dict[str, Field[Any]]]   # solo para el verificador de tipos: las clases hijas son dataclasses
    @classmethod
    def desde_dict(cls, datos):
        nombres = {campo.name for campo in fields(cls)}
        return cls(**{clave: valor for clave, valor in datos.items() if clave in nombres})

    def a_dict(self): return {campo.name: getattr(self, campo.name) for campo in fields(self)}


class _Iluminador(_Guardable):
    """Algo que ilumina: rango fuerte (se ve todo) y tenue (media luz), en casillas; 0 = no ilumina. Ocupa un bloque de lado x lado casillas."""
    col: int; fila: int; rango_fuerte: int; rango_tenue: int; lado: int   # solo para el verificador de tipos: los definen las clases hijas
    @property
    def mitad(self): return self.lado / 2

    def radios_px(self, casilla_px):
        """(radio fuerte, radio tenue) en píxeles; el tenue llega al menos hasta el fuerte."""
        fuerte, tenue = self.rango_fuerte, max(self.rango_fuerte, self.rango_tenue)
        return ((fuerte + self.mitad) * casilla_px if fuerte > 0 else 0), ((tenue + self.mitad) * casilla_px if tenue > 0 else 0)

    def ocupa(self, col, fila): return 0 <= col - self.col < self.lado and 0 <= fila - self.fila < self.lado


@dataclass(eq=False)   # eq=False: dos items son el mismo solo si son el mismo objeto
class Item(_Iluminador):
    """Lo que se puede arrastrar por el mapa: un jugador o una luz. Las paredes tapan su luz y su paso si tapada_por_paredes."""
    col: int = 0           # casilla de la esquina superior izquierda
    fila: int = 0
    rango_fuerte: int = 0
    rango_tenue: int = 0
    tapada_por_paredes: bool = True
    color: str = '#ffffff'
    lado = 1               # casillas por lado; las luces siempre ocupan 1 (no se guarda)
    con_vision = True
    imagen = None
    id_personaje = None


@dataclass(eq=False)
class Jugador(Item):
    id: int = 0
    nombre: str = ''
    lado: int = 1
    con_vision: bool = True
    imagen: str | None = None
    id_personaje: str | None = None

    @classmethod
    def nuevo(cls, numero, col, fila, personaje=None):
        """Jugador genérico, o copia de un personaje guardado."""
        jugador = cls(id=numero, nombre=f'Jugador {numero}', color=COLORES_FICHA[numero % 6], col=col, fila=fila, rango_fuerte=1)
        if personaje:
            for campo in CAMPOS_PERSONAJE: setattr(jugador, campo, getattr(personaje, campo))
            jugador.id_personaje = personaje.id
        return jugador


@dataclass(eq=False)
class Luz(Item):
    color: str = '#ffcf5a'


@dataclass(frozen=True)
class Zona(_Iluminador):
    """Lo que un item iluminó en algún momento (la memoria del recorrido). Inmutable: dos zonas iguales son la misma."""
    col: int = 0
    fila: int = 0
    rango_fuerte: int = 0
    rango_tenue: int = 0
    lado: int = 1
    tapada_por_paredes: bool = True

    @classmethod
    def de(cls, item, col=None, fila=None):
        return cls(item.col if col is None else col, item.fila if fila is None else fila, item.rango_fuerte, item.rango_tenue, item.lado, item.tapada_por_paredes)


@dataclass
class Personaje(_Guardable):
    """Ficha guardada en la biblioteca para reutilizarla."""
    id: str = ''
    nombre: str = ''
    color: str = '#ffffff'
    rango_fuerte: int = 1
    rango_tenue: int = 0
    lado: int = 1
    imagen: str | None = None
    tapada_por_paredes: bool = True

    def actualizar_desde(self, jugador):
        for campo in CAMPOS_PERSONAJE: setattr(self, campo, getattr(jugador, campo))
