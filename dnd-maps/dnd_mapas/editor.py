"""El Editor: dueño de la sesión y de todas las reglas para editar el mapa (colocar, mover, paredes, personajes).
No sabe nada de Tk: le avisa a la vista lo que cambió. Se prueba sin ventana usando una vista falsa."""
from __future__ import annotations
import math, time, uuid
from dataclasses import dataclass
from PIL import Image
from .herramientas import Mover
from .items import Item, Jugador, Luz, Personaje, Zona
from .mapa import Mapa
from .render import Superposicion, olvidar_niebla_explorada


class VistaNula:
    """Lo que el Editor necesita de una vista. La de Tk reemplaza estos avisos; los tests usan una que los registra."""
    def repintar(self): pass               # hay que volver a dibujar el mapa
    def reconstruir_filas(self): pass      # cambió la lista de jugadores, luces o personajes
    def iniciar_animacion(self): pass      # hay una animación nueva: hay que llamar a avanzar_animaciones() cada cuadro
    def herramienta_cambiada(self): pass   # cambió la herramienta activa (clave_herramienta)


@dataclass
class Puntero:
    """Dónde está el mouse, ya traducido a las unidades del mapa."""
    col: int; fila: int            # casilla
    vertice: tuple                 # vértice de la grilla más cercano
    x_imagen: float; y_imagen: float   # píxeles de la imagen original
    escala: float                  # píxeles de pantalla por píxel de imagen


@dataclass
class Animacion:
    item: Item; col_inicio: float; fila_inicio: float; col_destino: int; fila_destino: int
    inicio: float; duracion: float; casillas: float; mapa: Mapa; recordadas: int = 0


class Editor:
    def __init__(self, sesion, vista=None):
        self.sesion, self.vista = sesion, vista or VistaNula()
        self.imagen: Image.Image | None = None   # imagen PIL del mapa abierto
        self.geometria: tuple[float, float, float] | None = None   # (desfase_x, desfase_y, escala) con que se dibujó el mapa en pantalla: para ubicar clics
        self.extra = Superposicion()  # selección, vista previa, pared en curso, fichas en movimiento
        self._mover = Mover(); self.herramienta, self.clave_herramienta = self._mover, None
        self._animaciones = {}        # item -> Animacion (una por item: la nueva cancela la anterior)

    @property
    def mapa(self): return self.sesion.mapa

    @property
    def tam_imagen(self):
        if self.imagen is None: raise RuntimeError('No hay un mapa abierto')
        return self.imagen.size

    # --- mapa abierto, opciones y ajustes
    def abrir_mapa(self, ruta):
        """Abre un mapa. Si falla, lanza la excepción y deja todo como estaba."""
        try: imagen = Image.open(ruta); imagen.load()
        except Exception:
            if self.imagen is None: self.sesion.mapa_actual = None
            raise
        if self.imagen is not None: self.sesion.guardar_posiciones()   # el mapa que se deja conserva dónde quedaron las fichas
        self.imagen, self.sesion.mapa_actual = imagen, ruta; mapa = self.sesion.mapas.setdefault(ruta, Mapa())
        self._animaciones.clear(); self.extra.animadas.clear()          # corta animaciones pendientes
        self.sesion.aplicar_posiciones(mapa)
        for item in self.sesion.jugadores + mapa.luces: mapa.acotar(item, imagen.size)   # la grilla de este mapa puede ser distinta
        self.vista.reconstruir_filas(); self.vista.repintar()

    def cambiar_opcion(self, nombre, valor): setattr(self.sesion.opciones, nombre, valor); self.vista.repintar()

    def cambiar_ajuste_mapa(self, ajuste, valor):
        if self.sesion.mapa_actual:
            mapa = self.mapa; setattr(mapa, ajuste, valor)
            for item in self.sesion.jugadores + mapa.luces: mapa.acotar(item, self.tam_imagen)
            self.vista.repintar()

    def activar_recuerdo(self, activado):
        self.sesion.opciones.recordar_recorrido = activado
        if activado and self.sesion.mapa_actual:
            for jugador in self.sesion.jugadores: self.recordar(jugador)
        self.vista.repintar()

    def olvidar_zonas(self):
        if self.sesion.mapa_actual:
            self.mapa.explorado.clear(); olvidar_niebla_explorada()
            for jugador in self.sesion.jugadores: self.recordar(jugador)
            self.vista.repintar()

    def recordar(self, item, mapa=None, col=None, fila=None):
        """Guarda la zona que ve el item (solo con la memoria activada; sin rangos no ilumina). col/fila: otra casilla del recorrido."""
        if not (self.sesion.opciones.recordar_recorrido and item.con_vision and max(item.rango_fuerte, item.rango_tenue) > 0): return
        zona, mapa = Zona.de(item, col, fila), self.mapa if mapa is None else mapa
        if zona not in mapa.explorado: mapa.explorado.append(zona)

    # --- jugadores, luces y personajes
    def fabrica_jugador(self, personaje=None):
        def crear(col, fila):
            numero = self.sesion.proximo_id; self.sesion.proximo_id += 1
            return Jugador.nuevo(numero, col, fila, personaje)
        return crear

    def fabrica_luz(self): return lambda col, fila: Luz(col=col, fila=fila)

    def agregar_item(self, item):
        self.mapa.acotar(item, self.tam_imagen)
        (self.sesion.jugadores if isinstance(item, Jugador) else self.mapa.luces).append(item)
        self.extra.seleccion = item; self.recordar(item); self.vista.reconstruir_filas(); self.vista.repintar()

    def quitar_item(self, item):
        (self.sesion.jugadores if isinstance(item, Jugador) else self.mapa.luces).remove(item)
        if self.extra.seleccion is item: self.extra.seleccion = None
        self._animaciones.pop(item, None); self.extra.animadas.pop(item, None)
        self.vista.reconstruir_filas(); self.vista.repintar()

    def cambiar_lado(self, item, lado):
        item.lado = lado; self.mapa.acotar(item, self.tam_imagen); self.vista.repintar()

    def cambiar_vision(self, item, con_vision):
        item.con_vision = con_vision
        if self.sesion.mapa_actual: self.recordar(item)
        self.vista.repintar()

    def guardar_personaje(self, jugador):
        """Crea el personaje en la biblioteca, o actualiza el que esta ficha ya usa."""
        personaje = next((p for p in self.sesion.personajes if p.id == jugador.id_personaje), None)
        if personaje is None: personaje = Personaje(id=uuid.uuid4().hex[:8]); self.sesion.personajes.append(personaje); jugador.id_personaje = personaje.id
        personaje.actualizar_desde(jugador); self.vista.reconstruir_filas()

    def borrar_personaje(self, personaje): self.sesion.personajes.remove(personaje); self.vista.reconstruir_filas()

    def borrar_paredes(self): self.mapa.paredes.clear(); self.vista.repintar()

    # --- herramientas
    def usar_herramienta(self, clave, herramienta):
        """Activa la herramienta; si ya era la activa, vuelve a Mover."""
        activa = self.clave_herramienta; self.volver_a_mover()
        if activa != clave: self.herramienta, self.clave_herramienta = herramienta, clave
        self.vista.herramienta_cambiada()

    def volver_a_mover(self):
        self.herramienta, self.clave_herramienta = self._mover, None; self.extra.pared_en_curso = None; self.vista.herramienta_cambiada()

    def _puntero(self, x, y):
        if not self.geometria: return None
        desfase_x, desfase_y, escala = self.geometria; mapa = self.mapa; x_imagen, y_imagen = (x - desfase_x) / escala, (y - desfase_y) / escala
        return Puntero(math.floor((x_imagen - mapa.desfase_x) / mapa.tam_casilla), math.floor((y_imagen - mapa.desfase_y) / mapa.tam_casilla),
                       mapa.vertice_mas_cercano(self.tam_imagen, x_imagen, y_imagen), x_imagen, y_imagen, escala)

    def apretar(self, x, y):
        puntero = self._puntero(x, y)
        if puntero: self.herramienta.apretar(self, puntero)

    def arrastrar(self, x, y):
        puntero = self._puntero(x, y)
        if puntero: self.herramienta.arrastrar(self, puntero)

    def soltar(self): self.herramienta.soltar(self)

    def mover_seleccion(self, delta_col, delta_fila):
        item = self.extra.seleccion
        if item is not None: self.mover(item, item.col + delta_col, item.fila + delta_fila)

    # --- movimiento
    def destino_para(self, item, col, fila):
        """Casilla a la que realmente llegaría el item si se lo manda a (col, fila): dentro del mapa y sin atravesar paredes."""
        col, fila = self.mapa.limitar(self.tam_imagen, item.lado, col, fila)
        return self.mapa.destino_alcanzable(item, col, fila)

    def mover(self, item, col, fila, ahora=None):
        """Desliza el item hasta la casilla con aceleración suave; la visión (y la memoria, si está activa) lo acompaña."""
        col_destino, fila_destino = self.destino_para(item, col, fila)
        col_inicio, fila_inicio = self.extra.animadas.get(item, (item.col, item.fila))
        item.col, item.fila = col_destino, fila_destino
        casillas = max(abs(col_destino - col_inicio), abs(fila_destino - fila_inicio))
        self._animaciones[item] = Animacion(item, col_inicio, fila_inicio, col_destino, fila_destino, time.time() if ahora is None else ahora,
                                            max(.2, casillas / 6), casillas, self.mapa)
        self.extra.animadas[item] = (col_inicio, fila_inicio)
        self.vista.iniciar_animacion()

    def avanzar_animaciones(self, ahora=None):
        """Avanza todas las animaciones hasta 'ahora'. Devuelve True mientras quede alguna en marcha."""
        ahora = time.time() if ahora is None else ahora
        for item, a in list(self._animaciones.items()):
            avance = min(1, (ahora - a.inicio) / a.duracion); avance_suave = avance * avance * (3 - 2 * avance)
            self.extra.animadas[item] = (a.col_inicio + (a.col_destino - a.col_inicio) * avance_suave, a.fila_inicio + (a.fila_destino - a.fila_inicio) * avance_suave)
            while a.recordadas < int(a.casillas) and avance_suave * a.casillas >= a.recordadas + 1:   # recuerda cada casilla que va pasando
                a.recordadas += 1; proporcion = a.recordadas / a.casillas
                self.recordar(item, a.mapa, round(a.col_inicio + (a.col_destino - a.col_inicio) * proporcion), round(a.fila_inicio + (a.fila_destino - a.fila_inicio) * proporcion))
            if avance >= 1: del self._animaciones[item]; del self.extra.animadas[item]; self.recordar(item, a.mapa)
        return bool(self._animaciones)
