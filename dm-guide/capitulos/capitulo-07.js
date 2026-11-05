/* Contenido editable del capítulo 7: Huida del Underdark.
   Nota de integración (AGENT.md): este archivo solo declara datos. Para que el navegador lo cargue,
   debe enumerarse en el punto de carga de capítulos (por ejemplo, una etiqueta script en index.html
   antes de app.js o el manifiesto de capítulos). No se modificó app.js ni styles.css. */
window.DND_CHAPTERS=window.DND_CHAPTERS||[];
window.DND_CHAPTERS.push({
  "id": "capitulo-07",
  "number": 7,
  "title": "Huida del Underdark",
  "summary": "Tras ayudar a Blingdenstone, el grupo es recibido como héroe y escoltado por gnomos hasta un portal arcano a doce días de la ciudad. Allí los alcanza Ilvara, consumida por la obsesión, y la batalla se interrumpe con la irrupción de Orcus. La sesión cierra con la salida a la superficie y el comienzo de una pausa de varios meses antes de Gauntlgrym.",
  "tags": [
    "Huida",
    "Portal",
    "Confrontación final con los drow",
    "Orcus",
    "Superficie"
  ],
  "quick": [
    [
      "Objetivo",
      "Llegar al portal y escapar a la superficie"
    ],
    [
      "Nivel esperado",
      "7 (llegan a 8 durante la pausa)"
    ],
    [
      "Tono",
      "Persecución, tensión creciente y terror repentino"
    ],
    [
      "Amenaza visible",
      "Ilvara y su fuerza de ataque"
    ],
    [
      "Amenaza real",
      "Orcus y su ejército no-muerto"
    ],
    [
      "Estructura de sesión",
      "Despedida · viaje · confrontación · Orcus · portal · superficie"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-07-panorama",
      "title": "Panorama del capítulo",
      "description": "Qué debe saber el DM antes de dirigir la huida y cómo repartir la sesión.",
      "blocks": [
        {
          "type": "prose",
          "title": "Función narrativa",
          "text": "Este capítulo cierra la primera mitad de Out of the Abyss. Los personajes por fin salen del Underdark y lo hacen de forma memorable: primero enfrentan a la perseguidora que los capturó en el capítulo 1 y después, sin tiempo para recuperarse, quedan frente a un demonio lord al que no pueden vencer. La escena debe dar una resolución emocional al arco de Ilvara y, a la vez, dejar claro que la amenaza real es mucho mayor que cualquier drow. Los jugadores deben irse a la superficie con la sensación de haber sobrevivido por poco y de ser las personas mejor informadas sobre lo que ocurre en las profundidades."
        },
        {
          "type": "callout",
          "title": "Cómo leer las etiquetas de esta guía",
          "text": "El capítulo publicado es muy abierto respecto a cómo volver a la superficie. Lo que sigue combina tres capas: HECHO DE LA AVENTURA (lo que ya establece el módulo o capítulos previos de esta guía), SUGERENCIA DEL AUTOR (propuesta opcional de dirección: el portal, la emboscada de Ilvara y la aparición de Orcus) e IDEA PROPIA (recordatorios de reglas y alternativas de mesa añadidas para facilitar la dirección). Nada de la segunda y tercera capa es canon obligatorio: adaptalo a tu mesa."
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
              "Blingdenstone resuelta: ooze, medusa y dilema de los hombres rata",
              "Hecho de la aventura",
              "Es la premisa del capítulo: los personajes son héroes locales. Adaptá las referencias a lo que realmente ocurrió en tu mesa."
            ],
            [
              "Orcus quiere llevar su ejército no-muerto al Underdark y controlar portales estratégicos",
              "Hecho de la aventura (revelado en el capítulo 11, Gravenhollow)",
              "Aquí aparece como adelanto. No reveles todavía sus motivos completos."
            ],
            [
              "Orcus visitó una comunidad de azotamentes que lloraba la muerte de su cerebro anciano y lo convirtió en una versión no-muerta para controlar a los azotamentes",
              "Hecho de la aventura (visión del capítulo 11)",
              "Explica por qué un azotamente sirve a Orcus en esta escena. Guardalo como pista futura."
            ],
            [
              "Portal de teletransporte a doce días de Blingdenstone",
              "Sugerencia del autor",
              "El texto original permite muchas rutas a la superficie. Este portal simplifica la logística y concentra el clímax."
            ],
            [
              "Ilvara aún los persigue por locura obsesiva",
              "Sugerencia del autor",
              "Justifica que, pasados meses, siga gastando tropas y recursos en un grupo diezmado."
            ],
            [
              "Asha y Jorlan pueden traicionar a Ilvara durante el combate",
              "Sugerencia del autor",
              "Continúa los hilos sembrados en el capítulo 1."
            ],
            [
              "Orcus se aparece durante 2 o 3 rondas y el portal se abre justo a tiempo",
              "Sugerencia del autor",
              "Es un encuentro de escape, no un combate que se pueda ganar."
            ],
            [
              "Recordatorios de reglas de conjuros y luz solar",
              "Idea propia",
              "Ayuda memoria del Player's Handbook; verificá los datos exactos en los libros."
            ]
          ]
        },
        {
          "type": "timeline",
          "title": "Ritmo recomendado de la sesión",
          "items": [
            [
              "1 · Despedida de Blingdenstone",
              "Celebración, regalos y presentación de la escolta: Flonk Dugars, seis guardias gnomos y Nomi Pathshutter."
            ],
            [
              "2 · Viaje de doce días",
              "Resumí el trayecto con una o dos escenas breves. Flonk evita encuentros, así que el viaje es de descanso y tensión, no de combate."
            ],
            [
              "3 · La cámara del portal",
              "Describí la cueva, activá el portal y empezá la cuenta de calentamiento."
            ],
            [
              "4 · Emboscada de Ilvara",
              "Los drow entran por detrás. Permití una última conversación cinematográfica antes de que empiece la lucha."
            ],
            [
              "5 · Combate contra la fuerza de Ilvara",
              "Insecto plaga, espíritus guardianes, fuego de apoyo, posibles traiciones. Mantené el ritmo ágil."
            ],
            [
              "6 · Irrupción de Orcus",
              "Cuando Ilvara esté a punto de caer, aparece el azotamente y abre la puerta para Orcus."
            ],
            [
              "7 · Portal y salida",
              "Dos rondas para resistir, una tercera para cruzar. Nomi (o un PJ con Arcanos) cruza último y cierra el portal."
            ],
            [
              "8 · Superficie y despedidas",
              "Remate de los drow que cruzaron, destino de los PNJ y comienzo de la pausa de varios meses."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Revisá quién sigue vivo entre los PNJ de la fuga: Eldeth, Derendil, Stool, Glabbagool, Jimjar, Buppido, Sarith y otros.",
            "Decidí a qué lugar de la superficie lleva el portal (cerca de Gauntlgrym, Waterdeep, Mirabar, Neverwinter, etc.).",
            "Decidí si es de día o de noche en el punto de salida: afecta a los drow que crucen.",
            "Releé las notas de Ilvara, Shoor, Jorlan y Asha del capítulo 1 y lo que hayan hecho desde entonces en tu campaña.",
            "Preparar las fichas de Ilvara, Asha, Shoor, Jorlan, drow, arañas gigantes, el azotamente, un yochlol y Orcus.",
            "Resolvé con anticipación cómo contarás la cuenta atrás del portal (tabla de eventos de la sección del portal).",
            "Preparar una pequeña lista de PNJ para huir cuando aparezca Orcus (Stool, Glabbagool, aliados no destinados a la superficie).",
            "Tené preparado un recordatorio visible de las rondas: Orcus llega, ronda 1, ronda 2, ronda 3 (cruzar).",
            "Si el grupo tiene a Derendil, decidí si usarás el trasfondo alternativo ofrecido por el autor de la guía."
          ]
        }
      ]
    },
    {
      "id": "capitulo-07-contexto",
      "title": "Contexto: por qué Ilvara sigue cazándolos",
      "description": "Motivación de la perseguidora, tensiones internas de su grupo y cómo encaja Orcus en el panorama del Underdark.",
      "blocks": [
        {
          "type": "prose",
          "title": "El problema de la lógica",
          "text": "Cuando el grupo llegue aquí habrán pasado semanas o incluso meses desde la fuga de Velkynvelve. Parece improbable que una sacerdotisa de una casa drow poderosa siga gastando tiempo, soldados y recursos en un puñado de prisioneros muy reducido. La aventura deja esa pregunta en el aire. La guía propone una explicación sencilla y coherente con la campaña: Ilvara no actúa por razones prácticas, sino por obsesión."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Sugerencia del autor: la obsesión de Ilvara",
          "text": "Ilvara contrajo una forma de locura que la vuelve obsesiva con sus prisioneros. Sufre pesadillas y no consigue descansar hasta cazarlos o matarlos. Sabe que el grupo de esclavos se ha reducido muchísimo y, aun así, los sigue por el Underdark. Es una pieza más de la locura que contamina a todas las criaturas de las profundidades (capítulo 1: sueños de túneles, tentáculos, zumbidos y cuerpos que revientan). No hace falta que los jugadores lo comprendan todavía; basta con que noten que su persecución no es racional."
        },
        {
          "type": "prose",
          "title": "Por qué la siguen sus soldados",
          "text": "Ilvara es una miembro poderosa y respetada de su casa. Aunque su fuerza expedicionaria tenga dudas, obedece. Eso permite escenas de tensión: los soldados drow muestran vacilación, intercambian miradas o ejecutan órdenes con rigidez, pero no se atreven a contradecirla a la cara."
        },
        {
          "type": "prose",
          "title": "Asha y Jorlan: dos traiciones latentes",
          "text": "Solo dos personas de la expedición han comprendido que Ilvara ya no es ella misma. Asha Vandree, la joven sacerdotisa que codicia su autoridad, y Jorlan Duskryn, el guerrero desfigurado que la desprecia por haberlo descartado. Ambos esperan el momento adecuado para enfrentarla abiertamente, pero no son aliados entre sí. En el capítulo 1 se sembró el resentimiento de Jorlan y la ambición de Asha; este es el momento de rendir fruto."
        },
        {
          "type": "list",
          "title": "Cómo mostrarlo antes del combate",
          "items": [
            "Si usaste las escenas cinematográficas sugeridas en el capítulo 2, los jugadores ya saben que un grupo drow los sigue. Retomá esas escenas como recordatorio.",
            "Si el grupo se cruzó con Xalith en Gracklstugh, mencioná que este lo sabía o lo sospechaba.",
            "Si vieron los restos de exploradores drow en Neverlight Grove, recordalo ahora: los drow ya perdieron gente en la persecución.",
            "Durante el viaje con los gnomos, un sueño inquietante compartido (zumbidos, tentáculos) refuerza la sensación de que algo está mal en la mente de Ilvara.",
            "Antes del ataque, permití que un PJ perciba que Asha y Jorlan no miran a Ilvara con lealtad."
          ]
        },
        {
          "type": "prose",
          "title": "Por qué Orcus aparece aquí",
          "text": "Orcus es un icono del lore de D&D y apenas aparece en el módulo. Esta escena le da al grupo un vistazo directo a un tercer demonio lord, después de haber conocido las huellas de otros dos. Refuerza una idea central de la campaña: el Underdark está siendo reclamado por poderes demoníacos que se mueven en paralelo. Su motivación, según el capítulo 11, es abrir paso a su ejército no-muerto y controlar portales estratégicos. Este portal es justo uno de ellos, lo cual hace plausible que el azotamente sepa dónde abrir la puerta."
        },
        {
          "type": "callout",
          "title": "Idea propia: no revelar todo",
          "text": "El grupo solo ve a Orcus unas pocas rondas. No expliques su plan ni su relación con los azotamentes. Si preguntan, el único dato que obtienen es lo que los propios PNJ puedan deducir (el azotamente abrió una puerta de forma deliberada y desapareció). Los detalles llegan en el capítulo 11."
        }
      ]
    },
    {
      "id": "capitulo-07-despedida",
      "title": "La despedida de Blingdenstone y el viaje",
      "description": "Escena inicial, escolta gnoma y ritmo del trayecto hasta el portal.",
      "blocks": [
        {
          "type": "prose",
          "title": "Héroes locales",
          "text": "El grupo ha ayudado a Blingdenstone a librarse de la amenaza del ooze y de la medusa, y ha resuelto el dilema de los hombres rata. Los gnomos los consideran héroes y pueden celebrar un banquete en su honor. Dorbo Diggermatock se compromete a ayudarlos a volver a la superficie. Usá esta escena para recompensar a los jugadores con reconocimiento social: nombres recordados, regalos pequeños, preguntas sobre sus planes y promesas de volver a verlos."
        },
        {
          "type": "callout",
          "title": "Idea propia: el banquete como cierre de arcos",
          "text": "Aprovechá la fiesta para que cada jugador tenga un momento. Un gnomo agradecido, un PNJ que se despide, una conversación con Eldeth o Derendil sobre qué harán al llegar a la superficie. Es una buena ocasión para que los PNJ vivos expresen sus deseos finales y para que los jugadores tomen decisiones sobre quién los acompaña."
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Dorbo Diggermatock",
              "role": "Líder gnomo de Blingdenstone",
              "status": "Aliado agradecido",
              "description": "Organiza el regreso del grupo a la superficie. Ofrece guías y la ubicación de un portal mágico a doce días de la ciudad.",
              "play": "Práctico, agradecido y consciente de que Blingdenstone todavía es frágil. Desea que el grupo se vaya antes de que los problemas del Underdark vuelvan a la ciudad.",
              "future": "Puede reaparecer si los PJ vuelven a Blingdenstone o si llegan noticias de la ciudad en capítulos posteriores."
            },
            {
              "name": "Flonk Dugars",
              "role": "Gnomo explorador · guía principal",
              "status": "Escolta clave",
              "description": "Conoce muy bien esta parte del Underdark y puede conducir al grupo hasta el portal evitando otros encuentros.",
              "play": "Seguro de sí mismo, observador y poco hablador cuando está concentrado. Da órdenes simples en el camino y pide silencio en las zonas peligrosas.",
              "future": "Si sobrevive, regresa a Blingdenstone con los guardias que queden."
            },
            {
              "name": "Seis guardias gnomos",
              "role": "Escolta armada",
              "status": "Expuestos en el combate",
              "description": "Soldados de Blingdenstone asignados a la misión. Acompañan al grupo y pueden pelear junto a los PJ en la cámara del portal.",
              "play": "Disciplinados y nerviosos. Son blancos fáciles para el insecto plaga de Ilvara, así que algunos pueden morir con rapidez.",
              "future": "Los supervivientes regresan con Flonk o parten hacia Gauntlgrym con Nomi y Eldeth."
            },
            {
              "name": "Nomi Pathshutter",
              "role": "Gnoma · operadora del portal",
              "status": "Pieza esencial de la huida",
              "description": "Es quien puede activar el portal y la que debe cruzarlo en último lugar para cerrarlo tras de sí y evitar que Orcus o sus no-muertos lo atraviesen.",
              "play": "Concentrada y asustada, pero decidida. Cuando el portal se está calentando no puede apartarse de él.",
              "future": "Si sobrevive, parte hacia Gauntlgrym con Eldeth y los gnomos restantes. Si muere, cualquier PJ con Arcanos puede hacer su trabajo."
            }
          ]
        },
        {
          "type": "table",
          "title": "Escolta y mecánica del viaje",
          "headers": [
            "Elemento",
            "Detalle",
            "Recordatorio"
          ],
          "rows": [
            [
              "Duración",
              "12 días hasta el portal",
              "Resumilo; no hace falta jugar cada día."
            ],
            [
              "Guía",
              "Flonk Dugars",
              "Evita otros encuentros. No hay combates previstos antes de la emboscada."
            ],
            [
              "Escolta",
              "6 guardias gnomos",
              "Cuentan como aliados en el combate; son blanco natural del insecto plaga."
            ],
            [
              "Operadora del portal",
              "Nomi Pathshutter",
              "Debe cruzar la última. Si falta, un PJ con Arcanos puede activarlo y cerrarlo."
            ],
            [
              "Nivel esperado",
              "7",
              "El grupo debería estar muy equipado y con recursos tras Blingdenstone."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Escenas de viaje opcionales",
          "text": "Idea propia: como no hay encuentros, el viaje es un buen momento para escenas de personaje. Algunas ideas: un descanso largo en una cueva seca donde cada PJ comparte qué hará al llegar a la superficie; una noche de guardia donde Flonk habla de cómo cambió el Underdark en los últimos meses; un sueño compartido con tentáculos y zumbidos que despierta a todos a la vez; el hallazgo de una marca drow fresca en un túnel lateral que Flonk decide evitar. Usá una sola o dos escenas, no todas."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Control de PNJ antes de llegar",
          "text": "Antes de llegar a la cámara, definí quién sigue en el grupo. Los PNJ que no estén destinados a la superficie (por ejemplo Stool o Glabbagool) pueden haberse separado ya o estar presentes para huir cuando aparezca Orcus. Si no están, ignorá esos detalles."
        }
      ]
    },
    {
      "id": "capitulo-07-pnj",
      "title": "Personajes de la escena",
      "description": "Atacantes, aliados y figuras que reaccionan al clímax.",
      "blocks": [
        {
          "type": "characters",
          "items": [
            {
              "name": "Ilvara Mizzrym",
              "role": "Sacerdotisa de Lolth · líder de la fuerza de ataque",
              "status": "Obsesionada y decidida",
              "description": "Poderosa y respetada, aunque su mente está deteriorada. No descansa hasta cazar o matar a sus antiguos prisioneros. Dirige personalmente el ataque.",
              "play": "Habla con cruel seguridad, pero se nota la fijación: repite quejas, mira a los PJ con rabia y ya no calcula riesgos. Si Asha o Jorlan la traicionan, se obsesiona con él o ella y olvida a los PJ.",
              "future": "Si muere, cierra el arco del capítulo 1. Si sobrevive y cruza, aparece en la superficie con la guardia baja por la luz solar."
            },
            {
              "name": "Asha Vandree",
              "role": "Sacerdotisa joven",
              "status": "Traición posible",
              "description": "Ambiciosa. Anhela la autoridad de Ilvara y observa la caída de su superiora. Puede apuñalarla por la espalda en cualquier momento.",
              "play": "Usa conjuros de apoyo y control. En su primer turno lanza espíritus guardianes para impedir que la gente salga del área del insecto plaga.",
              "future": "Si traiciona a Ilvara y sobrevive, puede intentar huir o negociar con los PJ."
            },
            {
              "name": "Shoor Vandree",
              "role": "Guerrero de élite",
              "status": "Combatiente leal",
              "description": "Joven y arrogante, ocupó el lugar de Jorlan en el favor de Ilvara.",
              "play": "Lucha en primera línea con ferocidad y desprecio. Protege a Ilvara si la atacan.",
              "future": "Si Ilvara cae, puede mostrarse desorientado o furioso."
            },
            {
              "name": "Jorlan Duskryn",
              "role": "Guerrero de élite herido",
              "status": "Posible aliado",
              "description": "Desfigurado y rechazado por Ilvara. Tiene desventaja en las tiradas de ataque a causa de sus heridas.",
              "play": "Contenido y calculador. Puede traicionar a Ilvara en cualquier ronda. Ya ayudó al grupo en el capítulo 1; esta es su segunda ayuda.",
              "future": "Es el único drow que no se vuelve hostil al llegar a la superficie. Tras el combate puede unirse al grupo, ya que no será bienvenido entre los drow."
            },
            {
              "name": "Seis drow",
              "role": "Soldados de apoyo",
              "status": "Fuego de cobertura",
              "description": "Disparan desde atrás y avanzan a proteger a Ilvara si la atacan.",
              "play": "Obedientes pero vacilantes. Si Ilvara cae o se desata el caos, se dispersan o huyen.",
              "future": "Los que crucen a la superficie se vuelven agresivos, aunque la luz solar probablemente los derrote."
            },
            {
              "name": "Dos arañas gigantes",
              "role": "Bestias de combate",
              "status": "Atacan en primera línea",
              "description": "Atacan a quien tengan al alcance junto con los guerreros de élite.",
              "play": "Usan telarañas para inmovilizar y morder. Sirven para presionar a los PJ que escapen del insecto plaga.",
              "future": "Si el grupo cruza el portal, no los siguen."
            },
            {
              "name": "El azotamente",
              "role": "Agente de Orcus",
              "status": "Aparece de la nada",
              "description": "Se teletransporta a una esquina de la cámara cuando Ilvara está cerca de perder. Su función es abrir la puerta que Orcus atravesará. Después se teletransporta lejos.",
              "play": "Silencioso y eficiente. No se detiene a pelear. Si lo atacan, se ocupa de terminar su tarea.",
              "future": "Conecta con la visión del capítulo 11: los azotamentes del Underdark están bajo control de Orcus."
            },
            {
              "name": "Orcus",
              "role": "Demonio lord de los no-muertos",
              "status": "Encuentro imposible de ganar",
              "description": "Emerge de la puerta y usa su varita y sus conjuros desde el primer momento. Lo protegen no-muertos de bajo nivel como esqueletos y zombis.",
              "play": "Imponente y despreocupado. No necesita perseguir al grupo: solo ocupa el espacio y destruye. Elegí sus objetivos al azar entre PJ y PNJ presentes.",
              "future": "No debe ser derrotado. Reaparece en capítulos posteriores como amenaza demoníaca principal en el Underdark."
            },
            {
              "name": "Yochlol",
              "role": "Demonio invocado por Ilvara",
              "status": "Recurso si pierde terreno",
              "description": "Si el combate se pone difícil, Ilvara intenta invocar a este demonio de Lolth.",
              "play": "Aparece como refuerzo inesperado. Usalo si el grupo derrota a las fuerzas de Ilvara demasiado rápido.",
              "future": "Si aparece, puede desaparecer cuando llega Orcus o ser ignorado en la confusión."
            }
          ]
        },
        {
          "type": "characters",
          "title": "PNJ aliados que pueden estar presentes",
          "items": [
            {
              "name": "Eldeth Feldrun",
              "role": "Enana escudo · exploradora",
              "status": "Si sobrevive",
              "description": "Quiere advertir a su pueblo sobre las amenazas del Underdark.",
              "play": "Seria y resuelta. Se despide con orgullo y pide a los PJ que no olviden lo vivido.",
              "future": "Se une a Nomi Pathshutter y los gnomos restantes y parte hacia Gauntlgrym para avisar. El grupo la verá allí más adelante."
            },
            {
              "name": "Príncipe Derendil",
              "role": "Quaggoth · identidad ilusoria",
              "status": "Si sobrevive",
              "description": "Sigue creyéndose un príncipe elfo, aunque su historia es ilusoria.",
              "play": "Habla con cadencia teatral. Ante Orcus puede reaccionar con furia o con una dignidad desbordada.",
              "future": "Si está con el grupo, es una gran oportunidad para el trasfondo alternativo propuesto por el autor de la guía."
            },
            {
              "name": "Stool",
              "role": "Brote de micónido",
              "status": "Huye al ver a Orcus",
              "description": "Si sigue con el grupo, huye hacia el Underdark cuando Orcus aparece. Atraviesa un parche de hongos de la pared.",
              "play": "Asustado y súbito. Una despedida breve y emotiva antes de que desaparezca.",
              "future": "Vuelve a Neverlight Grove y puede reaparecer en el capítulo 5 o en otras escenas relacionadas."
            },
            {
              "name": "Glabbagool",
              "role": "Cieno ocre aliado",
              "status": "Huye al ver a Orcus",
              "description": "Si está presente, se desliza fuera de la cámara.",
              "play": "Un gesto simple: se aleja con calma, sin sufrir ni dar explicaciones.",
              "future": "Vuelve al Underdark."
            }
          ]
        },
        {
          "type": "relationships",
          "items": [
            [
              "Ilvara → Asha",
              "Asha desea su autoridad. Cuando Ilvara pierde terreno, Asha puede tomar la oportunidad de traicionarla."
            ],
            [
              "Ilvara → Jorlan",
              "Jorlan fue descartado. Su resentimiento puede estallar durante el combate y desviar la atención de Ilvara."
            ],
            [
              "Ilvara → Shoor",
              "Shoor es su favorito actual. Lo protege incluso en medio de la locura."
            ],
            [
              "Asha ↔ Jorlan",
              "No son aliados. Ambos vigilan el mismo momento, pero actúan por separado."
            ],
            [
              "Jorlan ↔ PJ",
              "Es la segunda vez que los ayuda. Esto abre la puerta a que se una al grupo."
            ],
            [
              "Azotamente ↔ Orcus",
              "El azotamente prepara el portal y se retira. Es un agente, no un aliado de los PJ ni de los drow."
            ],
            [
              "Nomi ↔ Portal",
              "Solo ella o un PJ con Arcanos puede activar y cerrar el portal."
            ],
            [
              "Eldeth ↔ Nomi",
              "Tras la huida, viajan juntas hacia Gauntlgrym con los gnomos restantes."
            ]
          ]
        }
      ]
    },
    {
      "id": "capitulo-07-portal",
      "title": "La cámara del portal",
      "description": "Descripción del escenario, mecánica del portal y control del tiempo durante el combate.",
      "blocks": [
        {
          "type": "locations",
          "items": [
            {
              "number": "1",
              "name": "Cueva de acceso",
              "hint": "Entrada de Ilvara",
              "description": "Cueva que lleva a la cámara del portal. Los drow llegan por aquí, esperan que el grupo entre y los atacan por la espalda. Ilvara entra de frente por este pasaje cuando el portal comienza a calentarse."
            },
            {
              "number": "2",
              "name": "Cámara del portal",
              "hint": "40 × 60 pies · techo de 40 pies",
              "description": "Cueva abovedada de 40 por 60 pies con techo a 40 pies de altura. Aparte de la piedra del portal, casi no hay nada. Esta falta de cobertura deja a los gnomos expuestos al insecto plaga y facilita el avance de los drow."
            },
            {
              "number": "3",
              "name": "Piedra del portal",
              "hint": "Arcanos · calentamiento",
              "description": "Hace tiempo que no se usa, pero funciona. Nomi o cualquier PJ con Arcanos puede activarla. Tras la activación, necesita tiempo para calentarse y abrir una conexión con un lugar de la superficie elegido por el DM."
            },
            {
              "number": "4",
              "name": "Esquina del azotamente",
              "hint": "Aparición súbita",
              "description": "Lugar de la cámara donde el azotamente se teletransporta cuando Ilvara está cerca de perder. En la ronda siguiente abre una gran puerta en la pared."
            },
            {
              "number": "5",
              "name": "Pared de la puerta de Orcus",
              "hint": "Puerta demoníaca",
              "description": "Pared de la cámara donde se abre el portal de Orcus. De allí sale Orcus y detrás de él decenas de no-muertos listos para avanzar."
            }
          ]
        },
        {
          "type": "table",
          "title": "Mecánica del portal",
          "headers": [
            "Aspecto",
            "Detalle",
            "Nota para el DM"
          ],
          "rows": [
            [
              "Activación",
              "Nomi o un PJ con competencia en Arcanos",
              "Si Nomi cae antes, un PJ debe asumir la tarea."
            ],
            [
              "Calentamiento",
              "Se abre tras 1 o 2 minutos al azar",
              "La fuente permite ajustar el tiempo según los eventos del combate."
            ],
            [
              "Apertura sugerida",
              "2 o 3 rondas después de la llegada de Orcus",
              "Sugerencia del autor. Resolvé la contradicción con tiempo a favor de la tensión (ver recuadro)."
            ],
            [
              "Destino",
              "Un lugar de la superficie, a elección del DM",
              "Elegí un punto seguro y con salida clara."
            ],
            [
              "Cierre",
              "Quien cruza último lo cierra",
              "Debe ser Nomi o un PJ con Arcanos. Evita que Orcus y sus no-muertos pasen."
            ],
            [
              "PJ caídos",
              "Pueden ser cargados a través del portal",
              "Un aliado puede arrastrar o cargar a un PJ inconsciente."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Idea propia: resolver el tiempo del portal",
          "text": "Un minuto equivale a diez rondas, así que 1 o 2 minutos de calentamiento no coinciden con la sugerencia de que el portal se abra 2 o 3 rondas después de la llegada de Orcus. Para evitar la contradicción, tomá el tiempo como un reloj secreto que vos controlás: el portal ya lleva calentándose mientras ocurre el combate contra Ilvara y está listo para abrirse justo cuando haga falta. Contá en voz alta solo las rondas de Orcus, no el tiempo total."
        },
        {
          "type": "timeline",
          "title": "Línea de tiempo del clímax",
          "items": [
            [
              "Activación",
              "Nomi (o un PJ) activa la piedra. El portal empieza a calentarse y emite un zumbido y luz creciente."
            ],
            [
              "Emboscada",
              "Ilvara entra de frente con su fuerza. Los PJ pueden tener una conversación final con ella."
            ],
            [
              "Ronda 1",
              "Ilvara lanza insecto plaga. Asha lanza espíritus guardianes. Los drow disparan desde atrás."
            ],
            [
              "Rondas intermedias",
              "Combate contra los drow, posibles traiciones de Asha o Jorlan, invocación del yochlol si la lucha se complica."
            ],
            [
              "Ilvara casi cae",
              "El azotamente aparece en una esquina. Nadie tiene tiempo de reaccionar esta ronda."
            ],
            [
              "Ronda siguiente",
              "El azotamente abre una gran puerta en la pared. Orcus entra y detrás de él los no-muertos."
            ],
            [
              "Orcus, ronda 1",
              "Orcus actúa, los no-muertos apoyan. Los PJ deben decidir si resisten o se preparan para cruzar."
            ],
            [
              "Orcus, ronda 2",
              "Aumentá la presión. Los PNJ que no van a la superficie huyen."
            ],
            [
              "Orcus, ronda 3",
              "El portal se abre. Todos deben cruzar; Nomi (o un PJ con Arcanos) cruza último y lo cierra."
            ]
          ]
        },
        {
          "type": "checklist",
          "title": "Control durante la escena",
          "items": [
            "¿Quién activó el portal y sigue cerca de la piedra?",
            "¿Cuántas rondas pasaron desde la activación (reloj secreto)?",
            "¿Ilvara está viva y a cuántos PG del límite?",
            "¿Asha o Jorlan ya traicionaron a Ilvara?",
            "¿Se invocó el yochlol?",
            "¿Cuántos gnomos de la escolta siguen en pie?",
            "¿Ya apareció el azotamente? ¿Se abrió la puerta de Orcus?",
            "¿Qué PNJ ya huyeron al Underdark?",
            "¿Hay PJ caídos que necesiten ser cargados?",
            "¿Nomi o un PJ con Arcanos está en posición de cruzar último?"
          ]
        }
      ]
    },
    {
      "id": "capitulo-07-ilvara",
      "title": "Combate contra Ilvara y su fuerza de ataque",
      "description": "Tácticas, traiciones y recordatorios de reglas para dirigir la primera parte del enfrentamiento.",
      "blocks": [
        {
          "type": "prose",
          "title": "Composición de las fuerzas",
          "text": "La fuerza de ataque de Ilvara está formada por ella misma, Shoor Vandree y Jorlan Duskryn (guerreros de élite; Jorlan ataca con desventaja), Asha Vandree (sacerdotisa), seis drow y dos arañas gigantes. Los drow adivinaron que el grupo se dirigiría a este portal, los dejaron llegar y atacan por detrás cuando la piedra comienza a calentarse. Del lado de los PJ combaten ellos mismos, los gnomos de la escolta y los PNJ que queden con vida."
        },
        {
          "type": "prose",
          "title": "La conversación final",
          "text": "Antes de que empiece el combate, permití una última conversación con Ilvara, por razones cinematográficas. Ella se muestra obsesionada y fuera de sí. Si un PJ pregunta por qué los persigue después de tanto tiempo, que su respuesta sea incoherente o desproporcionada. Es una buena ocasión para mostrar a Asha y Jorlan observando en silencio. No prolongues la charla más allá de unos minutos de mesa."
        },
        {
          "type": "table",
          "title": "Tácticas por combatiente",
          "headers": [
            "Combatiente",
            "Táctica sugerida",
            "Detalles"
          ],
          "rows": [
            [
              "Ilvara",
              "Primer turno: insecto plaga sobre la mayor cantidad de enemigos posible",
              "Es un conjuro destructivo; algunos gnomos pueden morir rápido. Si las cosas se complican, intenta invocar al yochlol."
            ],
            [
              "Asha",
              "Primer turno: espíritus guardianes",
              "Intenta impedir que la gente escape del área del insecto plaga."
            ],
            [
              "Seis drow",
              "Fuego de cobertura desde atrás",
              "Avanzan a proteger a Ilvara si es atacada."
            ],
            [
              "Shoor y Jorlan",
              "Atacan a quien tengan cerca",
              "Jorlan ataca con desventaja. Cualquiera de los dos puede decidir traicionar."
            ],
            [
              "Dos arañas gigantes",
              "Atacan a quien alcancen",
              "Usan sus telarañas para inmovilizar a quienes intentan huir."
            ],
            [
              "Ilvara frente a un muro",
              "Si los PJ aíslan a Ilvara con un conjuro de muro, ella lanza levitar",
              "Así consigue línea de visión hacia los objetivos al otro lado."
            ]
          ]
        },
        {
          "type": "list",
          "title": "Recordatorios de reglas (idea propia)",
          "items": [
            "Insecto plaga: conjuro de nivel 5, esfera de 20 pies, requiere concentración. Terreno difícil y visibilidad reducida en el área; salvación de Constitución con daño perforante al entrar o empezar el turno allí. Un PJ o PNJ con concentración rota la disipa.",
            "Espíritus guardianes: conjuro de nivel 3, radio de 15 pies, requiere concentración. Reduce a la mitad la velocidad en el área y causa daño con una salvación de Sabiduría.",
            "Levitar: permite a Ilvara elevarse para tener línea de visión sobre un muro. Si su concentración se rompe, desciende.",
            "Sensibilidad a la luz solar: los drow sufren desventaja en ataques y pruebas de Percepción basadas en la vista al estar bajo luz solar. Importa si cruzan a la superficie de día.",
            "Gnomos de la escolta: valen como aliados fáciles de matar. No los hagas invulnerables, pero tampoco los uses para el castigo gratuito."
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Las traiciones de Asha y Jorlan",
          "text": "En cualquier momento del combate, Asha, Jorlan o ambos pueden dar el golpe y traicionar a Ilvara. Si uno de ellos lo hace, Ilvara lo toma como un asunto personal y olvida a los PJ para centrarse en el traidor. Elegí el momento más dramático: cuando los PJ están a punto de perder, o cuando Ilvara está a punto de caer. Si los PJ ya han tenido buenos tratos con Jorlan, su traición es más probable. Asha prefiere esperar a que Ilvara esté débil."
        },
        {
          "type": "prose",
          "title": "Alternativas del grupo",
          "text": "Si los PJ eliminan rápido a Ilvara, el azotamente aparece antes y la tensión pasa a Orcus. Si no consiguen avanzar, usá el yochlol o una traición para compensar. Si los jugadores se centran en proteger a los gnomos, premialo permitiendo que más de ellos sobrevivan hasta el portal. Si ignoran a los drow y corren hacia la piedra, el combate se vuelve una carrera: los drow disparan, el portal aún no se abre y Orcus aparece más tarde. En todos los casos, mantené el límite de 2 o 3 rondas con Orcus."
        }
      ]
    },
    {
      "id": "capitulo-07-orcus",
      "title": "La irrupción de Orcus",
      "description": "Cómo dirigir el encuentro imposible de ganar, los objetivos de Orcus y las reacciones de los demás.",
      "blocks": [
        {
          "type": "prose",
          "title": "Cómo se dispara la escena",
          "text": "El momento llega cuando Ilvara está cerca de perder. En una esquina de la cámara aparece un azotamente de la nada: se teletransportó allí para abrir una puerta para Orcus y su compañía. Los PJ y los drow estarán demasiado concentrados en pelear como para actuar contra él en esta ronda. A la ronda siguiente, el azotamente abre una gran puerta en la pared de la cámara. Orcus sale por ella, detrás de él hay decenas de no-muertos listos para avanzar."
        },
        {
          "type": "callout",
          "title": "Idea propia: el efecto en la mesa",
          "text": "El cambio de tono debe sentirse como un golpe. Describí la temperatura bajando, el olor a tumba, el silencio de los no-muertos y la sombra de Orcus llenando la pared. No hables con el tono del combate anterior: pasá a un ritmo más lento, con frases cortas, y luego acelerá con las tiradas de iniciativa."
        },
        {
          "type": "prose",
          "title": "Reglas del encuentro",
          "text": "Es un encuentro mortal y desconcertante que debe durar 2 o 3 rondas. Turno tras turno, la tensión aumenta a medida que se acerca el turno de Orcus. Orcus usa su varita y sus conjuros desde que llega. Lo protegen no-muertos de bajo nivel, como esqueletos y zombis. Elegí al azar sus objetivos entre todos los presentes (PJ y PNJ) para no abrumar al grupo. Debe haber muchos blancos alrededor. El grupo solo necesita resistir 2 rondas y usar la tercera para cruzar el portal."
        },
        {
          "type": "timeline",
          "title": "Ritmo de las rondas de Orcus",
          "items": [
            [
              "Ronda 0 · Aparición",
              "El azotamente abre la puerta y Orcus sale. Describí la escena, no ataques todavía a menos que quieras acelerar."
            ],
            [
              "Ronda 1",
              "Orcus ataca a un objetivo al azar con la varita o un conjuro. Los esqueletos y zombis se despliegan. Los PNJ no destinados a la superficie empiezan a huir."
            ],
            [
              "Ronda 2",
              "Más no-muertos entran. Orcus vuelve a atacar. Los PJ ven que el portal brilla con más intensidad."
            ],
            [
              "Ronda 3",
              "El portal se abre. Todos cruzan; quien cierra el portal lo hace al final."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Reacciones de los demás",
          "text": "Cuando llega Orcus, cualquier PNJ que no deba ir a la superficie huye de regreso al Underdark. Eso incluye a Stool, que atraviesa un parche de hongos de la pared, y a Glabbagool, que puede deslizarse lejos. Ilvara y su grupo reconocen a Orcus y pueden hacer una tregua temporal con los PJ para combatirlo mientras el portal se abre. Esa tregua es oportunista y se rompe en cuanto cruzan."
        },
        {
          "type": "table",
          "title": "Si el grupo se aparta del plan",
          "headers": [
            "Si los jugadores…",
            "Qué sucede (opciones del DM)",
            "Idea propia"
          ],
          "rows": [
            [
              "Intentan luchar contra Orcus",
              "Sus golpes apenas lo molestan; los no-muertos siguen entrando.",
              "Recordales que sobrevivir es la victoria y que el portal está por abrirse."
            ],
            [
              "Atacan al azotamente",
              "Se teletransporta tras abrir la puerta, así que no puede ser retenido.",
              "Si lo hieren, que huya con un gesto de desprecio."
            ],
            [
              "Cruzan antes de tiempo",
              "El portal aún no está abierto: no hay escape posible hasta la ronda 3.",
              "Si se resisten, ofrecé una acción de combate o de movimiento para reposicionarse junto a la piedra."
            ],
            [
              "Nomi muere",
              "Un PJ con Arcanos debe cerrar el portal al cruzar.",
              "Si nadie tiene Arcanos, considerá que el portal se cierra solo al perder energía en cuanto pasa la última criatura."
            ],
            [
              "Un PJ cae inconsciente",
              "Otro puede cargarlo y cruzarlo con él.",
              "Contá el movimiento y la acción necesarios."
            ],
            [
              "Rechazan la tregua con los drow",
              "Ilvara y su gente se defienden de ambos bandos.",
              "Genera caos útil si los jugadores quieren aprovecharlo."
            ],
            [
              "Se quedan atrás para pelear",
              "Orcus los supera. Podés tratarlo como muerte de personaje o como captura.",
              "Preferí advertir antes con claridad y dar oportunidad de cambiar de decisión."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Un PJ puede morir",
          "text": "Es un encuentro letal. Un PJ puede caer con facilidad y quizá deba ser cargado a través del portal. Anunciá con claridad que la situación es desesperada y que el objetivo es escapar. No fuerces muertes, pero tampoco desactives el peligro: la escena depende de que se sienta real."
        }
      ]
    },
    {
      "id": "capitulo-07-superficie",
      "title": "La salida a la superficie",
      "description": "Qué ocurre al cruzar, el destino de los PNJ y el inicio de la pausa de campaña.",
      "blocks": [
        {
          "type": "prose",
          "title": "Al otro lado",
          "text": "Tras salir del Underdark y terminar la pelea con los drow que hayan cruzado, los PJ por fin están en la superficie. Han estado cerca de dos o más demonios lord y son las personas mejor informadas del mundo sobre los problemas del Underdark. Describí el cambio sensorial: el aire, la luz, el sonido del viento, la ausencia de piedra encima. Es un cierre emocional importante."
        },
        {
          "type": "prose",
          "title": "Drow que cruzan",
          "text": "Si algún drow viaja con el grupo, se vuelve agresivo una vez en la superficie. Si es de día, la luz solar probablemente le hace perder la pelea. La única excepción es Jorlan, que se pone del lado del grupo. Tras el combate, Jorlan puede unirse a ellos: no será bienvenido de nuevo entre los drow y esta es la segunda vez que los ayuda."
        },
        {
          "type": "table",
          "title": "Destino de los PNJ",
          "headers": [
            "PNJ",
            "Qué sucede",
            "Continuidad"
          ],
          "rows": [
            [
              "Eldeth Feldrun",
              "Se une a Nomi Pathshutter y los gnomos restantes y parte hacia Gauntlgrym para advertir a su gente.",
              "Reaparece en Gauntlgrym."
            ],
            [
              "Nomi Pathshutter",
              "Viaja con Eldeth y los gnomos hacia Gauntlgrym; los gnomos necesitan regresar a casa.",
              "Todos llegan a sus destinos eventualmente."
            ],
            [
              "Jorlan Duskryn",
              "Se pone de parte del grupo y puede unirse a ellos.",
              "Es el único drow que no se vuelve hostil."
            ],
            [
              "Ilvara, Asha, Shoor y otros drow",
              "Si cruzan, se vuelven agresivos. La luz solar los perjudica.",
              "Se resuelven en la superficie."
            ],
            [
              "Stool y Glabbagool",
              "Huyen al Underdark al aparecer Orcus.",
              "Regresan a sus lugares de origen."
            ],
            [
              "Derendil",
              "Si sigue con el grupo, es oportunidad para el trasfondo alternativo del autor.",
              "Opcional."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "El trasfondo alternativo de Derendil",
          "text": "Si Derendil sigue con el grupo, el autor de la guía ofrece una versión alternativa de su historia como posible desarrollo, si te resulta aceptable. Usala solo si tu mesa lo desea. No presentes esa versión como canon del módulo."
        },
        {
          "type": "prose",
          "title": "La pausa de varios meses",
          "text": "Este es el punto medio de Out of the Abyss. A partir de aquí hay una pausa de varios meses durante la cual los personajes tienen libertad para dedicarse a asuntos propios: visitar familia, amigos y facciones, y advertir al mundo de la superficie sobre la amenaza demoníaca. Unas cuantas aventuras secundarias permiten que lleguen a nivel 8, listos para su audiencia con el rey Bruenor en Gauntlgrym."
        },
        {
          "type": "list",
          "title": "Ganchos para la pausa (idea propia)",
          "items": [
            "Cada jugador describe adónde va y qué hace durante los primeros meses.",
            "Las facciones del grupo piden informes: qué vieron, qué demonios conocieron, qué pruebas traen.",
            "Los PJ pueden ser tomados por exagerados o locos: algunos de la superficie no creen en demonios lord en el Underdark.",
            "Aventuras secundarias cortas para alcanzar nivel 8 sin retrasar demasiado la campaña.",
            "Si Jorlan se une, decidí cómo lo recibe la superficie y cómo se adapta a la luz."
          ]
        },
        {
          "type": "callout",
          "title": "Cierre del capítulo",
          "text": "Terminá con una imagen de contraste: el grupo, herido y agotado, mirando el cielo mientras el portal se cierra detrás. Que el último detalle sea el silencio posterior al zumbido del portal y la certeza de que lo que vieron no ha terminado."
        }
      ]
    },
    {
      "id": "capitulo-07-red",
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
              "Ilvara, Shoor, Jorlan y Asha",
              "Capítulo 1 · Velkynvelve",
              "Si sobrevivieron, murieron, traicionaron o cruzaron al portal. Si Jorlan se unió al grupo."
            ],
            [
              "Locura del Underdark",
              "Toda la campaña",
              "Cómo se manifestó la obsesión de Ilvara y qué sospecha el grupo sobre su origen."
            ],
            [
              "Orcus y los azotamentes",
              "Capítulo 11 · Gravenhollow",
              "Qué vieron del azotamente, de Orcus y de los no-muertos."
            ],
            [
              "Portal usado",
              "Capítulo 7 y siguientes",
              "A qué lugar de la superficie llevó y si quedó cerrado correctamente."
            ],
            [
              "Eldeth y Nomi",
              "Gauntlgrym",
              "Si viajaron juntas, quién sobrevivió y qué noticias llevaron."
            ],
            [
              "Dorbo Diggermatock y Blingdenstone",
              "Capítulo 6 · Blingdenstone",
              "Qué resultado tuvo la ayuda del grupo y qué recompensas recibieron."
            ],
            [
              "Stool y Glabbagool",
              "Capítulos 4, 5 y posteriores",
              "Si se despidieron y adónde fueron."
            ],
            [
              "Derendil",
              "Trasfondo alternativo del autor",
              "Si se usó la versión alternativa y qué consecuencias tuvo."
            ],
            [
              "Audiencia con Bruenor",
              "Gauntlgrym",
              "Qué nivel tiene el grupo y qué información lleva consigo."
            ]
          ]
        },
        {
          "type": "relationships",
          "items": [
            [
              "Ilvara ↔ PJ",
              "Persecución que comenzó en el capítulo 1 y se cierra aquí."
            ],
            [
              "Jorlan ↔ PJ",
              "Segunda ayuda tras la fuga. Puede convertirse en compañero."
            ],
            [
              "Orcus ↔ Underdark",
              "Su interés en portales estratégicos conecta esta escena con el capítulo 11."
            ],
            [
              "Azotamente ↔ Orcus",
              "Conecta con la comunidad de azotamentes del capítulo 11."
            ],
            [
              "Eldeth ↔ Gauntlgrym",
              "Su destino conduce al enano rey Bruenor y al siguiente tramo de la campaña."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "title": "Registro tras la sesión",
          "text": "Anotá quién sobrevivió, quién cruzó el portal, qué destino de la superficie eligió el grupo, si Jorlan se unió, qué piensan los PJ de Orcus y qué planean hacer durante los meses de pausa. Así podrás conectar las consecuencias con los capítulos siguientes sin inventar enlaces que el material no confirma."
        }
      ]
    }
  ]
});
