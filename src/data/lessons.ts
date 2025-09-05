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
    title: "Saludos y Presentaciones (Escritos)",
    description: "Domina los fundamentos para escribir mensajes en inglés. Aprenderás las estructuras básicas para iniciar y cerrar un mensaje, así como las frases esenciales para presentarte y hacer preguntas de manera clara y apropiada en diferentes contextos.",
    welcomeEmoji: "📝",
    pageTitle: "English Learning - Saludos y Presentaciones Escritas",
    metaDescription: "Aprende a escribir mensajes en inglés: saludos, presentaciones y despedidas formales e informales",
    learningPoints: [
      "Cómo estructurar un mensaje escrito en inglés, desde el saludo inicial hasta la despedida",
      "Las fórmulas correctas para saludar, dependiendo del nivel de formalidad",
      "Cómo presentarte y proporcionar información básica sobre ti",
      "Cómo formular preguntas simples para iniciar una conversación",
      "Las frases adecuadas para despedirte en un mensaje"
    ],
    content: [
      {
        topic: "Estructuras de un Mensaje: Saludos Iniciales y Finales",
        explanation: "Todo mensaje bien estructurado tiene un saludo inicial y una despedida. Esta sección te enseñará las opciones más comunes, desde las formales hasta las informales, para que puedas elegir la más adecuada según tu receptor y contexto.",
        examples: [
          "**Saludos Iniciales (Opening Greetings):**",
          "• **Informal:** Hi Ana, | Hello John, | Hey Mike,",
          "• **Formal:** Dear Mr. Smith, | Dear Dr. Evans, | Dear Sir or Madam,",
          "",
          "**Saludos Finales (Closing Greetings):**",
          "• **Informal:** Bye! | See you soon! | Talk to you later.",
          "• **Formal:** Best regards, | Sincerely, | Kind regards,"
        ]
      },
      {
        topic: "Frases Esenciales para Presentarse y Preguntar",
        explanation: "El corazón de tu mensaje: cómo decir quién eres, de dónde vienes y cómo hacer preguntas básicas para conocer a la otra persona. Estas frases son la base de cualquier interacción escrita.",
        examples: [
          "**Para Presentarte (To Introduce Yourself):**",
          "• **My name is...** → My name is Carlos. (Mi nombre es Carlos)",
          "• **I am from...** → I am from Mexico. (Soy de México)",
          "• **I am a/an...** → I am a student. (Soy un estudiante)",
          "",
          "**Para Preguntar (To Ask Questions):**",
          "• **What's your name?** → Hi! What's your name? (¡Hola! ¿Cuál es tu nombre?)",
          "• **How are you?** → Hello John, how are you? (Hola John, ¿cómo estás?)",
          "• **Where are you from?** → I'm from Spain. Where are you from? (Soy de España. ¿De dónde eres?)"
        ]
      }
    ],
    quiz: [
      {
        question: "Estás escribiendo un email a un profesor potencial para pedir información sobre su curso. ¿Cuál es el saludo inicial más apropiado?",
        options: [
          "Hey!",
          "Hello Professor Jones,",
          "Dear Mr. Jones,",
          "Hi there,"
        ],
        correctAnswer: 2,
        explanation: "\"Dear [Title] [Last Name],\" es la forma estándar y formal para iniciar un correo electrónico dirigido a alguien en un contexto profesional o académico. \"Hello Professor Jones,\" también es aceptable pero ligeramente menos formal. \"Hey!\" e \"Hi there,\" son demasiado informales para esta situación."
      },
      {
        question: "¿Cuál de estas es una despedida informal común en un mensaje de texto a un amigo?",
        options: [
          "Best regards,",
          "Sincerely,",
          "See you soon!",
          "Yours faithfully,"
        ],
        correctAnswer: 2,
        explanation: "\"See you soon!\" es una despedida cálida y comúnmente utilizada en contextos informales. \"Best regards,\" es semiformal, y \"Sincerely,\" & \"Yours faithfully,\" son despedidas muy formales, típicas de cartas o correos empresariales."
      },
      {
        question: "¿Cuál es el orden CORRECTO de las partes de un mensaje formal?",
        options: [
          "Cuerpo del mensaje - Saludo - Despedida",
          "Saludo - Despedida - Cuerpo del mensaje",
          "Saludo - Cuerpo del mensaje - Despedida",
          "Despedida - Saludo - Cuerpo del mensaje"
        ],
        correctAnswer: 2,
        explanation: "La estructura universal de cualquier mensaje escrito, ya sea formal o informal, comienza con un saludo, seguido del contenido principal (cuerpo del mensaje) y finaliza con una despedida o firma."
      },
      {
        question: "Un nuevo contacto internacional te escribe. ¿Cuál es la forma CORRECTA de presentarte en tu respuesta?",
        options: [
          "Name my is Alex.",
          "I name is Alex.",
          "My name is Alex.",
          "Your name is what?"
        ],
        correctAnswer: 2,
        explanation: "\"My name is...\" es la estructura gramaticalmente correcta en inglés para presentarse. Las otras opciones contienen errores en el orden de las palabras (a), el uso del pronombre (b) o son demasiado directas y pueden sonar bruscas (d)."
      },
      {
        question: "Estás cerrando una carta formal que comenzaste con \"Dear Mr. Smith,\". ¿Cuál es la despedida más adecuada?",
        options: [
          "Bye!",
          "See ya!",
          "Sincerely,",
          "Hi!"
        ],
        correctAnswer: 2,
        explanation: "\"Sincerely,\" es una despedida formal que coincide apropiadamente con el saludo formal \"Dear Mr. Smith,\". \"Bye!\" y \"See ya!\" son extremadamente informales, y \"Hi!\" es un saludo, no una despedida."
      },
      {
        question: "Estás escribiendo un mensaje a la madre de tu amigo, a quien no conoces bien. ¿Qué saludo inicial es más apropiado?",
        options: [
          "Dear Mrs. García,",
          "Hi!",
          "Hey you!",
          "Hello Ms. García,"
        ],
        correctAnswer: 0,
        explanation: "Al dirigirte a alguien mayor o a quien no tienes confianza, especialmente en un contexto escrito, lo más educado y seguro es usar \"Dear\" seguido del título (Mrs., Mr., Ms.) y su apellido. \"Hello Ms. García,\" también es correcto, pero \"Dear\" es ligeramente más formal y común para iniciar un mensaje."
      },
      {
        question: "¿Cuál de estas preguntas está escrita correctamente?",
        options: [
          "What your name?",
          "How you are?",
          "Where are you from?",
          "You from where?"
        ],
        correctAnswer: 2,
        explanation: "\"Where are you from?\" sigue la estructura gramatical correcta para una pregunta en inglés (Question word + verb + subject). Las otras opciones omiten el verbo auxiliar (\"are\" en a y d) o invierten el orden incorrectamente (b)."
      },
      {
        question: "Quieres presentarte y decir tu nacionalidad. ¿Qué opción es la correcta?",
        options: [
          "I name is Sofia. I am from Argentina.",
          "My name is Sofia. I am from Argentina.",
          "My name Sofia. I from Argentina.",
          "My name is Sofia. I from Argentina."
        ],
        correctAnswer: 1,
        explanation: "Esta opción utiliza la estructura completa y gramaticalmente correcta en ambas frases: \"My name is...\" y \"I am from...\". Las otras opciones omiten el verbo \"is\" o \"am\", lo cual es un error común pero fundamental."
      },
      {
        question: "Has empezado un email con \"Dear Dr. Evans,\". ¿Cuál es la mejor manera de despedirte?",
        options: [
          "Bye for now!",
          "Best regards,",
          "See you later!",
          "Yours,"
        ],
        correctAnswer: 1,
        explanation: "\"Best regards,\" es una despedida semiformal que coincide bien con el saludo formal \"Dear Dr. Evans,\". \"Bye for now!\" y \"See you later!\" son demasiado informales. \"Yours,\" puede ser muy formal o muy informal dependiendo del contexto, pero \"Best regards,\" es una opción más segura y profesional."
      },
      {
        question: "Alguien te escribe un mensaje y se equivoca en tu nombre. ¿Cuál es la manera más amable de corregirlo?",
        options: [
          "That's not my name.",
          "My name is actually Marta, not Maria.",
          "You spelled my name wrong.",
          "Learn to read."
        ],
        correctAnswer: 1,
        explanation: "Usar la palabra \"actually\" (en realidad) suaviza la corrección y la hace sonar educada y no confrontacional. Las otras opciones son directas, groseras (d) o defensivas (a y c), lo que podría crear una mala impresión en una conversación escrita donde el tono es difícil de interpretar."
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
