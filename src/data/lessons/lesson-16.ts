import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson16: LessonData = {
  id: 16,
  title: "Expresar Gustos, Hábitos Pasados y Cantidad (Likes, Past Habits and Quantity)",
  description: "En esta lección aprenderás a expresar lo que te gusta o no te gusta hacer, a hablar de hábitos que tenías en el pasado pero que ya no tienes, y a usar correctamente palabras como much, many, some, any, a lot of, etc., según si el sustantivo es contable o incontable. Estas estructuras son fundamentales para comunicarte con naturalidad en inglés en situaciones cotidianas, desde conversaciones informales hasta textos escritos.",
  welcomeEmoji: "❤️",
  pageTitle: "English Learning - Expressing Likes, Past Habits and Quantity: Like/Love/Hate, Used To, Much/Many/Some/Any",
  metaDescription: "Aprende a expresar gustos y preferencias con like/love/hate + -ing, hablar de hábitos pasados con used to, y dominar el uso correcto de much, many, some, any, a lot of con sustantivos contables e incontables.",
  learningPoints: [
    "Expresar gustos, amores y odios usando verbos seguidos de la forma -ing (gerundio)",
    "Hablar de hábitos o situaciones pasadas que ya no ocurren con 'used to + verbo en infinitivo'",
    "Identificar sustantivos contables e incontables y usar las palabras correctas para indicar cantidad",
    "Usar many, much, few, little, some, any, a lot of correctamente según el contexto",
    "Evitar errores comunes que cometen los hispanohablantes al traducir literalmente del español al inglés",
    "Diferenciar entre 'few' y 'a few', y entre 'little' y 'a little' para expresar cantidad con el tono correcto"
  ],
  content: [
    {
      topic: "Expresar Gustos y Preferencias: like / love / hate / enjoy + verb-ing",
      explanation: "En inglés, cuando quieres decir que te gusta, amas, odias o disfrutas **hacer algo**, **no usas el verbo en infinitivo** (como en español: *'me gusta leer'*). En cambio, **se usa el verbo en forma de gerundio**: es decir, el verbo base + **-ing**.",
      examples: [
        {
          type: 'title',
          text: 'Verbos más comunes',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [{ text: 'Los verbos más comunes para expresar gustos son:' }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'like', bold: true }, { text: ' → gustar' }],
            [{ text: 'love', bold: true }, { text: ' → encantar' }],
            [{ text: 'hate', bold: true }, { text: ' → odiar' }],
            [{ text: 'enjoy', bold: true }, { text: ' → disfrutar' }]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Reglas importantes',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Enjoy', bold: true },
              { text: ' ' },
              { text: 'siempre', bold: true },
              { text: ' va seguido de ' },
              { text: '-ing', code: true },
              { text: '. Nunca se dice ' },
              { text: "'I enjoy to read'", italic: true },
              { text: '.' }
            ],
            [
              { text: 'Like, love y hate', bold: true },
              { text: ' pueden usarse con ' },
              { text: 'to + infinitivo', code: true },
              { text: ' en algunos contextos (especialmente en inglés británico), pero ' },
              { text: 'con -ing es más común y natural', bold: true },
              { text: ' cuando hablas de actividades generales o hábitos.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos correctos',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'like swimming', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' → Me gusta nadar.' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'loves cooking', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' → A ella le encanta cocinar.' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'hate waiting', bold: true, italic: true },
              { text: ' in line.', italic: true },
              { text: ' → Odian esperar en fila.' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'enjoy watching', bold: true, italic: true },
              { text: ' movies.', italic: true },
              { text: ' → Disfrutamos ver películas.' }
            ],
            [
              { text: 'He ', italic: true },
              { text: 'likes reading', bold: true, italic: true },
              { text: ' books.', italic: true },
              { text: ' → A él le gusta leer libros.' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'love dancing', bold: true, italic: true },
              { text: ' salsa.', italic: true },
              { text: ' → Me encanta bailar salsa.' }
            ],
            [
              { text: 'Do you ', italic: true },
              { text: 'enjoy running', bold: true, italic: true },
              { text: '?', italic: true },
              { text: ' → ¿Disfrutas correr?' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'hates cleaning', bold: true, italic: true },
              { text: ' the house.', italic: true },
              { text: ' → Ella odia limpiar la casa.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores comunes',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I like to swim'", italic: true },
              { text: ' → ' },
              { text: 'no es incorrecto', bold: true },
              { text: ', pero suena más como una elección puntual (' },
              { text: "'Hoy prefiero nadar en vez de correr'", italic: true },
              { text: ').' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I enjoy to swim'", italic: true },
              { text: ' → ' },
              { text: 'incorrecto', bold: true },
              { text: '. Siempre es ' },
              { text: "'I enjoy swimming'", italic: true },
              { text: '.' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'She loves to cook'", italic: true },
              { text: ' → No está mal, pero ' },
              { text: "'She loves cooking'", italic: true },
              { text: ' es más natural para hablar de un gusto general.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Regla práctica',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Cuando hablas de ', bold: true },
            { text: 'actividades que te gustan en general', bold: true },
            { text: ' (como un hobby o preferencia), usa ' },
            { text: 'verbo + -ing', code: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I like ', italic: true },
              { text: 'swimming', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Como actividad en general)' }
            ],
            [
              { text: 'I like ', italic: true },
              { text: 'to swim', bold: true, italic: true },
              { text: ' today.', italic: true },
              { text: ' (Decisión específica de hoy)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Para ', bold: true },
            { text: 'enjoy', bold: true },
            { text: ', ' },
            { text: 'siempre', bold: true },
            { text: ' usa ' },
            { text: '-ing', code: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I enjoy swimming.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I enjoy to swim.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Hábitos Pasados: used to + infinitivo",
      explanation: "La estructura **used to + verbo en infinitivo** se usa **exclusivamente para hablar de hábitos, rutinas o situaciones que eran verdaderas en el pasado pero que ya NO lo son**. No se refiere a una acción única, sino a algo que **ocurría repetidamente** o era **una condición permanente** en el pasado.",
      examples: [
        {
          type: 'title',
          text: "Características de 'used to'",
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Solo existe en pasado', bold: true },
              { text: '. No hay forma en presente (' },
              { text: "'I use to...'", italic: true },
              { text: ' es incorrecto).' }
            ],
            [
              { text: 'La forma negativa es ', bold: true },
              { text: "didn't use to", code: true, bold: true },
              { text: ' (o en inglés británico formal: ' },
              { text: 'used not to', italic: true },
              { text: ').' }
            ],
            [
              { text: 'La forma interrogativa: ', bold: true },
              { text: 'Did you use to...?', code: true, bold: true }
            ],
            [
              { text: 'Se pronuncia ', bold: true },
              { text: '/juːst tuː/', code: true },
              { text: ' (la \'d\' al final suena como \'t\').' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Pista mental',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Si puedes reemplazar en español por ', bold: true },
            { text: "'solía...'", code: true, bold: true },
            { text: ', entonces usa ' },
            { text: 'used to', code: true, bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en afirmativo',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'used to play', bold: true, italic: true },
              { text: ' soccer every weekend.', italic: true },
              { text: ' → Solía jugar fútbol cada fin de semana. (Pero ahora no lo hago)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'used to live', bold: true, italic: true },
              { text: ' in London.', italic: true },
              { text: ' → Ella solía vivir en Londres. (Ya no vive allí)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'used to eat', bold: true, italic: true },
              { text: ' together every day.', italic: true },
              { text: ' → Solíamos comer juntos todos los días.' }
            ],
            [
              { text: 'He ', italic: true },
              { text: 'used to work', bold: true, italic: true },
              { text: ' in a bank.', italic: true },
              { text: ' → Él solía trabajar en un banco.' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'used to be', bold: true, italic: true },
              { text: ' best friends.', italic: true },
              { text: ' → Ellos solían ser mejores amigos.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en interrogativo',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Did you use to', bold: true, italic: true },
              { text: ' play sports?', italic: true },
              { text: ' → ¿Solías hacer deportes?' }
            ],
            [
              { text: 'Did she use to', bold: true, italic: true },
              { text: ' live here?', italic: true },
              { text: ' → ¿Ella solía vivir aquí?' }
            ],
            [
              { text: 'Did they use to', bold: true, italic: true },
              { text: ' have a dog?', italic: true },
              { text: ' → ¿Ellos solían tener un perro?' }
            ],
            [
              { text: 'Where ', italic: true },
              { text: 'did you use to', bold: true, italic: true },
              { text: ' work?', italic: true },
              { text: ' → ¿Dónde solías trabajar?' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Nota: ', bold: true },
            { text: 'En preguntas, se usa ' },
            { text: 'use to', code: true, bold: true },
            { text: ' (sin \'d\') porque el \'did\' ya indica pasado.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en negativo',
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: "didn't use to", bold: true, italic: true },
              { text: ' like coffee.', italic: true },
              { text: ' → No solía gustarme el café. (Ahora sí me gusta)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: "didn't use to", bold: true, italic: true },
              { text: ' exercise.', italic: true },
              { text: ' → Ella no solía hacer ejercicio.' }
            ],
            [
              { text: 'They ', italic: true },
              { text: "didn't use to", bold: true, italic: true },
              { text: ' have a car.', italic: true },
              { text: ' → No solían tener auto.' }
            ],
            [
              { text: 'We ', italic: true },
              { text: "didn't use to", bold: true, italic: true },
              { text: ' go out much.', italic: true },
              { text: ' → No solíamos salir mucho.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Nota: ', bold: true },
            { text: 'En negativas, también se usa ' },
            { text: 'use to', code: true, bold: true },
            { text: ' (sin \'d\') porque el \'didn\'t\' ya indica pasado.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores comunes',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I use to play...'", italic: true },
              { text: ' → Incorrecto. Es ' },
              { text: 'used to', code: true, bold: true },
              { text: ' en afirmativo.' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'Did you used to...?'", italic: true },
              { text: ' → Incorrecto. Es ' },
              { text: 'Did you use to...?', code: true, bold: true },
              { text: ' (sin \'d\').' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I didn't used to...'", italic: true },
              { text: ' → Incorrecto. Es ' },
              { text: "didn't use to", code: true, bold: true },
              { text: ' (sin \'d\').' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I used to go to Paris last year.'", italic: true },
              { text: ' → Incorrecto para una acción única. Mejor: ' },
              { text: "'I went to Paris last year.'", italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Comparación: 'used to' vs pasado simple",
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Used to', 'Pasado simple'],
          rows: [
            ['Hábitos repetidos en el pasado', 'Acciones específicas completadas'],
            ['*I **used to play** tennis.* (Ya no juego)', '*I **played** tennis yesterday.* (Acción única)'],
            ['*She **used to live** here.* (Ya no vive aquí)', '*She **lived** here for 3 years.* (Período específico terminado)']
          ]
        } as TableData
      ]
    },
    {
      topic: "Sustantivos Contables e Incontables + Cantidad",
      explanation: "En inglés, los sustantivos se dividen en dos tipos: **contables** (cosas que puedes contar una por una) e **incontables** (cosas que no se pueden contar individualmente). Esto afecta qué palabras usas para indicar cantidad.",
      examples: [
        {
          type: 'title',
          text: 'Tipos de sustantivos',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Contables (countable nouns):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Cosas que puedes contar una por una: ', italic: true },
              { text: 'apple, book, idea, car, friend', italic: true }
            ],
            [
              { text: 'Tienen forma singular y plural: ', italic: true },
              { text: 'one apple, two apples', italic: true }
            ],
            [
              { text: 'Puedes usar números directamente: ', italic: true },
              { text: 'three books, five cars', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Incontables (uncountable nouns):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Cosas que ', italic: true },
              { text: 'no se pueden contar individualmente', bold: true, italic: true },
              { text: ': ', italic: true },
              { text: 'water, information, rice, advice, money, furniture', italic: true }
            ],
            [
              { text: 'No tienen plural', bold: true, italic: true },
              { text: ': ❌ ', italic: true },
              { text: 'waters, informations, advices', italic: true }
            ],
            [
              { text: 'No puedes usar números directamente: ❌ ', italic: true },
              { text: 'three waters', italic: true },
              { text: ' (pero sí: ', italic: true },
              { text: 'three bottles of water', italic: true },
              { text: ')', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de palabras de cantidad',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Palabra', 'Contables', 'Incontables', 'Uso típico', 'Ejemplo'],
          rows: [
            ['**many**', '✅', '❌', 'Preguntas/negativas', '*How many books? / I don\'t have many friends.*'],
            ['**much**', '❌', '✅', 'Preguntas/negativas', '*How much sugar? / I don\'t have much time.*'],
            ['**few**', '✅', '❌', 'Negativo (casi ninguno)', '*I have few options.*'],
            ['**a few**', '✅', '❌', 'Positivo (algunos)', '*I have a few friends.*'],
            ['**little**', '❌', '✅', 'Negativo (casi nada)', '*There\'s little hope.*'],
            ['**a little**', '❌', '✅', 'Positivo (algo)', '*I have a little money.*'],
            ['**some**', '✅', '✅', 'Afirmativas', '*I bought some apples / some water.*'],
            ['**any**', '✅', '✅', 'Negativas/interrogativas', '*Do you have any questions? / I don\'t have any patience.*'],
            ['**a lot of / lots of**', '✅', '✅', 'Ambos (afirmativas)', '*She has a lot of friends / a lot of homework.*']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Puntos importantes',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Some', bold: true },
              { text: ' también se usa en preguntas cuando ofreces o pides algo: ' },
              { text: "'Would you like some tea?'", italic: true }
            ],
            [
              { text: 'Any', bold: true },
              { text: ' puede usarse en afirmativas con significado de \'cualquiera\': ' },
              { text: "'You can choose any book.'", italic: true }
            ],
            [
              { text: 'A lot of / Lots of', bold: true },
              { text: ' son intercambiables y se usan principalmente en afirmativas.' }
            ],
            [
              { text: 'Much', bold: true },
              { text: ' y ' },
              { text: 'Many', bold: true },
              { text: ' raramente se usan en afirmativas (excepto con \'too\', \'so\', \'as\'): ' },
              { text: "'too much work', 'so many people'", italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con contables',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have ', italic: true },
              { text: 'a few', bold: true, italic: true },
              { text: ' friends in Madrid.', italic: true },
              { text: ' → Tengo algunos amigos (positivo)' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'few', bold: true, italic: true },
              { text: ' friends in Madrid.', italic: true },
              { text: ' → Tengo pocos amigos (casi ninguno, negativo)' }
            ],
            [
              { text: 'How ', italic: true },
              { text: 'many', bold: true, italic: true },
              { text: ' books do you have?', italic: true },
              { text: ' → ¿Cuántos libros tienes?' }
            ],
            [
              { text: "I don't have ", italic: true },
              { text: 'many', bold: true, italic: true },
              { text: ' books.', italic: true },
              { text: ' → No tengo muchos libros.' }
            ],
            [
              { text: 'Do you have ', italic: true },
              { text: 'any', bold: true, italic: true },
              { text: ' brothers?', italic: true },
              { text: ' → ¿Tienes hermanos?' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'some', bold: true, italic: true },
              { text: ' questions.', italic: true },
              { text: ' → Tengo algunas preguntas.' }
            ],
            [
              { text: 'She has ', italic: true },
              { text: 'a lot of', bold: true, italic: true },
              { text: ' ideas.', italic: true },
              { text: ' → Tiene muchas ideas.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con incontables',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "There's ", italic: true },
              { text: 'a little', bold: true, italic: true },
              { text: ' milk left.', italic: true },
              { text: ' → Queda un poco de leche (suficiente, positivo)' }
            ],
            [
              { text: "There's ", italic: true },
              { text: 'little', bold: true, italic: true },
              { text: ' milk left.', italic: true },
              { text: ' → Queda poca leche (casi nada, negativo)' }
            ],
            [
              { text: 'How ', italic: true },
              { text: 'much', bold: true, italic: true },
              { text: ' sugar do you need?', italic: true },
              { text: ' → ¿Cuánta azúcar necesitas?' }
            ],
            [
              { text: "I don't have ", italic: true },
              { text: 'much', bold: true, italic: true },
              { text: ' time.', italic: true },
              { text: ' → No tengo mucho tiempo.' }
            ],
            [
              { text: "I don't have ", italic: true },
              { text: 'any', bold: true, italic: true },
              { text: ' money.', italic: true },
              { text: ' → No tengo dinero.' }
            ],
            [
              { text: 'Would you like ', italic: true },
              { text: 'some', bold: true, italic: true },
              { text: ' coffee?', italic: true },
              { text: ' → ¿Quieres café? (ofrecimiento)' }
            ],
            [
              { text: 'She has ', italic: true },
              { text: 'a lot of', bold: true, italic: true },
              { text: ' experience.', italic: true },
              { text: ' → Tiene mucha experiencia.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Diferencia clave: 'a few/a little' vs 'few/little'",
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "Con 'a' = tono positivo o neutro:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have ', italic: true },
              { text: 'a few', bold: true, italic: true },
              { text: ' friends.', italic: true },
              { text: ' → Tengo algunos amigos (está bien, son suficientes)' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'a little', bold: true, italic: true },
              { text: ' money.', italic: true },
              { text: ' → Tengo un poco de dinero (suficiente para lo que necesito)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "Sin 'a' = tono negativo:", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have ', italic: true },
              { text: 'few', bold: true, italic: true },
              { text: ' friends.', italic: true },
              { text: ' → Tengo pocos amigos (casi ninguno, me siento solo)' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'little', bold: true, italic: true },
              { text: ' money.', italic: true },
              { text: ' → Tengo poco dinero (casi nada, no me alcanza)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Errores comunes',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I don't have many money.'", italic: true },
              { text: ' → ' },
              { text: 'Incorrecto', bold: true },
              { text: '. ' },
              { text: 'Money', italic: true },
              { text: ' es incontable. Debe ser: ' },
              { text: "'I don't have much money.'", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'How much books?'", italic: true },
              { text: ' → ' },
              { text: 'Incorrecto', bold: true },
              { text: '. ' },
              { text: 'Books', italic: true },
              { text: ' es contable. Debe ser: ' },
              { text: "'How many books?'", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I have few time.'", italic: true },
              { text: ' → ' },
              { text: 'Incorrecto', bold: true },
              { text: '. ' },
              { text: 'Time', italic: true },
              { text: ' es incontable. Debe ser: ' },
              { text: "'I have little time.'", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'There are a lot of informations.'", italic: true },
              { text: ' → ' },
              { text: 'Incorrecto', bold: true },
              { text: '. ' },
              { text: 'Information', italic: true },
              { text: ' es incontable (sin plural). Debe ser: ' },
              { text: "'There is a lot of information.'", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "'I need some advices.'", italic: true },
              { text: ' → ' },
              { text: 'Incorrecto', bold: true },
              { text: '. ' },
              { text: 'Advice', italic: true },
              { text: ' es incontable. Debe ser: ' },
              { text: "'I need some advice.'", italic: true },
              { text: ' o ' },
              { text: "'I need a piece of advice.'", italic: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cuál es la forma correcta de decir 'Me encanta bailar'?",
      options: ["I love to dance.", "I love dancing.", "I love dance.", "I loving to dance."],
      correctAnswer: 1,
      explanation: "Correcto: 'I love dancing.' Después de 'love', se usa el verbo en **-ing** para expresar una actividad general que te gusta. Aunque 'I love to dance' no es gramaticalmente incorrecto, **'I love dancing'** es más natural y común en este contexto."
    },
    {
      question: "¿Cuál oración es correcta para hablar de un hábito pasado que ya no haces?",
      options: ["I use to walk to school.", "I used to walked to school.", "I used to walk to school.", "I was used to walk to school."],
      correctAnswer: 2,
      explanation: "Correcto: 'I used to walk to school.' La estructura es **used to + verbo en infinitivo (sin to)**. 'Walk' es el infinitivo sin 'to', así que es correcto. La opción A es incorrecta porque falta la 'd'; B usa el pasado en vez del infinitivo; D es una estructura diferente (*be used to + -ing* = estar acostumbrado a)."
    },
    {
      question: "¿Cuál sustantivo es INCONTABLE?",
      options: ["Apple", "Book", "Water", "Chair"],
      correctAnswer: 2,
      explanation: "Correcto: 'Water' es incontable. *Water* no se puede contar individualmente. No decimos 'one water, two waters' (a menos que nos refiramos a botellas, pero en general, es incontable)."
    },
    {
      question: "¿Qué oración es correcta?",
      options: ["I don't have many money.", "I don't have much money.", "I don't have a lot of moneys.", "I don't have few money."],
      correctAnswer: 1,
      explanation: "Correcto: 'I don't have much money.' *Money* es incontable, así que usamos **much** en negativas. 'Many' es solo para contables. 'Moneys' no existe en este contexto. 'Few' es para contables."
    },
    {
      question: "¿Cuál oración expresa una pequeña cantidad POSITIVA de un sustantivo incontable?",
      options: ["I have little time.", "I have a little time.", "I have few time.", "I have a few time."],
      correctAnswer: 1,
      explanation: "Correcto: 'I have a little time.' *Time* es incontable. **A little** = algo (positivo). **Little** = casi nada (negativo). *Few* y *a few* son solo para contables."
    },
    {
      question: "¿Cuál es la forma correcta de preguntar si alguien tiene hermanos?",
      options: ["Do you have some brothers?", "Do you have any brothers?", "Do you have much brothers?", "Do you have a lot brothers?"],
      correctAnswer: 1,
      explanation: "Correcto: 'Do you have any brothers?' En preguntas, usamos **any** con sustantivos contables o incontables. *Brothers* es contable plural, así que 'any' es correcto. 'Some' se usa en ofertas o peticiones, no en preguntas neutras."
    },
    {
      question: "¿Cuál oración es correcta?",
      options: ["She enjoys to read.", "She enjoys reading.", "She enjoy reading.", "She is enjoying to read."],
      correctAnswer: 1,
      explanation: "Correcto: 'She enjoys reading.' *Enjoy* **siempre** va seguido de **-ing**. Además, el sujeto 'she' requiere el verbo en tercera persona: *enjoys*."
    },
    {
      question: "¿Qué significa 'I have a few friends'?",
      options: ["No tengo amigos.", "Tengo pocos amigos (casi ninguno).", "Tengo algunos amigos (pocos, pero suficientes).", "Tengo muchos amigos."],
      correctAnswer: 2,
      explanation: "Correcto: 'Tengo algunos amigos (pocos, pero suficientes).' **A few** con contables indica una pequeña cantidad, pero con connotación positiva o neutra. **Few** (sin 'a') sería negativo."
    },
    {
      question: "¿Cuál oración es correcta en negativo con 'used to'?",
      options: ["I didn't used to like coffee.", "I didn't use to like coffee.", "I wasn't used to like coffee.", "I used not to liked coffee."],
      correctAnswer: 1,
      explanation: "Correcto: 'I didn't use to like coffee.' En negativas con *did*, el verbo **use** va sin 'd': *didn't use to*. La forma 'used not to' existe, pero no con 'did'."
    },
    {
      question: "¿Cuál oración es correcta?",
      options: ["There are a lot of informations.", "There is a lot of information.", "There are much information.", "There is many information."],
      correctAnswer: 1,
      explanation: "Correcto: 'There is a lot of information.' *Information* es incontable (no tiene plural). Por eso usamos **is** (no *are*) y **a lot of** (que sirve para incontables). *Much* y *many* no se usan en afirmativas comunes."
    }
  ]
};

