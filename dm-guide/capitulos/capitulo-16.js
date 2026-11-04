/* Contenido editable del capítulo 16. */
window.DND_CHAPTERS = window.DND_CHAPTERS || [];
window.DND_CHAPTERS.push({
  "id": "capitulo-16",
  "number": 16,
  "title": "La Ciudad de las Arañas (reordenada como capítulo 16)",
  "summary": "Mientras Vizeran forja el Corazón Oscuro, los PJ deben infiltrarse en Menzoberranzan, entrar a Sorcere, llegar al Santuario Interior de Gromph Baenre, conseguir su grimorio, decidir dónde dejar el Corazón Oscuro y escapar destruyendo el foco anti-teletransportación de la ciudad. Es un capítulo de sandbox puro: cinco posibles aliados, múltiples rutas de acceso y un combate final que debería agotar los recursos del grupo antes del clímax de la campaña.",
  "tags": [
    "Menzoberranzan",
    "Sorcere",
    "Gromph Baenre",
    "Corazón Oscuro",
    "Infiltración",
    "Reordenamiento de capítulos"
  ],
  "quick": [
    [
      "Objetivo",
      "Robar el grimorio de Gromph, decidir dónde dejar el Corazón Oscuro y escapar de la ciudad"
    ],
    [
      "Tono",
      "Infiltración urbana de alto riesgo, con aliados ambiguos y una ciudad entera en contra"
    ],
    [
      "Amenaza visible",
      "Patrullas drow, trampas en Sorcere (elemental de fuego, gólem de piedra) y guardias del foco anti-teletransportación"
    ],
    [
      "Amenaza latente",
      "Matron Mother Quenthel Baenre, que podría usar a los PJ como chivos expiatorios de la incursión demoníaca"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-16-panorama",
      "title": "Panorama del capítulo y nota sobre el orden",
      "description": "Qué contenido ocupa este lugar en la guía y por qué, objetivo principal y objetivo extra sugerido.",
      "blocks": [
        {
          "type": "callout",
          "tone": "warning",
          "title": "Recordatorio sobre el reordenamiento de capítulos",
          "text": "En el manual, el capítulo 16 es La Boda Fétida, que en esta guía ya se cubrió en el lugar del capítulo 15 (ver esa sección para la explicación completa del reordenamiento). El contenido que ocupa este lugar como capítulo 16 en esta guía es, en realidad, La Ciudad de las Arañas (capítulo 15 del libro original): la infiltración en Menzoberranzan. Quien prefiera seguir el orden original del manual puede hacerlo sin problema; en ese caso, esta sección correspondería jugarse antes que la Boda Fétida."
        },
        {
          "type": "prose",
          "title": "Contexto: el tiempo de espera de Vizeran",
          "text": "Después de conseguir todos los ingredientes y componentes para construir el Corazón Oscuro, Vizeran necesita varios días para forjarlo. Es durante este tiempo de espera que los PJ deben decidir cómo van a infiltrarse en Menzoberranzan."
        },
        {
          "type": "prose",
          "title": "Objetivo principal",
          "text": "La misión es infiltrarse en la ciudad, entrar a Sorcere (la torre de los lanzadores de conjuros), acceder a la oficina y el Santuario Interior de Gromph, obtener el grimorio de Gromph, dejar el Corazón Oscuro y, finalmente, salir."
        },
        {
          "type": "callout",
          "title": "Objetivo extra (sugerencia de esta guía)",
          "tone": "info",
          "text": "La ciudad está protegida contra magia de teletransportación desde que apareció Demogorgon. Después de recuperar el grimorio, los PJ tendrán que encontrar el foco de esa magia anti-teletransportación, destruirlo y recién entonces teletransportarse para escapar (esto se agrega porque en el capítulo 9 de esta guía se sugirió permitir la magia de teletransportación durante la segunda mitad de la aventura)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "La salvedad de 'dejar el Corazón Oscuro'",
          "text": "Los PJ podrían decidir colocar el Corazón Oscuro en un lugar distinto, cambiando por completo el planteamiento del próximo capítulo. Si durante la primera mitad de la aventura llegaron a odiar a los drow (por Ilvara y la persecución), podrían aprovechar esta oportunidad para destruir Menzoberranzan. En cambio, un grupo de alineamiento bueno probablemente elija un lugar desolado para hacerlo. El resto de este capítulo asume que los PJ van a dejar el Corazón Oscuro en Menzoberranzan; si tu mesa decide lo contrario, ajustá en consecuencia la preparación del capítulo final."
        },
        {
          "type": "callout",
          "tone": "info",
          "title": "Advertencia: capítulo muy sandbox",
          "text": "Este capítulo presenta muchísimas opciones distintas sobre cómo abordar la ciudad y cómo funcionan las cosas por dentro. Las cosas pueden desarrollarse de muchísimas maneras diferentes. Lo que sigue son los caminos de acción más obvios, no una secuencia fija."
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Decidí si Grin Ousstyl va a llevar a los PJ por un pasaje secreto o si van a entrar por tierra enfrentando patrullas drow.",
            "Elegí de antemano cuáles de los cinco posibles aliados vas a activar en esta partida; no hace falta usarlos todos.",
            "Preparás el momento en que Grin confiesa que el Corazón Oscuro puede colocarse en cualquier lugar, y cómo reacciona tu grupo en particular.",
            "Tené lista la emboscada drow en Tier Breche por si Grin escapa y delata a los PJ.",
            "Repasá el mapa de la torre Sorcere y las trampas de la oficina de Gromph (elemental de fuego, gólem de piedra, Encarcelamiento).",
            "Preparás el encuentro con la yochlol en el Santuario Interior.",
            "Planificá el combate final por el foco anti-teletransportación en el laboratorio arcano, dos pisos más abajo; decidí cuántas sacerdotisas de Lolth según el nivel de optimización del grupo."
          ]
        }
      ]
    },
    {
      "id": "capitulo-16-acceso",
      "title": "Entrar a la ciudad",
      "description": "Las dos vías de acceso y el disfraz de esclavista.",
      "blocks": [
        {
          "type": "table",
          "title": "Dos formas de entrar a Menzoberranzan",
          "headers": [
            "Vía",
            "Qué implica"
          ],
          "rows": [
            [
              "Pasaje secreto de Grin Ousstyl",
              "Grin puede guiarlos por un pasaje secreto que los lleva dentro de la ciudad. Es la opción que los PJ probablemente elijan."
            ],
            [
              "Acceso por tierra",
              "Pueden aproximarse a la ciudad por tierra, probablemente enfrentando patrullas drow en el camino."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "La vida en las calles de Menzoberranzan",
          "text": "Una vez dentro, las cosas son difíciles: hay drow por todas partes. Consideran a los humanos y a las demás razas inferiores y van a cuestionar su presencia. Sin embargo, hay que recordar que no todos los drow son guerreros. Su cultura es militarista, llena de odio y desconfianza, pero un vendedor de carne, un mensajero o un bardo difícilmente se desvíen de su camino para atacar a un grupo de aventureros. Eso sí, lo van a reportar, lo que significa que no todas las calles terminan en pelea."
        },
        {
          "type": "prose",
          "title": "La coartada de esclavista",
          "text": "A menos que los PJ tengan formas de pasar sin ser detectados, Grin Ousstyl puede ofrecer una idea: puede hacerse pasar por un traficante de esclavos, transportando a un grupo de esclavos de una parte de la ciudad a otra. No es una coartada muy sólida, pero es algo con lo que trabajar. Un PJ puede hacer esta suplantación si tiene acceso a hechizos como Disfrazarse a Sí Mismo o Alterarse a Sí Mismo."
        },
        {
          "type": "prose",
          "title": "Moverse por los distritos",
          "text": "Una vez adentro, los PJ pueden empezar a moverse por la ciudad. Menzoberranzan está dividida en distintas secciones, cada una descrita en el manual. Cada sección tiene su propia tabla de encuentros; son encuentros bastante agradables y, los que pueden terminar en combate, no son especialmente difíciles. Eso está bien, porque todo este capítulo puede resolverse en un solo día de juego (en el mundo del juego), ya que los PJ probablemente no tengan oportunidad de hacer un descanso largo. Estas pequeñas peleas están ahí para empezar a drenar los recursos del grupo."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Llegar a Sorcere sin ayuda es casi imposible",
          "text": "Aquí es donde entran en juego los viejos aliados y los aliados de Vizeran."
        }
      ]
    },
    {
      "id": "capitulo-16-aliados",
      "title": "Los cinco posibles aliados",
      "description": "No es necesario activarlos a todos; el DM puede elegir cuáles usar.",
      "blocks": [
        {
          "type": "characters",
          "items": [
            {
              "name": "Matron Mother Quenthel Baenre",
              "role": "Drow · gobernante de Menzoberranzan, Elegida de Lolth",
              "status": "Poderosísima y ambigua",
              "description": "Hermana de Gromph, a cargo de la ciudad y, básicamente, el ser más poderoso del lugar. Respetada y temida por todos. Está rodeada de guardaespaldas y guerreros capaces que en realidad no necesita, porque es una Elegida de Lolth y puede lanzar conjuros de clériga de nivel 9 A VOLUNTAD.",
              "play": "Tiene espías por todas partes; en cuanto los PJ se dejen ver, enviará un pequeño ejército de 30 drow para escoltarlos a una reunión privada. Los PJ probablemente le tengan mucho miedo, ya que tanto Grin como Vizeran pueden advertirles que la eviten. En realidad intentará ayudarlos, pero solo porque quiere limpiar el nombre de la Casa Baenre. Su objetivo real es dejarlos entrar y después incriminarlos como culpables de la incursión demoníaca.",
              "future": "Si los PJ aceptan su ayuda, ella les garantiza la entrada y nadie los detendrá; tienen acceso directo a la oficina de Gromph. Al salir de ahí, la historia cambia: los drow de Sorcere intentarán arrestarlos por órdenes de Quenthel, y los PJ tendrán que pelear para escapar."
            },
            {
              "name": "Jarlaxle (Bregan D'aerthe)",
              "role": "Drow · líder de la compañía mercenaria Bregan D'aerthe",
              "status": "Aliado pragmático con límites claros",
              "description": "Bregan D'aerthe es una compañía mercenaria asentada en Menzoberranzan, con mucho poder e influencia; su líder es conocido como Jarlaxle. Es el otro hermano de Gromph Baenre y, actualmente, la única persona que sabe dónde está (en la ciudad de Luskan), aunque no va a revelar esa información (ni su relación con Gromph y Quenthel, ni la ubicación de Gromph).",
              "play": "En cuanto los PJ se dejen ver, enviará a un drow para guiarlos hasta las ruinas de la Casa Do'Urden, donde tienen su cuartel general. Jarlaxle quiere ayudar a destruir a los señores demonio, pero si los PJ revelan su intención de colocar el Corazón Oscuro dentro de Menzoberranzan, los amenazará con oponerse y les sugerirá elegir otro lugar.",
              "future": "Cuando llega el momento de acceder a Sorcere, Jarlaxle puede arreglar una reunión con un miembro del consejo de arañas."
            },
            {
              "name": "Consejo de Arañas (aliados de Vizeran)",
              "role": "Facción drow · aliados secretos de Vizeran DeVir",
              "status": "Proveedores de recursos clave",
              "description": "Algunos miembros del consejo de arañas son aliados de Vizeran. Él les ha prometido derrocar el control de las sacerdotisas (recordá que la cultura drow es matriarcal). Saben que los aliados de Vizeran están en la ciudad, pero la mejor manera de contactar con este grupo de poder es a través de Jarlaxle.",
              "play": "Pueden proporcionar pergaminos de invisibilidad superior y la contraseña para desactivar las defensas de la torre. También pueden ofrecer escolta (haciéndose pasar por traficantes de esclavos, o por lanzadores de conjuros trayendo sujetos de hechizo o de laboratorio)."
            },
            {
              "name": "Zhora Hallen y Hanne Hallen",
              "role": "Drow · madre e hija, cazadoras de huevos de Las Serpenturas",
              "status": "Aliadas condicionadas por su relación con los PJ",
              "description": "Si los PJ terminaron en buenos términos con ellas en Las Serpenturas (reuniéndolas), pueden volver a ayudar, siempre y cuando no se enteren de que el objetivo real es invocar a los señores demonio dentro de la ciudad.",
              "play": "En cualquier momento en que los aventureros se metan en una pelea en las calles, una de ellas puede verlos e intervenir para ayudar, disparando desde las sombras. También pueden ofrecer una casa segura y una presentación con un hombre poderoso: Jarlaxle."
            },
            {
              "name": "Khelessa Draga",
              "role": "Humana · espía de la Alianza de Lores haciéndose pasar por drow",
              "status": "Conexión sugerida por esta guía (no está en el libro)",
              "description": "Es una espía de la Alianza de Lores que se hace pasar por drow. Llevaba tanto tiempo desaparecida que Lord Eravien Haund les pidió a los PJ que intentaran encontrarla, en el capítulo 8.",
              "play": "El libro no ofrece una forma de incorporarla a esta segunda parte de la aventura. La sugerencia de esta guía es agregarla como agente de Bregan D'aerthe: puede revelar su verdadera identidad en privado e intentar salir de la ciudad junto con los PJ.",
              "future": "Esta conexión depende del desarrollo del capítulo 8 en esta guía; tratala como pendiente de confirmar hasta que ese capítulo se escriba."
            }
          ]
        }
      ]
    },
    {
      "id": "capitulo-16-tier-breche",
      "title": "La confesión de Grin y la emboscada en Tier Breche",
      "description": "El punto de inflexión antes de llegar a la torre.",
      "blocks": [
        {
          "type": "prose",
          "title": "La confesión",
          "text": "Antes de llegar propiamente a la torre, Grin Ousstyl se quiebra y confiesa que el Corazón Oscuro no tiene que colocarse necesariamente en la ciudad: puede usarse en cualquier lugar."
        },
        {
          "type": "callout",
          "title": "Reacción impredecible del grupo",
          "text": "Cómo reacciona tu grupo ante esta confesión es realmente difícil de predecir; depende enteramente de los PJ y de lo que sientan por Menzoberranzan."
        },
        {
          "type": "prose",
          "title": "Si Grin escapa",
          "text": "Si los PJ no quieren cambiar de planes y Grin logra escapar, le contará todo a una sacerdotisa, y un convoy de drow interceptará a los aventureros en Tier Breche, antes de llegar a Sorcere. Esto puede ser un combate duro."
        },
        {
          "type": "callout",
          "title": "Posibles refuerzos para los PJ",
          "text": "Los aventureros podrían contar con la ayuda de las fuerzas de Bregan D'aerthe, de Zhora y Hanne, de Khelessa o de un mago del consejo de arañas, según qué aliados se hayan activado antes. Incluso se puede plantear que dos pequeños ejércitos choquen entre sí mientras los PJ escapan hacia Sorcere."
        }
      ]
    },
    {
      "id": "capitulo-16-sorcere",
      "title": "Dentro de Sorcere: la oficina y el Santuario Interior",
      "description": "Las trampas de la oficina de Gromph y el encuentro con la yochlol.",
      "blocks": [
        {
          "type": "prose",
          "title": "Llegar al santuario",
          "text": "Dentro de la torre, llegar al santuario será sencillo (si se usa el mapa del libro, solo tienen que alcanzar la escalera principal en el segundo piso y subir hasta el quinto nivel)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Las trampas de la oficina (pág. 206)",
          "text": "Investigar la oficina tiene sus peligros, ya que hay un elemental de fuego y un gólem de piedra que se activan como trampas. También hay una trampa con un hechizo de Encarcelamiento en la pared que oculta la entrada al santuario interior. Existe la posibilidad de que un PJ sea retirado del juego directamente aquí. Si eso pasa, el diamante que encarcela a ese PJ puede ser disipado más adelante por Vizeran. La puerta lleva a un demiplano que solo contiene un laberinto."
        },
        {
          "type": "prose",
          "title": "La yochlol encadenada",
          "text": "Tras llegar al santuario interior, hay un encuentro divertido con una demonio yochlol. Es la emisaria de Lolth ante Gromph. Él la atrapó en un círculo mágico. Ella se encuentra en forma drow e intentará convencer a los PJ de liberarla; si lo hacen, los atacará."
        },
        {
          "type": "prose",
          "title": "Qué se encuentra en esta sala",
          "text": "En esta sala los PJ van a encontrar el grimorio de Gromph y el diamante que encarcela a quien haya quedado atrapado por la trampa de Encarcelamiento. Los PJ pueden colocar aquí el Corazón Oscuro, tal como lo indicó Vizeran DeVir."
        }
      ]
    },
    {
      "id": "capitulo-16-foco",
      "title": "Objetivo extra: destruir el foco anti-teletransportación",
      "description": "La salida de la torre y el combate final del capítulo (sugerencia de esta guía).",
      "blocks": [
        {
          "type": "prose",
          "title": "Salir de Sorcere no es tarea fácil",
          "text": "Salir de Sorcere no es nada fácil, ya que medio pueblo podría estar persiguiéndolos, dependiendo de cómo hayan entrado. Necesitan encontrar una forma de desactivar la magia anti-teletransportación. Para este punto, los recursos del grupo estarán bajos, pero no están solos: hay muchos aliados que pueden ayudar."
        },
        {
          "type": "callout",
          "title": "Ritmo de bajada por la torre",
          "text": "Se sugiere tener uno o dos encuentros mientras bajan por la torre en busca de la sala. Dos pisos más abajo, encontrarán el foco de esta magia en el nivel del Laboratorio Arcano. La gema debe ser destruida."
        },
        {
          "type": "prose",
          "title": "Defensores del foco",
          "text": "El foco está defendido por guerreros drow, arañas gigantes y sacerdotisas. Dependiendo de qué tan fuerte y optimizado esté el grupo, se puede plantear a 2 sacerdotisas drow de Lolth (en lugar de solo una)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "El combate de la noche",
          "text": "Este debe ser el combate de la noche. Puede ser muy duro, ya que el único objetivo es destruir la gema. Una vez destruida, los PJ pueden teletransportarse de inmediato. Si no tienen acceso a ese tipo de magia, un mago del consejo de arañas puede teletransportarlos fuera de la ciudad."
        }
      ]
    },
    {
      "id": "capitulo-16-cierre",
      "title": "Cierre del capítulo",
      "description": "Qué queda pendiente antes de la confrontación final.",
      "blocks": [
        {
          "type": "prose",
          "title": "Último paso",
          "text": "Después de esto, lo único que queda por hacer es instruir a Vizeran para que empiece el ritual y prepararse para el enfrentamiento final."
        }
      ]
    },
    {
      "id": "capitulo-16-red",
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
              "Ubicación final del Corazón Oscuro",
              "Clímax de la campaña",
              "Registrar si quedó en Menzoberranzan (por defecto de este capítulo) o en otro lugar elegido por los PJ; esto cambia por completo el planteamiento del capítulo final."
            ],
            [
              "Aliados activados dentro de la ciudad",
              "Posible reaparición en el clímax",
              "Registrar cuáles de los cinco aliados se usaron (Quenthel, Jarlaxle, consejo de arañas, Zhora/Hanne, Khelessa) y en qué términos quedaron los PJ con cada uno."
            ],
            [
              "Quenthel Baenre y el plan de incriminación",
              "Resto de la campaña",
              "Si los PJ aceptaron su ayuda, registrar si llegaron a enterarse de que ella planeaba culparlos por la incursión demoníaca."
            ],
            [
              "PJ atrapado por el Encarcelamiento",
              "Capítulo de Vizeran / clímax",
              "Si ocurrió, registrar qué PJ quedó en el diamante y recordar que Vizeran puede disiparlo más adelante."
            ],
            [
              "Grin Ousstyl",
              "Capítulo 12 (presentación) → este capítulo (traición/confesión)",
              "Registrar si escapó, si fue capturado o si se quedó del lado de los PJ tras confesar sobre el Corazón Oscuro."
            ],
            [
              "Khelessa Draga",
              "Capítulo 8 (si se desarrolla)",
              "Conexión sugerida por esta guía, pendiente de confirmar con el contenido real del capítulo 8."
            ],
            [
              "Grimorio de Gromph Baenre",
              "Capítulo 12 (Vizeran)",
              "Confirmar que los PJ lo recuperaron; es indispensable para que Vizeran pueda ejecutar el ritual del Corazón Oscuro."
            ],
            [
              "Foco anti-teletransportación destruido",
              "Resto de la campaña",
              "Registrar que ya puede usarse teletransportación en Menzoberranzan de ahí en adelante, según la sugerencia del capítulo 9."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Separación de fuentes en este capítulo",
          "text": "La existencia de Menzoberranzan, los cinco aliados (salvo la conexión de Khelessa), la torre Sorcere, sus trampas y la yochlol provienen del manual. El objetivo extra de destruir el foco anti-teletransportación, la sugerencia de incorporar a Khelessa Draga como agente de Bregan D'aerthe, y los ajustes de dificultad en el combate del Laboratorio Arcano son recomendaciones de mesa de esta guía, no reglas oficiales del libro."
        }
      ]
    }
  ]
});
