import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson11: LessonData = {
  id: 11,
  title: "Tiempos Verbales del Pasado",
  description: "Domina los tres tiempos verbales más importantes del pasado en inglés: Past Simple para acciones completadas, Past Continuous para acciones en progreso en el pasado, y Present Perfect para conectar el pasado con el presente. Aprende sus estructuras, usos, marcadores de tiempo y cómo diferenciarlos correctamente.",
  welcomeEmoji: "🕰️",
  pageTitle: "English Learning - Mastering the Past: Simple Past, Past Continuous & Present Perfect",
  metaDescription: "Aprende a dominar los tiempos verbales del pasado en inglés: Past Simple, Past Continuous y Present Perfect. Descubre sus estructuras, verbos irregulares, marcadores de tiempo y cuándo usar cada uno.",
  learningPoints: [
    "Formar y usar correctamente el Pasado Simple, el Pasado Continuo y el Presente Perfecto",
    "Identificar y aplicar los marcadores de tiempo característicos de cada tiempo verbal",
    "Comprender las diferencias entre acciones completadas, en progreso o con conexión al presente",
    "Reconocer y utilizar correctamente los verbos irregulares más comunes",
    "Distinguir cuándo usar cada tiempo según el contexto y la intención comunicativa",
    "Aplicar correctamente las estructuras afirmativas, negativas e interrogativas de cada tiempo"
  ],
  content: [
    {
      topic: "Past Simple (Pasado Simple)",
      explanation: "El **Pasado Simple** se usa para hablar de **acciones completadas en el pasado**, sin conexión con el presente. Es el tiempo que responde a la pregunta: *What happened?* (¿Qué pasó?). Es fundamental para narrar eventos, contar historias y describir situaciones que ya terminaron.",
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
          code: "Subject + verb (past form)",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: 'I visited my grandparents yesterday.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "Subject + did not (didn't) + base form of the verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: "I didn't visit my grandparents yesterday.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "Did + subject + base form of the verb?",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ' },
            { text: 'Did you visit your grandparents yesterday?', italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Verbos regulares',
          emoji: '🔤',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los verbos regulares forman el pasado añadiendo ' },
            { text: '-ed', bold: true },
            { text: ' al final.' }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Infinitivo', 'Pasado', 'Ejemplo'],
          rows: [
            ['work', 'worked', 'I worked yesterday.'],
            ['play', 'played', 'She played tennis.'],
            ['stop', 'stopped', 'He stopped the car.'],
            ['love', 'loved', 'They loved the movie.'],
            ['want', 'wanted', 'We wanted ice cream.']
          ]
        } as TableData,
        {
          type: 'title',
          text: 'Importante (Spelling)',
          emoji: '🔎',
          level: 4
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Verbos terminados en ' },
              { text: '-e', bold: true },
              { text: ' → solo agregan ' },
              { text: '-d', bold: true },
              { text: ': ' },
              { text: 'love → loved', italic: true }
            ],
            [
              { text: 'Verbos terminados en ' },
              { text: 'consonante + y', bold: true },
              { text: ' → cambian la ' },
              { text: 'y', italic: true },
              { text: ' por ' },
              { text: 'i', italic: true },
              { text: ' y agregan ' },
              { text: '-ed', bold: true },
              { text: ': ' },
              { text: 'study → studied', italic: true }
            ],
            [
              { text: 'Verbos con patrón ' },
              { text: 'consonante-vocal-consonante', italic: true },
              { text: ' duplican la última consonante: ' },
              { text: 'stop → stopped', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Verbos irregulares esenciales',
          emoji: '⚡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los verbos irregulares cambian totalmente su forma. No agregan "-ed".' }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Infinitivo', 'Pasado Simple', 'Ejemplo'],
          rows: [
            ['go', 'went', 'I went to the park yesterday.'],
            ['see', 'saw', 'She saw a shooting star.'],
            ['eat', 'ate', 'We ate pizza last night.'],
            ['write', 'wrote', 'He wrote a poem.'],
            ['do', 'did', 'They did their homework.'],
            ['have', 'had', 'I had breakfast at 8.'],
            ['make', 'made', 'She made a cake.'],
            ['take', 'took', 'We took the bus.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Marcadores de tiempo comunes',
          emoji: '🕓',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "yesterday, last week/month/year, in 2010, ago",
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
              { text: 'I met him ' },
              { text: 'yesterday', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'They traveled to Spain ' },
              { text: 'last summer', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'She was born ' },
              { text: 'in 2010', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'We moved here ' },
              { text: 'five years ago', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Past Continuous (Pasado Continuo)",
      explanation: "El **Pasado Continuo** describe una **acción en progreso en un momento específico del pasado**. Responde a la pregunta: *What was happening?* (¿Qué estaba pasando?). Se usa principalmente para describir el contexto o fondo de una historia, y para mostrar acciones que fueron interrumpidas por otra acción más corta.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + was/were + verb-ing",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'I was reading a book.', italic: true }],
            [{ text: 'They were playing soccer.', italic: true }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: "I wasn't reading a book.", italic: true }],
            [{ text: "They weren't playing soccer.", italic: true }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Was I reading a book?', italic: true }],
            [{ text: 'Were they playing soccer?', italic: true }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Con ', italic: true },
            { text: 'I, he, she, it', italic: true },
            { text: ' → ', italic: true },
            { text: 'was', bold: true },
            { text: ' / Con ', italic: true },
            { text: 'you, we, they', italic: true },
            { text: ' → ', italic: true },
            { text: 'were', bold: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🌀',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Acciones en progreso en un momento específico del pasado:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'At 8 p.m., I was watching TV.', italic: true },
              { text: ' (A las 8 p.m., estaba viendo TV.)' }
            ],
            [
              { text: 'Yesterday at noon, she was working.', italic: true },
              { text: ' (Ayer al mediodía, ella estaba trabajando.)' }
            ],
            [
              { text: 'Last night at 10, they were studying.', italic: true },
              { text: ' (Anoche a las 10, estaban estudiando.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Interrupciones (Past Continuous + Past Simple):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'El ', italic: true },
            { text: 'Past Continuous', bold: true, italic: true },
            { text: ' (acción larga) se combina con el ', italic: true },
            { text: 'Past Simple', bold: true, italic: true },
            { text: ' (acción corta que interrumpe).', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I was sleeping ', italic: true },
              { text: 'when', bold: true },
              { text: ' the phone rang.', italic: true },
              { text: ' (Estaba durmiendo cuando sonó el teléfono.)' }
            ],
            [
              { text: 'While I was cooking, my friend arrived.', italic: true },
              { text: ' (Mientras cocinaba, mi amigo llegó.)' }
            ],
            [
              { text: 'They were talking ', italic: true },
              { text: 'when', bold: true },
              { text: ' the teacher entered.', italic: true },
              { text: ' (Estaban hablando cuando el profesor entró.)' }
            ],
            [
              { text: 'She was walking home ', italic: true },
              { text: 'when', bold: true },
              { text: ' it started to rain.', italic: true },
              { text: ' (Iba caminando a casa cuando empezó a llover.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Palabras clave: ', bold: true },
            { text: 'when', code: true },
            { text: ' (para la acción corta) y ', bold: true },
            { text: 'while', code: true },
            { text: ' (para la acción larga)', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Dos acciones simultáneas en el pasado:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'While I was reading, she was cooking.', italic: true },
              { text: ' (Mientras yo leía, ella cocinaba.)' }
            ],
            [
              { text: 'He was watching TV while I was cleaning.', italic: true },
              { text: ' (Él veía TV mientras yo limpiaba.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Present Perfect (Presente Perfecto)",
      explanation: "El **Presente Perfecto** conecta el pasado con el presente. No se enfoca en *cuándo* ocurrió algo, sino en el hecho de que ocurrió y que tiene relevancia ahora. Es uno de los tiempos más difíciles para hispanohablantes porque no tiene un equivalente exacto en español.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + have/has + past participle",
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'I/You/We/They', bold: true },
              { text: ' → ', italic: true },
              { text: 'have', bold: true }
            ],
            [
              { text: 'He/She/It', bold: true },
              { text: ' → ', italic: true },
              { text: 'has', bold: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have eaten breakfast.', italic: true },
              { text: ' (He desayunado.)' }
            ],
            [
              { text: 'She has studied all day.', italic: true },
              { text: ' (Ella ha estudiado todo el día.)' }
            ],
            [
              { text: 'We have finished the report.', italic: true },
              { text: ' (Hemos terminado el informe.)' }
            ],
            [
              { text: 'They have seen that movie.', italic: true },
              { text: ' (Han visto esa película.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Forma negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: "I haven't eaten breakfast.", italic: true }],
            [{ text: "She hasn't studied today.", italic: true }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Forma interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Have you eaten breakfast?', italic: true }],
            [{ text: 'Has she studied today?', italic: true }]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Experiencias de vida (sin tiempo específico):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have visited China.', italic: true },
              { text: ' (He visitado China.) [En algún momento de mi vida]' }
            ],
            [
              { text: 'Have you ever been to Paris?', italic: true },
              { text: ' (¿Alguna vez has estado en París?)' }
            ],
            [
              { text: 'She has never tried sushi.', italic: true },
              { text: ' (Ella nunca ha probado sushi.)' }
            ],
            [
              { text: 'We have seen this movie before.', italic: true },
              { text: ' (Hemos visto esta película antes.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Acciones con resultado presente:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She has broken her arm.', italic: true },
              { text: ' (Se ha roto el brazo.) [Y todavía lo tiene roto]' }
            ],
            [
              { text: 'I have lost my keys.', italic: true },
              { text: ' (He perdido mis llaves.) [Y aún no las encuentro]' }
            ],
            [
              { text: 'They have finished their homework.', italic: true },
              { text: ' (Han terminado su tarea.) [Ya está lista]' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Acciones que empezaron en el pasado y continúan:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have lived here ', italic: true },
              { text: 'for', bold: true },
              { text: ' 5 years.', italic: true },
              { text: ' (He vivido aquí durante 5 años.) [Y sigo viviendo aquí]' }
            ],
            [
              { text: 'She has worked at the company ', italic: true },
              { text: 'since', bold: true },
              { text: ' 2020.', italic: true },
              { text: ' (Trabaja en la empresa desde 2020.)' }
            ],
            [
              { text: 'We have known each other ', italic: true },
              { text: 'for', bold: true },
              { text: ' a long time.', italic: true },
              { text: ' (Nos conocemos desde hace mucho tiempo.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Marcadores de tiempo característicos',
          emoji: '🕓',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Marcador', 'Uso', 'Ejemplo'],
          rows: [
            ['ever', 'Alguna vez', 'Have you ever been to Paris?'],
            ['never', 'Nunca', 'I have never tried sushi.'],
            ['just', 'Recién/Justo', 'She has just arrived.'],
            ['already', 'Ya', 'We have already finished.'],
            ['yet', 'Aún (preguntas/negativas)', "Have you finished yet? / I haven't finished yet."],
            ['for', 'Duración', 'I have lived here for 5 years.'],
            ['since', 'Inicio del tiempo', 'I have lived here since 2020.'],
            ['recently', 'Recientemente', 'I have recently started learning French.'],
            ['so far', 'Hasta ahora', 'So far, everything has been great.']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Diferencia clave: ', bold: true },
            { text: 'for', code: true },
            { text: ' (duración) vs ', bold: true },
            { text: 'since', code: true },
            { text: ' (punto de inicio)', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'for 3 hours, for 2 weeks, for many years', italic: true }
            ],
            [
              { text: 'since Monday, since 2020, since I was a child', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Diferencias y comparaciones entre los tres tiempos",
      explanation: "Saber **cuándo usar cada tiempo** es fundamental. Aquí veremos las diferencias clave y cómo elegir el tiempo correcto según el contexto y la intención comunicativa.",
      examples: [
        {
          type: 'title',
          text: 'Tabla comparativa',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tiempo', 'Cuándo usarlo', 'Marcadores típicos', 'Ejemplo'],
          rows: [
            ['Past Simple', 'Acción completada en el pasado', 'yesterday, last week, ago, in 2010', 'I visited Paris last year.'],
            ['Past Continuous', 'Acción en progreso en el pasado', 'at 8pm, when, while', 'I was sleeping when you called.'],
            ['Present Perfect', 'Pasado conectado con presente', 'ever, never, just, already, yet', 'I have visited Paris twice.']
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
            { text: 'Past Simple vs Present Perfect:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I have seen him yesterday.', italic: true },
              { text: ' (Incorrecto: \'yesterday\' es tiempo específico)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I saw him yesterday.', italic: true },
              { text: ' (Past Simple)' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I visited Paris. It\'s beautiful.', italic: true },
              { text: ' (Mejor usar Present Perfect para conectar con el presente)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I have visited Paris. It\'s beautiful.', italic: true },
              { text: ' (Present Perfect: experiencia con conexión presente)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo comparativo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'lived', bold: true, italic: true },
              { text: ' in London in 2015.', italic: true },
              { text: ' (Ya no vivo allí)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'have lived', bold: true, italic: true },
              { text: ' in London for 3 years.', italic: true },
              { text: ' (Todavía vivo allí)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Past Simple vs Past Continuous:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'watched', bold: true, italic: true },
              { text: ' TV yesterday.', italic: true },
              { text: ' (Acción completada en el pasado)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'was watching', bold: true, italic: true },
              { text: ' TV when you called.', italic: true },
              { text: ' (Acción en progreso interrumpida)' }
            ],
            [
              { text: 'What ', italic: true },
              { text: 'did', bold: true, italic: true },
              { text: ' you ', italic: true },
              { text: 'do', bold: true, italic: true },
              { text: ' at 8pm?', italic: true },
              { text: ' (¿Qué hiciste?)' }
            ],
            [
              { text: 'What ', italic: true },
              { text: 'were', bold: true, italic: true },
              { text: ' you ', italic: true },
              { text: 'doing', bold: true, italic: true },
              { text: ' at 8pm?', italic: true },
              { text: ' (¿Qué estabas haciendo?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Regla de oro',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Si mencionas un ', italic: true },
              { text: 'tiempo específico del pasado', bold: true, italic: true },
              { text: ' (yesterday, last week, in 2010), usa ', italic: true },
              { text: 'Past Simple', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Si NO mencionas cuándo ocurrió, pero tiene ', italic: true },
              { text: 'relevancia presente', bold: true, italic: true },
              { text: ', usa ', italic: true },
              { text: 'Present Perfect', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Si describes ', italic: true },
              { text: 'lo que estaba pasando', bold: true, italic: true },
              { text: ' en un momento, usa ', italic: true },
              { text: 'Past Continuous', bold: true },
              { text: '.', italic: true }
            ]
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
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'What did you do yesterday?', italic: true },
              { text: ' (Past Simple: tiempo específico)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'I went to the gym and then I watched a movie.', italic: true }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'Have you ever been to Japan?', italic: true },
              { text: ' (Present Perfect: experiencia de vida)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'Yes, I have. I visited Tokyo in 2019.', italic: true },
              { text: ' (Present Perfect + Past Simple)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'What were you doing when I called?', italic: true },
              { text: ' (Past Continuous: acción en progreso)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'I was cooking dinner.', italic: true },
              { text: ' (Past Continuous)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Verbos irregulares esenciales y participios pasados",
      explanation: "Para dominar el Present Perfect, es fundamental conocer los **participios pasados** de los verbos irregulares. Muchos verbos tienen formas diferentes para el Past Simple y el Past Participle.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de verbos irregulares comunes',
          emoji: '📋',
          level: 3
        } as TitleData,
        "",
        {
          type: 'table',
          headers: ['Infinitivo', 'Past Simple', 'Past Participle', 'Traducción'],
          alignments: ['left', 'left', 'left', 'left'],
          rows: [
            ['be', 'was/were', 'been', 'ser/estar'],
            ['go', 'went', 'gone', 'ir'],
            ['do', 'did', 'done', 'hacer'],
            ['see', 'saw', 'seen', 'ver'],
            ['eat', 'ate', 'eaten', 'comer'],
            ['write', 'wrote', 'written', 'escribir'],
            ['take', 'took', 'taken', 'tomar'],
            ['give', 'gave', 'given', 'dar'],
            ['know', 'knew', 'known', 'saber'],
            ['speak', 'spoke', 'spoken', 'hablar'],
            ['break', 'broke', 'broken', 'romper'],
            ['choose', 'chose', 'chosen', 'elegir'],
            ['forget', 'forgot', 'forgotten', 'olvidar'],
            ['get', 'got', 'gotten (US)/got (UK)', 'obtener'],
            ['make', 'made', 'made', 'hacer'],
            ['have', 'had', 'had', 'tener'],
            ['come', 'came', 'come', 'venir'],
            ['become', 'became', 'become', 'convertirse'],
            ['buy', 'bought', 'bought', 'comprar'],
            ['bring', 'brought', 'brought', 'traer']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con Present Perfect',
          emoji: '✨',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have ', italic: true },
              { text: 'been', bold: true, italic: true },
              { text: ' to Italy.', italic: true },
              { text: ' (He estado en Italia.)' }
            ],
            [
              { text: 'She has ', italic: true },
              { text: 'gone', bold: true, italic: true },
              { text: ' to the store.', italic: true },
              { text: ' (Ella ha ido a la tienda.)' }
            ],
            [
              { text: 'Have you ', italic: true },
              { text: 'done', bold: true, italic: true },
              { text: ' your homework?', italic: true },
              { text: ' (¿Has hecho tu tarea?)' }
            ],
            [
              { text: 'We have ', italic: true },
              { text: 'seen', bold: true, italic: true },
              { text: ' that movie.', italic: true },
              { text: ' (Hemos visto esa película.)' }
            ],
            [
              { text: 'He has ', italic: true },
              { text: 'eaten', bold: true, italic: true },
              { text: ' all the cookies.', italic: true },
              { text: ' (Él ha comido todas las galletas.)' }
            ],
            [
              { text: 'They have ', italic: true },
              { text: 'written', bold: true, italic: true },
              { text: ' many books.', italic: true },
              { text: ' (Han escrito muchos libros.)' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'taken', bold: true, italic: true },
              { text: ' the test.', italic: true },
              { text: ' (He tomado el examen.)' }
            ],
            [
              { text: 'She has ', italic: true },
              { text: 'given', bold: true, italic: true },
              { text: ' me a gift.', italic: true },
              { text: ' (Ella me ha dado un regalo.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencia: been vs gone',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'He has ', italic: true },
              { text: 'been', bold: true, italic: true },
              { text: ' to Paris.', italic: true },
              { text: ' (Ha estado en París y ya regresó.)' }
            ],
            [
              { text: 'He has ', italic: true },
              { text: 'gone', bold: true, italic: true },
              { text: ' to Paris.', italic: true },
              { text: ' (Ha ido a París y todavía está allí.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Esta es una distinción importante en inglés británico.' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Errores comunes y cómo evitarlos",
      explanation: "Estos son los errores más frecuentes que cometen los estudiantes hispanohablantes al usar los tiempos del pasado. Conocerlos te ayudará a hablar con mayor precisión.",
      examples: [
        {
          type: 'title',
          text: 'Errores con Past Simple',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: "I didn't went to the party.", italic: true },
              { text: " (usar pasado después de 'didn't')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "I didn't go to the party.", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Did you saw him?', italic: true },
              { text: " (usar pasado en pregunta con 'did')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Did you see him?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "He don't come yesterday.", italic: true },
              { text: ' (usar presente en negativa del pasado)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'He didn\'t come yesterday.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She goed to school.', italic: true },
              { text: ' (inventar forma regular de verbo irregular)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She went to school.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores con Past Continuous',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I was cook when you called.', italic: true },
              { text: ' (olvidar -ing)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I was cooking when you called.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'They was playing soccer.', italic: true },
              { text: " (usar 'was' con plural)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'They were playing soccer.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'While I studied, he was watching TV.', italic: true },
              { text: ' (mezclar tiempos incorrectamente)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'While I was studying, he was watching TV.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I was knowing the answer.', italic: true },
              { text: ' (usar verbos de estado en continuo)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I knew the answer.', italic: true },
              { text: " (Los verbos como 'know', 'like', 'want' no se usan en continuo)" }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores con Present Perfect',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I have seen him yesterday.', italic: true },
              { text: ' (usar tiempo específico con Present Perfect)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I saw him yesterday.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She has went to the store.', italic: true },
              { text: ' (usar Past Simple en vez de Past Participle)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She has gone to the store.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Have you finish your homework?', italic: true },
              { text: ' (olvidar Past Participle)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Have you finished your homework?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I live here since 2020.', italic: true },
              { text: ' (usar presente simple en vez de Present Perfect)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I have lived here since 2020.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I have been to Paris in 2019.', italic: true },
              { text: ' (usar tiempo específico con Present Perfect)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I went to Paris in 2019.', italic: true },
              { text: ' o ' },
              { text: 'I have been to Paris.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'He has made his homework.', italic: true },
              { text: ' (confusión do/make)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'He has done his homework.', italic: true },
              { text: " ('do homework', no 'make homework')" }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Verbos que NO se usan en continuo (stative verbs)',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Estos verbos no se usan normalmente en Past Continuous:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Emociones: ', bold: true },
              { text: 'like, love, hate, prefer' }
            ],
            [
              { text: 'Pensamientos: ', bold: true },
              { text: 'know, understand, believe, think (opinión), remember' }
            ],
            [
              { text: 'Sentidos: ', bold: true },
              { text: 'see, hear, smell, taste' }
            ],
            [
              { text: 'Posesión: ', bold: true },
              { text: 'have (posesión), own, belong' }
            ]
          ]
        } as ListData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I was knowing the answer.', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I knew the answer.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She was liking the movie.', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She liked the movie.', italic: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "I ___ to the park yesterday.",
      options: ["go", "went", "gone", "going"],
      correctAnswer: 1,
      explanation: "Correcto: 'Yesterday' indica pasado simple. 'Go' es un verbo irregular que cambia a 'went' en pasado. La estructura es: Subject + past form."
    },
    {
      question: "She ___ TV when the phone rang.",
      options: ["watches", "was watching", "watched", "is watching"],
      correctAnswer: 1,
      explanation: "Correcto: Acción en progreso (Past Continuous: 'was watching') interrumpida por otra acción (Past Simple: 'rang'). La estructura es: was/were + verb-ing."
    },
    {
      question: "They ___ their homework already.",
      options: ["do", "have done", "did", "are doing"],
      correctAnswer: 1,
      explanation: "Correcto: 'Already' es un marcador típico de Present Perfect. La estructura es: have/has + past participle. 'Do' → 'done' (participio pasado)."
    },
    {
      question: "We ___ dinner at 7 p.m. yesterday.",
      options: ["ate", "eaten", "eat", "were eating"],
      correctAnswer: 0,
      explanation: "Correcto: Acción puntual y completa en un momento específico del pasado ('at 7 p.m. yesterday'). Se usa Past Simple. 'Eat' → 'ate' (verbo irregular)."
    },
    {
      question: "I ___ my keys. I can't find them.",
      options: ["have lost", "lost", "lose", "was losing"],
      correctAnswer: 0,
      explanation: "Correcto: El resultado de la acción pasada afecta al presente ('I can't find them'). Se usa Present Perfect: have + lost (past participle)."
    },
    {
      question: "While I ___, my brother cleaned the room.",
      options: ["was cook", "was cooking", "cooked", "cook"],
      correctAnswer: 1,
      explanation: "Correcto: 'While' introduce una acción larga en progreso en el pasado (Past Continuous: 'was cooking'). La estructura es: was/were + verb-ing."
    },
    {
      question: "He ___ to London last year.",
      options: ["went", "has gone", "goes", "going"],
      correctAnswer: 0,
      explanation: "Correcto: 'Last year' es un tiempo específico del pasado, por lo tanto se usa Past Simple: 'went'. Present Perfect no se usa con tiempos específicos."
    },
    {
      question: "Have you ___ your homework yet?",
      options: ["finished", "finish", "finishes", "finishing"],
      correctAnswer: 0,
      explanation: "Correcto: Present Perfect con 'yet' requiere el past participle del verbo: 'finished'. La estructura es: Have/Has + subject + past participle...?"
    },
    {
      question: "I ___ here since 2015.",
      options: ["lived", "have lived", "was living", "live"],
      correctAnswer: 1,
      explanation: "Correcto: Acción iniciada en el pasado que continúa hasta el presente. 'Since' indica el punto de inicio y requiere Present Perfect: 'have lived'."
    },
    {
      question: "They ___ soccer when it started to rain.",
      options: ["play", "were playing", "played", "have played"],
      correctAnswer: 1,
      explanation: "Correcto: Acción en progreso (Past Continuous: 'were playing') interrumpida por otra acción (Past Simple: 'started'). 'When' señala la interrupción."
    }
  ]
};

