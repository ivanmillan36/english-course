import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson15: LessonData = {
  id: 15,
  title: "Preposiciones y Conjunciones (Prepositions and Conjunctions)",
  description: "En esta lección aprenderás a usar correctamente las preposiciones y conjunciones en inglés, dos elementos esenciales para construir oraciones coherentes y naturales. Las preposiciones te ayudan a indicar relaciones de lugar y tiempo, mientras que las conjunciones te permiten conectar ideas para formar textos más fluidos y complejos.",
  welcomeEmoji: "🧭",
  pageTitle: "English Learning - Prepositions and Conjunctions: In, On, At, And, But, Because, So",
  metaDescription: "Aprende a usar las preposiciones in, on y at para expresar lugar y tiempo, y las conjunciones and, but, because, so, although para conectar ideas. Domina estas herramientas esenciales para hablar y escribir con fluidez en inglés.",
  learningPoints: [
    "Usar 'in, on y at' para hablar de lugar y tiempo sin confundirlos",
    "Identificar los casos típicos donde estas preposiciones cambian de significado según el contexto",
    "Emplear las conjunciones más comunes para unir ideas de adición, contraste, causa y resultado",
    "Construir oraciones más largas, naturales y bien conectadas",
    "Diferenciar entre preposiciones de lugar y tiempo con los mismos términos",
    "Conectar ideas complejas usando múltiples conjunciones apropiadamente"
  ],
  content: [
    {
      topic: "Prepositions of Place — Preposiciones de lugar",
      explanation: "Las preposiciones de lugar sirven para indicar **dónde** está algo o alguien. En inglés, las tres más comunes son **in**, **on** y **at**, y cada una tiene su propio uso específico.",
      examples: [
        {
          type: 'title',
          text: 'Reglas generales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Preposición', 'Uso principal', 'Ejemplos', 'Traducción'],
          rows: [
            ['in', 'Espacios cerrados o áreas grandes', 'in a room, in a country, in a city', 'en una habitación, en un país, en una ciudad'],
            ['on', 'Superficies o nombres de calles', 'on the table, on the wall, on Main Street', 'sobre la mesa, en la pared, en la calle Principal'],
            ['at', 'Puntos específicos o direcciones exactas', 'at the door, at the bus stop, at 25 King St.', 'en la puerta, en la parada, en la dirección exacta']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Explicación detallada',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'IN', bold: true },
            { text: ' se usa cuando algo ' },
            { text: 'está dentro de un espacio', bold: true },
            { text: ', ya sea físico o geográfico.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I live ', italic: true },
              { text: 'in', bold: true },
              { text: ' Argentina.', italic: true },
              { text: ' → Vivo en Argentina.' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'in', bold: true },
              { text: ' the kitchen.', italic: true },
              { text: ' → Ella está en la cocina.' }
            ],
            [
              { text: 'The book is ', italic: true },
              { text: 'in', bold: true },
              { text: ' the drawer.', italic: true },
              { text: ' → El libro está en el cajón.' }
            ],
            [
              { text: 'We live ', italic: true },
              { text: 'in', bold: true },
              { text: ' a small town.', italic: true },
              { text: ' → Vivimos en un pueblo pequeño.' }
            ],
            [
              { text: 'He works ', italic: true },
              { text: 'in', bold: true },
              { text: ' an office.', italic: true },
              { text: ' → Él trabaja en una oficina.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'in' cuando algo está " },
            { text: 'dentro de un espacio cerrado', bold: true },
            { text: ' o ' },
            { text: 'en un área geográfica grande', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'ON', bold: true },
            { text: ' se usa cuando algo ' },
            { text: 'está sobre una superficie', bold: true },
            { text: ' o cuando hablamos de ' },
            { text: 'calles', bold: true },
            { text: ' (sin número).' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The keys are ', italic: true },
              { text: 'on', bold: true },
              { text: ' the table.', italic: true },
              { text: ' → Las llaves están sobre la mesa.' }
            ],
            [
              { text: 'He lives ', italic: true },
              { text: 'on', bold: true },
              { text: ' Baker Street.', italic: true },
              { text: ' → Vive en la calle Baker.' }
            ],
            [
              { text: 'The picture is ', italic: true },
              { text: 'on', bold: true },
              { text: ' the wall.', italic: true },
              { text: ' → El cuadro está en la pared.' }
            ],
            [
              { text: "There's a fly ", italic: true },
              { text: 'on', bold: true },
              { text: ' the ceiling.', italic: true },
              { text: ' → Hay una mosca en el techo.' }
            ],
            [
              { text: 'She works ', italic: true },
              { text: 'on', bold: true },
              { text: ' Fifth Avenue.', italic: true },
              { text: ' → Ella trabaja en la Quinta Avenida.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'on' cuando algo está " },
            { text: 'sobre una superficie', bold: true },
            { text: ' o para ' },
            { text: 'nombres de calles', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'AT', bold: true },
            { text: ' se usa para ' },
            { text: 'puntos exactos', bold: true },
            { text: ' o ' },
            { text: 'ubicaciones específicas', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I am ', italic: true },
              { text: 'at', bold: true },
              { text: ' the bus stop.', italic: true },
              { text: ' → Estoy en la parada de autobús.' }
            ],
            [
              { text: 'Meet me ', italic: true },
              { text: 'at', bold: true },
              { text: ' the restaurant.', italic: true },
              { text: ' → Encuéntrame en el restaurante.' }
            ],
            [
              { text: "She's waiting ", italic: true },
              { text: 'at', bold: true },
              { text: ' the door.', italic: true },
              { text: ' → Ella está esperando en la puerta.' }
            ],
            [
              { text: 'He lives ', italic: true },
              { text: 'at', bold: true },
              { text: ' 25 King Street.', italic: true },
              { text: ' → Él vive en King Street 25. (dirección exacta)' }
            ],
            [
              { text: "I'll see you ", italic: true },
              { text: 'at', bold: true },
              { text: ' the airport.', italic: true },
              { text: ' → Te veré en el aeropuerto.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'at' para " },
            { text: 'puntos específicos', bold: true },
            { text: ' o ' },
            { text: 'lugares exactos', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tip de memorización',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'In', bold: true },
              { text: ' = dentro' }
            ],
            [
              { text: 'On', bold: true },
              { text: ' = encima o sobre' }
            ],
            [
              { text: 'At', bold: true },
              { text: ' = punto exacto' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos comparativos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I live ', italic: true },
              { text: 'in', bold: true },
              { text: ' Mexico.', italic: true },
              { text: ' (País — área grande)' }
            ],
            [
              { text: 'I live ', italic: true },
              { text: 'on', bold: true },
              { text: ' Juarez Street.', italic: true },
              { text: ' (Calle — sin número)' }
            ],
            [
              { text: 'I live ', italic: true },
              { text: 'at', bold: true },
              { text: ' 123 Juarez Street.', italic: true },
              { text: ' (Dirección exacta — con número)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Prepositions of Time — Preposiciones de tiempo",
      explanation: "Estas preposiciones te permiten decir **cuándo** ocurre algo. También son **in**, **on** y **at**, pero con usos diferentes a los de lugar.",
      examples: [
        {
          type: 'title',
          text: 'Reglas generales',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Preposición', 'Uso principal', 'Ejemplos', 'Traducción'],
          rows: [
            ['in', 'Meses, años, estaciones, partes del día', 'in June, in 2025, in winter, in the morning', 'en junio, en 2025, en invierno, por la mañana'],
            ['on', 'Días y fechas específicas', 'on Monday, on Christmas Day, on July 4th', 'el lunes, en Navidad, el 4 de julio'],
            ['at', 'Horas, momentos exactos, fiestas sin \'Day\'', 'at 7 o\'clock, at midnight, at Christmas', 'a las 7, a medianoche, en Navidad']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Explicación detallada',
          emoji: '📘',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'IN', bold: true },
            { text: ' se usa para períodos largos o amplios.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I was born ', italic: true },
              { text: 'in', bold: true },
              { text: ' 1990.', italic: true },
              { text: ' → Nací en 1990.' }
            ],
            [
              { text: 'We go to the beach ', italic: true },
              { text: 'in', bold: true },
              { text: ' summer.', italic: true },
              { text: ' → Vamos a la playa en verano.' }
            ],
            [
              { text: 'She exercises ', italic: true },
              { text: 'in', bold: true },
              { text: ' the morning.', italic: true },
              { text: ' → Ella hace ejercicio por la mañana.' }
            ],
            [
              { text: 'The meeting is ', italic: true },
              { text: 'in', bold: true },
              { text: ' July.', italic: true },
              { text: ' → La reunión es en julio.' }
            ],
            [
              { text: 'People rest more ', italic: true },
              { text: 'in', bold: true },
              { text: ' winter.', italic: true },
              { text: ' → La gente descansa más en invierno.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'in' para " },
            { text: 'períodos de tiempo largos', bold: true },
            { text: ': meses, años, estaciones, partes del día.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '⚠️ ', emoji: '⚠️' },
            { text: 'Excepción: ', bold: true },
            { text: "'at night' (por la noche) — aunque 'night' es una parte del día, siempre usamos 'at', no 'in'." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'ON', bold: true },
            { text: ' se usa para días específicos o fechas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The meeting is ', italic: true },
              { text: 'on', bold: true },
              { text: ' Tuesday.', italic: true },
              { text: ' → La reunión es el martes.' }
            ],
            [
              { text: "I'll call you ", italic: true },
              { text: 'on', bold: true },
              { text: ' your birthday.', italic: true },
              { text: ' → Te llamaré en tu cumpleaños.' }
            ],
            [
              { text: "We're traveling ", italic: true },
              { text: 'on', bold: true },
              { text: ' December 25th.', italic: true },
              { text: ' → Viajamos el 25 de diciembre.' }
            ],
            [
              { text: 'She starts work ', italic: true },
              { text: 'on', bold: true },
              { text: ' Monday.', italic: true },
              { text: ' → Ella empieza a trabajar el lunes.' }
            ],
            [
              { text: 'The party is ', italic: true },
              { text: 'on', bold: true },
              { text: ' Christmas Day.', italic: true },
              { text: ' → La fiesta es el día de Navidad.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'on' para " },
            { text: 'días de la semana', bold: true },
            { text: ' y ' },
            { text: 'fechas específicas', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'AT', bold: true },
            { text: ' se usa para horas o momentos precisos.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The train leaves ', italic: true },
              { text: 'at', bold: true },
              { text: ' 8:30.', italic: true },
              { text: ' → El tren sale a las 8:30.' }
            ],
            [
              { text: 'We usually have dinner ', italic: true },
              { text: 'at', bold: true },
              { text: ' night.', italic: true },
              { text: ' → Solemos cenar de noche.' }
            ],
            [
              { text: 'The store opens ', italic: true },
              { text: 'at', bold: true },
              { text: ' 9 o\'clock.', italic: true },
              { text: ' → La tienda abre a las 9.' }
            ],
            [
              { text: 'I wake up ', italic: true },
              { text: 'at', bold: true },
              { text: ' 6 a.m.', italic: true },
              { text: ' → Me despierto a las 6 de la mañana.' }
            ],
            [
              { text: 'We celebrate ', italic: true },
              { text: 'at', bold: true },
              { text: ' Christmas.', italic: true },
              { text: ' → Celebramos en Navidad. (la época, no el día específico)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "Usa 'at' para " },
            { text: 'horas exactas', bold: true },
            { text: ' y ' },
            { text: 'momentos específicos', bold: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tip de memorización',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'In', bold: true },
              { text: ' = períodos grandes (meses, años, estaciones)' }
            ],
            [
              { text: 'On', bold: true },
              { text: ' = días o fechas (lunes, 5 de mayo)' }
            ],
            [
              { text: 'At', bold: true },
              { text: ' = horas exactas (3:00 p.m., medianoche)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparación práctica',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Imagina que planeas un evento:' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The event is ', italic: true },
              { text: 'in', bold: true },
              { text: ' June.', italic: true },
              { text: ' (En el mes de junio — no sabemos qué día)' }
            ],
            [
              { text: 'The event is ', italic: true },
              { text: 'on', bold: true },
              { text: ' June 15th.', italic: true },
              { text: ' (El día 15 de junio — fecha específica)' }
            ],
            [
              { text: 'The event is ', italic: true },
              { text: 'at', bold: true },
              { text: ' 7 p.m.', italic: true },
              { text: ' (A las 7 de la tarde — hora exacta)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Frase completa:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The event is ', italic: true },
              { text: 'on', bold: true },
              { text: ' June 15th ', italic: true },
              { text: 'at', bold: true },
              { text: ' 7 p.m.', italic: true },
              { text: ' (El evento es el 15 de junio a las 7 p.m.)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Conjunctions — Conjunciones para unir ideas",
      explanation: "Las **conjunciones** conectan palabras, frases o cláusulas para expresar relaciones lógicas entre ideas. Son esenciales para construir oraciones más complejas y naturales.",
      examples: [
        {
          type: 'title',
          text: 'Tipos de conjunciones y usos',
          emoji: '🧩',
          level: 3
        } as TitleData,
        {
          type: 'table',
          headers: ['Tipo', 'Conjunciones', 'Uso', 'Ejemplo', 'Traducción'],
          rows: [
            ['Adición', 'and', 'Sumar ideas', 'I like coffee and tea.', 'Me gusta el café y el té.'],
            ['Contraste', 'but / although', 'Oponer ideas', 'I\'m tired but happy. / Although it\'s cold, we went out.', 'Estoy cansado pero feliz. / Aunque hace frío, salimos.'],
            ['Causa', 'because / as / since', 'Explicar razones', 'I stayed home because I was sick.', 'Me quedé en casa porque estaba enfermo.'],
            ['Resultado', 'so', 'Mostrar consecuencia', 'It was raining, so we stayed inside.', 'Llovía, así que nos quedamos adentro.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Explicación detallada',
          emoji: '📘',
          level: 3
        } as TitleData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'AND — Adición (sumar ideas)',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'AND', bold: true },
            { text: ' une dos ideas similares o complementarias.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject + verb + object + and + subject + verb + object',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She speaks English ', italic: true },
              { text: 'and', bold: true },
              { text: ' French.', italic: true },
              { text: ' → Ella habla inglés y francés.' }
            ],
            [
              { text: 'I like pizza ', italic: true },
              { text: 'and', bold: true },
              { text: ' pasta.', italic: true },
              { text: ' → Me gusta la pizza y la pasta.' }
            ],
            [
              { text: 'He is tall ', italic: true },
              { text: 'and', bold: true },
              { text: ' strong.', italic: true },
              { text: ' → Él es alto y fuerte.' }
            ],
            [
              { text: 'We went to the park ', italic: true },
              { text: 'and', bold: true },
              { text: ' played football.', italic: true },
              { text: ' → Fuimos al parque y jugamos al fútbol.' }
            ],
            [
              { text: 'She is smart, funny, ', italic: true },
              { text: 'and', bold: true },
              { text: ' kind.', italic: true },
              { text: ' → Ella es inteligente, graciosa y amable.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "'And' simplemente " },
            { text: 'suma', bold: true },
            { text: ' dos o más elementos o acciones.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'BUT / ALTHOUGH — Contraste (oponer ideas)',
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'BUT', bold: true },
            { text: ' y ' },
            { text: 'ALTHOUGH', bold: true },
            { text: ' expresan contraste u oposición entre dos ideas.' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'BUT:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject + verb, but + subject + verb',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm hungry ", italic: true },
              { text: 'but', bold: true },
              { text: ' I have no food.', italic: true },
              { text: ' → Tengo hambre pero no tengo comida.' }
            ],
            [
              { text: 'The movie was long ', italic: true },
              { text: 'but', bold: true },
              { text: ' interesting.', italic: true },
              { text: ' → La película fue larga pero interesante.' }
            ],
            [
              { text: "She's young ", italic: true },
              { text: 'but', bold: true },
              { text: ' very responsible.', italic: true },
              { text: ' → Ella es joven pero muy responsable.' }
            ],
            [
              { text: 'I want to go ', italic: true },
              { text: 'but', bold: true },
              { text: " I can't.", italic: true },
              { text: ' → Quiero ir pero no puedo.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'ALTHOUGH:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Although + subject + verb, subject + verb',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'Although', bold: true },
              { text: ' it was raining, we played football.', italic: true },
              { text: ' → Aunque llovía, jugamos al fútbol.' }
            ],
            [
              { text: 'Although', bold: true },
              { text: " she's tired, she continues working.", italic: true },
              { text: ' → Aunque está cansada, continúa trabajando.' }
            ],
            [
              { text: 'Although', bold: true },
              { text: " he's rich, he's not happy.", italic: true },
              { text: ' → Aunque es rico, no es feliz.' }
            ],
            [
              { text: 'We went out ', italic: true },
              { text: 'although', bold: true },
              { text: ' it was cold.', italic: true },
              { text: ' → Salimos aunque hacía frío.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Diferencia: ', bold: true },
            { text: "'But' conecta dos ideas opuestas directamente. 'Although' enfatiza que algo sucede " },
            { text: 'a pesar de', bold: true },
            { text: ' otra cosa.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'BECAUSE / AS / SINCE — Causa (explicar razones)',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Estas conjunciones indican ' },
            { text: 'causa o motivo', bold: true },
            { text: ' de algo.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject + verb + because/as/since + subject + verb',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'BECAUSE', bold: true },
            { text: ' (la más común):' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I went to bed early ', italic: true },
              { text: 'because', bold: true },
              { text: ' I was tired.', italic: true },
              { text: ' → Me fui a dormir temprano porque estaba cansado.' }
            ],
            [
              { text: "She's studying hard ", italic: true },
              { text: 'because', bold: true },
              { text: ' she has an exam.', italic: true },
              { text: ' → Está estudiando mucho porque tiene un examen.' }
            ],
            [
              { text: 'We stayed home ', italic: true },
              { text: 'because', bold: true },
              { text: ' it was raining.', italic: true },
              { text: ' → Nos quedamos en casa porque llovía.' }
            ],
            [
              { text: "I can't go ", italic: true },
              { text: 'because', bold: true },
              { text: " I'm busy.", italic: true },
              { text: ' → No puedo ir porque estoy ocupado.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'AS / SINCE', bold: true },
            { text: ' (más formales, menos comunes en conversación):' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I didn't go to work ", italic: true },
              { text: 'as', bold: true },
              { text: ' I was sick.', italic: true },
              { text: ' → No fui a trabajar ya que estaba enfermo.' }
            ],
            [
              { text: 'Since', bold: true },
              { text: " it's late, we should go home.", italic: true },
              { text: ' → Como es tarde, deberíamos irnos a casa.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "'Because' es la más usada en inglés hablado. 'As' y 'since' son más formales." }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'SO — Resultado (mostrar consecuencia)',
          emoji: '➡️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'SO', bold: true },
            { text: ' indica el ' },
            { text: 'resultado o consecuencia', bold: true },
            { text: ' de una acción o situación.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject + verb, so + subject + verb',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [{ text: 'Ejemplos:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He was late, ', italic: true },
              { text: 'so', bold: true },
              { text: ' we started without him.', italic: true },
              { text: ' → Llegó tarde, así que empezamos sin él.' }
            ],
            [
              { text: 'I was hungry, ', italic: true },
              { text: 'so', bold: true },
              { text: ' I ate a sandwich.', italic: true },
              { text: ' → Tenía hambre, así que comí un sándwich.' }
            ],
            [
              { text: 'It was raining, ', italic: true },
              { text: 'so', bold: true },
              { text: ' we stayed inside.', italic: true },
              { text: ' → Llovía, así que nos quedamos adentro.' }
            ],
            [
              { text: 'She studied hard, ', italic: true },
              { text: 'so', bold: true },
              { text: ' she passed the exam.', italic: true },
              { text: ' → Estudió mucho, así que aprobó el examen.' }
            ],
            [
              { text: 'The store was closed, ', italic: true },
              { text: 'so', bold: true },
              { text: ' we went home.', italic: true },
              { text: ' → La tienda estaba cerrada, así que nos fuimos a casa.' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Clave: ', bold: true },
            { text: "'So' muestra el " },
            { text: 'resultado', bold: true },
            { text: ' de la primera parte de la oración.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Diferencia clave: \'Because\' vs \'So\'',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Ambas conectan causa y efecto, pero en ' },
            { text: 'orden diferente', bold: true },
            { text: ':' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Because', bold: true },
              { text: ' = Resultado + because + Causa' }
            ],
            [
              { text: '  I stayed home ', italic: true },
              { text: 'because', bold: true },
              { text: ' I was sick.', italic: true },
              { text: ' (Resultado + razón)' }
            ],
            [
              { text: 'So', bold: true },
              { text: ' = Causa + so + Resultado' }
            ],
            [
              { text: '  I was sick, ', italic: true },
              { text: 'so', bold: true },
              { text: ' I stayed home.', italic: true },
              { text: ' (Razón + resultado)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [{ text: 'Comparación:', bold: true }]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: "I'm tired ", italic: true },
              { text: 'because', bold: true },
              { text: ' I worked all day.', italic: true },
              { text: ' (Efecto + causa)' }
            ],
            [
              { text: 'I worked all day, ', italic: true },
              { text: 'so', bold: true },
              { text: " I'm tired.", italic: true },
              { text: ' (Causa + efecto)' }
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
            { text: 'Conversación completa usando varias conjunciones:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'A: ', bold: true },
              { text: "Why didn't you come to the party?", italic: true }
            ],
            [
              { text: 'B: ', bold: true },
              { text: 'I wanted to go ', italic: true },
              { text: 'but', bold: true },
              { text: ' I was tired. I worked all day, ', italic: true },
              { text: 'so', bold: true },
              { text: ' I decided to stay home. ', italic: true },
              { text: 'Although', bold: true },
              { text: ' I was sad to miss it, I needed to rest.', italic: true }
            ],
            [
              { text: '(Quería ir ', italic: true },
              { text: 'pero', bold: true },
              { text: ' estaba cansado. Trabajé todo el día, ', italic: true },
              { text: 'así que', bold: true },
              { text: ' decidí quedarme en casa. ', italic: true },
              { text: 'Aunque', bold: true },
              { text: ' estaba triste por perdérmelo, necesitaba descansar.)', italic: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "I live ___ Buenos Aires.",
      options: ["on", "at", "in", "by"],
      correctAnswer: 2,
      explanation: "Correcto: 'In' se usa para ciudades o países. Usamos 'in' cuando hablamos de áreas geográficas grandes o espacios cerrados."
    },
    {
      question: "The keys are ___ the table.",
      options: ["in", "on", "at", "over"],
      correctAnswer: 1,
      explanation: "Correcto: 'On' se usa para superficies. Las llaves están sobre la superficie de la mesa, por lo tanto usamos 'on'."
    },
    {
      question: "Let's meet ___ the restaurant at 7.",
      options: ["in", "on", "at", "inside"],
      correctAnswer: 2,
      explanation: "Correcto: 'At' indica punto específico. Cuando hablamos de un lugar específico como punto de encuentro, usamos 'at'."
    },
    {
      question: "My birthday is ___ June.",
      options: ["on", "in", "at", "by"],
      correctAnswer: 1,
      explanation: "Correcto: 'In' se usa con meses. Para meses, años, estaciones y partes del día, siempre usamos 'in'."
    },
    {
      question: "The meeting is ___ Monday morning.",
      options: ["on", "in", "at", "by"],
      correctAnswer: 0,
      explanation: "Correcto: 'On' para días y fechas. Cuando mencionamos un día específico de la semana, usamos 'on'."
    },
    {
      question: "The class starts ___ 8:00 a.m.",
      options: ["in", "at", "on", "from"],
      correctAnswer: 1,
      explanation: "Correcto: 'At' se usa para horas exactas. Siempre usamos 'at' cuando indicamos una hora específica del día."
    },
    {
      question: "I was late ___ I missed the bus.",
      options: ["but", "because", "so", "although"],
      correctAnswer: 1,
      explanation: "Correcto: 'Because' expresa causa. La oración muestra el resultado primero (llegué tarde) y luego la causa (perdí el autobús)."
    },
    {
      question: "It was raining, ___ we stayed at home.",
      options: ["because", "so", "although", "and"],
      correctAnswer: 1,
      explanation: "Correcto: 'So' indica resultado. La lluvia fue la causa, y quedarse en casa fue el resultado o consecuencia."
    },
    {
      question: "She is tired ___ she continues studying.",
      options: ["and", "but", "because", "since"],
      correctAnswer: 1,
      explanation: "Correcto: 'But' indica contraste. Hay una oposición entre estar cansada y seguir estudiando. Estas dos ideas contrastan entre sí."
    },
    {
      question: "___ it was cold, we went for a walk.",
      options: ["Because", "But", "Although", "So"],
      correctAnswer: 2,
      explanation: "Correcto: 'Although' = aunque. Expresa que algo sucedió a pesar de una circunstancia contraria. Fuimos a caminar a pesar del frío."
    }
  ]
};

