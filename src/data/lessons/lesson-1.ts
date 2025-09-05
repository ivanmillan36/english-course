import type { LessonData } from '../lessons';

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
        "**Mayúsculas (Uppercase):** A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
        "**Minúsculas (Lowercase):** a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
        "**Ejemplo de palabra:** \"Hello\" = H (mayúscula) + e (minúscula) + l (minúscula) + l (minúscula) + o (minúscula)"
      ]
    },
    {
      topic: "Regla Ortográfica: \"I before E except after C\"",
      explanation: "Esta es una regla mnemotécnica muy útil para recordar cómo escribir palabras que contienen las vocales \"i\" e \"e\" juntas. La regla dice: escribe \"i\" antes de \"e\" (ej: friend), excepto cuando va después de la letra \"c\" (ej: receive), donde se invierte a \"e\" antes de \"i\".",
      examples: [
        "**\"I\" antes de \"E\":** believe, field, piece, friend",
        "**Excepto después de \"C\":** receive, ceiling, deceive, conceive",
        "**Excepciones importantes:** La regla no es perfecta. Algunas palabras comunes no la siguen, como: weird, height, science, species, leisure"
      ]
    },
    {
      topic: "Signos de Puntuación Básicos",
      explanation: "Los signos de puntuación son símbolos que se utilizan para dar estructura y significado a las oraciones, indicando pausas, preguntas o énfasis.",
      examples: [
        "**Punto (Period - .):** Marca el final de una oración afirmativa.",
        "*Ejemplo:* \"I like to read books.\" (Me gusta leer libros.)",
        "**Coma (Comma - ,):** Indica una pausa breve en una oración, separa items en una lista o une cláusulas.",
        "*Ejemplo:* \"I need to buy apples, bread, and milk.\" (Necesito comprar manzanas, pan y leche.)",
        "**Signo de Interrogación (Question Mark - ?):** Se coloca al final de una oración para formar una pregunta.",
        "*Ejemplo:* \"What is your name?\" (¿Cuál es tu nombre?)",
        "**Signo de Exclamación (Exclamation Mark - !):** Expresa emoción, sorpresa, énfasis o un comando fuerte.",
        "*Ejemplo:* \"That's amazing!\" (¡Eso es increíble!)"
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
