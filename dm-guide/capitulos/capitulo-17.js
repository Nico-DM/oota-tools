/* Contenido editable del capítulo 17. */
window.DND_CHAPTERS = window.DND_CHAPTERS || [];
window.DND_CHAPTERS.push({
  "id": "capitulo-17",
  "number": 17,
  "title": "Contra los Señores Demonio",
  "summary": "El cierre de la campaña. El Corazón Oscuro atrae a los señores demonio disponibles a un único lugar y los obliga a pelear entre ellos. El manual, tal como está escrito, resulta demasiado fácil para un grupo de nivel 14-15; esta guía propone convertirlo en una persecución por la ciudad, con varios combates intermedios que desgasten al grupo antes del enfrentamiento final contra un Demogorgon debilitado.",
  "tags": [
    "Final de campaña",
    "Demogorgon",
    "Corazón Oscuro",
    "Señores demonio",
    "Combate de alto nivel"
  ],
  "quick": [
    [
      "Objetivo",
      "Alcanzar y derrotar al señor demonio que quede en pie tras el Corazón Oscuro"
    ],
    [
      "Tono",
      "Clímax épico; una persecución desesperada por una ciudad en llamas, no un combate estático"
    ],
    [
      "Amenaza visible",
      "Los señores demonio disponibles (según decisiones previas) y sus ejércitos de demonios menores"
    ],
    [
      "Amenaza latente",
      "El riesgo real de este capítulo no es perder, sino que resulte demasiado fácil si no se ajusta la dificultad"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-17-panorama",
      "title": "Panorama del capítulo",
      "description": "Qué define este capítulo y por qué necesita ajustes respecto al libro.",
      "blocks": [
        {
          "type": "callout",
          "tone": "success",
          "title": "Llegar hasta acá ya es un logro",
          "text": "Este es el final de la campaña, el cierre de un viaje larguísimo. No muchos grupos llegan hasta acá; es realmente difícil sostener un grupo estable durante 60-70 horas de D&D. Felicitaciones a la mesa que llegue al final de Out of the Abyss."
        },
        {
          "type": "prose",
          "title": "Un capítulo muy abierto",
          "text": "Este capítulo es muy abierto. Depende, sobre todo, de las decisiones tomadas por los PJ y de cómo el DM haya dirigido los encuentros previos contra los señores demonio. Sea cual sea la forma en que se decida jugarlo, es importante que haya un combate mega-épico al final; es lógico que la confrontación final sea la más dura de toda la campaña. Sin embargo, tal como está escrito, el libro no cumple del todo con esto, y hay que hacerle algunos cambios."
        },
        {
          "type": "prose",
          "title": "Lo primero que define el final: el Corazón Oscuro",
          "text": "Lo primero que determina cómo termina la campaña es la ubicación del Corazón Oscuro, elegida en el capítulo 16 de esta guía. Se sugiere que Menzoberranzan es el lugar apropiado, especialmente si los PJ odian a los drow. Pero los aventureros pueden elegir realmente cualquier lugar. Sus razones para elegir un sitio distinto probablemente serían humanitarias, ya que este enfrentamiento implica la muerte de cientos de drow."
        }
      ]
    },
    {
      "id": "capitulo-17-ubicacion",
      "title": "La ubicación del Corazón Oscuro",
      "description": "Cómo cambia el capítulo según dónde se coloque el talismán.",
      "blocks": [
        {
          "type": "table",
          "title": "Posibles ubicaciones y sus consecuencias",
          "headers": [
            "Ubicación elegida",
            "Consecuencia"
          ],
          "rows": [
            [
              "Menzoberranzan (la asumida por defecto)",
              "Es el escenario que el resto de este capítulo asume. Cientos de drow mueren en el fuego cruzado."
            ],
            [
              "Un lugar desolado",
              "Ningún transeúnte corre peligro; probablemente la elección de un grupo de alineamiento bueno."
            ],
            [
              "Otro asentamiento (por ejemplo Blingdenstone)",
              "No hay una razón obvia para que los PJ elijan esto, pero si pasa, hay que arbitrar cualquier resultado posible caso por caso."
            ],
            [
              "La cueva de la Torre Araj (traición a Vizeran)",
              "Caso especial: si los PJ traicionan a Vizeran DeVir y colocan el Corazón Oscuro justo en la cueva donde está su torre, Vizeran quedará demasiado débil para pelear tras lanzar el ritual. Escapará por teletransportación y jurará una dolorosa venganza contra los aventureros."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Supuesto de esta sección",
          "text": "El resto de esta guía asume que el Corazón Oscuro se colocó en el santuario de Gromph Baenre, en Menzoberranzan. Si tu mesa eligió otro lugar, ajustá la escenografía (edificios, PNJ, geografía) pero la estructura de la persecución y el combate final siguen siendo aplicables."
        }
      ]
    },
    {
      "id": "capitulo-17-opciones",
      "title": "Tres enfoques populares para el final",
      "description": "Qué señores demonio aparecen según las decisiones tomadas en capítulos anteriores.",
      "blocks": [
        {
          "type": "table",
          "title": "Las tres opciones",
          "headers": [
            "Opción",
            "Quién aparece",
            "Notas"
          ],
          "rows": [
            [
              "Opción 1 (la del libro, por defecto)",
              "Demogorgon, Orcus, Juiblex, Yeenoghu y Baphomet (Graz'zt no aparece, porque no fue engañado por el ritual)",
              "Hay una batalla a cinco bandas que gana Demogorgon. Después, los PJ pelean contra un Demogorgon debilitado y salvan el día. Es la forma por defecto de dirigir este capítulo según el libro; el único problema es la dificultad, demasiado baja para un grupo de nivel 14-15 (desarrollado en la siguiente sección)."
            ],
            [
              "Opción 2 (variante del libro, pág. 218)",
              "Los mismos cinco señores demonio, pero la batalla la juegan los propios jugadores",
              "A cada jugador se le da la ficha de un señor demonio y pelean entre ellos. Según cómo les vaya, cualquiera podría quedar en pie al final. Después, los PJ pelean contra el señor demonio debilitado que haya ganado. Tiene tres problemas: la dificultad sigue siendo baja para el grupo; puede ser anticlimático si Demogorgon no sobrevive (los PJ vienen esperando un enfrentamiento frontal contra él desde el capítulo 2, Sloobludop); y, sea cual sea el ganador, los jugadores ya habrán visto su ficha exacta, lo que lleva inevitablemente a decisiones de metajuego."
            ],
            [
              "Opción 3 (si Yeenoghu, Baphomet y/o Juiblex ya fueron neutralizados antes)",
              "Solo Demogorgon y Orcus se presentan",
              "Si Yeenoghu y Baphomet fueron derrotados en el Laberinto o desterrados por el Motor del Laberinto, y Juiblex fue derrotado tras su pelea con Zuggtmoy en la Boda Fétida, solo quedan Demogorgon y Orcus para el enfrentamiento final. Dado lo popular que es usar el Motor del Laberinto entre los DM, es bastante probable que falten dos señores demonio al ritual, más todavía si Juiblex ya cayó en la Boda Fétida. Esta variante ni siquiera se menciona en el libro."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Cualquier opción puede funcionar, con ajustes",
          "text": "Tomando en cuenta pros y contras, cualquiera de estas tres opciones puede funcionar perfectamente, siempre con algunas modificaciones."
        }
      ]
    },
    {
      "id": "capitulo-17-problema",
      "title": "El problema real: la economía de acciones",
      "description": "Por qué un combate en solitario contra un señor demonio no representa un desafío real a este nivel.",
      "blocks": [
        {
          "type": "prose",
          "title": "Un grupo de nivel 14-15 es extremadamente poderoso",
          "text": "Con frecuencia se olvida o se subestima lo poderoso y lleno de recursos que es un grupo de nivel alto. A esta altura, el grupo está en nivel 14-15, y hay que decirlo claramente: si un grupo de 4-5 personajes de ese nivel pelea contra un Demogorgon a PG completos, le van a dar una paliza tan grande que se va a despertar llorando en el Abismo. Con un grupo más grande, todavía peor."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Por qué pasa esto",
          "text": "Lo que ocurre es que los combates en solitario no funcionan muy bien en Dungeons & Dragons 5ª edición. Todo se reduce a la economía de acciones, que es todo un tema en sí mismo."
        },
        {
          "type": "prose",
          "title": "La realidad de D&D 5e",
          "text": "La realidad de la 5ª edición es que solo se puede lograr un combate estresante y difícil si es la cuarta o quinta batalla del día. Los aventureros tienen que haber gastado parte de sus recursos y PG durante una serie de encuentros antes de llegar a un combate en solitario."
        },
        {
          "type": "callout",
          "tone": "info",
          "title": "Lo que intenta el libro (pág. 218)",
          "text": "El manual intenta abordar este problema con algunas opciones en la página 218: sugiere algunos encuentros, el más peligroso de los cuales incluye 3 vrocks. También hay 'casi explosiones' que infligen 3d6 de daño (¿en serio?). Esta valoración de esta guía considera que esas medidas son insuficientes para un grupo de este nivel."
        }
      ]
    },
    {
      "id": "capitulo-17-carrera",
      "title": "La carrera por los señores demonio (propuesta central de esta guía)",
      "description": "Convertir el final en una persecución móvil por la ciudad, no en un combate estático.",
      "blocks": [
        {
          "type": "prose",
          "title": "Planteamiento general",
          "text": "Cuando los señores demonio son teletransportados a la fuerza a Menzoberranzan, quedan desorientados por un momento. Pero enseguida, todos pueden sentir el aura de los demás y se lanzan a pelear entre sí. Este combate no es estático: se mueve por toda la ciudad. Y no son solo los señores demonio: también se invocan todo tipo de demonios menores, ejércitos enteros que llegan a la escena y pelean entre sí, cada demonio menor ligado a uno de los señores demonio en particular."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Los aventureros no están a salvo en ningún lado",
          "text": "Los señores demonio van a pelear, después correr, pelear de nuevo, esconderse un momento y lanzarse a atacar a un objetivo distinto."
        },
        {
          "type": "prose",
          "title": "Si la batalla termina lejos de los PJ",
          "text": "Si la pelea entre señores demonio termina y los aventureros no están cerca del vencedor, el señor demonio ganador puede usar su capacidad de teletransportación y escapar de ahí. De ahí la importancia de seguir de cerca la pelea, para intervenir en el momento justo."
        },
        {
          "type": "prose",
          "title": "El resultado es predecible, pero el camino no",
          "text": "Los PJ pueden más o menos adivinar que Demogorgon va a ganar. O, si solo están presentes Demogorgon y Orcus, que uno de los dos tiene que ganar necesariamente. Llevado así, el capítulo se convierte en una carrera a través de Menzoberranzan. Los PJ tienen que moverse rápido y mantener el ritmo de los señores demonio. No habrá tiempo para descansar ni recuperarse. Tampoco será fácil, porque la ciudad está infestada de demonios."
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "El objetivo numérico de esta estructura",
          "text": "El objetivo es que los PJ peleen 5 veces antes de alcanzar a Demogorgon: 3 combates duros y 2 relativamente fáciles. Para cuando lleguen hasta él, no les quedarán tantos espacios de conjuro, pociones ni otros recursos en general. Y eso sí va a ser un combate difícil de olvidar."
        },
        {
          "type": "prose",
          "title": "Sobre los combates intermedios",
          "text": "Nivel 15 significa, de verdad, juego de alto nivel. Si todavía no tuviste la oportunidad de usar monstruos icónicos de D&D, este es un buen momento para hacerlo. El grupo puede enfrentarse a un Balor, un Goristro o una Marilith, apoyados por demonios menores como escore (score) y manes y dretches, o algunos demonios de sombra (casi inofensivos gracias a Dawnbringer) y tal vez un vrock o un demonio chasme."
        },
        {
          "type": "callout",
          "title": "El propósito de estos combates",
          "text": "Estos combates tienen que hacer sudar a los PJ y obligarlos a gastar recursos. Tres combates duros como estos y dos fáciles cumplen el objetivo."
        }
      ]
    },
    {
      "id": "capitulo-17-complicaciones",
      "title": "Complicaciones durante la persecución",
      "description": "Un recurso de mesa para intensificar los combates intermedios.",
      "blocks": [
        {
          "type": "prose",
          "title": "Cómo usarlas",
          "text": "En cualquier momento durante estos combates, se puede introducir una complicación en la cuenta de iniciativa 15. La pelea entre señores demonio se acerca peligrosamente por un instante, causando un efecto dañino."
        },
        {
          "type": "table",
          "title": "Tabla de complicaciones",
          "headers": [
            "Complicación",
            "Efecto"
          ],
          "rows": [
            [
              "Explosión (estilo Michael Bay)",
              "Hay una explosión repentina e impredecible en un radio de 20 pies. Cada criatura debe superar una tirada de salvación de Destreza CD 15. Si falla, recibe 5d6 de daño de fuego, o la mitad con éxito."
            ],
            [
              "Escombros que caen",
              "Más que escombros, es directamente un edificio volando, porque eso es lo que cae sobre el campo de batalla. Cada criatura en un radio de 30 pies debe superar una tirada de salvación de Destreza CD 15. Si falla, recibe 4d6 de daño contundente y queda derribada y atrapada bajo rocas y escombros. Salir requiere una acción y una prueba de Fuerza (Atletismo) CD 15."
            ],
            [
              "Llamada cercana",
              "Uno de los señores demonio salta al campo de batalla, ataca a un PJ y luego salta o vuela lejos para continuar su pelea con los otros señores demonio. Simplemente elegí un señor demonio y hacelo atacar a un PJ."
            ],
            [
              "Refuerzos instantáneos",
              "Llegan decenas de dretches, manes, o un demonio más fuerte como un vrock o un barlgura, a atacar a los PJ."
            ]
          ]
        }
      ]
    },
    {
      "id": "capitulo-17-combate-final",
      "title": "El combate final contra Demogorgon",
      "description": "Cómo ajustar las estadísticas finales según el estado real del grupo.",
      "blocks": [
        {
          "type": "prose",
          "title": "Llegando al final",
          "text": "Dirigido correctamente, para cuando estos combates terminen y los PJ alcancen a Demogorgon, van a estar muy golpeados justo cuando lo vean matar a Orcus. Eso sí que va a ser un combate memorable."
        },
        {
          "type": "callout",
          "tone": "info",
          "title": "La sugerencia del libro",
          "text": "El manual sugiere un Demogorgon severamente debilitado: 290 PG, solo una resistencia legendaria, sus mejores hechizos ya gastados y un -5 a todos los ataques, pruebas y salvaciones. Incluso un grupo de nivel 15 debilitado le va a dar una paliza en estas condiciones."
        },
        {
          "type": "prose",
          "title": "Ya no se trata de ganar",
          "text": "Esto ya no es sobre ganar. Es el final de la campaña, y el objetivo es ofrecer el mejor final posible. Sabemos que el grupo no está en su mejor forma, después de los combates anteriores."
        },
        {
          "type": "callout",
          "title": "Números alternativos más duros (sugerencia de esta guía)",
          "text": "Si se quieren números concretos más exigentes, se recomienda 350 PG, 2 resistencias legendarias, todos los hechizos disponibles y solo -2 de penalización en los ataques."
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "La narrativa por encima de la mecánica",
          "text": "Un combate como este se considera algo muy flexible. Como DM, probablemente también quieras que los PJ triunfen y lleguen al epílogo de la aventura. Si es así, ni siquiera pienses en los PG como un número fijo: se puede decidir un PG 'probable' y seguir el ritmo de la batalla. Vos decidís quién da el golpe final, esperás el momento justo, un golpe crítico, un hechizo de daño radiante, un hechizo dañino lanzado desde la Vara de Orcus. Recordá que la narrativa le gana a la mecánica siempre."
        }
      ]
    },
    {
      "id": "capitulo-17-epilogo",
      "title": "El epílogo y los hilos sueltos",
      "description": "Qué queda abierto después del combate final.",
      "blocks": [
        {
          "type": "prose",
          "title": "Después de la batalla",
          "text": "Después del combate debería haber un gran epílogo para cerrar todo. Es importante notar que la aventura todavía ofrece algunos asuntos sin resolver que a los jugadores podría gustarles perseguir. Eso quedaría fuera de los límites del libro y entraría en el estilo de campaña de alto nivel."
        },
        {
          "type": "list",
          "title": "Hilos sin cerrar mencionados explícitamente",
          "items": [
            "Vizeran DeVir: su destino final, especialmente si fue traicionado.",
            "El grimorio de Gromph Baenre: qué hacer con él una vez terminada la crisis.",
            "La ubicación de Gromph Baenre (la ciudad de Luskan, según lo que sabe Jarlaxle).",
            "La presencia de Graz'zt en el Abismo: quedó como el único señor demonio presente ahí, lo cual sirve a sus propios fines.",
            "El arreglo económico hecho con Davra Jassur en el capítulo 8.",
            "Cualquier otro hilo que haya surgido naturalmente durante la partida."
          ]
        },
        {
          "type": "callout",
          "title": "Dejar que los jugadores tomen las riendas",
          "text": "En general, es una gran aventura, y los jugadores deberían poder tomar las riendas del lado narrativo y explorar las distintas posibilidades de epílogo. A menos que esto no sea realmente el epílogo, y elijan seguir persiguiendo otros objetivos dentro de una campaña de alto nivel."
        }
      ]
    },
    {
      "id": "capitulo-17-red",
      "title": "Red de conocimiento y continuidad final",
      "description": "Hilos que conviene registrar al cerrar la campaña, por si se extiende más allá del libro.",
      "blocks": [
        {
          "type": "table",
          "title": "Cierre de hilos principales",
          "headers": [
            "Hilo",
            "Origen",
            "Qué registrar al cerrar la campaña"
          ],
          "rows": [
            [
              "Ubicación del Corazón Oscuro",
              "Capítulo 16",
              "Determina cuántos drow y PNJ de Menzoberranzan sobreviven al capítulo final, y si Vizeran sobrevive o escapa jurando venganza."
            ],
            [
              "Señores demonio disponibles",
              "Laberinto (cap. 14) y Boda Fétida (cap. 15)",
              "Confirmar cuáles de los cinco (Demogorgon, Orcus, Juiblex, Yeenoghu, Baphomet) llegan al ritual y cuáles ya fueron neutralizados antes."
            ],
            [
              "Ganador de la batalla entre señores demonio",
              "Este capítulo",
              "Registrar si fue Demogorgon (lo esperable) u otro, en caso de haber usado la variante jugada por los jugadores."
            ],
            [
              "Vizeran DeVir",
              "Capítulos 12 y 16",
              "Registrar su destino final: aliado cumplido, traicionado y vengativo, o muerto."
            ],
            [
              "Graz'zt en el Abismo",
              "Capítulo 11 (sugerencia) → epílogo",
              "Queda como el único señor demonio presente en el Underdark; posible gancho para una campaña de seguimiento."
            ],
            [
              "Davra Jassur (capítulo 8)",
              "Pendiente de ese capítulo",
              "Registrar el estado del arreglo económico al cierre de la campaña."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Separación de fuentes en este capítulo",
          "text": "Las tres opciones de final, la lista de señores demonio disponibles y la sugerencia de estadísticas debilitadas de Demogorgon provienen del manual. La estructura de 'carrera por los señores demonio', la tabla de complicaciones, los números alternativos de Demogorgon (350 PG, 2 resistencias legendarias, -2 a los ataques) y el consejo de priorizar la narrativa sobre la mecánica son recomendaciones de mesa de esta guía, no reglas oficiales del libro."
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Nota de cierre de la guía fuente",
          "text": "El material original en el que se basa esta guía cierra agradeciendo a quienes siguieron el recorrido completo de los 17 capítulos, señalando que escribirlo tomó mucho tiempo y esfuerzo y que marcó el comienzo del sitio del autor como proyecto. Esta nota se conserva aquí como parte del contexto de dónde provienen las sugerencias de dirección incluidas en toda la guía."
        }
      ]
    }
  ]
});
