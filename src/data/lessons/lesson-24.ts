import type { LessonData, TitleData, ParagraphData, ListData, SeparatorData } from '../lessons';

export const lesson24: LessonData = {
  id: 24,
  title: "Phrasal Verbs: Guía Completa y Didáctica",
  description: "Los phrasal verbs son una parte esencial del inglés que combinan un verbo con una o más partículas (preposiciones o adverbios) para crear un significado completamente nuevo. En esta lección aprenderás qué son los phrasal verbs, cómo funcionan, los diferentes tipos que existen, y los más comunes agrupados por significado. Dominar los phrasal verbs te ayudará a sonar más natural y fluido en inglés.",
  welcomeEmoji: "🔤",
  pageTitle: "English Learning - Phrasal Verbs: Guía Completa",
  metaDescription: "Aprende phrasal verbs en inglés: qué son, cómo funcionan, tipos y los más comunes agrupados por significado. Guía completa y didáctica con ejemplos prácticos.",
  learningPoints: [
    "Qué son los phrasal verbs y por qué son importantes en inglés",
    "Los diferentes tipos de phrasal verbs: transitivos, intransitivos, separables e inseparables",
    "Los phrasal verbs más comunes agrupados por significado (movimiento, comunicación, relaciones, trabajo, dinero, tecnología, etc.)",
    "Cómo usar los phrasal verbs correctamente en diferentes contextos",
    "Phrasal verbs con múltiples significados y cómo distinguirlos",
    "Errores comunes y cómo evitarlos"
  ],
  content: [
    {
      topic: "¿Qué son los Phrasal Verbs?",
      explanation: "Los phrasal verbs son combinaciones de un verbo con una o más partículas (preposiciones o adverbios) que crean un significado nuevo y único. Son extremadamente comunes en el inglés cotidiano y son esenciales para sonar natural y fluido. Por ejemplo, 'look' significa 'mirar', pero 'look after' significa 'cuidar', y 'look up' significa 'buscar' o 'mejorar'.",
      examples: [
        {
          type: 'title',
          text: 'Estructura de los Phrasal Verbs',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Verbo + Partícula(s) = Nuevo significado' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'look', code: true },
              { text: ' (mirar) + ', bold: true },
              { text: 'after', code: true },
              { text: ' (después) = ', bold: true },
              { text: 'look after', code: true },
              { text: ' (cuidar)' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'give', code: true },
              { text: ' (dar) + ', bold: true },
              { text: 'up', code: true },
              { text: ' (arriba) = ', bold: true },
              { text: 'give up', code: true },
              { text: ' (rendirse)' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'turn', code: true },
              { text: ' (girar) + ', bold: true },
              { text: 'on', code: true },
              { text: ' (encendido) = ', bold: true },
              { text: 'turn on', code: true },
              { text: ' (encender)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '¿Por qué son importantes?',
          emoji: '⭐',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Son extremadamente comunes en el inglés hablado y escrito' }
            ],
            [
              { text: 'Hacen que tu inglés suene más natural y fluido' }
            ],
            [
              { text: 'Muchas veces no tienen una traducción directa al español' }
            ],
            [
              { text: 'Son esenciales para entender conversaciones y textos en inglés' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I need to look after my sister.', italic: true },
              { text: ' → Necesito cuidar a mi hermana. (No puedes decir "mirar después")' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Tipos de Phrasal Verbs",
      explanation: "Los phrasal verbs se clasifican según si necesitan un objeto (transitivos) o no (intransitivos), y si ese objeto puede separar el verbo de la partícula (separables) o no (inseparables). Entender estas categorías es crucial para usarlos correctamente.",
      examples: [
        {
          type: 'title',
          text: '1. Phrasal Verbs Intransitivos',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'No necesitan un objeto directo' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'The plane took off.', italic: true },
              { text: ' → El avión despegó.' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'Please, wake up!', italic: true },
              { text: ' → ¡Por favor, despierta!' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'The meeting broke up early.', italic: true },
              { text: ' → La reunión terminó temprano.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '2. Phrasal Verbs Transitivos',
          emoji: '🔹',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Necesitan un objeto directo' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I turned on the TV.', italic: true },
              { text: ' → Encendí la televisión.' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'She looks after her children.', italic: true },
              { text: ' → Ella cuida a sus hijos.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '3. Phrasal Verbs Separables',
          emoji: '✂️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El objeto puede ir entre el verbo y la partícula, o después de la partícula' }
            ],
            [
              { text: 'Si el objeto es un pronombre (me, you, him, her, it, us, them), DEBE ir en el medio' }
            ],
            [
              { text: 'Ejemplo con sustantivo: ', bold: true },
              { text: 'Turn on the light', italic: true },
              { text: ' O ', bold: true },
              { text: 'Turn the light on', italic: true },
              { text: ' → Enciende la luz.' }
            ],
            [
              { text: 'Ejemplo con pronombre: ', bold: true },
              { text: 'Turn it on', italic: true },
              { text: ' ✓ (Correcto) / ', bold: true },
              { text: 'Turn on it', italic: true },
              { text: ' ✗ (Incorrecto)' }
            ],
            [
              { text: 'Otros ejemplos separables: ', bold: true },
              { text: 'pick up', code: true },
              { text: ', ', bold: true },
              { text: 'put on', code: true },
              { text: ', ', bold: true },
              { text: 'take off', code: true },
              { text: ', ', bold: true },
              { text: 'give up', code: true },
              { text: ', ', bold: true },
              { text: 'turn off', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '4. Phrasal Verbs Inseparables',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'El objeto SIEMPRE va después de la partícula' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I look after my sister.', italic: true },
              { text: ' ✓ (Correcto)' }
            ],
            [
              { text: 'Ejemplo incorrecto: ', bold: true },
              { text: 'I look my sister after.', italic: true },
              { text: ' ✗ (Incorrecto)' }
            ],
            [
              { text: 'Ejemplo con pronombre: ', bold: true },
              { text: 'I look after her.', italic: true },
              { text: ' ✓ (Correcto) - El pronombre también va después' }
            ],
            [
              { text: 'Otros ejemplos inseparables: ', bold: true },
              { text: 'look for', code: true },
              { text: ', ', bold: true },
              { text: 'deal with', code: true },
              { text: ', ', bold: true },
              { text: 'depend on', code: true },
              { text: ', ', bold: true },
              { text: 'belong to', code: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Phrasal Verbs Comunes por Significado",
      explanation: "Aquí tienes los phrasal verbs más comunes agrupados por significado. Esto te ayudará a recordarlos mejor y a usarlos en situaciones específicas.",
      examples: [
        {
          type: 'title',
          text: 'Movimiento y Dirección',
          emoji: '🚶',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Go out: ', bold: true },
              { text: 'Salir (a algún lugar)', italic: true },
              { text: ' → ', bold: true },
              { text: 'We go out every Friday night.', code: true }
            ],
            [
              { text: 'Come back: ', bold: true },
              { text: 'Volver, regresar', italic: true },
              { text: ' → ', bold: true },
              { text: 'When will you come back?', code: true }
            ],
            [
              { text: 'Get in / Get out: ', bold: true },
              { text: 'Entrar / Salir (de un vehículo)', italic: true },
              { text: ' → ', bold: true },
              { text: 'Get in the car! / Get out of here!', code: true }
            ],
            [
              { text: 'Come in: ', bold: true },
              { text: 'Entrar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Please, come in!', code: true }
            ],
            [
              { text: 'Go away: ', bold: true },
              { text: 'Irse, marcharse', italic: true },
              { text: ' → ', bold: true },
              { text: 'Go away! I\'m busy.', code: true }
            ],
            [
              { text: 'Turn around: ', bold: true },
              { text: 'Darse la vuelta', italic: true },
              { text: ' → ', bold: true },
              { text: 'Turn around and look at me.', code: true }
            ],
            [
              { text: 'Move in: ', bold: true },
              { text: 'Mudarse (entrar)', italic: true },
              { text: ' → ', bold: true },
              { text: 'They moved in yesterday.', code: true }
            ],
            [
              { text: 'Move out: ', bold: true },
              { text: 'Mudarse (salir)', italic: true },
              { text: ' → ', bold: true },
              { text: 'He moved out last month.', code: true }
            ],
            [
              { text: 'Run away: ', bold: true },
              { text: 'Escaparse', italic: true },
              { text: ' → ', bold: true },
              { text: 'The dog ran away.', code: true }
            ],
            [
              { text: 'Drop by: ', bold: true },
              { text: 'Pasar a visitar sin avisar', italic: true },
              { text: ' → ', bold: true },
              { text: 'You can drop by anytime.', code: true }
            ],
            [
              { text: 'Show up: ', bold: true },
              { text: 'Presentarse, aparecer', italic: true },
              { text: ' → ', bold: true },
              { text: 'He never showed up.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comunicación',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Speak up: ', bold: true },
              { text: 'Hablar más alto', italic: true },
              { text: ' → ', bold: true },
              { text: 'Could you speak up? I can\'t hear you.', code: true }
            ],
            [
              { text: 'Talk over: ', bold: true },
              { text: 'Discutir, hablar sobre', italic: true },
              { text: ' → ', bold: true },
              { text: 'We need to talk over this problem.', code: true }
            ],
            [
              { text: 'Point out: ', bold: true },
              { text: 'Señalar, indicar', italic: true },
              { text: ' → ', bold: true },
              { text: 'She pointed out my mistake.', code: true }
            ],
            [
              { text: 'Find out: ', bold: true },
              { text: 'Descubrir, enterarse', italic: true },
              { text: ' → ', bold: true },
              { text: 'I found out the truth yesterday.', code: true }
            ],
            [
              { text: 'Bring up: ', bold: true },
              { text: 'Mencionar, sacar un tema', italic: true },
              { text: ' → ', bold: true },
              { text: 'Don\'t bring up that topic again.', code: true }
            ],
            [
              { text: 'Call off: ', bold: true },
              { text: 'Cancelar', italic: true },
              { text: ' → ', bold: true },
              { text: 'They called off the meeting.', code: true }
            ],
            [
              { text: 'Fill in: ', bold: true },
              { text: 'Completar (formulario)', italic: true },
              { text: ' → ', bold: true },
              { text: 'Please fill in this form.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Relaciones y Sociales',
          emoji: '👥',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Get along (with): ', bold: true },
              { text: 'Llevarse bien (con)', italic: true },
              { text: ' → ', bold: true },
              { text: 'I get along well with my colleagues.', code: true }
            ],
            [
              { text: 'Break up (with): ', bold: true },
              { text: 'Terminar una relación', italic: true },
              { text: ' → ', bold: true },
              { text: 'They broke up last month.', code: true }
            ],
            [
              { text: 'Make up (with): ', bold: true },
              { text: 'Reconciliarse (con)', italic: true },
              { text: ' → ', bold: true },
              { text: 'I made up with my friend after the fight.', code: true }
            ],
            [
              { text: 'Look after: ', bold: true },
              { text: 'Cuidar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Can you look after my dog?', code: true }
            ],
            [
              { text: 'Take care of: ', bold: true },
              { text: 'Cuidar de', italic: true },
              { text: ' → ', bold: true },
              { text: 'I take care of my grandmother.', code: true }
            ],
            [
              { text: 'Put up with: ', bold: true },
              { text: 'Aguantar, tolerar', italic: true },
              { text: ' → ', bold: true },
              { text: 'I can\'t put up with this noise anymore.', code: true }
            ],
            [
              { text: 'Fall out (with): ', bold: true },
              { text: 'Pelearse, distanciarse', italic: true },
              { text: ' → ', bold: true },
              { text: 'They fell out last year.', code: true }
            ],
            [
              { text: 'Get together: ', bold: true },
              { text: 'Reunirse', italic: true },
              { text: ' → ', bold: true },
              { text: 'Let\'s get together this weekend.', code: true }
            ],
            [
              { text: 'Hit it off: ', bold: true },
              { text: 'Llevarse bien desde el principio', italic: true },
              { text: ' → ', bold: true },
              { text: 'They hit it off immediately.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Trabajo y Estudios',
          emoji: '💼',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Work out: ', bold: true },
              { text: 'Resolver, funcionar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Let\'s work out this problem together.', code: true }
            ],
            [
              { text: 'Give up: ', bold: true },
              { text: 'Rendirse, abandonar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Don\'t give up! Keep trying.', code: true }
            ],
            [
              { text: 'Keep on: ', bold: true },
              { text: 'Continuar, seguir', italic: true },
              { text: ' → ', bold: true },
              { text: 'Keep on studying!', code: true }
            ],
            [
              { text: 'Carry on: ', bold: true },
              { text: 'Continuar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Carry on with your work.', code: true }
            ],
            [
              { text: 'Hand in: ', bold: true },
              { text: 'Entregar (trabajo)', italic: true },
              { text: ' → ', bold: true },
              { text: 'I need to hand in my homework tomorrow.', code: true }
            ],
            [
              { text: 'Look up: ', bold: true },
              { text: 'Buscar (información)', italic: true },
              { text: ' → ', bold: true },
              { text: 'Look up this word in the dictionary.', code: true }
            ],
            [
              { text: 'Figure out: ', bold: true },
              { text: 'Descifrar, resolver', italic: true },
              { text: ' → ', bold: true },
              { text: 'I can\'t figure out this math problem.', code: true }
            ],
            [
              { text: 'Carry out: ', bold: true },
              { text: 'Realizar, llevar a cabo', italic: true },
              { text: ' → ', bold: true },
              { text: 'They carried out the plan successfully.', code: true }
            ],
            [
              { text: 'Back up: ', bold: true },
              { text: 'Respaldar, hacer copia', italic: true },
              { text: ' → ', bold: true },
              { text: 'Make sure to back up your files.', code: true }
            ],
            [
              { text: 'Follow up: ', bold: true },
              { text: 'Dar seguimiento', italic: true },
              { text: ' → ', bold: true },
              { text: 'She will follow up next week.', code: true }
            ],
            [
              { text: 'Go over: ', bold: true },
              { text: 'Revisar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Let\'s go over the answers.', code: true }
            ],
            [
              { text: 'Brush up (on): ', bold: true },
              { text: 'Repasar, refrescar conocimientos', italic: true },
              { text: ' → ', bold: true },
              { text: 'I need to brush up on my English.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Emociones y Estados',
          emoji: '😊',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Cheer up: ', bold: true },
              { text: 'Animar, alegrar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Cheer up! Everything will be fine.', code: true }
            ],
            [
              { text: 'Calm down: ', bold: true },
              { text: 'Calmarse', italic: true },
              { text: ' → ', bold: true },
              { text: 'Calm down and think clearly.', code: true }
            ],
            [
              { text: 'Wake up: ', bold: true },
              { text: 'Despertarse', italic: true },
              { text: ' → ', bold: true },
              { text: 'I wake up at 7 AM every day.', code: true }
            ],
            [
              { text: 'Grow up: ', bold: true },
              { text: 'Crecer, madurar', italic: true },
              { text: ' → ', bold: true },
              { text: 'When I grow up, I want to be a doctor.', code: true }
            ],
            [
              { text: 'End up: ', bold: true },
              { text: 'Terminar, acabar', italic: true },
              { text: ' → ', bold: true },
              { text: 'We ended up going to the cinema.', code: true }
            ],
            [
              { text: 'Turn out: ', bold: true },
              { text: 'Resultar, salir', italic: true },
              { text: ' → ', bold: true },
              { text: 'It turned out to be a great party.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Objetos y Acciones Físicas',
          emoji: '📦',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Put on: ', bold: true },
              { text: 'Ponerse (ropa)', italic: true },
              { text: ' → ', bold: true },
              { text: 'Put on your coat, it\'s cold.', code: true }
            ],
            [
              { text: 'Take off: ', bold: true },
              { text: 'Quitarse (ropa), despegar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Take off your shoes. / The plane took off.', code: true }
            ],
            [
              { text: 'Pick up: ', bold: true },
              { text: 'Recoger, levantar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Pick up that book from the floor.', code: true }
            ],
            [
              { text: 'Put away: ', bold: true },
              { text: 'Guardar, ordenar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Put away your toys.', code: true }
            ],
            [
              { text: 'Turn on: ', bold: true },
              { text: 'Encender', italic: true },
              { text: ' → ', bold: true },
              { text: 'Turn on the light, please.', code: true }
            ],
            [
              { text: 'Turn off: ', bold: true },
              { text: 'Apagar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Turn off the TV.', code: true }
            ],
            [
              { text: 'Throw away: ', bold: true },
              { text: 'Tirar, desechar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Throw away this old newspaper.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Dinero y Finanzas',
          emoji: '💰',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Pay off: ', bold: true },
              { text: 'Saldar, pagar completamente', italic: true },
              { text: ' → ', bold: true },
              { text: 'She finally paid off her debt.', code: true }
            ],
            [
              { text: 'Save up: ', bold: true },
              { text: 'Ahorrar', italic: true },
              { text: ' → ', bold: true },
              { text: 'I\'m saving up for a new laptop.', code: true }
            ],
            [
              { text: 'Run up: ', bold: true },
              { text: 'Acumular deuda o gastos', italic: true },
              { text: ' → ', bold: true },
              { text: 'He ran up a huge bill.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Problemas y Dificultades',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Break in: ', bold: true },
              { text: 'Entrar por la fuerza', italic: true },
              { text: ' → ', bold: true },
              { text: 'Someone broke in last night.', code: true }
            ],
            [
              { text: 'Cut off: ', bold: true },
              { text: 'Interrumpir, cortar (servicios)', italic: true },
              { text: ' → ', bold: true },
              { text: 'The electricity was cut off.', code: true }
            ],
            [
              { text: 'Fall apart: ', bold: true },
              { text: 'Desmoronarse, romperse en pedazos', italic: true },
              { text: ' → ', bold: true },
              { text: 'The old book fell apart.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tecnología',
          emoji: '💻',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Log in / Log out: ', bold: true },
              { text: 'Iniciar / Cerrar sesión', italic: true },
              { text: ' → ', bold: true },
              { text: 'Please log in to your account. / Don\'t forget to log out.', code: true }
            ],
            [
              { text: 'Shut down: ', bold: true },
              { text: 'Apagar (computadora, sistema)', italic: true },
              { text: ' → ', bold: true },
              { text: 'Shut down the system.', code: true }
            ],
            [
              { text: 'Boot up: ', bold: true },
              { text: 'Iniciar un sistema', italic: true },
              { text: ' → ', bold: true },
              { text: 'The computer is booting up.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Crecimiento y Mejora',
          emoji: '📈',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Build up: ', bold: true },
              { text: 'Desarrollar gradualmente', italic: true },
              { text: ' → ', bold: true },
              { text: 'We need to build up customer trust.', code: true }
            ],
            [
              { text: 'Step up: ', bold: true },
              { text: 'Tomar responsabilidad, intensificar', italic: true },
              { text: ' → ', bold: true },
              { text: 'Someone needs to step up.', code: true }
            ],
            [
              { text: 'Level up: ', bold: true },
              { text: 'Mejorar, subir de nivel', italic: true },
              { text: ' → ', bold: true },
              { text: 'Time to level up your skills.', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Phrasal Verbs con Múltiples Significados',
          emoji: '🔄',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Bring in: ', bold: true },
              { text: 'Introducir (una ley), contratar, generar dinero', italic: true },
              { text: ' → ', bold: true },
              { text: 'The new policy brought in many benefits.', code: true },
              { text: ' / ', bold: true },
              { text: 'They brought in a new manager.', code: true }
            ],
            [
              { text: 'Cut out: ', bold: true },
              { text: 'Recortar, eliminar, dejar de hacer', italic: true },
              { text: ' → ', bold: true },
              { text: 'Cut out sugar.', code: true },
              { text: ' / ', bold: true },
              { text: 'Cut out the picture from the magazine.', code: true }
            ],
            [
              { text: 'Take in: ', bold: true },
              { text: 'Asimilar información, engañar, hospedar', italic: true },
              { text: ' → ', bold: true },
              { text: 'I couldn\'t take in all the information.', code: true },
              { text: ' / ', bold: true },
              { text: 'They took in a stray cat.', code: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Consejos para Aprender Phrasal Verbs",
      explanation: "Aprender phrasal verbs puede parecer abrumador al principio, pero con las estrategias correctas puedes dominarlos. Aquí tienes algunos consejos prácticos que te ayudarán.",
      examples: [
        {
          type: 'title',
          text: '1. Aprende en Contexto',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'No memorices listas sin contexto' }
            ],
            [
              { text: 'Aprende phrasal verbs leyendo textos y escuchando conversaciones' }
            ],
            [
              { text: 'Presta atención a cómo se usan en situaciones reales' }
            ],
            [
              { text: 'Ejemplo: En lugar de solo memorizar "give up", lee: ', bold: true },
              { text: 'I will never give up learning English.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '2. Agrupa por Significado',
          emoji: '🗂️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Agrupa phrasal verbs relacionados (como hicimos arriba)' }
            ],
            [
              { text: 'Crea asociaciones mentales: todos los de "movimiento", "comunicación", etc.' }
            ],
            [
              { text: 'Esto facilita el recuerdo y el uso' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '3. Practica con Ejemplos Propios',
          emoji: '✍️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Escribe oraciones usando phrasal verbs en situaciones de tu vida' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'I need to look after my plants while I\'m on vacation.', italic: true }
            ],
            [
              { text: 'Esto ayuda a fijar el significado en tu memoria' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '4. Presta Atención a la Separabilidad',
          emoji: '⚠️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Recuerda: si es separable y usas un pronombre, DEBE ir en el medio' }
            ],
            [
              { text: 'Correcto: ', bold: true },
              { text: 'Turn it on', code: true }
            ],
            [
              { text: 'Incorrecto: ', bold: true },
              { text: 'Turn on it', code: true }
            ],
            [
              { text: 'Si es inseparable, el objeto siempre va después' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '5. Usa Diccionarios de Phrasal Verbs',
          emoji: '📖',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Consulta diccionarios especializados cuando tengas dudas' }
            ],
            [
              { text: 'Verifica si es separable o inseparable' }
            ],
            [
              { text: 'Lee los ejemplos de uso' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '6. No Traduzcas Literalmente',
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Los phrasal verbs tienen significados únicos' }
            ],
            [
              { text: 'Ejemplo: ', bold: true },
              { text: 'look after', code: true },
              { text: ' NO significa "mirar después", significa "cuidar"' }
            ],
            [
              { text: 'Trata de aprender el significado completo como una unidad' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Errores Comunes y Cómo Evitarlos",
      explanation: "Conocer los errores más comunes te ayudará a evitarlos y a usar los phrasal verbs correctamente desde el principio.",
      examples: [
        {
          type: 'title',
          text: 'Error 1: Separar Phrasal Verbs Inseparables',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Incorrecto: ', bold: true },
              { text: 'I look my sister after.', italic: true }
            ],
            [
              { text: 'Correcto: ', bold: true },
              { text: 'I look after my sister.', italic: true }
            ],
            [
              { text: 'Recuerda: ', bold: true },
              { text: 'look after', code: true },
              { text: ', ', bold: true },
              { text: 'look for', code: true },
              { text: ', ', bold: true },
              { text: 'depend on', code: true },
              { text: ' son inseparables' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Error 2: No Separar con Pronombres',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Incorrecto: ', bold: true },
              { text: 'Turn on it.', italic: true }
            ],
            [
              { text: 'Correcto: ', bold: true },
              { text: 'Turn it on.', italic: true }
            ],
            [
              { text: 'Regla: Con pronombres, los phrasal verbs separables DEBEN separarse' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Error 3: Usar Phrasal Verbs Intransitivos con Objeto',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Incorrecto: ', bold: true },
              { text: 'The plane took off the runway.', italic: true }
            ],
            [
              { text: 'Correcto: ', bold: true },
              { text: 'The plane took off.', italic: true },
              { text: ' (', bold: true },
              { text: 'take off', code: true },
              { text: ' es intransitivo)' }
            ],
            [
              { text: 'Otros intransitivos: ', bold: true },
              { text: 'wake up', code: true },
              { text: ', ', bold: true },
              { text: 'show up', code: true },
              { text: ', ', bold: true },
              { text: 'break down', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Error 4: Traducir Literalmente',
          emoji: '❌',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Incorrecto (traducción literal): ', bold: true },
              { text: 'I need to look after my keys.', italic: true },
              { text: ' (pensando que significa "mirar después")' }
            ],
            [
              { text: 'Correcto: ', bold: true },
              { text: 'I need to look for my keys.', italic: true },
              { text: ' (buscar) O ', bold: true },
              { text: 'I need to look after my children.', italic: true },
              { text: ' (cuidar)' }
            ],
            [
              { text: 'Solución: Aprende el significado completo, no traduzcas palabra por palabra' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "Which sentence is correct?",
      options: [
        "Turn on it, please.",
        "Turn it on, please.",
        "Turn on the light it.",
        "It turn on."
      ],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'Turn it on, please.' porque 'turn on' es un phrasal verb separable. Cuando usamos un pronombre (it), DEBE ir entre el verbo y la partícula."
    },
    {
      question: "What does 'look after' mean?",
      options: [
        "Mirar después",
        "Buscar",
        "Cuidar",
        "Mirar hacia atrás"
      ],
      correctAnswer: 2,
      explanation: "'Look after' significa 'cuidar'. Ejemplo: 'I look after my sister' = 'Cuido a mi hermana'. No tiene una traducción literal al español."
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "I look my keys for.",
        "I look for my keys.",
        "I look my keys.",
        "I for look my keys."
      ],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'I look for my keys.' porque 'look for' es un phrasal verb inseparable. El objeto siempre va después de la partícula 'for'."
    },
    {
      question: "What does 'give up' mean?",
      options: [
        "Dar arriba",
        "Rendirse, abandonar",
        "Dar algo",
        "Subir"
      ],
      correctAnswer: 1,
      explanation: "'Give up' significa 'rendirse' o 'abandonar'. Ejemplo: 'Don't give up!' = '¡No te rindas!'"
    },
    {
      question: "Which phrasal verb means 'to discover'?",
      options: [
        "look up",
        "find out",
        "look after",
        "give up"
      ],
      correctAnswer: 1,
      explanation: "'Find out' significa 'descubrir' o 'enterarse'. Ejemplo: 'I found out the truth' = 'Descubrí la verdad'. 'Look up' significa 'buscar información'."
    },
    {
      question: "Complete: 'I need to _____ my sister while my parents are away.'",
      options: [
        "look for",
        "look after",
        "look up",
        "look at"
      ],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'look after' que significa 'cuidar'. La oración completa sería: 'I need to look after my sister while my parents are away' = 'Necesito cuidar a mi hermana mientras mis padres están fuera'."
    },
    {
      question: "Which sentence is correct?",
      options: [
        "The plane took off the runway.",
        "The plane took off.",
        "The plane took the runway off.",
        "The plane took off it."
      ],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'The plane took off.' porque 'take off' (despegar) es un phrasal verb intransitivo y no necesita objeto directo."
    },
    {
      question: "What does 'get along with' mean?",
      options: [
        "Ir con alguien",
        "Llevarse bien con alguien",
        "Encontrarse con alguien",
        "Salir con alguien"
      ],
      correctAnswer: 1,
      explanation: "'Get along with' significa 'llevarse bien con alguien'. Ejemplo: 'I get along well with my colleagues' = 'Me llevo bien con mis colegas'."
    },
    {
      question: "Choose the correct form:",
      options: [
        "I can't put up with this noise anymore.",
        "I can't put this noise up with anymore.",
        "I can't put up this noise with anymore.",
        "I can't put with this noise up anymore."
      ],
      correctAnswer: 0,
      explanation: "La respuesta correcta es 'I can't put up with this noise anymore.' porque 'put up with' es un phrasal verb inseparable de tres palabras. El objeto siempre va después de todas las partículas."
    },
    {
      question: "What does 'work out' mean in this context: 'Let's work out this problem together'?",
      options: [
        "Hacer ejercicio",
        "Resolver",
        "Trabajar fuera",
        "Funcionar"
      ],
      correctAnswer: 1,
      explanation: "En este contexto, 'work out' significa 'resolver'. La oración completa sería: 'Let's work out this problem together' = 'Resolvamos este problema juntos'. 'Work out' también puede significar 'hacer ejercicio' en otros contextos."
    },
    {
      question: "What does 'carry out' mean?",
      options: [
        "Llevar algo",
        "Realizar, llevar a cabo",
        "Continuar",
        "Entregar"
      ],
      correctAnswer: 1,
      explanation: "'Carry out' significa 'realizar' o 'llevar a cabo'. Ejemplo: 'They carried out the plan successfully' = 'Llevaron a cabo el plan exitosamente'."
    },
    {
      question: "Complete: 'I need to _____ my English before the exam.'",
      options: [
        "look up",
        "brush up on",
        "give up",
        "work out"
      ],
      correctAnswer: 1,
      explanation: "La respuesta correcta es 'brush up on' que significa 'repasar' o 'refrescar conocimientos'. La oración completa sería: 'I need to brush up on my English before the exam' = 'Necesito repasar mi inglés antes del examen'."
    },
    {
      question: "What does 'show up' mean?",
      options: [
        "Mostrar algo",
        "Presentarse, aparecer",
        "Subir",
        "Aparecer en televisión"
      ],
      correctAnswer: 1,
      explanation: "'Show up' significa 'presentarse' o 'aparecer'. Ejemplo: 'He never showed up' = 'Nunca apareció'."
    },
    {
      question: "What does 'pay off' mean in: 'She finally paid off her debt'?",
      options: [
        "Pagar algo",
        "Saldar, pagar completamente",
        "Pagar en efectivo",
        "Pagar tarde"
      ],
      correctAnswer: 1,
      explanation: "'Pay off' significa 'saldar' o 'pagar completamente'. La oración significa: 'Finalmente pagó su deuda completamente'."
    },
    {
      question: "What does 'fall apart' mean?",
      options: [
        "Caerse",
        "Desmoronarse, romperse en pedazos",
        "Separarse",
        "Terminar"
      ],
      correctAnswer: 1,
      explanation: "'Fall apart' significa 'desmoronarse' o 'romperse en pedazos'. Ejemplo: 'The old book fell apart' = 'El libro viejo se desarmó'."
    },
    {
      question: "What does 'hit it off' mean?",
      options: [
        "Golpear algo",
        "Llevarse bien desde el principio",
        "Empezar algo",
        "Terminar algo"
      ],
      correctAnswer: 1,
      explanation: "'Hit it off' significa 'llevarse bien desde el principio'. Ejemplo: 'They hit it off immediately' = 'Se llevaron muy bien desde el comienzo'."
    },
    {
      question: "What does 'bring in' mean in: 'The new policy brought in many benefits'?",
      options: [
        "Traer algo",
        "Introducir, generar",
        "Contratar",
        "Llevar adentro"
      ],
      correctAnswer: 1,
      explanation: "En este contexto, 'bring in' significa 'introducir' o 'generar'. La oración significa: 'La nueva política trajo muchos beneficios'. 'Bring in' también puede significar 'contratar' en otros contextos."
    }
  ]
};

