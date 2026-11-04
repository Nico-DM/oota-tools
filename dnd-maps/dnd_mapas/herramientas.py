"""Herramientas del mouse sobre el mapa. El Editor tiene una activa y le pasa apretar / arrastrar / soltar;
cada herramienta guarda su propio estado temporal."""


class Herramienta:
    def apretar(self, editor, puntero): pass
    def arrastrar(self, editor, puntero): pass
    def soltar(self, editor): pass


class Mover(Herramienta):
    """Agarra un jugador o una luz, muestra por dónde iría (vista previa) y lo mueve al soltar."""
    def __init__(self): self.item = None; self.agarre = (0, 0)   # agarre: casilla del item donde se lo agarró

    def apretar(self, editor, puntero):
        self.item = editor.extra.seleccion = next((i for i in editor.sesion.jugadores + editor.mapa.luces if i.ocupa(puntero.col, puntero.fila)), None)
        if self.item: self.agarre = (puntero.col - self.item.col, puntero.fila - self.item.fila)
        editor.vista.repintar()

    def arrastrar(self, editor, puntero):
        if self.item:
            editor.extra.vista_previa = (self.item, *editor.destino_para(self.item, puntero.col - self.agarre[0], puntero.fila - self.agarre[1]))
            editor.vista.repintar()

    def soltar(self, editor):
        item, vista_previa = self.item, editor.extra.vista_previa; self.item = None; editor.extra.vista_previa = None
        if item and vista_previa: editor.mover(item, vista_previa[1], vista_previa[2])
        editor.vista.repintar()


class Colocar(Herramienta):
    """Coloca un jugador o una luz (lo crea 'crear(col, fila)') donde se hace clic; después vuelve a Mover."""
    def __init__(self, crear): self.crear = crear

    def apretar(self, editor, puntero):
        item = self.crear(puntero.col, puntero.fila); corrimiento = (item.lado - 1) // 2   # un bloque grande queda centrado en el clic
        item.col, item.fila = puntero.col - corrimiento, puntero.fila - corrimiento
        editor.agregar_item(item); editor.volver_a_mover()


class DibujarPared(Herramienta):
    """Arrastrar entre dos vértices de la grilla crea una pared (queda activa para dibujar varias)."""
    def apretar(self, editor, puntero): editor.extra.pared_en_curso = (puntero.vertice, puntero.vertice)

    def arrastrar(self, editor, puntero):
        if editor.extra.pared_en_curso:
            editor.extra.pared_en_curso = (editor.extra.pared_en_curso[0], puntero.vertice); editor.vista.repintar()

    def soltar(self, editor):
        if editor.extra.pared_en_curso:
            inicio, fin = editor.extra.pared_en_curso; editor.extra.pared_en_curso = None; pared = [*inicio, *fin]; paredes = editor.mapa.paredes
            if inicio != fin and pared not in paredes and [*fin, *inicio] not in paredes: paredes.append(pared)
            editor.vista.repintar()


class BorrarPared(Herramienta):
    """Un clic sobre una pared (a menos de 12 px en pantalla) la borra."""
    def apretar(self, editor, puntero):
        indice = editor.mapa.pared_mas_cercana(puntero.x_imagen, puntero.y_imagen, 12 / puntero.escala)
        if indice is not None: editor.mapa.paredes.pop(indice); editor.vista.repintar()
