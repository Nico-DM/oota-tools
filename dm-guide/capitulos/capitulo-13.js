/* Contenido editable del capítulo 13. */
window.DND_CHAPTERS = window.DND_CHAPTERS || [];
window.DND_CHAPTERS.push({
  "id": "capitulo-13",
  "number": 13,
  "title": "Las Serpenturas (The Wormwrithings)",
  "summary": "Una vasta región del Underdark excavada por gusanos púrpura, sin mapa posible porque los túneles cambian constantemente. Aquí los PJ consiguen dos ingredientes del Corazón Oscuro: un huevo de gusano púrpura (en el vivero, disputado con un grupo de ladronas drow) y el ojo central del beholder Karazikar, en uno de los mejores —y más letales— encuentros del módulo.",
  "tags": [
    "Las Serpenturas",
    "Gusanos púrpura",
    "Karazikar",
    "Corazón Oscuro",
    "Encuentro legendario"
  ],
  "quick": [
    [
      "Objetivo",
      "Conseguir el huevo de gusano púrpura y el ojo central de un beholder"
    ],
    [
      "Tono",
      "Exploración vertical y hostil, con dos set pieces de altísima letalidad"
    ],
    [
      "Amenaza visible",
      "Gusanos púrpura, arañas gigantes, el fomorio Stronk, trogloditas, roqueros (ropers) y Karazikar"
    ],
    [
      "Amenaza latente",
      "El Motor del Laberinto, que Karazikar menciona y que conecta con la visión de Baphomet en Gravenhollow"
    ]
  ],
  "sections": [
    {
      "id": "capitulo-13-panorama",
      "title": "Panorama del capítulo",
      "description": "Qué es Las Serpenturas, por qué no tiene mapa fijo y cómo preparar la sesión.",
      "blocks": [
        {
          "type": "prose",
          "title": "Qué son Las Serpenturas",
          "text": "Las Serpenturas no son un lugar puntual, sino una región gigantesca del Underdark. Es el hogar y territorio de caza de los gusanos púrpura: una serie de túneles interconectados y perfectamente redondos, dejados por los gusanos a su paso. En su forma de vida, los gusanos nunca vuelven a viajar por sus propios túneles, prefiriendo cavar uno nuevo todo el tiempo. Por eso, es relativamente seguro transitar los túneles, ya que la probabilidad de que un gusano pase justo por ahí es muy baja."
        },
        {
          "type": "callout",
          "title": "Verticalidad",
          "text": "Es importante notar que Las Serpenturas no son un plano horizontal: los gusanos pueden viajar en cualquier dirección. Vista desde afuera, la región es una especie de esfera donde habitan los gusanos. Desde la perspectiva de los PJ, esto significa que pueden tener que recorrer túneles inclinados o incluso verticales, lo cual suma verticalidad a los combates y a las descripciones."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Por qué no hay un mapa fijo",
          "text": "Como los gusanos están constantemente volviendo a cavar los túneles, un mapa del área es completamente imposible. Los túneles aparecen y desaparecen todo el tiempo, revelando zonas desconocidas o volviéndolas a ocultar durante años."
        },
        {
          "type": "prose",
          "title": "Por qué los PJ llegan aquí primero",
          "text": "Los PJ visitan este lugar primero porque está cerca de la Torre Araj. Aquí se consiguen dos de los ingredientes del Corazón Oscuro: el huevo de gusano púrpura y el ojo de un beholder. El capítulo se divide en distintas áreas o eventos que ocurren en Las Serpenturas; mientras viajan de un lugar a otro, ocurren encuentros de yermo."
        },
        {
          "type": "callout",
          "title": "Sobre la tabla de encuentros aleatorios (pág. 167)",
          "tone": "info",
          "text": "El manual trae una tabla de encuentros aleatorios en la página 167, y asume que el DM la va a seguir usando durante el resto de la campaña. Como se sugirió antes en esta guía, es preferible que los encuentros 'aleatorios' no se tiren al azar, sino que el DM los decida al preparar la sesión. Además, la tabla solo tiene diez opciones distintas, insuficientes para sostener el resto de la campaña sin volverse repetitiva; se recomienda preparar encuentros más variados para evitar que se sienta aburrido."
        },
        {
          "type": "checklist",
          "title": "Antes de jugar",
          "items": [
            "Decidí si vas a subir el desafío de los trogloditos (usando estadísticas de veterano para los jefes) o si los vas a dejar como están, sabiendo que un grupo de nivel 10 los va a arrasar.",
            "Preparás el encuentro con los roqueros (ropers) del área 8 (pág. 170) como una amenaza seria, muy por encima de lo que sugiere su FR 5.",
            "Decidí si Hanne Hallen se cruza con los PJ antes de llegar al vivero y cómo la vas a interpretar (asustada, usando ilusiones menores).",
            "Repasá el mapa del vivero (pág. 173) y preparás mentalmente cuándo aparecen los túneles T1, T2 y T3 y cuándo llega el grupo de Zhora Hallen.",
            "Decidí cómo vas a manejar un PJ tragado por un gusano púrpura (daño necesario, tiempo límite para Resucitar antes de que el ácido lo arruine).",
            "Preparás la Fauces de Karazikar con un mapa propio (sugerencia: foso de 40 pies en vez de 100 pies, para jugarlo con miniaturas), recordando acciones de guarida y legendarias cada ronda.",
            "Decidí si le das a Karazikar resistencias legendarias, dado que probablemente sea un combate en solitario (a menos que Shedrak siga vivo)."
          ]
        }
      ]
    },
    {
      "id": "capitulo-13-trogloditas",
      "title": "1 · La guarida de los trogloditos (pág. 168)",
      "description": "Primera parada en los túneles de los gusanos.",
      "blocks": [
        {
          "type": "prose",
          "title": "Planteamiento del encuentro",
          "text": "La primera parada en los túneles de gusano es una cueva donde dos facciones de trogloditas tienen una disputa por una espada mágica. El jefe troglodita tiene la espada, junto con trogloditas leales y algo de caballería troglodita escondida en una cueva. Su antiguo mariscal de guerra está del otro lado de un arroyo con algunos aliados, además de la pareja del jefe, a quien este amenaza con matar para recuperar la espada."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Problema de nivel de desafío (valoración de esta guía)",
          "text": "Esta parte de la aventura parece pensada para la primera mitad de la campaña y luego movida a Las Serpenturas. El problema: un grupo de nivel 10 aproximadamente, con su fuerza expedicionaria, va a arrasar a los trogloditas incluso si todos atacan a la vez."
        },
        {
          "type": "table",
          "title": "Dos formas de resolverlo",
          "headers": [
            "Opción",
            "Qué implica"
          ],
          "rows": [
            [
              "Subir el desafío",
              "Usar estadísticas de veterano para los jefes y aumentar el bono de ataque y los PG del resto, si querés que sea un desafío real."
            ],
            [
              "Dejarlo como está",
              "Los PJ lo van a barrer, pero también tiene sentido narrativo encontrarse con amenazas claramente por debajo de su nivel: no todos los encuentros tienen que 'crecer' junto con ellos."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Nota de transición: el área 8",
          "text": "Antes o después de resolver el enfrentamiento entre trogloditas, los PJ podrían decidir revisar la cueva del área 8 (pág. 170), que es la guarida de unos roqueros (ropers)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Los roqueros son mucho más peligrosos de lo que indica su FR",
          "text": "Esta sí es una amenaza seria. Los roqueros son de esos monstruos cuyo Factor de Reto no refleja lo letales que son: figuran como FR 5. En el primer turno, los dos roqueros pueden agarrar a todo el grupo, inmovilizándolos y arrastrando a uno por uno para morderlo. El ataque tiene un alcance de 50 pies. Son criaturas realmente aterradoras."
        }
      ]
    },
    {
      "id": "capitulo-13-hanne",
      "title": "2 · Una voz en la oscuridad",
      "description": "Encuentro con Hanne Hallen, hija de la líder de un grupo rival de cazadores de huevos.",
      "blocks": [
        {
          "type": "prose",
          "title": "Contexto: los cazadores de huevos",
          "text": "Los PJ no son los únicos que buscan huevos de gusano púrpura. Estos huevos se venden muy caro en Menzoberranzan, solo a magos bien conectados. Hace unos días, un grupo de ladronas de huevos se dirigía al vivero de gusanos púrpura para conseguir algunos. El grupo estaba formado por Zhora Hallen (líder y guía), Hanne Hallen (hija de Zhora y aprendiz de maga) y 10 drow. El grupo fue sorprendido por un gusano que irrumpió en el túnel por el que viajaban. Hanne Hallen quedó separada del resto de la expedición drow."
        },
        {
          "type": "prose",
          "title": "Dos duelos creyéndose solos",
          "text": "Zhora Hallen cree que su hija está muerta y continuó hacia el vivero sin ella. Hanne Hallen cree que su madre y el resto murieron, así que decidió volver sola a Menzoberranzan. Está sola y asustada, arreglándoselas con los pocos hechizos que conoce."
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Hanne Hallen",
              "role": "Drow · aprendiz de maga, separada de su expedición",
              "status": "Puede unirse al grupo",
              "description": "Hija de Zhora Hallen. Cree que su madre y el resto de la expedición murieron; viaja sola, asustada, usando los pocos hechizos que conoce para sobrevivir.",
              "play": "En este encuentro usa hechizos de ilusión menor para intentar desviar a los PJ de su camino. Probablemente no lo logre y los PJ terminen encontrándola. No tiene forma de igualarlos en combate, pero intentará pelear de todas formas. Si se le ofrece un lugar en el grupo, viajará con ellos.",
              "future": "Si los PJ la tratan bien y la dejan acompañarlos, se reencontrará con su madre en el vivero de gusanos. Zhora Hallen quedará eternamente agradecida con los PJ, lo cual será importante más adelante cuando visiten Menzoberranzan: Zhora los ayudará."
            },
            {
              "name": "Zhora Hallen",
              "role": "Drow · líder y guía de la expedición de cazadoras de huevos",
              "status": "Importante en Menzoberranzan más adelante",
              "description": "Líder del grupo de ladronas de huevos; cree que su hija Hanne murió en el ataque del gusano y continuó sola hacia el vivero con el resto de su expedición.",
              "play": "Aparece en el vivero de gusanos (ver sección siguiente), donde puede reencontrarse con Hanne si los PJ la trajeron con ellos.",
              "future": "Si se reencuentra con su hija gracias a los PJ, se convierte en una aliada agradecida en Menzoberranzan."
            }
          ]
        },
        {
          "type": "callout",
          "title": "Oportunidad de roleplay",
          "text": "Este es un buen momento de interpretación: cómo tratan los PJ a una enemiga potencial, asustada y sola, puede definir si consiguen una aliada valiosa para más adelante en la ciudad drow."
        }
      ]
    },
    {
      "id": "capitulo-13-vivero",
      "title": "3 · El vivero de gusanos y los cazadores oscuros",
      "description": "El set piece central de este tramo del capítulo (pág. 172-175).",
      "blocks": [
        {
          "type": "callout",
          "tone": "success",
          "title": "Uno de los mejores encuentros del libro",
          "text": "Este encuentro requiere cuidado especial al prepararlo. Mirá el mapa de la página 173: los túneles T1, T2 y T3 no existen cuando llegan los PJ, son cavados por gusanos después de que ellos están ahí."
        },
        {
          "type": "prose",
          "title": "Llegada por derrumbe",
          "text": "Cuando los PJ llegan al área por culpa de un derrumbe, se encuentran en un callejón sin salida de cuatro cámaras. Recién a los 15 minutos, un gusano atraviesa esas cámaras, probablemente asustando muchísimo a los PJ, y cava un túnel directo hacia el vivero."
        },
        {
          "type": "prose",
          "title": "Cronología de llegadas",
          "text": "El recuadro de la página 172 especifica cuándo llegan otros gusanos y cavan los túneles número 2 y 3. Además, a los 20 minutos de que llegan los PJ, Zhora Hallen y su grupo llegan al vivero para robar dos huevos de gusano púrpura. Esta parte está explicada en la página 175 por alguna razón, pero en realidad ocurre al mismo tiempo que los PJ consiguen su propio huevo."
        },
        {
          "type": "table",
          "title": "Cómo reaccionan los drow de Zhora según la situación",
          "headers": [
            "Situación",
            "Reacción"
          ],
          "rows": [
            [
              "Hanne no está con los PJ",
              "El grupo drow es hostil, a menos que se los convenza de trabajar juntos con una prueba de Persuasión (CD 20)."
            ],
            [
              "Hanne está con los PJ y fue bien tratada",
              "Los PJ cuentan con la lealtad del grupo drow."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Objetivos distintos, mismo vivero",
          "text": "El grupo drow quiere robar dos huevos. Los PJ necesitan uno, pero podrían decidir conseguir más para venderlos. Cómo se desarrolla esta parte depende del DM y de muchos factores en la mesa."
        },
        {
          "type": "prose",
          "title": "Cómo se extraen los huevos",
          "text": "La página 173 explica cómo se pueden extraer los huevos de los racimos. Tardan 2d4 minutos en desprenderse y se rompen si caen. El miembro drow que trepa a buscar los huevos usa una red de seda de araña para sujetarlos y bajarlos lentamente hacia otro miembro drow listo para atraparlos."
        },
        {
          "type": "callout",
          "title": "Cómo lo resuelven los PJ",
          "text": "Los PJ tienen que idear su propia forma de hacer lo mismo, ya que los drow no van a ayudarlos. Podrían usar un conjuro de telaraña para atrapar el huevo o uno de levitar para hacerlo descender con seguridad. El PJ que desprende el huevo puede intentar un nudo complicado que replique la estrategia drow (prueba de Destreza, CD 14). Sea cual sea el método elegido, desprender el huevo (o los huevos) y bajarlo toma tiempo."
        },
        {
          "type": "prose",
          "title": "Complicaciones durante la extracción",
          "text": "Durante ese tiempo, unas arañas gigantes podrían atacar a los PJ, o incluso un gusano púrpura podría pasar por coincidencia. Si las arañas atacan y estalla una pelea, hay una posibilidad de que Stronk la escuche y despierte para luchar (pág. 172). Es un fomorio duro, pero si se lo reduce a la mitad de sus PG, corre hacia la cámara de eco y grita para atraer a un gusano púrpura."
        },
        {
          "type": "prose",
          "title": "Si llega un gusano púrpura durante la extracción",
          "text": "Si un gusano llega al vivero mientras los dos grupos todavía están trabajando con los huevos, los drow, como cazadores furtivos experimentados, saben reaccionar: conocen la ceguera y el sentido sísmico de los gusanos. Cualquier drow que esté en los racimos se cubre con su capa y queda inmóvil. El resto de los drow se pega a la pared y deja de respirar; saben que así son invisibles para el gusano."
        },
        {
          "type": "callout",
          "title": "Zhora Hallen, la más experimentada",
          "text": "Zhora no se inmuta y se queda donde está, incluso en medio de la sala, quieta e inmóvil como una estatua; lo ha hecho decenas de veces y tiene ventaja en la prueba de Sigilo (vida dura). Los PJ probablemente hagan lo mismo para evitar atraer la atención del gusano; no es difícil esconderse de esta manera (prueba de Sigilo, CD 10)."
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Recomendación: no te saltes el gusano púrpura",
          "text": "Sea cual sea el desarrollo, los PJ probablemente tengan que pelear y matar al fomorio Stronk, pero podrían optar por evitar del todo a los gusanos y escapar. Aunque es posible, por motivos dramáticos y narrativos se recomienda incluir una confrontación con un gusano púrpura: es uno de los monstruos más icónicos de D&D y este es el momento perfecto para enfrentarlo."
        },
        {
          "type": "table",
          "title": "Cómo de duro es el combate según la ayuda disponible",
          "headers": [
            "Situación",
            "Nivel de dificultad"
          ],
          "rows": [
            [
              "Con fuerza expedicionaria",
              "Es casi un combate parejo."
            ],
            [
              "Sin fuerza expedicionaria, pero Zhora y Hanne reunidas",
              "El grupo drow puede ayudar a los PJ."
            ],
            [
              "Sin fuerza expedicionaria y sin reunión Zhora/Hanne",
              "Los drow se esconden y huyen, dejando a los PJ librados a su suerte."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "Peligro real de muerte por el gusano",
          "text": "Un PJ tragado por el gusano está en grave peligro si no puede infligir 30+ puntos de daño en un solo asalto; esto bien podría significar la muerte del PJ. El grupo podría tener acceso a Revivir Muertos, pero si el personaje muerto queda demasiado tiempo dentro del gusano, el ácido eventualmente inutiliza ese hechizo, haciendo falta un conjuro de Resurrección, que el grupo probablemente todavía no tenga. Tené presentes estos datos al preparar este encuentro tan espectacular."
        },
        {
          "type": "prose",
          "title": "Después del vivero",
          "text": "Al salir del vivero, el grupo drow regresa a Menzoberranzan con sus dos huevos (si los consiguieron). Los PJ se habrán quedado con su huevo de gusano púrpura; transportarlo es complicado porque es bastante grande, pero es posible."
        },
        {
          "type": "callout",
          "title": "Atajo con teletransportación (depende del capítulo 9)",
          "text": "Si se siguió la sugerencia del capítulo 9 de que la teletransportación no se ve afectada por el Underdark, los PJ podrían teletransportarse para llevar el huevo de inmediato a Vizeran DeVir, quien empezará enseguida la construcción del Corazón Oscuro. Después de esto, los PJ pueden seguir camino por Las Serpenturas hacia un lugar llamado el Vasto Olvido."
        }
      ]
    },
    {
      "id": "capitulo-13-karazikar",
      "title": "4 · El Vasto Olvido: Karazikar",
      "description": "Encuentro con el beholder Karazikar en su guarida, las Fauces (pág. 175 y siguientes).",
      "blocks": [
        {
          "type": "callout",
          "tone": "success",
          "title": "Uno de los mejores encuentros de Out of the Abyss",
          "text": "Este encuentro con el beholder Karazikar tiene el potencial de ser uno de los mejores de todo el módulo. Lamentablemente está escrito con prisa y le faltan mapas de la guarida del beholder, pero eso se puede corregir con algo de preparación previa."
        },
        {
          "type": "prose",
          "title": "Recordatorio: criatura legendaria en su guarida",
          "text": "Esto es un combate contra una criatura legendaria en su propia guarida. Es importante recordar las acciones de guarida y las acciones legendarias, que ocurren cada ronda. Como va a ser, casi con seguridad, un combate en solitario (a menos que Shedrak siga con vida), se recomienda darle a Karazikar también resistencias legendarias."
        },
        {
          "type": "callout",
          "title": "Sobre el mapa de las Fauces de Karazikar",
          "text": "El manual explica las dimensiones de la guarida de Karazikar (las Fauces), pero no trae mapa ni imagen. El eje principal, donde ocurre la batalla, debería medir 100 pies de ancho según el libro, pero eso resulta muy difícil de representar en una mesa con miniaturas. Una alternativa es reducir el diámetro del abismo a 40 pies, lo que permite usar puentes de 40 pies de largo y distintas alturas para la pelea."
        },
        {
          "type": "prose",
          "title": "Señales a 1 km de distancia",
          "text": "Los PJ notan que algo anda mal cuando están a 1 km del Vasto Olvido: tal como se explica en el manual de monstruos, la presencia malvada del beholder hace que la gente se sienta observada y alucine ojos que se abren y cierran en el rabillo del ojo."
        },
        {
          "type": "prose",
          "title": "Descenso y esclavos de Karazikar",
          "text": "Los PJ encontrarán la parte superior de uno de los pozos perimetrales y comenzarán a descender por él. Podrían encontrarse con otros habitantes de las Fauces: los distintos esclavos que viven ahí. Algunos de ellos podrán comunicarse con los PJ, pero todos reverencian y temen a Karazikar. Algunos nacieron ahí y no conocen otra realidad. Podrían guiar a los personajes hasta Shedrak, embajador y humano favorito de Karazikar."
        },
        {
          "type": "characters",
          "items": [
            {
              "name": "Shedrak de los Ojos",
              "role": "Humano · embajador y favorito de Karazikar",
              "status": "Puede morir en este encuentro",
              "description": "Recibe a los PJ en uno de los pasajes que llevan a las Fauces y solo permite que se acerquen 10 personas para encontrarse con su señor.",
              "play": "Si es atacado, lanza globo de invulnerabilidad. (Nota: el libro dice que después lanza volar, pero es un error, porque ambos hechizos requieren concentración y no pueden mantenerse juntos.)",
              "future": "Viva o muera, los PJ terminarán encontrándose con Karazikar en las Fauces y podrán hablar con él."
            },
            {
              "name": "Karazikar",
              "role": "Beholder · señor de las Fauces",
              "status": "Combate legendario, posiblemente mortal",
              "description": "Beholder extremadamente arrogante que se cree la cúspide de la evolución y la vida. No tolera insultos ni ningún tipo de falta de respeto; está acostumbrado a que todos se inclinen ante él y lo sirvan.",
              "play": "Está genuinamente interesado en escuchar de los PJ cualquier información que pueda serle valiosa, en particular sobre el Motor del Laberinto. En combate es extremadamente táctico e inteligente: usará el eje de las Fauces a su favor, manteniéndose lejos del alcance cuerpo a cuerpo para forzar a los PJ a usar armas a distancia débiles o a gastar turnos corriendo y trepando de un puente a otro, alejándose cada vez que se acercan.",
              "future": "Tras ser derrotado, se le puede retirar el ojo central para el ritual del Corazón Oscuro."
            }
          ]
        },
        {
          "type": "prose",
          "title": "El Motor del Laberinto",
          "text": "Karazikar está particularmente interesado en el Motor del Laberinto. Los PJ todavía no han oído hablar de él, pero un jugador atento podría conectar este dato con la visión vista en Gravenhollow de Baphomet caminando en busca de un arma capaz de cambiar la realidad (la misma cosa)."
        },
        {
          "type": "table",
          "title": "Tácticas de combate de Karazikar",
          "headers": [
            "Táctica",
            "Detalle"
          ],
          "rows": [
            [
              "Cono antimagia contra lanzadores",
              "Lo enfoca en los lanzadores de conjuros para anularlos o forzarlos a salir del cono, acercándose a él. Cualquier criatura invocada o elemental es desterrada dentro del cono, y hechizos activos como volar o trepar como araña se suprimen mientras estén en él."
            ],
            [
              "Mordida",
              "Es fuerte, pero Karazikar solo la usa si tiene ventaja (víctima paralizada o dormida) y si hacerlo no deja que los atacantes cuerpo a cuerpo se acerquen."
            ],
            [
              "Rayos oculares elegidos, no al azar",
              "El manual de monstruos dice que los rayos oculares se tiran al azar para simular lo impredecible de un beholder; sin embargo, el DM tiene control total sobre esto. Si en determinado momento Karazikar quiere hechizar, desintegrar, matar o petrificar a un PJ en particular, puede elegir directamente ese rayo. Especialmente después de recibir una buena cantidad de daño, puede identificar quién es más amenazante y tratar de matarlo o neutralizarlo."
            ],
            [
              "Telequinesis para arrojar a un PJ al vacío",
              "Otra buena opción es usar telequinesis para arrojar a un PJ por el eje: una caída de 20d6 si no logran evitarlo."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warning",
          "title": "El combate más difícil hasta ahora",
          "text": "Este debería ser el combate de sus vidas, el más difícil hasta el momento. Es probable que algún PJ muera, y eso es parte de la épica del encuentro."
        },
        {
          "type": "prose",
          "title": "Mapa de referencia usado en mesa",
          "text": "Como referencia de cómo manejar la guarida, se usaron puentes de 40 pies de largo, con distintas alturas logradas con objetos variados; el grupo tuvo que separarse y cada quien se las arregló por su cuenta tratando de acercarse a Karazikar."
        }
      ]
    },
    {
      "id": "capitulo-13-secuelas",
      "title": "Secuelas: el tesoro, el modron roto y los esclavos",
      "description": "Qué queda después de derrotar a Karazikar.",
      "blocks": [
        {
          "type": "prose",
          "title": "El ojo central y el tesoro",
          "text": "Tras derrotar a Karazikar, se le puede retirar el ojo central para el ritual del Corazón Oscuro. La parte superior de las Fauces guarda el tesoro, pero solo es accesible volando; es uno de los mayores botines que los PJ conseguirán en toda la campaña."
        },
        {
          "type": "prose",
          "title": "El modron roto",
          "text": "Debajo de las Fauces hay una celda que contiene un modron roto, casi muerto y enloquecido. Si se lo ayuda con un conjuro de Restablecimiento Mayor, recupera la cordura, aunque no puede recordar mucho después de tanto abuso de Karazikar. Sin embargo, puede detectar la presencia de un Ordenador (el Motor del Laberinto) a 289 millas al sur. Si los personajes tienen acceso a un mapa, pueden deducir que está ubicado en el Laberinto, confirmando las sospechas sobre la visión de Baphomet en Gravenhollow."
        },
        {
          "type": "prose",
          "title": "Los esclavos de Karazikar",
          "text": "Tras derrotar a Karazikar, los cien esclavos del lugar se arrodillarán y los reverenciarán como salvadores. Algunos, capturados en años recientes, querrán volver a sus hogares. Pero los prisioneros nacidos en las Fauces, o que llevan allí mucho tiempo, han sido tan abusados por los rayos de hechizo/miedo de Karazikar que ya no son funcionales en una sociedad normal: consideran a los PJ sus nuevos amos y los adoran y temen tal como adoraban a Karazikar."
        },
        {
          "type": "callout",
          "title": "Qué hacer con los esclavos",
          "text": "Qué hagan los PJ con ellos depende enteramente del grupo y es muy dependiente del alineamiento del equipo. Algunos podrían estar en condiciones de pelear (tras descansar unos días) y sumarse a la fuerza expedicionaria; lucharían sin miedo y por sus amos. Si los PJ construyeron asentamientos en el Underdark, los esclavos podrían quedarse ahí como trabajadores generales o guardias. Seguirán cualquier orden lo mejor que puedan."
        },
        {
          "type": "prose",
          "title": "Cierre del capítulo",
          "text": "Aquí termina la aventura en Las Serpenturas. Si los PJ tienen acceso a teletransportación (según la sugerencia del capítulo 9), pueden volver a la Torre Araj para entregarle los ingredientes a Vizeran DeVir. Después, pueden teletransportarse a Gracklstugh y empezar su viaje hacia el Laberinto."
        }
      ]
    },
    {
      "id": "capitulo-13-red",
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
              "Huevo de gusano púrpura",
              "Capítulo 12 (Corazón Oscuro)",
              "Confirmar si se consiguió, cómo se transportó y si se entregó ya a Vizeran."
            ],
            [
              "Ojo central de Karazikar",
              "Capítulo 12 (Corazón Oscuro)",
              "Recordar que debe ser específicamente el de Karazikar; un beholder distinto (p. ej. en Mantol-Derith) no sirve."
            ],
            [
              "Zhora y Hanne Hallen",
              "Menzoberranzan",
              "Si se reunieron gracias a los PJ, Zhora quedó agradecida y los ayudará cuando lleguen a la ciudad drow."
            ],
            [
              "Motor del Laberinto",
              "El Laberinto (próximos capítulos)",
              "Dato revelado por el modron roto y por el interés de Karazikar; conecta con la visión de Baphomet en Gravenhollow."
            ],
            [
              "Esclavos de Karazikar",
              "Asentamientos del Underdark (cap. 9) o fuerza expedicionaria",
              "Registrar cuántos se unieron, cuántos volvieron a sus hogares y a qué asentamiento, si corresponde, fueron asignados."
            ],
            [
              "Tesoro de la cima de las Fauces",
              "Economía de la campaña",
              "Registrar qué consiguió el grupo; es uno de los botines más grandes de la campaña y puede influir en decisiones posteriores."
            ]
          ]
        },
        {
          "type": "prose",
          "title": "Separación de fuentes en este capítulo",
          "text": "La existencia de las distintas áreas, PNJ y el encuentro con Karazikar provienen del manual. Las valoraciones sobre el nivel de desafío de los trogloditos, la recomendación de no saltarse el combate contra el gusano púrpura, el cambio de dimensiones de las Fauces de 100 a 40 pies, la corrección sobre los hechizos de Shedrak y la sugerencia de dar resistencias legendarias a Karazikar son recomendaciones de mesa de esta guía, no reglas oficiales del libro."
        }
      ]
    }
  ]
});
