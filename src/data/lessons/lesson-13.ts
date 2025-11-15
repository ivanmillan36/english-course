import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson17: LessonData = {
  id: 13,
  title: "Verbos Modales (Modal Verbs)",
  description: "Los verbos modales (modal verbs) son auxiliares que modifican el significado del verbo principal y expresan habilidad, posibilidad, permiso, consejo u obligación. No cambian según el sujeto (no se les agrega '-s' en tercera persona) y siempre van seguidos de un verbo en forma base (sin 'to' ni terminaciones).",
  welcomeEmoji: "🧭",
  pageTitle: "English Learning - Modal Verbs: Could, Should, Must, Have to, May & Might",
  metaDescription: "Aprende a usar los verbos modales en inglés: could para habilidades pasadas y permisos, should para consejos, must y have to para obligación, y may/might para posibilidad. Domina sus diferencias y usa cada uno correctamente.",
  learningPoints: [
    "Usar 'could' para hablar de habilidades pasadas y pedir permisos formales",
    "Emplear 'should' y 'shouldn't' para dar consejos o expresar recomendaciones",
    "Diferenciar entre 'must' y 'have to' para hablar de obligación",
    "Entender la diferencia entre 'mustn't' (prohibición) y 'don't have to' (no obligación)",
    "Expresar posibilidad con 'may' y 'might'",
    "Construir oraciones afirmativas, negativas e interrogativas correctamente con modales"
  ],
  content: [
    {
      topic: "'Could' — Habilidad pasada o permiso formal",
      explanation: "El verbo **could** tiene dos usos principales: hablar de **habilidades o capacidades en el pasado** y pedir **permiso de manera más educada o formal**. A diferencia de 'can' que habla del presente, 'could' se refiere a lo que sabíamos o podíamos hacer antes.",
      examples: [
        {
          type: 'title',
          text: 'Estructura general',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + could + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I could swim when I was 5.', italic: true },
              { text: ' (Podía nadar cuando tenía 5 años.)' }
            ],
            [
              { text: 'She could speak three languages as a child.', italic: true },
              { text: ' (Ella podía hablar tres idiomas de niña.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I couldn't (could not) swim when I was 3.", italic: true },
              { text: ' (No podía nadar cuando tenía 3 años.)' }
            ],
            [
              { text: "He couldn't drive until he was 18.", italic: true },
              { text: ' (Él no podía conducir hasta que tuvo 18 años.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Could you open the window, please?', italic: true },
              { text: ' (¿Podrías abrir la ventana, por favor?)' }
            ],
            [
              { text: 'Could she play the piano when she was young?', italic: true },
              { text: ' (¿Podía ella tocar el piano cuando era joven?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota importante: ', bold: true },
            { text: "'Could' no cambia con ninguna persona (I, you, he, she, it, we, they) y el verbo siempre va en forma base." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Uso 1: Habilidad pasada',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa cuando una persona ' },
            { text: 'sabía o podía hacer algo en el pasado', bold: true },
            { text: ' (no en el presente).' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I could read when I was four.', italic: true },
              { text: ' (Podía leer cuando tenía cuatro años.)' }
            ],
            [
              { text: 'She could run very fast when she was younger.', italic: true },
              { text: ' (Ella podía correr muy rápido cuando era más joven.)' }
            ],
            [
              { text: 'We could see the mountains from our old house.', italic: true },
              { text: ' (Podíamos ver las montañas desde nuestra antigua casa.)' }
            ],
            [
              { text: "They couldn't understand English before taking classes.", italic: true },
              { text: ' (Ellos no podían entender inglés antes de tomar clases.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: 'Se refiere a una capacidad general en el pasado, no a un momento específico.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Uso 2: Permiso formal o solicitud educada',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa para ' },
            { text: 'pedir algo cortésmente', bold: true },
            { text: ' o solicitar permiso de manera más formal que con \'can\'.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Could I ask a question?', italic: true },
              { text: ' (¿Podría hacer una pregunta?)' }
            ],
            [
              { text: 'Could you help me, please?', italic: true },
              { text: ' (¿Podrías ayudarme, por favor?)' }
            ],
            [
              { text: 'Could we leave early today?', italic: true },
              { text: ' (¿Podríamos salir temprano hoy?)' }
            ],
            [
              { text: 'Could I use your phone?', italic: true },
              { text: ' (¿Podría usar tu teléfono?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: "Diferencia con 'can': ", bold: true },
            { text: "'Could' es más educado y formal que 'can' para pedir cosas." }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Compara:' }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Can you help me?', italic: true },
              { text: ' (Informal, directo)' }
            ],
            [
              { text: 'Could you help me?', italic: true },
              { text: ' (Más educado, formal)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'Should' / 'Shouldn't' — Consejo o recomendación",
      explanation: "Usamos **should** para **dar consejos, recomendaciones u opiniones** sobre lo que es correcto o mejor hacer. Su forma negativa (**shouldn't**) se usa para advertir o desaconsejar algo. Es importante entender que 'should' no indica obligación, sino sugerencia.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + should + base verb",
          inline: true
        } as CodeData,
        {
          type: 'code',
          code: "Subject + shouldn't + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You should see a doctor.', italic: true },
              { text: ' (Deberías ver a un médico.)' }
            ],
            [
              { text: 'He should study more for the exam.', italic: true },
              { text: ' (Él debería estudiar más para el examen.)' }
            ],
            [
              { text: 'We should leave now to avoid traffic.', italic: true },
              { text: ' (Deberíamos salir ahora para evitar el tráfico.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You shouldn't eat so much sugar.", italic: true },
              { text: ' (No deberías comer tanto azúcar.)' }
            ],
            [
              { text: "She shouldn't drive so fast.", italic: true },
              { text: ' (Ella no debería conducir tan rápido.)' }
            ],
            [
              { text: "They shouldn't stay up so late.", italic: true },
              { text: ' (Ellos no deberían quedarse despiertos hasta tan tarde.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Interrogativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Should I call him?', italic: true },
              { text: ' (¿Debería llamarlo?)' }
            ],
            [
              { text: 'Should we bring something to the party?', italic: true },
              { text: ' (¿Deberíamos llevar algo a la fiesta?)' }
            ],
            [
              { text: 'What should I do?', italic: true },
              { text: ' (¿Qué debería hacer?)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota importante: ', bold: true },
            { text: "'Should' expresa consejo o sugerencia, no obligación. La persona puede decidir si sigue el consejo o no." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Dar consejos o recomendaciones:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You should drink more water.', italic: true },
              { text: ' (Deberías beber más agua.)' }
            ],
            [
              { text: 'They should save money for emergencies.', italic: true },
              { text: ' (Deberían ahorrar dinero para emergencias.)' }
            ],
            [
              { text: 'She should talk to her boss about the problem.', italic: true },
              { text: ' (Ella debería hablar con su jefe sobre el problema.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Expresar lo que es correcto o apropiado:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You should be polite to your teachers.', italic: true },
              { text: ' (Deberías ser educado con tus profesores.)' }
            ],
            [
              { text: "We should respect other people's opinions.", italic: true },
              { text: ' (Deberíamos respetar las opiniones de otras personas.)' }
            ],
            [
              { text: 'He should apologize for being late.', italic: true },
              { text: ' (Él debería disculparse por llegar tarde.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "3. Dar advertencias o desaconsejar (con 'shouldn't'):", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You shouldn't smoke. It's bad for your health.", italic: true },
              { text: ' (No deberías fumar. Es malo para tu salud.)' }
            ],
            [
              { text: "We shouldn't go out in this storm.", italic: true },
              { text: ' (No deberíamos salir con esta tormenta.)' }
            ],
            [
              { text: "He shouldn't spend all his money on games.", italic: true },
              { text: ' (Él no debería gastar todo su dinero en juegos.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Diferencia: 'Should' vs 'Must'",
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Modal', 'Significado', 'Fuerza', 'Ejemplo'],
          rows: [
            ['Should', 'Consejo/sugerencia', 'Suave', 'You should rest. (Consejo)'],
            ['Must', 'Obligación fuerte', 'Muy fuerte', 'You must rest. (Obligación)']
          ]
        } as TableData,
        {
          type: 'list',
          items: [
            [
              { text: "'Should' = es una buena idea, recomendado" }
            ],
            [
              { text: "'Must' = es necesario, obligatorio" }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'Must' / 'Have to' — Obligación",
      explanation: "Ambos **must** y **have to** indican **obligación**, pero con una diferencia importante en cuanto a quién impone esa obligación. 'Must' expresa una obligación personal, interna o muy fuerte, mientras que 'have to' indica una obligación externa impuesta por reglas, leyes o circunstancias.",
      examples: [
        {
          type: 'title',
          text: 'Tabla comparativa',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Modal', 'Significado', 'Quién impone la obligación', 'Ejemplo'],
          rows: [
            ['Must', 'Obligación personal, interna, moral o muy fuerte', 'El hablante', 'I must finish this today.'],
            ['Have to', 'Obligación externa (regla, norma, ley, etc.)', 'Una autoridad o situación externa', 'I have to wear a uniform at work.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Estructura con 'Must'",
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + must + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I must finish this today.', italic: true },
              { text: ' (Debo terminar esto hoy.)' }
            ],
            [
              { text: 'We must be careful.', italic: true },
              { text: ' (Debemos tener cuidado.)' }
            ],
            [
              { text: 'She must study harder.', italic: true },
              { text: ' (Ella debe estudiar más.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa (prohibición):', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't smoke here.", italic: true },
              { text: ' (No debes fumar aquí. / Está prohibido fumar aquí.)' }
            ],
            [
              { text: "We mustn't be late.", italic: true },
              { text: ' (No debemos llegar tarde.)' }
            ],
            [
              { text: "He mustn't tell anyone.", italic: true },
              { text: ' (Él no debe decirle a nadie.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Importante: ', bold: true },
            { text: "'Mustn't' significa " },
            { text: 'prohibición', bold: true },
            { text: ", no 'no es necesario'." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Estructura con 'Have to'",
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + have/has to + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Afirmativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I have to wear a uniform at work.', italic: true },
              { text: ' (Tengo que usar uniforme en el trabajo.)' }
            ],
            [
              { text: 'She has to take the test tomorrow.', italic: true },
              { text: ' (Ella tiene que hacer el examen mañana.)' }
            ],
            [
              { text: 'They have to pay taxes.', italic: true },
              { text: ' (Tienen que pagar impuestos.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa (no obligación):', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You don't have to come if you're busy.", italic: true },
              { text: ' (No tienes que venir si estás ocupado.)' }
            ],
            [
              { text: "She doesn't have to work on Sundays.", italic: true },
              { text: ' (Ella no tiene que trabajar los domingos.)' }
            ],
            [
              { text: "We don't have to hurry. We have time.", italic: true },
              { text: ' (No tenemos que apurarnos. Tenemos tiempo.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: "'Have' cambia a 'has' con he/she/it." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencia práctica',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 1: Sentimiento personal vs. regla externa', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'must', bold: true },
              { text: ' call my mom.', italic: true },
              { text: ' (Siento que debo hacerlo, es importante para mí.)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'have to', bold: true },
              { text: ' call my boss.', italic: true },
              { text: ' (Es mi obligación de trabajo.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 2: Decisión propia vs. imposición externa', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'must', bold: true },
              { text: ' lose weight.', italic: true },
              { text: ' (Es mi decisión personal, me lo impongo yo mismo.)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'have to', bold: true },
              { text: ' lose weight.', italic: true },
              { text: ' (El doctor me lo ordenó por razones médicas.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 3: Obligación moral vs. legal', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'We ', italic: true },
              { text: 'must', bold: true },
              { text: ' help people in need.', italic: true },
              { text: ' (Obligación moral, ética.)' }
            ],
            [
              { text: 'We ', italic: true },
              { text: 'have to', bold: true },
              { text: ' pay taxes.', italic: true },
              { text: ' (Obligación legal, impuesta por la ley.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en contexto',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 1:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Why do you have to leave so early?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "I have to catch the 6 a.m. train. It's the only one.", italic: true },
              { text: ' (Obligación externa)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 2:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Do you want to stay longer?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "I can't. I must go home. My mom is waiting for me.", italic: true },
              { text: ' (Sentimiento de obligación personal)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 3:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Why is everyone wearing formal clothes?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "We have to. It's company policy.", italic: true },
              { text: ' (Regla externa)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'Mustn't' vs 'Don't have to' — Prohibición vs No obligación",
      explanation: "Estos dos modales suelen confundirse, pero tienen significados **completamente opuestos**. 'Mustn't' expresa **prohibición absoluta** (no está permitido), mientras que 'don't have to' expresa **ausencia de obligación** (no es necesario, pero puedes hacerlo si quieres).",
      examples: [
        {
          type: 'title',
          text: 'Tabla comparativa',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Estructura', 'Significado', 'Ejemplo'],
          rows: [
            ["Mustn't", 'Prohibido hacer algo', "You mustn't park here. (Está prohibido estacionar aquí.)"],
            ["Don't have to", 'No es necesario hacerlo', "You don't have to come early. (No hace falta que vengas temprano.)"]
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Diferencia clave:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "Mustn't", bold: true },
              { text: ' = No puedes hacerlo. Está prohibido.' }
            ],
            [
              { text: "Don't have to", bold: true },
              { text: ' = No es necesario, pero puedes hacerlo si quieres.' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "'Mustn't' — Prohibición",
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + mustn't (must not) + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Indica que algo ' },
            { text: 'está prohibido', bold: true },
            { text: ' o ' },
            { text: 'no está permitido', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't smoke in the hospital.", italic: true },
              { text: ' (No debes fumar en el hospital. / Está prohibido fumar.)' }
            ],
            [
              { text: "We mustn't tell anyone about this.", italic: true },
              { text: ' (No debemos decirle a nadie sobre esto. / Está prohibido revelarlo.)' }
            ],
            [
              { text: "Students mustn't use their phones during the exam.", italic: true },
              { text: ' (Los estudiantes no deben usar sus teléfonos durante el examen.)' }
            ],
            [
              { text: "You mustn't drive without a license.", italic: true },
              { text: ' (No debes conducir sin licencia. / Es ilegal.)' }
            ],
            [
              { text: "He mustn't be late for the interview.", italic: true },
              { text: ' (Él no debe llegar tarde a la entrevista. / Sería muy malo.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Contextos comunes: ', bold: true },
            { text: 'Reglas, leyes, prohibiciones estrictas, advertencias importantes.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "'Don't have to' — No obligación (libertad)",
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + don't/doesn't have to + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Indica que algo ' },
            { text: 'no es necesario', bold: true },
            { text: ' o ' },
            { text: 'no es obligatorio', bold: true },
            { text: '. La persona tiene la libertad de elegir.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You don't have to come if you don't want to.", italic: true },
              { text: ' (No tienes que venir si no quieres. / Es opcional.)' }
            ],
            [
              { text: "She doesn't have to work on weekends.", italic: true },
              { text: ' (Ella no tiene que trabajar los fines de semana. / No es obligatorio para ella.)' }
            ],
            [
              { text: "We don't have to wear uniforms at this school.", italic: true },
              { text: ' (No tenemos que usar uniformes en esta escuela.)' }
            ],
            [
              { text: "You don't have to answer if you're not comfortable.", italic: true },
              { text: ' (No tienes que responder si no te sientes cómodo.)' }
            ],
            [
              { text: "He doesn't have to go to the meeting.", italic: true },
              { text: ' (Él no tiene que ir a la reunión. / Es opcional.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Contextos comunes: ', bold: true },
            { text: 'Dar libertad de elección, indicar que algo es opcional, decir que no hay obligación.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparaciones directas',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 1: En el cine', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't use your phone.", italic: true },
              { text: ' (Prohibido. Si lo usas, te pueden pedir que salgas.)' }
            ],
            [
              { text: "You don't have to buy popcorn.", italic: true },
              { text: ' (No es necesario. Puedes si quieres, pero no es obligatorio.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 2: En el trabajo', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't arrive late.", italic: true },
              { text: ' (Prohibido. Es una regla estricta.)' }
            ],
            [
              { text: "You don't have to stay after 5 p.m.", italic: true },
              { text: ' (No es necesario. Puedes irte a las 5.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 3: En casa', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't touch the stove. It's hot!", italic: true },
              { text: ' (Prohibido. Es peligroso.)' }
            ],
            [
              { text: "You don't have to clean your room today.", italic: true },
              { text: ' (No es necesario hoy. Puedes hacerlo mañana.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Situación 4: Reglas de tránsito', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "You mustn't park here. It's illegal.", italic: true },
              { text: ' (Prohibido. Te pueden multar.)' }
            ],
            [
              { text: "You don't have to pay for parking on Sundays.", italic: true },
              { text: ' (No es necesario. Los domingos es gratis.)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Resumen visual',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "MUSTN't          →  ❌  NO PUEDES (prohibición)\nDON'T HAVE TO    →  ✅  NO ES NECESARIO (pero puedes si quieres)",
          inline: false
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos finales:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You ', italic: true },
              { text: "mustn't", bold: true },
              { text: ' drink and drive.', italic: true },
              { text: ' (Prohibido absolutamente)' }
            ],
            [
              { text: 'You ', italic: true },
              { text: "don't have to", bold: true },
              { text: ' drink coffee if you prefer tea.', italic: true },
              { text: ' (No es obligatorio, tú decides)' }
            ],
            [
              { text: 'Students ', italic: true },
              { text: "mustn't", bold: true },
              { text: ' cheat on exams.', italic: true },
              { text: ' (Prohibido, es trampa)' }
            ],
            [
              { text: 'Students ', italic: true },
              { text: "don't have to", bold: true },
              { text: ' attend the optional class.', italic: true },
              { text: ' (No es obligatorio, es opcional)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "'May' / 'Might' — Posibilidad",
      explanation: "Usamos **may** y **might** para hablar de **posibilidad**, algo que **podría pasar**, pero no es seguro. Expresan incertidumbre sobre el futuro o presente. Aunque tienen una diferencia sutil en el nivel de certeza, en la práctica se usan de manera muy similar.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "Subject + may/might + base verb",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: "Con 'May':", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It may rain later.', italic: true },
              { text: ' (Puede que llueva más tarde.)' }
            ],
            [
              { text: 'She may come to the party.', italic: true },
              { text: ' (Quizás venga a la fiesta.)' }
            ],
            [
              { text: 'We may go to the beach tomorrow.', italic: true },
              { text: ' (Quizás vayamos a la playa mañana.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "Con 'Might':", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It might rain later.', italic: true },
              { text: ' (Podría llover más tarde.)' }
            ],
            [
              { text: 'She might come to the party.', italic: true },
              { text: ' (Tal vez venga a la fiesta.)' }
            ],
            [
              { text: 'We might go to the beach tomorrow.', italic: true },
              { text: ' (Puede que vayamos a la playa mañana.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Negativa:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It may not rain after all.', italic: true },
              { text: ' (Puede que no llueva después de todo.)' }
            ],
            [
              { text: "She might not come.", italic: true },
              { text: ' (Quizás no venga.)' }
            ],
            [
              { text: "They might not finish on time.", italic: true },
              { text: ' (Puede que no terminen a tiempo.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: "'May' y 'might' no cambian según la persona y el verbo siempre va en forma base." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Usos principales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Expresar posibilidad en el futuro:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I may travel to Europe next year.', italic: true },
              { text: ' (Quizás viaje a Europa el año que viene.)' }
            ],
            [
              { text: 'He might get the job.', italic: true },
              { text: ' (Puede que consiga el trabajo.)' }
            ],
            [
              { text: 'They may not agree with our plan.', italic: true },
              { text: ' (Puede que no estén de acuerdo con nuestro plan.)' }
            ],
            [
              { text: 'We might see you tomorrow.', italic: true },
              { text: ' (Tal vez te veamos mañana.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: 'No estás seguro de que sucederá.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Expresar posibilidad en el presente:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She may be at home now.', italic: true },
              { text: ' (Quizás esté en casa ahora.)' }
            ],
            [
              { text: 'He might know the answer.', italic: true },
              { text: ' (Puede que sepa la respuesta.)' }
            ],
            [
              { text: 'They may not understand English.', italic: true },
              { text: ' (Puede que no entiendan inglés.)' }
            ],
            [
              { text: 'This might be the wrong address.', italic: true },
              { text: ' (Esta podría ser la dirección equivocada.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: "3. Pedir permiso de manera formal (solo 'may'):", bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'May I ask a question?', italic: true },
              { text: ' (¿Puedo hacer una pregunta?) [Muy formal]' }
            ],
            [
              { text: 'May I use the restroom?', italic: true },
              { text: ' (¿Puedo usar el baño?) [Formal]' }
            ],
            [
              { text: 'May we come in?', italic: true },
              { text: ' (¿Podemos entrar?) [Formal]' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: "Para pedir permiso, 'may' es más formal que 'can' o 'could'. 'Might' no se usa para pedir permiso." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Diferencia sutil entre 'May' y 'Might'",
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Aunque en la práctica se usan de manera intercambiable, hay una pequeña diferencia de probabilidad:' }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Modal', 'Probabilidad aproximada', 'Ejemplo'],
          rows: [
            ['May', '~50-60% probable', 'It may rain. (Es bastante posible)'],
            ['Might', '~40-50% probable', 'It might rain. (Es menos probable)']
          ]
        } as TableData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos comparativos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She ', italic: true },
              { text: 'may', bold: true },
              { text: ' pass the exam.', italic: true },
              { text: ' (Tiene buena probabilidad de aprobar.)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'might', bold: true },
              { text: ' pass the exam.', italic: true },
              { text: ' (Tiene menos probabilidad, pero es posible.)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'may', bold: true },
              { text: ' go to the party.', italic: true },
              { text: ' (Posibilidad más alta.)' }
            ],
            [
              { text: 'I ', italic: true },
              { text: 'might', bold: true },
              { text: ' go to the party.', italic: true },
              { text: ' (Posibilidad más baja.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'En la práctica: ', bold: true },
            { text: 'Muchos hablantes nativos usan ambos de manera intercambiable sin pensar en la diferencia.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: "Diferencia: 'May/Might' vs 'Will' vs 'Could'",
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Modal', 'Certeza', 'Ejemplo', 'Traducción'],
          rows: [
            ['Will', '90-100% seguro', 'It will rain tomorrow.', 'Lloverá mañana. (Casi seguro)'],
            ['May', '50-60% posible', 'It may rain tomorrow.', 'Puede que llueva. (Posible)'],
            ['Might', '40-50% posible', 'It might rain tomorrow.', 'Podría llover. (Menos probable)'],
            ['Could', 'Variable', 'It could rain tomorrow.', 'Podría llover. (Es posible)']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en conversación',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 1:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Are you coming to the party tonight?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "I might. I'm not sure yet.", italic: true },
              { text: ' (Tal vez. No estoy seguro todavía.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 2:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Will Sarah be there?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: "She may come, but she hasn't confirmed.", italic: true },
              { text: ' (Puede que venga, pero no ha confirmado.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 3:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'Do you think it will rain?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'It might. Look at those clouds.', italic: true },
              { text: ' (Podría. Mira esas nubes.)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Conversación 4:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: 'May I borrow your pen?', italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'Of course!', italic: true },
              { text: ' (¡Por supuesto!)' }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "I ___ swim when I was five.",
      options: ["could", "can", "should", "must"],
      correctAnswer: 0,
      explanation: "Correcto: 'Could' se usa para expresar habilidades pasadas. 'I could swim when I was five' significa que tenías la habilidad de nadar en el pasado."
    },
    {
      question: "You ___ see a doctor. That cough sounds bad.",
      options: ["should", "mustn't", "may", "could"],
      correctAnswer: 0,
      explanation: "Correcto: 'Should' se usa para dar consejos o recomendaciones. Estás sugiriendo que es una buena idea ver a un doctor."
    },
    {
      question: "You ___ park here. It's forbidden.",
      options: ["mustn't", "don't have to", "shouldn't", "may not"],
      correctAnswer: 0,
      explanation: "Correcto: 'Mustn't' expresa prohibición absoluta. Cuando algo está prohibido o no está permitido, usamos 'mustn't'."
    },
    {
      question: "We ___ wear a uniform at work. It's company policy.",
      options: ["have to", "should", "mustn't", "may"],
      correctAnswer: 0,
      explanation: "Correcto: 'Have to' se usa para expresar obligaciones externas impuestas por reglas, normas o políticas. La política de la empresa es la obligación externa."
    },
    {
      question: "You ___ come if you don't want to.",
      options: ["don't have to", "mustn't", "should", "may not"],
      correctAnswer: 0,
      explanation: "Correcto: 'Don't have to' expresa que no hay obligación. Significa que es opcional; la persona puede venir o no, es su elección."
    },
    {
      question: "It ___ rain later, so take an umbrella.",
      options: ["may", "should", "must", "could"],
      correctAnswer: 0,
      explanation: "Correcto: 'May' se usa para expresar posibilidad. Hay una probabilidad de que llueva, pero no es seguro, por eso se recomienda llevar paraguas."
    },
    {
      question: "I ___ finish this report before tomorrow.",
      options: ["must", "may", "could", "shouldn't"],
      correctAnswer: 0,
      explanation: "Correcto: 'Must' expresa una obligación personal fuerte o un sentimiento interno de necesidad. El hablante siente que es muy importante terminar el reporte."
    },
    {
      question: "___ I ask you a question?",
      options: ["Could", "Should", "May", "Must"],
      correctAnswer: 0,
      explanation: "Correcto: 'Could' se usa para pedir permiso de manera educada y formal. Es una forma cortés de hacer solicitudes. 'May' también sería correcto pero es aún más formal."
    },
    {
      question: "He ___ come to the meeting, but he's not sure yet.",
      options: ["might", "must", "have to", "should"],
      correctAnswer: 0,
      explanation: "Correcto: 'Might' expresa posibilidad o incertidumbre. La frase 'he's not sure yet' confirma que no hay certeza, solo una posibilidad."
    },
    {
      question: "You ___ eat so much junk food. It's bad for your health.",
      options: ["shouldn't", "mustn't", "may not", "don't have to"],
      correctAnswer: 0,
      explanation: "Correcto: 'Shouldn't' se usa para dar consejos negativos o desaconsejar algo. Estás recomendando que no coma tanta comida chatarra por razones de salud."
    }
  ]
};

