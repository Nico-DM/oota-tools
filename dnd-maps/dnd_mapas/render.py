"""Dibujo del mapa: grilla, niebla de guerra (con luces fuertes/tenues y sombras de paredes), fichas y ayudas del DM."""
from __future__ import annotations
import math
from dataclasses import dataclass, field
from functools import lru_cache
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont
from .items import Item, Zona

# caches para no recalcular en cada cuadro de la animación
_cache_degradados, _cache_mapa_escalado, _cache_niebla_explorada, _cache_mapa_con_grilla, _cache_caras = {}, {}, {}, {}, {}


@dataclass
class Superposicion:
    """Lo que se dibuja encima del mapa y no se guarda: selección, vista previa del movimiento, pared en curso, fichas en movimiento."""
    seleccion: Item | None = None
    vista_previa: tuple[Item, int, int] | None = None                  # (item, col_destino, fila_destino)
    pared_en_curso: tuple[tuple[int, int], tuple[int, int]] | None = None   # ((vx1, vy1), (vx2, vy2))
    animadas: dict[Item | Zona, tuple[float, float]] = field(default_factory=dict)   # item -> (col, fila) mientras se desliza (pueden ser decimales)


def olvidar_niebla_explorada(): _cache_niebla_explorada.clear()


@lru_cache(None)
def fuente(tamano): return ImageFont.load_default(tamano)


def luz_visible(tamano, centro, paredes):
    """Imagen 'L' de lo que alcanza a ver una luz ubicada en 'centro': 255 = visible, 0 = en sombra de alguna pared.
    Cada pared proyecta una sombra: el cuadrilátero que va desde la pared hasta bien lejos, alejándose de la luz."""
    visible = Image.new('L', tamano, 255); pincel = ImageDraw.Draw(visible); alcance = 3 * tamano[0]; hay_sombra = False
    for ax, ay, bx, by in paredes:
        if max(ax, bx) < 0 or min(ax, bx) > tamano[0] or max(ay, by) < 0 or min(ay, by) > tamano[1]: continue   # fuera del alcance de la luz
        lejanos = []
        for px, py in ((ax, ay), (bx, by)):
            dx, dy = px - centro[0], py - centro[1]; largo = math.hypot(dx, dy) or 1
            lejanos.append((px + dx / largo * alcance, py + dy / largo * alcance))
        pincel.polygon([(ax, ay), (bx, by), lejanos[1], lejanos[0]], fill=0); hay_sombra = True
    return visible.filter(ImageFilter.GaussianBlur(1)) if hay_sombra else visible   # bordes de sombra apenas suaves


def aclarar_niebla(mascara, centro_x, centro_y, radio_fuerte, radio_tenue, nivel_fuerte, nivel_tenue, paredes=(), visible=None):
    """Aclara la niebla con un círculo: nivel_fuerte hasta radio_fuerte, nivel_tenue hasta radio_tenue, borde suave.
    Los niveles van de 0 (sin niebla) a 255 (niebla total). paredes = segmentos (x1, y1, x2, y2) en píxeles de la máscara que tapan la luz.
    visible = máscara 'L' del tamaño de la niebla (255 = lo ve algún jugador): fuera de ella la luz no aclara nada."""
    radio_tenue = max(2, int(radio_tenue)); clave = (int(radio_fuerte), radio_tenue, nivel_fuerte, nivel_tenue)
    if clave not in _cache_degradados:
        proporcion_fuerte = int(radio_fuerte) / radio_tenue
        def suavizar(t, desde, hasta):   # 0 antes de "desde", 1 después de "hasta", transición suave en el medio
            u = 0 if t <= desde else 1 if t >= hasta else (t - desde) / (hasta - desde); return u * u * (3 - 2 * u)
        # el degradado de Pillow vale ~180 en el borde del círculo y llega a 255 recién en las esquinas
        tabla = [int(nivel_fuerte
                     + (nivel_tenue - nivel_fuerte) * (1 if proporcion_fuerte <= 0 else suavizar(min(1, v / 180), proporcion_fuerte * .8, proporcion_fuerte))
                     + (255 - nivel_tenue) * suavizar(min(1, v / 180), .88, 1)) for v in range(256)]
        _cache_degradados[clave] = Image.radial_gradient('L').resize((2 * radio_tenue, 2 * radio_tenue)).point(tabla)
    esquina = (int(centro_x - radio_tenue), int(centro_y - radio_tenue))
    region = esquina + (esquina[0] + 2 * radio_tenue, esquina[1] + 2 * radio_tenue)
    estampa = _cache_degradados[clave]
    if paredes:   # lo que queda detrás de una pared recibe niebla total
        locales = [(ax - esquina[0], ay - esquina[1], bx - esquina[0], by - esquina[1]) for ax, ay, bx, by in paredes]
        estampa = ImageChops.lighter(estampa, ImageChops.invert(luz_visible(estampa.size, (centro_x - esquina[0], centro_y - esquina[1]), locales)))
    if visible is not None:   # una luz solo se ve donde algún jugador tiene línea de visión
        estampa = ImageChops.lighter(estampa, ImageChops.invert(visible.crop(region)))
    mascara.paste(ImageChops.darker(mascara.crop(region), estampa), esquina)


def cara_de_ficha(ruta_imagen, diametro):
    """Imagen de la ficha recortada en círculo (None si no se puede abrir)."""
    if (ruta_imagen, diametro) not in _cache_caras:
        if len(_cache_caras) > 80: _cache_caras.clear()
        try:
            foto = Image.open(ruta_imagen).convert('RGB'); ancho, alto = foto.size; lado = min(ancho, alto)
            foto = foto.crop(((ancho - lado) // 2, (alto - lado) // 2, (ancho + lado) // 2, (alto + lado) // 2)).resize((diametro, diametro))
            recorte = Image.new('L', (diametro * 4, diametro * 4)); ImageDraw.Draw(recorte).ellipse((0, 0, diametro * 4 - 1, diametro * 4 - 1), fill=255)
            _cache_caras[ruta_imagen, diametro] = (foto, recorte.resize((diametro, diametro), Image.Resampling.LANCZOS))
        except Exception: _cache_caras[ruta_imagen, diametro] = None
    return _cache_caras[ruta_imagen, diametro]


def dibujar_mapa(imagen_mapa, sesion, ancho_disponible, alto_disponible, es_dm, extra=None):
    """Devuelve (imagen lista para mostrar, escala). es_dm=True: la niebla se ve translúcida y aparecen luces y paredes.
    extra = Superposicion con lo que va encima (selección, vista previa, pared en curso, fichas en movimiento)."""
    mapa, opciones, ruta = sesion.mapa, sesion.opciones, sesion.mapa_actual; extra = extra or Superposicion()
    ancho_orig, alto_orig = imagen_mapa.size; escala = min(ancho_disponible / ancho_orig, alto_disponible / alto_orig)
    ancho, alto = max(1, int(ancho_orig * escala)), max(1, int(alto_orig * escala))
    if (ruta, ancho, alto) not in _cache_mapa_escalado:
        if len(_cache_mapa_escalado) > 6: _cache_mapa_escalado.clear()
        _cache_mapa_escalado[ruta, ancho, alto] = imagen_mapa.convert('RGB').resize((ancho, alto))
    casilla_px = mapa.tam_casilla * escala
    clave_grilla = (ruta, ancho, alto, opciones.grilla_visible, opciones.opacidad_grilla, mapa.tam_casilla, mapa.desfase_x, mapa.desfase_y)
    if clave_grilla not in _cache_mapa_con_grilla:   # mapa + grilla se calculan una vez, no en cada cuadro de la animación
        if len(_cache_mapa_con_grilla) > 6: _cache_mapa_con_grilla.clear()
        base = _cache_mapa_escalado[ruta, ancho, alto]
        if opciones.grilla_visible:
            capa = Image.new('RGBA', (ancho, alto)); pincel = ImageDraw.Draw(capa); color_linea = (255, 255, 255, int(2.55 * opciones.opacidad_grilla))
            x = (mapa.desfase_x * escala) % casilla_px
            while x < ancho: pincel.line([(x, 0), (x, alto)], color_linea); x += casilla_px
            y = (mapa.desfase_y * escala) % casilla_px
            while y < alto: pincel.line([(0, y), (ancho, y)], color_linea); y += casilla_px
            base = Image.alpha_composite(base.convert('RGBA'), capa).convert('RGB')
        _cache_mapa_con_grilla[clave_grilla] = base
    imagen = _cache_mapa_con_grilla[clave_grilla].copy()

    def centro_de(col, fila, lado):   # centro de un bloque de casillas, en píxeles
        return (((col + lado / 2) * mapa.tam_casilla + mapa.desfase_x) * escala, ((fila + lado / 2) * mapa.tam_casilla + mapa.desfase_y) * escala)
    def centro_px(item):   # si el item se está deslizando, en su posición de ahora
        col, fila = extra.animadas.get(item, (item.col, item.fila)); return centro_de(col, fila, item.lado)
    def a_pixeles(vertice, desfase): return (vertice * mapa.tam_casilla + desfase) * escala   # vértice de la grilla -> píxel
    paredes_px = [(a_pixeles(ax, mapa.desfase_x), a_pixeles(ay, mapa.desfase_y), a_pixeles(bx, mapa.desfase_x), a_pixeles(by, mapa.desfase_y))
                  for ax, ay, bx, by in mapa.paredes]

    if opciones.niebla_visible:
        escala_niebla = .5   # la niebla se calcula a media resolución: es suave y así es más rápida
        ancho_niebla, alto_niebla = max(1, int(ancho * escala_niebla)), max(1, int(alto * escala_niebla))
        niebla_base = int(2.55 * opciones.opacidad_niebla); mascara = Image.new('L', (ancho_niebla, alto_niebla), niebla_base)
        jugadores_con_vision = [j for j in sesion.jugadores if j.con_vision]
        paredes_niebla = [tuple(c * escala_niebla for c in pared) for pared in paredes_px]
        def aclarar(destino, item, nivel_fuerte, nivel_tenue, todo_fuerte=False, visible=None):   # todo_fuerte: también la zona tenue se ve como luz fuerte
            radio_fuerte, radio_tenue = item.radios_px(casilla_px)
            if radio_tenue > 0:
                cx, cy = centro_px(item)
                paredes = paredes_niebla if item.tapada_por_paredes else ()
                aclarar_niebla(destino, cx * escala_niebla, cy * escala_niebla, (radio_tenue if todo_fuerte else radio_fuerte) * escala_niebla,
                               radio_tenue * escala_niebla, nivel_fuerte, nivel_tenue, paredes, visible)
        def visibilidad_de_jugadores():
            """Lo que ve al menos un jugador con visión, sin límite de distancia pero tapado por las paredes."""
            visible = Image.new('L', (ancho_niebla, alto_niebla), 0)
            for jugador in jugadores_con_vision:
                if not jugador.tapada_por_paredes: return Image.new('L', (ancho_niebla, alto_niebla), 255)
                cx, cy = centro_px(jugador)
                visible = ImageChops.lighter(visible, luz_visible((ancho_niebla, alto_niebla), (cx * escala_niebla, cy * escala_niebla), paredes_niebla))
            return visible
        visible_jugadores = visibilidad_de_jugadores() if mapa.luces and not es_dm else None   # en la ventana de jugadores, las luces solo aclaran lo que ve un jugador
        if opciones.recordar_recorrido and mapa.explorado:
            clave_explorada = (ruta, ancho, alto, len(mapa.explorado), mapa.tam_casilla, mapa.desfase_x, mapa.desfase_y, niebla_base,
                               tuple(map(tuple, mapa.paredes)))
            if clave_explorada not in _cache_niebla_explorada:
                if len(_cache_niebla_explorada) > 6: _cache_niebla_explorada.clear()
                mascara_explorada = mascara.copy()
                for zona in mapa.explorado: aclarar(mascara_explorada, zona, 0, 0, todo_fuerte=True)
                _cache_niebla_explorada[clave_explorada] = mascara_explorada
            mascara = _cache_niebla_explorada[clave_explorada].copy()
        for jugador in jugadores_con_vision: aclarar(mascara, jugador, 0, int(niebla_base * .5))
        for luz in mapa.luces: aclarar(mascara, luz, 0, int(niebla_base * .5), visible=visible_jugadores)
        if es_dm: mascara = mascara.point(lambda v: v // 2)   # el DM ve el mapa a través de la niebla
        imagen = Image.composite(Image.new('RGB', (ancho, alto)), imagen, mascara.resize((ancho, alto), Image.Resampling.BILINEAR))

    pincel = ImageDraw.Draw(imagen)
    def dibujar_ficha(item, color_relleno, letra, color_borde):
        cx, cy = centro_px(item); radio = casilla_px * .4 * item.lado
        cara = cara_de_ficha(item.imagen, max(4, int(2 * radio))) if item.imagen else None
        if cara: imagen.paste(cara[0], (int(cx - cara[0].width / 2), int(cy - cara[0].height / 2)), cara[1])
        pincel.ellipse((cx - radio, cy - radio, cx + radio, cy + radio), fill=None if cara else color_relleno,
                       outline='#ffd700' if item is extra.seleccion else color_borde, width=max(2, int(casilla_px * .07)))
        if not cara: pincel.text((cx, cy), letra, fill='#111', font=fuente(max(10, int(radio))), anchor='mm')
    if es_dm:   # las paredes solo las ve el DM
        ancho_pared = max(3, int(casilla_px * .12))
        for ax, ay, bx, by in paredes_px: pincel.line([(ax, ay), (bx, by)], fill='#ff8a00', width=ancho_pared)
        if extra.pared_en_curso:
            (ax, ay), (bx, by) = extra.pared_en_curso
            pincel.line([(a_pixeles(ax, mapa.desfase_x), a_pixeles(ay, mapa.desfase_y)), (a_pixeles(bx, mapa.desfase_x), a_pixeles(by, mapa.desfase_y))], fill='#ffd24d', width=ancho_pared)
    if es_dm:
        for luz in mapa.luces: dibujar_ficha(luz, luz.color, '*', '#7a4b00')
    for jugador in sesion.jugadores: dibujar_ficha(jugador, jugador.color, (jugador.nombre or '?')[0].upper(), '#fff')
    if extra.vista_previa:   # vista previa del movimiento: línea + cantidad de casillas (la diagonal cuenta 1)
        item, col_destino, fila_destino = extra.vista_previa
        casillas = max(abs(col_destino - item.col), abs(fila_destino - item.fila))
        if casillas:
            origen, destino = centro_de(item.col, item.fila, item.lado), centro_de(col_destino, fila_destino, item.lado)
            radio = casilla_px * .4 * item.lado; largo = math.hypot(destino[0] - origen[0], destino[1] - origen[1]) or 1
            pincel.line([origen, destino], fill=item.color, width=max(3, int(casilla_px * .1)))
            pincel.ellipse((destino[0] - radio, destino[1] - radio, destino[0] + radio, destino[1] + radio), outline=item.color, width=max(2, int(casilla_px * .07)))
            # el texto va al costado de la línea (desplazado en perpendicular)
            texto_x = (origen[0] + destino[0]) / 2 - (destino[1] - origen[1]) / largo * casilla_px * .6
            texto_y = (origen[1] + destino[1]) / 2 + (destino[0] - origen[0]) / largo * casilla_px * .6
            texto = f"{casillas} casilla{'s' * (casillas > 1)}"; fuente_texto = fuente(max(10, int(casilla_px * .4)))
            caja = pincel.textbbox((texto_x, texto_y), texto, font=fuente_texto, anchor='mm')
            pincel.rectangle((caja[0] - 4, caja[1] - 2, caja[2] + 4, caja[3] + 2), fill='#000')
            pincel.text((texto_x, texto_y), texto, fill='#fff', font=fuente_texto, anchor='mm')
    return imagen, escala
