import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson10: LessonData = {
  id: 10,
  title: "Otras Estructuras Esenciales del Inglés",
  description: "Aprende tres estructuras fundamentales que aparecen constantemente en inglés cotidiano: 'There is / There are' para describir lo que existe en un lugar, 'Have got' para hablar de posesión y relaciones, y 'Can / Can't' para expresar habilidades y capacidades.",
  welcomeEmoji: "🧩",
  pageTitle: "English Learning - Estructuras Esenciales: There is/are, Have got, Can",
  metaDescription: "Domina las estructuras esenciales del inglés: There is/There are para existencia, Have got para posesión, y Can/Can't para habilidades. Aprende sus formas afirmativas, negativas e interrogativas.",
  learningPoints: [
    "Describir lo que hay en un lugar con there is / there are",
    "Hablar de posesiones o cosas que tienes usando have got",
    "Expresar habilidades o incapacidades con can / can't",
    "Diferenciar sus estructuras afirmativas, negativas e interrogativas",
    "Usar correctamente los cuantificadores con there is/are",
    "Aplicar estas estructuras en distintos contextos de la vida cotidiana"
  ],
  content: [
    {
      topic: "'There is / There are' — Describiendo lo que hay",
      explanation: "En inglés, cuando queremos **decir que algo existe o está presente** en un lugar, usamos **'there is'** (para singular) o **'there are'** (para plural). Aunque literalmente significa 'hay', no se traduce palabra por palabra, ya que 'there' no significa 'ahí' en este contexto, sino que actúa como **introducción a la existencia** de algo.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de oración', 'Singular', 'Plural'],
          rows: [
            ['Afirmativa', "There is a park. (Hay un parque.)", "There are two shops. (Hay dos tiendas.)"],
            ['Negativa', "There isn't a park. (No hay un parque.)", "There aren't any shops. (No hay tiendas.)"],
            ['Interrogativa', "Is there a park? (¿Hay un parque?)", "Are there any shops? (¿Hay tiendas?)"]
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Notas clave',
          emoji: '🧠',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Con ', bold: true },
              { text: 'singular', code: true },
              { text: ', usamos ' },
              { text: "'is'", code: true },
              { text: '; con ' },
              { text: 'plural', code: true },
              { text: ', usamos ' },
              { text: "'are'", code: true },
              { text: '.' }
            ],
            [
              { text: 'En las preguntas y negativas, usamos ' },
              { text: "'any'", code: true },
              { text: ' cuando hablamos en plural.' }
            ],
            [
              { text: '→ ', italic: true },
              { text: 'Are there any books on the table?', italic: true }
            ],
            [
              { text: 'Podemos añadir cuantificadores como ' },
              { text: 'some', code: true },
              { text: ', ' },
              { text: 'many', code: true },
              { text: ', ' },
              { text: 'a lot of', code: true },
              { text: ', ' },
              { text: 'few', code: true },
              { text: ', ' },
              { text: 'several', code: true },
              { text: '.' }
            ],
            [
              { text: '→ ', italic: true },
              { text: 'There are many people here.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'There is a cat on the sofa.', italic: true },
              { text: ' → Hay un gato en el sofá.' }
            ],
            [
              { text: 'There are three students in the classroom.', italic: true },
              { text: ' → Hay tres estudiantes en el aula.' }
            ],
            [
              { text: "There isn't a restaurant near here.", italic: true },
              { text: ' → No hay un restaurante cerca de aquí.' }
            ],
            [
              { text: 'Are there any apples?', italic: true },
              { text: ' → ¿Hay manzanas?' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos con cuantificadores',
          emoji: '🔢',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'There are some books on the table.', italic: true },
              { text: ' → Hay algunos libros en la mesa.' }
            ],
            [
              { text: 'There are many cars in the parking lot.', italic: true },
              { text: ' → Hay muchos autos en el estacionamiento.' }
            ],
            [
              { text: 'There are a lot of people in the park.', italic: true },
              { text: ' → Hay mucha gente en el parque.' }
            ],
            [
              { text: 'There are a few chairs in the room.', italic: true },
              { text: ' → Hay unas pocas sillas en la habitación.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'Have got' — Expresando posesión",
      explanation: "En inglés británico (y también muy usado en inglés general), **'have got'** significa **'tener'**. Se utiliza para hablar de **posesiones físicas**, **familia**, **relaciones**, **características** o **problemas de salud**. En inglés americano también se usa **'have'** sin *got*, pero ambas formas son correctas.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de oración', 'Ejemplo'],
          rows: [
            ['Afirmativa', "I've got a brother. (Tengo un hermano.)"],
            ['Negativa', "She hasn't got a car. (Ella no tiene un auto.)"],
            ['Interrogativa', 'Have you got any money? (¿Tienes dinero?)']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Notas clave',
          emoji: '🧠',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'La contracción más común es ' },
              { text: "I've got", code: true },
              { text: ' / ' },
              { text: "You've got", code: true },
              { text: ' / ' },
              { text: "He's got", code: true },
              { text: ' / ' },
              { text: "She's got", code: true },
              { text: ' / ' },
              { text: "We've got", code: true },
              { text: ' / ' },
              { text: "They've got", code: true },
              { text: '.' }
            ],
            [
              { text: 'En negativa: ' },
              { text: "haven't got", code: true },
              { text: ' / ' },
              { text: "hasn't got", code: true },
              { text: '.' }
            ],
            [
              { text: 'En preguntas: el ' },
              { text: "'have'", code: true },
              { text: ' o ' },
              { text: "'has'", code: true },
              { text: ' pasa al inicio.' }
            ],
            [
              { text: '→ ', italic: true },
              { text: 'Has he got a dog?', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencia británica vs. americana',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'British English: ', bold: true },
              { text: "I've got a car.", italic: true },
              { text: ' (más común)' }
            ],
            [
              { text: 'American English: ', bold: true },
              { text: 'I have a car.', italic: true },
              { text: ' (más común)' }
            ],
            [
              { text: 'Ambas son correctas y se entienden en todos lados.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de posesión física',
          emoji: '📦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "I've got two sisters.", italic: true },
              { text: ' → Tengo dos hermanas.' }
            ],
            [
              { text: "He hasn't got a bike.", italic: true },
              { text: ' → Él no tiene bicicleta.' }
            ],
            [
              { text: 'Have they got a new house?', italic: true },
              { text: ' → ¿Tienen una casa nueva?' }
            ],
            [
              { text: "She's got a beautiful garden.", italic: true },
              { text: ' → Ella tiene un jardín hermoso.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de familia y relaciones',
          emoji: '👨‍👩‍👧‍👦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "I've got three brothers.", italic: true },
              { text: ' → Tengo tres hermanos.' }
            ],
            [
              { text: 'Has she got any children?', italic: true },
              { text: ' → ¿Tiene ella hijos?' }
            ],
            [
              { text: "They've got many friends.", italic: true },
              { text: ' → Tienen muchos amigos.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de características',
          emoji: '👤',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "He's got blue eyes.", italic: true },
              { text: ' → Él tiene ojos azules.' }
            ],
            [
              { text: "She's got long hair.", italic: true },
              { text: ' → Ella tiene cabello largo.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de problemas de salud',
          emoji: '🏥',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "We've got a problem.", italic: true },
              { text: ' → Tenemos un problema.' }
            ],
            [
              { text: "I've got a headache.", italic: true },
              { text: ' → Tengo dolor de cabeza.' }
            ],
            [
              { text: 'Has he got a cold?', italic: true },
              { text: ' → ¿Tiene él un resfriado?' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'Can / Can't' — Habilidades y capacidades",
      explanation: "El verbo **'can'** es un **verbo modal**, y se usa para **expresar habilidad, posibilidad o permiso**. En esta lección, nos centraremos en el **uso de habilidad** (lo que alguien puede o no puede hacer). 'Can' **no cambia** con el sujeto y el verbo que le sigue **nunca lleva 'to' ni '-s'**.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo de oración', 'Estructura', 'Ejemplo'],
          rows: [
            ['Afirmativa', 'Sujeto + can + verbo base', 'I can swim. (Puedo nadar.)'],
            ['Negativa', "Sujeto + can't (cannot) + verbo base", "She can't drive. (Ella no puede manejar.)"],
            ['Interrogativa', 'Can + sujeto + verbo base + ?', 'Can you sing? (¿Puedes cantar?)']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Notas clave',
          emoji: '🧠',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "'Can' ", code: true },
              { text: 'no cambia con el sujeto (no se dice ' },
              { text: 'he cans', italic: true },
              { text: ').' }
            ],
            [
              { text: 'El verbo que sigue a ' },
              { text: "'can'", code: true },
              { text: ' nunca lleva ' },
              { text: "'to'", code: true },
              { text: ' ni ' },
              { text: "'-s'", code: true },
              { text: '.' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'He can to swim', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'He can swim', italic: true },
              { text: '.' }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She cans play', italic: true },
              { text: ' → ' },
              { text: '✅ ', emoji: '✅' },
              { text: 'She can play', italic: true },
              { text: '.' }
            ],
            [
              { text: "'Can't'", code: true },
              { text: ' es la contracción de ' },
              { text: 'cannot', italic: true },
              { text: '.' }
            ],
            [
              { text: 'La forma completa negativa es ' },
              { text: "'cannot'", code: true },
              { text: ' (una sola palabra).' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de habilidades',
          emoji: '💪',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I can speak English.', italic: true },
              { text: ' → Puedo hablar inglés.' }
            ],
            [
              { text: 'She can play the piano.', italic: true },
              { text: ' → Ella puede tocar el piano.' }
            ],
            [
              { text: 'They can dance very well.', italic: true },
              { text: ' → Ellos pueden bailar muy bien.' }
            ],
            [
              { text: 'We can cook Italian food.', italic: true },
              { text: ' → Podemos cocinar comida italiana.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos negativos (incapacidades)',
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: "He can't cook.", italic: true },
              { text: ' → Él no puede cocinar.' }
            ],
            [
              { text: "I can't swim.", italic: true },
              { text: ' → No puedo nadar.' }
            ],
            [
              { text: "They can't speak French.", italic: true },
              { text: ' → Ellos no pueden hablar francés.' }
            ],
            [
              { text: "She can't drive.", italic: true },
              { text: ' → Ella no puede manejar.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos interrogativos',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Can they play the guitar?', italic: true },
              { text: ' → ¿Pueden tocar la guitarra?' }
            ],
            [
              { text: 'Can you ride a bike?', italic: true },
              { text: ' → ¿Puedes andar en bicicleta?' }
            ],
            [
              { text: 'Can he swim?', italic: true },
              { text: ' → ¿Puede él nadar?' }
            ],
            [
              { text: 'Can she speak Spanish?', italic: true },
              { text: ' → ¿Puede ella hablar español?' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Respuestas cortas',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Can you swim?', italic: true },
              { text: ' → Yes, I can. / No, I can\'t.' }
            ],
            [
              { text: 'Can she drive?', italic: true },
              { text: ' → Yes, she can. / No, she can\'t.' }
            ],
            [
              { text: 'Can they speak English?', italic: true },
              { text: ' → Yes, they can. / No, they can\'t.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Comparación y uso en contexto",
      explanation: "Ahora que conocemos las tres estructuras, es importante entender **cuándo usar cada una** y cómo se combinan en conversaciones reales. Cada estructura tiene un propósito específico y se usa en contextos diferentes.",
      examples: [
        {
          type: 'title',
          text: 'Diferencias clave',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Estructura', 'Uso principal', 'Ejemplo'],
          rows: [
            ['There is/are', 'Describir existencia en lugar', 'There is a book on the table.'],
            ['Have got', 'Posesión, familia, relaciones', "I've got a new phone."],
            ['Can/Can\'t', 'Habilidades, capacidades', 'She can speak three languages.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo de conversación usando las tres estructuras',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Is there a swimming pool in your building?', italic: true },
              { text: ' (¿Hay una piscina en tu edificio?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "Yes, there is. It's on the roof.", italic: true },
              { text: ' (Sí, hay. Está en el techo.)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'Have you got swimming goggles?', italic: true },
              { text: ' (¿Tienes gafas de natación?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "No, I haven't got any. But I can buy some.", italic: true },
              { text: ' (No, no tengo. Pero puedo comprar unas.)' }
            ],
            [
              { text: 'A: ', bold: true },
              { text: 'Can you swim?', italic: true },
              { text: ' (¿Puedes nadar?)' }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'Yes, I can swim very well.', italic: true },
              { text: ' (Sí, puedo nadar muy bien.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Más ejemplos combinados',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Describiendo una casa:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'There are three bedrooms in my house.', italic: true },
              { text: ' (Hay tres habitaciones en mi casa.)' }
            ],
            [
              { text: "I've got a big garden.", italic: true },
              { text: ' (Tengo un jardín grande.)' }
            ],
            [
              { text: 'You can see the mountains from the window.', italic: true },
              { text: ' (Puedes ver las montañas desde la ventana.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Hablando de la familia:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'There are five people in my family.', italic: true },
              { text: ' (Hay cinco personas en mi familia.)' }
            ],
            [
              { text: "I've got two brothers and one sister.", italic: true },
              { text: ' (Tengo dos hermanos y una hermana.)' }
            ],
            [
              { text: 'My brother can play the guitar.', italic: true },
              { text: ' (Mi hermano puede tocar la guitarra.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Describiendo una ciudad:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'There are many restaurants in this area.', italic: true },
              { text: ' (Hay muchos restaurantes en esta área.)' }
            ],
            [
              { text: "I've got a favorite café near my house.", italic: true },
              { text: ' (Tengo una cafetería favorita cerca de mi casa.)' }
            ],
            [
              { text: 'You can walk to the park in ten minutes.', italic: true },
              { text: ' (Puedes caminar al parque en diez minutos.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Errores comunes y cómo evitarlos",
      explanation: "Estos son los errores más frecuentes que cometen los estudiantes al usar estas tres estructuras. Conocerlos te ayudará a evitarlos y a hablar con más precisión.",
      examples: [
        {
          type: 'title',
          text: "Errores con 'There is / There are'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'There are a book on the table.', italic: true },
              { text: ' (plural con singular)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'There is a book on the table.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'It is a park near here.', italic: true },
              { text: " (usar 'it' en lugar de 'there')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'There is a park near here.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'There have many people.', italic: true },
              { text: " (mezclar 'there' con 'have')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'There are many people.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Are there a problem?', italic: true },
              { text: ' (plural con singular)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Is there a problem?', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Errores con 'Have got'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I has got a car.', italic: true },
              { text: " (usar 'has' con 'I')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I have got a car.', italic: true },
              { text: ' o ' },
              { text: "I've got a car.", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "She haven't got a phone.", italic: true },
              { text: " (usar 'haven't' con tercera persona)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "She hasn't got a phone.", italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Do you have got a pen?', italic: true },
              { text: " (mezclar 'do' con 'have got')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Have you got a pen?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: "He's got blue eyes and brown hairs.", italic: true },
              { text: " ('hair' es incontable)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "He's got blue eyes and brown hair.", italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Errores con 'Can / Can't'",
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'He cans swim.', italic: true },
              { text: " (agregar '-s' a 'can')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'He can swim.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'She can to drive.', italic: true },
              { text: " (agregar 'to' después de 'can')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'She can drive.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'I can speaks English.', italic: true },
              { text: " (agregar '-s' al verbo después de 'can')" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'I can speak English.', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'Can she drives?', italic: true },
              { text: " (verbo con '-s' en pregunta)" }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: 'Can she drive?', italic: true }
            ],
            [
              { text: '❌ ', emoji: '❌' },
              { text: 'He not can swim.', italic: true },
              { text: ' (orden incorrecto en negativa)' }
            ],
            [
              { text: '✅ ', emoji: '✅' },
              { text: "He can't swim.", italic: true },
              { text: ' o ' },
              { text: 'He cannot swim.', italic: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "There ___ a cat on the table.",
      options: ["are", "is", "be", "have"],
      correctAnswer: 1,
      explanation: "Correcto: 'cat' es singular, por lo tanto se usa 'is'. La estructura correcta es 'There is' para singular y 'There are' para plural."
    },
    {
      question: "There ___ any apples in the basket.",
      options: ["is", "aren't", "isn't", "were"],
      correctAnswer: 1,
      explanation: "Correcto: 'apples' es plural y la oración es negativa, por lo tanto se usa 'aren't'. En negativas con plural usamos 'aren't' junto con 'any'."
    },
    {
      question: "___ there a supermarket near here?",
      options: ["Is", "Are", "Has", "Do"],
      correctAnswer: 0,
      explanation: "Correcto: se usa 'Is' con singular ('a supermarket'). Para formar preguntas con 'there is/are', el verbo va al principio."
    },
    {
      question: "I ___ got two dogs.",
      options: ["have", "has", "am", "got"],
      correctAnswer: 0,
      explanation: "Correcto: forma completa 'I have got' o contracción 'I've got'. Con 'I' siempre se usa 'have', nunca 'has'."
    },
    {
      question: "She hasn't got a car. → ¿Qué significa?",
      options: [
        "Ella tiene un auto.",
        "Ella no tiene un auto.",
        "Ella compró un auto.",
        "Ella quiere un auto."
      ],
      correctAnswer: 1,
      explanation: "Correcto: 'hasn't got' = 'no tiene'. La estructura 'hasn't got' es la forma negativa de 'has got' en tercera persona singular."
    },
    {
      question: "___ you got any brothers or sisters?",
      options: ["Have", "Do", "Are", "Got"],
      correctAnswer: 0,
      explanation: "Correcto: se coloca 'Have' al inicio para formar la pregunta con 'have got'. No se usa 'do' con la estructura 'have got'."
    },
    {
      question: "He ___ play the piano very well.",
      options: ["can", "cans", "could", "is"],
      correctAnswer: 0,
      explanation: "Correcto: habilidad positiva → 'can'. El verbo modal 'can' nunca cambia de forma, no se agrega '-s' con tercera persona."
    },
    {
      question: "They ___ speak Japanese.",
      options: ["can", "can't", "can", "doesn't"],
      correctAnswer: 1,
      explanation: "Correcto: si la respuesta esperada es negativa, usamos 'can't' que expresa 'no pueden hablar japonés'. 'Can't' es la forma negativa de 'can'."
    },
    {
      question: "Can she drive? → ¿Qué significa?",
      options: [
        "¿Puede ella conducir?",
        "Ella puede conducir.",
        "Ella no puede conducir.",
        "Ella debe conducir."
      ],
      correctAnswer: 0,
      explanation: "Correcto: pregunta sobre habilidad. La estructura 'Can + sujeto + verbo' se usa para preguntar sobre capacidades o habilidades."
    },
    {
      question: "There are two dogs in the park. → ¿Qué indica 'There are'?",
      options: [
        "Que los perros pertenecen a alguien.",
        "Que existen o están en el lugar.",
        "Que los perros pueden correr.",
        "Que los perros son grandes."
      ],
      correctAnswer: 1,
      explanation: "Correcto: 'there are' describe existencia. La estructura 'There is/are' se usa para indicar que algo existe o está presente en un lugar específico."
    }
  ]
};

