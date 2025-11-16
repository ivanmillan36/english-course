import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson18: LessonData = {
  id: 18,
  title: "La Voz Pasiva en Inglés (Passive Voice)",
  description: "En esta lección aprenderás la Voz Pasiva, uno de los temas más importantes para redactar inglés formal, técnico o académico. La voz pasiva se utiliza cuando queremos dar más importancia a la acción o al resultado que al sujeto que la realiza. Aprenderás cómo construirla correctamente en todos los tiempos verbales más usados, cómo identificar cuándo aplicarla y cómo transformar oraciones activas en pasivas.",
  welcomeEmoji: "🧾",
  pageTitle: "English Learning - La Voz Pasiva",
  metaDescription: "Domina la Voz Pasiva en inglés. Aprende cuándo y cómo usar la estructura 'to be + participio pasado' en todos los tiempos verbales con ejemplos prácticos.",
  learningPoints: [
    "Qué es la voz pasiva y en qué se diferencia de la voz activa",
    "Cómo formar oraciones pasivas en distintos tiempos verbales",
    "Cuándo usar y cuándo evitar la voz pasiva",
    "La estructura: sujeto + verbo to be + participio pasado (+ by + agente opcional)",
    "Las estructuras más comunes: is done, was done, has been done, will be done, must be done",
    "Cómo transformar oraciones activas en pasivas paso a paso"
  ],
  content: [
    {
      topic: "¿Qué es la Voz Pasiva?",
      explanation: "La **voz pasiva** es una forma gramatical que se usa para **enfatizar la acción o su resultado**, no a la persona que la realiza. Se forma con el verbo **to be** (en el tiempo correspondiente) + el **participio pasado** del verbo principal. La estructura general es: **Objeto (de la voz activa) + verbo to be + participio pasado** (+ *by* + sujeto opcional). En la voz activa, el **sujeto hace la acción**. En la voz pasiva, el **sujeto recibe la acción**. El agente (la persona que realiza la acción) **puede omitirse** si no es importante o es evidente.",
      examples: [
        {
          type: 'title',
          text: 'Estructura general',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'Sujeto + to be + participio pasado (+ by + agente)',
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparación básica',
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'The company published the report.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The report ', italic: true },
              { text: 'was published', bold: true, italic: true },
              { text: ' (by the company).', italic: true }
            ],
            [
              { text: 'Activa: ', bold: true },
              { text: 'Someone cleaned the office.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The office ', italic: true },
              { text: 'was cleaned', bold: true, italic: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Activa: ', bold: true },
              { text: 'They will build a new school.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'A new school ', italic: true },
              { text: 'will be built', bold: true, italic: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo sin agente',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'The bridge ', italic: true },
            { text: 'was built', bold: true, italic: true },
            { text: ' in 1990.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '(No es necesario decir quién lo construyó)' }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Estructura en distintos tiempos verbales",
      explanation: "El verbo \"**to be**\" cambia según el tiempo verbal, pero el **participio pasado** del verbo principal **permanece igual**. El tiempo de la oración pasiva se determina por la forma del verbo 'to be' que usemos. Esta es la clave para formar correctamente la voz pasiva en cualquier tiempo.",
      examples: [
        {
          type: 'title',
          text: 'Presente Simple',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'am/is/are + participio pasado',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'The work ', italic: true },
              { text: 'is done', bold: true, italic: true },
              { text: ' every day.', italic: true },
              { text: ' (El trabajo se hace todos los días)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Pasado Simple',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'was/were + participio pasado',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'The letter ', italic: true },
              { text: 'was sent', bold: true, italic: true },
              { text: ' yesterday.', italic: true },
              { text: ' (La carta fue enviada ayer)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Presente Perfecto',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'has/have been + participio pasado',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'The house ', italic: true },
              { text: 'has been sold', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (La casa ha sido vendida)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Futuro Simple',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'will be + participio pasado',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'The results ', italic: true },
              { text: 'will be announced', bold: true, italic: true },
              { text: ' tomorrow.', italic: true },
              { text: ' (Los resultados serán anunciados mañana)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Verbos Modales',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'modal + be + participio pasado',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'The form ', italic: true },
              { text: 'must be completed', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (El formulario debe ser completado)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Resumen de estructuras por tiempo verbal',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tiempo Verbal', 'Estructura Pasiva', 'Ejemplo'],
          rows: [
            ['Presente Simple', 'am/is/are + participio pasado', 'The work is done every day.'],
            ['Pasado Simple', 'was/were + participio pasado', 'The letter was sent yesterday.'],
            ['Presente Perfecto', 'has/have been + participio pasado', 'The house has been sold.'],
            ['Futuro Simple', 'will be + participio pasado', 'The results will be announced tomorrow.'],
            ['Verbos Modales', 'modal + be + participio pasado', 'The form must be completed.']
          ]
        } as TableData
      ]
    },
    {
      topic: "Cómo transformar oraciones activas en pasivas",
      explanation: "Para transformar una oración de voz activa a voz pasiva sigue estos pasos: 1) **Identifica el objeto** de la voz activa (la cosa o persona que recibe la acción). 2) Ese objeto se convierte en el **nuevo sujeto** de la oración pasiva. 3) Agrega el verbo **to be** en el tiempo adecuado. 4) Usa el **participio pasado** del verbo principal. 5) Si quieres mencionar quién hizo la acción, usa **by + agente** (opcional).",
      examples: [
        {
          type: 'title',
          text: 'Proceso paso a paso',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [{ text: '1. Identifica el objeto de la voz activa (la cosa o persona que recibe la acción)', bold: true }],
            [{ text: '2. Ese objeto se convierte en el nuevo sujeto de la oración pasiva', bold: true }],
            [{ text: '3. Agrega el verbo to be en el tiempo adecuado', bold: true }],
            [{ text: '4. Usa el participio pasado del verbo principal', bold: true }],
            [{ text: '5. Si quieres mencionar quién hizo la acción, usa by + agente (opcional)', bold: true }]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 1',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'The chef cooked the meal.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The meal ', italic: true },
              { text: 'was cooked', bold: true, italic: true },
              { text: ' (by the chef).', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 2',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'They have finished the project.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The project ', italic: true },
              { text: 'has been finished', bold: true, italic: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 3',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'Someone must do the report.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The report ', italic: true },
              { text: 'must be done', bold: true, italic: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 4',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'The teacher will explain the lesson.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'The lesson ', italic: true },
              { text: 'will be explained', bold: true, italic: true },
              { text: ' (by the teacher).', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo 5',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Activa: ', bold: true },
              { text: 'People speak English worldwide.', italic: true }
            ],
            [
              { text: 'Pasiva: ', bold: true },
              { text: 'English ', italic: true },
              { text: 'is spoken', bold: true, italic: true },
              { text: ' worldwide.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Cuándo usar la voz pasiva",
      explanation: "Usamos la voz pasiva cuando: **No sabemos** quién realizó la acción, **no importa** quién la realizó, **queremos sonar más formales o impersonales**, o **queremos enfocarnos en el resultado o la acción**. Es muy común en contextos formales, periodísticos, científicos y administrativos. Evítala si la oración se vuelve **innecesariamente complicada o poco natural**. En inglés conversacional, la voz activa suele ser más común.",
      examples: [
        {
          type: 'title',
          text: 'Cuándo usar la voz pasiva',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. No sabemos quién hizo la acción:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'My car ', italic: true },
              { text: 'was stolen', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (No sé quién lo hizo)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '2. No importa quién la hizo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The streets ', italic: true },
              { text: 'are cleaned', bold: true, italic: true },
              { text: ' every morning.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Para sonar más formal:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The law ', italic: true },
              { text: 'was approved', bold: true, italic: true },
              { text: ' in 2010.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: '4. Para enfocarse en el resultado:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The new hospital ', italic: true },
              { text: 'has been opened', bold: true, italic: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos adicionales',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'A new bridge ', italic: true },
              { text: 'was built', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Gobierno construyó)' }
            ],
            [
              { text: 'A new store ', italic: true },
              { text: 'has been opened', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Alguien abrió)' }
            ],
            [
              { text: 'The road ', italic: true },
              { text: 'will be repaired', bold: true, italic: true },
              { text: ' soon.', italic: true },
              { text: ' (Trabajadores repararán)' }
            ],
            [
              { text: 'This room ', italic: true },
              { text: 'must be cleaned', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Alguien debe limpiar)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "The cake ___ by my mom yesterday.",
      options: ["is made", "was made", "has been made", "will be made"],
      correctAnswer: 1,
      explanation: "\"Yesterday\" indica pasado → **was made** (Pasado Simple Pasivo)."
    },
    {
      question: "The project ___ by next week.",
      options: ["will be finished", "was finished", "is finished", "has been finished"],
      correctAnswer: 0,
      explanation: "\"By next week\" (para la próxima semana) indica **futuro con will be + participio**."
    },
    {
      question: "The documents ___ already ___.",
      options: ["has / been sent", "have / been sent", "were / sent", "are / sent"],
      correctAnswer: 1,
      explanation: "\"Documents\" es plural → \"have been sent\" (Presente Perfecto Pasivo)."
    },
    {
      question: "The meeting ___ now.",
      options: ["is being held", "was held", "has held", "will hold"],
      correctAnswer: 0,
      explanation: "\"Is being held\" indica una acción en curso **en el presente pasivo**."
    },
    {
      question: "The form ___ carefully before submission.",
      options: ["must be filled", "is filled", "was filled", "has been filled"],
      correctAnswer: 0,
      explanation: "\"Must be filled\" usa un **verbo modal + be + participio pasado** (obligación)."
    },
    {
      question: "The report ___ yesterday morning.",
      options: ["is published", "was published", "has been published", "will be published"],
      correctAnswer: 1,
      explanation: "\"Yesterday\" = pasado → **was published**."
    },
    {
      question: "English ___ in many countries.",
      options: ["speaks", "is spoken", "was spoken", "has spoken"],
      correctAnswer: 1,
      explanation: "En presente, el verbo pasivo es **is spoken** (Presente Simple Pasivo)."
    },
    {
      question: "The results ___ tomorrow.",
      options: ["will be announced", "were announced", "have been announced", "are announced"],
      correctAnswer: 0,
      explanation: "\"Tomorrow\" = futuro → **will be + participio pasado**."
    },
    {
      question: "The room ___ since early morning.",
      options: ["has been cleaned", "is cleaned", "was cleaned", "will be cleaned"],
      correctAnswer: 0,
      explanation: "Acción reciente con efecto actual → **has been cleaned** (Presente Perfecto Pasivo)."
    },
    {
      question: "The movie ___ by millions of people.",
      options: ["has been seen", "is seeing", "was seeing", "will see"],
      correctAnswer: 0,
      explanation: "Acción que comenzó en el pasado y sigue siendo relevante → **has been seen**."
    }
  ]
};
