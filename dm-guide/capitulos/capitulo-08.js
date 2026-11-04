/* Contenido editable del capítulo 8: Audiencia en Gauntlgrym.
   Nota de integración (AGENT.md): este archivo solo declara datos. Para que el navegador lo cargue,
   debe enumerarse en el punto de carga de capítulos (por ejemplo, una etiqueta script en index.html
   antes de app.js o el manifiesto de capítulos). No se modificó app.js ni styles.css. */
window.DND_CHAPTERS=window.DND_CHAPTERS||[];
window.DND_CHAPTERS.push({
  "id": "capitulo-08",
  "number": 8,
  "title": "Audiencia en Gauntlgrym",
  "summary": "Tras la pausa de varios meses, el rey Bruenor Battlehammer convoca a los personajes a Gauntlgrym. Deben contar lo que vieron, ganarse el apoyo de las facciones de la superficie (en especial a Davra Jassur, la única que puede indicar el camino a Mantol-Derith) y partir con una expedición de más de veinte miembros hacia Mantol-Derith y, después, Gravenhollow.",
  "tags": [
    "Diplomacia",
    "Rol",
    "Facciones",
    "Gauntlgrym",
    "Preparación de expedición",
    "Eberron"
  ],
  "quick": [
    [
      "Objetivo",
      "Reunir apoyo para la expedición a Mantol-Derith"
    ],
    [
      "Nivel esperado",
      "8"
    ],
    [
      "Tono",
      "Diplomacia, intriga cortesana y un estallido de acción en pleno banquete"
    ],
    [
      "Aliado clave",
      "Rey Bruenor Battlehammer"
    ],
    [
      "Llave del plan",
      "Davra Jassur (Zhentarim): solo ella da el camino a Mantol-Derith"
    ],
    [
      "Duración",
      "Muy variable: de una escena breve a una sesión completa de rol"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-08-panorama",
      "title": "Panorama del capítulo",
      "description": "Función del capítulo, cómo adaptarlo al estilo de tu mesa y cómo repartir la sesión.",
      "blocks": [
        {
          "type": "prose",
          "title": "Función narrativa",
          "text": "Después de varios meses de pausa, los personajes reciben una carta del rey Bruenor Battlehammer que los invita a Gauntlgrym para discutir la situación del Underdark con otras personas importantes. Los PJ son probablemente las personas que mejor conocen el tema, así que este capítulo les da protagonismo informativo: son testigos, expertos y, a la vez, los futuros líderes de una expedición. Es también un respiro tras el escape, un momento para que la campaña cambie de ritmo y para que los jugadores comprueben que ya no son prisioneros desarmados sino figuras con aliados, recursos y reputación."
        },
        {
          "type": "callout",
          "title": "Cómo leer las etiquetas de esta guía",
          "text": "Se mantienen tres capas. HECHO DE LA AVENTURA: lo que establece el módulo (la invitación de Bruenor, las facciones, Mantol-Derith, Gravenhollow, «Enemigos entre nosotros» en la pág. 126). SUGERENCIA DEL AUTOR: propuestas de dirección de la guía fuente (reducir el guardián de escudo a 100 PG, usar a Eldeth como mensajera, pedir un 20 % del tesoro, el orden de las escenas). IDEA PROPIA: recordatorios y alternativas añadidas aquí para facilitar la mesa. Ninguna sugerencia es canon obligatorio."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Este capítulo es un «bicho raro»",
          "text": "Puede ir de muchas maneras. Antes de dirigirlo pensá en tus jugadores: ¿disfrutan de largas escenas de rol, prefieren la acción o mezclan ambas cosas? No hay mapa de la ciudad ni misiones dentro de ella. Todo el capítulo es negociación, ambientación y un incidente de acción. Adaptá la duración al apetito de tu mesa."
        },
        {
          "type": "table",
          "title": "Adaptar el capítulo al tipo de mesa",
          "headers": [
            "Tipo de mesa",
            "Qué hacer",
            "Ritmo esperado"
          ],
          "rows": [
            [
              "Jugadores de rol intenso",
              "Alargá la charla privada con Bruenor, dejá que cuenten sus experiencias en el Underdark, permití negociaciones que se tuercen y se rehacen, y deja que cada facción exija algo distinto.",
              "Una sesión larga o más. Es una gran ocasión para exponer ideas y vivencias del pasado en el Underdark."
            ],
            [
              "Jugadores de acción (hack and slash)",
              "Que los PNJ orquesten el plan. Resumí las negociaciones en pocas tiradas y escenas, dejá que Bruenor y Davra hagan el trabajo pesado y centrá el tiempo de mesa en el incidente del banquete.",
              "Rápido: una o dos escenas cortas más el ataque."
            ],
            [
              "Mesa mixta",
              "Jugá en vivo la charla con Bruenor, el incidente del banquete y la negociación con Davra. Resolvé el resto de las facciones con una o dos tiradas cada una.",
              "Intermedio: una sesión."
            ]
          ]
        },
        {
          "type": "timeline",
          "title": "Ritmo recomendado",
          "items": [
            [
              "1 · La invitación",
              "Llega la carta de Bruenor (o la trae Eldeth). Viaje a Gauntlgrym; encuentros de camino solo si hace falta subir a nivel 8."
            ],
            [
              "2 · Llegada y recorrido",
              "Descripción de la ciudad. Una visita breve para dar sabor, sin misiones."
            ],
            [
              "3 · Charla privada con Bruenor",
              "Quiere oír la historia de primera mano. Ya está de su lado."
            ],
            [
              "4 · El banquete",
              "Las facciones socializan. Es el momento ideal para el incidente de «Enemigos entre nosotros»."
            ],
            [
              "5 · El plan de Bruenor",
              "En privado, tras el banquete, explica la expedición a Mantol-Derith y la necesidad de ganar apoyos."
            ],
            [
              "6 · Negociaciones",
              "Los PJ tratan con cada representante, con prioridad en Davra Jassur."
            ],
            [
              "7 · Preparativos y partida",
              "Reúnen la fuerza expedicionaria (20 o más) y salen hacia el Underdark."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Decidí quién entrega la carta: si Eldeth sigue viva, es la candidata natural a mensajera y guía.",
            "Comprobá el nivel del grupo. Si no son nivel 8, preparé encuentros de viaje antes de llegar a Gauntlgrym.",
            "Repasá lo ocurrido en el capítulo 7: quién sobrevivió, quién cruzó el portal, si Jorlan se unió al grupo y qué saben los PJ de Orcus.",
            "Elegí el incidente de «Enemigos entre nosotros» (pág. 126): elemental de fuego, doppelgänger, asesino enano u otra idea.",
            "Preparar las fichas del incidente y, si las usás, tirá de antemano las tablas de encuentros del Tabernáculo de Hierro (pág. 123) y la Gran Forja (pág. 124).",
            "Leé los perfiles de los representantes de las cinco facciones y decidí qué pide cada uno.",
            "Decidí si ajustás el guardián de escudo a 100 PG (sugerencia del autor).",
            "Tené a mano el mapa de Gauntlgrym que menciona el autor de la guía fuente: facilita dirigir el capítulo.",
            "Si jugás en Eberron, usá la sección de adaptación de este capítulo y cambiá los nombres antes de empezar."
          ]
        }
      ]
    },
    {
      "id": "capitulo-08-llegada",
      "title": "La invitación y el viaje a Gauntlgrym",
      "description": "Cómo llega la carta, quién guía al grupo y cómo manejar el nivel 8.",
      "blocks": [
        {
          "type": "prose",
          "title": "La carta del rey",
          "text": "Hecho de la aventura: tras unos meses de pausa, los PJ reciben un mensaje del rey Bruenor Battlehammer que los invita a Gauntlgrym para reunirse con otras personas importantes y discutir la situación del Underdark. Gauntlgrym es fácil de alcanzar desde la superficie porque está en la parte más alta del Underdark. La persona que entrega la carta puede servirles de guía."
        },
        {
          "type": "callout",
          "title": "Sugerencia del autor: Eldeth como mensajera",
          "text": "Si Eldeth Feldrun sigue con vida, puede ser quien lleve el mensaje y los guíe de regreso a Gauntlgrym. Es una conexión natural con el capítulo 7: Eldeth partió hacia allí con Nomi Pathshutter y los gnomos para advertir a su pueblo. Si no sobrevivió, cualquier emisario del rey puede cumplir la función."
        },
        {
          "type": "list",
          "title": "Opciones de mensajero (idea propia)",
          "items": [
            "Eldeth, si vive: aprovechá la escena para cerrar su arco. Pregunta por los meses pasados, por quién cayó y por lo que ella contó a los suyos.",
            "Nomi Pathshutter, si sobrevivió y viajó con Eldeth: puede acompañarla como testigo de la huida.",
            "Un mensajero oficial enano: formal, directo, y quizá algo desconfiado con quienes vienen de «tan abajo».",
            "Un agente de una facción del grupo, si los PJ ya tienen vínculos con alguna."
          ]
        },
        {
          "type": "prose",
          "title": "Subir a nivel 8",
          "text": "Si el grupo aún no es nivel 8, intercalá algunos encuentros de viaje camino a la ciudad enana para que lleguen con el nivel esperado. Mantenelos breves y con una justificación lógica en el territorio del norte; este tramo es un vestíbulo, no el objetivo del capítulo."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Idea propia: continuidad con el capítulo 7",
          "text": "Si Jorlan Duskryn se unió al grupo, un drow en una ciudad enana va a llamar la atención. Aprovechalo: desconfianza de los guardias, preguntas de los representantes y una prueba de confianza para los PJ, que deberán responder por él. Si cruzaron otros drow o aliados del Underdark, hacé lo mismo. También conviene recordar si alguno de los PJ viaja con secuelas (heridas, visiones de Orcus): puede ser un detalle humano en las charlas privadas."
        }
      ]
    },
    {
      "id": "capitulo-08-ciudad",
      "title": "La ciudad de Gauntlgrym",
      "description": "Ambientación y recorrido: la ciudad es sabor, no un escenario con misiones.",
      "blocks": [
        {
          "type": "prose",
          "title": "Cómo usar la ciudad",
          "text": "Hecho de la aventura: el capítulo describe las distintas áreas de Gauntlgrym solo para dar sabor. No hay mapa ni misiones dentro de la ciudad. La información sirve para describir lugares cuando los PJ se mueven por la ciudad o reciben una visita guiada. No conviertas la ciudad en una mazmorra: es un telón de fondo para las conversaciones."
        },
        {
          "type": "callout",
          "title": "Sugerencia del autor: mapa de Gauntlgrym",
          "text": "El autor de la guía fuente tiene un mapa propio de Gauntlgrym y asegura que facilita mucho dirigir el capítulo. Si lo conseguís, usalo para ubicar el banquete, la sala del rey y los alojamientos de las facciones. Si no, improvisá con descripciones y una lista simple de lugares."
        },
        {
          "type": "locations",
          "items": [
            {
              "number": "1",
              "name": "Tabernáculo de Hierro",
              "hint": "Pág. 123 · tabla de encuentros opcional",
              "description": "Área descrita en la pág. 123 con una tabla de encuentros. Es opcional. Si decidís usarla, tirá de antemano para no frenar el ritmo de la sesión. El autor de la guía fuente la considera poco interesante, así que es un recurso de relleno, no un eje de la historia."
            },
            {
              "number": "2",
              "name": "Gran Forja",
              "hint": "Pág. 124 · tabla de encuentros opcional",
              "description": "Área descrita en la pág. 124, también con tabla de encuentros opcional. Es la fuente natural del incidente del elemental de fuego, si lo elegís. Tirá de antemano si la usás."
            },
            {
              "number": "3",
              "name": "Salón del banquete y sala del rey",
              "hint": "Charla privada y feast",
              "description": "Lugar donde Bruenor habla en privado con los PJ y donde, después, se celebra el banquete para que las facciones socialicen. Se pueden ubicar en cualquier sala adecuada de tu mapa. Definí las salidas y la cantidad de invitados antes de que empiece el incidente."
            },
            {
              "number": "4",
              "name": "Alojamientos de las facciones",
              "hint": "Escenas de negociación",
              "description": "Cada representante tiene su espacio. Sirven para escenas privadas: cartas, entrevistas y tratos cerrados fuera del banquete."
            }
          ]
        },
        {
          "type": "prose",
          "title": "Descripciones útiles",
          "text": "Idea propia: apoyate en contrastes. Fuego y piedra de las forjas, orgullo enano en la arquitectura, ruido de martillos, olor a metal caliente y una ciudad que acaba de recuperar su lugar. Los visitantes de la superficie se mezclan con los enanos; los PJ, acostumbrados a la oscuridad del Underdark, pueden sentirse extrañamente fuera de lugar entre tanta gente despreocupada. Usá ese contraste para reforzar la sensación de que ellos saben algo que los demás todavía no entienden del todo."
        }
      ]
    },
    {
      "id": "capitulo-08-bruenor",
      "title": "El rey Bruenor y el banquete",
      "description": "La charla privada, la celebración y el plan del rey.",
      "blocks": [
        {
          "type": "characters",
          "items": [
            {
              "name": "Rey Bruenor Battlehammer",
              "role": "Rey de Gauntlgrym",
              "status": "Ya está de su lado",
              "description": "Es un buen hombre y, cuando se reúne con los PJ, ya los apoya. Quiere escuchar su historia de primera mano y después reunir una fuerza expedicionaria. No puede intervenir directamente con las facciones por motivos políticos, así que depende de los PJ para convencerlas.",
              "play": "Cálido, directo y orgulloso, pero atento. Escucha más de lo que habla en la charla privada. Agradece el esfuerzo del grupo y pregunta por detalles concretos: demonios, ciudades, aliados.",
              "future": "Su plan lleva a la expedición hacia Mantol-Derith y Gravenhollow. Seguirá siendo punto de apoyo del grupo a lo largo de la campaña."
            },
            {
              "name": "Eldeth Feldrun",
              "role": "Enana escudo · exploradora",
              "status": "Si sobrevivió",
              "description": "Partió hacia Gauntlgrym tras el capítulo 7 para advertir a su pueblo. Puede ser mensajera y guía del grupo.",
              "play": "Orgullosa y leal. Si los PJ cumplieron promesas hechas en el capítulo 1, que su gratitud se note ante el rey.",
              "future": "Puede acompañar la expedición o quedarse como enlace con Gauntlgrym."
            }
          ]
        },
        {
          "type": "prose",
          "title": "Charla privada",
          "text": "Sugerencia del autor: Bruenor habla primero con los PJ en privado porque quiere escuchar sus experiencias. Aprovechá esta escena para recoger los hechos de la campaña hasta ahora (la prisión, el Darklake, Gracklstugh, Neverlight Grove, Blingdenstone, la huida con Orcus, etc.) y dejar que cada jugador aporte su perspectiva. Bruenor reacciona a lo que oye: se preocupa por los demonios lord, pregunta por rutas y por aliados, y deja claro que cree en ellos. Esta escena es ideal para que los jugadores presuman de sus logros y, a la vez, para ordenar la información que tienen."
        },
        {
          "type": "list",
          "title": "Temas que Bruenor puede explorar (idea propia)",
          "items": [
            "Qué demonios lord vieron o rastrearon y qué señales dejaron.",
            "Cuántos aliados tienen y cuántos perdieron en el camino.",
            "Qué saben de las ciudades del Underdark: Gracklstugh, Blingdenstone, Menzoberranzan, Neverlight Grove.",
            "Qué piensan hacer ahora que están en la superficie.",
            "Si alguien los persigue o los vigila, y si hay drow, duergar u otros enemigos que sepan dónde están."
          ]
        },
        {
          "type": "prose",
          "title": "El banquete",
          "text": "Después de la charla privada hay un banquete donde el resto de las facciones invitadas socializan. Es la primera vez que los PJ ven juntos a todos los representantes. Usalo para presentar a cada uno con un gesto o una frase característica, para que los jugadores empiecen a tomar partido y para que se establezcan contactos antes de las negociaciones formales."
        },
        {
          "type": "prose",
          "title": "El plan de Bruenor",
          "text": "Hecho de la aventura: tras el banquete, Bruenor explica su plan en privado. Quiere formar una fuerza expedicionaria con el favor y la ayuda de las otras facciones, viajar a la oculta Mantol-Derith para encontrarse con Ghazrim DuLoc y conseguir de él un mapa para llegar a Gravenhollow, una biblioteca legendaria construida por gigantes de piedra donde esperan hallar claves sobre la invasión demoníaca. Después habrá que trazar un nuevo plan con la información obtenida."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "La llave del plan: Davra Jassur",
          "text": "Para que el plan funcione, los PJ deben llevarse bien con los representantes de todas las facciones, pero sobre todo con Davra Jassur (pág. 129), del Zhentarim, porque solo ella puede indicar el camino a Mantol-Derith. El rey no puede intervenir por razones políticas. Dejá claro este punto al grupo: la expedición depende de su capacidad de convencer."
        }
      ]
    },
    {
      "id": "capitulo-08-enemigos",
      "title": "Enemigos entre nosotros",
      "description": "El incidente del banquete: una oportunidad para que los PJ muestren sus habilidades.",
      "blocks": [
        {
          "type": "prose",
          "title": "Propósito del incidente",
          "text": "Sugerencia del autor: el banquete es un gran momento para un incidente de acción. La opción «Enemigos entre nosotros» (pág. 126) incluye un elemental de fuego que despierta y escupe elementales de fuego en plena fiesta. Los PJ pueden aprovechar la situación para demostrar su valía. Es solo una de las posibles opciones: cualquier otra idea funciona si cumple el mismo objetivo, que es darles a los jugadores la oportunidad de lucirse delante de las facciones."
        },
        {
          "type": "table",
          "title": "Opciones de incidente",
          "headers": [
            "Opción",
            "Descripción",
            "Cómo usarla"
          ],
          "rows": [
            [
              "Elemental de fuego (pág. 126)",
              "Un elemental de fuego despierta durante el banquete y escupe elementales de fuego.",
              "Es la opción del módulo. Funciona bien si la fiesta transcurre cerca de la Gran Forja o de una zona de fuego. Hay muchos invitados que proteger."
            ],
            [
              "Doppelgänger",
              "Una criatura suplanta a un representante de facción.",
              "Los PJ pueden descubrirla por pequeños gestos o contradicciones. Es una opción más sutil y adecuada para mesas de rol."
            ],
            [
              "Asesino enano",
              "Un enano enviado para eliminar a otro representante de facción o a un PJ.",
              "Sirve para mostrar peligro político y recompensar la percepción y la protección."
            ],
            [
              "Idea propia",
              "Otro ataque o crisis inesperada durante el banquete.",
              "Mantené el objetivo: que los PJ puedan lucirse ante las facciones sin arruinar el tono diplomático."
            ]
          ]
        },
        {
          "type": "list",
          "title": "Cómo dirigirlo (idea propia)",
          "items": [
            "Preparalo antes: escenario, salidas, invitados, obstáculos y cuántos enemigos habrá.",
            "Dales a los PJ un papel claro: proteger a un representante, detener al enemigo, evacuar a los heridos.",
            "Que las facciones observen. Después del incidente, cada representante puede comentar qué impresión le dejaron los PJ.",
            "Si la mesa es de rol, preferí la opción del doppelgänger o del asesino; si es de acción, usá el elemental.",
            "Evitá que el incidente se vuelva una derrota: el objetivo es que los PJ lo resuelvan y obtengan prestigio."
          ]
        },
        {
          "type": "callout",
          "title": "Consecuencias políticas",
          "text": "Idea propia: lo que haga el grupo durante el incidente puede cambiar el tono de las negociaciones. Salvar a un representante genera una deuda. Dejar que alguien muera complica los tratos con su facción. Descubrir al doppelgänger o al asesino puede dar una pista nueva o un enemigo recurrente. Anotá todo para las charlas posteriores."
        }
      ]
    },
    {
      "id": "capitulo-08-facciones",
      "title": "Las facciones y sus representantes",
      "description": "Qué pide y qué ofrece cada facción, con consejos de interpretación.",
      "blocks": [
        {
          "type": "prose",
          "title": "Cómo funciona la negociación",
          "text": "Los PJ deben convencer a los representantes de que apoyen la expedición. El rey no puede ayudar por razones políticas. Algunos representantes ya están de su lado; otros necesitan ser persuadidos. Las negociaciones pueden torcerse y ser reelaboradas hasta que el grupo consiga lo que necesita. Usá tiradas de Persuasión, Perspicacia, Historia o Interpretación solo cuando el resultado sea incierto, y premiá con ventaja las buenas ideas, las pruebas presentadas y las historias bien contadas."
        },
        {
          "type": "table",
          "title": "Resumen de las facciones",
          "headers": [
            "Facción",
            "Representante",
            "Postura inicial",
            "Qué ofrece"
          ],
          "rows": [
            [
              "Arpistas (pág. 126)",
              "Lord Zelraun Roaringhorn",
              "Entrega un guardián de escudo si lo vencen al ajedrez. El libro dice que podría regalarlo igualmente.",
              "Guardián de escudo (sugerencia: 100 PG)."
            ],
            [
              "Orden del Guantelete (pág. 127)",
              "Sir Lanniver Strayl",
              "Ayuda de buen grado a un grupo bueno.",
              "5 veteranos poderosos y un martillo de guerra +1."
            ],
            [
              "Enclave Esmeralda (pág. 127)",
              "Morist Malkin",
              "Ayuda si encuentran y devuelven a Sladis Vadir, desaparecido (está en Mantol-Derith).",
              "Exploradores montados y monturas de lagarto gigante."
            ],
            [
              "Alianza de los Lores (pág. 128)",
              "Lord Eravien Haund",
              "Influyente, pero apenas conoce los problemas del Underdark y los cree pequeños o exagerados.",
              "Si lo convencen: guardias y espías."
            ],
            [
              "Zhentarim (pág. 129)",
              "Davra Jassur",
              "Ya decidió ayudar, pero quiere que la operación sea rentable.",
              "8 matones que conocen el camino a Mantol-Derith. Es la única que puede dar las indicaciones."
            ]
          ]
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Lord Zelraun Roaringhorn",
              "role": "Arpistas · representante",
              "status": "Retador de ajedrez",
              "description": "Entrega un guardián de escudo a quien lo venza al ajedrez. El libro indica que también podría regalarlo aunque gane.",
              "play": "Culto, juguetón y orgulloso de su juego. Convertí la partida en una escena memorable, con jugadas narradas o una tirada ligera, según el gusto de tu mesa.",
              "future": "Sugerencia del autor: bajar el guardián de escudo a 100 PG para que siga siendo muy poderoso, pero con una probabilidad normal de perderlo si lo usan mal."
            },
            {
              "name": "Sir Lanniver Strayl",
              "role": "Orden del Guantelete · caballero",
              "status": "Aliado casi seguro",
              "description": "Es el caballero más respetado entre las facciones de Gauntlgrym. El autor lo compara con Sir Barristan Selmy de Canción de hielo y fuego. Ayuda gustoso a un buen grupo.",
              "play": "Honorable, sereno y firme. No exige nada que contradiga su código. Si los PJ se portan bien, es un aliado leal.",
              "future": "Aporta 5 veteranos poderosos y un martillo de guerra +1. Su opinión influye en otras facciones."
            },
            {
              "name": "Morist Malkin",
              "role": "Enclave Esmeralda · representante",
              "status": "Pide un favor",
              "description": "Ayuda a los PJ esperando que encuentren y traigan de vuelta a Sladis Vadir, quien está desaparecido y se encuentra en Mantol-Derith.",
              "play": "Preocupada por su compañero, directa y práctica. No es hostil, pero espera resultados.",
              "future": "Provee exploradores montados y monturas de lagarto gigante. Sladis Vadir reaparece en Mantol-Derith."
            },
            {
              "name": "Lord Eravien Haund",
              "role": "Alianza de los Lores · elfo",
              "status": "Escéptico",
              "description": "Influyente, pero no sabe mucho de los problemas del Underdark. Los considera pequeños o exagerados.",
              "play": "Elegante y distante. Se deja convencer por argumentos sólidos y pruebas, no por dramatismo.",
              "future": "Si lo convencen, pone guardias y espías a disposición del grupo."
            },
            {
              "name": "Davra Jassur",
              "role": "Zhentarim · representante",
              "status": "Aliada interesada",
              "description": "Ya decidió que quiere ayudar, pero se asegurará de que la operación sea rentable para su facción. Puede pedir un 20 % del tesoro hallado en la expedición, un informe completo de lo descubierto y de lo que los PJ cuenten al rey, y quizá algo más.",
              "play": "Pragmática, encantadora y calculadora. Sabe lo que vale su información y no la da gratis.",
              "future": "Provee 8 matones que conocen el camino de Gauntlgrym a Mantol-Derith. Es la única que puede dar las indicaciones."
            }
          ]
        },
        {
          "type": "table",
          "title": "Negociar con cada facción: guía rápida",
          "headers": [
            "Facción",
            "Cómo ganarla",
            "Si sale mal"
          ],
          "rows": [
            [
              "Arpistas",
              "Aceptar el desafío de ajedrez, mostrar respeto por el juego y sinceridad sobre lo vivido.",
              "Zelraun puede dejar el guardián pendiente hasta que demuestren su valía (opciones del DM)."
            ],
            [
              "Orden del Guantelete",
              "Comportarse con honor, proteger inocentes y no mentir.",
              "Sir Lanniver puede retirar su apoyo si descubre engaños, pero escuchará una disculpa sincera."
            ],
            [
              "Enclave Esmeralda",
              "Aceptar buscar a Sladis Vadir y mostrar interés por la naturaleza.",
              "Sin compromiso, Morist puede ofrecer solo ayuda parcial."
            ],
            [
              "Alianza de los Lores",
              "Presentar pruebas, testigos y una argumentación clara sobre el peligro.",
              "Eravien se queda como espectador y no manda ayuda."
            ],
            [
              "Zhentarim",
              "Negociar el reparto, ofrecer información y mostrar que la expedición vale la pena.",
              "Davra puede apretar las condiciones, pero necesita que la expedición salga adelante. No debería cerrar la puerta del todo."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Idea propia: ajustar la dificultad",
          "text": "Si el grupo se atasca, hacé que un PNJ aliado (Bruenor, Eldeth, Sir Lanniver) les dé una pista sobre qué quiere cada representante. Si les va demasiado fácil, añadí condiciones secundarias o competencia entre facciones: por ejemplo, que dos representantes pidan favores opuestos y obliguen a elegir."
        },
        {
          "type": "prose",
          "title": "Qué pasa con Davra y el Zhentarim",
          "text": "Davra es la pieza imprescindible. Su demanda del 20 % del tesoro y de un informe completo es una sugerencia de la aventura que podés ajustar. Si los PJ aceptan, el trato incluye a los 8 matones que conocen el camino. Si se niegan, puede buscar otra forma de compensación o aumentar el precio de la información. No la conviertas en villana: ya decidió ayudar; solo quiere que le convenga."
        }
      ]
    },
    {
      "id": "capitulo-08-expedicion",
      "title": "Reunir la expedición",
      "description": "Qué recursos consigue el grupo, cuántos son y qué los espera.",
      "blocks": [
        {
          "type": "prose",
          "title": "La fuerza expedicionaria",
          "text": "Tras negociar con las facciones, el grupo debería haber ganado el apoyo del Zhentarim y, con suerte, de otras facciones. Con los aliados, la expedición supera las veinte personas. Ahora los PJ están equipados y respaldados por las organizaciones más importantes. El Underdark seguirá siendo peligroso, pero ya no son prisioneros indefensos: son líderes de una expedición."
        },
        {
          "type": "table",
          "title": "Recursos posibles",
          "headers": [
            "Fuente",
            "Aporte",
            "Condición"
          ],
          "rows": [
            [
              "Zhentarim",
              "8 matones con conocimiento del camino a Mantol-Derith. Indicaciones de Davra.",
              "Quizá el 20 % del tesoro y un informe completo."
            ],
            [
              "Orden del Guantelete",
              "5 veteranos poderosos y un martillo de guerra +1.",
              "Que el grupo se comporte como un buen grupo."
            ],
            [
              "Enclave Esmeralda",
              "Exploradores montados y monturas de lagarto gigante.",
              "Encontrar y traer de vuelta a Sladis Vadir."
            ],
            [
              "Alianza de los Lores",
              "Guardias y espías.",
              "Convencer a Eravien de que la amenaza es real."
            ],
            [
              "Arpistas",
              "Guardián de escudo (sugerencia: 100 PG).",
              "Ganar al ajedrez, o ganarse su favor."
            ],
            [
              "Rey Bruenor",
              "Respaldo político y plan; no puede intervenir directamente con las facciones.",
              "Ninguna."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Sugerencia del autor: limitar el guardián de escudo",
          "text": "El autor recomienda reducir el guardián de escudo a 100 PG. Sigue siendo muy poderoso, pero existe una posibilidad más normal de perderlo si se maneja mal. Es una modificación opcional; aplicala solo si querés que el aliado no domine la campaña."
        },
        {
          "type": "prose",
          "title": "Destino de la expedición",
          "text": "Hecho de la aventura: el destino inmediato es Mantol-Derith, donde esperan encontrar a Ghazrim DuLoc y obtener el mapa a Gravenhollow. Allí también está Sladis Vadir, el desaparecido del Enclave Esmeralda. Después de recibir el mapa, habrá que trazar un nuevo plan con lo aprendido. Los capítulos siguientes ocurren de nuevo en el Underdark."
        },
        {
          "type": "checklist",
          "title": "Control de preparación",
          "items": [
            "¿Quiénes son los miembros de la expedición y cuántos son en total?",
            "¿Qué facciones aceptaron y bajo qué condiciones?",
            "¿Qué compromisos asumieron los PJ (20 % del tesoro, informe, buscar a Sladis Vadir)?",
            "¿Tienen indicaciones de Davra para llegar a Mantol-Derith?",
            "¿Qué pasó con el incidente del banquete y qué impresión dejó?",
            "¿El guardián de escudo sigue en pie y con cuántos PG?",
            "¿Quién queda en Gauntlgrym como enlace (Eldeth, Nomi, otros)?",
            "¿Todos los PJ son de nivel 8?"
          ]
        }
      ]
    },
    {
      "id": "capitulo-08-eberron",
      "title": "Adaptación a Eberron",
      "description": "Equivalencias de facciones y ubicación para quienes juegan la campaña en Eberron.",
      "blocks": [
        {
          "type": "prose",
          "title": "Por qué adaptarlo",
          "text": "Sugerencia del autor: Out of the Abyss transcurre en Faerûn, pero casi toda ocurre bajo tierra, así que se adapta con facilidad a otros escenarios. En Eberron, las facciones de Gauntlgrym no existen, de modo que este capítulo requiere equivalentes. El autor de la guía fuente buscó facciones similares de Khorvaire y adaptó nombres, incluyendo PNJ de las Casas con Marca del Dragón."
        },
        {
          "type": "prose",
          "title": "Ubicación de Gauntlgrym en Eberron",
          "text": "Tendría sentido ubicar Gauntlgrym en las Montañas Ironroot, en los Mror Holds, pero eso no encaja con los mapas del Underdark. El autor propone situarla en las Montañas Icehorn, al este de las Eldeen Reaches. Esa ubicación occidental encaja con los mapas del Underdark y permite un viaje por las tierras de los druidas de las Reaches."
        },
        {
          "type": "table",
          "title": "Equivalencias de facciones",
          "headers": [
            "Facción original",
            "Versión Eberron",
            "Representantes y notas"
          ],
          "rows": [
            [
              "Arpistas",
              "Los Doce",
              "Los magos de los Doce conocen la incursión demoníaca y quieren saber más. Envían dos representantes: Lord Zelraun Roaringhorn y Arlanna d'Cannith, que también espía para la Casa Cannith. Se puede mantener el desafío de ajedrez y el guardián de escudo como recompensa."
            ],
            [
              "Orden del Guantelete de Plata",
              "Orden de la Llama de Plata",
              "Solo cambia el nombre: la orden de caballeros viene de Thrane, donde la Iglesia de la Llama de Plata unge a sus caballeros. Jaela Daran, la Flamespeaker, pidió a Sir Lanniver Strayl que investigara la situación del Underdark."
            ],
            [
              "Enclave Esmeralda",
              "Enclave Esmeralda (sin cambios)",
              "No tiene equivalente en Eberron. Se usa tal cual, pero todos los miembros son elfos y semielfos de Valenar."
            ],
            [
              "Alianza de los Lores",
              "Consejo de Throneshold",
              "Coalición de países de Khorvaire. Tras sucesos recientes, envían dos representantes: Lord Ben Harrings y el gnomo Gonnedi d'Sivis, que también actúa por la Casa Sivis."
            ],
            [
              "Zhentarim",
              "Zhentarim (sin cambios)",
              "Se usa tal cual: nunca sobran los gremios del mercado oscuro."
            ],
            [
              "Guardianes de las puertas (opcional)",
              "Los Gatekeepers",
              "Druidas orcos de las Shadow Marches que ayudaron a detener una invasión planar aberrante hace casi 7000 años. Desde entonces han afinado sus habilidades para volver a ser útiles. Envían a un druida orco a Gauntlgrym para ayudar y enterarse de lo que ocurre."
            ]
          ]
        },
        {
          "type": "characters",
          "title": "Representantes añadidos en Eberron",
          "items": [
            {
              "name": "Arlanna d'Cannith",
              "role": "Los Doce · representante",
              "status": "Espía de la Casa Cannith",
              "description": "Acompaña a Lord Zelraun Roaringhorn como representante de los Doce. También espía para la Casa Cannith.",
              "play": "Cortés y curiosa. Obtiene información sin parecer interesada. Puede ser un enlace con la Casa Cannith en el futuro.",
              "future": "Si los PJ descubren su doble papel, pueden usarlo como ventaja."
            },
            {
              "name": "Jaela Daran",
              "role": "Flamespeaker de la Llama de Plata",
              "status": "Fuera de escena",
              "description": "Pidió a Sir Lanniver Strayl que investigue la situación del Underdark.",
              "play": "No aparece en el capítulo. Se la menciona como autoridad detrás de la orden.",
              "future": "Puede enviar mensajes o refuerzos si el grupo mantiene el contacto con la orden."
            },
            {
              "name": "Lord Ben Harrings",
              "role": "Consejo de Throneshold · representante",
              "status": "Equivalente a Lord Eravien Haund",
              "description": "Uno de los dos representantes de la coalición de Khorvaire en Gauntlgrym.",
              "play": "Político y mesurado. Necesita pruebas antes de comprometer recursos.",
              "future": "Si lo convencen, pone guardias y espías a disposición, como Lord Eravien."
            },
            {
              "name": "Gonnedi d'Sivis",
              "role": "Consejo de Throneshold · gnomo",
              "status": "Representante de la Casa Sivis",
              "description": "Acompaña a Lord Ben Harrings. También actúa en nombre de la Casa Sivis.",
              "play": "Locuaz, hábil con las palabras y atento a la información.",
              "future": "Es un posible aliado para obtener noticias y traducciones."
            },
            {
              "name": "Druida orco de los Gatekeepers",
              "role": "Representante opcional",
              "status": "Observador",
              "description": "Vino a ayudar y a enterarse de lo que ocurre. Representa a una tradición antigua que combatió una invasión aberrante.",
              "play": "Serio, paciente y atento. Habla poco, pero entiende más de lo que parece sobre aberraciones.",
              "future": "Puede aportar conocimiento sobre azotamentes, aboleths y otras amenazas aberrantes."
            }
          ]
        },
        {
          "type": "callout",
          "title": "Idea propia: reparto sin duplicar roles",
          "text": "En Eberron, hay representantes dobles (los Doce y el Consejo de Throneshold). Si te resulta pesado manejar tantos, asigná a uno el papel principal de negociación y al otro un papel secundario: espía, intérprete o testigo. Así no sobrecargás las escenas. Después de este capítulo hay poco material propio de Eberron, ya que los capítulos siguientes ocurren en el Underdark."
        }
      ]
    },
    {
      "id": "capitulo-08-red",
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
              "Eldeth y Nomi",
              "Capítulo 7 · portal",
              "Si llegaron a Gauntlgrym, qué contaron y si Eldeth fue la mensajera."
            ],
            [
              "Orcus y los demonios lord",
              "Capítulos 7 y 11",
              "Qué contaron los PJ a Bruenor y a las facciones sobre Orcus y los otros demonios."
            ],
            [
              "Jorlan",
              "Capítulos 1 y 7",
              "Si está con el grupo y cómo reaccionan en Gauntlgrym."
            ],
            [
              "Davra Jassur y el Zhentarim",
              "Mantol-Derith",
              "Qué acuerdo cerraron (20 %, informe) y qué espera el Zhentarim."
            ],
            [
              "Sladis Vadir y Morist Malkin",
              "Mantol-Derith",
              "Si aceptaron buscarlo y qué compromiso asumieron."
            ],
            [
              "Ghazrim DuLoc",
              "Mantol-Derith",
              "Qué esperan obtener de él: el mapa a Gravenhollow."
            ],
            [
              "Gravenhollow",
              "Capítulo 11",
              "La biblioteca de gigantes de piedra es el destino final del plan de Bruenor."
            ],
            [
              "Guardián de escudo",
              "Expedición",
              "Si lo ganaron, con cuántos PG y quién lo controla."
            ],
            [
              "Incidente del banquete",
              "Reputación ante las facciones",
              "Qué ocurrió, quién quedó en deuda y quién murió."
            ]
          ]
        },
        {
          "type": "relationships",
          "items": [
            [
              "Bruenor → PJ",
              "Los apoya desde el inicio, pero no puede actuar con las facciones por razones políticas."
            ],
            [
              "PJ → Davra Jassur",
              "Es la relación clave: sin ella no hay camino a Mantol-Derith."
            ],
            [
              "Morist Malkin ↔ Sladis Vadir",
              "Morist espera que los PJ lo traigan de vuelta desde Mantol-Derith."
            ],
            [
              "Ghazrim DuLoc ↔ Gravenhollow",
              "Es la persona que puede dar el mapa hacia la biblioteca de gigantes."
            ],
            [
              "Sir Lanniver ↔ otras facciones",
              "Su prestigio puede influir en las decisiones del resto."
            ],
            [
              "Eravien Haund ↔ PJ",
              "Necesita ser convencido de que la amenaza del Underdark es real."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Registro tras la sesión",
          "text": "Anotá qué facciones apoyan al grupo y bajo qué condiciones, cuántas personas componen la expedición, qué deudas o promesas hicieron los PJ, qué ocurrió en el incidente del banquete y qué información compartieron con Bruenor. Esa red de compromisos define los conflictos y las ayudas de los capítulos siguientes, sin inventar vínculos que el material no confirma."
        }
      ]
    }
  ]
});
