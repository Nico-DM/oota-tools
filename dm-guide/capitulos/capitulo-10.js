/* Contenido editable del capítulo 10. */
window.DND_CHAPTERS = window.DND_CHAPTERS || [];
window.DND_CHAPTERS.push({
  "id": "capitulo-10",
  "number": 10,
  "title": "Descenso a las profundidades: Mantol-Derith",
  "summary": "Los PJ llegan a Mantol-Derith justo cuando la gema de Fraz-Urb'luu desata una guerra abierta entre gnomos y duergar. Deben investigar, sobrevivir a una reunión entre facciones que termina en masacre y decidir qué hacer con un objeto que vuelve loco a quien lo posee, antes de poder seguir camino a Gravenhollow.",
  "tags": [
    "Mantol-Derith",
    "Facciones del Underdark",
    "Investigación",
    "Gema demoníaca",
    "Fraz-Urb'luu"
  ],
  "quick": [
    [
      "Objetivo",
      "Sobrevivir al caos de Mantol-Derith y conseguir el mapa/anillo hacia Gravenhollow"
    ],
    [
      "Tono",
      "Thriller de facciones: investigación, paranoia y batalla campal"
    ],
    [
      "Amenaza visible",
      "Guerra abierta entre gnomos de las profundidades y duergar"
    ],
    [
      "Amenaza latente",
      "La gema de Fraz-Urb'luu, que enloquece a quien la posee"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-10-panorama",
      "title": "Panorama del capítulo",
      "description": "Qué debe saber el DM antes de dirigir la sesión: objetivo, ritmo y preparación.",
      "blocks": [
        {
          "type": "prose",
          "title": "Función narrativa",
          "text": "Mantol-Derith es una ciudad-mercado neutral sostenida por un tratado de no agresión entre cuatro facciones: gnomos de las profundidades (Blingdenstone), duergar, drow y el cartel mercantil Zentharim. Cuando los PJ llegan, ese equilibrio acaba de romperse por culpa de una gema mágica que ha pasado de mano en mano enloqueciendo a sus dueños. El capítulo funciona como un episodio de investigación: los PJ deben entender qué pasó, elegir un bando (o no elegirlo) y lidiar con las consecuencias de un objeto cuya verdadera naturaleza no deben poder deducir mecánicamente, solo por interpretación."
        },
        {
          "type": "callout",
          "title": "Principio de dirección",
          "tone": "warning",
          "text": "Si el grupo llega con un ejército o una compañía militar grande, esta parte del módulo deja de tener sentido: no es plausible que dejen entrar a una fuerza numerosa. Los esbirros Zentharim que conocen la contraseña de entrada advierten a los PJ que un grupo grande «se verá mal» y causará problemas, y recomiendan acampar fuera y dejar entrar solo a los PJ y un contingente muy reducido."
        },
        {
          "type": "timeline",
          "title": "Ritmo recomendado",
          "items": [
            [
              "1 · Llegada y caos",
              "Los PJ entran al mercado y ven señales de una batalla reciente: duergar persiguiendo y matando gnomos."
            ],
            [
              "2 · Intervención",
              "Si ayudan a los gnomos supervivientes, estos piden ayuda para liberar a su líder Yantha Coaxrock, retenida por los duergar."
            ],
            [
              "3 · Investigación",
              "Rescatan a Yantha, que miente de forma evidente; los PJ deben decidir cómo (o si) averiguan la verdad sobre la gema y sobre Flink."
            ],
            [
              "4 · La reunión interrumpida",
              "Buscan a los Zentharim por el mapa/anillo hacia Gravenhollow y llegan justo cuando Kinyel intenta asesinar al beholder Lorthuun durante la reunión entre Zentharim y drow."
            ],
            [
              "5 · Secuelas",
              "Tras la batalla, los PJ terminan con la gema en su poder (normalmente) y deciden qué hacer con ella; el pueblo queda devastado y saqueable."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Decidí si vas a usar las tiradas de Carisma del libro (pág. 133) o la alternativa de roleplay por papelitos (recomendada en este capítulo).",
            "Preparás 10-15 papelitos con rasgos de personalidad inducidos por la gema, listos para repartir.",
            "Revisá el mapa de Mantol-Derith y ubicá mentalmente el mercado, el almacén duergar y la zona de la reunión Zentharim/drow (pág. 136-140).",
            "Decidí qué PNJ va a tener la gema cuando los PJ lleguen a cada escena (empieza con Kinyel Druu'giir).",
            "Elegí si vas a incluir alguna de las misiones secundarias opcionales (1C, 1D, Cricket Catcher, Zoo de Amarith, Xazax) o si las vas a omitir sin que afecte la trama principal.",
            "Tené presente que Ghazrim DuLoc puede morir sin problema: el mapa a Gravenhollow es en realidad un anillo, no depende de que él siga vivo."
          ]
        }
      ]
    },
    {
      "id": "capitulo-10-narrativa",
      "title": "Narrativa general: la gema y el equilibrio roto",
      "description": "Causa raíz del conflicto, naturaleza de la gema y las cuatro facciones de Mantol-Derith.",
      "blocks": [
        {
          "type": "prose",
          "title": "La gema de Fraz-Urb'luu",
          "text": "El origen de todo el caos es una gema que contiene al señor demonio Fraz-Urb'luu. El objeto tiene el poder de engañar a quien lo posee; la naturaleza exacta de la delusión depende de las motivaciones de Fraz-Urb'luu en ese momento, o puede ser simplemente por diversión. De fondo, Fraz-Urb'luu busca una posición de poder, aunque él mismo no sabe que si lo liberan (destruyendo la gema) no se manifestará en el plano material: será devuelto directamente al Abismo (a menos que el DM prefiera un encuentro con un Fraz-Urb'luu debilitado, opción válida pero muy letal)."
        },
        {
          "type": "prose",
          "title": "Las cuatro facciones",
          "text": "Mantol-Derith existe en equilibrio entre cuatro facciones habitualmente enemigas que coexisten bajo un tratado de no agresión: los gnomos de las profundidades, los duergar, los drow y el cartel Zentharim. Cuando gnomos y duergar empezaron a matarse entre sí por culpa de la gema, Zentharim y drow se retiraron a sus cuarteles para decidir cómo actuar. Estaban organizando una reunión conjunta para, probablemente, tomar el control compartido del pueblo y deshacerse de las otras dos facciones debilitadas, pero ese plan se frustra cuando Kinyel intenta asesinar al beholder Lorthuun durante la propia reunión (pág. 140)."
        },
        {
          "type": "callout",
          "title": "Cómo llegó la gema hasta aquí",
          "text": "La gema ha pasado por varias manos recientemente (hay una imagen de referencia, cortesía de Mino Magnus del grupo de Facebook de DMs de OoTA, que ilustra a los dueños recientes). En el momento en que llegan los PJ, la tiene Kinyel Druu'giir, una asesina drow a quien la gema ha convencido de que recibió el objeto como pago por un contrato de asesinato: su objetivo es Lorthuun, el beholder mutilado que trabaja para los Zentharim."
        },
        {
          "type": "prose",
          "title": "Cómo empezó la guerra entre gnomos y duergar",
          "text": "Yantha Coaxrock (superiora de Nomi Pathshutter, de Blingdenstone) le quitó la gema al duergar Krimgol, mintió sobre su valor y se la pasó en secreto a su asistente Flink, quien huyó con ella. Krimgol se enfureció y avisó a su jefe. Los duergar decidieron infiltrarse invisibles en el campamento gnomo para secuestrar a Yantha e interrogarla. Cuando los gnomos se dieron cuenta, atacaron en masa el almacén duergar para recuperarla, pero perdieron la escaramuza. Los duergar, envalentonados, persiguieron a los gnomos de vuelta hasta su propio almacén, matando a muchos en el proceso. Este es exactamente el momento en que llegan los PJ."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Nota sobre las tiradas de Carisma del libro",
          "text": "Esta es una recomendación del DM, no una regla obligatoria: el libro (pág. 133) pide tiradas de salvación de Carisma al tocar la gema. La sugerencia es descartarlas por completo. Al tratarse de un señor demonio, dejar que la locura fluya narrativamente evita el metajuego: si los jugadores saben que algo es mágico, no podrán «dejar de verlo» y la experiencia pierde fuerza. La alternativa de papelitos se desarrolla en la sección dedicada a la gema."
        }
      ]
    },
    {
      "id": "capitulo-10-pnj",
      "title": "PNJ y relaciones",
      "description": "Personajes clave de Mantol-Derith y los vínculos entre ellos.",
      "blocks": [
        {
          "type": "characters",
          "items": [
            {
              "name": "Kinyel Druu'giir",
              "role": "Drow · asesina",
              "status": "Posee la gema al inicio del capítulo",
              "description": "Asesina drow deludida por la gema: cree genuinamente que recibió el objeto como pago por un contrato para matar a Lorthuun, el beholder Zentharim. Un gárgola está enamorado de ella y la defenderá a toda costa.",
              "play": "Actúa con total convicción sobre su falso contrato; no hay forma de convencerla de que está equivocada mientras tenga la gema. Durante la reunión Zentharim/drow intentará asesinar a Lorthuun, desatando la batalla final del capítulo.",
              "future": "Si el combate de la reunión sale mal para todos los demás, es el único PNJ que escapa con la gema en la mano, lista para volver a aparecer en manos de otro personaje."
            },
            {
              "name": "Yantha Coaxrock",
              "role": "Gnoma de las profundidades · superiora de Nomi Pathshutter",
              "status": "Rescatable del almacén duergar",
              "description": "Le robó la gema al duergar Krimgol, mintió sobre su valor y se la entregó en secreto a su asistente Flink antes de ser capturada. La gema la hace mentir de forma obvia y constante.",
              "play": "Al ser rescatada, solo dice mentiras evidentes; los PJ notarán rápido que algo no cuadra, pero descubrir la razón exacta no es sencillo. No va a revelar que Flink tiene la gema; si los PJ pueden leer su mente, ahí sí obtienen esa información.",
              "future": "Es, en esencia, el motor de una escena de investigación tipo \"episodio policial\": los PJ pueden llegar a varias conclusiones sobre su comportamiento antes de (o sin) descubrir la verdad."
            },
            {
              "name": "Flink",
              "role": "Gnomo · asistente de Yantha",
              "status": "Puede unirse a los PJ",
              "description": "Recibió la gema de Yantha y huyó con ella, pero se la robó un gárgola (el mismo enamorado de Kinyel).",
              "play": "Si viaja con los PJ, puede contarles que el gárgola le robó la gema, aportando la pista que conecta a Flink con Kinyel y la reunión Zentharim/drow."
            },
            {
              "name": "Krimgol",
              "role": "Duergar",
              "status": "Desencadenante del conflicto",
              "description": "Dueño original de la gema (según la cadena de posesión reciente) antes de que Yantha se la quitara mintiendo sobre su valor.",
              "play": "Su furia al descubrir el engaño es lo que arrastra a los duergar a secuestrar a Yantha y, en cadena, a la guerra abierta con los gnomos."
            },
            {
              "name": "Ghazrim DuLoc",
              "role": "Líder Zentharim",
              "status": "Prescindible; el mapa es un anillo",
              "description": "Líder del cartel Zentharim en Mantol-Derith. Tiene el mapa (en realidad un anillo) hacia Gravenhollow, objetivo final del capítulo para los PJ.",
              "play": "Dirige el bando Zentharim en la reunión con los drow, junto a sus esbirros y el beholder Lorthuun.",
              "future": "Es perfectamente aceptable que muera durante la batalla: lo que importa para la trama es el anillo-mapa hacia Gravenhollow, no su supervivencia."
            },
            {
              "name": "Lorthuun",
              "role": "Beholder mutilado · al servicio de los Zentharim",
              "status": "Objetivo de asesinato de Kinyel",
              "description": "Beholder al servicio del cartel Zentharim; es el objetivo (falso, inducido por la gema) del contrato de Kinyel.",
              "play": "Durante la reunión, ataca también a los PJ si estos intervienen; si nadie interviene, Lorthuun acaba matando a todos los drow presentes en la escaramuza."
            },
            {
              "name": "El gárgola enamorado",
              "role": "Gárgola · guardaespaldas no oficial de Kinyel",
              "status": "Robó la gema a Flink",
              "description": "Está enamorado de Kinyel (de forma deliberadamente extraña e inquietante) y la defenderá a toda costa durante el combate. Fue quien le robó la gema a Flink.",
              "play": "Su devoción debería sentirse rara y fuera de lugar; es un detalle de tono que conviene explotar en la escena de la reunión."
            }
          ]
        },
        {
          "type": "relationships",
          "items": [
            [
              "Krimgol → Yantha → Flink → Gárgola → Kinyel",
              "Cadena de posesión reciente de la gema: cada eslabón explica cómo el objeto llegó hasta la escena de la reunión Zentharim/drow."
            ],
            [
              "Gnomos ↔ Duergar",
              "Guerra abierta al llegar los PJ: escaramuza perdida por los gnomos en el almacén duergar, seguida de represalia duergar en el mercado."
            ],
            [
              "Zentharim ↔ Drow",
              "Facciones que iban a reunirse para repartirse el control del pueblo; la reunión se frustra por el intento de asesinato de Kinyel."
            ],
            [
              "Kinyel ↔ Lorthuun",
              "Falso contrato de asesinato inducido por la gema; motor de la batalla final del capítulo."
            ],
            [
              "Gárgola ↔ Kinyel",
              "Amor unilateral y protección incondicional; añade un tono deliberadamente extraño al combate."
            ]
          ]
        }
      ]
    },
    {
      "id": "capitulo-10-mercado",
      "title": "Llegada: el mercado en guerra",
      "description": "Escena de apertura del capítulo, página 136 del manual.",
      "blocks": [
        {
          "type": "prose",
          "title": "Qué ven los PJ al llegar",
          "text": "Mantol-Derith está en guerra abierta cuando llegan los PJ. Entran al mercado y ven señales de una batalla reciente: algunos duergar persiguiendo y matando (si nadie interviene) a 3 gnomos (pág. 136). Los gnomos supervivientes piden ayuda y, si los PJ la dan, los llevan hasta el almacén gnomo, donde 4 duergar visibles y 8 duergar invisibles intentan forzar la puerta."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Encuentro muy letal",
          "text": "El combate en el almacén gnomo (4 duergar + 8 duergar invisibles) es explícitamente un encuentro muy letal. Si nadie ayuda a los gnomos, los duergar tienen la orden de entrar y matar a tantos como puedan: es una masacre."
        },
        {
          "type": "prose",
          "title": "Recompensa y siguiente paso",
          "text": "Después de ayudar a los gnomos, su líder puede explicar lo ocurrido (el conflicto por el precio de la gema robada) y ofrecer una recompensa a cambio de que los PJ ayuden a liberar a Yantha Coaxrock, retenida en el almacén duergar. Es posible que los PJ deban abrirse paso por la fuerza dentro de ese almacén para llegar hasta ella."
        }
      ]
    },
    {
      "id": "capitulo-10-investigacion",
      "title": "Rescate e investigación: el caso de Yantha",
      "description": "El tramo de \"episodio policial\" del capítulo.",
      "blocks": [
        {
          "type": "prose",
          "title": "Rescatar a Yantha",
          "text": "Al rescatar a Yantha, esta solo dirá mentiras, y eso se hará evidente muy rápido. La razón de por qué miente no es fácil de descubrir, y los PJ podrían llegar a muchas conclusiones distintas al respecto. No va a revelar voluntariamente que Flink tiene la gema; solo mediante lectura de mente los PJ pueden obtener esa información directamente."
        },
        {
          "type": "callout",
          "title": "Tono de la escena",
          "text": "Este tramo funciona como un episodio de investigación policial dentro de la aventura, y puede ser muy divertido si se juega con calma: dejá que los jugadores especulen, interroguen a varios PNJ y saquen sus propias conclusiones, acertadas o no, antes de resolver (o no) el misterio."
        },
        {
          "type": "prose",
          "title": "Hacia los Zentharim",
          "text": "Encuentren o no a Flink, eventualmente los PJ necesitarán buscar a los Zentharim, porque su líder, Ghazrim DuLoc, tiene el mapa hacia Gravenhollow. El capítulo funciona mejor si los PJ visitan primero a los gnomos y a los duergar antes de hablar con los Zentharim."
        }
      ]
    },
    {
      "id": "capitulo-10-reunion",
      "title": "La reunión Zentharim/Drow: el gran combate",
      "description": "El encuentro central del capítulo, página 140 del manual.",
      "blocks": [
        {
          "type": "prose",
          "title": "Planteamiento de la escena",
          "text": "Cuando los PJ llegan, la reunión entre Zentharim y drow está a punto de comenzar. Es uno de los mejores encuentros del módulo: un grupo de guerreros de élite drow se enfrenta al bando Zentharim, compuesto por varios esbirros y el beholder Lorthuun, más el gárgola enamorado de Kinyel, que la defenderá a toda costa (un detalle que debería sentirse deliberadamente extraño)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Una batalla caótica, no una decisión fácil",
          "text": "Los PJ podrían querer ponerse del lado de los Zentharim, lo cual tiene sentido narrativo, salvo que no se conocen entre sí, y Lorthuun atacará también a los PJ. Este combate está pensado como un caos total, no como una alianza clara con ningún bando."
        },
        {
          "type": "table",
          "title": "Resultados posibles de la escena",
          "headers": [
            "Acción de los PJ",
            "Qué ocurre"
          ],
          "rows": [
            [
              "No intervienen",
              "Lorthuun mata a todos los drow presentes; Ghazrim y sus esbirros también mueren. La única superviviente es Kinyel, que escapa con la gema."
            ],
            [
              "Se alían con los Zentharim",
              "Lorthuun los ataca también a ellos: no hay garantía de trato amistoso solo por intervenir de ese lado."
            ],
            [
              "Flink está presente",
              "Puede contarles que fue el gárgola quien le robó la gema, conectando los hilos de la investigación con esta escena."
            ],
            [
              "Ghazrim muere en combate",
              "No es un problema narrativo: el mapa a Gravenhollow es, en realidad, un anillo, así que su muerte no bloquea el objetivo de los PJ."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Después de la batalla",
          "text": "Sea cual sea el desenlace de este combate, eventualmente los PJ terminan con la gema en su poder, que es, aparentemente, el origen de todo el derramamiento de sangre del capítulo. Es en este punto donde empieza la diversión real con la naturaleza de la gema (ver sección siguiente)."
        }
      ]
    },
    {
      "id": "capitulo-10-gema",
      "title": "La gema: cómo dirigirla sin romper la inmersión",
      "description": "Alternativa de roleplay recomendada para la locura inducida por la gema, y su destrucción.",
      "blocks": [
        {
          "type": "callout",
          "tone": "success",
          "title": "Recomendación de dirección (no es canon del libro)",
          "text": "En lugar de usar las tiradas de Carisma del manual (pág. 133), decidí directamente un rasgo de personalidad o actitud extraña que el PJ o PNJ en cuestión deberá interpretar cada vez que alguien adquiera la gema. La razón: si los jugadores tiran dados y saben que es magia, el metajuego arruina la diversión, porque no podrán \"dejar de ver\" el efecto. Esta alternativa reduce ese pensamiento metajuego."
        },
        {
          "type": "prose",
          "title": "Cómo entregar el efecto",
          "text": "Lo ideal es que, cuando un PJ tome la gema, le entregues en secreto un papelito con lo que debe hacer. El jugador tiene que interpretarlo sin poder explicar sus propias acciones; el efecto puede ser sutil u obvio. Esto favorece mucho el roleplay y reduce el pensamiento metajuego entre los jugadores."
        },
        {
          "type": "list",
          "title": "Papelitos sugeridos (encabezado común)",
          "items": [
            "Encabezado para cada papel: \"Estás influenciado por la gema, pero no podés decir esto, ni explicar tus acciones, ni ser convencido de que son distintas a como actuás normalmente. Vos...\"",
            "...debés decir mentiras, incluso si son obviamente falsas; vos las creés.",
            "...empezás a escuchar voces que te dicen que hagas cosas.",
            "...no confiás en ninguna medida en uno de tus amigos: debe estar conspirando contra vos.",
            "...debés estar en desacuerdo con las opiniones de los demás.",
            "...de pronto recordás que un familiar tuyo está prisionero en Menzoberranzan.",
            "...sentís un enorme impulso de tomar cosas que no son tuyas.",
            "...descubrís que Kinyel es en realidad la hermana de Illvara, buscándote para vengar a su hermana.",
            "...decidís que la gema es tuya y siempre lo fue; matarías para conservarla.",
            "...decidís que el líder gnomo está conspirando contra vos y te envió donde los Zentharim para que te maten.",
            "...descubrís que la gema es en realidad un cristal para ver el futuro; podés ver visiones dentro de ella.",
            "...te volvés agresivo y defensivo con todo el mundo: ¡deben querer algo de vos!",
            "...te entristecés por todo el derramamiento de sangre reciente y decidís quedarte en el pueblo para ayudar a reconstruirlo.",
            "...decidís que matar al rey pudín no estuvo bien y tratás de racionalizar la idea; no podés dejar de hablar de eso.",
            "...decidís que el Rey Bruenor es un hipócrita y debería haber venido él mismo a esta aventura; no podés dejar de hablar de eso.",
            "...te volvés el mejor amigo de (la persona más improbable del grupo) y no podés dejar de mencionar sus virtudes."
          ]
        },
        {
          "type": "callout",
          "title": "Objetivo de la mecánica de roleplay",
          "text": "Si se maneja bien y el grupo disfruta del roleplay, se puede llegar a que todos estén influenciados por la gema de formas distintas sin poder decir que es verdad. El objetivo del desafío es que alguien descubra que la gema está haciendo esto sin que nadie lo diga en voz alta: es a la vez un desafío de interpretación y de deducción."
        },
        {
          "type": "prose",
          "title": "Destruir la gema",
          "text": "Una vez descubierta la naturaleza de la gema, destruirla es sencillo. Se sugiere hacerla inmune a armas normales: solo un arma mágica puede romperla. Al romperse, Fraz-Urb'luu puede aparecer por un instante antes de desvanecerse de vuelta al Abismo."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Si los PJ no la destruyen",
          "text": "Los PJ podrían decidir no destruir la gema y quedársela, o dársela a un PNJ para que la resguarde. Si lo hacen, significa más diversión potencial, ya que la gema seguirá influenciando a cualquiera que la posea en el futuro."
        }
      ]
    },
    {
      "id": "capitulo-10-secuelas",
      "title": "Secuelas: un pueblo devastado",
      "description": "Qué queda de Mantol-Derith después del capítulo y oportunidades de botín.",
      "blocks": [
        {
          "type": "prose",
          "title": "Estado final del pueblo",
          "text": "Cuando todo termina, casi toda la gente que luchó en el pueblo puede estar muerta o herida; las cuatro facciones, o al menos tres de ellas, quedan severamente debilitadas, con pocos o ningún combatiente en pie. Los PJ podrían forzar su entrada a los tesoros de cualquiera de las facciones si quisieran, en particular a los almacenes Zentharim, donde hay mucho botín."
        },
        {
          "type": "callout",
          "title": "Conexión con el capítulo 9 (referencia externa)",
          "text": "Según una sugerencia aportada para el capítulo 9, en el almacén de Ghazrim puede encontrarse un yelmo de teletransportación. Esta nota depende del contenido de ese capítulo y debe tratarse como sugerencia a confirmar cuando se desarrolle el capítulo 9, no como hecho ya confirmado en esta guía."
        },
        {
          "type": "prose",
          "title": "Dejar un asentamiento",
          "text": "Es una buena idea que los PJ dejen gente de confianza en Mantol-Derith para supervisar la paz continuada del pueblo tras la devastación (ver más sobre asentamientos en el capítulo 9, cuando esté disponible)."
        }
      ]
    },
    {
      "id": "capitulo-10-secundarias",
      "title": "Misiones secundarias (áreas 1C, 1D y encuentros de la zona)",
      "description": "Evaluación honesta de cada misión secundaria, con recomendaciones de uso.",
      "blocks": [
        {
          "type": "callout",
          "title": "Advertencia general sobre estas misiones",
          "text": "Estas misiones secundarias no se mencionaron antes porque, según la valoración de esta guía, son ideas a medio desarrollar en esta parte del libro (esta segunda mitad tiene varias secciones escritas con prisa). Pueden carecer de profundidad y, en algunos casos, no terminan de tener sentido. Lo que sigue son opiniones y recomendaciones, no obligaciones de la trama principal."
        },
        {
          "type": "list",
          "title": "Área 1C — Sladis Vadir",
          "items": [
            "Los PJ probablemente no exploren esta área, pero si lo hacen encuentran a una elfa enloquecida que come gente: Sladis Vadir (pág. 135).",
            "Los PJ la están buscando en nombre del Enclave Esmeralda, si aceptaron esa misión al formar una alianza con Morista Malkin en Gauntlgrym.",
            "Sugerencia: podés reubicarla dentro de Mantol-Derith si te conviene para el ritmo de la sesión."
          ]
        },
        {
          "type": "list",
          "title": "Área 1D — Rystia",
          "items": [
            "Los PJ probablemente no exploren esta área tampoco, pero si lo hacen, tras una entrada secreta al pueblo, encuentran a una humana llamada Rystia (pág. 135-136).",
            "Está demente y atacará a cualquiera.",
            "Este encuentro secundario puede eliminarse por completo sin ningún efecto sobre el módulo."
          ]
        },
        {
          "type": "list",
          "title": "Cazador de grillos (pág. 142)",
          "items": [
            "Retrata a un kuo-toa de Sloobludop que todavía no sabe lo que ocurrió allí; está cazando grillos gigantes (inofensivos).",
            "Puede jugarse solo como escena de ambientación/sabor.",
            "Más allá de eso, solo hay un pequeño alijo de pociones."
          ]
        },
        {
          "type": "list",
          "title": "El zoo de Amarith (pág. 142)",
          "items": [
            "Si Sladis Vadir viaja con los PJ, puede guiarlos hasta otra miembro del Enclave Esmeralda escondida en una cueva cercana: Amarith Coppervein.",
            "El libro dice que los PJ también la buscan en nombre de Morista Malkin, pero esto es un error del manual: Amarith nunca se menciona en el capítulo de Gauntlgrym.",
            "Amarith tiene un pequeño zoo de animales del Underdark.",
            "Sugerencia para darle más vida: hacer que los animales se hayan escapado justo cuando llegan los PJ, con Amarith en el fondo de la cueva defendiendo su vida."
          ]
        },
        {
          "type": "list",
          "title": "Xazax el fabricante de ojos (pág. 142)",
          "items": [
            "Peebles, un gnomo rescatado en la escena del mercado, es sirviente de un beholder llamado Xazax, al que se injerta ojos extra de beholder (no funcionales) sobre su propio cuerpo.",
            "Valoración de esta guía: suena interesante pero no lo es tanto en la práctica.",
            "El combate ocurre en la guarida del propio beholder y es, en ese punto, un encuentro muy letal.",
            "Crítica adicional: este monstruo icónico se trata aquí como un encuentro secundario sin importancia y con poco tesoro, cuando un monstruo así debería anticiparse y ser un punto central de la aventura, como Lorthuun en Mantol-Derith o Karazikar en Worm Writhings."
          ]
        }
      ]
    },
    {
      "id": "capitulo-10-red",
      "title": "Red de conocimiento y continuidad",
      "description": "Hilos que conviene registrar y conectar al incorporar los capítulos siguientes.",
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
              "Gema de Fraz-Urb'luu",
              "Si los PJ no la destruyen, toda la campaña",
              "Quién la posee, qué rasgo de personalidad le toca en papel y si alguien empieza a sospechar su naturaleza."
            ],
            [
              "Kinyel Druu'giir",
              "Después de la batalla, si escapa",
              "Puede reaparecer con la gema; recordar su falsa creencia sobre el contrato contra Lorthuun mientras la tenga."
            ],
            [
              "Mapa/anillo a Gravenhollow",
              "Próximo destino de los PJ",
              "Confirmar si Ghazrim sobrevivió o no; de cualquier forma, el anillo es lo que habilita el viaje."
            ],
            [
              "Mantol-Derith como asentamiento",
              "Capítulo 9 (reglas de asentamientos)",
              "Si los PJ dejan gente a cargo, registrar quién y bajo qué condiciones queda la paz entre las facciones sobrevivientes."
            ],
            [
              "Yelmo de teletransportación en el almacén de Ghazrim",
              "Capítulo 9",
              "Sugerencia pendiente de confirmar cuando se desarrolle el capítulo 9; no tratar como hecho ya validado."
            ],
            [
              "Peebles y Xazax",
              "Si se usa el encuentro secundario",
              "Registrar si los PJ decidieron anticipar o darle más protagonismo al beholder Xazax, dado que el material original lo trata como secundario."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Separación de fuentes en este capítulo",
          "text": "El contenido de este capítulo proviene de notas de dirección de un DM (no del texto oficial del manual palabra por palabra), por lo que toda la sección de misiones secundarias, la alternativa de la gema por papelitos y las sugerencias sobre el capítulo 9 están marcadas explícitamente como opiniones o recomendaciones, no como canon cerrado. Si en el futuro se incorpora el texto oficial del capítulo del manual, cualquier discrepancia debería agregarse como nota correctiva en una extensión, no sobrescribiendo este archivo."
        }
      ]
    }
  ]
});
