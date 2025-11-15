import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson16: LessonData = {
  id: 12,
  title: "Tiempos Verbales del Futuro",
  description: "Aprende a expresar el futuro en inglés de tres formas diferentes y precisas. Domina el uso de 'will' para predicciones y decisiones espontáneas, 'be going to' para planes e intenciones, y el presente continuo con sentido de futuro para eventos confirmados. Comprende cuándo usar cada forma según el contexto y la intención comunicativa.",
  welcomeEmoji: "🚀",
  pageTitle: "English Learning - Talking About the Future: Will, Be Going To & Present Continuous",
  metaDescription: "Domina los tiempos verbales del futuro en inglés: will, be going to y presente continuo con sentido de futuro. Aprende sus estructuras, usos, diferencias y cuándo usar cada uno según el contexto.",
  learningPoints: [
    "Usar correctamente 'will' para predicciones, decisiones espontáneas y promesas",
    "Utilizar 'be going to' para expresar planes o intenciones ya pensadas",
    "Emplear el presente continuo con sentido de futuro para hablar de planes confirmados",
    "Distinguir con claridad cuándo usar cada forma del futuro según el contexto",
    "Identificar los marcadores de tiempo que acompañan las oraciones en futuro",
    "Aplicar correctamente las estructuras afirmativas, negativas e interrogativas de cada tiempo"
  ],
  content: [
    {
      topic: "The Future with 'Will'",
      explanation: "El **futuro con 'will'** se utiliza cuando hablamos de **decisiones espontáneas**, **predicciones** o **promesas**. Este tiempo verbal no requiere que el hablante tenga un plan previo; simplemente decide en el momento o expresa lo que cree que sucederá.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "Subject + will + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: 'I will call you tomorrow.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "Subject + will not (won't) + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: "I won't forget your birthday.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "Will + subject + base verb?",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: 'Will it rain tomorrow?', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota importante: ', bold: true },
            { text: "'Will' se usa con todas las personas (I, you, he, she, it, we, they) y el verbo siempre va en su forma base (infinitivo sin 'to')." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Predicciones sin evidencia concreta:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa cuando opinamos o creemos algo sobre el futuro.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I think it will rain tomorrow.', italic: true },
              { text: ' (Creo que va a llover mañana.)' }
            ],
            [
              { text: 'She will probably pass the exam.', italic: true },
              { text: ' (Ella probablemente aprobará el examen.)' }
            ],
            [
              { text: "They won't arrive on time.", italic: true },
              { text: ' (No llegarán a tiempo.)' }
            ],
            [
              { text: "I don't think he will come to the party.", italic: true },
              { text: ' (No creo que él venga a la fiesta.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Palabras clave: ', bold: true },
            { text: 'I think', code: true },
            { text: ', ', bold: true },
            { text: 'probably', code: true },
            { text: ', ', bold: true },
            { text: 'maybe', code: true },
            { text: ', ', bold: true },
            { text: "I'm sure", code: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Decisiones espontáneas (hechas en el momento):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'No se planearon antes; se deciden mientras se habla.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"The phone is ringing." → "I\'ll answer it."', italic: true },
              { text: ' (El teléfono está sonando. → Yo lo atiendo.)' }
            ],
            [
              { text: '"I\'m thirsty." → "I\'ll get you some water."', italic: true },
              { text: ' (Tengo sed. → Te traeré agua.)' }
            ],
            [
              { text: '"It\'s cold in here." → "I\'ll close the window."', italic: true },
              { text: ' (Hace frío aquí. → Cerraré la ventana.)' }
            ],
            [
              { text: '"We don\'t have milk." → "Don\'t worry, I\'ll buy some."', italic: true },
              { text: ' (No tenemos leche. → No te preocupes, compraré.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: 'La decisión se toma en el momento de hablar, no antes.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Promesas o compromisos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Cuando el hablante promete hacer algo.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'll help you with your homework.", italic: true },
              { text: ' (Te ayudaré con tu tarea.)' }
            ],
            [
              { text: 'I promise I will call you later.', italic: true },
              { text: ' (Prometo que te llamaré más tarde.)' }
            ],
            [
              { text: "Don't worry, I won't tell anyone.", italic: true },
              { text: ' (No te preocupes, no le diré a nadie.)' }
            ],
            [
              { text: 'We will support you no matter what.', italic: true },
              { text: ' (Te apoyaremos pase lo que pase.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Marcadores de tiempo comunes',
          emoji: '🕓',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "tomorrow, next week, in a few days, soon, later",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:' }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'll see you ", italic: true },
              { text: 'tomorrow', bold: true },
              { text: '.', italic: true },
              { text: ' (Te veré mañana.)' }
            ],
            [
              { text: 'She will arrive ', italic: true },
              { text: 'next week', bold: true },
              { text: '.', italic: true },
              { text: ' (Ella llegará la semana que viene.)' }
            ],
            [
              { text: 'They will finish the project ', italic: true },
              { text: 'in a few days', bold: true },
              { text: '.', italic: true },
              { text: ' (Terminarán el proyecto en unos días.)' }
            ],
            [
              { text: "I'll call you ", italic: true },
              { text: 'soon', bold: true },
              { text: '.', italic: true },
              { text: ' (Te llamaré pronto.)' }
            ],
            [
              { text: 'We will talk about it ', italic: true },
              { text: 'later', bold: true },
              { text: '.', italic: true },
              { text: ' (Hablaremos de eso más tarde.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "The Future with 'Be Going To'",
      explanation: "Usamos **'be going to'** cuando hablamos de **planes, intenciones o decisiones que ya estaban pensadas antes del momento de hablar**. También se usa para **predicciones basadas en evidencia visible o presente**.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + am/is/are + going to + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am going to study medicine.', italic: true },
              { text: ' (Voy a estudiar medicina.)' }
            ],
            [
              { text: 'She is going to travel to Japan.', italic: true },
              { text: ' (Ella va a viajar a Japón.)' }
            ],
            [
              { text: 'They are going to buy a new house.', italic: true },
              { text: ' (Van a comprar una casa nueva.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am not going to study medicine.', italic: true },
              { text: ' (No voy a estudiar medicina.)' }
            ],
            [
              { text: "She isn't going to travel to Japan.", italic: true },
              { text: ' (Ella no va a viajar a Japón.)' }
            ],
            [
              { text: "They aren't going to buy a new house.", italic: true },
              { text: ' (No van a comprar una casa nueva.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Are you going to study medicine?', italic: true },
              { text: ' (¿Vas a estudiar medicina?)' }
            ],
            [
              { text: 'Is she going to travel to Japan?', italic: true },
              { text: ' (¿Va a viajar a Japón?)' }
            ],
            [
              { text: 'Are they going to buy a new house?', italic: true },
              { text: ' (¿Van a comprar una casa nueva?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: "El verbo 'be' cambia según la persona: am (I), is (he/she/it), are (you/we/they)" }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Planes o intenciones personales:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Algo que ya decidiste antes del momento de hablar.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am going to buy a new car next month.', italic: true },
              { text: ' (Voy a comprar un auto nuevo el mes que viene.)' }
            ],
            [
              { text: 'We are going to visit our grandparents this weekend.', italic: true },
              { text: ' (Vamos a visitar a nuestros abuelos este fin de semana.)' }
            ],
            [
              { text: 'She is going to start a new job in September.', italic: true },
              { text: ' (Ella va a empezar un nuevo trabajo en septiembre.)' }
            ],
            [
              { text: 'They are going to move to another city.', italic: true },
              { text: ' (Van a mudarse a otra ciudad.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: 'El plan ya existía antes de este momento.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Predicciones con evidencia actual:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Hay señales que muestran lo que pasará.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "Look at those dark clouds! It's going to rain.", italic: true },
              { text: ' (¡Mira esas nubes negras! Va a llover.)' }
            ],
            [
              { text: "Be careful! You're going to fall!", italic: true },
              { text: ' (¡Ten cuidado! ¡Te vas a caer!)' }
            ],
            [
              { text: "The car is going too fast. It's going to crash!", italic: true },
              { text: ' (El auto va muy rápido. ¡Va a chocar!)' }
            ],
            [
              { text: "She looks very tired. She's going to fall asleep.", italic: true },
              { text: ' (Se ve muy cansada. Se va a quedar dormida.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: "Diferencia con 'will': ", bold: true },
            { text: 'Aquí hay evidencia visible que indica lo que pasará. Con \'will\' es solo una opinión o suposición.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Diferencia clave: 'Will' vs 'Be Going To'",
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "Will = decisión o suposición en el momento:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"The phone is ringing." → "I\'ll answer it."', italic: true },
              { text: ' (Decisión espontánea)' }
            ],
            [
              { text: 'I think it will rain.', italic: true },
              { text: ' (Opinión sin evidencia)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Going to = plan previo o predicción con evidencia:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm going to study English tomorrow evening.", italic: true },
              { text: ' (Plan previo)' }
            ],
            [
              { text: "Look at the clouds! It's going to rain.", italic: true },
              { text: ' (Evidencia visible)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Marcadores de tiempo comunes',
          emoji: '🕓',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "tomorrow, next year, soon, in a few hours, later today, this weekend",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:' }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm going to call him ", italic: true },
              { text: 'tomorrow', bold: true },
              { text: '.', italic: true },
              { text: ' (Voy a llamarlo mañana.)' }
            ],
            [
              { text: "They're going to get married ", italic: true },
              { text: 'next year', bold: true },
              { text: '.', italic: true },
              { text: ' (Se van a casar el año que viene.)' }
            ],
            [
              { text: "We're going to leave ", italic: true },
              { text: 'soon', bold: true },
              { text: '.', italic: true },
              { text: ' (Nos vamos a ir pronto.)' }
            ],
            [
              { text: "She's going to finish ", italic: true },
              { text: 'in a few hours', bold: true },
              { text: '.', italic: true },
              { text: ' (Ella va a terminar en unas horas.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Present Continuous for Future",
      explanation: "El **presente continuo** puede usarse para hablar del **futuro**, pero solo cuando el plan es **definitivo y ya tiene arreglos concretos**. Suele implicar que **ya se tomó una decisión y se organizó** (por ejemplo, se compraron boletos, se acordó una cita, se hizo una reserva, etc.).",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + am/is/are + verb-ing",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am flying to Paris tomorrow.', italic: true },
              { text: ' (Vuelo a París mañana.)' }
            ],
            [
              { text: 'She is meeting the client at 3 p.m.', italic: true },
              { text: ' (Ella se reúne con el cliente a las 3 p.m.)' }
            ],
            [
              { text: 'We are having dinner at 8 tonight.', italic: true },
              { text: ' (Cenamos a las 8 esta noche.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am not meeting him tonight.', italic: true },
              { text: ' (No me reúno con él esta noche.)' }
            ],
            [
              { text: "She isn't coming to the party.", italic: true },
              { text: ' (Ella no viene a la fiesta.)' }
            ],
            [
              { text: "They aren't traveling this weekend.", italic: true },
              { text: ' (No viajan este fin de semana.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Are you coming to the party tonight?', italic: true },
              { text: ' (¿Vienes a la fiesta esta noche?)' }
            ],
            [
              { text: 'Is he starting his new job on Monday?', italic: true },
              { text: ' (¿Empieza su nuevo trabajo el lunes?)' }
            ],
            [
              { text: 'Are they leaving tomorrow?', italic: true },
              { text: ' (¿Se van mañana?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true },
            { text: 'Debe haber un marcador de tiempo futuro en la oración para que quede claro que hablamos del futuro, no del presente.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Planes confirmados con detalles concretos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'We are meeting the client at 3 p.m.', italic: true },
              { text: ' (Nos reuniremos con el cliente a las 3 p.m.)' }
            ],
            [
              { text: 'I am flying to New York on Friday.', italic: true },
              { text: ' (Vuelo a Nueva York el viernes.)' }
            ],
            [
              { text: 'She is having lunch with her boss tomorrow.', italic: true },
              { text: ' (Ella almuerza con su jefe mañana.)' }
            ],
            [
              { text: 'They are getting married next month.', italic: true },
              { text: ' (Se casan el mes que viene.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: 'Ya hay un arreglo concreto (boletos comprados, reservas hechas, citas acordadas).' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Eventos futuros organizados en agenda:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am starting my new job next Monday.', italic: true },
              { text: ' (Empiezo mi nuevo trabajo el lunes que viene.)' }
            ],
            [
              { text: 'We are having a meeting at 10 a.m.', italic: true },
              { text: ' (Tenemos una reunión a las 10 a.m.)' }
            ],
            [
              { text: 'The president is visiting our city next week.', italic: true },
              { text: ' (El presidente visita nuestra ciudad la semana que viene.)' }
            ],
            [
              { text: 'Are you attending the conference tomorrow?', italic: true },
              { text: ' (¿Asistes a la conferencia mañana?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencias clave entre las tres formas',
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Will → decisión o promesa inmediata:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"I\'m hungry." → "I\'ll make a sandwich."', italic: true },
              { text: ' (Decisión en el momento)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Be going to → intención o plan personal:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm going to make dinner tonight.", italic: true },
              { text: ' (Plan ya pensado)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Present Continuous → plan confirmado y arreglado:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm having dinner with Sarah at 8 p.m.", italic: true },
              { text: ' (Reserva hecha, arreglo concreto)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Marcadores de tiempo comunes',
          emoji: '🕓',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "tonight, tomorrow, next week, this weekend, on Monday, at 3 p.m.",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:' }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm meeting him ", italic: true },
              { text: 'tonight', bold: true },
              { text: '.', italic: true },
              { text: ' (Me reúno con él esta noche.)' }
            ],
            [
              { text: "She's leaving ", italic: true },
              { text: 'tomorrow', bold: true },
              { text: '.', italic: true },
              { text: ' (Ella se va mañana.)' }
            ],
            [
              { text: "We're traveling ", italic: true },
              { text: 'next week', bold: true },
              { text: '.', italic: true },
              { text: ' (Viajamos la semana que viene.)' }
            ],
            [
              { text: "They're having a party ", italic: true },
              { text: 'this weekend', bold: true },
              { text: '.', italic: true },
              { text: ' (Tienen una fiesta este fin de semana.)' }
            ],
            [
              { text: "I'm starting my new job ", italic: true },
              { text: 'on Monday', bold: true },
              { text: '.', italic: true },
              { text: ' (Empiezo mi nuevo trabajo el lunes.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Comparación y diferencias entre las tres formas del futuro",
      explanation: "Saber **cuándo usar cada forma del futuro** es fundamental para expresarte con precisión en inglés. Cada estructura tiene un matiz diferente según la intención y el contexto. Aquí veremos las diferencias clave con ejemplos comparativos.",
      examples: [
        {
          type: 'title',
          text: 'Tabla comparativa',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Forma', 'Cuándo usarla', 'Marcadores típicos', 'Ejemplo'],
          rows: [
            ['Will', 'Decisión espontánea, predicción, promesa', 'tomorrow, next week, soon, later', "I'll call you tomorrow."],
            ['Be Going To', 'Plan previo, predicción con evidencia', 'tomorrow, next year, soon, tonight', "I'm going to call him tomorrow."],
            ['Present Continuous', 'Plan confirmado y arreglado', 'tonight, tomorrow, next week, on Monday', "I'm calling him at 3 p.m."]
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparaciones directas',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 1: El teléfono está sonando', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'll answer it!", italic: true },
              { text: ' (Decisión espontánea → Will)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I'm going to answer it!", italic: true },
              { text: ' (No es natural, porque no lo planeaste antes)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 2: Ya compraste boletos de avión', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'm flying to Paris tomorrow.", italic: true },
              { text: ' (Arreglo concreto → Present Continuous)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'm going to fly to Paris tomorrow.", italic: true },
              { text: ' (Plan confirmado → Going to)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I'll fly to Paris tomorrow.", italic: true },
              { text: ' (Menos natural, suena como decisión espontánea)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 3: Ves nubes negras en el cielo', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: "Look! It's going to rain!", italic: true },
              { text: ' (Evidencia visible → Going to)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Look! It will rain!', italic: true },
              { text: " (No es natural, 'will' es para opiniones sin evidencia)" }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Pero:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I think it will rain tomorrow.', italic: true },
              { text: ' (Opinión sin evidencia → Will)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 4: Tienes una cita con el doctor a las 3 p.m.', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'm seeing the doctor at 3 p.m.", italic: true },
              { text: ' (Cita confirmada → Present Continuous)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'm going to see the doctor at 3 p.m.", italic: true },
              { text: ' (Plan confirmado → Going to)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I'll see the doctor at 3 p.m.", italic: true },
              { text: ' (Menos natural para cita ya programada)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Reglas de oro',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "1. Usa 'Will' cuando:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Decides algo en el momento de hablar' }],
            [{ text: 'Haces una promesa' }],
            [{ text: 'Das tu opinión sobre el futuro (sin evidencia concreta)' }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "2. Usa 'Be Going To' cuando:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Ya planeaste o decidiste algo antes' }],
            [{ text: 'Ves evidencia de que algo va a pasar' }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "3. Usa 'Present Continuous' cuando:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Tienes un arreglo concreto (boletos, reservas, citas)' }],
            [{ text: 'El plan está en tu agenda' }],
            [{ text: 'Hay confirmación definitiva' }]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en conversación',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 1:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'What are your plans for the weekend?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "I'm going to visit my parents.", italic: true },
              { text: ' (Plan previo)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'That sounds nice! When are you leaving?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "I'm leaving on Saturday morning.", italic: true },
              { text: ' (Arreglo concreto)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 2:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'I forgot to buy milk.', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "Don't worry, I'll get some on my way home.", italic: true },
              { text: ' (Decisión espontánea)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 3:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: "Look at that car! It's going too fast!", italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "Oh no! It's going to crash!", italic: true },
              { text: ' (Predicción con evidencia)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 4:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Are you free tomorrow night?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "No, sorry. I'm having dinner with Sarah.", italic: true },
              { text: ' (Plan confirmado)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'What about Friday?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "Yes, I'll be free!", italic: true },
              { text: ' (Promesa/confirmación)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Errores comunes y cómo evitarlos",
      explanation: "Estos son los errores más frecuentes que cometen los estudiantes hispanohablantes al usar los tiempos del futuro. Conocerlos te ayudará a hablar con mayor precisión y naturalidad.",
      examples: [
        {
          type: 'title',
          text: "Errores con 'Will'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I will to call you tomorrow.', italic: true },
              { text: " (agregar 'to' después de 'will')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I will call you tomorrow.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She wills come to the party.', italic: true },
              { text: " (conjugar 'will')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She will come to the party.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'They will going to study.', italic: true },
              { text: " (mezclar 'will' con 'going to')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'They will study.', italic: true },
              { text: ' o ' },
              { text: 'They are going to study.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Will you to help me?', italic: true },
              { text: " (agregar 'to' en pregunta)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Will you help me?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I think it's going to rain tomorrow.", italic: true },
              { text: " (usar 'going to' con opinión)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I think it will rain tomorrow.', italic: true },
              { text: " ('Will' para opiniones)" }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Errores con 'Be Going To'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I going to travel next month.', italic: true },
              { text: " (olvidar el verbo 'be')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I am going to travel next month.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She is going to Paris tomorrow.', italic: true },
              { text: ' (omitir el verbo principal)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She is going to travel to Paris tomorrow.', italic: true },
              { text: ' o ' },
              { text: 'She is going to Paris tomorrow.', italic: true },
              { text: " (si usamos 'going' como 'ir')" }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'They are going study.', italic: true },
              { text: " (olvidar 'to' antes del verbo)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'They are going to study.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'He are going to buy a car.', italic: true },
              { text: " (usar 'are' con 'he')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'He is going to buy a car.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Look! It will rain!', italic: true },
              { text: ' (usar \'will\' con evidencia visible)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "Look! It's going to rain!", italic: true },
              { text: " ('Going to' para predicciones con evidencia)" }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores con Present Continuous para futuro',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I am fly to London tomorrow.', italic: true },
              { text: ' (olvidar -ing)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I am flying to London tomorrow.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She is meet him tonight.', italic: true },
              { text: ' (olvidar -ing)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She is meeting him tonight.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'We are having dinner.', italic: true },
              { text: ' (sin marcador de futuro → suena como presente)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'We are having dinner tonight at 8 p.m.', italic: true },
              { text: ' (con marcador de tiempo futuro)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Are you come to the party?', italic: true },
              { text: ' (mezclar presente simple con continuo)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Are you coming to the party?', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Confusiones comunes entre las tres formas',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Error 1: Usar \'will\' para planes previos', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Tomorrow I will visit my parents.', italic: true },
              { text: ' (si ya lo planeaste)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "Tomorrow I'm going to visit my parents.", italic: true },
              { text: ' o ' },
              { text: "Tomorrow I'm visiting my parents.", italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Error 2: Usar \'going to\' para decisiones espontáneas', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: '"The phone is ringing." → "I\'m going to answer it."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: '"The phone is ringing." → "I\'ll answer it."', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Error 3: Usar \'will\' para predicciones con evidencia', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Look at those clouds! It will rain.', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "Look at those clouds! It's going to rain.", italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Error 4: Olvidar marcadores de tiempo con Present Continuous', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I'm meeting John.", italic: true },
              { text: ' (¿Ahora o en el futuro?)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I'm meeting John tomorrow at 3 p.m.", italic: true },
              { text: ' (claro que es futuro)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Consejos prácticos',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "1. Con 'will': ", bold: true },
            { text: 'El verbo siempre va en forma base (sin \'to\', sin -ing, sin -s)' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I will go', italic: true },
              { text: ' ✅' }
            ],
            [
              { text: 'I will to go', italic: true },
              { text: ' ❌' }
            ],
            [
              { text: 'I will goes', italic: true },
              { text: ' ❌' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "2. Con 'be going to': ", bold: true },
            { text: "No olvides el verbo 'be' y el 'to'" }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am going to study', italic: true },
              { text: ' ✅' }
            ],
            [
              { text: 'I going to study', italic: true },
              { text: ' ❌' }
            ],
            [
              { text: 'I am going study', italic: true },
              { text: ' ❌' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Con Present Continuous: ', bold: true },
            { text: 'Siempre incluye -ing y un marcador de tiempo futuro' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm leaving tomorrow", italic: true },
              { text: ' ✅' }
            ],
            [
              { text: 'I leave tomorrow', italic: true },
              { text: ' ❌ (presente simple, menos común)' }
            ],
            [
              { text: "I'm leaving", italic: true },
              { text: ' ❌ (sin marcador de tiempo, suena como presente)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "I think it ___ rain tomorrow.",
      options: ["is going to", "will", "is", "going to"],
      correctAnswer: 1,
      explanation: "Correcto: Predicción basada en opinión, no evidencia → 'will'. Usamos 'will' cuando damos nuestra opinión sobre el futuro sin evidencia concreta."
    },
    {
      question: "Look at those clouds! It ___ rain.",
      options: ["is going to", "will", "are going to", "was going to"],
      correctAnswer: 0,
      explanation: "Correcto: Predicción con evidencia visible → 'is going to'. Hay nubes negras que indican que va a llover, por lo tanto usamos 'going to'."
    },
    {
      question: "I'm tired. I ___ go to bed.",
      options: ["will", "am going to", "am", "go"],
      correctAnswer: 0,
      explanation: "Correcto: Decisión espontánea tomada en el momento → 'will'. La persona acaba de darse cuenta de que está cansada y decide en ese momento ir a dormir."
    },
    {
      question: "We ___ dinner with Sarah tonight. The reservation is at 8.",
      options: ["are going to have", "are having", "will have", "have"],
      correctAnswer: 1,
      explanation: "Correcto: Plan confirmado con reserva hecha → presente continuo 'are having'. La reserva indica que es un arreglo concreto y definitivo."
    },
    {
      question: "She ___ study medicine next year. She decided it months ago.",
      options: ["is going to", "will", "is studying", "was going to"],
      correctAnswer: 0,
      explanation: "Correcto: Intención ya planeada → 'is going to'. La frase 'decided it months ago' indica que es un plan previo, no una decisión espontánea."
    },
    {
      question: "Don't worry, I ___ help you with your project.",
      options: ["will", "am helping", "am going to", "was"],
      correctAnswer: 0,
      explanation: "Correcto: Promesa → 'will'. Cuando hacemos una promesa o nos ofrecemos a ayudar en el momento, usamos 'will'."
    },
    {
      question: "They ___ a new house next month. They already found one.",
      options: ["are going to buy", "will buy", "are buying", "buy"],
      correctAnswer: 0,
      explanation: "Correcto: Plan decidido previamente → 'are going to buy'. 'Already found one' indica que ya tienen el plan desde antes."
    },
    {
      question: "We ___ to Spain next week. Our tickets are ready.",
      options: ["will go", "are flying", "going to", "are going to fly"],
      correctAnswer: 1,
      explanation: "Correcto: Plan concreto y organizado con boletos comprados → 'are flying' (presente continuo). Los boletos indican un arreglo definitivo."
    },
    {
      question: "The phone is ringing! I ___ answer it!",
      options: ["will", "am going to", "am", "was"],
      correctAnswer: 0,
      explanation: "Correcto: Decisión espontánea → 'will'. La persona decide en el momento contestar el teléfono, no lo había planeado antes."
    },
    {
      question: "Are you ___ the party tomorrow night?",
      options: ["coming to", "come to", "going to come to", "will come to"],
      correctAnswer: 0,
      explanation: "Correcto: Arreglo confirmado para evento planificado → presente continuo 'Are you coming to...?'. Se pregunta sobre un plan social ya establecido."
    }
  ]
};

