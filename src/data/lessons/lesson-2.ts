import type { LessonData } from '../lessons';

export const lesson2: LessonData = {
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
};
