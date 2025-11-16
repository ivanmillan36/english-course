import type { LessonData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson1: LessonData = {
  id: 1,
  title: "Fundamentos del Inglés: El Alfabeto, Ortografía y Puntuación",
  description: "Esta lección es tu primer paso sólido para dominar los fundamentos del inglés escrito. Aprenderás a reconocer y utilizar todo el alfabeto, aplicar una de las reglas de ortografía más famosas y usar correctamente los signos de puntuación esenciales para darle claridad y sentido a tus oraciones.",
  welcomeEmoji: "🔤",
  pageTitle: "English Learning - Alfabeto, Ortografía y Puntuación",
  metaDescription: "Aprende los fundamentos del inglés escrito: alfabeto, reglas de ortografía y signos de puntuación básicos",
  learningPoints: [
    "A identificar y escribir todas las letras del alfabeto inglés en sus formas mayúsculas y minúsculas",
    "La regla ortográfica \"i before e except after c\" y sus excepciones más comunes",
    "El uso correcto del punto (.), la coma (,), el signo de interrogación (?) y el signo de exclamación (!)"
  ],
  content: [
    {
      topic: "El Alfabeto Inglés (The English Alphabet)",
      explanation: "El alfabeto inglés contiene 26 letras, cada una con una forma mayúscula (uppercase) y una minúscula (lowercase). Es la base para formar palabras y oraciones.",
      examples: [
        {
          type: 'title',
          text: 'Las 26 letras del alfabeto',
          emoji: '🔤',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'El alfabeto inglés tiene ', bold: true },
            { text: '26 letras', code: true },
            { text: ', cada una con dos formas:' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Mayúsculas (Uppercase):', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Minúsculas (Lowercase):', bold: true }]
        } as ParagraphData,
        {
          type: 'code',
          code: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo práctico',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'En una palabra, normalmente solo la primera letra es mayúscula:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"Hello"', code: true },
              { text: ' = ' },
              { text: 'H', bold: true },
              { text: ' (mayúscula) + ' },
              { text: 'e', italic: true },
              { text: ' (minúscula) + ' },
              { text: 'l', italic: true },
              { text: ' (minúscula) + ' },
              { text: 'l', italic: true },
              { text: ' (minúscula) + ' },
              { text: 'o', italic: true },
              { text: ' (minúscula)' }
            ],
            [
              { text: '"English"', code: true },
              { text: ' = ' },
              { text: 'E', bold: true },
              { text: ' (mayúscula) + ' },
              { text: 'nglish', italic: true },
              { text: ' (minúsculas)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Las mayúsculas se usan al inicio de oraciones y para nombres propios (nombres de personas, lugares, etc.).' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Regla Ortográfica: \"I before E except after C\"",
      explanation: "Esta es una regla mnemotécnica muy útil para recordar cómo escribir palabras que contienen las vocales \"i\" e \"e\" juntas. La regla dice: escribe \"i\" antes de \"e\" (ej: friend), excepto cuando va después de la letra \"c\" (ej: receive), donde se invierte a \"e\" antes de \"i\".",
      examples: [
        {
          type: 'title',
          text: 'La regla básica',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Escribe ', bold: true },
            { text: '"i"', code: true },
            { text: ' antes de ', bold: true },
            { text: '"e"', code: true },
            { text: ', excepto cuando va después de ', bold: true },
            { text: '"c"', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '"I" antes de "E"',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Cuando NO va después de "c", normalmente escribimos "i" antes de "e":' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'believe', code: true },
              { text: ' (creer)' }
            ],
            [
              { text: 'field', code: true },
              { text: ' (campo)' }
            ],
            [
              { text: 'piece', code: true },
              { text: ' (pieza)' }
            ],
            [
              { text: 'friend', code: true },
              { text: ' (amigo)' }
            ],
            [
              { text: 'thief', code: true },
              { text: ' (ladrón)' }
            ],
            [
              { text: 'achieve', code: true },
              { text: ' (lograr)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Excepto después de "C"',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Cuando va después de "c", se invierte: ', bold: true },
            { text: '"e"', code: true },
            { text: ' antes de ', bold: true },
            { text: '"i"', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'receive', code: true },
              { text: ' (recibir)' }
            ],
            [
              { text: 'ceiling', code: true },
              { text: ' (techo)' }
            ],
            [
              { text: 'deceive', code: true },
              { text: ' (engañar)' }
            ],
            [
              { text: 'conceive', code: true },
              { text: ' (concebir)' }
            ],
            [
              { text: 'perceive', code: true },
              { text: ' (percibir)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Excepciones importantes',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'La regla no es perfecta. Algunas palabras comunes no la siguen:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'weird', code: true },
              { text: ' (extraño) - es "e" antes de "i"' }
            ],
            [
              { text: 'height', code: true },
              { text: ' (altura) - es "e" antes de "i"' }
            ],
            [
              { text: 'science', code: true },
              { text: ' (ciencia) - es "e" antes de "i" aunque va después de "c"' }
            ],
            [
              { text: 'species', code: true },
              { text: ' (especies) - es "e" antes de "i"' }
            ],
            [
              { text: 'leisure', code: true },
              { text: ' (ocio) - es "e" antes de "i"' }
            ],
            [
              { text: 'seize', code: true },
              { text: ' (agarrar) - es "e" antes de "i"' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Consejo: ', bold: true },
            { text: 'Esta regla es una guía útil, pero no es absoluta. Con la práctica, aprenderás las excepciones más comunes.' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Signos de Puntuación Básicos",
      explanation: "Los signos de puntuación son símbolos que se utilizan para dar estructura y significado a las oraciones, indicando pausas, preguntas o énfasis.",
      examples: [
        {
          type: 'title',
          text: 'Los cuatro signos esenciales',
          emoji: '📌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los signos de puntuación ayudan a dar estructura y claridad a tus escritos. Estos son los cuatro más importantes:' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Punto (Period - .)',
          emoji: '🔴',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Marca el final de una oración afirmativa o declarativa.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"I like to read books."', italic: true },
              { text: ' (Me gusta leer libros.)' }
            ],
            [
              { text: '"She is a teacher."', italic: true },
              { text: ' (Ella es profesora.)' }
            ],
            [
              { text: '"The sun is bright."', italic: true },
              { text: ' (El sol es brillante.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Coma (Comma - ,)',
          emoji: '🔵',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Indica una pausa breve, separa elementos en una lista o une cláusulas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Separar elementos en una lista:' }
            ],
            [
              { text: '"I need to buy apples, bread, and milk."', italic: true },
              { text: ' (Necesito comprar manzanas, pan y leche.)' }
            ],
            [
              { text: 'Indicar una pausa:' }
            ],
            [
              { text: '"Hello, how are you?"', italic: true },
              { text: ' (Hola, ¿cómo estás?)' }
            ],
            [
              { text: 'Unir cláusulas:' }
            ],
            [
              { text: '"I like coffee, but she prefers tea."', italic: true },
              { text: ' (Me gusta el café, pero ella prefiere té.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Signo de Interrogación (Question Mark - ?)',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se coloca al final de una oración para formar una pregunta.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"What is your name?"', italic: true },
              { text: ' (¿Cuál es tu nombre?)' }
            ],
            [
              { text: '"How old are you?"', italic: true },
              { text: ' (¿Cuántos años tienes?)' }
            ],
            [
              { text: '"Where do you live?"', italic: true },
              { text: ' (¿Dónde vives?)' }
            ],
            [
              { text: '"Are you ready?"', italic: true },
              { text: ' (¿Estás listo?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'En inglés solo se usa un signo de interrogación al final, no al inicio como en español.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Signo de Exclamación (Exclamation Mark - !)',
          emoji: '❗',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Expresa emoción, sorpresa, énfasis o un comando fuerte.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"That\'s amazing!"', italic: true },
              { text: ' (¡Eso es increíble!)' }
            ],
            [
              { text: '"Watch out!"', italic: true },
              { text: ' (¡Ten cuidado!)' }
            ],
            [
              { text: '"I can\'t believe it!"', italic: true },
              { text: ' (¡No puedo creerlo!)' }
            ],
            [
              { text: '"Stop!"', italic: true },
              { text: ' (¡Alto!)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Al igual que con el signo de interrogación, en inglés solo se usa un signo de exclamación al final.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos combinados',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Veamos cómo se usan juntos en una oración:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '"I love reading books, magazines, and newspapers."', italic: true },
              { text: ' (Uso de coma para separar lista)' }
            ],
            [
              { text: '"What are your favorite hobbies?"', italic: true },
              { text: ' (Signo de interrogación para pregunta)' }
            ],
            [
              { text: '"Wow, that\'s incredible!"', italic: true },
              { text: ' (Coma para pausa y signo de exclamación para emoción)' }
            ],
            [
              { text: '"I study English every day. Do you?"', italic: true },
              { text: ' (Punto para terminar oración y signo de interrogación para pregunta)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cuál es la forma minúscula correcta de la letra 'G'?",
      options: ["g", "q", "j", "y"],
      correctAnswer: 0,
      explanation: "La forma minúscula de la letra 'G' es \"g\". \"q\" es otra letra, \"j\" es la minúscula de J, y \"y\" es la minúscula de Y."
    },
    {
      question: "Según la regla \"i before e except after c\", ¿cuál es la ortografía correcta?",
      options: ["recieve", "receive", "receve", "reciive"],
      correctAnswer: 1,
      explanation: "Después de la letra \"c\", el orden correcto es \"e\" antes de \"i\"."
    },
    {
      question: "¿Qué signo de puntuación debería usarse al final de esta oración? \"How old are you\"",
      options: [". (punto)", ", (coma)", "? (signo de interrogación)", "! (signo de exclamación)"],
      correctAnswer: 2,
      explanation: "La oración es una pregunta directa, por lo que debe terminar con un signo de interrogación."
    },
    {
      question: "¿Cuál de estas palabras es una EXCEPCIÓN a la regla \"i before e except after c\"?",
      options: ["believe", "ceiling", "weird", "piece"],
      correctAnswer: 2,
      explanation: "\"Weird\" no sigue la regla (es \"e\" antes de \"i\") y es una de sus excepciones más conocidas."
    },
    {
      question: "¿Para qué se utiliza principalmente una coma ( , )?",
      options: [
        "Para terminar un párrafo.",
        "Para indicar una pausa breve o separar elementos en una lista.",
        "Para mostrar emoción extrema.",
        "Para comenzar una cita."
      ],
      correctAnswer: 1,
      explanation: "Esa es la función principal de la coma."
    },
    {
      question: "Elige la oración que esté puntuada correctamente.",
      options: [
        "My favorite colors are blue green and red.",
        "My favorite colors are blue, green and red?",
        "My favorite colors are blue, green, and red.",
        "My favorite colors are blue, green, and red!"
      ],
      correctAnswer: 2,
      explanation: "Utiliza comas para separar los elementos de la lista y un punto para terminar la oración afirmativa."
    },
    {
      question: "Identifica la palabra que está mal escrita según la regla ortográfica.",
      options: ["thief", "achieve", "seize", "nieghbor"],
      correctAnswer: 3,
      explanation: "La ortografía correcta es \"neighbor\". Sigue la regla \"i before e\" (aunque no va después de c), por lo que debería ser \"nei\"."
    },
    {
      question: "¿Qué letra viene después de 'V' en el alfabeto inglés?",
      options: ["U", "W", "X", "Y"],
      correctAnswer: 1,
      explanation: "El orden del alfabeto es ... T, U, V, W, X, Y, Z."
    },
    {
      question: "¿Qué signo de puntuación es más apropiado para esta oración? \"Wow that is a huge dog\"",
      options: [". (punto)", ", (coma)", "? (signo de interrogación)", "! (signo de exclamación)"],
      correctAnswer: 3,
      explanation: "La palabra \"Wow\" indica sorpresa o asombro, por lo que un signo de exclamación es el más adecuado: \"Wow, that is a huge dog!\""
    },
    {
      question: "La regla \"i before e\" se aplica siempre sin excepciones.",
      options: ["Verdadero", "Falso"],
      correctAnswer: 1,
      explanation: "La regla tiene varias excepciones importantes, como \"weird\", \"science\", \"height\", y \"leisure\". Es una guía útil, pero no es absoluta."
    }
  ]
};
