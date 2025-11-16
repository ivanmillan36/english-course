import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson3: LessonData = {
  id: 3,
  title: "Los Cimientos del Inglés: La Estructura SVO y los Pronombres Personales",
  description: "Esta lección es el primer y más importante paso para construir oraciones correctas en inglés. Aprenderás el orden básico de las palabras (Sujeto + Verbo + Objeto), que es muy estricto en inglés comparado con el español. También dominarás las palabras que usamos para reemplazar los nombres: los pronombres personales (I, you, he, she, it, we, they). Sin esto, no puedes formar ni las oraciones más simples.",
  welcomeEmoji: "🏗️",
  pageTitle: "English Learning - Estructura SVO y Pronombres Personales",
  metaDescription: "Aprende los fundamentos del inglés: estructura SVO y pronombres personales básicos",
  learningPoints: [
    "La regla fundamental del orden de las palabras en una oración afirmativa en inglés: Sujeto + Verbo + Objeto (SVO)",
    "La lista completa de pronombres personales que funcionan como sujeto (I, you, he, she, it, we, they) y cómo elegir el correcto"
  ],
  content: [
    {
      topic: "El Orden SVO: Sujeto + Verbo + Objeto",
      explanation: "En español, a menudo podemos cambiar el orden de las palabras porque las terminaciones nos indican quién hace la acción. Por ejemplo, \"El perro come pan\" y \"Pan come el perro\" significan básicamente lo mismo (aunque la segunda suena extraña), porque la terminación \"-e\" en \"come\" nos dice que el sujeto es \"él/ella/usted\". En inglés, esto **NO** es posible. Las palabras no tienen esas terminaciones, por lo que el **orden** de las palabras es el que nos dice el significado. El orden casi siempre es: 1. **Sujeto (Subject):** ¿Quién o qué realiza la acción? 2. **Verbo (Verb):** ¿Qué acción realiza? 3. **Objeto (Object):** ¿Qué recibe la acción? Si cambias este orden, la oración se vuelve confusa o directamente incorrecta.",
      examples: [
        {
          type: 'title',
          text: 'Estructura básica',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Sujeto + Verbo + Objeto (SVO)",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'El orden de las palabras en inglés es muy estricto. Casi siempre seguimos este patrón:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '1. ', bold: true },
              { text: 'Sujeto (Subject): ', bold: true },
              { text: '¿Quién o qué realiza la acción?' }
            ],
            [
              { text: '2. ', bold: true },
              { text: 'Verbo (Verb): ', bold: true },
              { text: '¿Qué acción realiza?' }
            ],
            [
              { text: '3. ', bold: true },
              { text: 'Objeto (Object): ', bold: true },
              { text: '¿Qué recibe la acción?' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos de estructura SVO',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'The dog ', bold: true },
              { text: '/ ', code: true },
              { text: 'eats ', bold: true },
              { text: '/ ', code: true },
              { text: 'a bone.', italic: true },
              { text: ' (El perro / come / un hueso.)' }
            ],
            [
              { text: 'Sujeto: ', bold: true },
              { text: 'The dog', code: true },
              { text: ' | ' },
              { text: 'Verbo: ', bold: true },
              { text: 'eats', code: true },
              { text: ' | ' },
              { text: 'Objeto: ', bold: true },
              { text: 'a bone', code: true }
            ],
            [
              { text: 'Maria ', bold: true },
              { text: '/ ', code: true },
              { text: 'reads ', bold: true },
              { text: '/ ', code: true },
              { text: 'a book.', italic: true },
              { text: ' (María / lee / un libro.)' }
            ],
            [
              { text: 'Sujeto: ', bold: true },
              { text: 'Maria', code: true },
              { text: ' | ' },
              { text: 'Verbo: ', bold: true },
              { text: 'reads', code: true },
              { text: ' | ' },
              { text: 'Objeto: ', bold: true },
              { text: 'a book', code: true }
            ],
            [
              { text: 'They ', bold: true },
              { text: '/ ', code: true },
              { text: 'play ', bold: true },
              { text: '/ ', code: true },
              { text: 'soccer.', italic: true },
              { text: ' (Ellos / juegan / fútbol.)' }
            ],
            [
              { text: 'Sujeto: ', bold: true },
              { text: 'They', code: true },
              { text: ' | ' },
              { text: 'Verbo: ', bold: true },
              { text: 'play', code: true },
              { text: ' | ' },
              { text: 'Objeto: ', bold: true },
              { text: 'soccer', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Importante: ', bold: true },
            { text: 'Si cambias este orden, la oración se vuelve confusa o directamente incorrecta. En inglés, el orden de las palabras es fundamental para entender el significado.' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Los Pronombres Personales de Sujeto (Subject Pronouns)",
      explanation: "Los pronombres personales son palabras que usamos para reemplazar un sustantivo (nombre de una persona, animal o cosa) y así evitar repetirlo constantemente. Siempre funcionan como el **sujeto** de la oración (la persona o cosa que hace la acción del verbo). Es crucial memorizarlos y saber cuándo usar cada uno.",
      examples: [
        {
          type: 'title',
          text: '¿Qué son los pronombres personales?',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los pronombres personales son palabras que usamos para reemplazar un sustantivo (nombre de una persona, animal o cosa) y así evitar repetirlo constantemente. Siempre funcionan como el ' },
            { text: 'sujeto', bold: true },
            { text: ' de la oración (la persona o cosa que hace la acción del verbo).' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Es crucial memorizarlos y saber cuándo usar cada uno.', bold: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de pronombres personales',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Pronombre', 'Traducción', 'Ejemplo'],
          rows: [
            ['I', 'Yo', 'I eat an apple. (Yo como una manzana.)'],
            ['You', 'Tú, Usted, Vosotros, Ustedes', 'You are my friend. (Tú eres mi amigo.)'],
            ['He', 'Él', 'He works here. (Él trabaja aquí.)'],
            ['She', 'Ella', 'She loves music. (Ella ama la música.)'],
            ['It', 'Ello/Eso (animales y cosas)', 'It is a book. (Es un libro.)'],
            ['We', 'Nosotros/Nosotras', 'We study English. (Nosotros estudiamos inglés.)'],
            ['They', 'Ellos/Ellas', 'They live in Madrid. (Ellos viven en Madrid.)']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos detallados',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', bold: true },
              { text: '(Yo) - ', italic: true },
              { text: 'I eat an apple.', italic: true },
              { text: ' (Yo como una manzana.)' }
            ],
            [
              { text: 'You ', bold: true },
              { text: '(Tú, Usted, Vosotros, Ustedes) - ', italic: true },
              { text: 'You are my friend.', italic: true },
              { text: ' (Tú eres mi amigo.)' }
            ],
            [
              { text: 'He ', bold: true },
              { text: '(Él) - ', italic: true },
              { text: 'He works here.', italic: true },
              { text: ' (Él trabaja aquí.)' }
            ],
            [
              { text: 'She ', bold: true },
              { text: '(Ella) - ', italic: true },
              { text: 'She loves music.', italic: true },
              { text: ' (Ella ama la música.)' }
            ],
            [
              { text: 'It ', bold: true },
              { text: '(Ello/Eso para animales y cosas) - ', italic: true },
              { text: 'It is a book.', italic: true },
              { text: ' (Es un libro.)' }
            ],
            [
              { text: 'The dog? → ', italic: true },
              { text: 'It ', bold: true },
              { text: 'is big.', italic: true },
              { text: ' (¿El perro? → Es grande.)' }
            ],
            [
              { text: 'We ', bold: true },
              { text: '(Nosotros/Nosotras) - ', italic: true },
              { text: 'We study English.', italic: true },
              { text: ' (Nosotros estudiamos inglés.)' }
            ],
            [
              { text: 'They ', bold: true },
              { text: '(Ellos/Ellas) - ', italic: true },
              { text: 'They live in Madrid.', italic: true },
              { text: ' (Ellos viven en Madrid.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Nota importante sobre "You"',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '"You" se usa para "tú", "usted", "vosotros" y "ustedes". La diferencia se entiende por el contexto.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You are my friend.', italic: true },
              { text: ' (Tú eres mi amigo.)' }
            ],
            [
              { text: 'You are very kind.', italic: true },
              { text: ' (Usted es muy amable.)' }
            ],
            [
              { text: 'You are students.', italic: true },
              { text: ' (Vosotros/Ustedes son estudiantes.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Cuándo usar "It"',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Usamos "it" para:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [{ text: 'Objetos y cosas: ', bold: true }, { text: 'The car → It is red.', italic: true }],
            [{ text: 'Animales (en general): ', bold: true }, { text: 'The dog → It is big.', italic: true }],
            [{ text: 'Conceptos abstractos: ', bold: true }, { text: 'The idea → It is good.', italic: true }]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Solo usamos "he" o "she" para animales si estamos humanizando a la mascota y queriendo especificar claramente su sexo.' }
          ]
        } as ParagraphData
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cuál es el orden correcto de una oración básica en inglés?",
      options: [
        "Objeto + Verbo + Sujeto",
        "Verbo + Sujeto + Objeto",
        "Sujeto + Objeto + Verbo",
        "Sujeto + Verbo + Objeto"
      ],
      correctAnswer: 3,
      explanation: "Sujeto + Verbo + Objeto. Este es el orden fundamental que debemos seguir siempre en las oraciones afirmativas."
    },
    {
      question: "Elige el pronombre correcto para reemplazar el sujeto: \"The car is red.\"",
      options: ["He", "She", "It", "They"],
      correctAnswer: 2,
      explanation: "It. Usamos \"it\" para objetos, animales y cosas. \"The car\" (el coche) es una cosa."
    },
    {
      question: "¿Cuál es la oración correcta?",
      options: [
        "Eat I pizza.",
        "Pizza I eat.",
        "I eat pizza.",
        "I pizza eat."
      ],
      correctAnswer: 2,
      explanation: "I eat pizza. Sigue el orden correcto SVO: Sujeto (I) + Verbo (eat) + Objeto (pizza)."
    },
    {
      question: "Elige el pronombre correcto para reemplazar el sujeto: \"My sister and I\"",
      options: ["They", "We", "You", "She"],
      correctAnswer: 1,
      explanation: "We. \"We\" significa \"nosotros/nosotras\". \"My sister and I\" se traduce como \"nosotras\" o \"nosotros\"."
    },
    {
      question: "¿Cuál es el objeto en la oración: \"The teacher writes on the board\"?",
      options: [
        "The teacher",
        "writes",
        "on the board",
        "board"
      ],
      correctAnswer: 2,
      explanation: "on the board. El objeto es \"qué recibe la acción\". La acción (writes) se realiza \"on the board\" (en la pizarra)."
    },
    {
      question: "Elige el pronombre correcto para un perro (dog) macho.",
      options: ["He", "She", "It", "They"],
      correctAnswer: 2,
      explanation: "It. Por regla general, para animales usamos \"it\". Solo usamos \"he\" o \"she\" si estamos humanizando a la mascota y queriendo especificar claramente su sexo."
    },
    {
      question: "¿Cuál es el verbo en la oración: \"They play video games\"?",
      options: ["They", "play", "video", "games"],
      correctAnswer: 1,
      explanation: "play. El verbo es la acción que realiza el sujeto (They). La acción es \"jugar\" (play)."
    },
    {
      question: "Elige el pronombre correcto para \"Maria\".",
      options: ["I", "He", "She", "It"],
      correctAnswer: 2,
      explanation: "She. \"She\" es el pronombre para mujeres y niñas. Maria es un nombre de mujer."
    },
    {
      question: "¿Cuál es la traducción correcta de \"Ella come una manzana\"?",
      options: [
        "She eats an apple.",
        "Eats she an apple.",
        "An apple she eats.",
        "Apple an she eats."
      ],
      correctAnswer: 0,
      explanation: "She eats an apple. Sigue el orden SVO: Sujeto (She) + Verbo (eats) + Objeto (an apple)."
    },
    {
      question: "Elige el pronombre correcto para \"John and Peter\".",
      options: ["We", "You", "They", "He"],
      correctAnswer: 2,
      explanation: "They. \"They\" es el pronombre para \"ellos\" (masculino) o \"ellas\" (femenino). \"John and Peter\" son dos personas, por lo tanto, \"ellos\"."
    }
  ]
};
