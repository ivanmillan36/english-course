import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson6: LessonData = {
  id: 6,
  title: "Los Cimientos: Dominando el Verbo \"To Be\" (Ser/Estar)",
  description: "Bienvenido a la piedra angular del inglés. En esta lección, desglosaremos completamente el verbo más importante y versátil del idioma: \"To Be\". Aprenderás a usarlo en sus formas afirmativa, negativa e interrogativa, entenderás las contracciones (como I'm, isn't, aren't) y podrás formar tus primeras oraciones con confianza. Sin este verbo, no puedes construir nada; con él, puedes construir todo.",
  welcomeEmoji: "🏗️",
  pageTitle: "English Learning - Dominando el Verbo To Be",
  metaDescription: "Domina el verbo más importante del inglés: To Be. Aprende sus formas afirmativa, negativa e interrogativa, las contracciones y cómo formar oraciones correctamente.",
  learningPoints: [
    "La conjugación correcta del verbo \"To Be\" (I am, you are, he is, etc.)",
    "Cómo formar oraciones negativas usando \"not\" y sus contracciones (isn't, aren't)",
    "Cómo hacer preguntas invirtiendo el orden del verbo y el sujeto (Am I?, Is she?)",
    "El uso correcto de las contracciones en contextos informales",
    "La diferencia fundamental entre \"Ser\" y \"Estar\" y por qué en inglés un solo verbo sirve para ambos"
  ],
  content: [
    {
      topic: "La Forma Afirmativa: Identificando y Describiendo",
      explanation: "El verbo \"To Be\" significa \"Ser\" o \"Estar\" en español. Su forma cambia radicalmente dependiendo del sujeto (la persona que realiza la acción). No decimos \"I be\" o \"he be\". Es irregular y debemos memorizar sus formas. La clave está en asociar cada pronombre personal (I, you, he, she, it, we, they) con su forma correspondiente de \"To Be\".",
      examples: [
        {
          type: 'title',
          text: 'Tabla de Conjugación y Explicación',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Pronombre (Sujeto)', 'Verbo "To Be"', 'Explicación y Traducción'],
          rows: [
            ['I', 'am', 'Yo soy o yo estoy. Ej: Yo soy alto. Yo estoy feliz.'],
            ['You', 'are', 'Tú eres, tú estás, usted es, usted está. (Forma singular y formal).'],
            ['He / She / It', 'is', 'Él es / está, Ella es / está, Ello es / está (para objetos, animales, conceptos).'],
            ['We', 'are', 'Nosotros somos / estamos.'],
            ['You', 'are', 'Vosotros sois / estáis (España) o Ustedes son / están (Latinoamérica).'],
            ['They', 'are', 'Ellos/Ellas son / están.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am', bold: true },
              { text: ' a teacher. → ' },
              { text: 'Yo soy', bold: true },
              { text: ' un profesor. (Identidad)' }
            ],
            [
              { text: 'You are', bold: true },
              { text: ' happy. → ' },
              { text: 'Tú estás', bold: true },
              { text: ' feliz. (Estado emocional)' }
            ],
            [
              { text: 'He is', bold: true },
              { text: ' in the kitchen. → ' },
              { text: 'Él está', bold: true },
              { text: ' en la cocina. (Ubicación)' }
            ],
            [
              { text: 'She is', bold: true },
              { text: ' intelligent. → ' },
              { text: 'Ella es', bold: true },
              { text: ' inteligente. (Característica)' }
            ],
            [
              { text: 'It is', bold: true },
              { text: ' a dog. → ' },
              { text: 'Es', bold: true },
              { text: ' un perro. (Identificación)' }
            ],
            [
              { text: 'We are', bold: true },
              { text: ' friends. → ' },
              { text: 'Nosotros somos', bold: true },
              { text: ' amigos. (Relación)' }
            ],
            [
              { text: 'They are', bold: true },
              { text: ' at the cinema. → ' },
              { text: 'Ellos están', bold: true },
              { text: ' en el cine. (Ubicación)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Nota sobre "It": ', bold: true },
            { text: '"It" se usa para cosas, animales o ideas. No tiene género.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It is', bold: true },
              { text: ' cold today. (Hace frío hoy → "El clima" está frío).', italic: true }
            ],
            [
              { text: 'It is', bold: true },
              { text: ' a big house. (Es una casa grande).', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "La Forma Negativa: Negando con \"Not\"",
      explanation: "Para decir que algo no es o no está, simplemente añadimos la palabra \"not\" (no) después del verbo \"To Be\". Es muy común usar contracciones (fusionar el verbo con \"not\") en el lenguaje hablado y escrito informal.",
      examples: [
        {
          type: 'title',
          text: 'Tabla de Conjugación Negativa',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Forma Larga (Formal)', 'Forma Contraída (Común)', 'Pronunciación'],
          rows: [
            ['I am not', "I'm not", '/aɪm nɒt/'],
            ['You are not', "You aren't", '/jʊɑːrnt/'],
            ['He/She/It is not', "He/She/It isn't", '/ˈɪzənt/'],
            ['We are not', "We aren't", '/wɪɑːrnt/'],
            ['You are not', "You aren't", '/jʊɑːrnt/'],
            ['They are not', "They aren't", '/ðeɪɑːrnt/']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: '¡OJO! ', bold: true },
            { text: 'La única contracción que es diferente es para "I". Decimos ' },
            { text: "I'm not", bold: true },
            { text: '. La contracción ' },
            { text: "ain't", italic: true },
            { text: ' es incorrecta y no debe usarse.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am not tired. / I\'m not tired.', italic: true },
              { text: ' → Yo no estoy cansado.' }
            ],
            [
              { text: 'You are not late. / You aren\'t late.', italic: true },
              { text: ' → Tú no estás tarde.' }
            ],
            [
              { text: 'She is not from Italy. / She isn\'t from Italy.', italic: true },
              { text: ' → Ella no es de Italia.' }
            ],
            [
              { text: 'It is not cold. / It isn\'t cold.', italic: true },
              { text: ' → No hace frío.' }
            ],
            [
              { text: 'We are not ready. / We aren\'t ready.', italic: true },
              { text: ' → Nosotros no estamos listos.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "La Forma Interrogativa: Haciendo Preguntas",
      explanation: "Hacer preguntas con \"To Be\" es muy fácil. No necesitamos verbos auxiliares como \"do\" o \"does\". Simplemente invertimos el orden: el verbo \"To Be\" va al principio de la oración, seguido del sujeto.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Am / Is / Are + Sujeto + Complemento + ?",
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de Ejemplos de Preguntas',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Pregunta', 'Posible Respuesta Corta', 'Traducción de la Pregunta'],
          rows: [
            ['Am I late?', "No, you aren't.", '¿Estoy tarde (yo)?'],
            ['Are you okay?', 'Yes, I am.', '¿Estás bien?'],
            ['Is he a doctor?', 'Yes, he is.', '¿Es él un doctor?'],
            ['Is she at home?', "No, she isn't.", '¿Está ella en casa?'],
            ['Is it expensive?', 'Yes, it is.', '¿Es caro?'],
            ['Are we lost?', 'I think we are.', '¿Estamos perdidos?'],
            ['Are they students?', "No, they aren't.", '¿Son ellos estudiantes?']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Respuestas Cortas: ', bold: true },
            { text: 'Son muy comunes. No repetimos toda la información, solo usamos el pronombre + el verbo (en afirmativo o negativo).' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Is Maria sick?', bold: true },
              { text: ' → Yes, ' },
              { text: 'she is', bold: true },
              { text: '. / No, ' },
              { text: "she isn't", bold: true },
              { text: '.' }
            ],
            [
              { text: 'Are Peter and John here?', bold: true },
              { text: ' → Yes, ' },
              { text: 'they are', bold: true },
              { text: '. / No, ' },
              { text: "they aren't", bold: true },
              { text: '.' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "Completa la oración: She _____ a great musician.",
      options: ["am", "is", "are", "be"],
      correctAnswer: 1,
      explanation: "Porque \"She\" es tercera persona del singular, y le corresponde \"is\"."
    },
    {
      question: "¿Cómo se dice \"Ellos no están enojados\" en inglés?",
      options: ["They not are angry.", "They are not angry.", "They isn't angry.", "They aren't angry."],
      correctAnswer: 1,
      explanation: "La estructura correcta es Sujeto + Verbo \"To Be\" + Not + Complemento. También sería correcto \"They aren't angry\" (opción d)."
    },
    {
      question: "Selecciona la pregunta correcta:",
      options: ["You are happy?", "Are you happy?", "You is happy?", "Is you happy?"],
      correctAnswer: 1,
      explanation: "Para preguntar, debemos invertir el orden: Verbo \"To Be\" + Sujeto."
    },
    {
      question: "La contracción de \"He is not\" es:",
      options: ["He'nt", "He isn't", "He not", "Hisn't"],
      correctAnswer: 1,
      explanation: "La contracción correcta para \"is not\" es \"isn't\"."
    },
    {
      question: "\"It is a beautiful day.\" La forma interrogativa es:",
      options: ["It is a beautiful day?", "Is it a beautiful day?", "Beautiful day is it?", "Are it a beautiful day?"],
      correctAnswer: 1,
      explanation: "Invertimos \"is\" y \"it\" para formar la pregunta."
    },
    {
      question: "\"I'm not hungry.\" ¿Cuál es la forma larga (no contraída) de 'I'm'?",
      options: ["I not", "I are", "I is", "I am"],
      correctAnswer: 3,
      explanation: "\"I'm\" es la contracción de \"I am\"."
    },
    {
      question: "¿Cuál de estas oraciones es INCORRECTA?",
      options: ["We are friends.", "He are my brother.", "You are tall.", "I am here."],
      correctAnswer: 1,
      explanation: "\"He\" va con \"is\", no con \"are\". La forma correcta sería \"He is my brother\"."
    },
    {
      question: "\"Are they from Mexico?\" Una posible respuesta corta es:",
      options: ["Yes, they're.", "Yes, they are.", "Yes, they is.", "Yes, they aren't."],
      correctAnswer: 1,
      explanation: "Las respuestas cortas no usan contracciones en la afirmativa. Se dice \"Yes, they are\"."
    },
    {
      question: "Para hablar de un animal (p.ej. un gato), usamos:",
      options: ["He", "She", "It", "You"],
      correctAnswer: 2,
      explanation: "Salvo que conozcamos su sexo, los animales y objetos son \"it\"."
    },
    {
      question: "El pronombre \"You\" puede significar:",
      options: ["Solo \"Tú\"", "Solo \"Usted\"", "Solo \"Ustedes\"", "\"Tú\", \"Usted\", \"Vosotros\" o \"Ustedes\""],
      correctAnswer: 3,
      explanation: "\"You\" es muy versátil y su significado depende del contexto."
    }
  ]
};
