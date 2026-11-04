/* Contenido editable del capítulo 9: Descenso a las profundidades.
   Nota de integración (AGENT.md): este archivo solo declara datos. Para que el navegador lo cargue,
   debe enumerarse en el punto de carga de capítulos (por ejemplo, una etiqueta script en index.html
   antes de app.js o el manifiesto de capítulos). No se modificó app.js ni styles.css. */
window.DND_CHAPTERS=window.DND_CHAPTERS||[];
window.DND_CHAPTERS.push({
  "id": "capitulo-09",
  "number": 9,
  "title": "Descenso a las profundidades",
  "summary": "Tras Gauntlgrym, el grupo viaja con una fuerza expedicionaria de 25 o más personas: ocho días por la superficie y unos treinta y tres bajo tierra hasta Mantol-Derith. Este capítulo organiza la estructura de la campaña y los niveles, el funcionamiento de la fuerza, los viajes y encuentros, los puestos avanzados y las visitas a lugares ya conocidos.",
  "tags": [
    "Viaje",
    "Fuerza expedicionaria",
    "Estructura de campaña",
    "Puestos avanzados",
    "Underdark",
    "Progresión de niveles"
  ],
  "quick": [
    [
      "Objetivo",
      "Llegar a Mantol-Derith al mando de la expedición"
    ],
    [
      "Nivel",
      "8 al salir de Gauntlgrym; 9 al terminar Mantol-Derith"
    ],
    [
      "Tono",
      "Poder y responsabilidad frente a un Underdark que sigue siendo peligroso"
    ],
    [
      "Distancia",
      "180 millas en superficie (8 días) y 200 en el Underdark (33 días)"
    ],
    [
      "Peligro habitual",
      "Eventos de viaje, encuentros menores y un encuentro serio cada 3 o 4 días"
    ],
    [
      "Novedad",
      "Mando delegado, puestos avanzados y regreso a lugares conocidos"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-09-panorama",
      "title": "Panorama del capítulo",
      "description": "Qué es este capítulo, cómo se ubica respecto al libro y cómo repartir el tiempo de mesa.",
      "blocks": [
        {
          "type": "prose",
          "title": "Función narrativa",
          "text": "Este capítulo es una actualización del capítulo 2 (El Darklake): vuelve a tratar de atravesar el Underdark y moverse de un lugar a otro, pero con condiciones muy distintas. Los PJ ya no son prisioneros hambrientos sino los jefes de una fuerza expedicionaria de probablemente 25 personas o más. El ritmo y las sensaciones cambian, aparecen encuentros nuevos y escenas sociales nuevas. Es el momento de que los personajes usen sus nuevas habilidades y su influencia sobre sus compañeros y, a la vez, de sentir que las profundidades siguen siendo amenazantes."
        },
        {
          "type": "callout",
          "title": "Sobre la numeración",
          "text": "En el libro, el capítulo 9 trata de Mantol-Derith. Esta guía coloca este capítulo antes porque, para llegar a Mantol-Derith, hay que atravesar el Underdark y tiene sentido tratar el viaje primero. Es una decisión de organización de la guía, no del módulo."
        },
        {
          "type": "callout",
          "title": "Cómo leer las etiquetas de esta guía",
          "text": "HECHO DE LA AVENTURA: lo que establece el módulo (las tablas de las págs. 145, 146 y 147, la mecánica de puestos avanzados, los seguidores de la pág. 175). SUGERENCIA DEL AUTOR: las propuestas de la guía fuente (orden y niveles, estructura de la fuerza, tiradas de bajas, daño de cobertura, casco de teletransporte). IDEA PROPIA: recordatorios y apoyos de mesa añadidos aquí. Las sugerencias son opcionales y deben adaptarse a tu campaña."
        },
        {
          "type": "table",
          "title": "Qué es hecho, qué es sugerencia y qué es idea propia",
          "headers": [
            "Elemento",
            "Estatus",
            "Nota para el DM"
          ],
          "rows": [
            [
              "Los agentes del Zhentarim llevan al grupo 180 millas por la superficie y luego 200 millas por el Underdark",
              "Hecho de la aventura (según la fuente)",
              "Son unos 8 días y unos 33 días al ritmo normal. Hay mucho tiempo para eventos."
            ],
            [
              "Tabla de eventos de viaje (pág. 145), encuentros demoníacos (pág. 146) y datos de lugares visitados (pág. 147)",
              "Hecho de la aventura",
              "Son la base del capítulo."
            ],
            [
              "Mecánica de puestos avanzados (pág. 147) y 100 seguidores tras vencer a Karazikar (pág. 175)",
              "Hecho de la aventura",
              "Permite reducir el tamaño de la expedición y dar sensación de logro."
            ],
            [
              "Orden de los capítulos y tabla de niveles",
              "Sugerencia del autor",
              "El libro deja el avance de nivel muy vago después de Gauntlgrym."
            ],
            [
              "Ejecutar La boda fétida antes de Menzoberranzan",
              "Sugerencia del autor",
              "Mejora el crescendo de la historia."
            ],
            [
              "Estructura de burbujas, teniente, tiradas de bajas, fuego de cobertura",
              "Sugerencia del autor",
              "Mecánicas de mesa para no gestionar a 25 personas en detalle."
            ],
            [
              "Reducir el guardián de escudo a 100 PG",
              "Sugerencia del autor",
              "Ya mencionada en el capítulo 8."
            ],
            [
              "Permitir teletransporte solo a lugares ya visitados; casco de teletransporte en el almacén de Ghazrim DuLoc",
              "Sugerencia del autor",
              "Alivia el exceso de viajes por tierra sin saltarse la faerzress en lugares nuevos."
            ],
            [
              "Plantillas de eventos y encuentros extra por nivel",
              "Idea propia",
              "Ayuda para llenar los días de viaje."
            ]
          ]
        },
        {
          "type": "timeline",
          "title": "Índice del capítulo y uso en mesa",
          "items": [
            [
              "1 · Niveles y estructura de campaña",
              "Leelo antes de empezar: decide el orden de los capítulos y la progresión de niveles."
            ],
            [
              "2 · La fuerza expedicionaria",
              "Organizá la estructura de mando con los jugadores al salir de Gauntlgrym."
            ],
            [
              "3 · Viajes y encuentros",
              "Es el cuerpo de la sesión: eventos, encuentros menores, encuentros para los PJ."
            ],
            [
              "4 · Puestos avanzados",
              "Úsalos para dividir la fuerza y dar sensación de construcción."
            ],
            [
              "5 · Visitar lugares conocidos",
              "Preparalo por si los PJ deciden regresar a lugares anteriores."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Confirmá el nivel de los PJ al salir de Gauntlgrym (debería ser 8).",
            "Anotá quiénes componen la fuerza expedicionaria y de qué facción viene cada uno.",
            "Preparar encuentros de nivel adecuado: las tablas del libro son débiles para los PJ.",
            "Elegí qué eventos de la tabla de la pág. 145 querés tener a mano.",
            "Decidí cómo manejarás el teletransporte y la faerzress.",
            "Repasá las consecuencias de las visitas anteriores a Blingdenstone, Gracklstugh y otros lugares.",
            "Decidí si aplicás el orden de capítulos y la tabla de niveles de la sección siguiente."
          ]
        }
      ]
    },
    {
      "id": "capitulo-09-niveles",
      "title": "Niveles y estructura de la campaña",
      "description": "Orden recomendado de las aventuras y progresión de niveles para la segunda mitad de la campaña.",
      "blocks": [
        {
          "type": "prose",
          "title": "El problema del libro",
          "text": "Algunos detalles de la aventura y del avance de niveles quedan demasiado vagos en el libro. Después de Gauntlgrym la aventura es bastante lineal y todo apunta a la batalla climática en Menzoberranzan. Sin embargo, según el libro, los aventureros visitan la ciudad drow en el capítulo 15, luego viajan a Araumycos en el capítulo 16 y finalmente vuelven a Menzoberranzan para el final. Eso tiene poco sentido narrativo y arruina la acumulación de tensión. Tampoco se aborda el avance de niveles: se sabe que los PJ deben ser nivel 8 en Gauntlgrym y nivel 15 al final, pero no hay nada entre medias."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Sugerencia del autor: ejecutar La boda fétida antes de Menzoberranzan",
          "text": "El autor recomienda ejecutar La boda fétida (The Fetid Wedding) antes de Menzoberranzan. Dice que funciona muy bien y hace que la historia fluya mejor. Es un cambio de orden respecto al libro; si tu mesa ya está en otro punto, adaptalo con cuidado."
        },
        {
          "type": "table",
          "title": "Orden de eventos y niveles sugeridos",
          "headers": [
            "Etapa",
            "Nivel",
            "Nota"
          ],
          "rows": [
            [
              "Gauntlgrym",
              "8",
              "Nivel de partida del capítulo 8."
            ],
            [
              "Mantol-Derith",
              "9 al terminarlo",
              "Primer hito de nivel de esta mitad."
            ],
            [
              "Gravenhollow",
              "—",
              "Sin cambio de nivel indicado."
            ],
            [
              "Torre de la Venganza",
              "—",
              "Sin cambio de nivel indicado."
            ],
            [
              "Wormwrithings (Gusanos reptantes)",
              "10 tras el Criadero de Gusanos; 11 tras el Vasto Olvido",
              "Dos subidas dentro de la misma sección."
            ],
            [
              "El Laberinto",
              "12 tras derrotar a Yeenoghu o usar el motor del laberinto",
              "Hito importante."
            ],
            [
              "La boda fétida",
              "13 tras enfrentar a Zuggtmoy y Juiblex",
              "Sugerencia: antes de Menzoberranzan."
            ],
            [
              "La ciudad de las arañas",
              "14 tras colocar el corazón oscuro",
              "Preparación del final."
            ],
            [
              "Batalla final",
              "15 al terminarla",
              "Cierre de la campaña."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Por qué estos niveles alcanzan",
          "text": "Con esta progresión los PJ llegan a nivel 15 al terminar la batalla final, no antes. Según el autor, un grupo de cuatro o más personajes de nivel 14 es una amenaza muy peligrosa incluso para seres como Orcus o Demogorgon, así que no hace falta que lleguen al nivel 15 antes del combate decisivo. Un grupo equilibrado de nivel 11 tiene buenas probabilidades de derrotar a Yeenoghu en el Laberinto. A nivel 13, pueden enfrentar a Zuggtmoy en el sueño gris y después combatir, e incluso derrotar, a Juiblex. Es difícil pero posible, y da a los jugadores una sensación de realización épica."
        },
        {
          "type": "callout",
          "title": "Idea propia: usar la tabla como guía, no como regla",
          "text": "Si el grupo hace misiones secundarias, avanza más rápido o pierde miembros, ajustá los niveles. Lo importante es la sensación de crecimiento constante. Anotá en tu registro el nivel real de cada PJ en cada hito para recalibrar los encuentros."
        }
      ]
    },
    {
      "id": "capitulo-09-fuerza",
      "title": "La fuerza expedicionaria",
      "description": "Composición, estructura de mando y reglas rápidas para no ahogarse en una mesa con decenas de PNJ.",
      "blocks": [
        {
          "type": "prose",
          "title": "Una cifra intimidante",
          "text": "Cuando se lee cuánta gente seguirá a los PJ al Underdark, asusta. Si el grupo forjó alianzas con todas las facciones de Gauntlgrym, cuenta con los siguientes miembros. Sumado a cualquier PNJ que siga con el grupo, como Derendil o Eldeth, con cuatro PJ el total es de unas 30 personas, más el guardián de escudo y los lagartos. Puede recordar a la primera sesión en Velkynvelve, cuando se escapaba de la prisión a nivel 1 con unos diez PNJ controlados por los jugadores, algunos casi inútiles como Stool o Shuushar."
        },
        {
          "type": "table",
          "title": "Composición posible de la expedición",
          "headers": [
            "Miembros",
            "Cantidad",
            "Facción de origen (derivada del capítulo 8)"
          ],
          "rows": [
            [
              "Guardián de escudo",
              "1 (sugerencia: 100 PG)",
              "Arpistas"
            ],
            [
              "Lagartos gigantes",
              "7 (con 4 PJ)",
              "Enclave Esmeralda"
            ],
            [
              "Veteranos",
              "5",
              "Orden del Guantelete"
            ],
            [
              "Exploradores",
              "3",
              "Enclave Esmeralda"
            ],
            [
              "Espías",
              "3",
              "Alianza de los Lores"
            ],
            [
              "Guardias",
              "5",
              "Alianza de los Lores"
            ],
            [
              "Matones",
              "8",
              "Zhentarim"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Nota sobre la columna de facciones",
          "text": "La lista de miembros viene de la guía fuente. La facción de origen se deduce de lo que ofrece cada una en el capítulo 8; no la da el texto como tal. Si algún aliado no se consiguió, quitá a esos miembros de la lista."
        },
        {
          "type": "prose",
          "title": "Para qué sirve la fuerza",
          "text": "Sugerencia del autor: el objetivo de la fuerza no es dar ventaja en combate ni jugar combates masivos. Es más bien una cuestión de sabor. Meses atrás, los PJ cruzaban el Underdark en la miseria, sin preparación, sin armas ni comida. Ahora son los jefes y su importancia es reconocida por el rey Bruenor y los representantes de las facciones. La fuerza está ahí para facilitar la vida de los PJ. Lo que ellos solían hacer al viajar ahora lo hacen otros."
        },
        {
          "type": "list",
          "title": "Estructura de burbujas (sugerencia del autor)",
          "items": [
            "Círculo interior: las personas de mayor rango. Incluye a los PJ, a cualquier teniente designado y quizá a un matón del Zhentarim en representación de su facción. Toman todas las decisiones sobre la fuerza. Los PJ tienen la última palabra, pero pueden consultar a los demás líderes.",
            "Fuerza principal: la mayoría del grupo. El teniente la dirige y delega las tareas: forrajear, cocinar, reparar equipo, pelear contra las amenazas que encuentre la partida de exploración y montar el campamento.",
            "Partida de exploración: los exploradores no viajan con la fuerza. Suelen ir a varios kilómetros por delante y por detrás. Cada hora uno vuelve a informar al teniente, que toma decisiones. Si descubren una amenaza, deben reunir toda la información posible y volver a informar; no pelean antes de avisar."
          ]
        },
        {
          "type": "prose",
          "title": "Designar al teniente",
          "text": "Lo primero que deben hacer los PJ es designar a un teniente, una persona a cargo. Uno de los veteranos de la Orden del Guantelete es una gran elección. Además pueden querer nombrar a un maestro explorador o a un jefe de campamento. Pedí a los jugadores que lo decidan en la partida, nombrá a los PNJ y recordá su personalidad: serán voces recurrentes durante semanas de viaje."
        },
        {
          "type": "characters",
          "title": "Roles de la expedición",
          "items": [
            {
              "name": "Teniente",
              "role": "Segundo al mando · fuerza principal",
              "status": "Lo elige el grupo",
              "description": "Dirige la fuerza principal y delega las actividades. Recibe los informes de los exploradores y decide si resolver el problema o avisar a los PJ.",
              "play": "Disciplinado, práctico y leal. Un veterano de la Orden del Guantelete es una buena opción. Informa al terminar el día de lo que la fuerza resolvió.",
              "future": "Puede ser un PNJ recurrente, ganarse el afecto del grupo o morir en un combate duro."
            },
            {
              "name": "Maestro explorador",
              "role": "Líder de la partida de exploración",
              "status": "Opcional",
              "description": "Coordina a los exploradores, decide los relevos y prepara los informes horarios.",
              "play": "Observador, callado y un poco inquieto cuando el terreno se vuelve extraño.",
              "future": "Si muere o desaparece, la fuerza pierde ojos y los PJ lo notan."
            },
            {
              "name": "Jefe de campamento",
              "role": "Logística",
              "status": "Opcional",
              "description": "Organiza comida, guardias, reparaciones y el montaje del campamento.",
              "play": "Ocupado, práctico y con quejas útiles sobre raciones o discordias.",
              "future": "Puede plantear los problemas de disciplina y suministros de las tablas de eventos."
            },
            {
              "name": "Matón del Zhentarim representante",
              "role": "Círculo interior",
              "status": "Opcional",
              "description": "Representa a su facción dentro del círculo de decisiones. Conoce el camino a Mantol-Derith.",
              "play": "Pragmático y atento a que el acuerdo con Davra Jassur se cumpla.",
              "future": "Es un canal natural para el informe y el reparto del 20 % pactados en el capítulo 8."
            }
          ]
        },
        {
          "type": "prose",
          "title": "Una vida más cómoda",
          "text": "Sugerencia del autor: en una organización así, los PJ viajan y todo se hace por ellos. Después de meses cruzando el Underdark como parias, es un cambio bienvenido. El Underdark sigue siendo peligroso, pero con un grupo tan grande la mayoría de las amenazas no atacará abiertamente. Aun así, cada día o dos, la fuerza principal tiene que combatir algo: una partida de goblins, una emboscada de orcos u otros habitantes de las profundidades. En su mayoría pueden manejar lo que encuentran. Al final del día el teniente puede contar a los PJ que la fuerza derrotó a unos gusanos carroñeros."
        },
        {
          "type": "table",
          "title": "Bajas en los combates de la fuerza principal (tirada de porcentaje)",
          "headers": [
            "Resultado (d100)",
            "Consecuencia",
            "Nota"
          ],
          "rows": [
            [
              "50 o menos",
              "Sin bajas",
              "La fuerza resuelve el encuentro sin problemas."
            ],
            [
              "Más de 50",
              "1d6 personas heridas",
              "Atendidas por los médicos de combate."
            ],
            [
              "Más de 85",
              "1 muerto y 1d6 heridos",
              "Registrá quién murió: puede ser un PNJ con nombre."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Cuándo intervienen los PJ",
          "text": "Los miembros de la expedición conocen la capacidad de combate de los PJ pero no los molestan con amenazas pequeñas. Cada pocos días, la fuerza principal o la partida de exploración se topan con algo que no pueden manejar. Ese es un encuentro para los PJ. Se recomienda que ocurra cada 3 o 4 días. Resultaría una pesadilla dirigir un combate con los 25 o más miembros."
        },
        {
          "type": "timeline",
          "title": "Tres maneras de iniciar un encuentro para los PJ",
          "items": [
            [
              "A · Informe previo",
              "Los exploradores detectan una amenaza y avisan al teniente. Este decide informar a sus superiores. Los PJ van al frente a enfrentarla. Instrucción permanente: cuando los exploradores vean actividad demoníaca, el aviso llega siempre hasta los PJ; la fuerza principal nunca pelea sola contra demonios."
            ],
            [
              "B · Combate que se complica",
              "Los exploradores detectan una amenaza y el teniente decide atacar con la fuerza principal. A mitad del combate el enemigo recibe refuerzos o resulta demasiado poderoso. Un mensajero urgente avisa al círculo interior. Cuando llegan los PJ, veteranos y matones contienen a los enemigos esperando relevo. Algunos ya pueden haber caído o estar heridos."
            ],
            [
              "C · Sorpresa",
              "Los exploradores no ven la amenaza y la fuerza principal es sorprendida. Sea cual sea el nivel de peligro, se envía un mensajero. Los PJ pueden llegar a salvar a la fuerza o a ver cómo se deshace de una amenaza menor."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Fuego de cobertura (sugerencia del autor)",
          "text": "Cuando los PJ combaten, la fuerza se queda atrás ofreciendo fuego de cobertura. Asigná iniciativa 0 a los arqueros y ballesteros de la fuerza principal. Para ahorrar tiempo, suponé una cifra de daño, por ejemplo 15 a 20 puntos, que repartís entre los enemigos describiendo cómo la fuerza ataca a todo lo que ve. Reducí la cifra a la mitad contra enemigos con resistencia al daño, como la mayoría de los demonios. Podés ajustar la cifra según la armadura enemiga (menor CA, más daño; mayor CA, menos), las resistencias y la cantidad de miembros disponibles. Así el combate sigue fluido y la fuerza participa sin sobrecargar la mesa."
        },
        {
          "type": "checklist",
          "title": "Control de la fuerza",
          "items": [
            "¿Quién es el teniente? ¿Hay maestro explorador o jefe de campamento?",
            "¿Cuántas personas hay vivas, heridas y enfermas?",
            "¿Cuántos exploradores siguen disponibles?",
            "¿El aviso por actividad demoníaca sigue vigente?",
            "¿Qué tareas están delegadas (forrajeo, cocina, reparaciones, campamento)?",
            "¿Cuánta comida y agua quedan?",
            "¿Cuántos días pasaron desde el último encuentro de los PJ?",
            "¿Qué moral tiene la fuerza?"
          ]
        }
      ]
    },
    {
      "id": "capitulo-09-viaje",
      "title": "Viajes y encuentros",
      "description": "Distancias, eventos de viaje, encuentros adecuados al nivel y manejo del teletransporte.",
      "blocks": [
        {
          "type": "prose",
          "title": "Las distancias",
          "text": "Hecho de la aventura (según la fuente): justo después de Gauntlgrym, los agentes del Zhentarim hacen que los PJ viajen 180 millas por la superficie, unos 8 días a ritmo normal, y luego 200 millas por el Underdark, unos 33 días a ritmo normal. Es mucho tiempo y muchas oportunidades para que el grupo use sus habilidades y su influencia con los PNJ."
        },
        {
          "type": "prose",
          "title": "Encuentros aleatorios: el problema de la dificultad",
          "text": "El libro sugiere usar las tablas de encuentros del capítulo 2. Son estupendas para que las resuelva la fuerza principal, pero demasiado débiles para poner en peligro a los PJ. Los únicos encuentros que merecen su atención son los demoníacos (pág. 146). El autor aconseja preparar encuentros adicionales más acordes con el nivel."
        },
        {
          "type": "list",
          "title": "Ideas de encuentros adicionales (sugerencia del autor)",
          "items": [
            "Un grupo drow fuerte.",
            "Una emboscada de orcos con trampas.",
            "Un pulpo de roca reforzado.",
            "Encuentros demoníacos distintos.",
            "Driders.",
            "Una manada de gricks.",
            "Una emboscada de gnolls."
          ]
        },
        {
          "type": "prose",
          "title": "Eventos de viaje (pág. 145)",
          "text": "Hecho de la aventura: la pág. 145 trae tablas de sucesos aleatorios para el grupo aventurero, con enfermedades, amigos envenenados, problemas de disciplina, gente que enloquece y PNJ que desaparecen, entre otras opciones. Son ideales para sazonar los días sin combate y para usar habilidades de los PJ que normalmente se usan poco. Algunos sirven para escenas de rol."
        },
        {
          "type": "table",
          "title": "Eventos de viaje y cómo aprovecharlos",
          "headers": [
            "Tipo de evento",
            "Cómo se resuelve",
            "Oportunidad para los PJ"
          ],
          "rows": [
            [
              "Provisiones estropeadas",
              "Un clérigo puede usar purificar comida y agua.",
              "Que un jugador use un conjuro poco usado y reciba reconocimiento."
            ],
            [
              "PNJ enfermos",
              "Un paladín puede curar con imposición de manos.",
              "Un momento heroico fuera del combate."
            ],
            [
              "Problemas de disciplina",
              "Los PJ deben manejar una situación social que tensa sus habilidades.",
              "Escena de rol: pueden castigar, mediar o delegar en el teniente."
            ],
            [
              "Un PNJ desaparece misteriosamente",
              "La fuerza se detiene y se asignan partidas de búsqueda.",
              "Ambiente sombrío y misterio; da pistas o conduce a un encuentro."
            ],
            [
              "Gente que enloquece",
              "Hay que contener o cuidar al afectado.",
              "Recuerda la influencia del Underdark; conecta con la locura de la campaña."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Idea propia: ritmo de los días de viaje",
          "text": "Mezclá los días: uno con evento social, otro con un encuentro menor resuelto por la fuerza, otro tranquilo y un encuentro serio cada 3 o 4 días. Resumí los días vacíos con una frase y detenete en los detalles cuando haya una decisión que tomar. No hace falta jugar los 41 días: elegí los que valgan la pena."
        },
        {
          "type": "prose",
          "title": "Teletransporte y faerzress",
          "text": "En esta campaña hay muchísimos viajes por tierra. Cuando los PJ lleguen a nivel 9 podrán acceder a conjuros de teletransporte, pero la faerzress inutiliza casi todo teletransporte. Es una salvaguarda para obligar a los personajes a viajar mucho, aunque al ver los números resulta mucho."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Sugerencia del autor: permitir teletransporte a lugares ya visitados",
          "text": "El autor recomienda permitir el teletransporte sin tanto obstáculo, pero solo para volver a lugares que ya se visitaron. No ve problema en que regresen a Gauntlgrym a informar al rey, a conseguir suministros o a traer aliados gravemente heridos. Para llegar a lugares nuevos aún deben viajar por tierra. Si la clase del grupo no ofrece conjuros de teletransporte, el autor recomienda colocar un casco de teletransporte en Mantol-Derith, en el almacén de Ghazrim DuLoc (número 9, pág. 141)."
        }
      ]
    },
    {
      "id": "capitulo-09-puestos",
      "title": "Construir puestos avanzados",
      "description": "La mecánica de la pág. 147: reducir la fuerza y dar a los PJ un refugio y una sensación de logro.",
      "blocks": [
        {
          "type": "prose",
          "title": "Qué es un puesto avanzado",
          "text": "Hecho de la aventura (pág. 147): los PJ pueden hacer que la fuerza construya un puesto avanzado, un campamento fortificado y defendible. Su objetivo es darles un lugar al que volver cuando lo necesiten. Puede ser una cueva con barricadas, un pequeño recinto amurallado, un campamento en una isla del Darklake, una cornisa de acceso difícil o cualquier lugar fácil de defender."
        },
        {
          "type": "list",
          "title": "Mejoras posibles (idea propia a partir de la fuente)",
          "items": [
            "Un clérigo puede lanzar consagrar para dar protecciones contra infernales y no-muertos.",
            "Un clérigo también puede lanzar palabra de regreso para convertir el puesto en un punto de teletransporte.",
            "Dejar guardias y suministros para que el puesto sea un refugio real.",
            "Registrar quién queda al mando del puesto."
          ]
        },
        {
          "type": "table",
          "title": "Lugares recomendados para puestos avanzados",
          "headers": [
            "Lugar",
            "Para qué sirve",
            "Nota"
          ],
          "rows": [
            [
              "Mantol-Derith",
              "Dejar una fuerza de policía para mantener la calma en el lugar.",
              "Sugerencia del autor."
            ],
            [
              "Fuera de Gravenhollow",
              "Facilitar el regreso a la biblioteca cuando haga falta.",
              "Sugerencia del autor."
            ],
            [
              "Cerca de Araumycos",
              "Dar una salida fácil.",
              "Sugerencia del autor."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Ventajas de los puestos",
          "text": "Sugerencia del autor: construir puestos da a los jugadores sensación de logro, porque están edificando lugares nuevos y mejorando el mundo. La fuerza expedicionaria se reducirá rápido si construyen varios. Esto también resuelve el problema de manejar tantos PNJ. Describí cada puesto de forma única, con un nombre elegido por los PJ, para que se sienta propio."
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Seguidores en el Vasto Olvido (pág. 175)",
          "text": "Hecho de la aventura: en el Vasto Olvido hay oportunidad de ganar un gran número de seguidores. Tras derrotar a Karazikar, el grupo puede obtener 100 seguidores. Son útiles para construir más puestos o agrandar uno existente, incluso convertirlo en un futuro pueblo (sugerencia del autor)."
        },
        {
          "type": "checklist",
          "title": "Registro de cada puesto",
          "items": [
            "¿Dónde está y qué lo hace defendible?",
            "¿Qué nombre le pusieron los PJ?",
            "¿Quién lo guarnece y cuántas personas quedan?",
            "¿Tiene protecciones mágicas (consagrar, palabra de regreso)?",
            "¿Tiene suministros y qué le falta?",
            "¿Qué podría amenazarlo?"
          ]
        }
      ]
    },
    {
      "id": "capitulo-09-lugares",
      "title": "Visitar lugares conocidos",
      "description": "Cómo han cambiado los sitios que el grupo ya visitó y cómo prepararse si regresan.",
      "blocks": [
        {
          "type": "prose",
          "title": "La información de la pág. 147",
          "text": "Hecho de la aventura: la pág. 147 incluye información sobre cómo están las cosas en este momento en los lugares que los PJ visitaron antes. Parte es muy útil, pero según el autor puede quedar inutilizada según lo que hicieron los PJ cuando estuvieron allí. El DM debe evaluar las consecuencias de sus acciones y decidir qué ocurre en cada lugar varios meses después, si regresan."
        },
        {
          "type": "table",
          "title": "Ejemplos de consecuencias",
          "headers": [
            "Lugar",
            "Si los PJ actuaron bien",
            "Si ignoraron o fallaron"
          ],
          "rows": [
            [
              "Blingdenstone",
              "Si ayudaron a los Diggermatock a librarse de la invasión de cieno, pueden reforzar la fuerza con algunos gnomos de las profundidades (pág. 147).",
              "Si ignoraron la misión o terminaron mal con los gnomos, no hay refuerzo ni ayuda."
            ],
            [
              "Gracklstugh",
              "Depende por completo de lo que ocurrió en la visita.",
              "Es un lugar impredecible: preparate según lo que pasó."
            ],
            [
              "Otros lugares visitados",
              "Aplicá las consecuencias de sus acciones y de los PNJ que dejaron allí.",
              "Decidí qué cambió con el paso de los meses."
            ]
          ]
        },
        {
          "type": "list",
          "title": "Preguntas para evaluar un lugar (idea propia)",
          "items": [
            "¿Qué dejaron los PJ al irse: aliados, enemigos, promesas, deudas?",
            "¿Qué PNJ murieron, escaparon o cambiaron de bando?",
            "¿Cuánto tiempo pasó y qué podría haber sucedido sin ellos?",
            "¿Quién gobierna ahora y cómo recibe al grupo?",
            "¿Qué ayuda concreta pueden ofrecer o negar?",
            "¿Hay amenazas nuevas por la presencia de demonios lord?"
          ]
        },
        {
          "type": "callout",
          "title": "No es obligatorio volver",
          "text": "Sugerencia del autor: los PJ no están obligados a regresar a esos lugares. Solo se trata de estar preparado por si deciden hacerlo. Si no lo hacen, no gastes tiempo en prepararlos más allá de lo imprescindible."
        }
      ]
    },
    {
      "id": "capitulo-09-red",
      "title": "Red de conocimiento y continuidad",
      "description": "Hilos que conviene registrar y conectar con otros capítulos.",
      "blocks": [
        {
          "type": "table",
          "title": "Conexiones con otros capítulos",
          "headers": [
            "Hilo",
            "Se conecta con",
            "Qué registrar"
          ],
          "rows": [
            [
              "Compromisos con las facciones",
              "Capítulo 8 · Gauntlgrym",
              "Qué prometieron los PJ y quién forma parte de la fuerza."
            ],
            [
              "Teniente y estructura de mando",
              "Todo el viaje",
              "Quién lo dirige, qué decisiones toma y qué le ocurre."
            ],
            [
              "Eventos de viaje",
              "Pág. 145 del libro",
              "Qué enfermedades, desapariciones o problemas surgieron y cómo se resolvieron."
            ],
            [
              "Encuentros demoníacos",
              "Pág. 146 del libro",
              "Qué demonios aparecieron y cuáles fueron las consecuencias."
            ],
            [
              "Puestos avanzados",
              "Mantol-Derith, Gravenhollow y Araumycos",
              "Dónde se construyeron, quién los guarnece y qué se prometió."
            ],
            [
              "Seguidores del Vasto Olvido",
              "Pág. 175 del libro",
              "Cuántos se unieron tras derrotar a Karazikar y adónde los destinaron."
            ],
            [
              "Lugares visitados antes",
              "Pág. 147 del libro",
              "Qué ocurrió en Blingdenstone, Gracklstugh y otros sitios tras la primera visita."
            ],
            [
              "Teletransporte",
              "Todo el resto de la campaña",
              "Qué reglas aplicás y si hay casco de teletransporte en Mantol-Derith."
            ],
            [
              "Orden y niveles de capítulos",
              "Toda la segunda mitad",
              "Si adoptaste el orden sugerido y el nivel real del grupo en cada hito."
            ]
          ]
        },
        {
          "type": "relationships",
          "items": [
            [
              "PJ → Teniente",
              "Delegan el mando diario y reciben informes."
            ],
            [
              "Exploradores → Teniente → PJ",
              "Cadena de información que decide quién enfrenta cada amenaza."
            ],
            [
              "Fuerza principal ↔ PJ",
              "La fuerza resuelve lo menor y los PJ lo grave; ante demonios, siempre los PJ."
            ],
            [
              "Zhentarim ↔ PJ",
              "Los matones guían el camino y esperan el informe y su parte del tesoro."
            ],
            [
              "Puestos avanzados ↔ Expedición",
              "Cada puesto reduce la fuerza y da un refugio."
            ],
            [
              "Blingdenstone ↔ PJ",
              "Su ayuda depende de lo que hicieron los PJ en el capítulo 6."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Registro tras cada sesión",
          "text": "Anotá cuántos días pasaron, qué eventos y encuentros ocurrieron, quién murió o resultó herido, qué decisiones tomó el círculo interior, qué puestos se levantaron y cuántos miembros quedan. Así la fuerza expedicionaria se siente como un grupo vivo y no como un número, y los capítulos siguientes pueden apoyarse en lo que ya ocurrió."
        }
      ]
    }
  ]
});
