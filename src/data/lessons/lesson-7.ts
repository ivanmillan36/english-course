import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson7: LessonData = {
  id: 7,
  title: "Sustantivos y Artículos — Cómo nombrar, contar y expresar posesión correctamente",
  description: "Los sustantivos (nouns) son las palabras que usamos para nombrar personas, lugares, cosas o ideas. Son el corazón de casi todas las oraciones. Aprende a usar artículos, formar plurales y expresar posesión correctamente.",
  welcomeEmoji: "🧩",
  pageTitle: "English Learning - Sustantivos y Artículos",
  metaDescription: "Domina los sustantivos y artículos en inglés. Aprende a usar a/an/the, formar plurales regulares e irregulares, y usar el genitivo sajón ('s) para expresar posesión.",
  learningPoints: [
    "Qué son los sustantivos y cómo se clasifican",
    "Cómo usar correctamente los artículos a/an y the",
    "Cómo formar el plural de los sustantivos (regulares e irregulares)",
    "Cómo usar el genitivo sajón ('s) para expresar posesión",
    "Cuándo no usar artículos (casos especiales)",
    "Los errores más comunes y cómo evitarlos"
  ],
  content: [
    {
      topic: "Artículos en inglés: a / an / the",
      explanation: "En inglés, los **artículos** son palabras que acompañan a los sustantivos para indicar si estamos hablando de **algo general o algo específico**. Hay dos tipos: artículos indefinidos (a/an) y el artículo definido (the).",
      examples: [
        {
          type: 'title',
          text: '1. Artículos indefinidos (a / an)',
          emoji: '🔤',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usan cuando ' },
            { text: 'mencionamos algo por primera vez', bold: true },
            { text: ' o ' },
            { text: 'no es específico', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "'A'", bold: true },
              { text: ' se usa antes de palabras que ' },
              { text: 'empiezan con sonido consonante', bold: true },
              { text: '.' }
            ],
            [
              { text: "'An'", bold: true },
              { text: ' se usa antes de palabras que ' },
              { text: 'empiezan con sonido vocal', bold: true },
              { text: ' (a, e, i, o, u).' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '👉 ', emoji: '👉' },
            { text: 'Estructura: ', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "a / an + sustantivo singular contable",
          inline: true
        } as CodeData,
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
              { text: 'a cat', code: true },
              { text: ' → ' },
              { text: 'un gato', italic: true }
            ],
            [
              { text: 'an apple', code: true },
              { text: ' → ' },
              { text: 'una manzana', italic: true }
            ],
            [
              { text: 'a university', code: true },
              { text: ' → ' },
              { text: 'una universidad', italic: true },
              { text: ' (empieza con sonido /ju/, no con vocal)' }
            ],
            [
              { text: 'an hour', code: true },
              { text: ' → ' },
              { text: 'una hora', italic: true },
              { text: ' (empieza con sonido vocálico /aʊ/)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: "'A' y 'an' " },
            { text: 'solo se usan con sustantivos singulares contables', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'No se dicen cosas como ' },
            { text: '❌ ', emoji: '❌' },
            { text: 'an information', italic: true },
            { text: ' o ' },
            { text: '❌ ', emoji: '❌' },
            { text: 'a water', italic: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '2. Artículo definido (the)',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa cuando hablamos de ' },
            { text: 'algo específico o conocido', bold: true },
            { text: ' por el hablante y el oyente.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Funciona igual en singular y plural.' }
          ]
        } as ParagraphData,
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
              { text: 'The cat is sleeping.', italic: true },
              { text: ' → ' },
              { text: 'El gato está durmiendo.', italic: true }
            ],
            [
              { text: 'The apples are fresh.', italic: true },
              { text: ' → ' },
              { text: 'Las manzanas están frescas.', italic: true }
            ],
            [
              { text: 'The sun is bright today.', italic: true },
              { text: ' → ' },
              { text: 'El sol brilla hoy.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Casos donde no se usa \'the\':', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Antes de nombres propios: ' },
              { text: '❌ ', emoji: '❌' },
              { text: 'The Maria', italic: true }
            ],
            [
              { text: 'Antes de idiomas o comidas en general: ' },
              { text: '❌ ', emoji: '❌' },
              { text: 'The English is hard', italic: true },
              { text: ', ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'English is hard.', italic: true }
            ],
            [
              { text: 'Antes de países (salvo excepciones como ' },
              { text: 'the United States', italic: true },
              { text: ', ' },
              { text: 'the Netherlands', italic: true },
              { text: ').' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Plurales regulares",
      explanation: "La mayoría de los sustantivos forman el plural **añadiendo una terminación al final**. Sin embargo, hay pequeñas variaciones según cómo termina la palabra.",
      examples: [
        {
          type: 'title',
          text: 'Reglas principales',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Palabras que terminan en consonante + nada especial:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '➜ Agregamos ', emoji: '➜' },
            { text: '-s', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'cat', code: true },
              { text: ' → ' },
              { text: 'cats', code: true }
            ],
            [
              { text: 'car', code: true },
              { text: ' → ' },
              { text: 'cars', code: true }
            ],
            [
              { text: 'table', code: true },
              { text: ' → ' },
              { text: 'tables', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Palabras que terminan en -s, -ss, -sh, -ch, -x, o -z:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '➜ Agregamos ', emoji: '➜' },
            { text: '-es', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'bus', code: true },
              { text: ' → ' },
              { text: 'buses', code: true }
            ],
            [
              { text: 'box', code: true },
              { text: ' → ' },
              { text: 'boxes', code: true }
            ],
            [
              { text: 'watch', code: true },
              { text: ' → ' },
              { text: 'watches', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Palabras que terminan en consonante + \'y\':', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '➜ Cambiamos la \'y\' por ', emoji: '➜' },
            { text: '\'ies\'', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'city', code: true },
              { text: ' → ' },
              { text: 'cities', code: true }
            ],
            [
              { text: 'baby', code: true },
              { text: ' → ' },
              { text: 'babies', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '4. Palabras que terminan en vocal + \'y\':', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '➜ Solo agregamos ', emoji: '➜' },
            { text: '\'s\'', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'boy', code: true },
              { text: ' → ' },
              { text: 'boys', code: true }
            ],
            [
              { text: 'day', code: true },
              { text: ' → ' },
              { text: 'days', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'En inglés ' },
            { text: 'no se agrega un artículo plural indefinido', bold: true },
            { text: ' (no existe ' },
            { text: 'a cats', italic: true },
            { text: '). Solo se usa ' },
            { text: "'some'", bold: true },
            { text: ' o ' },
            { text: 'nada', bold: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "I have some cats. / I have cats.",
          inline: true
        } as CodeData
      ]
    },
    {
      topic: "Plurales irregulares",
      explanation: "Algunos sustantivos **no siguen las reglas regulares** y cambian completamente su forma en plural. Estos son muy frecuentes, por lo que conviene memorizarlos.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de plurales irregulares comunes',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Singular', 'Plural', 'Ejemplo'],
          rows: [
            ['man', 'men', 'The men are working.'],
            ['woman', 'women', 'The women are doctors.'],
            ['child', 'children', 'There are three children in the park.'],
            ['foot', 'feet', 'My feet hurt.'],
            ['tooth', 'teeth', 'I brush my teeth every day.'],
            ['person', 'people', 'People are friendly here.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos en contexto:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The ', italic: true },
              { text: 'men', bold: true, italic: true },
              { text: ' are working.', italic: true },
              { text: ' → ' },
              { text: 'Los hombres están trabajando.', italic: true }
            ],
            [
              { text: 'The ', italic: true },
              { text: 'women', bold: true, italic: true },
              { text: ' are doctors.', italic: true },
              { text: ' → ' },
              { text: 'Las mujeres son doctoras.', italic: true }
            ],
            [
              { text: 'There are three ', italic: true },
              { text: 'children', bold: true, italic: true },
              { text: ' in the park.', italic: true },
              { text: ' → ' },
              { text: 'Hay tres niños en el parque.', italic: true }
            ],
            [
              { text: 'My ', italic: true },
              { text: 'feet', bold: true, italic: true },
              { text: ' hurt.', italic: true },
              { text: ' → ' },
              { text: 'Me duelen los pies.', italic: true }
            ],
            [
              { text: 'I brush my ', italic: true },
              { text: 'teeth', bold: true, italic: true },
              { text: ' every day.', italic: true },
              { text: ' → ' },
              { text: 'Me lavo los dientes todos los días.', italic: true }
            ],
            [
              { text: '', italic: true },
              { text: 'People', bold: true, italic: true },
              { text: ' are friendly here.', italic: true },
              { text: ' → ' },
              { text: 'La gente es amable aquí.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Tip: ', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'La palabra ' },
            { text: "'people'", bold: true },
            { text: ' es plural de \'person\', aunque muchas veces se usa como plural general (\'personas\' en español).' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "El Genitivo Sajón ('s) — Posesión",
      explanation: "El **genitivo sajón** es una forma muy natural en inglés de expresar **pertenencia** o **relación**. En español usamos 'de': *el libro de María*. En inglés, cambiamos el orden: *Maria's book* → 'el libro de María'.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Sujeto + 's + objeto poseído",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplos básicos:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "Maria's book", code: true },
              { text: ' → ' },
              { text: 'el libro de María', italic: true }
            ],
            [
              { text: "The company's website", code: true },
              { text: ' → ' },
              { text: 'el sitio web de la empresa', italic: true }
            ],
            [
              { text: "My brother's car", code: true },
              { text: ' → ' },
              { text: 'el auto de mi hermano', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Reglas especiales',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Si el sustantivo termina en -s (como \'James\'):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se puede escribir de dos formas:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "James's car", code: true },
              { text: ' ' },
              { text: '✅', emoji: '✅' },
              { text: ' o ' },
              { text: "James' car", code: true },
              { text: ' ' },
              { text: '✅', emoji: '✅' },
              { text: ' (ambas son aceptadas).' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Si hay varios poseedores:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'El apóstrofe va ' },
            { text: 'después de la \'s\' plural', bold: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "The teachers' lounge", code: true },
              { text: ' → ' },
              { text: 'el salón de los profesores', italic: true },
              { text: '.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '3. También puede encadenarse para varias posesiones:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "My sister's friend's house", code: true },
              { text: ' → ' },
              { text: 'la casa del amigo de mi hermana', italic: true },
              { text: '.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Comparación con \'of\':', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Usamos \'\'s\' generalmente con ' },
            { text: 'personas, animales o grupos vivos', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Usamos ' },
            { text: 'of', bold: true },
            { text: ' con ' },
            { text: 'cosas o conceptos inanimados', bold: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The door of the car', code: true },
              { text: ' ' },
              { text: '✅', emoji: '✅' },
              { text: ' / ' },
              { text: "The car's door", code: true },
              { text: ' ' },
              { text: '✅', emoji: '✅' },
              { text: ' (ambos posibles)' }
            ],
            [
              { text: 'The name of the book', code: true },
              { text: ' ' },
              { text: '✅', emoji: '✅' },
              { text: ' / ' },
              { text: "❌ ", emoji: '❌' },
              { text: "The book's name", code: true },
              { text: ' (poco común)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "She has ___ cat.",
      options: ["a", "an", "the", "some"],
      correctAnswer: 0,
      explanation: "Sustantivo singular que empieza con sonido consonante → usamos 'a'. Es la primera vez que mencionamos el gato, por lo que es indefinido."
    },
    {
      question: "I saw ___ elephant at the zoo.",
      options: ["a", "an", "the", "some"],
      correctAnswer: 1,
      explanation: "Comienza con sonido vocal → usamos 'an'. Es la primera vez que mencionamos el elefante, por lo que es indefinido."
    },
    {
      question: "___ sun rises in the east.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Único y específico: el sol → usamos 'the'. Solo hay un sol, por lo que es definido y específico."
    },
    {
      question: "I have two ___ (child).",
      options: ["childs", "children", "childrens", "child"],
      correctAnswer: 1,
      explanation: "Plural irregular de 'child' → 'children'. No se agrega solo 's', sino que cambia completamente la forma."
    },
    {
      question: "My ___ names are Tom and Jerry.",
      options: ["brother", "brothers'", "brother's", "brothers"],
      correctAnswer: 1,
      explanation: "Plural poseedor → apóstrofe después de la 's': 'brothers''. Hay varios hermanos y queremos mostrar posesión, por eso el apóstrofe va después de la 's' del plural."
    },
    {
      question: "This is my ___ (woman - plural).",
      options: ["womans", "women", "womanes", "womens"],
      correctAnswer: 1,
      explanation: "Plural irregular de 'woman' → 'women'. No se agrega solo 's', la 'a' cambia a 'e'."
    },
    {
      question: "There are many ___ in the room. (box)",
      options: ["boxs", "boxes", "boxies", "box"],
      correctAnswer: 1,
      explanation: "Termina en 'x', se agrega '-es' → 'boxes'. Las palabras que terminan en -s, -ss, -sh, -ch, -x, o -z forman el plural con '-es'."
    },
    {
      question: "___ water in the glass is cold.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Agua específica, ya mencionada o visible → usamos 'the'. Es el agua en el vaso (específica), no cualquier agua."
    },
    {
      question: "___ book on the table is mine.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Libro específico, ya identificado → usamos 'the'. Es el libro en la mesa (específico), no cualquier libro."
    },
    {
      question: "That is Maria___ car.",
      options: ["s", "s'", "'s", ""],
      correctAnswer: 2,
      explanation: "Genitivo sajón → Maria's car = el auto de María. Para expresar posesión, agregamos 's con apóstrofe antes de la 's'."
    }
  ]
};

