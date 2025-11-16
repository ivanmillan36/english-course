import type { LessonData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson17: LessonData = {
  id: 17,
  title: "Los Tiempos Perfectos y Continuos en Inglés",
  description: "En esta lección aprenderás a dominar los tiempos perfectos y continuos en inglés, que son fundamentales para expresar acciones en progreso o completadas en distintos momentos del tiempo. Comprenderás cómo y cuándo se usan estructuras como had + past participle, will be doing, will have done, have been doing y had been doing. Estas formas te permitirán describir secuencias temporales, duración de acciones y relaciones entre eventos pasados, presentes y futuros con precisión.",
  welcomeEmoji: "🧠",
  pageTitle: "English Learning - Tiempos Perfectos y Continuos",
  metaDescription: "Domina los tiempos perfectos y continuos en inglés. Aprende Past Perfect, Future Continuous, Future Perfect, Present Perfect Continuous y Past Perfect Continuous con ejemplos prácticos.",
  learningPoints: [
    "La estructura y el uso del Pasado Perfecto (Past Perfect)",
    "Cómo expresar acciones que estaban ocurriendo en el pasado, presente o futuro con los Tiempos Continuos",
    "Cómo usar los Tiempos Perfectos para indicar finalización o relación entre eventos",
    "La combinación de ambos: los Tiempos Perfectos Continuos, para expresar duración hasta un punto en el tiempo",
    "Diferencias entre cada uno y sus equivalentes en español",
    "Ejemplos reales y situaciones cotidianas para aplicarlos correctamente"
  ],
  content: [
    {
      topic: "Past Perfect (Pasado Perfecto)",
      explanation: "El Pasado Perfecto se usa para hablar de una acción que ocurrió antes de otra en el pasado. La estructura es: **had + participio pasado**. Se usa normalmente junto con el Pasado Simple, para establecer una secuencia de eventos. En español, se traduce como \"había hecho\", \"habías ido\", \"habían terminado\", etc. **Regla clave:** El evento más antiguo va en Pasado Perfecto, y el más reciente en Pasado Simple.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "had + participio pasado",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Regla clave: ', bold: true },
            { text: 'El evento más antiguo va en Pasado Perfecto, y el más reciente en Pasado Simple.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'When I arrived, the meeting ', italic: true },
              { text: 'had already started', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Cuando llegué, la reunión ya había comenzado.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'had finished', bold: true, italic: true },
              { text: ' her homework before dinner.', italic: true },
              { text: ' (Ella había terminado su tarea antes de la cena.)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'had never seen', bold: true, italic: true },
              { text: ' snow before that trip.', italic: true },
              { text: ' (Ellos nunca habían visto nieve antes de ese viaje.)' }
            ],
            [
              { text: 'By the time we got there, the movie ', italic: true },
              { text: 'had ended', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Para cuando llegamos allí, la película había terminado.)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'had studied', bold: true, italic: true },
              { text: ' French before I moved to Paris.', italic: true },
              { text: ' (Yo había estudiado francés antes de mudarme a París.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Future Continuous (Futuro Continuo)",
      explanation: "El Futuro Continuo se usa para describir acciones que estarán en progreso en un momento específico del futuro. La estructura es: **will be + verbo en -ing**. Se utiliza para hablar de una acción que estará ocurriendo y hacer planes o predicciones sobre una acción en curso. En español se traduce como \"estaré haciendo\", \"estará trabajando\", etc.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "will be + verbo en -ing",
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'This time tomorrow, I ', italic: true },
              { text: 'will be traveling', bold: true, italic: true },
              { text: ' to London.', italic: true },
              { text: ' (A esta hora mañana, estaré viajando a Londres.)' }
            ],
            [
              { text: "Don't call me at 8; I ", italic: true },
              { text: 'will be studying', bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (No me llames a las 8; estaré estudiando.)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'will be working', bold: true, italic: true },
              { text: ' all weekend.', italic: true },
              { text: ' (Ellos estarán trabajando todo el fin de semana.)' }
            ],
            [
              { text: 'At 3 PM, she ', italic: true },
              { text: 'will be presenting', bold: true, italic: true },
              { text: ' her project.', italic: true },
              { text: ' (A las 3 PM, ella estará presentando su proyecto.)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'will be flying', bold: true, italic: true },
              { text: ' over the ocean at midnight.', italic: true },
              { text: ' (Nosotros estaremos volando sobre el océano a medianoche.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Future Perfect (Futuro Perfecto)",
      explanation: "El Futuro Perfecto indica que una acción estará completada antes de un momento específico en el futuro. Estructura: **will have + participio pasado**. Sirve para proyectar hacia el futuro una acción terminada antes de otra acción o fecha. En español: \"habré hecho\", \"habrás terminado\", \"habrán llegado\", etc.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "will have + participio pasado",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Se usa con marcadores de tiempo como "by + fecha/hora" para indicar el momento límite.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'By 2026, I ', italic: true },
              { text: 'will have graduated', bold: true, italic: true },
              { text: ' from university.', italic: true },
              { text: ' (Para 2026, me habré graduado de la universidad.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'will have finished', bold: true, italic: true },
              { text: ' the project by Friday.', italic: true },
              { text: ' (Ella habrá terminado el proyecto para el viernes.)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'will have left', bold: true, italic: true },
              { text: ' before you arrive.', italic: true },
              { text: ' (Ellos se habrán ido antes de que llegues.)' }
            ],
            [
              { text: 'By next year, we ', italic: true },
              { text: 'will have saved', bold: true, italic: true },
              { text: ' enough money.', italic: true },
              { text: ' (Para el próximo año, habremos ahorrado suficiente dinero.)' }
            ],
            [
              { text: 'The train ', italic: true },
              { text: 'will have departed', bold: true, italic: true },
              { text: ' by the time we get there.', italic: true },
              { text: ' (El tren habrá partido para cuando lleguemos allí.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Present Perfect Continuous (Presente Perfecto Continuo)",
      explanation: "El Presente Perfecto Continuo se usa para expresar acciones que comenzaron en el pasado y continúan en el presente, o que acaban de terminar y tienen efecto ahora. Estructura: **have/has been + verbo en -ing**. Expresa duración y conexión con el presente. En español: \"he estado haciendo\", \"ha estado trabajando\", etc.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "have/has been + verbo en -ing",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Uso: ', bold: true },
            { text: 'Se usa con "for" (durante) o "since" (desde) para indicar duración.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'have been studying', bold: true, italic: true },
              { text: ' English for three years.', italic: true },
              { text: ' (He estado estudiando inglés durante tres años.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'has been waiting', bold: true, italic: true },
              { text: ' for you all morning.', italic: true },
              { text: ' (Ha estado esperando por ti toda la mañana.)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'have been working', bold: true, italic: true },
              { text: ' on this project since January.', italic: true },
              { text: ' (Hemos estado trabajando en este proyecto desde enero.)' }
            ],
            [
              { text: 'It ', italic: true },
              { text: 'has been raining', bold: true, italic: true },
              { text: ' all day.', italic: true },
              { text: ' (Ha estado lloviendo todo el día.)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'have been living', bold: true, italic: true },
              { text: ' here for five years.', italic: true },
              { text: ' (Han estado viviendo aquí durante cinco años.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Past Perfect Continuous (Pasado Perfecto Continuo)",
      explanation: "El Pasado Perfecto Continuo se usa para mostrar la duración de una acción que estaba ocurriendo antes de otra en el pasado. Estructura: **had been + verbo en -ing**. Se enfoca en cuánto tiempo duró la acción hasta cierto punto pasado. En español: \"había estado haciendo\", \"habías estado esperando\", etc.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "had been + verbo en -ing",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Uso: ', bold: true },
            { text: 'Enfatiza la duración de una acción que estaba en progreso antes de otro evento pasado.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'had been studying', bold: true, italic: true },
              { text: ' for two hours when she arrived.', italic: true },
              { text: ' (Había estado estudiando durante dos horas cuando ella llegó.)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'had been living', bold: true, italic: true },
              { text: ' in Paris before moving to Rome.', italic: true },
              { text: ' (Habían estado viviendo en París antes de mudarse a Roma.)' }
            ],
            [
              { text: 'He ', italic: true },
              { text: 'had been working', bold: true, italic: true },
              { text: ' all day, so he was tired.', italic: true },
              { text: ' (Había estado trabajando todo el día, así que estaba cansado.)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'had been waiting', bold: true, italic: true },
              { text: ' for an hour before the bus came.', italic: true },
              { text: ' (Habíamos estado esperando durante una hora antes de que llegara el autobús.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'had been cooking', bold: true, italic: true },
              { text: ' when the power went out.', italic: true },
              { text: ' (Había estado cocinando cuando se fue la luz.)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "When I got home, my parents ___ dinner.",
      options: ["have made", "had made", "were making", "will make"],
      correctAnswer: 1,
      explanation: "\"Had made\" indica que ya habían hecho la cena antes de que llegara (Pasado Perfecto)."
    },
    {
      question: "By next month, we ___ the new system.",
      options: ["will have installed", "have installed", "had installed", "are installing"],
      correctAnswer: 0,
      explanation: "\"Will have installed\" se usa para una acción que estará completada en el futuro (Futuro Perfecto)."
    },
    {
      question: "I ___ English for two years before I moved to Canada.",
      options: ["had been studying", "have been studying", "was studying", "will study"],
      correctAnswer: 0,
      explanation: "\"Had been studying\" expresa una acción continua antes de otra pasada (Pasado Perfecto Continuo)."
    },
    {
      question: "Don't call her at 9. She ___ a meeting.",
      options: ["will be having", "will have", "has", "had"],
      correctAnswer: 0,
      explanation: "\"Will be having\" muestra una acción en progreso en el futuro (Futuro Continuo)."
    },
    {
      question: "She looks tired. She ___ all day.",
      options: ["was working", "has been working", "had worked", "will work"],
      correctAnswer: 1,
      explanation: "\"Has been working\" indica que ha estado trabajando recientemente, con efecto en el presente."
    },
    {
      question: "They ___ for hours before the train finally arrived.",
      options: ["had been waiting", "have waited", "waited", "will wait"],
      correctAnswer: 0,
      explanation: "\"Had been waiting\" describe una espera continua previa a un evento pasado."
    },
    {
      question: "By 10 o'clock, we ___ our homework.",
      options: ["will be finishing", "will have finished", "have been finishing", "had finished"],
      correctAnswer: 1,
      explanation: "\"Will have finished\" indica una tarea completada antes de un momento futuro específico."
    },
    {
      question: "I ___ in this company since 2018.",
      options: ["have worked", "have been working", "had worked", "will work"],
      correctAnswer: 1,
      explanation: "\"Have been working\" enfatiza la duración continua desde 2018 hasta el presente."
    },
    {
      question: "The children ___ TV when their father arrived.",
      options: ["had been watching", "have been watching", "watched", "will watch"],
      correctAnswer: 0,
      explanation: "\"Had been watching\" muestra que llevaban un tiempo viendo TV antes de que él llegara."
    },
    {
      question: "This time tomorrow, I ___ on the beach.",
      options: ["will have been relaxing", "will be relaxing", "am relaxing", "had been relaxing"],
      correctAnswer: 1,
      explanation: "\"Will be relaxing\" expresa una acción en progreso en el futuro cercano."
    }
  ]
};
