import json, os, tempfile
from PIL import Image
from dnd_mapas.editor import Editor, VistaNula
from dnd_mapas.herramientas import BorrarPared, Colocar, DibujarPared
from dnd_mapas.items import Jugador, Luz, Personaje, Zona
from dnd_mapas.mapa import Mapa, segmentos_se_tocan, distancia_a_segmento
from dnd_mapas.persistencia import cargar_sesion, guardar_sesion
from dnd_mapas.render import Superposicion, dibujar_mapa, olvidar_niebla_explorada
from dnd_mapas.sesion import Sesion

BLANCO, NEGRO = (255, 255, 255), (0, 0, 0)

def escena(imagen=(200, 100), casilla=20, jugadores=(), luces=(), **opciones):
    """Sesión con un mapa 't' (y su imagen en blanco) listo para dibujar."""
    sesion = Sesion(mapa_actual='t', jugadores=list(jugadores)); sesion.mapas['t'] = Mapa(tam_casilla=casilla, luces=list(luces))
    for nombre, valor in opciones.items(): setattr(sesion.opciones, nombre, valor)
    return sesion, sesion.mapa, Image.new('RGB', imagen, 'white')

def pixel(sesion, imagen, x, y, es_dm=False, extra=None):
    valor = dibujar_mapa(imagen, sesion, imagen.width, imagen.height, es_dm, extra)[0].getpixel((x, y)); assert isinstance(valor, tuple); return valor

class VistaFalsa(VistaNula):
    """Registra los avisos que recibe del Editor."""
    def __init__(self): self.avisos = []
    def repintar(self): self.avisos.append('repintar')
    def reconstruir_filas(self): self.avisos.append('filas')
    def iniciar_animacion(self): self.avisos.append('animar')
    def herramienta_cambiada(self): self.avisos.append('herramienta')


def test_luces_y_niebla():
    ana = Jugador(id=1, nombre='A', color='#f00', col=1, fila=1, rango_fuerte=1)
    sesion, mapa, imagen = escena(jugadores=[ana]); px = lambda x, y, **k: pixel(sesion, imagen, x, y, **k)
    assert px(44, 30) == BLANCO and max(px(190, 90)) < 30                       # fuerte: se ve; lejos: niebla
    ana.rango_fuerte, ana.rango_tenue = 0, 2; assert 100 < px(50, 30)[0] < 160   # solo tenue: media luz
    assert abs(px(30, 70)[0] - px(70, 30)[0]) < 6 and abs(px(30, 80)[0] - px(80, 30)[0]) < 6   # redonda
    ana.rango_fuerte, ana.rango_tenue = 1, 3; assert px(44, 30) == BLANCO and 100 < px(85, 30)[0] < 160   # fuerte adentro, tenue afuera
    grande = Image.new('RGB', (300, 200), 'white'); ana.col, ana.fila, ana.rango_fuerte, ana.rango_tenue = 7, 5, 3, 0   # solo fuerte: círculo, no cuadrado
    assert pixel(sesion, grande, 200, 110) == BLANCO and max(pixel(sesion, grande, 205, 165)) < 30
    ana.col, ana.fila, ana.rango_fuerte = 1, 1, 1
    sesion.opciones.opacidad_niebla = 0; assert px(190, 90) == BLANCO           # opacidad 0 = sin niebla
    sesion.opciones.opacidad_niebla = 97; mapa.luces.append(Luz(col=1, fila=1, rango_fuerte=1)); ana.con_vision = False
    assert px(44, 30) == BLANCO                                                  # una luz despeja la niebla
    mapa.luces[0].rango_fuerte = 0; assert max(px(44, 30)) < 30                 # sin rangos no ilumina
    mapa.luces[0].rango_fuerte = 1; sesion.opciones.opacidad_niebla = 100
    assert px(44, 30) == BLANCO and max(px(190, 90)) < 3                         # opacidad máxima: se ve lo que ilumina, el resto negro
    ana.con_vision = True; mapa.luces.clear(); assert px(30, 30) != NEGRO       # y la ficha se sigue viendo
    sesion.opciones.opacidad_niebla = 97; ana.lado = 2
    assert px(58, 40) == BLANCO                                                  # ficha de 4 cubos ilumina desde su centro
    ana.rango_fuerte = 0; assert max(px(58, 40)) < 30; ana.rango_fuerte = 1
    extra = Superposicion(animadas={ana: (5.0, 1.0)})                            # deslizándose: la visión sigue a la ficha
    assert max(pixel(sesion, imagen, 58, 40, extra=extra)) < 30 and pixel(sesion, imagen, 5 * 20 + 20 + 18, 40, extra=extra) == BLANCO
    dibujar_mapa(imagen, sesion, 200, 100, True, Superposicion(seleccion=ana, vista_previa=(ana, 5, 1), pared_en_curso=((1, 1), (3, 2))))   # ayudas del DM
    ana.lado = 1; d = tempfile.mkdtemp(); cara = os.path.join(d, 'f.png'); Image.new('RGB', (30, 20), (0, 0, 255)).save(cara)   # ficha con imagen
    ana.imagen = cara; assert px(30, 30) == (0, 0, 255)
    ana.imagen = os.path.join(d, 'no.png'); assert px(30, 30) != (0, 0, 255)     # archivo inexistente: vuelve al color


def test_paredes_y_memoria():
    luz = Luz(col=7, fila=5, rango_fuerte=4); sesion, mapa, _ = escena(luces=[luz]); imagen = Image.new('RGB', (300, 200), 'white')
    px = lambda x, y, **k: pixel(sesion, imagen, x, y, **k)
    assert px(200, 110) == BLANCO and px(100, 110) == BLANCO
    mapa.paredes.append([9, 3, 9, 8])
    assert max(px(200, 110)) < 30 and px(100, 110) == BLANCO and px(170, 110) == BLANCO   # tapa lo de atrás, no lo de adelante
    luz.tapada_por_paredes = False; assert px(200, 110) == BLANCO; luz.tapada_por_paredes = True
    assert px(200, 110, es_dm=True) != BLANCO                                    # el DM ve la pared y la niebla a través
    sesion.opciones.recordar_recorrido = True; zona = Zona(7, 5, 4, 0, 1, True); mapa.explorado.append(zona); mapa.luces.clear()
    assert px(100, 110) == BLANCO and max(px(200, 110)) < 30                     # la memoria también respeta las paredes
    mapa.explorado[0] = Zona(7, 5, 4, 0, 1, False); olvidar_niebla_explorada(); assert px(200, 110) == BLANCO   # (la caché solo ve cuántas zonas hay, no cambios en el lugar)
    mapa.explorado[0] = Zona(1, 1, 1, 3, 1, True); olvidar_niebla_explorada(); assert px(30 + 55, 30) == BLANCO   # lo recorrido: luz fuerte, tenue incluido
    sesion.opciones.recordar_recorrido = False; assert max(px(30 + 55, 30)) < 30  # sin memoria no se ve


def test_items():
    j = Jugador.nuevo(3, 4, 5); assert (j.id, j.nombre, j.col, j.fila, j.rango_fuerte, j.rango_tenue, j.lado, j.tapada_por_paredes, j.con_vision) == (3, 'Jugador 3', 4, 5, 1, 0, 1, True, True)
    assert set(j.a_dict()) == {'id', 'nombre', 'color', 'col', 'fila', 'rango_fuerte', 'rango_tenue', 'lado', 'con_vision', 'imagen', 'id_personaje', 'tapada_por_paredes'}
    assert set(Luz(col=1, fila=1).a_dict()) == {'col', 'fila', 'rango_fuerte', 'rango_tenue', 'color', 'tapada_por_paredes'} and Luz().lado == 1   # la luz no guarda 'lado'
    assert set(Zona().a_dict()) == {'col', 'fila', 'rango_fuerte', 'rango_tenue', 'lado', 'tapada_por_paredes'}
    assert Jugador.desde_dict({'id': 2, 'nombre': 'X', 'col': 1, 'fila': 2, 'sobra': 9}).lado == 1   # lo que falta toma su valor; lo que sobra se ignora
    p = Personaje(id='abc', nombre='Elfo', color='#0f0', rango_fuerte=2, rango_tenue=4, lado=2, imagen='x.png', tapada_por_paredes=False)
    e = Jugador.nuevo(9, 0, 0, p); assert (e.nombre, e.rango_tenue, e.lado, e.imagen, e.id_personaje, e.tapada_por_paredes) == ('Elfo', 4, 2, 'x.png', 'abc', False)
    e.nombre = 'Otro'; p.actualizar_desde(e); assert p.nombre == 'Otro'
    assert Zona.de(j) == Zona(4, 5, 1, 0, 1, True) and Zona.de(j, 7, 8) == Zona(7, 8, 1, 0, 1, True) and len({Zona.de(j), Zona.de(j)}) == 1
    assert Jugador(col=1) != Jugador(col=1) and (lambda a: a == a)(Jugador())   # los items se comparan por identidad
    assert e.ocupa(0, 0) and e.ocupa(1, 1) and not e.ocupa(2, 0)               # ficha de 2x2


def test_geometria_y_paredes():
    mapa = Mapa(tam_casilla=20, paredes=[[9, 3, 9, 8]]); imagen = (300, 200)
    for col, fila, lado in ((-50, 99, 1), (500, -9, 1), (-9, -9, 4), (99, 99, 4)):   # no salir del mapa
        c, f = mapa.limitar(imagen, lado, col, fila); assert 0 <= (c + lado / 2) * 20 <= 300 and 0 <= (f + lado / 2) * 20 <= 200
    assert mapa.limitar(imagen, 1, 3, 2) == (3, 2)
    assert mapa.vertice_mas_cercano(imagen, 189, 61) == (9, 3) and mapa.vertice_mas_cercano(imagen, -500, 9999) == (0, 10)
    assert mapa.pared_mas_cercana(183, 100, 10) == 0 and mapa.pared_mas_cercana(250, 100, 10) is None
    assert abs(distancia_a_segmento((5, 5), (0, 0), (10, 0)) - 5) < 1e-9 and abs(distancia_a_segmento((15, 0), (0, 0), (10, 0)) - 5) < 1e-9
    assert segmentos_se_tocan((0, 0), (2, 2), (0, 2), (2, 0)) and not segmentos_se_tocan((0, 0), (1, 0), (0, 1), (1, 1))
    ir = lambda col, fila, a, b, lado=1, tapada=True: mapa.destino_alcanzable(Jugador(col=col, fila=fila, lado=lado, tapada_por_paredes=tapada), a, b)
    assert ir(5, 5, 8, 5) == (8, 5) and ir(5, 5, 12, 5) == (8, 5) and ir(5, 5, 12, 8) == (8, 6)   # la pared frena en la última casilla antes de cruzar
    assert ir(5, 5, 12, 5, tapada=False) == (12, 5)                              # si las paredes no la afectan, la atraviesa
    assert ir(5, 5, 12, -2) == (12, -2) and ir(5, 5, 12, 0) == (10, 1)           # por encima de la punta pasa; si la roza, frena antes
    assert ir(5, 2, 12, 2) == (12, 2) and ir(5, 9, 12, 9) == (12, 9)             # por arriba y por abajo de la pared no hay nada que cruzar
    assert ir(9, 5, 5, 5) == (9, 5) and ir(8, 5, 9, 5) == (8, 5) and ir(5, 5, 5, 5) == (5, 5)
    assert ir(7, 5, 12, 5, lado=2) == (7, 5)                                     # ficha de 4 cubos: su centro no puede caer sobre la pared
    mapa.paredes = [[9, 6, 9, 8], [9, 6, 11, 6]]; assert ir(8, 5, 9, 6) == (8, 5) and ir(8, 5, 10, 7) == (8, 5)   # esquina en L
    mapa.paredes = [[5, 5, 6, 6]]; assert ir(5, 5, 5, 8) == (5, 8)               # parada sobre una pared diagonal: puede salir
    assert Mapa().destino_alcanzable(Jugador(col=1, fila=1), 4, 4) == (4, 4)     # mapa sin paredes


def test_guardado():
    carpeta = tempfile.mkdtemp(); archivo = os.path.join(carpeta, 'e.json'); cara = os.path.join(carpeta, 'f.png')
    ana = Jugador(id=1, nombre='Ana', color='#f00', col=6, fila=6, rango_fuerte=1, rango_tenue=2, lado=2, imagen=cara, id_personaje='abc')
    sesion = Sesion(jugadores=[ana], personajes=[Personaje(id='abc', nombre='Elfo', rango_fuerte=2, rango_tenue=4)], mapa_actual='t', proximo_id=7, carpeta='/mapas', tamano_texto=13)
    sesion.mapas['t'] = Mapa(tam_casilla=50, luces=[Luz(col=2, fila=2, rango_fuerte=1, rango_tenue=3)], explorado=[Zona(1, 1, 1, 2, 1, True)], paredes=[[9, 3, 9, 8]])
    sesion.mapas['q'] = Mapa(posiciones={'1': [9, 4]}); sesion.opciones.opacidad_niebla = 60
    guardar_sesion(sesion, archivo); datos = json.load(open(archivo))
    assert datos['mapas']['t']['posiciones'] == {'1': [6, 6]} and sesion.mapas['t'].posiciones == {}   # guardar anota las posiciones del mapa abierto sin tocar la sesión
    nueva = cargar_sesion(archivo)
    assert (nueva.proximo_id, nueva.carpeta, nueva.tamano_texto, nueva.mapa_actual, nueva.opciones.opacidad_niebla) == (7, '/mapas', 13, os.path.join(carpeta, 't'), 60)
    assert nueva.jugadores[0].a_dict() == ana.a_dict() and nueva.personajes[0].nombre == 'Elfo' and nueva.mapas[os.path.join(carpeta, 'q')].posiciones == {'1': [9, 4]}
    assert nueva.mapas[os.path.join(carpeta, 't')].luces[0].rango_tenue == 3 and nueva.mapas[os.path.join(carpeta, 't')].explorado == [Zona(1, 1, 1, 2, 1, True)] and nueva.mapas[os.path.join(carpeta, 't')].paredes == [[9, 3, 9, 8]]
    assert cargar_sesion(os.path.join(carpeta, 'no_existe.json')) == Sesion()    # sin archivo: sesión vacía
    open(archivo, 'w').write('{roto'); assert cargar_sesion(archivo) == Sesion() and os.path.exists(archivo + '.bak')   # archivo dañado: se conserva como .bak
    viejo = dict(grid=True, fog=True, gop=35, fop=80, mem=True, img='t', nid=4, dir='/x', font=13,   # formato de una versión anterior
                 players=[dict(id=1, n='Ana', c='#f00', x=2, y=3, r=1, r2=2, s=2, v=True, img=None, cid=None)],
                 maps={'t': dict(cell=50, gx=5, gy=6, lights=[dict(x=1, y=1, r=2, r2=4, c='#ff0')], explored=[dict(x=4, y=4, r=1, r2=2, s=1)])},
                 chars=[dict(id='abc', n='Elfo', c='#0f0', r=2, r2=4, s=1, img=None)])
    json.dump(viejo, open(archivo, 'w')); v = cargar_sesion(archivo)
    assert (v.proximo_id, v.tamano_texto, v.opciones.opacidad_niebla, v.opciones.recordar_recorrido) == (4, 13, 80, True) and v.jugadores[0].nombre == 'Ana' and v.jugadores[0].tapada_por_paredes
    assert v.mapas[os.path.join(carpeta, 't')].tam_casilla == 50 and v.mapas[os.path.join(carpeta, 't')].luces[0].rango_tenue == 4 and v.mapas[os.path.join(carpeta, 't')].explorado[0].lado == 1 and v.mapas[os.path.join(carpeta, 't')].paredes == [] and v.personajes[0].tapada_por_paredes


def test_rutas_relativas():
    carpeta = tempfile.mkdtemp(); archivo = os.path.join(carpeta, 'dnd_estado.json')
    mapa = os.path.join(carpeta, 'maps', 'chapter_11', 'Gravenhollow', 'mapa.png'); os.makedirs(os.path.dirname(mapa))
    cara = os.path.join(carpeta, 'fichas', 'ana.png'); os.makedirs(os.path.dirname(cara))
    Image.new('RGB', (10, 10), 'white').save(mapa); Image.new('RGB', (10, 10), 'white').save(cara)
    sesion = Sesion(mapa_actual=mapa, carpeta=os.path.join(carpeta, 'maps'), jugadores=[Jugador(id=1, imagen=cara)],
                    personajes=[Personaje(id='ana', imagen=cara)])
    sesion.mapas[mapa] = Mapa(tam_casilla=42)
    guardar_sesion(sesion, archivo); datos = json.load(open(archivo))
    assert list(datos['mapas']) == ['maps/chapter_11/Gravenhollow/mapa.png']       # relativa al dnd_estado.json
    assert datos['mapa_actual'] == 'maps/chapter_11/Gravenhollow/mapa.png' and datos['carpeta'] == 'maps'
    assert datos['jugadores'][0]['imagen'] == 'fichas/ana.png' and datos['personajes'][0]['imagen'] == 'fichas/ana.png'
    nueva = cargar_sesion(archivo)
    assert nueva.mapa_actual == mapa and nueva.carpeta == os.path.join(carpeta, 'maps') and list(nueva.mapas) == [mapa]
    assert nueva.jugadores[0].imagen == cara and nueva.personajes[0].imagen == cara and nueva.mapa.tam_casilla == 42


def test_migracion_rutas_viejas():
    carpeta = tempfile.mkdtemp(); archivo = os.path.join(carpeta, 'dnd_estado.json')
    actual = os.path.join(carpeta, 'maps', 'chapter_11', 'Gravenhollow', 'Gravenhollow-DM-Notes.png')
    os.makedirs(os.path.dirname(actual)); Image.new('RGB', (10, 10), 'white').save(actual)
    vieja = 'C:/Users/eleze/Desktop/MAPS\\Chapter 11\\Gravenhollow\\Gravenhollow-DM-Notes.png'
    json.dump({'mapa_actual': vieja, 'carpeta': '/var/home/nico/workspace/github.com/Nico-DM/oota/dnd-maps',
               'mapas': {vieja: {'tam_casilla': 70}}}, open(archivo, 'w'))
    sesion = cargar_sesion(archivo)
    assert sesion.mapa_actual == actual and list(sesion.mapas) == [actual] and sesion.mapa.tam_casilla == 70
    assert sesion.carpeta == os.path.join(carpeta, 'maps')   # la carpeta vieja ya no existe: se usa maps/
    guardar_sesion(sesion, archivo); datos = json.load(open(archivo))
    assert datos['mapa_actual'] == 'maps/chapter_11/Gravenhollow/Gravenhollow-DM-Notes.png' and datos['carpeta'] == 'maps'


def test_editor():
    d = tempfile.mkdtemp(); ruta_a, ruta_b = os.path.join(d, 'a.png'), os.path.join(d, 'b.png')
    Image.new('RGB', (300, 200), 'white').save(ruta_a); Image.new('RGB', (400, 300), 'white').save(ruta_b)
    vista = VistaFalsa(); sesion = Sesion(); editor = Editor(sesion, vista); editor.abrir_mapa(ruta_a); editor.geometria = (0, 0, 1.0)   # 1 px de pantalla = 1 px de imagen
    assert sesion.mapa_actual == ruta_a and 'filas' in vista.avisos and 'repintar' in vista.avisos
    clic = lambda col, fila: (col * 70 + 35, fila * 70 + 35)                      # centro de una casilla (casilla = 70 px por defecto)
    sesion.mapas[ruta_a].tam_casilla = 20; clic = lambda col, fila: (col * 20 + 10, fila * 20 + 10)

    editor.usar_herramienta('colocar_jugador', Colocar(editor.fabrica_jugador())); assert editor.clave_herramienta == 'colocar_jugador'
    editor.apretar(*clic(7, 5)); ana = sesion.jugadores[0]                       # colocar: crea el jugador donde se hizo clic y vuelve a Mover
    assert (ana.col, ana.fila, ana.nombre) == (7, 5, 'Jugador 1') and sesion.proximo_id == 2 and editor.clave_herramienta is None and editor.extra.seleccion is ana
    editor.usar_herramienta('colocar_luz', Colocar(editor.fabrica_luz())); editor.apretar(*clic(2, 2)); luz = editor.mapa.luces[0]
    assert (luz.col, luz.fila, luz.rango_fuerte) == (2, 2, 0)
    editor.usar_herramienta('colocar_luz', Colocar(editor.fabrica_luz())); editor.usar_herramienta('colocar_luz', None)   # tocar el mismo botón cancela
    assert editor.clave_herramienta is None
    editor.usar_herramienta('colocar_jugador', Colocar(editor.fabrica_jugador(Personaje(id='p', nombre='Gigante', lado=3)))); editor.apretar(*clic(10, 5))
    assert (sesion.jugadores[1].col, sesion.jugadores[1].fila, sesion.jugadores[1].lado) == (9, 4, 3)   # un bloque grande queda centrado en el clic
    editor.quitar_item(sesion.jugadores[1]); assert len(sesion.jugadores) == 1

    editor.usar_herramienta('dibujar_pared', DibujarPared())                      # dibujar una pared entre dos vértices
    editor.apretar(181, 61); editor.arrastrar(181, 161); assert editor.extra.pared_en_curso == ((9, 3), (9, 8)); editor.soltar()
    assert editor.mapa.paredes == [[9, 3, 9, 8]] and editor.extra.pared_en_curso is None
    editor.apretar(181, 161); editor.arrastrar(181, 61); editor.soltar(); editor.apretar(181, 61); editor.soltar()   # repetida (al revés) o sin recorrido: se ignora
    assert editor.mapa.paredes == [[9, 3, 9, 8]]
    editor.usar_herramienta('borrar_pared', BorrarPared()); editor.apretar(300, 100); assert len(editor.mapa.paredes) == 1   # lejos: no borra
    editor.apretar(183, 100); assert editor.mapa.paredes == []
    editor.volver_a_mover(); editor.mapa.paredes.append([9, 3, 9, 8])

    sesion.opciones.recordar_recorrido = True; ana.rango_fuerte = 2
    editor.apretar(*clic(7, 5)); assert editor.extra.seleccion is ana             # mover: agarrar y arrastrar muestra la vista previa frenada por la pared
    editor.arrastrar(*clic(12, 5)); assert editor.extra.vista_previa == (ana, 8, 5)
    editor.soltar(); assert editor.extra.vista_previa is None and (ana.col, ana.fila) == (8, 5)
    assert editor.extra.animadas[ana] == (7, 5) and 'animar' in vista.avisos     # empieza en la casilla de origen
    assert editor.avanzar_animaciones(ahora=editor._animaciones[ana].inicio + .05) is True and 7 < editor.extra.animadas[ana][0] < 8   # a mitad de camino
    assert editor.avanzar_animaciones(ahora=editor._animaciones[ana].inicio + 5) is False and ana not in editor.extra.animadas   # termina
    assert Zona.de(ana) in editor.mapa.explorado                                  # y recordó lo que vio al llegar
    editor.mover_seleccion(1, 0); assert (ana.col, ana.fila) == (8, 5)            # con flechas también frena
    editor.mover_seleccion(0, 1); assert (ana.col, ana.fila) == (8, 6)
    editor.mover(ana, 8, 8, ahora=0); editor.avanzar_animaciones(ahora=.1); editor.mover(ana, 8, 6, ahora=.1)   # una animación nueva cancela la anterior
    assert len(editor._animaciones) == 1 and (ana.col, ana.fila) == (8, 6)
    editor.avanzar_animaciones(ahora=9); assert not editor.extra.animadas
    luz.tapada_por_paredes = False; editor.mover(luz, 12, 2, ahora=0); editor.avanzar_animaciones(ahora=9); assert (luz.col, luz.fila) == (12, 2)   # la luz sin paredes se mueve libre
    ana.tapada_por_paredes = False; editor.mover(ana, 400, 400, ahora=0); editor.avanzar_animaciones(ahora=99); assert (ana.col, ana.fila) == (14, 9)   # y nadie sale del mapa (300x200 con casillas de 20)

    editor.cambiar_ajuste_mapa('tam_casilla', 100); assert (ana.col, ana.fila) == (2, 1)   # al agrandar las casillas, las fichas se acomodan dentro del mapa
    editor.cambiar_ajuste_mapa('tam_casilla', 20); editor.guardar_personaje(ana); p = sesion.personajes[0]   # personajes: crear, actualizar, borrar
    assert p.nombre == 'Jugador 1' and ana.id_personaje == p.id; ana.nombre = 'Renombrada'; editor.guardar_personaje(ana)
    assert len(sesion.personajes) == 1 and p.nombre == 'Renombrada'; editor.borrar_personaje(p); assert sesion.personajes == []

    ana.col, ana.fila = 3, 3; editor.abrir_mapa(ruta_b); assert sesion.mapas[ruta_a].posiciones == {'1': [3, 3]}   # cada mapa conserva dónde quedaron las fichas
    assert (ana.col, ana.fila) == (3, 3) and editor.tam_imagen == (400, 300) and not editor.extra.animadas
    ana.col, ana.fila = 1, 1; editor.abrir_mapa(ruta_a); assert (ana.col, ana.fila) == (3, 3)   # vuelve a donde estaba
    editor.abrir_mapa(ruta_b); assert (ana.col, ana.fila) == (1, 1)
    try: editor.abrir_mapa(os.path.join(d, 'no_existe.png')); assert False
    except Exception: assert sesion.mapa_actual == ruta_b                         # si falla, todo queda como estaba
    editor.borrar_paredes(); sesion2 = Sesion(); Editor(sesion2).cambiar_opcion('grilla_visible', False); assert sesion2.opciones.grilla_visible is False


test_luces_y_niebla(); test_paredes_y_memoria(); test_items(); test_geometria_y_paredes(); test_guardado(); test_rutas_relativas(); test_migracion_rutas_viejas(); test_editor(); print('ok')
