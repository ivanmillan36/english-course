import type { LessonData, TitleData, ParagraphData, ListData, SeparatorData } from '../lessons';

export const lesson23: LessonData = {
  id: 23,
  title: "Billy Elliot: Análisis y Resumen para Examen",
  description: "Esta lección especial te prepara para tu examen sobre Billy Elliot. Aprenderás el contexto histórico, los personajes principales, la trama completa y los temas importantes de esta historia que transcurre durante la huelga de mineros en Inglaterra en 1984.",
  welcomeEmoji: "🎭",
  pageTitle: "English Learning - Billy Elliot: Análisis Completo",
  metaDescription: "Resumen completo de Billy Elliot: contexto histórico, personajes, trama y temas para examen. Historia ambientada en la huelga de mineros de 1984.",
  learningPoints: [
    "El contexto histórico de la huelga de mineros en 1984 y su impacto en la familia Elliot",
    "Los personajes principales y sus características: Billy, Jackie, Tony, Mrs. Wilkinson, Michael y Nan",
    "La trama completa desde el descubrimiento del ballet hasta el éxito en la Royal Ballet School",
    "Los temas centrales: estereotipos de género, lucha de clases, identidad y relación padre-hijo",
    "Los momentos clave de la historia y su significado narrativo"
  ],
  content: [
    {
      topic: "Contexto y Ambientación",
      explanation: "Billy Elliot se desarrolla en un momento histórico específico y difícil en Inglaterra. Entender el contexto es fundamental para comprender las motivaciones de los personajes y los conflictos que enfrentan.",
      examples: [
        {
          type: 'title',
          text: 'Lugar y Fecha',
          emoji: '📍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La historia comienza en ', bold: true },
              { text: '1984', code: true },
              { text: ' en ', bold: true },
              { text: 'Everington', code: true },
              { text: ', un pequeño pueblo minero en el norte de Inglaterra (cerca de Durham).' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Situación Histórica: La Huelga de Mineros',
          emoji: '⚒️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Ocurre durante la ', bold: true },
              { text: 'Huelga de Mineros (Miners\' Strike)', code: true },
              { text: ' bajo el gobierno de Margaret Thatcher.' }
            ],
            [
              { text: 'El gobierno quería cerrar las minas de carbón.' }
            ],
            [
              { text: 'Los mineros luchaban por sus trabajos y no recibían salario, lo que causaba mucha pobreza y tensión.' }
            ],
            [
              { text: 'Esta situación afecta directamente a la familia Elliot.' }
            ],
            [
              { text: 'La violencia es extrema: la policía a caballo lleva palos largos y golpea a los piquetes en la espalda y la cabeza, causando sangre.' }
            ],
            [
              { text: 'Tony es arrestado específicamente porque lanzó gasolina a la cola de un caballo de la policía y le prendió fuego con una cerilla.' }
            ],
            [
              { text: 'En un encuentro tenso, Tony y Jackie ven a Gary Stewart (un amigo de Tony que se volvió esquirol) comprando una bolsa grande de comida en el supermercado. Tony lo confronta llamándolo "scab" porque los huelguistas apenas tienen para comer pan.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'La Familia Elliot',
          emoji: '👨‍👩‍👦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La vida es muy dura debido a la huelga.' }
            ],
            [
              { text: 'Jackie (el padre) y Tony (el hermano) están en huelga y peleando constantemente contra el gobierno y la policía.' }
            ],
            [
              { text: 'La madre de Billy murió dos años antes de que comience la historia.' }
            ],
            [
              { text: 'Viven en condiciones de pobreza extrema debido a la falta de ingresos.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Personajes Principales",
      explanation: "Cada personaje en Billy Elliot tiene un papel importante y características definidas que impulsan la historia. Conocerlos bien es esencial para entender los conflictos y la evolución de la trama.",
      examples: [
        {
          type: 'title',
          text: 'Billy Elliot',
          emoji: '👦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Tiene ', bold: true },
              { text: '11 años', code: true },
              { text: ' (casi 12).' }
            ],
            [
              { text: 'No es bueno en los deportes ni muy inteligente en la escuela.' }
            ],
            [
              { text: 'Descubre que tiene un talento natural para el ballet.' }
            ],
            [
              { text: 'Su pasión por el ballet lo lleva a desafiar las expectativas de su familia y comunidad.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Jackie Elliot (Papá)',
          emoji: '👨',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Viudo, minero en huelga.' }
            ],
            [
              { text: 'Es un hombre tradicional y duro.' }
            ],
            [
              { text: 'Al principio cree que el ballet es para niñas y quiere que Billy boxee como él lo hizo.' }
            ],
            [
              { text: 'Su transformación es clave: pasa de prohibirle bailar a sacrificarse para apoyar el futuro de su hijo.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tony Elliot',
          emoji: '👨‍🦱',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Hermano mayor de Billy.' }
            ],
            [
              { text: 'Es agresivo y está muy involucrado en la huelga.' }
            ],
            [
              { text: 'Odia a los esquiroles ("scabs") y a la policía.' }
            ],
            [
              { text: 'Al principio se opone al ballet de Billy, pero finalmente lo acepta.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Nan (Abuela)',
          emoji: '👵',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Tiene casi 80 años y es un poco senil.' }
            ],
            [
              { text: 'Le encanta la música y bailar.' }
            ],
            [
              { text: 'Ella quiso ser bailarina de joven, lo que conecta con el sueño de Billy.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Mrs. Wilkinson',
          emoji: '👩‍🏫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La profesora de ballet.' }
            ],
            [
              { text: 'Es dura pero ve el talento de Billy.' }
            ],
            [
              { text: 'Se convierte en su mentora, dándole clases privadas gratis.' }
            ],
            [
              { text: 'Le propone prepararlo para una audición en la Royal Ballet School en Londres.' }
            ],
            [
              { text: 'La primera vez que Billy se prueba las zapatillas de ballet, Mrs. Wilkinson le dice que tiene los pies grandes y le hace quitarse las botas de boxeo.' }
            ],
            [
              { text: 'Cuando Mrs. Wilkinson va a casa de los Elliot para confrontarlos porque Billy faltó a la audición, se revela que el padre de Debbie (el Sr. Wilkinson) ha perdido su trabajo también, pero no es minero. Tony se burla de ellos diciendo que son "clase media" y no entienden la lucha.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Michael',
          emoji: '👦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El mejor amigo de Billy.' }
            ],
            [
              { text: 'Le gusta vestirse con ropa de mujer.' }
            ],
            [
              { text: 'Apoya a Billy incondicionalmente.' }
            ],
            [
              { text: 'Billy descubre que Michael es gay, pero lo acepta sin problemas.' }
            ],
            [
              { text: 'En una escena clave, cuando Billy visita a Michael, este lleva puesto un vestido púrpura, los zapatos rojos de su madre y la chaqueta de su hermana. Michael le confiesa que le gusta vestirse con la ropa de su hermana y su madre.' }
            ],
            [
              { text: 'Billy, aunque dice "no soy gay", participa jugando y le pone lápiz labial a Michael.' }
            ],
            [
              { text: 'En la escena del gimnasio en Navidad, Michael le pregunta a Billy si sus manos están frías sobre su piel y luego lo besa brevemente. Billy le dice que le gusta el ballet, pero que no es gay, aunque le pide que no se lo cuente a nadie.' }
            ],
            [
              { text: 'Billy le regala un tutú a Michael en el gimnasio para que se lo pruebe, y Michael dice que no es una chica, pero que le gusta.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Trama Principal - Puntos Clave",
      explanation: "La historia de Billy Elliot sigue un arco narrativo claro desde el descubrimiento de su pasión hasta su éxito profesional. Cada momento clave tiene un significado importante para el desarrollo del personaje y los temas de la historia.",
      examples: [
        {
          type: 'title',
          text: 'El Inicio y el Boxeo',
          emoji: '🥊',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Billy asiste a clases de boxeo porque su padre quiere ("mi papá boxeaba, yo boxeo"), pero las odia y no es bueno.' }
            ],
            [
              { text: 'Un día, se queda observando una clase de ballet en el mismo gimnasio y se une.' }
            ],
            [
              { text: 'Al principio le cuesta, pero le gusta la sensación.' }
            ],
            [
              { text: 'Billy deja de ir a boxeo y usa el dinero (50 peniques) para pagar las clases de ballet en secreto.' }
            ],
            [
              { text: 'Billy practica obsesivamente una pirueta ("spin") en el baño y en su habitación. Es el movimiento que intenta perfeccionar para demostrar su valía.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'El Conflicto',
          emoji: '⚔️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El padre descubre a Billy bailando y se enfada muchísimo.' }
            ],
            [
              { text: 'Le prohíbe volver y le dice que el ballet es para niñas, no para hombres.' }
            ],
            [
              { text: 'Mrs. Wilkinson ve un talento especial en Billy y le propone prepararlo para una audición en la ', bold: true },
              { text: 'Royal Ballet School', code: true },
              { text: ' en Londres.' }
            ],
            [
              { text: 'Billy practica en secreto.' }
            ],
            [
              { text: 'Billy tiene una carta de su madre fallecida que debía abrir a los 18 años, pero ya la ha leído.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'La Carta de la Madre (Texto Específico)',
          emoji: '💌',
          level: 4
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La madre escribe: ', bold: true },
              { text: '"I missed you crying and laughing. I missed you shouting."', code: true },
              { text: ' (Me perdí verte llorar y reír. Me perdí tus gritos).' }
            ],
            [
              { text: '"But please know that I was always with you. I always will be."', code: true },
              { text: ' (Pero por favor sabe que siempre estuve contigo. Siempre lo estaré).' }
            ],
            [
              { text: 'Termina diciendo que está muy orgullosa de él.' }
            ],
            [
              { text: 'El mensaje central de la carta es que siempre sea él mismo.' }
            ],
            [
              { text: 'Billy lleva esta carta y un casete de música de su madre para preparar su baile de la audición.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'La Oportunidad Perdida',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El día de la audición coincide con un momento violento de la huelga.' }
            ],
            [
              { text: 'Tony es arrestado específicamente porque lanzó gasolina a la cola de un caballo de la policía y le prendió fuego con una cerilla ("I lit a match").' }
            ],
            [
              { text: 'Billy pierde la audición porque tiene que ir al juicio de Tony.' }
            ],
            [
              { text: 'Mrs. Wilkinson va a casa de los Elliot para confrontarlos, revelando a Tony que Billy ha estado bailando.' }
            ],
            [
              { text: 'Tony se pone furioso y le dice que no será bailarín.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'El Punto de Inflexión (Navidad)',
          emoji: '🎄',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Es una Navidad triste y pobre; el padre tiene que romper el piano de la madre para tener leña y calentarse.' }
            ],
            [
              { text: 'Una noche, el padre encuentra a Billy y a Michael en el gimnasio de boxeo.' }
            ],
            [
              { text: 'Billy, en lugar de detenerse, ', bold: true },
              { text: 'baila frente a su padre', code: true },
              { text: '.' }
            ],
            [
              { text: 'Es un acto de desafío y pasión.' }
            ],
            [
              { text: 'El padre se da cuenta del talento de su hijo. Decide que debe ayudarlo.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'El Sacrificio de Jackie',
          emoji: '💔',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Para conseguir dinero para la audición en Londres, Jackie decide convertirse en un "esquirol" (scab) y volver a trabajar, traicionando la huelga.' }
            ],
            [
              { text: 'Dice: "Quiero darle un futuro a Billy".' }
            ],
            [
              { text: 'Tony ve a su padre en el autobús de los esquiroles y trata de detenerlo.' }
            ],
            [
              { text: 'Ambos lloran; el padre explica que Billy no tiene futuro en la mina.' }
            ],
            [
              { text: 'Finalmente, no rompen la huelga.' }
            ],
            [
              { text: 'Los vecinos y compañeros mineros hacen una colecta y George (el entrenador de boxeo) organiza una rifa para pagar el viaje a Londres.' }
            ],
            [
              { text: 'Para financiar el viaje, Jackie vende el anillo de bodas de su esposa (Sarah) por 25 libras, aunque él quería 50.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'La Audición en Londres',
          emoji: '🏛️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Billy y su padre viajan a Londres.' }
            ],
            [
              { text: 'Es la primera vez que el padre sale de su zona. El padre nunca había viajado al sur de Durham antes.' }
            ],
            [
              { text: 'En el viaje en autobús, Billy le pregunta a su padre si Londres es un lugar agradable y si hay minas allí. El padre responde que no hay minas y le dice que deje de pensar solo en eso.' }
            ],
            [
              { text: 'En la audición, los médicos revisan el cuerpo de Billy, le miran la boca y lo miden, lo que le hace sentir como un objeto o un animal.' }
            ],
            [
              { text: 'Billy está muy nervioso y golpea a otro niño (Simon) en el vestuario.' }
            ],
            [
              { text: 'El jurado lo regaña, pero le preguntan qué siente al bailar o por qué quiere bailar.' }
            ],
            [
              { text: 'Billy no sabe qué responder al principio. Dice "No lo sé". Luego explica que cuando baila su cuerpo se llena de fuego (', bold: true },
              { text: '"my body is full of fire"', code: true },
              { text: ') y olvida todo.' }
            ],
            [
              { text: 'Billy cree que ha fallado la audición no solo por golpear al otro niño, sino porque la música que llevó para su baile (el casete de su madre) era incorrecta ("wrong music"), demasiado moderna y rápida para el ballet clásico.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'El Desenlace',
          emoji: '🎭',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Llega una carta de la Royal Ballet School: ', bold: true },
              { text: 'Billy ha sido aceptado', code: true },
              { text: '.' }
            ],
            [
              { text: 'La familia celebra, pero al mismo tiempo la huelga termina y los mineros pierden; vuelven al trabajo derrotados.' }
            ],
            [
              { text: 'Cuando Billy se va, su abuela (Nan) le da un billete de 5 libras que tenía escondido. Es un momento tierno porque ella a veces no lo reconoce debido a su senilidad, pero en ese momento sabe exactamente quién es.' }
            ],
            [
              { text: 'Billy se va a Londres.' }
            ],
            [
              { text: 'Epílogo (Años después): Jackie y Tony (ahora mayores) viajan a Londres para ver a Billy, que es el bailarín principal en ', bold: true },
              { text: 'El Lago de los Cisnes', code: true },
              { text: '.' }
            ],
            [
              { text: 'Michael también está allí.' }
            ],
            [
              { text: 'Billy salta al escenario y "vuela".' }
            ],
            [
              { text: 'Aunque Billy triunfa, la vida en el pueblo sigue siendo dura. Tony ', bold: true },
              { text: 'nunca encuentra otro trabajo', code: true },
              { text: ' después de que cierran la mina.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Temas Importantes para Preguntas de Desarrollo",
      explanation: "Billy Elliot explora varios temas profundos que van más allá de la historia personal del protagonista. Estos temas son fundamentales para entender el significado completo de la obra y son frecuentemente objeto de preguntas en exámenes.",
      examples: [
        {
          type: 'title',
          text: 'Estereotipos de Género',
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El conflicto central es que el ballet se considera "de niñas" o de "gays" en su comunidad machista.' }
            ],
            [
              { text: 'Mientras que el boxeo y la minería son "de hombres".' }
            ],
            [
              { text: 'Billy desafía estos estereotipos al seguir su pasión por el ballet.' }
            ],
            [
              { text: 'La historia muestra cómo los roles de género pueden limitar el potencial de las personas.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Lucha de Clases / Política',
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La huelga es el telón de fondo que explica la pobreza, la rabia de Tony y la desesperación del padre.' }
            ],
            [
              { text: 'Muestra el fin de una era industrial en Inglaterra.' }
            ],
            [
              { text: 'El conflicto entre los mineros y el gobierno de Thatcher representa una lucha de clases.' }
            ],
            [
              { text: 'La pobreza afecta directamente las decisiones y oportunidades de la familia.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Identidad y Autoexpresión',
          emoji: '🎨',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Billy baila para escapar de su realidad y expresar lo que no puede decir con palabras.' }
            ],
            [
              { text: 'El ballet le permite encontrar su verdadera identidad.' }
            ],
            [
              { text: 'La carta de su madre le recuerda que debe "ser él mismo".' }
            ],
            [
              { text: 'Michael también explora su identidad al vestirse con ropa de mujer y aceptar su orientación sexual.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Relación Padre-Hijo',
          emoji: '👨‍👦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La transformación de Jackie es clave en la historia.' }
            ],
            [
              { text: 'Pasa de prohibirle bailar a humillarse (intentando ser esquirol) para salvar el futuro de su hijo.' }
            ],
            [
              { text: 'Muestra el amor incondicional de un padre que finalmente acepta y apoya los sueños de su hijo.' }
            ],
            [
              { text: 'El sacrificio de Jackie demuestra que está dispuesto a romper sus propios valores para darle oportunidades a Billy.' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "¿En qué año y lugar comienza la historia de Billy Elliot?",
      options: [
        "1984 en Londres",
        "1984 en Everington, un pueblo minero del norte de Inglaterra",
        "1985 en Durham",
        "1983 en un pueblo minero"
      ],
      correctAnswer: 1,
      explanation: "La historia comienza en 1984 en Everington, un pequeño pueblo minero en el norte de Inglaterra (cerca de Durham). Este contexto histórico es fundamental para entender la situación de la familia Elliot."
    },
    {
      question: "¿Cuál es la situación histórica que afecta a la familia Elliot?",
      options: [
        "Una guerra",
        "La Huelga de Mineros bajo el gobierno de Margaret Thatcher",
        "Una crisis económica general",
        "Una epidemia"
      ],
      correctAnswer: 1,
      explanation: "La historia ocurre durante la Huelga de Mineros (Miners' Strike) bajo el gobierno de Margaret Thatcher. El gobierno quería cerrar las minas de carbón, y los mineros luchaban por sus trabajos sin recibir salario, causando mucha pobreza."
    },
    {
      question: "¿Qué personaje es la profesora de ballet que se convierte en mentora de Billy?",
      options: [
        "Nan",
        "Mrs. Wilkinson",
        "La madre de Billy",
        "Michael"
      ],
      correctAnswer: 1,
      explanation: "Mrs. Wilkinson es la profesora de ballet que ve el talento de Billy y se convierte en su mentora, dándole clases privadas gratis y proponiéndole prepararlo para la Royal Ballet School."
    },
    {
      question: "¿Qué hace Billy cuando su padre lo descubre bailando por primera vez?",
      options: [
        "Deja de bailar inmediatamente",
        "Sigue bailando en secreto",
        "Se enfrenta a su padre bailando frente a él",
        "Abandona su casa"
      ],
      correctAnswer: 2,
      explanation: "En el punto de inflexión de Navidad, cuando el padre encuentra a Billy y a Michael en el gimnasio, Billy baila frente a su padre como un acto de desafío y pasión. Este momento hace que el padre se dé cuenta del talento de su hijo."
    },
    {
      question: "¿Qué decide hacer Jackie para conseguir dinero para la audición de Billy en Londres?",
      options: [
        "Pedir un préstamo",
        "Convertirse en esquirol (scab) y volver a trabajar",
        "Vender la casa",
        "Robar dinero"
      ],
      correctAnswer: 1,
      explanation: "Jackie decide convertirse en un 'esquirol' (scab) y volver a trabajar, traicionando la huelga, porque quiere darle un futuro a Billy. Sin embargo, finalmente no rompe la huelga porque los vecinos hacen una colecta."
    },
    {
      question: "¿Qué le dice Billy al jurado cuando le preguntan qué siente al bailar?",
      options: [
        "Que le da vergüenza",
        "Que siente fuego en su cuerpo y olvida todo",
        "Que quiere ser famoso",
        "Que le gusta porque es fácil"
      ],
      correctAnswer: 1,
      explanation: "Billy responde que siente fuego en su cuerpo y que olvida todo cuando baila. Esta respuesta muestra su pasión genuina y conexión emocional con el ballet."
    },
    {
      question: "¿Cuál es uno de los temas principales que explora Billy Elliot?",
      options: [
        "La tecnología moderna",
        "Los estereotipos de género",
        "La vida en la ciudad",
        "Los deportes competitivos"
      ],
      correctAnswer: 1,
      explanation: "Uno de los temas centrales es los estereotipos de género: el ballet se considera 'de niñas' o de 'gays' en su comunidad machista, mientras que el boxeo y la minería son 'de hombres'. Billy desafía estos estereotipos."
    },
    {
      question: "¿Qué representa la transformación de Jackie (el padre) en la historia?",
      options: [
        "La relación padre-hijo y el amor incondicional",
        "La importancia del dinero",
        "La necesidad de seguir tradiciones",
        "El rechazo a los cambios"
      ],
      correctAnswer: 0,
      explanation: "La transformación de Jackie muestra la relación padre-hijo y el amor incondicional. Pasa de prohibirle bailar a humillarse (intentando ser esquirol) para salvar el futuro de su hijo, demostrando que está dispuesto a romper sus propios valores para darle oportunidades a Billy."
    },
    {
      question: "¿Qué sucede en el epílogo de la historia?",
      options: [
        "Billy vuelve a Everington",
        "Billy es el bailarín principal en El Lago de los Cisnes y su familia lo va a ver",
        "Billy abandona el ballet",
        "La familia se reconcilia completamente"
      ],
      correctAnswer: 1,
      explanation: "En el epílogo, años después, Jackie y Tony viajan a Londres para ver a Billy, que es el bailarín principal en El Lago de los Cisnes. Michael también está allí, y Billy salta al escenario y 'vuela'."
    },
    {
      question: "¿Qué papel juega la carta de la madre de Billy en la historia?",
      options: [
        "Le dice que debe ser boxeador",
        "Le dice que siempre sea él mismo",
        "Le prohíbe bailar",
        "No tiene importancia en la historia"
      ],
      correctAnswer: 1,
      explanation: "La carta de su madre fallecida le dice que siempre sea él mismo. Billy lleva esta carta y un casete de música de su madre para preparar su baile de la audición, lo que muestra la importancia de este mensaje para su identidad y autoexpresión."
    }
  ]
};

