import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson14: LessonData = {
  id: 14,
  title: "Comparativos y Superlativos (Comparatives and Superlatives)",
  description: "Los comparativos y superlativos son estructuras que usamos para comparar personas, objetos o situaciones. Los comparativos se usan para decir que algo es más o menos que otra cosa, mientras que los superlativos indican que algo es el más o el menos dentro de un grupo.",
  welcomeEmoji: "🏆",
  pageTitle: "English Learning - Comparatives and Superlatives: Comparing People, Things and Situations",
  metaDescription: "Aprende a formar y usar comparativos y superlativos en inglés. Descubre cómo comparar con adjetivos cortos y largos, usar as...as para igualdad, y dominar las formas irregulares como better, worse, best y worst.",
  learningPoints: [
    "Formar y usar los comparativos con adjetivos cortos, largos e irregulares",
    "Expresar igualdad o diferencia entre cosas o personas con 'as...as'",
    "Formar y usar los superlativos correctamente con 'the + -est' y 'the most'",
    "Distinguir cuándo usar 'more', '-er', 'most' y '-est' según el tipo de adjetivo",
    "Reconocer y usar correctamente las formas irregulares (better, best, worse, worst)",
    "Evitar errores comunes al hacer comparaciones en inglés"
  ],
  content: [
    {
      topic: "Comparativos: cómo expresar diferencias",
      explanation: "Los **comparativos** se utilizan para comparar **dos cosas o personas** y expresar que una tiene más o menos de cierta cualidad que la otra. La forma del comparativo depende del tipo de adjetivo (corto, largo o irregular).",
      examples: [
        {
          type: 'title',
          text: 'Formación según el tipo de adjetivo',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de adjetivo', 'Regla', 'Ejemplo', 'Traducción'],
          rows: [
            ['Corto (1 sílaba)', 'adjective + -er + than', 'tall → taller than', 'más alto que'],
            ['Termina en \'y\'', 'cambia la \'y\' por \'i\' + -er', 'happy → happier than', 'más feliz que'],
            ['Largo (2+ sílabas)', 'more + adjective + than', 'beautiful → more beautiful than', 'más hermosa que'],
            ['Irregular', 'cambio completo', 'good → better than / bad → worse than', 'mejor que / peor que']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla importante: ', bold: true },
            { text: "Los adjetivos de 1 sílaba usan '-er', los de 3+ sílabas usan 'more', y los de 2 sílabas pueden usar ambos (pero generalmente 'more')." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos cortos (1 sílaba)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se agrega ' },
            { text: '-er', bold: true },
            { text: ' al final del adjetivo + ' },
            { text: 'than', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'John is ', italic: true },
              { text: 'taller than', bold: true },
              { text: ' Peter.', italic: true },
              { text: ' (John es más alto que Peter.)' }
            ],
            [
              { text: 'This book is ', italic: true },
              { text: 'cheaper than', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Este libro es más barato que ese.)' }
            ],
            [
              { text: 'My room is ', italic: true },
              { text: 'bigger than', bold: true },
              { text: ' yours.', italic: true },
              { text: ' (Mi habitación es más grande que la tuya.)' }
            ],
            [
              { text: 'She runs ', italic: true },
              { text: 'faster than', bold: true },
              { text: ' me.', italic: true },
              { text: ' (Ella corre más rápido que yo.)' }
            ],
            [
              { text: 'Winter is ', italic: true },
              { text: 'colder than', bold: true },
              { text: ' autumn.', italic: true },
              { text: ' (El invierno es más frío que el otoño.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Reglas ortográficas especiales:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "Si termina en '-e': solo se agrega '-r' → ", code: true },
              { text: 'large', italic: true },
              { text: ' → ', code: true },
              { text: 'larger', bold: true }
            ],
            [
              { text: 'Si termina en consonante + vocal + consonante: se duplica la última consonante → ', code: true },
              { text: 'big', italic: true },
              { text: ' → ', code: true },
              { text: 'bigger', bold: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos que terminan en \'y\'',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se cambia la ' },
            { text: "'y'", bold: true },
            { text: ' por ' },
            { text: "'i'", bold: true },
            { text: ' y se agrega ' },
            { text: '-er', bold: true },
            { text: ' + ' },
            { text: 'than', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She is ', italic: true },
              { text: 'happier than', bold: true },
              { text: ' before.', italic: true },
              { text: ' (Ella está más feliz que antes.)' }
            ],
            [
              { text: 'This exercise is ', italic: true },
              { text: 'easier than', bold: true },
              { text: ' the last one.', italic: true },
              { text: ' (Este ejercicio es más fácil que el anterior.)' }
            ],
            [
              { text: 'My brother is ', italic: true },
              { text: 'funnier than', bold: true },
              { text: ' his friends.', italic: true },
              { text: ' (Mi hermano es más gracioso que sus amigos.)' }
            ],
            [
              { text: 'Today is ', italic: true },
              { text: 'sunnier than', bold: true },
              { text: ' yesterday.', italic: true },
              { text: ' (Hoy está más soleado que ayer.)' }
            ],
            [
              { text: 'This movie is ', italic: true },
              { text: 'scarier than', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Esta película es más aterradora que esa.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos largos (2+ sílabas)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa ' },
            { text: 'more + adjetivo + than', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This book is ', italic: true },
              { text: 'more interesting than', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Este libro es más interesante que ese.)' }
            ],
            [
              { text: 'English is ', italic: true },
              { text: 'more difficult than', bold: true },
              { text: ' Spanish.', italic: true },
              { text: ' (El inglés es más difícil que el español.)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'more intelligent than', bold: true },
              { text: ' her classmates.', italic: true },
              { text: ' (Ella es más inteligente que sus compañeros.)' }
            ],
            [
              { text: 'This car is ', italic: true },
              { text: 'more expensive than', bold: true },
              { text: ' mine.', italic: true },
              { text: ' (Este auto es más caro que el mío.)' }
            ],
            [
              { text: 'The test was ', italic: true },
              { text: 'more complicated than', bold: true },
              { text: ' I expected.', italic: true },
              { text: ' (El examen fue más complicado de lo que esperaba.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparativos irregulares',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Algunos adjetivos ' },
            { text: 'no siguen las reglas', bold: true },
            { text: ' y tienen formas especiales que debes memorizar.' }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Adjetivo', 'Comparativo', 'Traducción'],
          rows: [
            ['good', 'better than', 'mejor que'],
            ['bad', 'worse than', 'peor que'],
            ['far', 'farther than', 'más lejos que']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This restaurant is ', italic: true },
              { text: 'better than', bold: true },
              { text: ' the old one.', italic: true },
              { text: ' (Este restaurante es mejor que el anterior.)' }
            ],
            [
              { text: 'Today is ', italic: true },
              { text: 'worse than', bold: true },
              { text: ' yesterday.', italic: true },
              { text: ' (Hoy es peor que ayer.)' }
            ],
            [
              { text: 'My house is ', italic: true },
              { text: 'farther than', bold: true },
              { text: ' yours.', italic: true },
              { text: ' (Mi casa está más lejos que la tuya.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Errores comunes:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'more good', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'better', bold: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'more bad', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'worse', bold: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'more taller', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'taller', bold: true },
              { text: ' (no se combinan \'more\' y \'-er\')' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Comparaciones de igualdad: 'as...as'",
      explanation: "Cuando dos cosas son **iguales** en algún aspecto, usamos la estructura **as + adjetivo + as**. Para expresar que NO son iguales, usamos la forma negativa **not as/so + adjetivo + as**.",
      examples: [
        {
          type: 'title',
          text: 'Estructura para igualdad',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'Subject + verb + as + adjective + as + comparison',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Significado: ', bold: true },
            { text: 'Tan... como' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de igualdad (afirmativos)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa cuando dos cosas tienen ' },
            { text: 'el mismo nivel', bold: true },
            { text: ' de una característica.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She is ', italic: true },
              { text: 'as intelligent as', bold: true },
              { text: ' her brother.', italic: true },
              { text: ' (Ella es tan inteligente como su hermano.)' }
            ],
            [
              { text: 'My car is ', italic: true },
              { text: 'as fast as', bold: true },
              { text: ' yours.', italic: true },
              { text: ' (Mi auto es tan rápido como el tuyo.)' }
            ],
            [
              { text: 'This test is ', italic: true },
              { text: 'as difficult as', bold: true },
              { text: ' the last one.', italic: true },
              { text: ' (Este examen es tan difícil como el anterior.)' }
            ],
            [
              { text: 'He is ', italic: true },
              { text: 'as tall as', bold: true },
              { text: ' his father.', italic: true },
              { text: ' (Él es tan alto como su padre.)' }
            ],
            [
              { text: 'This book is ', italic: true },
              { text: 'as interesting as', bold: true },
              { text: ' that movie.', italic: true },
              { text: ' (Este libro es tan interesante como esa película.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Uso: ', bold: true },
            { text: 'Indica que no hay diferencia en la cualidad mencionada entre las dos cosas comparadas.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de diferencia (negativos)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa ' },
            { text: 'not as/so + adjetivo + as', bold: true },
            { text: ' para decir que algo ' },
            { text: 'no tiene el mismo nivel', bold: true },
            { text: ' que otra cosa.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject + verb + not + as/so + adjective + as + comparison',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Significado: ', bold: true },
            { text: 'No tan... como' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This exam is ', italic: true },
              { text: 'not as difficult as', bold: true },
              { text: ' the last one.', italic: true },
              { text: ' (Este examen no es tan difícil como el anterior.)' }
            ],
            [
              { text: 'My phone is ', italic: true },
              { text: 'not as expensive as', bold: true },
              { text: ' yours.', italic: true },
              { text: ' (Mi teléfono no es tan caro como el tuyo.)' }
            ],
            [
              { text: 'He is ', italic: true },
              { text: 'not as tall as', bold: true },
              { text: ' his brother.', italic: true },
              { text: ' (Él no es tan alto como su hermano.)' }
            ],
            [
              { text: 'Today is ', italic: true },
              { text: 'not as cold as', bold: true },
              { text: ' yesterday.', italic: true },
              { text: ' (Hoy no hace tanto frío como ayer.)' }
            ],
            [
              { text: 'This movie is ', italic: true },
              { text: 'not so interesting as', bold: true },
              { text: ' the book.', italic: true },
              { text: ' (Esta película no es tan interesante como el libro.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Nota: ', bold: true },
            { text: "'as' y 'so' son intercambiables en oraciones negativas, pero 'as' es más común." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencia: Comparativo vs \'as...as\'',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Estructura', 'Uso', 'Ejemplo'],
          rows: [
            ['-er than / more', 'Expresa diferencia (más/menos)', 'John is taller than Mary.'],
            ['as...as', 'Expresa igualdad (igual)', 'John is as tall as Peter.'],
            ['not as...as', 'Expresa no igualdad (menos)', 'Mary is not as tall as John.']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos comparativos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This car is ', italic: true },
              { text: 'faster than', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Este auto es más rápido. → ', bold: true },
              { text: 'Diferencia', bold: true },
              { text: ')' }
            ],
            [
              { text: 'This car is ', italic: true },
              { text: 'as fast as', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Este auto es igual de rápido. → ', bold: true },
              { text: 'Igualdad', bold: true },
              { text: ')' }
            ],
            [
              { text: 'This car is ', italic: true },
              { text: 'not as fast as', bold: true },
              { text: ' that one.', italic: true },
              { text: ' (Este auto no es tan rápido. → ', bold: true },
              { text: 'No igualdad', bold: true },
              { text: ')' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en contexto',
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
              { text: 'Is your new apartment bigger than your old one?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "No, it's ", italic: true },
              { text: 'as big as', bold: true },
              { text: ' the old one, but it\'s in a better location.', italic: true },
              { text: ' (No, es tan grande como el antiguo, pero está en una mejor ubicación.)' }
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
              { text: 'Is this test difficult?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "It's ", italic: true },
              { text: 'not as difficult as', bold: true },
              { text: ' the last one.', italic: true },
              { text: ' (No es tan difícil como el anterior.)' }
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
              { text: "How's the weather today?", italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "It's ", italic: true },
              { text: 'as sunny as', bold: true },
              { text: ' yesterday!', italic: true },
              { text: ' (¡Está tan soleado como ayer!)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Superlativos: cómo expresar el grado máximo",
      explanation: "Los **superlativos** se usan cuando comparamos **tres o más cosas** y queremos decir que una de ellas tiene el grado más alto o más bajo de una cualidad. Siempre se usa el artículo **'the'** antes del superlativo.",
      examples: [
        {
          type: 'title',
          text: 'Formación según el tipo de adjetivo',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de adjetivo', 'Regla', 'Ejemplo', 'Traducción'],
          rows: [
            ['Corto (1 sílaba)', 'the + adjective + -est', 'small → the smallest', 'el más pequeño'],
            ['Termina en \'y\'', 'cambia \'y\' por \'i\' + -est', 'happy → the happiest', 'el más feliz'],
            ['Largo (2+ sílabas)', 'the most + adjective', 'beautiful → the most beautiful', 'el más hermoso'],
            ['Irregular', 'cambio completo', 'good → the best / bad → the worst', 'el mejor / el peor']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla clave: ', bold: true },
            { text: "Siempre usamos 'the' antes del superlativo porque estamos hablando de UNA cosa específica que es la más/menos de todas." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos cortos (1 sílaba)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa ' },
            { text: 'the + adjetivo + -est', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This is ', italic: true },
              { text: 'the biggest', bold: true },
              { text: ' city in the country.', italic: true },
              { text: ' (Esta es la ciudad más grande del país.)' }
            ],
            [
              { text: 'He is ', italic: true },
              { text: 'the tallest', bold: true },
              { text: ' student in the class.', italic: true },
              { text: ' (Él es el estudiante más alto de la clase.)' }
            ],
            [
              { text: 'That was ', italic: true },
              { text: 'the coldest', bold: true },
              { text: ' winter I\'ve ever experienced.', italic: true },
              { text: ' (Ese fue el invierno más frío que he experimentado.)' }
            ],
            [
              { text: 'This is ', italic: true },
              { text: 'the cheapest', bold: true },
              { text: ' option available.', italic: true },
              { text: ' (Esta es la opción más barata disponible.)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'the fastest', bold: true },
              { text: ' runner in the team.', italic: true },
              { text: ' (Ella es la corredora más rápida del equipo.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Reglas ortográficas especiales:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "Si termina en '-e': solo se agrega '-st' → ", code: true },
              { text: 'large', italic: true },
              { text: ' → ', code: true },
              { text: 'the largest', bold: true }
            ],
            [
              { text: 'Si termina en consonante + vocal + consonante: se duplica la última consonante → ', code: true },
              { text: 'big', italic: true },
              { text: ' → ', code: true },
              { text: 'the biggest', bold: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos que terminan en \'y\'',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se cambia la ' },
            { text: "'y'", bold: true },
            { text: ' por ' },
            { text: "'i'", bold: true },
            { text: ' y se agrega ' },
            { text: '-est', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This is ', italic: true },
              { text: 'the easiest', bold: true },
              { text: ' exercise in the book.', italic: true },
              { text: ' (Este es el ejercicio más fácil del libro.)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'the happiest', bold: true },
              { text: ' person I know.', italic: true },
              { text: ' (Ella es la persona más feliz que conozco.)' }
            ],
            [
              { text: 'That was ', italic: true },
              { text: 'the funniest', bold: true },
              { text: ' movie of the year.', italic: true },
              { text: ' (Esa fue la película más graciosa del año.)' }
            ],
            [
              { text: 'Monday is ', italic: true },
              { text: 'the busiest', bold: true },
              { text: ' day of the week.', italic: true },
              { text: ' (El lunes es el día más ocupado de la semana.)' }
            ],
            [
              { text: 'This is ', italic: true },
              { text: 'the prettiest', bold: true },
              { text: ' dress in the store.', italic: true },
              { text: ' (Este es el vestido más bonito de la tienda.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con adjetivos largos (2+ sílabas)',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa ' },
            { text: 'the most + adjetivo', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Mount Everest is ', italic: true },
              { text: 'the most dangerous', bold: true },
              { text: ' mountain to climb.', italic: true },
              { text: ' (El Monte Everest es la montaña más peligrosa para escalar.)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'the most intelligent', bold: true },
              { text: ' student in the school.', italic: true },
              { text: ' (Ella es la estudiante más inteligente de la escuela.)' }
            ],
            [
              { text: 'This is ', italic: true },
              { text: 'the most expensive', bold: true },
              { text: ' restaurant in town.', italic: true },
              { text: ' (Este es el restaurante más caro de la ciudad.)' }
            ],
            [
              { text: 'That was ', italic: true },
              { text: 'the most interesting', bold: true },
              { text: ' book I\'ve read this year.', italic: true },
              { text: ' (Ese fue el libro más interesante que he leído este año.)' }
            ],
            [
              { text: 'He gave ', italic: true },
              { text: 'the most complicated', bold: true },
              { text: ' explanation possible.', italic: true },
              { text: ' (Él dio la explicación más complicada posible.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'También existe \'the least\' (el menos):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This is ', italic: true },
              { text: 'the least expensive', bold: true },
              { text: ' option.', italic: true },
              { text: ' (Esta es la opción menos cara.)' }
            ],
            [
              { text: 'That was ', italic: true },
              { text: 'the least interesting', bold: true },
              { text: ' part.', italic: true },
              { text: ' (Esa fue la parte menos interesante.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Superlativos irregulares',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Algunos adjetivos tienen formas especiales que debes memorizar.' }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Adjetivo', 'Superlativo', 'Traducción'],
          rows: [
            ['good', 'the best', 'el mejor'],
            ['bad', 'the worst', 'el peor'],
            ['far', 'the farthest', 'el más lejano']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'This is ', italic: true },
              { text: 'the best', bold: true },
              { text: ' pizza I\'ve ever had.', italic: true },
              { text: ' (Esta es la mejor pizza que he probado.)' }
            ],
            [
              { text: 'That was ', italic: true },
              { text: 'the worst', bold: true },
              { text: ' movie I\'ve ever seen.', italic: true },
              { text: ' (Esa fue la peor película que he visto.)' }
            ],
            [
              { text: 'Neptune is ', italic: true },
              { text: 'the farthest', bold: true },
              { text: ' planet from the sun.', italic: true },
              { text: ' (Neptuno es el planeta más lejano del sol.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Errores comunes:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'the most good', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'the best', bold: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'the most bad', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'the worst', bold: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'the most biggest', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'the biggest', bold: true },
              { text: ' (no se combinan \'most\' y \'-est\')' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Uso típico: \'in\' vs \'of\'',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Después del superlativo, usamos:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "'in'", bold: true },
              { text: ' para lugares: ', code: true },
              { text: 'the best in the city', italic: true },
              { text: ', ', code: true },
              { text: 'the tallest in the class', italic: true }
            ],
            [
              { text: "'of'", bold: true },
              { text: ' para grupos: ', code: true },
              { text: 'the best of all', italic: true },
              { text: ', ', code: true },
              { text: 'the oldest of the three', italic: true }
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
              { text: 'She is the smartest student ', italic: true },
              { text: 'in', bold: true },
              { text: ' the school.', italic: true },
              { text: ' (Ella es la estudiante más inteligente de la escuela.)' }
            ],
            [
              { text: 'He is the tallest ', italic: true },
              { text: 'of', bold: true },
              { text: ' all his brothers.', italic: true },
              { text: ' (Él es el más alto de todos sus hermanos.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Errores comunes y consejos",
      explanation: "Al usar comparativos y superlativos, hay ciertos errores que los estudiantes cometen frecuentemente. Aquí aprenderás a identificarlos y evitarlos para hablar inglés correctamente.",
      examples: [
        {
          type: 'title',
          text: "Error 1: Combinar 'more' con '-er'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'No se pueden usar ' },
            { text: "'more'", bold: true },
            { text: ' y ' },
            { text: "'-er'", bold: true },
            { text: ' al mismo tiempo.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'more taller than', bold: true },
              { text: ' me."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'taller than', bold: true },
              { text: ' me."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'more easier', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'easier', bold: true },
              { text: '."', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Regla: ', bold: true },
            { text: "Si usas '-er', NO uses 'more'. Solo uno de los dos." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Error 2: Combinar 'most' con '-est'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'No se pueden usar ' },
            { text: "'most'", bold: true },
            { text: ' y ' },
            { text: "'-est'", bold: true },
            { text: ' al mismo tiempo.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'the most biggest', bold: true },
              { text: ' house."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'the biggest', bold: true },
              { text: ' house."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"She is ', italic: true },
              { text: 'the most smartest', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"She is ', italic: true },
              { text: 'the smartest', bold: true },
              { text: '."', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Regla: ', bold: true },
            { text: "Si usas '-est', NO uses 'most'. Solo uno de los dos." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Error 3: Usar 'more' con adjetivos cortos",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los adjetivos de 1 sílaba usan ' },
            { text: "'-er'", bold: true },
            { text: ", no 'more'." }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'more tall', bold: true },
              { text: ' than Peter."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'taller', bold: true },
              { text: ' than Peter."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'more big', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'bigger', bold: true },
              { text: '."', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Error 4: Usar '-er' con adjetivos largos",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los adjetivos de 3+ sílabas usan ' },
            { text: "'more'", bold: true },
            { text: ", no '-er'." }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'interestinger', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'more interesting', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"She is ', italic: true },
              { text: 'intelligenter', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"She is ', italic: true },
              { text: 'more intelligent', bold: true },
              { text: '."', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Error 5: Olvidar 'the' en superlativos",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los superlativos ' },
            { text: 'siempre', bold: true },
            { text: ' necesitan el artículo ' },
            { text: "'the'", bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'most intelligent', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"He is ', italic: true },
              { text: 'the most intelligent', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'biggest city', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'the biggest city', bold: true },
              { text: '."', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Error 6: Usar formas irregulares incorrectamente',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los adjetivos irregulares tienen formas especiales que ' },
            { text: 'NO siguen las reglas normales', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'more good', bold: true },
              { text: ' than that."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'better', bold: true },
              { text: ' than that."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'the most good', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is ', italic: true },
              { text: 'the best', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"Today is ', italic: true },
              { text: 'more bad', bold: true },
              { text: ' than yesterday."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"Today is ', italic: true },
              { text: 'worse', bold: true },
              { text: ' than yesterday."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"That was ', italic: true },
              { text: 'the most bad', bold: true },
              { text: ' day."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"That was ', italic: true },
              { text: 'the worst', bold: true },
              { text: ' day."', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Memoriza: ', bold: true },
            { text: 'good → better → the best / bad → worse → the worst', code: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Error 7: Olvidar 'than' en comparativos",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los comparativos necesitan ' },
            { text: "'than'", bold: true },
            { text: ' cuando comparas dos cosas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"He is taller me."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"He is taller ', italic: true },
              { text: 'than', bold: true },
              { text: ' me."', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Incorrecto: ', bold: true },
              { text: '"This is more expensive that one."', italic: true }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Correcto: ', bold: true },
              { text: '"This is more expensive ', italic: true },
              { text: 'than', bold: true },
              { text: ' that one."', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Resumen de reglas',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Adjetivo', 'Comparativo', 'Superlativo'],
          rows: [
            ['Corto (1 sílaba)', '-er + than', 'the + -est'],
            ['Largo (3+ sílabas)', 'more + than', 'the most'],
            ['Termina en \'y\'', '-ier + than', 'the + -iest'],
            ['Irregular', 'forma especial', 'forma especial']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de cada tipo:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'tall', italic: true },
              { text: ' → ', code: true },
              { text: 'taller than', bold: true },
              { text: ' → ', code: true },
              { text: 'the tallest', bold: true }
            ],
            [
              { text: 'beautiful', italic: true },
              { text: ' → ', code: true },
              { text: 'more beautiful than', bold: true },
              { text: ' → ', code: true },
              { text: 'the most beautiful', bold: true }
            ],
            [
              { text: 'happy', italic: true },
              { text: ' → ', code: true },
              { text: 'happier than', bold: true },
              { text: ' → ', code: true },
              { text: 'the happiest', bold: true }
            ],
            [
              { text: 'good', italic: true },
              { text: ' → ', code: true },
              { text: 'better than', bold: true },
              { text: ' → ', code: true },
              { text: 'the best', bold: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "My house is ___ than yours.",
      options: ["more big", "bigger", "the biggest", "most big"],
      correctAnswer: 1,
      explanation: "Correcto: 'Big' es un adjetivo corto de 1 sílaba, por lo que usamos '-er' para formar el comparativo. Además, al terminar en consonante-vocal-consonante, se duplica la última letra: big → bigger."
    },
    {
      question: "This car is ___ expensive than that one.",
      options: ["expensiver", "the most", "more", "very"],
      correctAnswer: 2,
      explanation: "Correcto: 'Expensive' es un adjetivo largo (3 sílabas), por lo que usamos 'more + adjective + than' para formar el comparativo. La estructura completa es 'more expensive than'."
    },
    {
      question: "She is ___ person I know.",
      options: ["more kind", "kinder", "the kindest", "the most kinder"],
      correctAnswer: 2,
      explanation: "Correcto: Estamos comparando entre más de dos personas (todas las personas que conozco), por lo que necesitamos un superlativo. 'Kind' es un adjetivo corto, así que usamos 'the + -est': the kindest."
    },
    {
      question: "Today is ___ than yesterday.",
      options: ["worse", "badder", "more bad", "worst"],
      correctAnswer: 0,
      explanation: "Correcto: 'Bad' es un adjetivo irregular. Su forma comparativa NO es 'badder' ni 'more bad', sino 'worse'. Memoriza: bad → worse → the worst."
    },
    {
      question: "That mountain is ___ in the region.",
      options: ["higher", "the highest", "the more high", "most high"],
      correctAnswer: 1,
      explanation: "Correcto: Estamos hablando del grado máximo (el más alto de todos en la región), por lo que necesitamos un superlativo. 'High' es corto, así que usamos 'the + -est': the highest."
    },
    {
      question: "This test is not ___ difficult as the last one.",
      options: ["as", "so much", "more", "too"],
      correctAnswer: 0,
      explanation: "Correcto: Para expresar que dos cosas NO son iguales, usamos la estructura 'not as + adjective + as'. Esta estructura indica que el test actual es menos difícil que el anterior."
    },
    {
      question: "My cat is ___ my dog.",
      options: ["as lazy as", "more lazy", "lazier than", "the laziest"],
      correctAnswer: 0,
      explanation: "Correcto: La estructura 'as + adjective + as' se usa para expresar igualdad entre dos cosas. Significa que el gato y el perro tienen el mismo nivel de pereza."
    },
    {
      question: "That was ___ movie I've ever seen.",
      options: ["the best", "the better", "bestest", "most good"],
      correctAnswer: 0,
      explanation: "Correcto: 'Good' es un adjetivo irregular. Su forma superlativa NO es 'the goodest' ni 'the most good', sino 'the best'. Memoriza: good → better → the best."
    },
    {
      question: "This exercise is ___ interesting than the last one.",
      options: ["interestinger", "more interesting", "the more interesting", "most interesting"],
      correctAnswer: 1,
      explanation: "Correcto: 'Interesting' es un adjetivo largo (4 sílabas), por lo que formamos el comparativo con 'more + adjective + than'. No se puede agregar '-er' a adjetivos largos."
    },
    {
      question: "John is ___ student in the class.",
      options: ["better", "the better", "the best", "more good"],
      correctAnswer: 2,
      explanation: "Correcto: Estamos comparando a John con todos los estudiantes de la clase (más de dos), por lo que necesitamos un superlativo. 'Good' es irregular: su superlativo es 'the best'."
    }
  ]
};

