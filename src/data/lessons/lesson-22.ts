import type { LessonData, TitleData, ParagraphData, ListData, SeparatorData, CodeData } from '../lessons';

export const lesson22: LessonData = {
  id: 22,
  title: "Essential English Connectors for Clear and Effective Writing",
  description: "En esta lección vas a aprender los conectores más importantes que se usan en inglés para unir ideas y crear oraciones más claras, coherentes y fluidas. Estos conectores te permiten expresar contraste, causa, resultado, adición, ejemplos y comparación, mejorando tanto tu escritura como tu comprensión lectora. Cada conector cumple una función específica y saber elegirlo correctamente hará que tu inglés suene mucho más natural y profesional.",
  welcomeEmoji: "🔗",
  pageTitle: "English Learning - Essential English Connectors",
  metaDescription: "Aprende los conectores esenciales en inglés para expresar contraste, causa, consecuencia, adición, ejemplos y comparación. Mejora tu escritura y comprensión lectora.",
  learningPoints: [
    "Las diferencias entre conectores como however, although, nevertheless, even though, etc.",
    "Cuándo usar cada conector según si querés expresar contraste, causa, consecuencia, comparación o agregar información",
    "Cómo ubicar estos conectores en la oración (inicio, medio o final)",
    "Las diferencias de formalidad entre conectores",
    "Los errores comunes que cometen los estudiantes y cómo evitarlos",
    "Ejemplos claros y traducidos para que entiendas cada uso"
  ],
  content: [
    {
      topic: "Connectors of Contrast (Conectores de contraste)",
      explanation: "Los conectores de contraste se usan cuando querés mostrar que dos ideas se oponen, se contradicen o generan un contraste lógico. En inglés existen varios conectores para mostrar contraste, pero cada uno tiene su posición, formalidad y estructura específica. Elegir el conector adecuado permite comunicar matices: si algo sorprende, si es contradictorio, si es parcialmente opuesto o si querés sonar más formal.",
      examples: [
        {
          type: 'title',
          text: 'But',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Conjunción coordinante' }
            ],
            [
              { text: 'Une dos ideas opuestas en una misma oración' }
            ],
            [
              { text: 'Va en el medio' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I wanted to go for a walk, but it started raining.', italic: true },
              { text: ' → Quería salir a caminar, pero empezó a llover.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'However',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Adverbio conectivo' }
            ],
            [
              { text: 'Más formal que but' }
            ],
            [
              { text: 'Conecta oraciones separadas' }
            ],
            [
              { text: 'Puede ir al inicio, medio o final' }
            ],
            [
              { text: 'Va con coma' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I wanted to go for a walk. However, it started raining.', italic: true },
              { text: ' → Quería salir a caminar. Sin embargo, empezó a llover.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Although',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Conjunción subordinante' }
            ],
            [
              { text: 'Introduce una cláusula que expresa contraste' }
            ],
            [
              { text: 'Puede ir al inicio o al medio' }
            ],
            [
              { text: 'Inicio: ', bold: true },
              { text: 'Although it was raining, we went for a walk.', italic: true },
              { text: ' → Aunque estaba lloviendo, salimos a caminar.' }
            ],
            [
              { text: 'Medio: ', bold: true },
              { text: 'We went for a walk although it was raining.', italic: true },
              { text: ' → Salimos a caminar aunque estaba lloviendo.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Even though',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Igual que although, pero más fuerte y enfático' }
            ],
            [
              { text: 'Se usa cuando la segunda idea sorprende o desafía la lógica' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'Even though it was raining heavily, we went for a walk.', italic: true },
              { text: ' → Aunque estaba lloviendo mucho, salimos a caminar.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Though',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Más informal que although' }
            ],
            [
              { text: 'Puede ir al final de la oración' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'The movie was boring. I watched it all, though.', italic: true },
              { text: ' → La película era aburrida. Sin embargo, la vi toda.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Nevertheless / Nonetheless',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Muy formales' }
            ],
            [
              { text: 'Expresan un contraste fuerte entre hechos' }
            ],
            [
              { text: 'Van usualmente al inicio o medio' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'It was raining; nevertheless, we continued the trip.', italic: true },
              { text: ' → Estaba lloviendo; no obstante, continuamos el viaje.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'On the other hand',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Introduce otra perspectiva, usualmente comparativa' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'City life is exciting. On the other hand, it can be stressful.', italic: true },
              { text: ' → La vida en la ciudad es emocionante. Por otro lado, puede ser estresante.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'In contrast',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Marca una comparación explícita entre dos elementos' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'John is very quiet. In contrast, his brother is talkative.', italic: true },
              { text: ' → John es muy callado. En contraste, su hermano es hablador.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Connectors of Cause and Effect (Causa y consecuencia)",
      explanation: "Estos conectores explican por qué algo sucede (causa) o qué pasa como resultado (efecto). Son fundamentales para crear textos coherentes y lógicos.",
      examples: [
        {
          type: 'title',
          text: 'Because / Since / As',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Introducen la causa' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'We stayed home because it was raining.', italic: true },
              { text: ' → Nos quedamos en casa porque estaba lloviendo.' }
            ],
            [
              { text: 'Ejemplo con since: ', bold: true },
              { text: 'Since it was raining, we stayed home.', italic: true },
              { text: ' → Ya que estaba lloviendo, nos quedamos en casa.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'So',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Expresa consecuencia' }
            ],
            [
              { text: 'Es informal' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'It was raining, so we stayed home.', italic: true },
              { text: ' → Estaba lloviendo, así que nos quedamos en casa.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Therefore',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Consecuencia lógica y formal' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'It was raining; therefore, we stayed home.', italic: true },
              { text: ' → Estaba lloviendo; por lo tanto, nos quedamos en casa.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Thus / Hence',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Formales; muy comunes en textos académicos' }
            ],
            [
              { text: 'Ejemplo con thus: ', bold: true },
              { text: 'He didn\'t study; thus, he failed the exam.', italic: true },
              { text: ' → No estudió; por lo tanto, reprobó el examen.' }
            ],
            [
              { text: 'Ejemplo con hence: ', bold: true },
              { text: 'The evidence is clear; hence, we must act.', italic: true },
              { text: ' → La evidencia es clara; por lo tanto, debemos actuar.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Connectors of Addition (Adición)",
      explanation: "Se usan para sumar información o reforzar una idea. Te ayudan a construir argumentos más completos y convincentes.",
      examples: [
        {
          type: 'title',
          text: 'And',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Básico y general' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'She is smart and hardworking.', italic: true },
              { text: ' → Ella es inteligente y trabajadora.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Also',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Más flexible; puede ir al inicio, medio o final' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'She is smart and also hardworking.', italic: true },
              { text: ' → Ella es inteligente y también trabajadora.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Furthermore / Moreover / In addition',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Formales' }
            ],
            [
              { text: 'Se usan para agregar información importante o para sonar más profesional' }
            ],
            [
              { text: 'Ejemplo con moreover: ', bold: true },
              { text: 'The product is affordable. Moreover, it is durable.', italic: true },
              { text: ' → El producto es asequible. Además, es duradero.' }
            ],
            [
              { text: 'Ejemplo con furthermore: ', bold: true },
              { text: 'The plan is feasible. Furthermore, it is cost-effective.', italic: true },
              { text: ' → El plan es factible. Además, es rentable.' }
            ],
            [
              { text: 'Ejemplo con in addition: ', bold: true },
              { text: 'She speaks English fluently. In addition, she knows French.', italic: true },
              { text: ' → Habla inglés con fluidez. Además, sabe francés.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Besides',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Agrega una idea extra o inesperada' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I don\'t want to go. Besides, I\'m tired.', italic: true },
              { text: ' → No quiero ir. Además, estoy cansado.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Connectors of Example",
      explanation: "Estos conectores te permiten ilustrar tus ideas con ejemplos concretos, haciendo tu escritura más clara y comprensible.",
      examples: [
        {
          type: 'title',
          text: 'For example / For instance',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Introducen ejemplos específicos' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I enjoy outdoor activities, for example hiking and cycling.', italic: true },
              { text: ' → Disfruto de actividades al aire libre, por ejemplo senderismo y ciclismo.' }
            ],
            [
              { text: 'Ejemplo con for instance: ', bold: true },
              { text: 'Many countries, for instance Japan and Germany, have advanced technology.', italic: true },
              { text: ' → Muchos países, por ejemplo Japón y Alemania, tienen tecnología avanzada.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Such as',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Se usa para listar ejemplos dentro de una oración' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I like fruits such as apples and bananas.', italic: true },
              { text: ' → Me gustan las frutas como manzanas y plátanos.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Connectors of Comparison",
      explanation: "Estos conectores te ayudan a comparar ideas, situaciones o personas, mostrando similitudes entre ellas.",
      examples: [
        {
          type: 'title',
          text: 'Similarly',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Indica que algo es similar a lo mencionado anteriormente' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'John is very shy. Similarly, his sister avoids social events.', italic: true },
              { text: ' → John es muy tímido. De manera similar, su hermana evita eventos sociales.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Likewise',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Similar a "similarly", pero más formal' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'She was tired. Likewise, I needed a rest.', italic: true },
              { text: ' → Ella estaba cansada. Igualmente, yo necesitaba descansar.' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Resumen: Posición y Formalidad de los Conectores",
      explanation: "Es importante recordar dónde colocar cada conector y qué nivel de formalidad tiene. Esto te ayudará a elegir el conector correcto según el contexto.",
      examples: [
        {
          type: 'title',
          text: 'Conectores que van al inicio de la oración',
          emoji: '📍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'However (Sin embargo), Nevertheless (No obstante), Furthermore (Además), Moreover (Además), In addition (Además), On the other hand (Por otro lado), In contrast (En contraste), Similarly (De manera similar), Likewise (Igualmente)' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'However, we decided to continue.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Conectores que van en el medio',
          emoji: '📍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'But (Pero), And (Y), So (Así que), Because (Porque), Although (Aunque), Even though (Aunque)' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I wanted to go, but it was raining.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Niveles de formalidad',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Informales: ', bold: true },
              { text: 'but (pero), so (así que), though (sin embargo)' }
            ],
            [
              { text: 'Neutros: ', bold: true },
              { text: 'however (sin embargo), although (aunque), because (porque), also (también)' }
            ],
            [
              { text: 'Formales: ', bold: true },
              { text: 'nevertheless (no obstante), therefore (por lo tanto), thus (por lo tanto), hence (por lo tanto), furthermore (además), moreover (además), in addition (además), similarly (de manera similar), likewise (igualmente)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "Choose the best connector: The exam was difficult; ______, most students passed.",
      options: ["because", "however", "although", "and"],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'however' porque muestra contraste entre 'difícil' y 'pasaron'. 'However' conecta dos ideas opuestas y va con punto y coma o punto antes de él."
    },
    {
      question: "Complete the sentence: ______ it was cold, we went swimming.",
      options: ["Because", "Even though", "So", "Furthermore"],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'Even though' porque expresa sorpresa o contradicción fuerte. Aunque hacía frío (condición adversa), fuimos a nadar (acción sorprendente)."
    },
    {
      question: "Which connector adds information formally?",
      options: ["moreover", "but", "although", "so"],
      correctAnswer: 0,
      explanation: "La respuesta correcta es 'moreover'. 'Moreover' es formal y agrega información importante. 'But' y 'so' son informales, y 'although' expresa contraste, no adición."
    },
    {
      question: "Choose the correct option: I stayed home ______ I was sick.",
      options: ["so", "therefore", "because", "however"],
      correctAnswer: 2,
      explanation: "La respuesta correcta es 'because' porque indica causa directa. 'I was sick' es la razón por la cual 'I stayed home'. 'So' y 'therefore' expresan consecuencia, no causa."
    },
    {
      question: "Which connector introduces an example?",
      options: ["nevertheless", "such as", "although", "on the other hand"],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'such as'. Este conector se usa para introducir ejemplos específicos dentro de una oración. Los otros conectores expresan contraste, no ejemplos."
    },
    {
      question: "Fill in the blank: We wanted to leave early; ______, the car wouldn't start.",
      options: ["therefore", "however", "because", "for example"],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'however' porque muestra contraste entre la intención ('wanted to leave early') y el problema ('the car wouldn't start'). 'However' conecta dos ideas opuestas."
    },
    {
      question: "Choose the informal contrast connector:",
      options: ["though", "nevertheless", "consequently", "furthermore"],
      correctAnswer: 0,
      explanation: "La respuesta correcta es 'though' porque es la forma más informal entre las opciones. 'Nevertheless' y 'furthermore' son formales, y 'consequently' expresa consecuencia, no contraste."
    },
    {
      question: "Choose the connector of result:",
      options: ["since", "although", "so", "but"],
      correctAnswer: 2,
      explanation: "La respuesta correcta es 'so' porque expresa consecuencia o resultado. 'Since' y 'although' introducen causa y contraste respectivamente, mientras que 'but' expresa contraste."
    },
    {
      question: "Select the best option: I like coffee. ______, I drink tea sometimes.",
      options: ["On the other hand", "Because", "Even though", "For example"],
      correctAnswer: 0,
      explanation: "La respuesta correcta es 'On the other hand' porque contrasta preferencias. Muestra que aunque le gusta el café, también bebe té a veces, presentando otra perspectiva."
    },
    {
      question: "Complete the sentence: She didn't study; ______, she failed.",
      options: ["however", "therefore", "although", "besides"],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'therefore' porque indica consecuencia lógica. 'She didn't study' (causa) lleva directamente a 'she failed' (consecuencia). 'However' expresaría contraste, no consecuencia."
    }
  ]
};

