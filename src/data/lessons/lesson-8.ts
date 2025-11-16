import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson8: LessonData = {
  id: 8,
  title: "Adjetivos y Pronombres — Cómo describir, poseer y reemplazar palabras correctamente",
  description: "Los adjetivos y pronombres son esenciales para comunicarse con claridad. Mientras los adjetivos describen o califican sustantivos, los pronombres reemplazan a un sustantivo para evitar repeticiones. Aprende a usarlos correctamente según el contexto.",
  welcomeEmoji: "🧩",
  pageTitle: "English Learning - Adjetivos y Pronombres",
  metaDescription: "Domina los adjetivos y pronombres en inglés. Aprende a usar adjetivos posesivos, pronombres posesivos, pronombres de objeto y el orden correcto de los adjetivos.",
  learningPoints: [
    "La diferencia entre adjetivos posesivos y pronombres posesivos",
    "Cómo usarlos correctamente según la persona (my/mine, your/yours, etc.)",
    "Qué son los pronombres de objeto y en qué se diferencian de los de sujeto",
    "Dónde se colocan los adjetivos en la oración (posición y orden)",
    "Cómo combinar varios adjetivos sin sonar raro en inglés",
    "Los errores más comunes y cómo evitarlos"
  ],
  content: [
    {
      topic: "Adjetivos posesivos (my, your, his, her, its, our, their)",
      explanation: "Los **adjetivos posesivos** se usan **para mostrar a quién pertenece algo**, y **siempre acompañan a un sustantivo**. No se usan solos: **necesitan un nombre después**.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'adjetivo posesivo + sustantivo',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Lista completa',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Persona', 'Adjetivo posesivo', 'Ejemplo'],
          rows: [
            ['I', 'my', 'This is my house.'],
            ['You', 'your', 'Where is your bag?'],
            ['He', 'his', 'His car is fast.'],
            ['She', 'her', 'I like her dress.'],
            ['It', 'its', 'The dog wagged its tail.'],
            ['We', 'our', 'Our teacher is kind.'],
            ['They', 'their', 'Their children are smart.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true },
            { text: "'Its' " },
            { text: 'no lleva apóstrofe', bold: true },
            { text: ' (no confundir con ' },
            { text: "'it's'", code: true },
            { text: ' = ' },
            { text: 'it is', italic: true },
            { text: ').' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa ' },
            { text: "'its'", code: true },
            { text: ' solo para ' },
            { text: 'animales o cosas', bold: true },
            { text: ', no personas.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'My phone is new.', italic: true },
              { text: ' → ' },
              { text: 'Mi teléfono es nuevo.', italic: true }
            ],
            [
              { text: 'Their house is big.', italic: true },
              { text: ' → ' },
              { text: 'Su casa es grande.', italic: true }
            ],
            [
              { text: 'The cat is licking its paw.', italic: true },
              { text: ' → ' },
              { text: 'El gato está lamiendo su pata.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Pronombres posesivos (mine, yours, his, hers, its, ours, theirs)",
      explanation: "Los **pronombres posesivos** **reemplazan** al sustantivo para **evitar repetirlo**. A diferencia de los adjetivos posesivos, **no van seguidos de un nombre**.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'pronombre posesivo (sin sustantivo después)',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Lista completa',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Persona', 'Pronombre posesivo', 'Ejemplo'],
          rows: [
            ['I', 'mine', 'The book is mine.'],
            ['You', 'yours', 'This seat is yours.'],
            ['He', 'his', 'That jacket is his.'],
            ['She', 'hers', 'The blue one is hers.'],
            ['It', 'its', '(raro, casi no se usa)'],
            ['We', 'ours', 'The victory was ours.'],
            ['They', 'theirs', 'The house is theirs.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Comparación clave:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Adjetivo posesivo', 'Pronombre posesivo', 'Ejemplo'],
          rows: [
            ['my book', 'mine', 'This is my book. / This book is mine.'],
            ['your car', 'yours', 'That is your car. / That car is yours.'],
            ['their house', 'theirs', 'Their house is big. / The big house is theirs.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos adicionales:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The blue jacket is mine.', italic: true },
              { text: ' → ' },
              { text: 'La chaqueta azul es mía.', italic: true }
            ],
            [
              { text: 'This seat is yours.', italic: true },
              { text: ' → ' },
              { text: 'Este asiento es tuyo.', italic: true }
            ],
            [
              { text: 'The victory was ours.', italic: true },
              { text: ' → ' },
              { text: 'La victoria fue nuestra.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Pronombres de objeto (me, you, him, her, it, us, them)",
      explanation: "Los **pronombres de objeto** se usan para **reemplazar al sustantivo que recibe la acción** del verbo. Mientras que los **pronombres de sujeto** (I, you, he, she, etc.) hacen la acción, los **de objeto** la reciben.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'Sujeto + verbo + pronombre de objeto',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Lista completa',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Sujeto', 'Objeto', 'Ejemplo'],
          rows: [
            ['I', 'me', 'He loves me.'],
            ['You', 'you', 'I see you.'],
            ['He', 'him', 'She knows him.'],
            ['She', 'her', 'I called her yesterday.'],
            ['It', 'it', 'We found it.'],
            ['We', 'us', 'They invited us.'],
            ['They', 'them', 'I saw them at the park.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Ejemplos comparativos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He', bold: true },
              { text: ' calls ' },
              { text: 'me', bold: true },
              { text: ' every day.', italic: true },
              { text: ' → ' },
              { text: 'Él me llama todos los días.', italic: true }
            ],
            [
              { text: 'We', bold: true },
              { text: ' love ' },
              { text: 'them', bold: true },
              { text: ' very much.', italic: true },
              { text: ' → ' },
              { text: 'Los amamos mucho.', italic: true }
            ],
            [
              { text: 'I', bold: true },
              { text: ' gave ' },
              { text: 'her', bold: true },
              { text: ' the keys.', italic: true },
              { text: ' → ' },
              { text: 'Le di las llaves.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💬 ', emoji: '💬' },
            { text: 'Nota práctica: ', bold: true },
            { text: 'En inglés, los pronombres de objeto ' },
            { text: 'siempre van después del verbo o preposición', bold: true },
            { text: ', nunca antes:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She is looking at him.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She is looking he.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Orden del adjetivo — Cómo ordenar varios adjetivos",
      explanation: "En inglés, los **adjetivos van siempre antes del sustantivo** (a diferencia del español, donde van después). Además, cuando hay **más de un adjetivo**, existe un **orden específico** que los hablantes nativos siguen de manera natural.",
      examples: [
        {
          type: 'title',
          text: 'Estructura general',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'Cantidad → Opinión → Tamaño → Edad → Forma → Color → Origen → Material → Propósito + Sustantivo',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplo completo:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: 'a beautiful small old round red Italian wooden dining table',
          inline: false
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '(una ', italic: true },
            { text: 'hermosa mesa de comedor italiana, redonda, vieja, pequeña y de madera roja', bold: true, italic: true },
            { text: ')', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'No es obligatorio usar tantos adjetivos, pero ' },
            { text: 'mantener el orden', bold: true },
            { text: ' hace que la frase suene natural.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos más comunes:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'a big red car', italic: true },
              { text: ' → ' },
              { text: 'un auto rojo grande', italic: true }
            ],
            [
              { text: 'an interesting new movie', italic: true },
              { text: ' → ' },
              { text: 'una película nueva interesante', italic: true }
            ],
            [
              { text: 'a small black dog', italic: true },
              { text: ' → ' },
              { text: 'un perro negro pequeño', italic: true }
            ],
            [
              { text: 'two beautiful Spanish paintings', italic: true },
              { text: ' → ' },
              { text: 'dos pinturas españolas hermosas', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Consejo: ', bold: true },
            { text: 'Si no estás seguro del orden, pon primero el ' },
            { text: 'adjetivo más general (opinión)', bold: true },
            { text: ' y luego los más ' },
            { text: 'concretos (color, tamaño, material)', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de orden detallada',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Posición', 'Tipo', 'Ejemplo'],
          rows: [
            ['1', 'Cantidad', 'two, three, one'],
            ['2', 'Opinión', 'beautiful, nice'],
            ['3', 'Tamaño', 'big, small'],
            ['4', 'Edad', 'old, new'],
            ['5', 'Forma', 'round, square'],
            ['6', 'Color', 'red, blue'],
            ['7', 'Origen', 'Italian, French'],
            ['8', 'Material', 'wooden, metal'],
            ['9', 'Propósito', 'dining, sports']
          ]
        } as TableData
      ]
    }
  ],
  quiz: [
    {
      question: "This is ___ car.",
      options: ["my", "mine", "me", "I"],
      correctAnswer: 0,
      explanation: "Adjetivo posesivo, seguido de un sustantivo → usamos 'my'. Los adjetivos posesivos siempre van antes de un sustantivo."
    },
    {
      question: "The blue jacket is ___.",
      options: ["my", "mine", "me", "I"],
      correctAnswer: 1,
      explanation: "Pronombre posesivo, reemplaza al sustantivo → usamos 'mine'. Los pronombres posesivos van solos, sin sustantivo después."
    },
    {
      question: "I called ___ yesterday.",
      options: ["she", "her", "hers", "she's"],
      correctAnswer: 1,
      explanation: "Pronombre de objeto, recibe la acción → usamos 'her'. El pronombre de objeto va después del verbo 'called'."
    },
    {
      question: "They gave ___ a gift.",
      options: ["we", "us", "ours", "our"],
      correctAnswer: 1,
      explanation: "Pronombre de objeto → usamos 'us'. El pronombre de objeto recibe la acción del verbo 'gave'."
    },
    {
      question: "That is ___ house. (de ellos)",
      options: ["they", "theirs", "their", "them"],
      correctAnswer: 2,
      explanation: "Adjetivo posesivo antes del sustantivo → usamos 'their'. Los adjetivos posesivos siempre van seguidos de un sustantivo."
    },
    {
      question: "The red car is ___. (de ellos)",
      options: ["their", "theirs", "them", "they"],
      correctAnswer: 1,
      explanation: "Pronombre posesivo, reemplaza 'car' → usamos 'theirs'. Los pronombres posesivos sustituyen al sustantivo para evitar repetición."
    },
    {
      question: "She loves ___.",
      options: ["he", "him", "his", "he's"],
      correctAnswer: 1,
      explanation: "Pronombre de objeto → usamos 'him'. El pronombre de objeto recibe la acción del verbo 'loves'."
    },
    {
      question: "It was a ___ small old wooden box.",
      options: ["wooden old small", "small wooden old", "small old wooden", "old small wooden"],
      correctAnswer: 2,
      explanation: "Orden correcto: tamaño → edad → material. El orden natural de los adjetivos en inglés sigue esta secuencia específica."
    },
    {
      question: "The cat is licking ___ tail.",
      options: ["it's", "its", "his", "it"],
      correctAnswer: 1,
      explanation: "Adjetivo posesivo sin apóstrofe → usamos 'its'. 'It's' significa 'it is', mientras que 'its' es el adjetivo posesivo."
    },
    {
      question: "This book is not ___, it's ___.",
      options: ["your / my", "yours / mine", "you / me", "your / mine"],
      correctAnswer: 1,
      explanation: "Pronombres posesivos reemplazan al sustantivo 'book' → usamos 'yours' y 'mine'. Ambos son pronombres posesivos que van sin sustantivo después."
    }
  ]
};

