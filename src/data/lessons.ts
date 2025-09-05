// Centralized lesson data configuration
export interface LessonContent {
  topic: string;
  explanation: string;
  examples?: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface LessonData {
  id: number;
  title: string;
  description: string;
  learningPoints: string[];
  content: LessonContent[];
  quiz: QuizQuestion[];
  // Optional customizations
  welcomeEmoji?: string;
  pageTitle?: string;
  metaDescription?: string;
}

// All lessons configuration
export const lessons: LessonData[] = [
  {
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
  },
  {
    id: 2,
    title: "The Building Blocks of English: Mastering the Parts of Speech",
    description: "Esta lección es fundamental para dominar el inglés escrito. Así como un arquitecto necesita conocer cada ladrillo y herramienta, tú necesitas entender las Partes de la Oración (Parts of Speech). Cada palabra en una oración tiene un trabajo específico. Identificar y comprender estas funciones te permitirá construir oraciones correctas, variadas y con mayor riqueza de vocabulario.",
    welcomeEmoji: "🧱",
    pageTitle: "English Learning - Parts of Speech",
    metaDescription: "Aprende las 8 partes de la oración en inglés: sustantivos, verbos, adjetivos, adverbios, artículos, pronombres, preposiciones y conjunciones",
    learningPoints: [
      "A identificar las 8 partes de la oración principales en inglés",
      "La función específica que cumple cada una dentro de una oración",
      "A reconocerlas en textos y oraciones reales",
      "A utilizar este conocimiento para mejorar tu gramática y tu escritura"
    ],
    content: [
      {
        topic: "The Noun (El Sustantivo)",
        explanation: "Un sustantivo es una palabra que nombra a una persona, lugar, cosa, animal o idea. Es quien realiza la acción o sobre quien se habla en la oración. Hay dos tipos principales: comunes (general, no capitalizado: city, dog, teacher) y propios (nombres específicos, siempre capitalizados: London, Max, Ms. Johnson).",
        examples: [
          "**Persona:** `woman`, `teacher`, `David`, `sister`",
          "**Lugar:** `hospital`, `park`, `Paris`, `school`",
          "**Cosa:** `book`, `computer`, `water`, `music`",
          "**Animal:** `dog`, `elephant`, `eagle`",
          "**Idea:** `love`, `freedom`, `happiness`, `time`"
        ]
      },
      {
        topic: "The Verb (El Verbo)",
        explanation: "Un verbo es una palabra que expresa una acción (what you do) o un estado (how you are). Es el corazón de la oración; sin un verbo, no hay oración. Los verbos pueden cambiar de forma para indicar tiempo (pasado, presente, futuro).",
        examples: [
          "**Acción:** `run`, `eat`, `write`, `think`, `study`",
          "**Estado (verbos 'to be', 'to have', 'to feel'):** `am`, `is`, `are`, `was`, `were`, `have`, `has`, `feel`, `seem`"
        ]
      },
      {
        topic: "The Adjective (El Adjetivo)",
        explanation: "Un adjetivo es una palabra que describe o modifica a un sustantivo. Proporciona más información sobre él, respondiendo a preguntas como: What kind? (¿Qué tipo?), Which one? (¿Cuál?), How many? (¿Cuántos?). Generalmente van antes del sustantivo o después de un verbo de estado (como 'be').",
        examples: [
          "The **red** car (¿Qué tipo de auto? Uno rojo)",
          "She is **intelligent** (Ella *es* inteligente - describe 'she')",
          "I have **three** books (¿Cuántos libros? Tres)",
          "It's a **beautiful**, **sunny** day"
        ]
      },
      {
        topic: "The Adverb (El Adverbio)",
        explanation: "Un adverbio es una palabra que describe o modifica a un verbo, un adjetivo, o a otro adverbio. A menudo responden a las preguntas: How? (¿Cómo?), When? (¿Cuándo?), Where? (¿Dónde?), To what extent? (¿Hasta qué punto?). Muchos adverbios en inglés terminan en -ly.",
        examples: [
          "**Modifica un verbo:** She speaks **quickly** (¿Cómo habla? Rápidamente)",
          "**Modifica un adjetivo:** It is **extremely** hot (¿Hasta qué punto hace calor? Extremadamente)",
          "**Modifica otro adverbio:** She sings **very** beautifully (¿Cuán bellamente? Muy)",
          "**Otros adverbios comunes:** always (cuándo), here (dónde), well (cómo)"
        ]
      },
      {
        topic: "The Article (El Artículo)",
        explanation: "Un artículo es una palabra que se coloca antes de un sustantivo para definir si es específico o no específico. Son pequeños pero muy importantes. Solo hay tres: a, an, y the. A/An (Indefinite articles): Se usan con sustantivos singulares no específicos. A va antes de sonidos de consonante; An va antes de sonidos de vocal. The (Definite article): Se usa con sustantivos específicos.",
        examples: [
          "I need **a** pencil (necesito un lápiz, cualquiera)",
          "She is **an** artist (es una artista, una entre muchas)",
          "**The** book you gave me is great (el libro *específico* que me diste)"
        ]
      },
      {
        topic: "The Pronoun (El Pronombre)",
        explanation: "Un pronombre es una palabra que reemplaza a un sustantivo para evitar repetirlo. 'He' es más fácil de decir que 'John' todo el tiempo. Los pronombres tienen diferentes casos: sujeto (I, you, he, she, it, we, they), objeto (me, you, him, her, it, us, them), posesivo (my, your, his, her, its, our, their).",
        examples: [
          "**Maria** is smart. **She** studies every day. ('She' reemplaza a 'Maria')",
          "This is **my** book ('My' indica posesión y reemplaza a 'the book of me')",
          "We told **them** the story ('Them' funciona como el objeto que recibe la acción)"
        ]
      },
      {
        topic: "The Preposition (La Preposición)",
        explanation: "Una preposición es una palabra que muestra la relación entre un sustantivo (o pronombre) y otra palabra en la oración. Indican lugar, tiempo, dirección, modo, etc. Forman parte de frases preposicionales (in the house, at 5 pm, with my friend).",
        examples: [
          "**Lugar:** The cat is **on** the table, She lives **in** Madrid",
          "**Tiempo:** We meet **at** 5 o'clock, I will see you **on** Monday",
          "**Dirección/Relación:** They went **to** the cinema, This letter is **for** you"
        ]
      },
      {
        topic: "The Conjunction (La Conjunción)",
        explanation: "Una conjunción es una palabra que conecta palabras, frases o cláusulas dentro de una oración. Son los 'pegamentos' del lenguaje. Las más comunes son and (suma), but (contraste), or (alternativa), because (causa), if (condición).",
        examples: [
          "I like coffee **and** tea (conecta dos palabras)",
          "She wants to go, **but** she is tired (conecta dos ideas contrastantes)",
          "You can have cake **or** ice cream (conecta dos alternativas)",
          "I stayed home **because** it was raining (conecta una causa y un efecto)"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the function of a NOUN in a sentence?",
        options: [
          "It describes an action.",
          "It names a person, place, thing, or idea.",
          "It connects words or phrases.",
          "It describes a verb."
        ],
        correctAnswer: 1,
        explanation: "Esta es la definición principal de un sustantivo."
      },
      {
        question: "In the sentence \"They quickly ran to the beautiful park,\" what is the word \"beautiful\"?",
        options: [
          "An adverb",
          "A verb",
          "An adjective",
          "A noun"
        ],
        correctAnswer: 2,
        explanation: "\"Beautiful\" describe al sustantivo \"park\", indicando qué tipo de parque es."
      },
      {
        question: "Which word is a PRONOUN in the following sentence: \"Lisa said that she would be late.\"",
        options: [
          "Lisa",
          "said",
          "she",
          "late"
        ],
        correctAnswer: 2,
        explanation: "\"She\" es un pronombre que reemplaza y se refiere al sustantivo \"Lisa\"."
      },
      {
        question: "Choose the sentence that uses the correct ARTICLE:",
        options: [
          "I saw an elephant at the zoo.",
          "I saw a elephant at a zoo.",
          "I saw the elephant at an zoo.",
          "I saw elephant at zoo."
        ],
        correctAnswer: 0,
        explanation: "\"An\" se usa antes de un sonido de vocal (\"elephant\"), y \"the\" se usa porque se refiere a un zoo específico."
      },
      {
        question: "What part of speech is the word \"SILENTLY\" in: \"He closed the door silently.\"",
        options: [
          "Adjective",
          "Verb",
          "Noun",
          "Adverb"
        ],
        correctAnswer: 3,
        explanation: "\"Silently\" describe *cómo* se realizó la acción (verbo) \"closed\"."
      },
      {
        question: "Which of these is a CONJUNCTION?",
        options: [
          "With",
          "Happy",
          "But",
          "Run"
        ],
        correctAnswer: 2,
        explanation: "\"But\" es una conjunción que se usa para contrastar ideas."
      },
      {
        question: "Identify the PREPOSITION in this sentence: \"The keys are on the kitchen counter.\"",
        options: [
          "keys",
          "are",
          "on",
          "counter"
        ],
        correctAnswer: 2,
        explanation: "\"On\" muestra la relación espacial entre \"keys\" y \"counter\"."
      },
      {
        question: "In the phrase \"Her new shoes are very comfortable,\" what is the word \"very\"?",
        options: [
          "An adjective describing \"shoes\"",
          "An adverb modifying the adjective \"comfortable\"",
          "A verb",
          "A conjunction"
        ],
        correctAnswer: 1,
        explanation: "\"Very\" intensifica el grado de \"comfortable\", respondiendo a \"How comfortable?\"."
      },
      {
        question: "What is the VERB in this sentence: \"The children played happily in the garden.\"",
        options: [
          "children",
          "played",
          "happily",
          "garden"
        ],
        correctAnswer: 1,
        explanation: "\"Played\" es la acción que realizan los niños (the children)."
      },
      {
        question: "Which option lists words that are all PREPOSITIONS?",
        options: [
          "And, but, or",
          "In, at, for, with",
          "He, she, they, it",
          "Big, small, fast, slow"
        ],
        correctAnswer: 1,
        explanation: "Todas estas palabras muestran relaciones (lugar, tiempo, propósito, compañía) y son preposiciones."
      }
    ]
  },
  {
    id: 3,
    title: "Present Simple Tense",
    description: "Domina el tiempo presente simple en inglés para hablar de rutinas, hábitos y hechos universales",
    welcomeEmoji: "⏰",
    pageTitle: "English Learning - Present Simple Tense",
    metaDescription: "Aprende el presente simple en inglés: formación, uso y ejercicios prácticos",
    learningPoints: [
      "Cómo formar oraciones afirmativas en presente simple",
      "Cuándo y cómo usar 'do' y 'does' en preguntas y negaciones",
      "Las reglas especiales para la tercera persona singular (he, she, it)",
      "Diferencia entre verbos regulares e irregulares en presente simple",
      "Expresiones de tiempo comunes que se usan con presente simple"
    ],
    content: [
      {
        topic: "Formación del Presente Simple - Oraciones Afirmativas",
        explanation: "El presente simple es uno de los tiempos verbales más importantes en inglés. Se usa para expresar rutinas, hábitos, hechos universales y verdades generales. La formación es muy sencilla: usamos la forma base del verbo, pero añadimos 's' o 'es' en la tercera persona singular.",
        examples: [
          "I work every day. (Yo trabajo todos los días) - Rutina",
          "She speaks three languages. (Ella habla tres idiomas) - Habilidad",
          "The sun rises in the east. (El sol sale por el este) - Hecho universal",
          "We live in Mexico City. (Vivimos en la Ciudad de México) - Estado permanente",
          "He watches TV at night. (Él ve televisión por la noche) - Hábito"
        ]
      },
      {
        topic: "Tercera Persona Singular: Reglas Especiales",
        explanation: "Cuando el sujeto es 'he', 'she' o 'it', debemos añadir 's' o 'es' al verbo. Esta es una regla fundamental que muchos estudiantes olvidan. Hay reglas específicas según cómo termine el verbo.",
        examples: [
          "**Regla general:** work → works | She works here. (Ella trabaja aquí)",
          "**Verbos terminados en -s, -sh, -ch, -x, -o:** watch → watches | He watches movies. (Él ve películas)",
          "**Verbos terminados en consonante + y:** study → studies | She studies medicine. (Ella estudia medicina)",
          "**Verbos terminados en vocal + y:** play → plays | He plays guitar. (Él toca guitarra)",
          "**Verbo irregular 'have':** have → has | She has a car. (Ella tiene un coche)"
        ]
      },
      {
        topic: "Oraciones Negativas con 'Do Not' y 'Does Not'",
        explanation: "Para formar oraciones negativas en presente simple, usamos 'do not' (don't) para I, you, we, they y 'does not' (doesn't) para he, she, it. Importante: cuando usamos 'does not', el verbo principal regresa a su forma base (sin 's').",
        examples: [
          "I do not (don't) like coffee. (No me gusta el café)",
          "She does not (doesn't) work on Sundays. (Ella no trabaja los domingos)",
          "We don't speak French. (No hablamos francés)",
          "He doesn't have a dog. (Él no tiene un perro)",
          "They don't live here anymore. (Ya no viven aquí)"
        ]
      },
      {
        topic: "Preguntas con 'Do' y 'Does'",
        explanation: "Para hacer preguntas en presente simple, colocamos 'do' o 'does' al principio de la oración, seguido del sujeto y el verbo en forma base. Usamos 'do' con I, you, we, they y 'does' con he, she, it.",
        examples: [
          "Do you speak English? (¿Hablas inglés?) - Yes, I do. / No, I don't.",
          "Does she live here? (¿Vive ella aquí?) - Yes, she does. / No, she doesn't.",
          "Do they work together? (¿Trabajan juntos?) - Yes, they do. / No, they don't.",
          "Does he have children? (¿Tiene hijos?) - Yes, he does. / No, he doesn't.",
          "Do we need tickets? (¿Necesitamos boletos?) - Yes, we do. / No, we don't."
        ]
      }
    ],
    quiz: [
      {
        question: "Completa la oración: She _____ English every morning.",
        options: ["study", "studies", "studying", "studied"],
        correctAnswer: 1,
        explanation: "En tercera persona singular (she), añadimos 's' al verbo. 'Study' cambia a 'studies' porque termina en consonante + y."
      },
      {
        question: "¿Cuál es la forma negativa correcta para 'He works here'?",
        options: [
          "He don't work here.",
          "He doesn't works here.",
          "He doesn't work here.",
          "He not work here."
        ],
        correctAnswer: 2,
        explanation: "Para tercera persona singular usamos 'doesn't' y el verbo regresa a su forma base (work, no works)."
      },
      {
        question: "Selecciona la pregunta correcta:",
        options: [
          "Does you like pizza?",
          "Do she likes pizza?",
          "Does she likes pizza?",
          "Does she like pizza?"
        ],
        correctAnswer: 3,
        explanation: "Para tercera persona singular (she) usamos 'Does' y el verbo en forma base (like, no likes)."
      },
      {
        question: "¿Cuál de estas oraciones está correcta?",
        options: [
          "I doesn't understand.",
          "We doesn't go there.",
          "They don't likes it.",
          "You don't know him."
        ],
        correctAnswer: 3,
        explanation: "Con 'you' usamos 'don't' (no 'doesn't') y el verbo en forma base. Las otras opciones mezclan incorrectamente las formas."
      },
      {
        question: "Completa: My brother _____ TV every night.",
        options: ["watch", "watchs", "watches", "watching"],
        correctAnswer: 2,
        explanation: "Tercera persona singular + verbo terminado en -ch = añadimos 'es'. Watch → watches."
      },
      {
        question: "¿Cuál es la respuesta corta correcta para 'Do they live in Paris?'",
        options: [
          "Yes, they live.",
          "Yes, they do.",
          "Yes, they does.",
          "Yes, they are."
        ],
        correctAnswer: 1,
        explanation: "Para respuestas cortas con presente simple, usamos 'do' o 'does'. Con 'they' usamos 'do'."
      },
      {
        question: "Identifica la oración incorrecta:",
        options: [
          "She has three cats.",
          "He goes to school.",
          "It rain every day.",
          "We play soccer."
        ],
        correctAnswer: 2,
        explanation: "Debe ser 'It rains every day.' - tercera persona singular (it) requiere 's' en el verbo."
      },
      {
        question: "Completa la pregunta: '_____ your sister work in a hospital?'",
        options: ["Do", "Does", "Is", "Are"],
        correctAnswer: 1,
        explanation: "Con tercera persona singular (your sister = she) usamos 'Does' para preguntas en presente simple."
      },
      {
        question: "¿Cuál de estas expresiones de tiempo NO se usa típicamente con presente simple?",
        options: [
          "every day",
          "usually",
          "right now",
          "always"
        ],
        correctAnswer: 2,
        explanation: "'Right now' indica una acción que está pasando en este momento, por lo que se usa con presente continuo, no presente simple."
      },
      {
        question: "Selecciona la oración que expresa una verdad universal:",
        options: [
          "I am eating lunch.",
          "Water boils at 100°C.",
          "She is studying now.",
          "We are going home."
        ],
        correctAnswer: 1,
        explanation: "Una verdad universal es un hecho científico que siempre es cierto. 'Water boils at 100°C' es un hecho que nunca cambia."
      }
    ]
  }
];

// Helper functions
export function getLessonById(id: number): LessonData | undefined {
  return lessons.find(lesson => lesson.id === id);
}

export function getPreviousLesson(currentId: number): LessonData | undefined {
  return lessons.find(lesson => lesson.id === currentId - 1);
}

export function getNextLesson(currentId: number): LessonData | undefined {
  return lessons.find(lesson => lesson.id === currentId + 1);
}

export function getTotalLessons(): number {
  return lessons.length;
}

// Generate navigation data for a lesson
export function generateLessonNavigation(lessonId: number) {
  const previousLesson = getPreviousLesson(lessonId);
  const nextLesson = getNextLesson(lessonId);
  
  return {
    previousLesson: previousLesson ? {
      title: previousLesson.title,
      url: previousLesson.id === 1 ? '/' : `/lesson-${previousLesson.id}`
    } : undefined,
    nextLesson: nextLesson ? {
      title: nextLesson.title,
      url: `/lesson-${nextLesson.id}`
    } : undefined
  };
}
