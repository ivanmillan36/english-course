import type { LessonData } from '../lessons';

export const lesson5: LessonData = {
  id: 5,
  title: "Saludos y Presentaciones: El Arte de Empezar una Conversación Escrita",
  description: "Da tus primeros pasos en el mundo del inglés escrito. En esta lección, dominarás los cimientos de cualquier interacción: cómo saludar, presentarte y despedirte correctamente en diferentes contextos. Aprenderás desde lo más básico, como decir tu nombre, hasta las fórmulas adecuadas para comenzar y terminar un mensaje de manera educada y natural. Al finalizar, podrás entablar una conversación escrita simple con confianza.",
  welcomeEmoji: "👋",
  pageTitle: "English Learning - Saludos y Presentaciones",
  metaDescription: "Aprende a saludar, presentarte y despedirte correctamente en inglés. Domina los fundamentos de la comunicación escrita en diferentes contextos.",
  learningPoints: [
    "A utilizar los saludos (Hello, Hi, Dear) apropiados para diferentes situaciones",
    "A elegir la despedida (Bye, See you soon, Best regards) que mejor se adapte al contexto",
    "A presentarte usando frases clave: My name is..., I am from..., I am [age] years old, Nice to meet you",
    "A hacer preguntas básicas para conocer a alguien: What's your name?, Where are you from?, How are you?"
  ],
  content: [
    {
      topic: "Cómo empezar y terminar un mensaje: El saludo y la despedida",
      explanation: "El saludo y la despedida son el marco de tu mensaje. Marcan el tono (formal o informal) y muestran tu educación. En inglés, la elección depende de qué tan bien conoces a la persona con la que estás hablando.",
      examples: [
        "**Saludos (Greetings):**",
        "**Hi / Hello**: Son los saludos estándar y neutros. Se usan en contextos **informales** (con amigos, familiares, compañeros de trabajo con confianza) o **neutrales** (en un email profesional si ya hay cierta familiaridad). Hi es ligeramente más informal que Hello, pero ambos son perfectamente aceptables en la mayoría de situaciones.",
        "*Ejemplo:* Hi Carlos, Hello Maria,",
        "**Dear [Name]**: Este es el saludo **formal**. Se utiliza principalmente en emails profesionales, cartas de trabajo, quejas, o cuando te diriges a alguien por primera vez y no hay confianza.",
        "*Ejemplo:* Dear Mr. Smith, (Señor Smith), Dear Dr. Johnson, (Doctor/Doctora Johnson).",
        "**Despedidas (Goodbyes / Closings):**",
        "**Bye / See you soon / See you later**: Despedidas **informales**. Ideales para chats con amigos o correos rápidos con personas cercanas.",
        "*Ejemplo:* Bye!, See you tomorrow!, Talk to you later.",
        "**Best regards / Kind regards / Regards**: Despedidas **formales o neutrales**. Son las más comunes y seguras para usar en emails profesionales o con personas que no conoces bien. Son el equivalente a 'Saludos cordiales' o 'Atentamente'.",
        "*Ejemplo:* Best regards, Ana López.",
        "**Sincerely**: Muy **formal**. Se usa típicamente en cartas formales de negocios o de carácter oficial.",
        "*Ejemplo:* Sincerely, The Marketing Team."
      ]
    },
    {
      topic: "Frases clave para presentarte (Key Phrases to Introduce Yourself)",
      explanation: "Una vez que has saludado, es momento de decir quién eres. Estas frases son esenciales y siguen una estructura simple.",
      examples: [
        "**My name is [Tu nombre].** (Mi nombre es...)",
        "*Ejemplo:* My name is Sofia.",
        "*Nota:* También puedes usar la versión más corta: **I'm [Tu nombre].** (I'm es la contracción de I am). My name is... es un poco más formal que I'm...",
        "**I am from [Tu país/ciudad].** (Soy de...)",
        "*Ejemplo:* I am from Mexico. I'm from Madrid.",
        "*Nota:* Si quieres ser más específico, puedes decir: I'm from Barcelona, Spain.",
        "**I am [age] years old.** (Tengo [edad] años.)",
        "*Ejemplo:* I am 25 years old. I'm 30 years old.",
        "*Nota:* En conversaciones informales, a menudo se omite years old y solo se dice I'm 25.",
        "**Nice to meet you.** (Encantado/a de conocerte.)",
        "*Ejemplo:* Después de que alguien te dice su nombre, respondes: Nice to meet you, John.",
        "*Nota:* Es una frase de cortesía muy importante en las presentaciones."
      ]
    },
    {
      topic: "Preguntas básicas para conocer a alguien (Basic Questions to Get to Know Someone)",
      explanation: "Una conversación es una calle de dos sentidos. Estas preguntas te permiten mostrar interés en la otra persona.",
      examples: [
        "**What's your name?** (¿Cuál es tu nombre?)",
        "*Ejemplo:* Hello! What's your name?",
        "*Nota:* What's es la contracción de What is.",
        "**Where are you from?** (¿De dónde eres?)",
        "*Ejemplo:* Your English is great! Where are you from?",
        "**How are you?** (¿Cómo estás?)",
        "*Ejemplo:* Hi Mark! How are you?",
        "*Respuestas comunes:* I'm fine, thanks. And you? (Estoy bien, gracias. ¿Y tú?), I'm great! (¡Estoy genial!), Not bad. (No está mal)."
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cuál es el saludo MÁS formal para comenzar un email?",
      options: ["Hi Anna,", "Hello Anna,", "Dear Anna,", "Hey Anna,"],
      correctAnswer: 2,
      explanation: "'Dear' se reserva para contextos formales o profesionales."
    },
    {
      question: "Quieres despedirte de un amigo en un chat. ¿Qué usas?",
      options: ["Best regards,", "Bye!", "Sincerely,", "Kind regards,"],
      correctAnswer: 1,
      explanation: "'Bye' es la opción informal y común para amigos."
    },
    {
      question: "¿Cómo se dice 'Soy de Argentina' en inglés?",
      options: ["I from Argentina.", "I am from Argentina.", "I is from Argentina.", "I are from Argentina."],
      correctAnswer: 1,
      explanation: "La estructura correcta es Subject + verb 'to be' + from + place."
    },
    {
      question: "Tu jefe te envía un correo y firma con 'Best regards'. ¿Cómo deberías responderle para ser profesional?",
      options: ["Bye!", "See ya!", "Best regards,", "Hi!"],
      correctAnswer: 2,
      explanation: "Es apropiado devolver la misma formalidad en un contexto profesional."
    },
    {
      question: "Alguien te dice 'My name is David'. La respuesta correcta es:",
      options: ["What's your name?", "I'm fine.", "Nice to meet you.", "Where are you from?"],
      correctAnswer: 2,
      explanation: "Es la expresión de cortesía estándar al conocer a alguien."
    },
    {
      question: "¿Cuál es la pregunta correcta para preguntar la edad de alguien?",
      options: ["How old you are?", "How old are you?", "You are how old?", "What old are you?"],
      correctAnswer: 1,
      explanation: "En preguntas, el verbo ('are') va antes del sujeto ('you')."
    },
    {
      question: "¿Cómo se contrae 'I am' en una presentación informal?",
      options: ["I'mm", "Im", "I'm", "I a'm"],
      correctAnswer: 2,
      explanation: "La contracción correcta es I + apóstrofo + m (I'm)."
    },
    {
      question: "¿Cuál de estas es una respuesta común a 'How are you?'?",
      options: ["My name is Laura.", "I'm fine, thanks.", "Nice to meet you.", "I am from Chile."],
      correctAnswer: 1,
      explanation: "Es una de las respuestas más típicas."
    },
    {
      question: "Estás en una conferencia y te presentas a un colega. ¿Qué saludo usarías?",
      options: ["Hey!", "Hello, my name is...", "Dear colleague,", "Hi dude!"],
      correctAnswer: 1,
      explanation: "'Hello' es neutral y apropiado para un contexto semiformal como una conferencia. 'My name is' es la forma completa y clara de presentarse."
    },
    {
      question: "¿Qué frase completa la siguiente conversación? A: 'Hi, I'm Alex. _____' B: 'I'm from Brazil.'",
      options: ["How are you?", "What's your name?", "How old are you?", "Where are you from?"],
      correctAnswer: 3,
      explanation: "La respuesta de B ('Soy de Brasil') responde directamente a esta pregunta."
    }
  ]
};
