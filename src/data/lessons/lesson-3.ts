import type { LessonData } from '../lessons';

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
        "The dog / eats / a bone. (El perro / come / un hueso.) - `Sujeto: The dog` | `Verbo: eats` | `Objeto: a bone`",
        "Maria / reads / a book. (María / lee / un libro.) - `Sujeto: Maria` | `Verbo: reads` | `Objeto: a book`",
        "They / play / soccer. (Ellos / juegan / fútbol.) - `Sujeto: They` | `Verbo: play` | `Objeto: soccer`"
      ]
    },
    {
      topic: "Los Pronombres Personales de Sujeto (Subject Pronouns)",
      explanation: "Los pronombres personales son palabras que usamos para reemplazar un sustantivo (nombre de una persona, animal o cosa) y así evitar repetirlo constantemente. Siempre funcionan como el **sujeto** de la oración (la persona o cosa que hace la acción del verbo). Es crucial memorizarlos y saber cuándo usar cada uno.",
      examples: [
        "**I** (Yo) - **I** eat an apple. (Yo como una manzana.)",
        "**You** (Tú, Usted, Vosotros, Ustedes) - **You** are my friend. (Tú eres mi amigo.)",
        "**He** (Él) - **He** works here. (Él trabaja aquí.)",
        "**She** (Ella) - **She** loves music. (Ella ama la música.)",
        "**It** (Ello/Eso para animales y cosas) - **It** is a book. (Es un libro.) *The dog? -> **It** is big.* (¿El perro? -> Es grande.)",
        "**We** (Nosotros/Nosotras) - **We** study English. (Nosotros estudiamos inglés.)",
        "**They** (Ellos/Ellas) - **They** live in Madrid. (Ellos viven en Madrid.)",
        "**Nota importante sobre \"You\":** \"You\" se usa para \"tú\", \"usted\", \"vosotros\" y \"ustedes\". La diferencia se entiende por el contexto."
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
