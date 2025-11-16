import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson9: LessonData = {
  id: 9,
  title: "El Presente Simple — Rutinas, hábitos y hechos generales",
  description: "El Presente Simple es uno de los tiempos más importantes del inglés. Se utiliza constantemente para hablar de rutinas, hábitos, verdades universales y hechos que se repiten. Domina su estructura, las diferencias entre los sujetos, y cómo formar oraciones afirmativas, negativas e interrogativas.",
  welcomeEmoji: "🧩",
  pageTitle: "English Learning - El Presente Simple",
  metaDescription: "Domina el Presente Simple en inglés. Aprende a formar oraciones afirmativas, negativas e interrogativas, usar do/does, adverbios de frecuencia y hacer preguntas con Wh- questions.",
  learningPoints: [
    "Reconocer cuándo usar el Presente Simple correctamente",
    "Formar oraciones afirmativas, negativas e interrogativas",
    "Entender la diferencia entre 'do' y 'does'",
    "Usar correctamente los adverbios de frecuencia según el tipo de verbo",
    "Formular preguntas con palabras interrogativas (Wh- questions)",
    "Hablar con precisión sobre tus hábitos, rutinas y hechos generales"
  ],
  content: [
    {
      topic: "Cuándo se usa el Presente Simple",
      explanation: "El **Present Simple** se utiliza para expresar acciones que se repiten, hechos generales y estados permanentes. Es fundamental entender en qué contextos aplicarlo correctamente.",
      examples: [
        {
          type: 'paragraph',
          content: [
            { text: '1. Rutinas y hábitos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I wake up at 7 a.m.', italic: true },
              { text: ' (Me levanto a las 7 a.m.)' }
            ],
            [
              { text: 'She goes to the gym every day.', italic: true },
              { text: ' (Ella va al gimnasio todos los días.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Hechos generales o verdades universales:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The sun rises in the east.', italic: true },
              { text: ' (El sol sale por el este.)' }
            ],
            [
              { text: 'Water boils at 100°C.', italic: true },
              { text: ' (El agua hierve a 100°C.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Estados permanentes o sentimientos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I love my job.', italic: true },
              { text: ' (Amo mi trabajo.)' }
            ],
            [
              { text: 'He knows the answer.', italic: true },
              { text: ' (Él sabe la respuesta.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota importante: ', bold: true },
            { text: 'El Presente Simple ' },
            { text: 'NO', bold: true },
            { text: ' se usa para acciones que están ocurriendo en este momento. Para eso se usa el Presente Continuo.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos comparativos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I drink coffee every morning.', italic: true },
              { text: ' (Presente Simple - hábito)' }
            ],
            [
              { text: 'I am drinking coffee right now.', italic: true },
              { text: ' (Presente Continuo - acción en progreso)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Estructura de las oraciones",
      explanation: "El Presente Simple tiene tres estructuras básicas: afirmativa, negativa e interrogativa. Es crucial entender cuándo el verbo lleva '-s' o '-es' y cuándo usar los auxiliares 'do' y 'does'.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de estructuras',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de oración', 'Estructura', 'Ejemplo'],
          rows: [
            ['Afirmativa', "Sujeto + Verbo (en base) (+s / +es con he, she, it)", 'She works in an office.'],
            ['Negativa', "Sujeto + don't / doesn't + Verbo (en base)", "He doesn't like coffee."],
            ['Interrogativa', 'Do / Does + Sujeto + Verbo (en base) + ?', 'Do you play tennis?']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '📌 ', emoji: '📌' },
            { text: 'Regla clave: ', bold: true },
            { text: 'Solo se agrega la ' },
            { text: '-s', bold: true },
            { text: ' o ' },
            { text: '-es', bold: true },
            { text: ' al verbo en la ' },
            { text: 'tercera persona singular (he, she, it)', bold: true },
            { text: ' en oraciones afirmativas.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He works', italic: true },
              { text: ' (Él trabaja)' }
            ],
            [
              { text: 'She studies', italic: true },
              { text: ' (Ella estudia)' }
            ],
            [
              { text: 'It rains', italic: true },
              { text: ' (Llueve)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true },
            { text: "Cuando usas 'does' o 'doesn't', el verbo principal " },
            { text: 'NO', bold: true },
            { text: " lleva '-s' ni '-es':" }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Does she works?', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Does she work?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "He doesn't likes pizza.", italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "He doesn't like pizza.", italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Terminaciones del verbo en tercera persona singular",
      explanation: "En la tercera persona singular (he, she, it), el verbo sufre cambios en su terminación. Hay tres reglas principales que debes conocer para formar correctamente estas terminaciones.",
      examples: [
        {
          type: 'title',
          text: 'Reglas de terminación',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. La mayoría de los verbos → + ', bold: true },
            { text: "'s'", code: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'work → work', code: true },
              { text: 's', bold: true, code: true }
            ],
            [
              { text: 'play → play', code: true },
              { text: 's', bold: true, code: true }
            ],
            [
              { text: 'eat → eat', code: true },
              { text: 's', bold: true, code: true }
            ],
            [
              { text: 'sleep → sleep', code: true },
              { text: 's', bold: true, code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Verbos que terminan en -ch, -sh, -ss, -x, -o → + ', bold: true },
            { text: "'es'", code: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'watch → watch', code: true },
              { text: 'es', bold: true, code: true }
            ],
            [
              { text: 'wash → wash', code: true },
              { text: 'es', bold: true, code: true }
            ],
            [
              { text: 'pass → pass', code: true },
              { text: 'es', bold: true, code: true }
            ],
            [
              { text: 'fix → fix', code: true },
              { text: 'es', bold: true, code: true }
            ],
            [
              { text: 'go → go', code: true },
              { text: 'es', bold: true, code: true }
            ],
            [
              { text: 'do → do', code: true },
              { text: 'es', bold: true, code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: "3. Verbos que terminan en consonante + 'y' → cambia 'y' por ", bold: true },
            { text: "'ies'", code: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'study → stud', code: true },
              { text: 'ies', bold: true, code: true }
            ],
            [
              { text: 'try → tr', code: true },
              { text: 'ies', bold: true, code: true }
            ],
            [
              { text: 'carry → carr', code: true },
              { text: 'ies', bold: true, code: true }
            ],
            [
              { text: 'fly → fl', code: true },
              { text: 'ies', bold: true, code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Excepción: ', bold: true },
            { text: 'Si el verbo termina en ' },
            { text: 'vocal + y', bold: true },
            { text: ", solo se agrega 's':" }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'play → plays', code: true }
            ],
            [
              { text: 'say → says', code: true }
            ],
            [
              { text: 'enjoy → enjoys', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos en oraciones:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He ', italic: true },
              { text: 'works', bold: true, italic: true },
              { text: ' at a bank.', italic: true },
              { text: ' (Él trabaja en un banco.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'watches', bold: true, italic: true },
              { text: ' TV every night.', italic: true },
              { text: ' (Ella ve TV todas las noches.)' }
            ],
            [
              { text: 'It ', italic: true },
              { text: 'flies', bold: true, italic: true },
              { text: ' very high.', italic: true },
              { text: ' (Vuela muy alto.)' }
            ],
            [
              { text: 'He ', italic: true },
              { text: 'studies', bold: true, italic: true },
              { text: ' English.', italic: true },
              { text: ' (Él estudia inglés.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Uso de los auxiliares 'do' y 'does'",
      explanation: "En el Presente Simple, los auxiliares **do** y **does** se utilizan para formar oraciones negativas e interrogativas. La elección entre 'do' y 'does' depende del sujeto de la oración.",
      examples: [
        {
          type: 'title',
          text: 'Regla básica',
          emoji: '🔑',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "'Do'", bold: true },
              { text: ' se usa con: ' },
              { text: 'I, you, we, they', italic: true }
            ],
            [
              { text: "'Does'", bold: true },
              { text: ' se usa con: ' },
              { text: 'he, she, it', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Estructura negativa:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "Sujeto + don't / doesn't + verbo (en forma base)",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos negativos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I don't like pizza.", italic: true },
              { text: ' (No me gusta la pizza.)' }
            ],
            [
              { text: "You don't work here.", italic: true },
              { text: ' (Tú no trabajas aquí.)' }
            ],
            [
              { text: "We don't speak French.", italic: true },
              { text: ' (No hablamos francés.)' }
            ],
            [
              { text: "They don't play football.", italic: true },
              { text: ' (Ellos no juegan fútbol.)' }
            ],
            [
              { text: "He doesn't like coffee.", italic: true },
              { text: ' (A él no le gusta el café.)' }
            ],
            [
              { text: "She doesn't work on Sundays.", italic: true },
              { text: ' (Ella no trabaja los domingos.)' }
            ],
            [
              { text: "It doesn't rain much here.", italic: true },
              { text: ' (No llueve mucho aquí.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Estructura interrogativa:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Do / Does + sujeto + verbo (en forma base) + ?',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos interrogativos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Do you live in London?', italic: true },
              { text: ' (¿Vives en Londres?)' }
            ],
            [
              { text: 'Do they speak Spanish?', italic: true },
              { text: ' (¿Hablan español?)' }
            ],
            [
              { text: 'Does she work here?', italic: true },
              { text: ' (¿Ella trabaja aquí?)' }
            ],
            [
              { text: 'Does he play tennis?', italic: true },
              { text: ' (¿Él juega tenis?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '🧠 ', emoji: '🧠' },
            { text: 'Recuerda: ', bold: true },
            { text: 'El verbo principal ' },
            { text: 'siempre va en forma base', bold: true },
            { text: " cuando usas 'do' o 'does'." }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Does she works?', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Does she work?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "He doesn't likes it.", italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "He doesn't like it.", italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Wh- Questions (Palabras de Pregunta)",
      explanation: "Las **Wh- Questions** (o preguntas con palabras interrogativas) se usan para obtener **información específica**, no solo respuestas de 'sí' o 'no'. Estas preguntas comienzan con palabras como *what, where, when, why, who,* y *how*.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de palabras interrogativas',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Palabra', 'Significado', 'Uso', 'Ejemplo'],
          rows: [
            ['What', 'Qué', 'Preguntar por cosas', 'What do you do? (¿Qué haces?)'],
            ['Where', 'Dónde', 'Preguntar por lugar', 'Where do they live? (¿Dónde viven?)'],
            ['When', 'Cuándo', 'Preguntar por tiempo', 'When does he start work? (¿Cuándo empieza a trabajar?)'],
            ['Why', 'Por qué', 'Preguntar por razón', 'Why do you study English? (¿Por qué estudias inglés?)'],
            ['Who', 'Quién', 'Preguntar por persona', 'Who does she call? (¿A quién llama?)'],
            ['How', 'Cómo', 'Preguntar por manera/modo', 'How do you get to school? (¿Cómo llegas a la escuela?)']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Estructura:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Palabra interrogativa + do/does + sujeto + verbo (en base) + ?',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos completos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'What do you eat for breakfast?', italic: true },
              { text: ' (¿Qué comes en el desayuno?)' }
            ],
            [
              { text: 'Where does she work?', italic: true },
              { text: ' (¿Dónde trabaja ella?)' }
            ],
            [
              { text: 'When do they arrive?', italic: true },
              { text: ' (¿Cuándo llegan?)' }
            ],
            [
              { text: 'Why does he study so much?', italic: true },
              { text: ' (¿Por qué estudia tanto?)' }
            ],
            [
              { text: 'Who do you live with?', italic: true },
              { text: ' (¿Con quién vives?)' }
            ],
            [
              { text: 'How does it work?', italic: true },
              { text: ' (¿Cómo funciona?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: "Caso especial con 'Who' como sujeto: ", bold: true },
            { text: "Cuando 'who' es el sujeto de la pregunta, " },
            { text: 'NO', bold: true },
            { text: " se usa 'do' o 'does':" }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Who likes pizza?', italic: true },
              { text: ' (¿A quién le gusta la pizza?)' }
            ],
            [
              { text: 'Who works here?', italic: true },
              { text: ' (¿Quién trabaja aquí?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Respuestas esperadas:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'What do you do?', italic: true },
              { text: ' → ' },
              { text: "I'm a teacher.", italic: true },
              { text: ' (Soy profesor.)' }
            ],
            [
              { text: 'Where do you live?', italic: true },
              { text: ' → ' },
              { text: 'I live in Madrid.', italic: true },
              { text: ' (Vivo en Madrid.)' }
            ],
            [
              { text: 'When does she study?', italic: true },
              { text: ' → ' },
              { text: 'She studies at night.', italic: true },
              { text: ' (Ella estudia de noche.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Adverbios de Frecuencia",
      explanation: "Los **adverbios de frecuencia** expresan **con qué frecuencia** ocurre una acción. Su posición en la oración es muy importante: van **antes del verbo principal**, pero **después del verbo 'to be'**.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de adverbios de frecuencia',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Adverbio', 'Traducción', 'Frecuencia', 'Ejemplo'],
          rows: [
            ['Always', 'siempre', '100%', 'I always drink coffee in the morning.'],
            ['Usually', 'usualmente', '80-90%', 'She usually walks to work.'],
            ['Often', 'a menudo', '60-70%', 'We often go out on weekends.'],
            ['Sometimes', 'a veces', '40-50%', 'They sometimes eat sushi.'],
            ['Rarely', 'raramente', '10-20%', 'He rarely watches TV.'],
            ['Never', 'nunca', '0%', 'I never smoke.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Posición 1: Antes del verbo principal', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Sujeto + adverbio + verbo principal',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'always', bold: true, italic: true },
              { text: ' drink coffee.', italic: true },
              { text: ' (Siempre tomo café.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'usually', bold: true, italic: true },
              { text: ' works late.', italic: true },
              { text: ' (Ella usualmente trabaja tarde.)' }
            ],
            [
              { text: 'He ', italic: true },
              { text: 'never', bold: true, italic: true },
              { text: ' eats meat.', italic: true },
              { text: ' (Él nunca come carne.)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'often', bold: true, italic: true },
              { text: ' visit our parents.', italic: true },
              { text: ' (A menudo visitamos a nuestros padres.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: "Posición 2: Después del verbo 'to be'", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "Sujeto + to be + adverbio",
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'He is ', italic: true },
              { text: 'always', bold: true, italic: true },
              { text: ' late.', italic: true },
              { text: ' (Él siempre llega tarde.)' }
            ],
            [
              { text: 'They are ', italic: true },
              { text: 'usually', bold: true, italic: true },
              { text: ' happy.', italic: true },
              { text: ' (Ellos usualmente están felices.)' }
            ],
            [
              { text: 'I am ', italic: true },
              { text: 'never', bold: true, italic: true },
              { text: ' tired.', italic: true },
              { text: ' (Nunca estoy cansado.)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'often', bold: true, italic: true },
              { text: ' busy.', italic: true },
              { text: ' (Ella a menudo está ocupada.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla mnemotécnica: ', bold: true },
            { text: "Si el verbo es " },
            { text: "'to be'", code: true },
            { text: ' (am, is, are), el adverbio va ' },
            { text: 'DESPUÉS', bold: true },
            { text: '. Si es ' },
            { text: 'cualquier otro verbo', bold: true },
            { text: ', el adverbio va ' },
            { text: 'ANTES', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Otros adverbios de frecuencia (con posición flexible):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Algunos adverbios pueden ir al principio o al final de la oración:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Sometimes I go to the gym.', italic: true },
              { text: ' / ' },
              { text: 'I go to the gym sometimes.', italic: true }
            ],
            [
              { text: 'Every day she reads a book.', italic: true },
              { text: ' / ' },
              { text: 'She reads a book every day.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos completos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I always wake up at 7 a.m.', italic: true },
              { text: ' (Siempre me despierto a las 7 a.m.)' }
            ],
            [
              { text: 'She usually studies after dinner.', italic: true },
              { text: ' (Ella usualmente estudia después de cenar.)' }
            ],
            [
              { text: 'They are often late.', italic: true },
              { text: ' (Ellos a menudo llegan tarde.)' }
            ],
            [
              { text: 'He never drinks alcohol.', italic: true },
              { text: ' (Él nunca bebe alcohol.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Ejemplos completos en contexto",
      explanation: "Veamos cómo se combinan todos los elementos del Presente Simple en ejemplos completos: oraciones afirmativas, negativas, interrogativas, con adverbios de frecuencia y preguntas Wh-.",
      examples: [
        {
          type: 'title',
          text: 'Ejemplo 1: Hábito diario',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Afirmativa: ', bold: true },
              { text: 'She studies English every day.', italic: true },
              { text: ' (Ella estudia inglés todos los días.)' }
            ],
            [
              { text: 'Negativa: ', bold: true },
              { text: "She doesn't study on Sundays.", italic: true },
              { text: ' (Ella no estudia los domingos.)' }
            ],
            [
              { text: 'Interrogativa: ', bold: true },
              { text: 'Does she study in the morning?', italic: true },
              { text: ' (¿Estudia ella por la mañana?)' }
            ],
            [
              { text: 'Wh-question: ', bold: true },
              { text: 'When does she study?', italic: true },
              { text: ' (¿Cuándo estudia ella?)' }
            ],
            [
              { text: 'Con adverbio: ', bold: true },
              { text: 'She usually studies after dinner.', italic: true },
              { text: ' (Ella usualmente estudia después de cenar.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 2: Rutina de trabajo',
          emoji: '💼',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Afirmativa: ', bold: true },
              { text: 'He works in an office.', italic: true },
              { text: ' (Él trabaja en una oficina.)' }
            ],
            [
              { text: 'Negativa: ', bold: true },
              { text: "He doesn't work on weekends.", italic: true },
              { text: ' (Él no trabaja los fines de semana.)' }
            ],
            [
              { text: 'Interrogativa: ', bold: true },
              { text: 'Does he work full-time?', italic: true },
              { text: ' (¿Trabaja él tiempo completo?)' }
            ],
            [
              { text: 'Wh-question: ', bold: true },
              { text: 'Where does he work?', italic: true },
              { text: ' (¿Dónde trabaja él?)' }
            ],
            [
              { text: 'Con adverbio: ', bold: true },
              { text: 'He often works late.', italic: true },
              { text: ' (Él a menudo trabaja hasta tarde.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 3: Preferencias personales',
          emoji: '🍕',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Afirmativa: ', bold: true },
              { text: 'They like pizza.', italic: true },
              { text: ' (A ellos les gusta la pizza.)' }
            ],
            [
              { text: 'Negativa: ', bold: true },
              { text: "They don't like vegetables.", italic: true },
              { text: ' (No les gustan las verduras.)' }
            ],
            [
              { text: 'Interrogativa: ', bold: true },
              { text: 'Do they like Italian food?', italic: true },
              { text: ' (¿Les gusta la comida italiana?)' }
            ],
            [
              { text: 'Wh-question: ', bold: true },
              { text: 'What do they like to eat?', italic: true },
              { text: ' (¿Qué les gusta comer?)' }
            ],
            [
              { text: 'Con adverbio: ', bold: true },
              { text: 'They sometimes eat out.', italic: true },
              { text: ' (A veces comen fuera.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Ejemplo 4: Con el verbo 'to be' + adverbio",
          emoji: '😊',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Afirmativa: ', bold: true },
              { text: 'I am always happy.', italic: true },
              { text: ' (Siempre estoy feliz.)' }
            ],
            [
              { text: 'Negativa: ', bold: true },
              { text: 'I am never sad.', italic: true },
              { text: ' (Nunca estoy triste.)' }
            ],
            [
              { text: 'Interrogativa: ', bold: true },
              { text: 'Are you usually busy?', italic: true },
              { text: ' (¿Usualmente estás ocupado?)' }
            ],
            [
              { text: 'Wh-question: ', bold: true },
              { text: 'Why are you so happy?', italic: true },
              { text: ' (¿Por qué estás tan feliz?)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diálogo completo',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'What do you do?', italic: true },
              { text: ' (¿A qué te dedicas?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'I work as a teacher.', italic: true },
              { text: ' (Trabajo como profesor.)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'Do you like your job?', italic: true },
              { text: ' (¿Te gusta tu trabajo?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'Yes, I love it! I usually work with children.', italic: true },
              { text: ' (¡Sí, me encanta! Usualmente trabajo con niños.)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'When do you start work?', italic: true },
              { text: ' (¿Cuándo empiezas a trabajar?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'I always start at 8 a.m.', italic: true },
              { text: ' (Siempre empiezo a las 8 a.m.)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "She ___ to the gym every morning.",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: 1,
      explanation: "Tercera persona singular (she) → se agrega '-es' al verbo 'go' → 'goes'. En el Presente Simple, los verbos con he/she/it llevan '-s' o '-es' en oraciones afirmativas."
    },
    {
      question: "They ___ like pizza.",
      options: ["don't", "doesn't", "aren't", "isn't"],
      correctAnswer: 0,
      explanation: "Sujeto plural (they) → se usa 'do not' (don't). El auxiliar 'doesn't' solo se usa con he/she/it."
    },
    {
      question: "Does he ___ football?",
      options: ["plays", "play", "playing", "played"],
      correctAnswer: 1,
      explanation: "Después de 'does', el verbo siempre va en forma base (play). No se agrega '-s' porque el auxiliar 'does' ya indica tercera persona singular."
    },
    {
      question: "I ___ coffee in the morning.",
      options: ["drink", "drinks", "drinking", "drank"],
      correctAnswer: 0,
      explanation: "Primera persona singular (I) → verbo en forma base sin cambios. Solo se agrega '-s' o '-es' con he/she/it."
    },
    {
      question: "She ___ her homework every day.",
      options: ["do", "does", "did", "done"],
      correctAnswer: 1,
      explanation: "Tercera persona singular (she) → 'does' es la forma correcta del verbo 'do' para he/she/it en el Presente Simple."
    },
    {
      question: "Where ___ they live?",
      options: ["do", "does", "are", "is"],
      correctAnswer: 0,
      explanation: "Sujeto plural (they) → se usa 'do' para formar la pregunta. 'Does' solo se usa con he/she/it."
    },
    {
      question: "He doesn't ___ TV.",
      options: ["watches", "watch", "watching", "watched"],
      correctAnswer: 1,
      explanation: "Después de 'doesn't', el verbo va en forma base (watch), sin '-es'. El auxiliar negativo ya marca la tercera persona."
    },
    {
      question: "I ___ go to the beach on weekends.",
      options: ["always", "often", "rarely", "never"],
      correctAnswer: 1,
      explanation: "Todas las opciones son adverbios de frecuencia válidos gramaticalmente. 'Often' (a menudo) indica una frecuencia común y positiva, que es la más apropiada en este contexto."
    },
    {
      question: "She is ___ late to work.",
      options: ["always", "usually", "often", "sometimes"],
      correctAnswer: 0,
      explanation: "Con el verbo 'to be', el adverbio de frecuencia va DESPUÉS del verbo. Todas las opciones son correctas gramaticalmente, pero 'always' es la más enfática."
    },
    {
      question: "Why ___ you study English?",
      options: ["do", "does", "are", "have"],
      correctAnswer: 0,
      explanation: "Segunda persona (you) → se usa 'do' para formar preguntas Wh- en Presente Simple. 'Does' solo se usa con he/she/it."
    }
  ]
};

