import type { LessonData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TableData } from '../lessons';

export const lesson4: LessonData = {
  id: 4,
  title: "Fundamentos Esenciales: Tu Primera Toolbox en Inglés",
  description: "Esta es la base de todo. No aprenderás teoría complicada, sino las palabras y frases que necesitas para sobrevivir en cualquier situación desde el primer día. Dominarás cómo decir la fecha, describir el mundo a tu alrededor y entender cantidades. Es práctico, directo y te dará la confianza para empezar a usar el inglés inmediatamente.",
  welcomeEmoji: "🔧",
  pageTitle: "English Learning - Números, Fechas y Colores",
  metaDescription: "Aprende los fundamentos esenciales del inglés: números cardinales y ordinales, días de la semana, meses del año y colores básicos",
  learningPoints: [
    "A contar y usar números en inglés del 1 al 100, tanto cardinales (para contar) como ordinales (para poner cosas en orden)",
    "A nombrar los días de la semana, los meses del año y las estaciones con confianza",
    "A identificar y usar colores básicos y adjetivos comunes para describir personas, objetos y sentimientos"
  ],
  content: [
    {
      topic: "Números: Contando y Ordenando el Mundo",
      explanation: "Los números son universales. Los usarás para decir tu edad, tu número de teléfono, precios, cantidades y para poner cosas en orden (primero, segundo, tercero...). Los dividimos en dos tipos: **Cardinales (Cardinal Numbers):** Son los números normales que usas para contar (one, two, three). **Ordinales (Ordinal Numbers):** Indican orden o posición (first, second, third). La clave está en memorizar los patrones. Del 1 al 12 son únicos, del 13 al 19 casi todos terminan en \"-teen\", y las decenas (20, 30, 40...) terminan en \"-ty\". Los ordinales, en su mayoría, se forman añadiendo \"-th\" al número cardinal.",
      examples: [
        {
          type: 'title',
          text: 'Números Cardinales',
          emoji: '🔢',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Son los números normales que usas para contar. Del 1 al 12 son únicos, del 13 al 19 casi todos terminan en ', bold: true },
            { text: '"-teen"', code: true },
            { text: ', y las decenas (20, 30, 40...) terminan en ', bold: true },
            { text: '"-ty"', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Del 1 al 10:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "one, two, three, four, five, six, seven, eight, nine, ten",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Del 11 al 15:', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: "eleven, twelve, thirteen, fourteen, fifteen",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Decenas:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'twenty', code: true },
              { text: ' (20)' }
            ],
            [
              { text: 'thirty', code: true },
              { text: ' (30)' }
            ],
            [
              { text: 'forty', code: true },
              { text: ' (40)' }
            ],
            [
              { text: 'fifty', code: true },
              { text: ' (50)' }
            ],
            [
              { text: 'sixty', code: true },
              { text: ' (60)' }
            ],
            [
              { text: 'seventy', code: true },
              { text: ' (70)' }
            ],
            [
              { text: 'eighty', code: true },
              { text: ' (80)' }
            ],
            [
              { text: 'ninety', code: true },
              { text: ' (90)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Números compuestos (decena + guión + unidad):', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'twenty-', code: true },
              { text: 'one', code: true, bold: true },
              { text: ' (21)' }
            ],
            [
              { text: 'thirty-', code: true },
              { text: 'five', code: true, bold: true },
              { text: ' (35)' }
            ],
            [
              { text: 'ninety-', code: true },
              { text: 'nine', code: true, bold: true },
              { text: ' (99)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota importante: ', bold: true },
            { text: 'Los números compuestos siempre llevan guión entre la decena y la unidad.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Números Ordinales',
          emoji: '🔢',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Indican orden o posición. En su mayoría, se forman añadiendo ', bold: true },
            { text: '"-th"', code: true },
            { text: ' al número cardinal, pero hay excepciones importantes.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Irregulares (¡memorízalos!):', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '1st - ', code: true },
              { text: 'first', code: true, bold: true },
              { text: ' (No es "oneth", es irregular)' }
            ],
            [
              { text: '2nd - ', code: true },
              { text: 'second', code: true, bold: true },
              { text: ' (No es "twoth", es irregular)' }
            ],
            [
              { text: '3rd - ', code: true },
              { text: 'third', code: true, bold: true },
              { text: ' (No es "threeth", es irregular)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Regulares:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '4th - ', code: true },
              { text: 'fourth', code: true, bold: true }
            ],
            [
              { text: '5th - ', code: true },
              { text: 'fifth', code: true, bold: true },
              { text: ' (cambia "ve" a "f")' }
            ],
            [
              { text: '10th - ', code: true },
              { text: 'tenth', code: true, bold: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Números compuestos con ordinales:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '21st - twenty-', code: true },
              { text: 'first', code: true, bold: true },
              { text: ' (¡Usamos el ordinal solo en el último número!)' }
            ],
            [
              { text: '32nd - thirty-', code: true },
              { text: 'second', code: true, bold: true }
            ],
            [
              { text: '43rd - forty-', code: true },
              { text: 'third', code: true, bold: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Regla clave: ', bold: true },
            { text: 'En números compuestos, solo el último número se convierte en ordinal.' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Tiempo y Fechas: Organizando tu Vida",
      explanation: "Para quedar con alguien, planificar un viaje o simplemente saber qué día es, necesitas este vocabulario. Una regla crucial en inglés: **los días de la semana y los meses del año siempre se escriben con MAYÚSCULA**. No es opcional, es una regla gramatical.",
      examples: [
        {
          type: 'title',
          text: 'Días de la semana',
          emoji: '📅',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla importante: ', bold: true },
            { text: 'Los días de la semana siempre se escriben con ', bold: true },
            { text: 'MAYÚSCULA', code: true },
            { text: '. No es opcional, es una regla gramatical.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de uso:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I play soccer on ', italic: true },
              { text: 'Saturday', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Juego al fútbol el sábado.)' }
            ],
            [
              { text: 'We meet every ', italic: true },
              { text: 'Monday', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Nos reunimos todos los lunes.)' }
            ],
            [
              { text: 'The store is closed on ', italic: true },
              { text: 'Sunday', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (La tienda está cerrada los domingos.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Meses del año',
          emoji: '📆',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla importante: ', bold: true },
            { text: 'Los meses siempre se escriben con ', bold: true },
            { text: 'MAYÚSCULA', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "January, February, March, April, May, June, July, August, September, October, November, December",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de uso:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'My birthday is in ', italic: true },
              { text: 'October', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Mi cumpleaños es en octubre.)' }
            ],
            [
              { text: 'We travel in ', italic: true },
              { text: 'July', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Viajamos en julio.)' }
            ],
            [
              { text: 'School starts in ', italic: true },
              { text: 'September', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (La escuela empieza en septiembre.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Preposición: ', bold: true },
            { text: 'Usamos ', code: true },
            { text: '"in"', code: true },
            { text: ' para meses: "My birthday is ', code: true },
            { text: 'in', code: true },
            { text: ' July".' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Estaciones',
          emoji: '🍂',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Spring, Summer, Autumn (o Fall), Winter",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de uso:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It snows in ', italic: true },
              { text: 'winter', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Nieva en invierno.)' }
            ],
            [
              { text: 'Flowers bloom in ', italic: true },
              { text: 'spring', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Las flores florecen en primavera.)' }
            ],
            [
              { text: 'We go to the beach in ', italic: true },
              { text: 'summer', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Vamos a la playa en verano.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Las estaciones no suelen llevar mayúscula (a diferencia de los días y meses).' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Colores y Adjetivos: Pintando y Describiendo tu Realidad",
      explanation: "Estas palabras te permiten dar información extra y hacer tus frases más interesantes. Los **colores** son adjetivos. Los **adjetivos comunes** describen cualidades, tamaños, estados de ánimo y más. En inglés, el adjetivo casi siempre va **ANTES** del sustantivo que describe (a diferencia del español). Ejemplo: \"A **big** house\" (Una casa grande).",
      examples: [
        {
          type: 'title',
          text: 'Colores Básicos',
          emoji: '🎨',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los colores son adjetivos y van ', bold: true },
            { text: 'ANTES', code: true },
            { text: ' del sustantivo que describen.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "Red, blue, yellow, green, orange, purple, black, white, brown, gray",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de uso:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have a ', italic: true },
              { text: 'red', italic: true, bold: true },
              { text: ' car.', italic: true },
              { text: ' (Tengo un coche rojo.)' }
            ],
            [
              { text: 'She wears a ', italic: true },
              { text: 'blue', italic: true, bold: true },
              { text: ' dress.', italic: true },
              { text: ' (Ella usa un vestido azul.)' }
            ],
            [
              { text: 'The sky is ', italic: true },
              { text: 'blue', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (El cielo es azul.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Adjetivos Comunes',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Regla clave: ', bold: true },
            { text: 'En inglés, el adjetivo casi siempre va ', bold: true },
            { text: 'ANTES', code: true },
            { text: ' del sustantivo (a diferencia del español).' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ejemplo: ', bold: true },
            { text: '"A ', code: true },
            { text: 'big', code: true, bold: true },
            { text: ' house"', code: true },
            { text: ' (Una casa grande) - ', code: true },
            { text: 'NO', code: true, bold: true },
            { text: ' "A house big"', code: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Tamaño:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'big', code: true },
              { text: ' (grande)' }
            ],
            [
              { text: 'small', code: true },
              { text: ' (pequeño)' }
            ],
            [
              { text: 'long', code: true },
              { text: ' (largo)' }
            ],
            [
              { text: 'short', code: true },
              { text: ' (corto)' }
            ],
            [
              { text: 'tall', code: true },
              { text: ' (alto)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Estado de ánimo:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'happy', code: true },
              { text: ' (feliz)' }
            ],
            [
              { text: 'sad', code: true },
              { text: ' (triste)' }
            ],
            [
              { text: 'tired', code: true },
              { text: ' (cansado)' }
            ],
            [
              { text: 'excited', code: true },
              { text: ' (emocionado)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Otras características:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'good', code: true },
              { text: ' (bueno)' }
            ],
            [
              { text: 'bad', code: true },
              { text: ' (malo)' }
            ],
            [
              { text: 'hot', code: true },
              { text: ' (caliente)' }
            ],
            [
              { text: 'cold', code: true },
              { text: ' (frío)' }
            ],
            [
              { text: 'new', code: true },
              { text: ' (nuevo)' }
            ],
            [
              { text: 'old', code: true },
              { text: ' (viejo)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos de uso:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She is a ', italic: true },
              { text: 'happy', italic: true, bold: true },
              { text: ' person.', italic: true },
              { text: ' (Ella es una persona feliz.)' }
            ],
            [
              { text: "It's a ", italic: true },
              { text: 'long', italic: true, bold: true },
              { text: ' road.', italic: true },
              { text: ' (Es un camino largo.)' }
            ],
            [
              { text: 'He has a ', italic: true },
              { text: 'big', italic: true, bold: true },
              { text: ' house.', italic: true },
              { text: ' (Él tiene una casa grande.)' }
            ],
            [
              { text: 'I feel ', italic: true },
              { text: 'tired', italic: true, bold: true },
              { text: '.', italic: true },
              { text: ' (Me siento cansado.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Recordatorio: ', bold: true },
            { text: 'El adjetivo siempre va antes del sustantivo: "', code: true },
            { text: 'big', code: true, bold: true },
            { text: ' house"', code: true },
            { text: ', no "house big".' }
          ]
        } as ParagraphData
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cómo se escribe el número 43 en inglés?",
      options: ["forty-three", "fourty-three", "forty three"],
      correctAnswer: 0,
      explanation: "Sigue la regla: decena (forty) + guión + unidad (three). 'Fourty' es un error común, la decena correcta es 'forty' (sin 'u'). Los números compuestos llevan guión."
    },
    {
      question: "¿Cuál es la forma ordinal de \"five\" (5)?",
      options: ["fiveth", "fifth", "fifeth"],
      correctAnswer: 1,
      explanation: "Es irregular: five → fifth (cambia \"ve\" por \"f\" y añade \"th\")."
    },
    {
      question: "La frase \"My birthday is on july\" tiene un error. ¿Cuál es?",
      options: ["La preposición \"on\"", "La palabra \"birthday\"", "La palabra \"july\""],
      correctAnswer: 2,
      explanation: "Los meses siempre llevan mayúscula: **July**. Además, se usa \"in\" para meses: \"My birthday is in July\"."
    },
    {
      question: "¿Cómo se dice \"martes\" en inglés?",
      options: ["Monday", "Tuesday", "Thursday"],
      correctAnswer: 1,
      explanation: "Tuesday es martes. Monday es lunes y Thursday es jueves."
    },
    {
      question: "Si algo es \"small\", es...",
      options: ["Grande", "Pequeño", "Feliz"],
      correctAnswer: 1,
      explanation: "\"Small\" significa pequeño. \"Big\" es grande y \"happy\" es feliz."
    },
    {
      question: "¿Cuál es el orden CORRECTO de la frase en inglés?",
      options: ["house big", "big house", "A big house"],
      correctAnswer: 1,
      explanation: "En inglés, el adjetivo va ANTES del sustantivo: \"big house\". La opción C también es correcta pero incluye el artículo."
    },
    {
      question: "¿Cómo se dice \"tercer\" en inglés (por ejemplo, \"el tercer piso\")?",
      options: ["three", "third", "threeth"],
      correctAnswer: 1,
      explanation: "\"Third\" es el ordinal (tercero). \"Three\" es el cardinal (tres) y \"threeth\" no existe."
    },
    {
      question: "¿Qué estación viene después del invierno (winter)?",
      options: ["Spring (Primavera)", "Summer (Verano)", "Fall (Otoño)"],
      correctAnswer: 0,
      explanation: "El ciclo es: Winter → Spring → Summer → Autumn/Fall."
    },
    {
      question: "El color entre \"red\" y \"yellow\" es...",
      options: ["Green", "Orange", "Purple"],
      correctAnswer: 1,
      explanation: "El naranja (orange) se hace con rojo y amarillo. Green se hace con blue y yellow, purple se hace con blue y red."
    },
    {
      question: "La frase \"He is a sad boy\" significa:",
      options: ["Él es un niño feliz", "Él es un niño alto", "Él es un niño triste"],
      correctAnswer: 2,
      explanation: "\"Sad\" significa triste. \"Happy\" sería feliz y \"tall\" sería alto."
    }
  ]
};
