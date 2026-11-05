"""Interfaz Tk: un adaptador delgado. Arma los widgets y traduce clics y controles en llamadas al Editor;
cuando el Editor avisa que algo cambió (vista.repintar, vista.reconstruir_filas...), vuelve a dibujar."""
from __future__ import annotations
import os
import sys
from dataclasses import dataclass, field, replace
from .editor import Editor
from .herramientas import BorrarPared, Colocar, DibujarPared
from .items import TAMANOS_FICHA, Jugador
from .persistencia import cargar_sesion, guardar_sesion
from .render import dibujar_mapa

RUTA_ESTADO = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'dnd_estado.json')   # junto a dnd.py


@dataclass
class _EstadoVentana:
    """Lo que solo le importa a la ventana (no a las reglas del mapa)."""
    archivos: list[str] = field(default_factory=list)   # rutas de los mapas de la carpeta elegida
    repintado_pendiente: str | None = None              # id del after() de Tk que va a repintar
    temporizador: str | None = None                     # id del after() de Tk de la animación
    panel_oculto: bool = False
    ancho_panel: int = 250


class _Vista:
    """Los avisos que el Editor le manda a la interfaz; main() los conecta a las funciones de Tk."""
    def __init__(self): self.repintar = self.reconstruir_filas = self.iniciar_animacion = self.herramienta_cambiada = lambda: None


def main():
    import tkinter as tk
    from tkinter import ttk, colorchooser, filedialog, messagebox, font as tkfont
    from PIL import ImageTk
    FONDO, BLANCO, ROJO = '#000000', '#ffffff', '#e02020'
    sesion = cargar_sesion(RUTA_ESTADO)   # sesión anterior: mapas, fichas, luces, personajes
    vista = _Vista(); editor = Editor(sesion, vista)
    ventana_dm = tk.Tk(); ventana_dm.title('Mesa del DM'); ventana_dm.geometry('1360x840'); ventana_dm.configure(bg=FONDO)
    if len(tkfont.families(ventana_dm)) <= 10:
        print('[dnd-maps] Aviso: este Tk no tiene Xft; las fuentes se van a ver pixeladas y sin '
              'antialiasing. Usá un Python con tkinter del sistema (python3-tkinter en Fedora/Bazzite); '
              'ver dnd-maps/README.md.', file=sys.stderr)
    ventana_jugadores = tk.Toplevel(ventana_dm); ventana_jugadores.title('Mapa de jugadores'); ventana_jugadores.geometry('1000x700+80+80')
    for opcion, valor in (('background', FONDO), ('foreground', BLANCO), ('selectBackground', ROJO), ('selectForeground', BLANCO)):
        ventana_dm.option_add(f'*TCombobox*Listbox.{opcion}', valor)
    fuente_negrita = tkfont.nametofont('TkDefaultFont').copy(); fuente_negrita.configure(weight='bold')
    estilo = ttk.Style(ventana_dm); estilo.theme_use('clam')
    estilo.configure('.', background=FONDO, foreground=BLANCO, fieldbackground=FONDO, bordercolor=ROJO, lightcolor=ROJO, darkcolor=ROJO,
                     troughcolor='#1a1a1a', focuscolor=FONDO, arrowcolor=BLANCO, insertcolor=BLANCO)
    estilo.configure('TButton', padding=(10, 6), background=FONDO); estilo.map('TButton', background=[('active', '#3a0000'), ('pressed', ROJO)])
    estilo.configure('Accent.TButton', background=ROJO); estilo.map('Accent.TButton', background=[('active', '#ff3b3b')])
    for clase_widget in ('TCheckbutton', 'TRadiobutton'):
        estilo.configure(clase_widget, indicatorforeground=BLANCO, upperbordercolor=ROJO, lowerbordercolor=ROJO)
        estilo.map(clase_widget, background=[('active', FONDO)], indicatorbackground=[('selected', ROJO), ('!selected', FONDO)])
    estilo.configure('TLabelframe', background=FONDO); estilo.configure('TLabelframe.Label', foreground=BLANCO, font=fuente_negrita.name)
    estilo.configure('Horizontal.TScale', background=ROJO)
    estilo.configure('Vertical.TScrollbar', background=ROJO, troughcolor='#1a1a1a', arrowcolor=BLANCO)
    estilo.map('TCombobox', fieldbackground=[('readonly', FONDO)], selectbackground=[('readonly', FONDO)], selectforeground=[('readonly', BLANCO)])

    ui = _EstadoVentana()
    fotos_en_canvas = {}

    # --- estructura: [botón] [mapas | canvas del DM] [controles]; el ancho de "mapas" se arrastra y se puede ocultar
    franja_izq = tk.Frame(ventana_dm, bg=FONDO, width=26); franja_izq.pack(side='left', fill='y')
    boton_panel = tk.Button(franja_izq, text='‹', bg=FONDO, fg=BLANCO, bd=0, highlightthickness=1, highlightbackground=ROJO,
                            activebackground='#3a0000', activeforeground=BLANCO, command=lambda: alternar_panel_mapas()); boton_panel.pack(pady=6, padx=2)
    contenedor_derecho = ttk.Frame(ventana_dm, width=380); contenedor_derecho.pack(side='right', fill='y'); contenedor_derecho.pack_propagate(False)
    lienzo_derecho = tk.Canvas(contenedor_derecho, bg=FONDO, highlightthickness=0)   # el panel de controles se desplaza si no entra en la ventana
    barra_derecha = ttk.Scrollbar(contenedor_derecho, orient='vertical', command=lienzo_derecho.yview); lienzo_derecho.configure(yscrollcommand=barra_derecha.set)
    barra_derecha.pack(side='right', fill='y'); lienzo_derecho.pack(side='left', fill='both', expand=True)
    panel_derecho = ttk.Frame(lienzo_derecho, padding=10); ventana_interna = lienzo_derecho.create_window((0, 0), window=panel_derecho, anchor='nw')
    panel_derecho.bind('<Configure>', lambda evento: lienzo_derecho.configure(scrollregion=lienzo_derecho.bbox('all')))
    lienzo_derecho.bind('<Configure>', lambda evento: lienzo_derecho.itemconfigure(ventana_interna, width=evento.width))
    rueda = lambda evento: lienzo_derecho.yview_scroll(-1 if evento.num == 4 or evento.delta > 0 else 1, 'units')
    lienzo_derecho.bind('<Enter>', lambda evento: [lienzo_derecho.bind_all(e, rueda) for e in ('<MouseWheel>', '<Button-4>', '<Button-5>')])
    lienzo_derecho.bind('<Leave>', lambda evento: [lienzo_derecho.unbind_all(e) for e in ('<MouseWheel>', '<Button-4>', '<Button-5>')])
    divisor = tk.PanedWindow(ventana_dm, orient='horizontal', sashwidth=6, bg=ROJO, bd=0, sashrelief='flat'); divisor.pack(side='left', fill='both', expand=True)
    panel_mapas = ttk.Frame(divisor, padding=10); canvas_dm = tk.Canvas(divisor, bg=FONDO, highlightthickness=0)
    divisor.add(panel_mapas, minsize=160, width=250); divisor.add(canvas_dm, minsize=300, stretch='always')
    canvas_jugadores = tk.Canvas(ventana_jugadores, bg=FONDO, highlightthickness=0); canvas_jugadores.pack(fill='both', expand=True)
    def alternar_panel_mapas():
        if ui.panel_oculto: divisor.add(panel_mapas, before=canvas_dm, minsize=160, width=ui.ancho_panel); boton_panel.config(text='‹')
        else: ui.ancho_panel = panel_mapas.winfo_width(); divisor.forget(panel_mapas); boton_panel.config(text='›')
        ui.panel_oculto = not ui.panel_oculto

    # --- dibujo en los dos canvas (el de jugadores no ve la vista previa ni las paredes en curso)
    def pintar(canvas, es_dm):
        ancho, alto = canvas.winfo_width(), canvas.winfo_height()
        if editor.imagen is None or ancho < 2 or alto < 2: canvas.delete('all'); fotos_en_canvas.pop(canvas, None); return
        extra = editor.extra if es_dm else replace(editor.extra, vista_previa=None, pared_en_curso=None)
        imagen, escala = dibujar_mapa(editor.imagen, sesion, ancho, alto, es_dm, extra)
        foto = fotos_en_canvas.get(canvas)
        if foto and foto[1:] == (ancho, alto, imagen.size): foto[0].paste(imagen)   # mismo tamaño: se actualiza la imagen en el lugar (más fluido)
        else:
            canvas.delete('all'); fotos_en_canvas[canvas] = (ImageTk.PhotoImage(imagen), ancho, alto, imagen.size)
            canvas.create_image(ancho // 2, alto // 2, image=fotos_en_canvas[canvas][0])
        if es_dm: editor.geometria = ((ancho - imagen.width) / 2, (alto - imagen.height) / 2, escala)
    def repintar_ahora(): ui.repintado_pendiente = None; pintar(canvas_dm, True); pintar(canvas_jugadores, False)
    def pedir_repintado():
        if not ui.repintado_pendiente: ui.repintado_pendiente = ventana_dm.after(15, repintar_ahora)
    for canvas in (canvas_dm, canvas_jugadores): canvas.bind('<Configure>', lambda evento: pedir_repintado())

    # --- lista de mapas
    ttk.Button(panel_mapas, text='Elegir carpeta de mapas', style='Accent.TButton', command=lambda: elegir_carpeta()).pack(fill='x', pady=(0, 8))
    marco_lista = ttk.LabelFrame(panel_mapas, text='Mapas', padding=4); marco_lista.pack(fill='both', expand=True)
    lista_mapas = tk.Listbox(marco_lista, exportselection=False, bg=FONDO, fg=BLANCO, selectbackground=ROJO, selectforeground=BLANCO,
                             relief='flat', highlightthickness=0, borderwidth=0, activestyle='none'); lista_mapas.pack(fill='both', expand=True)
    def escanear_carpeta(carpeta):
        sesion.carpeta = carpeta; lista_mapas.delete(0, 'end')
        ui.archivos = sorted(os.path.join(ruta, nombre) for ruta, _, nombres in os.walk(carpeta) for nombre in nombres
                                if nombre.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')))
        for archivo in ui.archivos: lista_mapas.insert('end', os.path.relpath(archivo, carpeta))
    def elegir_carpeta():
        carpeta = filedialog.askdirectory()
        if carpeta: escanear_carpeta(carpeta)
    def abrir_mapa(ruta):
        try: editor.abrir_mapa(ruta)
        except Exception as error: return messagebox.showerror('Error', f'No se pudo abrir {ruta}\n{error}')
        for ajuste, slider in sliders_mapa.items(): slider.set(getattr(editor.mapa, ajuste))
    def elegir_mapa_de_lista(evento=None):
        seleccion = lista_mapas.curselection()
        if seleccion: abrir_mapa(ui.archivos[seleccion[0]])
    lista_mapas.bind('<<ListboxSelect>>', elegir_mapa_de_lista)

    # --- controles
    def seccion(titulo): marco = ttk.LabelFrame(panel_derecho, text=titulo, padding=8); marco.pack(fill='x', pady=4); return marco
    def agregar_check(padre, texto, leer, escribir):
        valor = tk.BooleanVar(value=leer()); ttk.Checkbutton(padre, text=texto, variable=valor, command=lambda: escribir(valor.get())).pack(anchor='w', pady=2)
    def agregar_slider(padre, texto, minimo, maximo, al_cambiar):
        marco = ttk.Frame(padre); marco.pack(fill='x', pady=(4, 0)); ttk.Label(marco, text=texto).pack(side='left')
        etiqueta_valor = ttk.Label(marco); etiqueta_valor.pack(side='right')
        slider = ttk.Scale(padre, from_=minimo, to=maximo,
                           command=lambda v: (etiqueta_valor.config(text=str(int(float(v)))), al_cambiar(int(float(v)))))
        slider.pack(fill='x'); return slider
    def cambiar_tamano_texto(tamano):   # solo cambia la letra; los paneles mantienen su tamaño
        for nombre in ('TkDefaultFont', 'TkTextFont', 'TkMenuFont', 'TkHeadingFont'): tkfont.nametofont(nombre).configure(size=tamano)
        fuente_negrita.configure(size=tamano)
    opciones = sesion.opciones

    sec_grilla = seccion('Grilla')
    agregar_check(sec_grilla, 'Mostrar grilla', lambda: opciones.grilla_visible, lambda v: editor.cambiar_opcion('grilla_visible', v))
    sliders_mapa = {ajuste: agregar_slider(sec_grilla, texto, minimo, 250, lambda v, ajuste=ajuste: editor.cambiar_ajuste_mapa(ajuste, v)) for ajuste, texto, minimo in
                    (('tam_casilla', 'Tamaño de casilla', 20), ('desfase_x', 'Desplazar en X', 0), ('desfase_y', 'Desplazar en Y', 0))}
    agregar_slider(sec_grilla, 'Opacidad de grilla', 5, 100, lambda v: editor.cambiar_opcion('opacidad_grilla', v)).set(opciones.opacidad_grilla)
    sec_niebla = seccion('Niebla')
    agregar_check(sec_niebla, 'Mostrar niebla', lambda: opciones.niebla_visible, lambda v: editor.cambiar_opcion('niebla_visible', v))
    agregar_slider(sec_niebla, 'Opacidad de niebla', 0, 100, lambda v: editor.cambiar_opcion('opacidad_niebla', v)).set(opciones.opacidad_niebla)
    agregar_check(sec_niebla, 'Recordar por donde pasan los jugadores', lambda: opciones.recordar_recorrido, editor.activar_recuerdo)
    ttk.Button(sec_niebla, text='Olvidar zonas exploradas', command=editor.olvidar_zonas).pack(fill='x', pady=(4, 0))
    sec_jugadores = seccion('Jugadores'); filas_jugadores = ttk.Frame(sec_jugadores); filas_jugadores.pack(fill='x')
    boton_jugador = ttk.Button(sec_jugadores, text='+ Jugador (clic en el mapa)', command=lambda: menu_jugador()); boton_jugador.pack(fill='x', pady=(6, 0))
    sec_luces = seccion('Luces'); filas_luces = ttk.Frame(sec_luces); filas_luces.pack(fill='x')
    boton_luz = ttk.Button(sec_luces, text='+ Luz (clic en el mapa)', command=lambda: editor.usar_herramienta('colocar_luz', Colocar(editor.fabrica_luz())))
    boton_luz.pack(fill='x', pady=(6, 0))
    sec_paredes = seccion('Paredes')
    boton_dibujar_pared = ttk.Button(sec_paredes, text='Dibujar paredes', command=lambda: editor.usar_herramienta('dibujar_pared', DibujarPared())); boton_dibujar_pared.pack(fill='x')
    boton_borrar_pared = ttk.Button(sec_paredes, text='Borrar paredes (clic sobre una)', command=lambda: editor.usar_herramienta('borrar_pared', BorrarPared()))
    boton_borrar_pared.pack(fill='x', pady=(4, 0))
    ttk.Button(sec_paredes, text='Borrar todas las paredes', command=lambda: borrar_todas_las_paredes()).pack(fill='x', pady=(4, 0))
    sec_texto = seccion('Tamaño del texto'); var_tamano_texto = tk.IntVar(value=sesion.tamano_texto)
    for etiqueta, tamano in (('Pequeño', 9), ('Mediano', 11), ('Grande', 13)):
        ttk.Radiobutton(sec_texto, text=etiqueta, value=tamano, variable=var_tamano_texto,
                        command=lambda: cambiar_tamano_texto(var_tamano_texto.get())).pack(side='left', padx=(0, 10))

    # --- herramientas: el botón de la herramienta activa se pinta de rojo
    botones_herramienta = {'colocar_jugador': boton_jugador, 'colocar_luz': boton_luz, 'dibujar_pared': boton_dibujar_pared, 'borrar_pared': boton_borrar_pared}
    def mostrar_herramienta_activa():
        for clave, boton in botones_herramienta.items(): boton.config(style='Accent.TButton' if editor.clave_herramienta == clave else 'TButton')
    def borrar_todas_las_paredes():
        if sesion.mapa_actual and editor.mapa.paredes and messagebox.askyesno('Borrar paredes', '¿Borrar todas las paredes de este mapa?'): editor.borrar_paredes()
    def menu_jugador():
        if editor.clave_herramienta == 'colocar_jugador': return editor.usar_herramienta('colocar_jugador', None)   # ya activa: se cancela
        usar = lambda personaje: editor.usar_herramienta('colocar_jugador', Colocar(editor.fabrica_jugador(personaje)))
        crear_menu = lambda padre: tk.Menu(padre, tearoff=0, bg=FONDO, fg=BLANCO, activebackground=ROJO, activeforeground=BLANCO)
        menu = crear_menu(ventana_dm); menu.add_command(label='Genérico', command=lambda: usar(None))
        if sesion.personajes:
            menu.add_separator(); menu_borrar = crear_menu(menu)
            for personaje in sesion.personajes:
                menu.add_command(label=personaje.nombre, command=lambda p=personaje: usar(p))
                menu_borrar.add_command(label=personaje.nombre, command=lambda p=personaje: editor.borrar_personaje(p))
            menu.add_separator(); menu.add_cascade(label='Borrar personaje', menu=menu_borrar)
        menu.tk_popup(boton_jugador.winfo_rootx(), boton_jugador.winfo_rooty() + boton_jugador.winfo_height())

    # --- filas de jugadores y luces
    def leer_numero(variable):
        try: return max(0, int(variable.get()))
        except ValueError: return 0
    def elegir_color(item, muestra):
        color = colorchooser.askcolor(item.color)[1]
        if color: item.color = color; muestra.config(bg=color); pedir_repintado()
    def elegir_imagen(jugador):
        ruta = filedialog.askopenfilename(filetypes=[('Imágenes', '*.png *.jpg *.jpeg *.webp *.gif *.bmp')])
        if ruta: jugador.imagen = ruta; pedir_repintado()
    def editar(item, campo, valor): setattr(item, campo, valor); pedir_repintado()   # cambio simple de un dato del item
    def agregar_spin(padre, item, campo, etiqueta):
        ttk.Label(padre, text=etiqueta).pack(side='left')
        valor = tk.StringVar(value=str(getattr(item, campo))); valor.trace_add('write', lambda *a: editar(item, campo, leer_numero(valor)))
        ttk.Spinbox(padre, from_=0, to=60, width=3, textvariable=valor).pack(side='left', padx=(4, 12))
    def agregar_fila(padre, item):
        es_jugador = isinstance(item, Jugador)
        fila = ttk.Frame(padre); fila.pack(fill='x', pady=4); linea_superior = ttk.Frame(fila); linea_superior.pack(fill='x')
        muestra_color = tk.Label(linea_superior, bg=item.color, width=2, cursor='hand2', highlightthickness=1, highlightbackground=BLANCO)
        muestra_color.pack(side='left'); muestra_color.bind('<Button-1>', lambda evento: elegir_color(item, muestra_color))
        if es_jugador:
            nombre = tk.StringVar(value=item.nombre); nombre.trace_add('write', lambda *a: editar(item, 'nombre', nombre.get()))
            ttk.Entry(linea_superior, textvariable=nombre).pack(side='left', fill='x', expand=True, padx=5)
        else: ttk.Label(linea_superior, text='Luz').pack(side='left', fill='x', expand=True, padx=5)
        ttk.Button(linea_superior, text='×', width=2, padding=2, command=lambda: editor.quitar_item(item)).pack(side='right')
        linea_rangos = ttk.Frame(fila); linea_rangos.pack(fill='x', pady=(3, 0))
        agregar_spin(linea_rangos, item, 'rango_fuerte', 'Fuerte'); agregar_spin(linea_rangos, item, 'rango_tenue', 'Tenue')
        tapada = tk.BooleanVar(value=item.tapada_por_paredes)
        ttk.Checkbutton(fila, text='Paredes tapan su luz y su paso', variable=tapada,
                        command=lambda: editar(item, 'tapada_por_paredes', tapada.get())).pack(anchor='w', pady=(3, 0))
        if es_jugador:
            linea_tamano = ttk.Frame(fila); linea_tamano.pack(fill='x', pady=(3, 0))
            desplegable = ttk.Combobox(linea_tamano, values=TAMANOS_FICHA, state='readonly', width=8); desplegable.current(item.lado - 1)
            desplegable.pack(side='left', padx=(0, 12))
            desplegable.bind('<<ComboboxSelected>>', lambda evento: editor.cambiar_lado(item, desplegable.current() + 1))
            con_vision = tk.BooleanVar(value=item.con_vision)
            ttk.Checkbutton(linea_tamano, text='Visión', variable=con_vision, command=lambda: editor.cambiar_vision(item, con_vision.get())).pack(side='left')
            linea_personaje = ttk.Frame(fila); linea_personaje.pack(fill='x', pady=(3, 0))
            ya_guardado = any(p.id == item.id_personaje for p in sesion.personajes)
            for texto, accion in (('Imagen', lambda: elegir_imagen(item)), ('Quitar', lambda: editar(item, 'imagen', None)),
                                  ('Actualizar personaje' if ya_guardado else 'Guardar personaje', lambda: editor.guardar_personaje(item))):
                ttk.Button(linea_personaje, text=texto, padding=(6, 3), command=accion).pack(side='left', padx=(0, 4))
    def reconstruir_filas():
        for marco in (filas_jugadores, filas_luces):
            for widget in marco.winfo_children(): widget.destroy()
        for jugador in sesion.jugadores: agregar_fila(filas_jugadores, jugador)
        if sesion.mapa_actual:
            for luz in editor.mapa.luces: agregar_fila(filas_luces, luz)

    # --- animación: un solo temporizador avanza todo y dibuja una vez por cuadro
    def paso_animacion():
        ui.temporizador = None; quedan = editor.avanzar_animaciones(); repintar_ahora()
        if quedan: ui.temporizador = ventana_dm.after(1, paso_animacion)
    def iniciar_animacion():
        if not ui.temporizador: ui.temporizador = ventana_dm.after(1, paso_animacion)

    # --- mouse y teclado
    def al_tecla(evento):
        movimiento = {'Left': (-1, 0), 'Right': (1, 0), 'Up': (0, -1), 'Down': (0, 1)}.get(evento.keysym)
        if movimiento and not isinstance(ventana_dm.focus_get(), (tk.Entry, ttk.Entry, ttk.Spinbox)): editor.mover_seleccion(*movimiento)
    canvas_dm.bind('<Button-1>', lambda evento: editor.apretar(evento.x, evento.y))
    canvas_dm.bind('<B1-Motion>', lambda evento: editor.arrastrar(evento.x, evento.y))
    canvas_dm.bind('<ButtonRelease-1>', lambda evento: editor.soltar())
    ventana_dm.bind('<Key>', al_tecla)
    alternar_pantalla_completa = lambda evento=None: ventana_jugadores.attributes('-fullscreen', not ventana_jugadores.attributes('-fullscreen'))
    ventana_jugadores.bind('<Double-Button-1>', alternar_pantalla_completa); ventana_jugadores.bind('<F11>', alternar_pantalla_completa)

    # --- guardado: al cerrar y cada 20 s
    def guardar_ahora():
        sesion.tamano_texto = var_tamano_texto.get()
        try: guardar_sesion(sesion, RUTA_ESTADO)
        except OSError as error: messagebox.showerror('No se pudo guardar', str(error))
    def autoguardado(): guardar_ahora(); ventana_dm.after(20000, autoguardado)
    ventana_dm.protocol('WM_DELETE_WINDOW', lambda: (guardar_ahora(), ventana_dm.destroy()))

    # --- conexión con el Editor y arranque
    vista.repintar, vista.reconstruir_filas, vista.iniciar_animacion, vista.herramienta_cambiada = pedir_repintado, reconstruir_filas, iniciar_animacion, mostrar_herramienta_activa
    cambiar_tamano_texto(var_tamano_texto.get())
    if sesion.carpeta and os.path.isdir(sesion.carpeta): escanear_carpeta(sesion.carpeta)
    if sesion.mapa_actual and os.path.exists(sesion.mapa_actual):
        abrir_mapa(sesion.mapa_actual)
        if sesion.mapa_actual in ui.archivos: lista_mapas.selection_set(ui.archivos.index(sesion.mapa_actual))
    else: sesion.mapa_actual = None
    reconstruir_filas(); ventana_dm.after(20000, autoguardado); ventana_dm.mainloop()
