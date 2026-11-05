# **Reporte de arquitectura · Mapas D&D**  
Reporte técnico completo de dnd.py después del refactor: items, mapa, sesión, persistencia, render, herramientas, editor y vista Tk · 20 de octubre de 2026  
## **1. Qué hace el programa y cómo leer este reporte**  
Es una mesa virtual para dirigir D&D. Abre **dos ventanas a la vez** sobre la misma imagen de mapa: la del DM, donde se ve todo (niebla translúcida, luces, paredes, vista previa de movimientos), y la de jugadores, donde solo se ve lo que iluminan sus fichas y las luces. Incluye grilla configurable, niebla de guerra con opacidad de 0 a 100, luces con rango **fuerte** (se ve todo) y **tenue** (media luz) siempre redondas, paredes que tapan la luz y el paso, fichas con imagen y tamaño de 1, 4, 9 o 16 cubos, memoria opcional del recorrido, biblioteca de personajes, estado separado por mapa y guardado automático.  
Cada archivo se describe con tres cosas: **para qué existe**, **de qué depende**, y **cada una de sus funciones** con qué hace, la lógica con que se decidió armarla así y por qué.  
Vocabulario que se usa en todo el código y en este reporte:  
- **Casilla**: una celda de la grilla, identificada por col y fila.  
- **Vértice**: la esquina entre cuatro casillas. Las paredes se apoyan en vértices.  
- **Item**: algo que se puede arrastrar por el mapa (un jugador o una luz).  
- **Rango fuerte / tenue**: radio de luz en casillas. 0 significa que no ilumina.  
- **Lado**: casillas por lado de la ficha (1, 2, 3 o 4, es decir 1, 4, 9 o 16 cubos).  
- **px**: píxeles. Se distingue entre píxeles de la imagen original y píxeles de pantalla (imagen × escala).  
## **2. Mapa de archivos**  
tu_carpeta/  
 ├── dnd.py                 punto de entrada (python dnd.py)  
 ├── requirements.txt       Pillow>=10.1  
 ├── test_dnd.py            pruebas (python test_dnd.py)  
 ├── dnd_estado.json        se crea solo: la sesión guardada  
 └── dnd_mapas/  
     ├── items.py           Jugador, Luz, Zona, Personaje  
     ├── mapa.py            un mapa: grilla, paredes, geometría y colisión  
     ├── sesion.py          todo lo que se guarda entre usos  
     ├── persistencia.py    leer y escribir el JSON (y formatos viejos)  
     ├── rutas.py           rutas relativas al JSON (portables entre computadoras)  
     ├── render.py          dibujo: grilla, niebla, luces, sombras, fichas  
     ├── herramientas.py    herramientas del mouse (patrón Estado)  
     ├── editor.py          las reglas para editar (sin Tk)  
     └── vista_tk.py        la ventana: adaptador delgado hacia Tk  
  
|  |  |  |  
| - | - | - |  
| Archivo |  Responsabilidad en una frase |  Depende de |  
| items.py |  Define la forma, los valores por defecto y el guardado de cada cosa colocada en el mapa |  nada |  
| mapa.py |  Datos de un mapa y las reglas de su geometría y de sus paredes |  items |  
| sesion.py |  Agrupa opciones, mapas, jugadores y personajes, y sabe volcarse a dict |  items, mapa |  
| persistencia.py |  Archivo JSON: escritura atómica, carga tolerante y migración de formatos viejos |  sesion, rutas |  
| rutas.py |  Convierte entre rutas absolutas de trabajo y rutas relativas portables guardadas en el JSON |  nada |  
| render.py |  Convierte el estado en una imagen |  items |  
| herramientas.py |  Qué hace cada herramienta del mouse al apretar, arrastrar y soltar |  nada (recibe el Editor por parámetro) |  
| editor.py |  Todas las reglas de edición y movimiento; habla con la vista por avisos |  herramientas, items, mapa, render (solo Superposicion y una caché) |  
| vista_tk.py |  Widgets Tk que traducen clics y controles a llamadas al Editor |  editor, herramientas, items, persistencia, render |  
| dnd.py |  Arranca la aplicación |  vista_tk |  
  
## **3. Por qué esta jerarquía de archivos**  
### **3.1 El problema de partida**  
Antes todo vivía en un solo archivo de 655 líneas. La función main() tenía unas 347 líneas con 42 funciones anidadas que compartían un diccionario ui (76 accesos). Eso produjo fricciones concretas:  
- La forma de un item no tenía dueño: cada campo nuevo (por ejemplo tapada_por_paredes) obligó a editar valores por defecto en 7 lugares y a escribir migración.  
- Los tres manejadores del mouse eran cadenas de if sobre cinco banderas sueltas; agregar una herramienta nueva obligaba a tocar los tres.  
- La regla «ir a una casilla» (acotar al mapa y frenar en paredes) estaba copiada en dos funciones.  
- Nada de la lógica de la interfaz tenía pruebas: solo se podía probar el dibujo y los datos.  
Las tres mejoras elegidas del informe previo fueron **C** (el Item con dueño), **A** (un Editor detrás de una costura con Tk) y **B** (herramientas como estados).  
### **3.2 La regla que ordena todo: las dependencias apuntan hacia abajo**  
dnd.py  
  └─ vista_tk.py            único archivo que conoce Tk  
       ├─ persistencia.py ──► sesion.py ──► mapa.py ──► items.py  
       └─ editor.py  
            ├─ herramientas.py   (no importa al Editor: lo recibe)  
            ├─ render.py ───────► items.py  
            └─ sesion / mapa / items  
Tres reglas se derivan de este esquema:  
1. **Lo que cambia por razones distintas va en archivos distintos.** Si cambia el formato del archivo, se toca persistencia.py. Si cambia el aspecto de la niebla, render.py. Si cambia una regla de edición, editor.py. Si cambia un widget, vista_tk.py.  
2. **Solo vista_tk.py importa Tk.** Todo lo demás se puede ejecutar y probar sin ventana. Esto importa en la práctica: en el entorno donde se desarrolló no existía tkinter, y aun así el 100 % de las reglas está cubierto por pruebas.  
3. **Cada archivo se entiende sin leer los de arriba.** items.py no sabe que existe un mapa, mapa.py no sabe que existe una sesión, y así sucesivamente.  
### **3.3 Por qué cada corte**  
- **items.py separado (candidato C).** Es el vocabulario que usan todos. Al darle un archivo propio, los campos y sus valores por defecto quedan en un solo lugar y el resto del código deja de escribir .get('lado', 1).  
- **mapa.py aparte de sesion.py.** Un Mapa es una unidad con reglas propias (cuánto mide la casilla, dónde están las paredes, si un camino está bloqueado). La Sesión es solo el contenedor de todos los mapas más las opciones y los jugadores. Una sesión puede tener muchos mapas, por eso son clases distintas.  
- **persistencia.py aparte de sesion.py.** La Sesión sabe *qué* se guarda (a_dict / desde_dict); persistencia sabe *dónde y cómo* (archivo, escritura atómica, archivo dañado, formatos viejos). Cambian por razones distintas.  
- **render.py aparte.** Dibujar es una función pura: recibe estado y devuelve una imagen. Eso permite usarla igual para las dos ventanas y probarla comparando píxeles.  
- **herramientas.py aparte (candidato B).** Cada herramienta guarda su propio estado temporal (la pared que se está dibujando, el item agarrado). Agregar una herramienta es agregar una clase, sin tocar las demás.  
- **editor.py como núcleo (candidato A).** Es la única puerta de entrada para la interfaz: expone comandos con datos simples. Así la ventana no contiene decisiones, solo traducción.  
- **vista_tk.py como adaptador.** Toda la dependencia de Tk queda en un solo archivo. Si mañana se quisiera otra interfaz, se reemplaza solo este archivo.  
- **dnd.py como entrada mínima.** Se mantuvo porque se pidió que siguiera siendo el archivo que se ejecuta; además deja un docstring que funciona como índice del proyecto.  
### **3.4 Alternativas que se descartaron**  
- **Seguir con un solo archivo.** Funcionaba, pero obligaba a leer 655 líneas para tocar cualquier cosa y hacía imposible probar la interfaz sin Tk.  
- **Un solo módulo modelo.py con todas las clases de datos.** Habría sido más corto, pero mezclaba el vocabulario más básico (items) con reglas de geometría y con el estado de la sesión; cualquier cambio habría tocado el mismo archivo.  
- **Jerarquía de herencia profunda para los items.** Se usó una sola capa: una base Item con Jugador y Luz. La diferencia real entre ambos es chica (nombre, imagen, lado y visión), así que más niveles solo habrían agregado indirección.  
- **Separar un módulo de geometría de grilla (candidato D).** Quedó pendiente a propósito: no se había elegido y el refactor debía mantener el comportamiento exacto. Hoy la geometría vive dentro de Mapa, que es un lugar razonable por cohesión.  
- **Eliminar las variables globales con una sesión inyectada en todo (candidato E).** Se avanzó lo suficiente para que no haya globales (la Sesión es un objeto que se pasa), pero sin rediseñar más.  
### **3.5 Principios y patrones aplicados**  
  
|  |  |  |  
| - | - | - |  
| Principio o patrón |  Dónde aparece |  Qué resuelve |  
| Responsabilidad única |  Cada archivo tiene una razón para cambiar |  Cambios localizados |  
| Abierto/cerrado |  Herramientas: una nueva es una clase nueva |  No se tocan al_presionar ni las otras |  
| Sustitución |  Todas las herramientas cumplen apretar, arrastrar, soltar |  El Editor las usa de forma intercambiable |  
| Segregación de interfaces |  VistaNula tiene solo 4 avisos |  La vista no necesita implementar nada de más |  
| Inversión de dependencias |  El Editor depende de la abstracción VistaNula, no de Tk |  Se prueba con una vista falsa |  
| Patrón Estado |  Mover, Colocar, DibujarPared, BorrarPared |  Reemplaza cinco banderas por un objeto activo |  
| Adaptador |  vista_tk.py |  Traduce Tk a comandos del Editor |  
| Fachada |  Editor |  Una puerta simple hacia reglas complejas |  
| Objeto nulo |  VistaNula |  El Editor nunca pregunta si hay vista |  
| Objeto de valor |  Zona (inmutable, comparable por valor) |  Evita duplicados con un simple in |  
  
## **4. items.py**  
**Para qué existe.** Define, en un solo lugar, qué es cada cosa colocada en el mapa: sus campos, sus valores por defecto y cómo se guarda. **No depende de ningún otro archivo del proyecto.**  
### **Constantes**  
- COLORES_FICHA: seis colores que se reparten entre los jugadores genéricos con numero % 6, para que dos jugadores nuevos seguidos casi nunca tengan el mismo.  
- TAMANOS_FICHA: los textos del desplegable de tamaño. La posición en la lista más uno es el lado (la opción «4 cubos» es el índice 1, por lo tanto lado 2).  
- CAMPOS_PERSONAJE: los campos que se copian entre un jugador y su personaje guardado (nombre, color, rangos, lado, imagen, paredes). No incluye id ni la posición, porque son del jugador en el mapa y no del personaje.  
### **\_Guardable (clase base interna)**  
- desde_dict(cls, datos). Crea el objeto desde un diccionario. **Lógica:** filtra las claves por los campos reales de la clase; lo que falta toma el valor por defecto de la clase y lo que sobra se ignora. **Por qué:** es la función que reemplazó los 7 lugares donde se repetían valores por defecto; agregar un campo nuevo ahora significa escribir una línea en la clase y nada más.  
- a_dict(self). Devuelve un diccionario con los campos declarados. **Por qué no dataclasses.asdict:** asdict copia recursivamente y aquí solo hace falta una lectura plana de los campos propios.  
- La anotación \_\_dataclass_fields\_\_ solo existe para el verificador de tipos: le informa que las clases hijas son dataclasses.  
### **\_Iluminador (clase base interna)**  
Compartida por Item y Zona: cualquier cosa que ilumina.  
- mitad (propiedad). Es lado / 2. **Lógica:** el centro de un bloque de lado × lado casillas está en col + lado/2, así que esta mitad aparece en todas las cuentas de centro y de radio.  
- radios_px(casilla_px). Devuelve (radio fuerte, radio tenue) en píxeles. **Lógica:** radio = (rango + mitad) × tamaño de casilla, es decir el rango se cuenta desde el **borde** del bloque, no desde su centro; una ficha de 3×3 con rango 2 ilumina 2 casillas más allá de su borde. El radio tenue es max(fuerte, tenue), de modo que la zona de media luz nunca puede ser menor que la fuerte. Un rango 0 devuelve radio 0. **Por qué acá:** la regla «rango 0 no ilumina» queda codificada una sola vez; el dibujo solo pregunta si el radio es mayor que cero.  
- ocupa(col, fila). Dice si una casilla cae dentro del bloque del item. **Por qué:** es lo que usa la herramienta Mover para saber qué ficha se agarró, y funciona igual para fichas grandes.  
### **Item (jugador o luz)**  
Dataclass con eq=False. **Decisión clave:** con eq=False dos items son iguales solo si son el *mismo objeto*. Esto es necesario porque los items se usan como clave de diccionario (para las animaciones), se quitan de listas con remove y se comparan con is (para la selección). Con la igualdad por valor de las dataclasses normales, dos jugadores con los mismos datos habrían sido indistinguibles y ni siquiera serían hashables.  
Campos guardados: col, fila, rango_fuerte, rango_tenue, tapada_por_paredes, color. Atributos de clase que **no** se guardan: lado = 1, con_vision = True, imagen = None, id_personaje = None. **Por qué:** la luz comparte la interfaz del jugador sin tener esos campos (una luz siempre ocupa una casilla y siempre ilumina), así que el dibujo trata a ambos de forma uniforme sin usar isinstance.  
### **Jugador**  
Agrega id, nombre, lado, con_vision, imagen, id_personaje.  
- nuevo(numero, col, fila, personaje=None). Crea un jugador genérico, o una copia de un personaje guardado. **Lógica:** parte de un jugador con nombre «Jugador N», color rotativo y rango fuerte 1; si hay personaje, copia sus campos y guarda su id en id_personaje. **Por qué:** ese vínculo permite que el botón de guardar diga «Actualizar personaje» y modifique el mismo en vez de crear otro.  
### **Luz**  
Solo cambia el color por defecto a un amarillo cálido. Su rango por defecto es **0** (hereda de Item), por lo que una luz recién colocada no ilumina hasta configurarla; es un pedido explícito del usuario.  
### **Zona (memoria del recorrido)**  
Dataclass **inmutable** (frozen=True): es hashable y se compara por valor. **Por qué:** para no guardar la misma zona dos veces basta if zona not in lista. Incluye tapada_por_paredes porque la memoria también debe respetar las paredes; si no, lo recordado se vería a través de ellas.  
- de(item, col=None, fila=None). Crea la zona que ilumina un item, opcionalmente en otra casilla. **Por qué los parámetros opcionales:** al animar un movimiento se recuerdan casillas intermedias del recorrido sin tener que copiar el item.  
### **Personaje**  
Ficha guardada en la biblioteca (id de texto aleatorio de 8 caracteres).  
- actualizar_desde(jugador). Copia al personaje los CAMPOS_PERSONAJE del jugador. **Por qué un bucle sobre la lista de campos:** si se agrega un campo a CAMPOS_PERSONAJE, la copia en los dos sentidos (Jugador.nuevo y esta) se actualiza sola.  
## **5. mapa.py**  
**Para qué existe.** Un mapa concreto: tamaño de casilla, desfase de la grilla, luces, zonas exploradas, paredes y posiciones de los jugadores. Contiene la geometría y las reglas de paredes. **Depende solo de items.**  
### **Funciones de geometría (a nivel de módulo)**  
- \_orientacion(a, b, c). Producto cruzado: positivo, negativo o cero según de qué lado de la recta a-b cae el punto c. **Por qué es exacto:** los puntos están en unidades de casilla y valen enteros o mitades, así que la cuenta no acumula error de decimales; por eso se puede comparar == 0.  
- \_dentro_de_caja(punto, a, b). Verifica si un punto cae dentro del rectángulo que encierra al segmento a-b. **Para qué:** distingue un punto que está sobre el segmento de uno que está sobre su recta pero afuera.  
- segmentos_se_tocan(p, q, a, b). Dice si el segmento p-q cruza o toca el segmento a-b. **Lógica:** hay cruce propio si las orientaciones son opuestas en ambos sentidos; si no, hay contacto cuando algún extremo cae sobre el otro segmento. **Decisión:** la intersección es **cerrada** (rozar una punta cuenta como choque). Es la opción conservadora: nada se cuela por una esquina, a costa de que a veces la ficha frene un poco antes.  
- distancia_a_segmento(punto, a, b). Distancia de un punto al segmento más cercano. **Lógica:** se proyecta el punto sobre la recta y se acota la proyección entre 0 y 1. **Para qué:** el clic de la herramienta «Borrar pared».  
- camino_bloqueado(paredes, origen, destino). Dice si ir en línea recta atraviesa alguna pared. **Lógica:** recorre las paredes; ignora aquellas sobre las que el origen está parado y devuelve True si el recorrido toca alguna de las demás. **Por qué se ignora la pared bajo el origen:** si se dibuja una pared justo debajo de una ficha, sin esta regla esa ficha quedaría atrapada para siempre.  
### **Clase Mapa**  
Campos: tam_casilla (70 por defecto), desfase_x, desfase_y, luces, explorado (lista de Zona), paredes y posiciones.  
- Las **paredes se guardan como vértices de la grilla**, no como píxeles: \[vx1, vy1, vx2, vy2\]. **Por qué:** si se cambia el tamaño de la casilla o el desfase, las paredes acompañan a la grilla y siguen alineadas.  
- posiciones es {id de jugador (como texto): \[col, fila\]}. Las claves son texto porque JSON solo admite claves de texto.  
- desde_dict(datos). Reconstruye el Mapa, convirtiendo luces y zonas en objetos con sus propias desde_dict. **Por qué usar .get con valores por defecto:** un archivo guardado antes de que existieran las paredes se carga sin error y con paredes vacías.  
- a_dict(). Operación inversa para guardar.  
- limitar(tam_imagen, lado, col, fila). Devuelve la casilla más cercana que deja el **centro** del bloque dentro de la imagen. **Lógica:** en cada eje, el mínimo es ceil(-desfase/casilla - lado/2) y el máximo floor((límite - desfase)/casilla - lado/2). **Decisiones:** se acota el centro y no el bloque entero para que una ficha pegada al borde siga siendo agarrable; y max(minimo, maximo) protege el caso de un mapa más chico que una casilla.  
- acotar(item, tam_imagen). Aplica limitar al propio item. Existe porque ese gesto se repite al abrir un mapa, al cambiar el tamaño de casilla, al cambiar el lado de una ficha y al colocar.  
- vertice_mas_cercano(tam_imagen, x, y). Convierte un punto en píxeles de imagen al vértice de grilla más cercano, acotado al mapa. **Por qué vértices y no casillas:** las paredes se apoyan en esquinas, no en centros.  
- pared_mas_cercana(x, y, tolerancia). Devuelve el índice de la pared más próxima al punto o None si ninguna está a menos de la tolerancia. **Decisión:** la tolerancia la decide quien llama (la herramienta pasa 12 píxeles de pantalla divididos por la escala), así el mapa no necesita saber nada de la pantalla.  
- destino_alcanzable(item, col, fila). La función de colisión. **Lógica paso a paso:** (1) si no hay paredes o el item no es tapado por paredes, devuelve el destino tal cual; (2) calcula las casillas intermedias del recorrido con la misma fórmula de redondeo que usa la animación; (3) para cada una verifica si la **línea recta desde el origen fijo** hasta el centro de esa casilla toca una pared; (4) se detiene en la primera casilla bloqueada y devuelve la última libre. **Por qué línea recta desde un origen fijo:** coincide con lo que dibuja la vista previa y con lo que anima la ficha, así que no hay diferencias entre lo que se ve y lo que se calcula. **Por qué frena en el primer bloqueo:** es conservador; no hay búsqueda de rutas ni rodeos. **Por qué se mira el centro del bloque:** una ficha grande no puede tener su centro sobre una pared.  
## **6. sesion.py**  
**Para qué existe.** Es el contenedor de todo lo que se conserva entre usos del programa: las opciones de pantalla, los mapas, los jugadores, la biblioteca de personajes y algunos datos de la ventana. **Depende de items y mapa.**  
### **Opciones**  
Cinco opciones de pantalla: grilla_visible, niebla_visible, opacidad_grilla (35), opacidad_niebla (97) y recordar_recorrido (apagada). **Decisión:** son **globales** y no por mapa; así se pidió, y cambiarlas a por mapa sería mover estos cinco campos dentro de Mapa. Al ser una dataclass, a_dict las vuelca con self.opciones.\_\_dict\_\_ y las claves del archivo quedan idénticas a los nombres de los campos.  
### **Clase Sesion**  
Campos: opciones, mapas (diccionario de ruta de imagen a Mapa), jugadores, personajes, mapa_actual, proximo_id, carpeta y tamano_texto.  
**Decisión de fondo:** los **jugadores son globales** (la lista de fichas pertenece a la mesa y viaja de un mapa al otro), pero la **posición** de cada jugador es **por mapa**. Esto responde al pedido de que cada imagen conserve su estado: al volver a un mapa, cada ficha queda donde la dejaste.  
- mapa (propiedad). Devuelve el Mapa del mapa_actual. Falla con KeyError si no hay mapa abierto; los llamadores lo verifican antes mirando mapa_actual.  
- \_posiciones(). Arma {str(id): \[col, fila\]} con las posiciones actuales. La clave es texto porque así la guarda JSON.  
- guardar_posiciones(). Copia las posiciones actuales dentro del mapa abierto. **Cuándo se llama:** una sola vez, justo antes de abrir otro mapa. **Por qué acá:** es el momento exacto en que el mapa que se deja necesita «acordarse».  
- aplicar_posiciones(mapa). Mueve cada jugador a la posición que ese mapa recuerda. **Lógica:** si el mapa no tiene posición guardada para un jugador (por ejemplo un mapa que nunca se abrió), ese jugador no se mueve; después el Editor lo acota a los bordes del mapa nuevo.  
- a_dict(). Devuelve todo en un diccionario plano para guardar. **Decisión importante:** las posiciones del mapa abierto se calculan al vuelo y se escriben en la copia que se guarda, **sin modificar la sesión**. La versión anterior modificaba los mapas como efecto lateral al exportar, algo difícil de ver y de probar. La estructura plana (todo al mismo nivel) mantiene el mismo formato de archivo que las versiones previas.  
- desde_dict(datos). Reconstruye la sesión. **Lógica:** crea los objetos con las desde_dict de cada clase; construye Opciones solo con las claves presentes (el resto toma el valor por defecto); y calcula proximo_id como el mayor entre el guardado y id + 1 de todos los jugadores. **Por qué ese máximo:** garantiza que un jugador nuevo nunca reciba un id ya usado, aunque el archivo tuviera un contador desactualizado.  
## **7. persistencia.py**  
**Para qué existe.** Todo lo relativo al archivo dnd_estado.json: escribirlo sin riesgo, leerlo con tolerancia y entender los formatos de versiones anteriores. **Depende de sesion.** Es el único lugar que lee y escribe ese archivo.  
### **Tablas de nombres viejos**  
\_CLAVES_ESTADO_VIEJAS, \_CLAVES_ITEM_VIEJAS y \_CLAVES_MAPA_VIEJAS asocian cada nombre abreviado de las primeras versiones (x, y, r, r2, s, c, n, v, img, cid, cell, gx, gy, lights, explored, grid, fog, gop, fop, mem, players, maps, chars, nid, dir, font) con el nombre actual. **Por qué tablas y no condicionales:** agregar una correspondencia es agregar una línea, y la lógica de migración no cambia.  
### **Funciones**  
- \_renombrar(datos, claves). Devuelve un diccionario con las claves renombradas según la tabla; las que no están en la tabla pasan igual.  
- migrar_formato_viejo(datos). **Lógica:** detecta un archivo viejo si contiene alguna de las claves players, maps o grid; en ese caso renombra el estado general, cada jugador y personaje, y dentro de cada mapa sus claves, sus luces y sus zonas exploradas. Si el archivo ya está en formato nuevo lo devuelve sin tocar, por lo que es **idempotente**. **Por qué se detecta por claves y no por un número de versión:** los archivos anteriores no tenían número de versión.  
- guardar_sesion(sesion, ruta). **Lógica:** escribe en un archivo temporal (ruta.tmp) y luego lo renombra con os.replace. **Por qué:** el renombrado es atómico; si el programa se cierra o falla a mitad de la escritura, el archivo anterior queda intacto en lugar de quedar a medias. ensure_ascii=False deja los acentos legibles.  
- cargar_sesion(ruta). Tiene tres resultados posibles: si el archivo existe y es válido, devuelve la sesión; si no existe, devuelve una sesión vacía (primer uso); si está dañado (OSError o ValueError al leerlo), lo **renombra a .bak** y devuelve una sesión vacía. **Por qué .bak y no borrarlo:** el usuario puede intentar recuperarlo a mano; el programa arranca igual y no pierde nada de forma silenciosa.  
## **8. render.py**  
**Para qué existe.** Convierte el estado en una imagen: mapa escalado, grilla, niebla de guerra con luces y sombras, fichas y ayudas del DM. **Depende de items y de Pillow; no usa Tk y no modifica el estado.** Es una función pura, por eso sirve igual para las dos ventanas y se prueba comparando píxeles.  
### **Cachés**  
Hay cinco diccionarios a nivel de módulo: \_cache_degradados (estampas circulares de luz), \_cache_mapa_escalado (la imagen ya escalada), \_cache_mapa_con_grilla (escalada más grilla), \_cache_niebla_explorada (máscara de lo recordado) y \_cache_caras (imágenes de fichas recortadas). **Por qué:** durante una animación se redibuja en cada cuadro y esas cuatro cosas casi nunca cambian. Cada caché se vacía cuando supera un límite (6 entradas, u 80 en el caso de las caras) para no crecer sin fin.  
### **Superposicion**  
Dataclass con lo que se dibuja **encima** del mapa y no se guarda: seleccion, vista_previa (item, casilla destino), pared_en_curso y animadas (diccionario de item a su posición actual, con decimales, mientras se desliza). **Por qué separada de la Sesión:** son datos transitorios; así lo guardado queda limpio y el dibujo recibe estos datos por un único parámetro. La ventana de jugadores recibe una copia con vista_previa y pared_en_curso en None (hecha con dataclasses.replace).  
### **Funciones auxiliares**  
- olvidar_niebla_explorada(). Vacía la caché de la memoria. Se usa al olvidar zonas. **Limitación conocida:** la clave de esa caché usa la cantidad de zonas y no su contenido; funciona porque en el programa las zonas solo se agregan o se borran todas.  
- fuente(tamano). Devuelve la tipografía de Pillow para un tamaño, memorizada con lru_cache para no recrearla en cada texto.  
- luz_visible(tamano, centro, paredes). Calcula lo que ve una luz situada en centro. **Lógica:** parte de una imagen toda blanca (255 = visible); por cada pared proyecta una **sombra**: el cuadrilátero formado por los dos extremos de la pared y esos mismos extremos desplazados lejos, en la dirección que los aleja de la luz (3 × ancho, suficiente para salir de la zona), y lo pinta de negro. Las paredes completamente fuera de la zona se saltean. Al final aplica un desenfoque gaussiano de 1 píxel para suavizar los bordes. **Por qué sombras por polígonos:** es una técnica simple y exacta para paredes rectas, sin lanzar rayos píxel por píxel.  
- aclarar_niebla(mascara, cx, cy, radio_fuerte, radio_tenue, nivel_fuerte, nivel_tenue, paredes, visible). Dibuja una luz sobre la máscara de niebla (0 = sin niebla, 255 = niebla total). **Lógica en pasos:**  
  1. Arma una **estampa** circular a partir del degradado radial de Pillow, redimensionada al diámetro del radio tenue, y la guarda en caché.  
  2. Cada píxel de la estampa se calcula con una tabla de 256 valores que suma tres niveles: nivel_fuerte adentro, nivel_tenue entre el radio fuerte y el tenue, y 255 afuera, con transiciones suaves (curva de «paso suave») en cada borde.  
  3. El número 180 corrige una característica del degradado de Pillow: vale unos 180 en el borde del círculo y llega a 255 recién en las esquinas. Sin esta corrección el resplandor salta a un cuadrado cuando solo hay luz fuerte (un error real que se encontró y corrigió).  
  4. Si hay paredes, se calcula luz_visible y se combina con lighter(estampa, invertir(visible)): lo que está en sombra pasa a niebla total.  
  5. Si se recibe visible (la máscara de lo que ve algún jugador), se combina igual: la luz solo aclara donde un jugador tiene línea de visión.  
  6. Se pega en la máscara con darker, que toma el mínimo entre lo que ya había y la estampa. **Por qué darker:** con varias luces, el píxel queda con el menor nivel de niebla (gana la más brillante) sin que una luz borre a otra.  
- cara_de_ficha(ruta, diametro). Devuelve la imagen de una ficha recortada en círculo. **Lógica:** recorta un cuadrado centrado, lo escala al diámetro y arma una máscara circular dibujada al **cuádruple de tamaño** y reducida con LANCZOS, lo que da bordes suaves. Si la imagen no se puede abrir, guarda None en la caché para no reintentarlo en cada cuadro; el dibujo vuelve entonces a la ficha de color.  
### **dibujar_mapa(imagen_mapa, sesion, ancho, alto, es_dm, extra)**  
Devuelve la imagen final y la escala usada. Pasos:  
1. **Escala.** El mapa se ajusta a la ventana manteniendo proporción: escala = min(ancho_disp/ancho_img, alto_disp/alto_img).  
2. **Mapa escalado (caché).** Clave: ruta, ancho y alto.  
3. **Grilla (caché).** Se dibuja sobre una capa transparente y se compone una vez; la clave incluye opciones de grilla, tamaño de casilla y desfase. Las líneas empiezan en desfase × escala módulo el tamaño de casilla.  
4. **Funciones internas.** centro_de(col, fila, lado) da el centro de un bloque en píxeles; centro_px(item) lo calcula en la posición animada si el item se está deslizando; a_pixeles convierte un vértice de la grilla; aclarar aplica aclarar_niebla para un item; dibujar_ficha pinta una ficha.  
5. **Niebla.** Se calcula a **media resolución** (es suave por naturaleza, y así es cuatro veces más barata). Se parte de una máscara con el nivel base (2,55 × opacidad); si la memoria está activa se usa la máscara cacheada de zonas exploradas (cada zona se aclara con todo_fuerte=True, o sea toda su zona, tenue incluida, como luz fuerte); luego se aclara por cada jugador con visión (fuerte en 0, tenue a la mitad del nivel base). Las luces se aclaran igual, pero solo dentro de una máscara de **línea de visión de los jugadores** (sin límite de distancia, tapada por las paredes): una zona iluminada que ningún jugador puede ver no se revela **en la ventana de jugadores**; la ventana del DM sigue mostrando las luces completas. Para el DM la máscara se divide a la mitad (v // 2) y así ve a través de la niebla. Finalmente se escala la máscara y se compone con un fondo negro.  
6. **Ayudas del DM.** Solo en la ventana del DM: paredes en naranja, la pared en curso en amarillo y las luces.  
7. **Fichas.** Cada jugador se pinta como círculo de color con su inicial, o con su imagen si la tiene. El anillo es dorado si el item está seleccionado. **Comportamiento heredado:** el anillo dorado también se ve en la ventana de jugadores, porque el código previo ya le pasaba la selección; se conservó para mantener el comportamiento exacto.  
8. **Vista previa del movimiento.** Línea desde el origen al destino, círculo de destino y el texto «N casillas» (la diagonal cuenta 1). El texto se desplaza en perpendicular a la línea para quedar al costado, sobre un fondo negro.  
## **9. herramientas.py**  
**Para qué existe.** Define qué hace el mouse sobre el mapa según la herramienta activa. Es la aplicación del **patrón Estado** (candidato B): en lugar de tres manejadores con cadenas de if sobre cinco banderas, hay un objeto herramienta activo con tres métodos: apretar, arrastrar y soltar. **No importa a ningún otro archivo del proyecto:** recibe el Editor y el Puntero como parámetros, y por eso no hay dependencia circular con editor.py.  
- Herramienta (base). Sus tres métodos no hacen nada. **Por qué:** cada herramienta redefine solo los que necesita (por ejemplo BorrarPared solo usa apretar).  
- Mover. Guarda su propio estado: item (el agarrado) y agarre (la casilla del item que se tomó).  
  - apretar. Busca el item que ocupa la casilla del clic, **primero entre los jugadores y luego entre las luces**, y lo marca como seleccionado. Si el clic cae en un lugar vacío, la selección se limpia. **Por qué se guarda el agarre:** es la diferencia entre la casilla del clic y la esquina del item, para que al arrastrar una ficha grande se mantenga el punto exacto por donde se la agarró.  
  - arrastrar. Calcula el destino restando el agarre y lo pasa por editor.destino_para; guarda en la superposición la vista previa. **Decisión:** la vista previa muestra el destino **realmente alcanzable** (ya acotado al mapa y frenado por paredes), no el lugar donde está el mouse; así lo que se ve es lo que va a pasar.  
  - soltar. Limpia el agarre y la vista previa, y si había una vista previa manda al Editor a mover el item.  
- Colocar(crear). Recibe una **fábrica** crear(col, fila) que devuelve el item. **Por qué una fábrica:** la herramienta no necesita saber si está colocando un jugador genérico, un personaje guardado o una luz; así sirve para los tres. apretar crea el item, lo **centra** sobre el clic corriendo la esquina (lado - 1) // 2 casillas, lo agrega mediante el Editor y vuelve a Mover. Es una herramienta de **un solo uso**: coloca y se desactiva.  
- DibujarPared. apretar fija el vértice inicial; arrastrar actualiza el final y repinta la vista previa; soltar crea la pared **solo si** los dos vértices son distintos y no existe ya la misma pared (en cualquier dirección). **Por qué solo al soltar:** evita paredes de longitud cero o repetidas por clics sueltos. La herramienta queda activa para dibujar varias seguidas.  
- BorrarPared. apretar busca la pared más cercana al clic con una tolerancia de **12 píxeles de pantalla** (convertidos a píxeles de imagen dividiendo por la escala) y la elimina. **Por qué 12 píxeles de pantalla:** es una zona cómoda para acertar a una línea fina sin importar cuánto zoom tenga la imagen.  
## **10. editor.py**  
**Para qué existe.** Es el **núcleo de las reglas** (candidato A): todo lo que puede hacer el DM sobre el mapa. Es la única puerta de entrada de la interfaz y no conoce Tk; cuando algo cambia, **avisa** a la vista. **Depende de herramientas, items, mapa y de render** (solo para Superposicion y la función que vacía una caché).  
### **Clases de apoyo**  
- VistaNula. Define lo que el Editor necesita de una vista, con cuatro avisos que por defecto no hacen nada: repintar (hay que volver a dibujar), reconstruir_filas (cambió la lista de jugadores, luces o personajes), iniciar_animacion (hay una animación nueva, hay que llamar a avanzar_animaciones en cada cuadro) y herramienta_cambiada. **Por qué:** es el patrón **objeto nulo** (el Editor nunca pregunta si hay vista) y a la vez la costura de pruebas: los tests usan una VistaFalsa que registra los avisos.  
- Puntero. La posición del mouse **ya traducida** a unidades del mapa: casilla, vértice más cercano, píxeles de imagen y escala. **Por qué:** la conversión se hace una sola vez en el Editor, y las herramientas reciben datos listos en lugar de repetir cuentas.  
- Animacion. Los datos de un movimiento en curso: item, origen, destino, hora de inicio, duración, cantidad de casillas, cuántas ya se recordaron y el mapa en que ocurre.  
### **Clase Editor**  
- \_\_init\_\_(sesion, vista=None). Guarda la sesión y la vista (o una nula), y prepara: imagen (la imagen PIL del mapa abierto), geometria (desfase y escala con que se dibujó el mapa, para ubicar clics), extra (la superposición), la herramienta activa y \_animaciones. **Decisión:** se crea **una sola instancia de Mover** y se reutiliza, y \_animaciones es un diccionario de item a animación: **una por item**, de modo que mover algo que ya se estaba moviendo cancela la anterior.  
- mapa y tam_imagen (propiedades). El mapa abierto y el tamaño de su imagen. Si se pide el tamaño sin mapa abierto lanza un RuntimeError claro.  
- abrir_mapa(ruta). **Lógica:** (1) intenta abrir la imagen; si falla, deja todo como estaba y relanza la excepción (la vista muestra el error); (2) si ya había un mapa abierto, guarda en él las posiciones de los jugadores; (3) cambia al mapa nuevo, creando uno vacío si es la primera vez; (4) cancela todas las animaciones; (5) aplica las posiciones que ese mapa recordaba; (6) acota todo al mapa nuevo (la grilla puede ser distinta); (7) avisa a la vista. **Por qué el orden:** las posiciones se guardan **antes** de cambiar de mapa, porque después ya no se sabría de cuál eran.  
- cambiar_opcion(nombre, valor). Cambia una opción de pantalla y repinta.  
- cambiar_ajuste_mapa(ajuste, valor). Cambia tamaño de casilla o desfase y **vuelve a acotar todos los items**; si no, al agrandar las casillas una ficha podría quedar fuera del mapa y no poder agarrarse.  
- activar_recuerdo(activado). Enciende o apaga la memoria; al encender, registra de inmediato lo que ven los jugadores ahora.  
- olvidar_zonas(). Borra lo recordado, vacía la caché de niebla y vuelve a registrar lo que se ve ahora.  
- recordar(item, mapa=None, col=None, fila=None). Guarda la zona que ve el item. **Condiciones para recordar:** la memoria está activa, el item tiene visión y algún rango mayor que cero. Evita duplicados con if zona not in lista (por eso Zona es inmutable). Los parámetros opcionales permiten recordar casillas intermedias de un recorrido.  
- fabrica_jugador(personaje=None) y fabrica_luz(). Devuelven funciones crear(col, fila) para Colocar. La de jugador **consume** proximo_id (lo lee y lo incrementa) justo al crear, no al armar la fábrica, para que cancelar una colocación no gaste un número.  
- agregar_item(item). Lo acota al mapa, lo suma a la lista que corresponda (jugadores o luces del mapa, según su clase), lo selecciona, registra su zona y avisa.  
- quitar_item(item). Lo quita, limpia la selección si era él, descarta su animación y avisa.  
- cambiar_lado(item, lado). Cambia el tamaño y lo acota, porque una ficha más grande tiene otro centro.  
- cambiar_vision(item, con_vision). Activa o desactiva su visión y, si hay mapa, registra su zona.  
- guardar_personaje(jugador). Si el jugador ya viene de un personaje, lo **actualiza**; si no, crea uno nuevo con un identificador aleatorio y los vincula.  
- borrar_personaje(personaje). Lo quita de la biblioteca; los jugadores ya colocados no se tocan.  
- borrar_paredes(). Vacía las paredes del mapa; la confirmación con el usuario es cosa de la vista.  
- usar_herramienta(clave, herramienta). **Lógica de botón con interruptor:** si la clave ya es la activa, vuelve a Mover; si no, activa la nueva. Siempre pasa primero por volver_a_mover, que limpia la pared en curso. Esto reproduce exactamente el comportamiento de los botones.  
- volver_a_mover(). Restablece la herramienta Mover y avisa.  
- \_puntero(x, y), apretar, arrastrar, soltar. Traducen el mouse a un Puntero y se lo pasan a la herramienta activa. Si todavía no se dibujó el mapa (no hay geometria), ignoran el evento.  
- mover_seleccion(delta_col, delta_fila). Mueve el item seleccionado una casilla; es lo que usan las flechas del teclado.  
- destino_para(item, col, fila). **Regla única de destino:** primero acota al mapa y luego frena en la primera pared. La usan tanto la vista previa como el movimiento real, lo que elimina la duplicación que existía antes.  
- mover(item, col, fila, ahora=None). **Lógica:** calcula el destino real; toma como origen la posición que se está mostrando (si ya estaba moviéndose) o la lógica; **actualiza de inmediato la posición lógica** (col, fila) al destino; registra una Animacion con duración max(0,2 s; casillas / 6) (unas 6 casillas por segundo) y avisa a la vista que arranque el temporizador. **Por qué la posición lógica cambia al instante:** guardar, agarrar la ficha y calcular colisiones usan siempre el destino; solo el *dibujo* se desliza. El parámetro ahora existe para probar el tiempo sin esperar.  
- avanzar_animaciones(ahora=None). Avanza cada animación hasta ahora. **Lógica:** el avance (0 a 1) se suaviza con una curva de «paso suave» (a²(3-2a), arranca y frena despacio); se actualiza la posición mostrada por interpolación lineal; mientras avanza, **recuerda cada casilla por la que pasa** (y la visión acompaña a la ficha, porque el dibujo usa la posición mostrada); al llegar, retira la animación y registra el destino. Devuelve True mientras queden animaciones, para que la vista sepa si seguir llamándola.  
## **11. vista_tk.py**  
**Para qué existe.** Es el **adaptador** entre Tk y el Editor: arma los widgets, traduce clics y controles a llamadas al Editor, y vuelve a dibujar cuando el Editor avisa. No contiene reglas de edición. Es el único archivo que importa tkinter (dentro de main(), de modo que el resto del paquete se puede importar sin Tk). **Depende de editor, herramientas, items, persistencia y render.**  
- \_EstadoVentana. Dataclass con lo que solo le importa a la ventana: lista de archivos, ids de los temporizadores de Tk, si el panel de mapas está oculto y su ancho. **Por qué una dataclass y no un diccionario:** el diccionario ui mezclaba tipos distintos y el verificador de tipos no podía saber qué había en cada clave; con atributos tipados el código es más legible (ui.panel_oculto) y no hay errores de tipeo en las claves.  
- \_Vista. Objeto con los cuatro avisos del Editor como atributos que main() reemplaza por funciones reales. **Por qué:** las funciones de Tk se definen dentro de main() y recién existen después de crear el Editor; reasignar atributos evita una dependencia circular.  
Dentro de main(), las funciones se agrupan así:  
- **Estilo y estructura.** Tema negro con texto blanco y recuadros rojos; paneles: franja con botón, panel de mapas, canvas del DM y panel derecho con barra de desplazamiento. alternar_panel_mapas oculta o muestra el panel de mapas y recuerda su ancho.  
- **Dibujo.** pintar(canvas, es_dm) obtiene la imagen de dibujar_mapa y la muestra; si el tamaño no cambió, **actualiza la imagen en el lugar** (más fluido que recrearla). Para la ventana de jugadores usa una copia de la superposición sin vista previa ni pared en curso. repintar_ahora pinta las dos ventanas; pedir_repintado agrupa pedidos con una espera de 15 ms para no redibujar de más.  
- **Mapas.** escanear_carpeta busca imágenes (png, jpg, jpeg, webp, gif, bmp) en la carpeta y subcarpetas; elegir_carpeta abre el selector; abrir_mapa llama al Editor, muestra un cuadro de error si falla y actualiza los deslizadores; elegir_mapa_de_lista reacciona a la selección.  
- **Controles.** Ayudantes seccion, agregar_check y agregar_slider (muestra el valor al lado); cambiar_tamano_texto cambia solo la tipografía (pequeño 9, mediano 11, grande 13) sin alterar el tamaño de los paneles.  
- **Herramientas.** mostrar_herramienta_activa pinta de rojo el botón de la herramienta activa; borrar_todas_las_paredes pide confirmación antes; menu_jugador muestra el menú de jugador genérico, personajes guardados y borrado de personajes (si la herramienta ya está activa, el clic la cancela).  
- **Filas de jugadores y luces.** leer_numero convierte un campo a número (vacío o inválido vale 0); elegir_color, elegir_imagen y editar hacen cambios simples; agregar_spin crea un campo numérico de rango; agregar_fila arma la fila completa de un item; reconstruir_filas la regenera cuando el Editor avisa.  
- **Animación.** iniciar_animacion arranca **un solo temporizador** y paso_animacion avanza todas las animaciones y dibuja un cuadro; se reprograma con 1 ms de espera mientras queden animaciones. **Por qué un solo temporizador:** evita que muchos movimientos simultáneos dibujen varias veces por cuadro.  
- **Mouse y teclado.** El canvas del DM conecta presionar, arrastrar y soltar al Editor; al_tecla mueve la selección con las flechas, salvo que el foco esté en un campo de texto o numérico.  
- **Guardado y arranque.** guardar_ahora guarda la sesión (anotando antes el tamaño de texto elegido) y avisa si falla; autoguardado repite cada 20 segundos; también se guarda al cerrar la ventana del DM. El arranque conecta los avisos del Editor, aplica el tamaño de texto, vuelve a escanear la carpeta guardada y reabre el último mapa si todavía existe.  
**Nota de honestidad:** este es el único archivo que no se pudo ejecutar durante el desarrollo (el entorno no tiene tkinter). Está verificado por análisis estático, y se mantuvo deliberadamente delgado para que el riesgo sea mínimo.  
## **12. dnd.py**  
**Para qué existe.** Es el punto de entrada: python dnd.py. Tiene una sola línea útil, from dnd_mapas.vista_tk import main, y la llamada protegida por if \_\_name\_\_ == '\_\_main\_\_'. **Por qué se mantuvo:** se pidió expresamente que siguiera siendo el archivo que se ejecuta. Su docstring funciona como índice del proyecto (una línea por archivo). Como vista_tk importa tkinter dentro de main() y no al cargarse, importar dnd no exige tener Tk instalado.  
## **13. test_dnd.py y cómo se verificó**  
Se ejecuta con python test_dnd.py y escribe ok si todo pasa. Usa solo assert (sin dependencias de frameworks).  
**Ayudantes.** escena(...) arma una sesión con un mapa y su imagen en blanco; pixel(...) dibuja y devuelve el color de un píxel (comprueba que sea una tupla, para el verificador de tipos); VistaFalsa es una vista que registra los avisos del Editor.  
  
|  |  |  
| - | - |  
| Prueba |  Qué cubre |  
| test_luces_y_niebla |  Rango fuerte y tenue; luz redonda (simetría horizontal y vertical); que solo con luz fuerte no aparezca un cuadrado; opacidad 0 y 100; que una luz despeje la niebla; rango 0; ficha de 4 cubos; visión que sigue a una ficha que se desliza; ayudas del DM; fichas con imagen y su respaldo si falta el archivo |  
| test_paredes_y_memoria |  La pared tapa lo de atrás y no lo de adelante; luz o zona que ignora paredes; la memoria respeta las paredes; lo recorrido se ve como luz fuerte con su zona tenue; sin memoria no se ve |  
| test_luces_solo_dentro_de_la_vision_de_un_jugador |  La luz se ve sin paredes; no se ve detrás de una pared para los jugadores, pero sí para el DM; vuelve a verse cuando el jugador pasa al otro lado; sin jugadores con visión no revela nada |  
| test_items |  Valores por defecto; claves exactas que se guardan de cada clase; ignorar lo que sobra; copia desde y hacia personajes; igualdad por valor de Zona y por identidad de los items; fichas de 2×2 |  
| test_geometria_y_paredes |  Acotar al mapa; vértice más cercano; pared más cercana; intersecciones; todos los casos de colisión (frenar, pasar por encima de la punta, rozar una punta, ficha grande, esquina en L, parado sobre una pared diagonal) |  
| test_guardado |  Ida y vuelta completa; que guardar no modifique la sesión; archivo inexistente; archivo dañado (queda como .bak); lectura de un formato viejo |  
| test_editor |  Flujos completos con vista falsa: colocar, cancelar, centrar fichas grandes, dibujar y borrar paredes (duplicadas, lejanas), arrastrar con vista previa frenada, animación a mitad y al final, memoria del recorrido, flechas, cancelar una animación con otra, luces libres, límites del mapa, reacomodo al cambiar la casilla, personajes, cambio de mapa con posiciones, error al abrir un mapa inexistente |  
  
**Verificaciones adicionales que se hicieron durante el desarrollo:**  
- **Equivalencia con la versión anterior:** se comparó píxel a píxel el dibujo de la versión previa con la nueva en 160 imágenes (80 escenas aleatorias en ventana DM y de jugadores, con paredes, animación, memoria e imágenes), y se verificó que el JSON que producía la versión anterior se carga y se vuelve a guardar idéntico.  
- **Análisis estático:** pyflakes sin avisos y pyright con **0 errores**.  
## **14. Flujos de punta a punta**  
### **Colocar un jugador**  
1. El botón «+ Jugador» llama a menu_jugador (vista), que muestra el menú y, al elegir, llama a editor.usar_herramienta('colocar_jugador', Colocar(editor.fabrica_jugador(personaje))).  
2. El Editor activa la herramienta y avisa herramienta_cambiada; la vista pinta el botón de rojo.  
3. Un clic en el canvas llama a editor.apretar(x, y). El Editor lo convierte en un Puntero y se lo pasa a Colocar.apretar.  
4. Colocar pide el jugador a la fábrica (que consume proximo_id y llama a Jugador.nuevo), lo centra y llama a editor.agregar_item.  
5. agregar_item lo acota al mapa, lo agrega, lo selecciona, registra su zona si la memoria está activa y avisa reconstruir_filas y repintar.  
6. Colocar vuelve a Mover y el botón deja de estar rojo.  
### **Arrastrar una ficha contra una pared**  
1. Mover.apretar selecciona la ficha y guarda el agarre.  
2. Cada movimiento del mouse llama a Mover.arrastrar, que usa editor.destino_para: Mapa.limitar (acota) y Mapa.destino_alcanzable (frena), que a su vez usa camino_bloqueado y segmentos_se_tocan.  
3. El resultado va a la superposición y dibujar_mapa pinta la línea, el círculo de destino y el número de casillas.  
4. Mover.soltar llama a editor.mover, que actualiza la posición lógica y registra la animación, y avisa iniciar_animacion.  
5. La vista arranca su temporizador; cada paso llama a editor.avanzar_animaciones y dibuja. La ficha se desliza, la visión la acompaña y, si corresponde, se va recordando el recorrido.  
### **Cerrar y volver a abrir el programa**  
- **Al cerrar** (o cada 20 s): guardar_ahora toma el tamaño de texto elegido y llama a guardar_sesion, que usa Sesion.a_dict (con las posiciones del mapa abierto) y escribe el archivo de forma atómica.  
- **Al abrir:** cargar_sesion lee el archivo, lo migra si es de un formato viejo y arma la Sesion. La vista reescanea la carpeta, reabre el último mapa con editor.abrir_mapa (que aplica las posiciones de ese mapa) y reconstruye las filas de jugadores y luces.  
## **15. Decisiones que atraviesan todos los archivos**  
- **Compatibilidad hacia atrás.** Las claves del archivo guardado no cambiaron en el refactor; los formatos más viejos se migran al leer. Las clases nuevas rellenan lo que falta con valores por defecto, por eso un archivo anterior a las paredes o a las posiciones por mapa sigue cargando.  
- **Tres sistemas de coordenadas, nunca mezclados.** *Casilla* (enteros col, fila), *vértice* (esquinas de la grilla, para las paredes) y *píxel* (de imagen o de pantalla). Cada función declara cuál usa en su nombre o en su documentación. Las paredes se guardan en vértices para que acompañen a la grilla.  
- **Rendimiento.** Cachés del mapa escalado, de la grilla y de las estampas de luz; niebla calculada a media resolución; único temporizador de animación; actualización de la imagen en el lugar cuando el tamaño no cambia.  
- **Robustez.** Todo item se acota a los bordes del mapa; guardado atómico; archivo dañado conservado como .bak; imagen de ficha inexistente vuelve al color; error al abrir un mapa mostrado en un cuadro sin romper el estado anterior.  
- **Colisión conservadora.** Cuando hay duda, la ficha frena (nada se cuela por una esquina). No hay búsqueda de rutas: el movimiento es siempre una línea recta y la vista previa muestra exactamente hasta dónde llegará.  
- **Nombres en español.** Todas las clases, funciones y variables usan nombres descriptivos en el idioma del usuario (rango_tenue, destino_alcanzable, recordar_recorrido), con un vocabulario único definido al principio de dnd.py.  
- **Sin dependencias extra.** Solo la biblioteca estándar y Pillow.  
- **Verificación por capas.** Pruebas de lógica pura, pruebas de flujos con vista falsa, comparación píxel a píxel contra la versión anterior y análisis estático.  
## **16. Limitaciones conocidas y trabajo pendiente**  
- **El código no es más corto.** Pasó de 655 líneas en un archivo a unas 960 repartidas en 8 módulos más el punto de entrada. Cada módulo es más simple y está probado, pero el total creció por las clases, los docstrings y la separación.  
- **vista_tk.py no se ejecutó durante el desarrollo.** Está verificado por análisis estático y por el diseño delgado del adaptador, pero conviene probarlo a mano.  
- **Caché de la niebla explorada.** Su clave usa la cantidad de zonas y no el contenido (candidato F del informe previo). No afecta el uso normal porque las zonas solo se agregan o se borran todas.  
- **Candidatos D y E pendientes.** La geometría de grilla sigue dentro de Mapa y render; y aunque ya no hay variables globales, la sesión podría separarse aún más.  
- **Comportamiento heredado.** El anillo dorado de selección también aparece en la ventana de jugadores; se dejó igual para no cambiar el comportamiento.  
- **Cambio de mapa mientras algo se desliza.** Se cancelan todas las animaciones en curso, incluidas las de luces del mapa que se deja.  
- **Alcance del movimiento.** Sin búsqueda de rutas, sin puertas, y las paredes solo pueden ir entre dos vértices de la grilla.  
- **Imágenes de fichas por ruta.** El archivo guarda la ruta, no una copia; si el archivo cambia de lugar, la ficha vuelve a mostrarse con su color.  
- **Opciones de pantalla globales.** Si se prefiere que cada mapa tenga su propia grilla visible, niebla u opacidades, esos cinco campos de Opciones pasarían a Mapa.  
