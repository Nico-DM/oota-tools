/* Contenido editable del capítulo 4. */
window.DND_CHAPTERS = window.DND_CHAPTERS || [];
window.DND_CHAPTERS.push({
  "id": "capitulo-04",
  "number": 4,
  "title": "Gracklstugh",
  "summary": "La ciudad duergar es un hervidero de facciones en pugna: la Guardia de Piedra, los Guardianes de la Llama, los Fantasmas Grises y la corona del Deepking Horgar Steelshadow. Los PJ quedan atrapados en esa lucha de poder apenas cruzan las puertas, y solo pueden salir si ayudan a una de las tres figuras clave de la ciudad, en una trama que termina, si se sigue la sugerencia de esta guía, en motín, ejecución pública y fuga de prisión.",
  "tags": [
    "Gracklstugh",
    "Duergar",
    "Themberchaud",
    "Derro",
    "Intriga política"
  ],
  "quick": [
    [
      "Objetivo",
      "Conseguir una orden de salida de la ciudad ayudando a Errde, a Gartokkar o a Themberchaud"
    ],
    [
      "Tono",
      "Ciudad opresiva y vigilada; peligro constante aunque no haya combate"
    ],
    [
      "Amenaza visible",
      "Guardias duergar invisibles, esclavistas, Narrak y los Fantasmas Grises"
    ],
    [
      "Amenaza latente",
      "Shal, la súcubo que controla la mente del Deepking Horgar Steelshadow V"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-04-panorama",
      "title": "Panorama del capítulo",
      "description": "Cómo se llega a la ciudad y qué la hace un lugar opresivo de jugar.",
      "blocks": [
        {
          "type": "prose",
          "title": "Llegar a Gracklstugh",
          "text": "Llegar a Gracklstugh no es particularmente difícil: si los PJ siguen los bordes del Lago Oscuro, van a encontrar la ciudad."
        },
        {
          "type": "table",
          "title": "Dos formas de entrar",
          "headers": [
            "Vía",
            "Qué implica"
          ],
          "rows": [
            [
              "Entrada frontal",
              "Por una de las puertas principales, lo que desencadena el encuentro de entrada con el corrupto Gorglak."
            ],
            [
              "Entrada furtiva",
              "Infiltrarse en la ciudad por agua. Buppido la va a recomendar si viaja con el grupo (pág. 59). Hay que tener en cuenta las posibles dificultades de viajar por agua (ver el capítulo del Lago Oscuro)."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "El objetivo es organicidad, no solo supervivencia",
          "text": "Este capítulo logra transmitir que estar dentro de esta ciudad puede ser tan peligroso como estar afuera, en las profundidades del Underdark. Solo que es un tipo distinto de peligro: vigilancia, leyes severas y facciones que vigilan cada paso."
        },
        {
          "type": "callout",
          "title": "Sobre los encuentros aleatorios (pág. 51)",
          "tone": "info",
          "text": "Igual que en otros capítulos de esta guía, se recomienda leer los Encuentros Aleatorios y elegir cuáles usar y en qué momento. Da a la ciudad una sensación más orgánica cuando no hay que detener la partida para tiradas al azar que podrían dar encuentros poco óptimos."
        },
        {
          "type": "timeline",
          "title": "Ritmo recomendado",
          "items": [
            [
              "1 · Las puertas",
              "Encuentro con Gorglak (soborno o arresto) o la entrada furtiva por los Muelles."
            ],
            [
              "2 · Primeras impresiones",
              "Pasear por la ciudad, libres o escoltados, dejando ver su dureza y sus facciones en pugna."
            ],
            [
              "3 · Reclutamiento",
              "Errde Blackskull, Gartokkar Xundorn y/o Themberchaud reclutan a los PJ para investigar a Droki."
            ],
            [
              "4 · El gueto derro",
              "Seguir a Droki hasta el Distrito de la Hendidura Oeste, enfrentando a los derro que defienden su territorio."
            ],
            [
              "5 · Los Túneles de Whorlstone",
              "La gran mazmorra del capítulo: Narrak, el huevo de dragón y el obelisco."
            ],
            [
              "6 · Consecuencias",
              "Motín derro, caída de Errde Blackskull y, posiblemente, una fuga de prisión antes de poder salir de la ciudad."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Decidí cómo van a entrar los PJ a la ciudad y preparás la escena de Gorglak (soborno, arresto o batalla en la puerta).",
            "Elegí 3 o 4 detalles ambientales de la lista de esta guía para ir soltando mientras los PJ caminan por la ciudad.",
            "Llevá registro de la enfermedad del Pulmón de Gracklstugh si los PJ pasan tiempo en la ciudad contaminada.",
            "Decidí si vas a usar el flowchart sugerido de esta guía como columna vertebral de la trama o vas a improvisar sobre la marcha.",
            "Preparás el encuentro con Narrak y la sala del obelisco/huevo con el ajuste de arqueros duergar según el nivel del grupo.",
            "Decidí de antemano si vas a aplicar las consecuencias finales sugeridas (motín derro, caída de Errde, fuga de prisión) o si preferís un cierre más simple."
          ]
        }
      ]
    },
    {
      "id": "capitulo-04-puertas",
      "title": "Las puertas de la ciudad",
      "description": "El encuentro de entrada con Gorglak y la posible intervención de Errde Blackskull.",
      "blocks": [
        {
          "type": "characters",
          "items": [
            {
              "name": "Gorglak",
              "role": "Duergar · guardia corrupto de las puertas",
              "status": "Puede morir en este encuentro",
              "description": "Guardia corrupto que recibe a quienes llegan por la entrada frontal.",
              "play": "Insinúa que va a arrestarlos a menos que lo sobornen con algo para su colección de armas. Si los PJ llevan a Dawnbringer a la vista, pedirá exactamente eso y nada más. Si se acepta el soborno, no se queda con el objeto, sino que les indica que se lo entreguen a Werz Saltbaron en los Muelles. Si la negociación se arruina, o si los PJ hablan demasiado abiertamente del soborno en vez de seguir la insinuación, Gorglak ordena su arresto.",
              "future": "Es posible que Gorglak muera aquí; si está perdiendo la pelea, usará invisibilidad e intentará escapar."
            },
            {
              "name": "Errde Blackskull",
              "role": "Duergar · capitana de la Guardia de Piedra",
              "status": "Aliada potencial clave",
              "description": "Si la negociación con Gorglak fracasa y estalla una batalla en la puerta, las puertas se abren y aparece Errde Blackskull al mando de un pelotón de guardias de piedra.",
              "play": "Ya sospecha de la corrupción de los guardias de la entrada y se ofrece a escoltar a los PJ hasta la Fortaleza del Overlake (la comisaría). Si los PJ no quieren ir, los arresta por la fuerza, aunque se muestra bastante más amable que Gorglak."
            }
          ]
        },
        {
          "type": "prose",
          "title": "Si los PJ son arrestados",
          "text": "Si los PJ son arrestados, serán llevados ante Errde Blackskull, capitana de la Guardia de Piedra. Ella podría deshacerse fácilmente de ellos y venderlos a los esclavistas, pero tiene motivos ocultos: sospecha de corrupción en la ciudad y necesita a forasteros para investigar, ya que no puede confiar en sus propios hombres."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Si los PJ resisten el arresto",
          "text": "Si los PJ resisten el arresto (algo que probablemente harán, porque no quieren volver a ser prisioneros), estalla una batalla feroz. Después de la masacre en la puerta, los PJ podrían preguntarse qué hacer a continuación; es justo en ese momento que las puertas se abren y aparece Errde Blackskull."
        }
      ]
    },
    {
      "id": "capitulo-04-info-general",
      "title": "Información general de la ciudad y los duergar",
      "description": "Cómo es la vida cotidiana en Gracklstugh.",
      "blocks": [
        {
          "type": "prose",
          "title": "Un lugar hostil para los viajeros",
          "text": "Gracklstugh es un lugar muy ajetreado y poco amigable para los viajeros. Para empezar, la esclavitud también es cosa de todos los días aquí, así que es un peligro real volver a ser capturado y enjaulado. De hecho, si se corre la voz de que los PJ son esclavos escapados, eso pone precio a sus cabezas: los esclavistas podrían querer recuperarlos, ya sea para venderlos o para devolvérselos a los drow."
        },
        {
          "type": "prose",
          "title": "Las forjas y el carácter duergar",
          "text": "Las forjas de la ciudad nunca se detienen; el martilleo y el calor se perciben desde cualquier parte del asentamiento. Los duergar son muy adustos, austeros y metódicos; la corrupción es muy rara entre ellos. El crimen dentro de la ciudad es muy escaso, debido a que los guardias pueden volverse invisibles, y cualquier duergar a la vista puede considerarse un refuerzo instantáneo. Les encanta ver la ley aplicada, y sus leyes son duras y rápidas: cualquiera sorprendido robando puede ser ejecutado en el acto por cualquier duergar, sin necesidad de juicio."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "El Pulmón de Gracklstugh",
          "text": "Debido a la cantidad de contaminación en la caverna que alberga Gracklstugh, los recién llegados son susceptibles al Pulmón de Gracklstugh, una forma de tos que puede volverse peligrosa por sí misma (pág. 54). No te olvides de llevar registro de esta enfermedad."
        },
        {
          "type": "prose",
          "title": "Una ciudad dividida",
          "text": "Gracklstugh está dividida. Hay una enorme lucha de poder entre los Guardianes de la Llama, Themberchaud, los Fantasmas Grises y la corona (el Deepking Horgar Steelshadow). Es esta lucha la que le da forma a la ciudad tal como está ahora. La facción derro está representada por el Consejo de Sabios, que patrocina en secreto a los Fantasmas Grises. Los Fantasmas Grises emplean derro y duergar marginados (Calassabrak, al estilo samurái ronin). También hay un gremio de artesanos (el Consejo de Lores, pág. 54) y un consejo mercantil que puede ignorarse sin consecuencias."
        }
      ]
    },
    {
      "id": "capitulo-04-ambientacion",
      "title": "Ambientación: respirar la dureza de la ciudad",
      "description": "Detalles para sembrar mientras los PJ se mueven por Gracklstugh.",
      "blocks": [
        {
          "type": "list",
          "title": "Detalles para ir soltando",
          "items": [
            "El martilleo incesante de las forjas.",
            "Esclavos siendo transportados o maltratados.",
            "Duergar observándolos con miradas adustas.",
            "Derro escondiéndose en las sombras o siendo maltratados por duergar.",
            "Themberchaud volando por la ciudad.",
            "Patrullas de duergar montando steeders (arañas montables, pág. 231).",
            "Guardias que aparecen o desaparecen de pronto (tienen invisibilidad, pág. 227).",
            "Un gigante caminando por las calles, con los duergar apartándose de su camino."
          ]
        },
        {
          "type": "callout",
          "title": "Origen de esta lista",
          "text": "Algunos de estos elementos son en realidad encuentros aleatorios del libro, o pueden adaptarse fácilmente a partir de ellos. El objetivo es transmitir que estar en esta ciudad puede ser tan peligroso como estar afuera, en las profundidades del Underdark, solo que de una forma distinta. Si se logra bien, los jugadores van a querer salir de Gracklstugh lo antes posible, pero no van a poder, a menos que sigan la línea argumental de la ciudad."
        }
      ]
    },
    {
      "id": "capitulo-04-figuras",
      "title": "Figuras de poder de la ciudad",
      "description": "Las piezas clave de la lucha de poder en Gracklstugh.",
      "blocks": [
        {
          "type": "prose",
          "title": "Quién puede dejarlos salir",
          "text": "Las cosas pueden ocurrir de maneras muy distintas en Gracklstugh, pero el objetivo de los PJ, de forma predecible, va a ser salir de la ciudad. Hace falta una orden en las puertas para dejarlos ir, y las únicas personas que podrían darla son: Errde Blackskull (si la ayudan), Gartokkar (si lo ayudan) o Themberchaud (si lo ayudan). Además, los PJ podrían terminar trabajando para alguno de ellos incluso sin quererlo, a raíz de un arresto."
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Errde Blackskull",
              "role": "Duergar · capitana de la Guardia de Piedra",
              "status": "Sospecha de corrupción interna",
              "description": "Los PJ serán llevados ante ella si son arrestados dentro de la ciudad, o si estalla una batalla en las puertas.",
              "play": "Podría deshacerse fácilmente de ellos y venderlos a los esclavistas, pero tiene motivos ocultos: sospecha de corrupción en la ciudad y necesita forasteros para investigar, ya que no puede confiar en sus propios hombres. Sus hombres han estado siguiendo a un derro llamado Droki, muy escurridizo. Ella cree que trabaja para el Consejo de Sabios, pero no sabe que también trabaja para los Fantasmas Grises.",
              "future": "Si la ayudan, los dejará salir de la ciudad."
            },
            {
              "name": "Gartokkar Xundorn",
              "role": "Duergar · Guardián de la Llama",
              "status": "Controla a Themberchaud mediante psiónica",
              "description": "Es el Guardián de la Llama; su facción es un grupo de clérigos psiónicos cuyo trabajo es 'controlar' a Themberchaud, ayudando así al Rey Horgar a mantener la ciudad bajo control. Controlan y apaciguan al dragón mediante psiónica. Cuando llega el momento, los Guardianes también se encargan de deshacerse del dragón y criar uno nuevo; esto ha pasado muchas veces antes, e incluso hay restos de dragones pasados en su casa de guardia.",
              "play": "Tenían un huevo de dragón rojo, pero se lo robaron los Fantasmas Grises. Gartokkar sabe que el derro Droki es mensajero y proveedor de los Fantasmas Grises. Les ordena a los PJ que lo sigan, recuperen el huevo y traigan pruebas de la magia que están usando los Fantasmas Grises.",
              "future": "Si tienen éxito, puede dejarlos ir."
            },
            {
              "name": "Themberchaud",
              "role": "Dragón rojo consentido por la ciudad",
              "status": "Comodín impredecible",
              "description": "Este dragón mimado recién hace poco se volvió curioso e interesado en la ciudad, su política y las distintas figuras de poder. Por su naturaleza, se considera por encima de todos, pero día a día se da más cuenta de que en realidad no es él quien controla la ciudad.",
              "play": "Al conocer a los PJ, los recluta como espías. Ya desconfía de Gartokkar, así que les ordena que le reporten a él lo mismo que le reportan a Gartokkar. Themberchaud es un comodín y puede reaccionar de maneras muy distintas; es mimado, más parecido a un niño malcriado. Si se entera del huevo, se pone furioso y ordena su destrucción."
            },
            {
              "name": "Rey Horgar Steelshadow V",
              "role": "Deepking de Gracklstugh",
              "status": "Mentalmente controlado, muy ausente",
              "description": "El rey está muy ausente en la aventura; no hay ninguna pista clara sobre cómo podrían los PJ terminar teniendo una audiencia con él. Su consorte Shal es en realidad una súcubo que le está envenenando la mente (al estilo Lengua de Serpiente).",
              "future": "Al final, en la sección de extras del libro, hay una trama opcional donde una audiencia con el rey es importante."
            },
            {
              "name": "Los gigantes de piedra",
              "role": "Aliados de la familia Steelshadow",
              "status": "Neutrales por decisión propia",
              "description": "Son amigos de la familia Steelshadow. Normalmente no se meten en los asuntos de la ciudad, prefiriendo meditar y comulgar con las piedras."
            }
          ]
        }
      ]
    },
    {
      "id": "capitulo-04-trama",
      "title": "La trama: seguimiento de Droki",
      "description": "Cómo ordenar las misiones de este capítulo, bastante desordenadas en el libro original.",
      "blocks": [
        {
          "type": "callout",
          "tone": "warning",
          "title": "Valoración de esta guía: el capítulo está desordenado",
          "text": "Es aquí donde el capítulo sufre más: las misiones están desordenadas, repartidas en distintas partes del capítulo, y no hay ninguna sugerencia sobre qué debería pasar primero. Lo que sigue es solo una recomendación de cómo pueden encadenarse los hechos, siguiendo todos los puntos de la trama, presentada de forma fácil de entender. Por supuesto, las cosas pueden darse de otra manera según los jugadores, pero, en la mayoría de los casos, este orden va a funcionar."
        },
        {
          "type": "prose",
          "title": "El reclutamiento no es excluyente",
          "text": "Los PJ pueden ser contratados por Errde, Gartokkar y Themberchaud al mismo tiempo, sin ningún conflicto entre ellos. La misión en los tres casos termina siendo la misma: seguir a Droki, el único contacto verificado de los Fantasmas Grises."
        },
        {
          "type": "prose",
          "title": "El gueto derro",
          "text": "Seguir a Droki los lleva hasta el Distrito de la Hendidura Oeste, un nombre elegante para el 'gueto derro'. Se recomienda que varios derro intenten detener a los PJ mientras se infiltran en su territorio: muchos de ellos saben que hay un acceso a los túneles y que los Fantasmas Grises tienen presencia ahí."
        },
        {
          "type": "callout",
          "title": "Conveniencia narrativa (nota de esta guía)",
          "text": "También es conveniente que mueran muchos derro en este momento, para uno de los finales sugeridos de esta guía para Gracklstugh (ver la sección de consecuencias finales)."
        },
        {
          "type": "prose",
          "title": "Alternativa: destacarse sin ser arrestados",
          "text": "Alternativamente, podría pasar que los PJ no sean arrestados, sino que muestren sus habilidades frente a un gigante enfurecido. Errde quedaría impresionada y les pediría ayuda, o lo mismo podría hacer alguno de los Guardianes de la Llama."
        },
        {
          "type": "callout",
          "title": "Una misión que se deja fuera a propósito (nota de esta guía)",
          "tone": "info",
          "text": "Esta guía deja fuera una misión del libro: el Trato de Ylsa (pág. 61). Esta misión no tiene conclusión: ella está rastreando moneda de la superficie, Pliinki tiene una moneda de oro (pág. 81), y se dice que 'apareció milagrosamente', pero nunca se menciona de dónde vino, ni ninguna otra moneda de la superficie. Por eso no se incluye en esta guía como una trama a resolver."
        }
      ]
    },
    {
      "id": "capitulo-04-tuneles",
      "title": "Los Túneles de Whorlstone",
      "description": "La mazmorra más grande del libro.",
      "blocks": [
        {
          "type": "callout",
          "tone": "info",
          "title": "La mazmorra más grande del libro",
          "text": "Los Túneles de Whorlstone son la mazmorra más grande que ofrece este libro; probablemente les tome a los jugadores dos o tres sesiones salir de ahí. Los efectos del Pulmón de Gracklstugh pueden curarse; no hay contaminación ahí abajo."
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Droki",
              "role": "Derro · mensajero y proveedor de los Fantasmas Grises",
              "status": "Objetivo de seguimiento, difícil de atrapar",
              "description": "Tiene botas de velocidad y debería ser difícil de atrapar.",
              "play": "No te olvides de que tiene ventaja contra la magia. Una vez en los túneles, queda a criterio del DM determinar cuándo conviene atraparlo."
            },
            {
              "name": "Narrak",
              "role": "Derro · líder de culto de los Fantasmas Grises",
              "status": "Encuentro letal",
              "description": "Importante líder cultista de los Fantasmas Grises, culpable de maldecir a los gigantes con energía demoníaca.",
              "play": "Este es un encuentro letal; prepararlo con el cuidado correspondiente."
            },
            {
              "name": "Pliinki",
              "role": "Guardián de la sala del obelisco y el huevo",
              "status": "Defiende el objetivo principal de Gartokkar",
              "description": "En el extremo noreste de los túneles, los PJ van a encontrar la sala con el obelisco y el huevo. Pliinki la custodia, junto con un Espectador.",
              "play": "Debido a los distintos niveles del terreno, esta batalla tiene el potencial de ser también muy dura. Dependiendo del nivel del grupo, se recomienda añadir entre 3 y 6 arqueros duergar, que saquen ventaja del terreno."
            }
          ]
        },
        {
          "type": "prose",
          "title": "El obelisco",
          "text": "El obelisco es un artefacto misterioso sin explicación ni información alguna sobre su naturaleza. Está incompleto, y es imposible definir su naturaleza real. Aun así, con su poder incompleto, puede teletransportar a los PJ fuera de Gracklstugh."
        }
      ]
    },
    {
      "id": "capitulo-04-consecuencias",
      "title": "Consecuencias finales (sugerencia de esta guía)",
      "description": "Un final narrativo propuesto para cerrar el capítulo con más peso dramático.",
      "blocks": [
        {
          "type": "callout",
          "tone": "info",
          "title": "Son sugerencias personales, no reglas del libro",
          "text": "Lo que sigue son solo sugerencias personales de esta guía sobre las consecuencias de las acciones de los PJ en Gracklstugh."
        },
        {
          "type": "prose",
          "title": "Si hubo muertes en la puerta",
          "text": "Hay un tema que el libro no menciona: si los PJ entraron a la ciudad después de una batalla en las puertas, lo más probable es que algunos duergar hayan muerto. Tarde o temprano, los PJ son reclutados por Errde Blackskull y reciben insignias que muestran su lealtad. Este hecho no le cae nada bien a la comunidad duergar, menos todavía en estos días en que algunos de ellos se están volviendo locos."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Tensión creciente con la comunidad duergar",
          "text": "La capitana Blackskull se está esforzando mucho por encontrar respuestas y ayudar a la ciudad, pero al hacerlo ha enfurecido a la comunidad. A los duergar les gustaría más ver a los PJ condenados a muerte o esclavitud, en vez de caminar libremente con insignias de honor. Los PJ deberían notar esta tensión al interactuar con los duergar: los van a ayudar porque tienen insignias oficiales y respetan la ley, pero no tienen por qué que les guste."
        },
        {
          "type": "prose",
          "title": "El motín derro",
          "text": "Más adelante, cuando los PJ se infiltren en el gueto derro, también morirán algunos derro tratando de impedirles encontrar la entrada a los túneles. Los derro son enloquecidos por naturaleza, pero esta vez le guardan un resentimiento profundo a los duergar, por enviar forasteros a su territorio a matarlos. Mientras los PJ están abajo, en los Túneles de Whorlstone, los derro se organizan y marchan hacia Gracklstugh en un motín a toda máquina."
        },
        {
          "type": "prose",
          "title": "La caída de Errde Blackskull",
          "text": "El choque entre ambas facciones deja una enorme cicatriz en la ciudad. Los duergar finalmente logran contener a los derro, pero el conflicto daña la cohesión duergar. La gente habla de la capitana de la guardia, que no solo dejó que unos aventureros desconocidos mataran a guardias duergar, sino que además los envió al territorio derro a remover el avispero. Justo antes de que estalle una revolución, el Rey Horgar ordena el arresto de Errde Blackskull. Tiene juicio ese mismo día, se la declara culpable y se la condena a decapitación en la plaza del pueblo."
        },
        {
          "type": "prose",
          "title": "El regreso de los PJ y un nuevo arresto",
          "text": "Todo esto ocurre mientras los PJ siguen bajo tierra, en los túneles. Cuando vuelven a la ciudad, ya sea saliendo de los túneles o por una puerta principal si se teletransportaron, son arrestados de nuevo. Los PJ podrían presumir de sus insignias, pero no sirve de nada: este arresto fue ordenado por el propio Rey. Si tienen el huevo de dragón, también se lo confiscan."
        },
        {
          "type": "prose",
          "title": "La ejecución y la audiencia con el Rey",
          "text": "Los PJ son escoltados hasta la Fortaleza del Deepking; de camino al castillo, pasan por la plaza del pueblo justo a tiempo para ver a Errde decapitada. La audiencia con el Rey es solo una formalidad: está controlado por Shal, la súcubo (pág. 82), y ordenará su muerte pública para la mañana siguiente."
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Una oportunidad para arreglar la situación",
          "text": "Si los PJ detectan a la criatura demoníaca que controla al Rey, tendrán una única oportunidad de arreglar la situación. Si no lo hacen, o si fallan, los ponen en celdas a esperar su muerte."
        },
        {
          "type": "prose",
          "title": "La fuga de prisión y Themberchaud",
          "text": "Esto convierte la aventura en una fuga de prisión; el objetivo más probable es salir y llegar hasta Themberchaud, quien podría ayudarlos a cambio de información sobre el huevo o su paradero. Si lo escondieron y se lo pueden dar, el dragón lo destruye en un berrinche. Después de eso, inicia una matanza contra Gartokkar y el Rey, dependiendo de qué ideas le hayan metido en la cabeza los PJ. Si no tienen el huevo, Themberchaud de todas formas interroga a Gartokkar, quien termina confesando la verdad."
        },
        {
          "type": "callout",
          "title": "El final para los PJ",
          "text": "De una forma u otra, el dragón deja que los PJ abandonen la ciudad, o directamente nadie los detiene mientras Themberchaud destroza la ciudad entera."
        },
        {
          "type": "prose",
          "title": "Este final es solo inspiración",
          "text": "Este cierre para Gracklstugh está pensado como inspiración. Las cosas pueden ocurrir de muchísimas maneras distintas, y el DM debe ajustarlas según corresponda a su propia mesa."
        }
      ]
    },
    {
      "id": "capitulo-04-red",
      "title": "Red de conocimiento y continuidad",
      "description": "Hilos que conviene registrar y conectar con otros capítulos de la guía.",
      "blocks": [
        {
          "type": "table",
          "title": "Conexiones futuras",
          "headers": [
            "Hilo",
            "Se retoma en",
            "Qué registrar"
          ],
          "rows": [
            [
              "Entrega del soborno a Werz Saltbaron",
              "Capítulo 6 (Blingdenstone)",
              "Werz encarga más adelante la entrega de gemas de conjuro a Kazook Pickshine en Blingdenstone; registrar si esta primera entrega se completó."
            ],
            [
              "Huevo de dragón rojo",
              "Este mismo capítulo (consecuencias finales)",
              "Registrar si los PJ lo recuperaron, lo escondieron o se lo entregaron a Themberchaud, y qué decidió hacer el dragón con esa información."
            ],
            [
              "Destino de Errde Blackskull",
              "Resto de la campaña",
              "Si se siguió el final sugerido, fue ejecutada públicamente; esto puede pesar sobre cómo los PJ recuerdan su paso por Gracklstugh."
            ],
            [
              "Shal la súcubo y el Rey Horgar",
              "Trama opcional de audiencia real (extras del libro)",
              "Registrar si los PJ llegaron a detectarla y si lograron o no revertir su control sobre el Rey."
            ],
            [
              "Hgraam y el clan Cairngorm",
              "Capítulo 11 (Gravenhollow)",
              "Si el grupo ayudó a este clan en Gracklstugh, obtienen el cristal de piedra-habla sintonizado con la biblioteca; registrar si esa ayuda ocurrió en este capítulo."
            ],
            [
              "El Trato de Ylsa",
              "Sin conclusión en el libro",
              "Misión dejada fuera deliberadamente por esta guía; si se quiere usar, el DM deberá inventar su propia resolución."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Separación de fuentes en este capítulo",
          "text": "La existencia de la ciudad, sus facciones, PNJ y los Túneles de Whorlstone provienen del manual. El flowchart recomendado para ordenar las misiones, la decisión de omitir el Trato de Ylsa, el refuerzo de arqueros duergar en la sala del obelisco, y todo el bloque de consecuencias finales (motín derro, caída de Errde, fuga de prisión y el desenlace con Themberchaud) son sugerencias de mesa de esta guía, no reglas oficiales del libro."
        }
      ]
    }
  ]
});
