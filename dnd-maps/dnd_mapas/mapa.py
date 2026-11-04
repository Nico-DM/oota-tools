"""Un mapa concreto: grilla, luces, zonas exploradas, paredes y dónde está cada jugador. Sabe de geometría y de paredes."""
from __future__ import annotations
import math
from dataclasses import dataclass, field
from .items import Luz, Zona


def _orientacion(a, b, c): return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])   # >0, <0 o 0 según de qué lado de a-b cae c

def _dentro_de_caja(punto, a, b): return min(a[0], b[0]) <= punto[0] <= max(a[0], b[0]) and min(a[1], b[1]) <= punto[1] <= max(a[1], b[1])

def segmentos_se_tocan(p, q, a, b):
    """True si el segmento p-q cruza o toca el segmento a-b (también si pasa justo por una punta)."""
    o1, o2, o3, o4 = _orientacion(a, b, p), _orientacion(a, b, q), _orientacion(p, q, a), _orientacion(p, q, b)
    if o1 * o2 < 0 and o3 * o4 < 0: return True
    return ((o1 == 0 and _dentro_de_caja(p, a, b)) or (o2 == 0 and _dentro_de_caja(q, a, b))
            or (o3 == 0 and _dentro_de_caja(a, p, q)) or (o4 == 0 and _dentro_de_caja(b, p, q)))

def distancia_a_segmento(punto, extremo_a, extremo_b):
    (px, py), (ax, ay), (bx, by) = punto, extremo_a, extremo_b; dx, dy = bx - ax, by - ay; largo_cuadrado = dx * dx + dy * dy
    t = 0 if largo_cuadrado == 0 else max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / largo_cuadrado))
    return math.hypot(px - (ax + t * dx), py - (ay + t * dy))

def camino_bloqueado(paredes, origen, destino):
    """True si ir en línea recta de origen a destino (puntos en unidades de casilla) atraviesa alguna pared."""
    for ax, ay, bx, by in paredes:
        a, b = (ax, ay), (bx, by)
        if _orientacion(a, b, origen) == 0 and _dentro_de_caja(origen, a, b): continue   # parado justo sobre una pared: esa no lo traba
        if segmentos_se_tocan(origen, destino, a, b): return True
    return False


@dataclass
class Mapa:
    tam_casilla: int = 70
    desfase_x: int = 0
    desfase_y: int = 0
    luces: list = field(default_factory=list)
    explorado: list = field(default_factory=list)     # lista de Zona
    paredes: list = field(default_factory=list)       # [[vértice_x1, vértice_y1, vértice_x2, vértice_y2], ...] (vértices de la grilla, no píxeles)
    posiciones: dict = field(default_factory=dict)    # {id del jugador (texto): [col, fila]} en este mapa

    @classmethod
    def desde_dict(cls, datos):
        return cls(datos.get('tam_casilla', 70), datos.get('desfase_x', 0), datos.get('desfase_y', 0),
                   [Luz.desde_dict(l) for l in datos.get('luces', [])], [Zona.desde_dict(z) for z in datos.get('explorado', [])],
                   [list(p) for p in datos.get('paredes', [])], dict(datos.get('posiciones', {})))

    def a_dict(self):
        return dict(tam_casilla=self.tam_casilla, desfase_x=self.desfase_x, desfase_y=self.desfase_y, luces=[l.a_dict() for l in self.luces],
                    explorado=[z.a_dict() for z in self.explorado], paredes=self.paredes, posiciones=self.posiciones)

    def limitar(self, tam_imagen, lado, col, fila):
        """(col, fila) más cercana que deja el centro de un bloque de 'lado' casillas dentro del mapa."""
        resultado = []
        for valor, desfase, limite in ((col, self.desfase_x, tam_imagen[0]), (fila, self.desfase_y, tam_imagen[1])):
            minimo = math.ceil(-desfase / self.tam_casilla - lado / 2); maximo = math.floor((limite - desfase) / self.tam_casilla - lado / 2)
            resultado.append(min(max(valor, minimo), max(minimo, maximo)))
        return tuple(resultado)

    def acotar(self, item, tam_imagen):
        """Deja el centro del item dentro del mapa (si no, no se podría volver a agarrar)."""
        item.col, item.fila = self.limitar(tam_imagen, item.lado, item.col, item.fila)

    def vertice_mas_cercano(self, tam_imagen, x_imagen, y_imagen):
        """Vértice de la grilla (esquina entre casillas) más cercano a un punto en píxeles de la imagen, dentro del mapa."""
        vertice = []
        for desfase, limite, coordenada in ((self.desfase_x, tam_imagen[0], x_imagen), (self.desfase_y, tam_imagen[1], y_imagen)):
            minimo = math.ceil(-desfase / self.tam_casilla); maximo = math.floor((limite - desfase) / self.tam_casilla)
            vertice.append(min(max(round((coordenada - desfase) / self.tam_casilla), minimo), max(minimo, maximo)))
        return tuple(vertice)

    def pared_mas_cercana(self, x_imagen, y_imagen, tolerancia):
        """Índice de la pared más cercana al punto (en píxeles de la imagen), o None si ninguna está a menos de la tolerancia."""
        a_pixeles = lambda vx, vy: (vx * self.tam_casilla + self.desfase_x, vy * self.tam_casilla + self.desfase_y)
        mejor, mejor_distancia = None, tolerancia
        for indice, (ax, ay, bx, by) in enumerate(self.paredes):
            distancia = distancia_a_segmento((x_imagen, y_imagen), a_pixeles(ax, ay), a_pixeles(bx, by))
            if distancia <= mejor_distancia: mejor, mejor_distancia = indice, distancia
        return mejor

    def destino_alcanzable(self, item, col_destino, fila_destino):
        """Casilla más lejana que el item puede alcanzar yendo hacia el destino: se frena antes de la primera pared.
        Solo frenan las paredes a los items con tapada_por_paredes."""
        if not self.paredes or not item.tapada_por_paredes: return col_destino, fila_destino
        origen = (item.col + item.mitad, item.fila + item.mitad); alcanzada = (item.col, item.fila)
        pasos = max(abs(col_destino - item.col), abs(fila_destino - item.fila))
        for paso in range(1, pasos + 1):   # mismas casillas intermedias que recorre la animación
            siguiente = (round(item.col + (col_destino - item.col) * paso / pasos), round(item.fila + (fila_destino - item.fila) * paso / pasos))
            if camino_bloqueado(self.paredes, origen, (siguiente[0] + item.mitad, siguiente[1] + item.mitad)): break
            alcanzada = siguiente
        return alcanzada
