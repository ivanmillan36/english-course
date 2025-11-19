import type { LessonData, TableData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

export const lesson19: LessonData = {
  id: 19,
  title: "Reported Speech (Estilo Indirecto)",
  description: "En esta lección aprenderás el Reported Speech o Estilo Indirecto, fundamental para contar lo que otra persona dijo sin repetir sus palabras exactas. Dominarás los cambios de tiempo verbal (backshift), la transformación de pronombres y expresiones de tiempo/lugar, y cómo reportar preguntas, órdenes y solicitudes. Esta habilidad es esencial para redactar narraciones, conversaciones, artículos o reportes en inglés con fluidez y naturalidad.",
  welcomeEmoji: "🗣️",
  pageTitle: "English Learning - Reported Speech",
  metaDescription: "Domina el Reported Speech en inglés. Aprende a transformar el discurso directo al indirecto con cambios de tiempo verbal, pronombres y expresiones temporales.",
  learningPoints: [
    "Qué es el Reported Speech y cómo se forma",
    "Cómo aplicar correctamente los cambios de tiempo verbal (backshift)",
    "Cómo modificar pronombres y expresiones de tiempo y lugar",
    "Cómo reportar preguntas (yes/no y wh-questions)",
    "Cómo reportar órdenes, consejos y solicitudes",
    "Diferencias entre 'said', 'told', 'asked' y 'ordered' en contexto"
  ],
  content: [
    {
      topic: "¿Qué es el Reported Speech?",
      explanation: "El **Reported Speech (estilo indirecto)** se usa para **informar lo que alguien dijo**, **sin citar sus palabras exactas**. En lugar de repetir entre comillas lo dicho, transformamos la oración para integrarla a nuestro discurso. La palabra **that** se puede omitir sin cambiar el significado. En el estilo directo, citamos textualmente; en el indirecto, **transformamos la oración** ajustando tiempos verbales, pronombres y marcadores temporales según el contexto.",
      examples: [
        {
          type: 'title',
          text: 'Comparación básica',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Estilo directo: ', bold: true },
              { text: 'He said, "I\'m tired."', italic: true }
            ],
            [
              { text: 'Estilo indirecto: ', bold: true },
              { text: 'He said (that) he was tired.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Más ejemplos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"I work here," she said.', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She said she worked there.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"We will arrive soon," they said.', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'They said they would arrive soon.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Nota importante',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'He said he was tired.', italic: true },
              { text: ' ✅ (sin \'that\')' }
            ],
            [
              { text: 'He said that he was tired.', italic: true },
              { text: ' ✅ (con \'that\')' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Cambios de tiempo verbal (Backshift)",
      explanation: "El **backshift** es una regla simple pero muy importante: cuando el verbo que introduce el discurso reportado está en **pasado** (como *said*, *told*, *asked*), los tiempos verbales **retroceden un paso hacia el pasado**. Es como si estuviéramos contando algo que ya pasó, por eso los tiempos se ajustan. **Regla clave**: Presente → Pasado, Pasado → Pasado Perfecto, Futuro → Condicional. Si el verbo introductorio está en **presente** (como *says*, *tells*), NO hay backshift y mantenemos el tiempo original.",
      examples: [
        {
          type: 'title',
          text: '¿Cuándo aplicamos el backshift?',
          emoji: '🔑',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '✅ ', emoji: '✅' },
            { text: 'Verbo introductorio en PASADO → ', bold: true },
            { text: 'SÍ aplicamos backshift', bold: true, italic: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He ', italic: true },
              { text: 'said', bold: true },
              { text: ' (pasado) → ', italic: true },
              { text: '"I am tired"', italic: true },
              { text: ' → ', bold: true },
              { text: 'He said he ', italic: true },
              { text: 'was', bold: true },
              { text: ' tired.', italic: true }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'told', bold: true },
              { text: ' (pasado) → ', italic: true },
              { text: '"I will come"', italic: true },
              { text: ' → ', bold: true },
              { text: 'She told me she ', italic: true },
              { text: 'would come', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '❌ ', emoji: '❌' },
            { text: 'Verbo introductorio en PRESENTE → ', bold: true },
            { text: 'NO aplicamos backshift', bold: true, italic: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'He ', italic: true },
              { text: 'says', bold: true },
              { text: ' (presente) → ', italic: true },
              { text: '"I am tired"', italic: true },
              { text: ' → ', bold: true },
              { text: 'He says he ', italic: true },
              { text: 'is', bold: true },
              { text: ' tired.', italic: true },
              { text: ' (sin cambio)', italic: true }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'tells', bold: true },
              { text: ' (presente) → ', italic: true },
              { text: '"I will come"', italic: true },
              { text: ' → ', bold: true },
              { text: 'She tells me she ', italic: true },
              { text: 'will come', bold: true },
              { text: '.', italic: true },
              { text: ' (sin cambio)', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de cambios de tiempo (backshift)',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Estos cambios ocurren cuando el verbo introductorio está en PASADO:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'table',
          headers: ['Estilo directo', 'Reported Speech', 'Cambio aplicado', 'Traducción'],
          rows: [
            ['"I am tired."', 'He said he was tired.', 'Presente → Pasado (am → was)', '"Estoy cansado." → Dijo que estaba cansado.'],
            ['"I work here."', 'He said he worked there.', 'Presente → Pasado (work → worked)', '"Trabajo aquí." → Dijo que trabajaba allí.'],
            ['"I went home."', 'He said he had gone home.', 'Pasado → Pasado Perfecto (went → had gone)', '"Fui a casa." → Dijo que había ido a casa.'],
            ['"I was studying."', 'He said he had been studying.', 'Pasado Continuo → Pasado Perfecto Continuo', '"Estaba estudiando." → Dijo que había estado estudiando.'],
            ['"I have finished."', 'He said he had finished.', 'Presente Perfecto → Pasado Perfecto', '"He terminado." → Dijo que había terminado.'],
            ['"I will go."', 'He said he would go.', 'Futuro → Condicional (will → would)', '"Iré." → Dijo que iría.'],
            ['"I can swim."', 'He said he could swim.', 'Presente → Pasado (can → could)', '"Puedo nadar." → Dijo que podía nadar.'],
            ['"I may leave."', 'He said he might leave.', 'Presente → Pasado (may → might)', '"Puedo irme." → Dijo que podría irse.'],
            ['"I must go."', 'He said he had to go.', 'Presente → Pasado (must → had to)', '"Debo ir." → Dijo que tenía que ir.']
          ]
        } as TableData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos paso a paso',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '1️⃣ Directo: ', bold: true },
              { text: '"She ', italic: true },
              { text: 'is', bold: true },
              { text: ' happy."', italic: true }
            ],
            [
              { text: '   Verbo introductorio: ', italic: true },
              { text: 'He said', bold: true },
              { text: ' (pasado) → aplicamos backshift', italic: true }
            ],
            [
              { text: '   Indirecto: ', bold: true },
              { text: 'He said she ', italic: true },
              { text: 'was', bold: true },
              { text: ' happy.', italic: true },
              { text: ' (is → was)', italic: true }
            ],
            [
              { text: '2️⃣ Directo: ', bold: true },
              { text: '"They ', italic: true },
              { text: 'have arrived', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '   Verbo introductorio: ', italic: true },
              { text: 'He said', bold: true },
              { text: ' (pasado) → aplicamos backshift', italic: true }
            ],
            [
              { text: '   Indirecto: ', bold: true },
              { text: 'He said they ', italic: true },
              { text: 'had arrived', bold: true },
              { text: '.', italic: true },
              { text: ' (have → had)', italic: true }
            ],
            [
              { text: '3️⃣ Directo: ', bold: true },
              { text: '"I ', italic: true },
              { text: 'must leave', bold: true },
              { text: '."', italic: true }
            ],
            [
              { text: '   Verbo introductorio: ', italic: true },
              { text: 'She said', bold: true },
              { text: ' (pasado) → aplicamos backshift', italic: true }
            ],
            [
              { text: '   Indirecto: ', bold: true },
              { text: 'She said she ', italic: true },
              { text: 'had to leave', bold: true },
              { text: '.', italic: true },
              { text: ' (must → had to)', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Resumen rápido',
          emoji: '⚡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '🔹 ', emoji: '🔹' },
              { text: 'Verbo introductorio en PASADO (said, told, asked) = ', bold: true },
              { text: 'SÍ hay backshift', bold: true, italic: true }
            ],
            [
              { text: '🔹 ', emoji: '🔹' },
              { text: 'Verbo introductorio en PRESENTE (says, tells, asks) = ', bold: true },
              { text: 'NO hay backshift', bold: true, italic: true }
            ],
            [
              { text: '🔹 ', emoji: '🔹' },
              { text: 'El backshift hace que los tiempos retrocedan un paso: ', bold: true },
              { text: 'presente → pasado, pasado → pasado perfecto, futuro → condicional', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Cambios de pronombres y marcadores de tiempo/lugar",
      explanation: "Cuando transformamos una oración al estilo indirecto, debemos **ajustar los pronombres personales** y las **expresiones de tiempo o lugar** para que tengan sentido desde la perspectiva del hablante. Los pronombres cambian según quién habla y de quién se habla. Las expresiones temporales y espaciales se ajustan al momento y lugar desde donde se reporta la información.",
      examples: [
        {
          type: 'title',
          text: 'Cambios de pronombres',
          emoji: '👤',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I → ', code: true },
              { text: 'he / she', bold: true }
            ],
            [
              { text: 'my → ', code: true },
              { text: 'his / her', bold: true }
            ],
            [
              { text: 'we → ', code: true },
              { text: 'they', bold: true }
            ],
            [
              { text: 'our → ', code: true },
              { text: 'their', bold: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Cambios de tiempo y lugar',
          emoji: '🕐',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'today → ', code: true },
              { text: 'that day', bold: true }
            ],
            [
              { text: 'tomorrow → ', code: true },
              { text: 'the next day / the following day', bold: true }
            ],
            [
              { text: 'yesterday → ', code: true },
              { text: 'the previous day / the day before', bold: true }
            ],
            [
              { text: 'now → ', code: true },
              { text: 'then', bold: true }
            ],
            [
              { text: 'here → ', code: true },
              { text: 'there', bold: true }
            ],
            [
              { text: 'this → ', code: true },
              { text: 'that', bold: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplo completo',
          emoji: '💬',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"I will call you tomorrow."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She said she would call me ', italic: true },
              { text: 'the next day', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"I live here now."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'He said he lived ', italic: true },
              { text: 'there then', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Reportar preguntas",
      explanation: "Al reportar preguntas, **no usamos signos de interrogación** ni invertimos el orden (sujeto + verbo). Para **preguntas cerradas (yes/no)** usamos *if* o *whether*. Para **preguntas con palabra interrogativa (wh-)** mantenemos la palabra interrogativa (*what, where, who, when, why, how*), pero cambiamos los tiempos y pronombres. El orden se vuelve afirmativo: sujeto + verbo.",
      examples: [
        {
          type: 'title',
          text: 'Preguntas cerradas (yes/no)',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Usamos ', bold: true },
            { text: 'if', code: true },
            { text: ' o ', bold: true },
            { text: 'whether', code: true },
            { text: ' para introducir preguntas cerradas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"Are you happy?"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'He asked me ', italic: true },
              { text: 'if I was happy', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"Do you like coffee?"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She asked me ', italic: true },
              { text: 'if I liked coffee', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Preguntas con wh- (what, where, who, etc.)',
          emoji: '❓',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Mantenemos la palabra interrogativa (', bold: true },
            { text: 'what', code: true },
            { text: ', ', bold: true },
            { text: 'where', code: true },
            { text: ', ', bold: true },
            { text: 'who', code: true },
            { text: ', ', bold: true },
            { text: 'when', code: true },
            { text: ', ', bold: true },
            { text: 'why', code: true },
            { text: ', ', bold: true },
            { text: 'how', code: true },
            { text: ') pero el orden se vuelve afirmativo: sujeto + verbo.', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"Where do you live?"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She asked me ', italic: true },
              { text: 'where I lived', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"What time is it?"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'He asked ', italic: true },
              { text: 'what time it was', bold: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"Why are you late?"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'The teacher asked ', italic: true },
              { text: 'why I was late', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Reportar órdenes, consejos y solicitudes",
      explanation: "Para reportar **órdenes o peticiones**, usamos la estructura: **told / asked + objeto + to + verbo base**. Para reportar **órdenes negativas**, usamos: **told / asked + objeto + not to + verbo base**. Usamos **told** para órdenes directas y **asked** para peticiones corteses. También podemos usar **ordered** para órdenes muy formales o autoritarias.",
      examples: [
        {
          type: 'title',
          text: 'Estructura',
          emoji: '🔧',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: "told / asked + objeto + to + verbo base",
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Para órdenes negativas: ', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: "told / asked + objeto + not to + verbo base",
          inline: true
        } as CodeData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Órdenes afirmativas',
          emoji: '📢',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Usamos ', bold: true },
            { text: 'told', code: true },
            { text: ' para órdenes directas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"Close the door."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'He ', italic: true },
              { text: 'told me to close', bold: true },
              { text: ' the door.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"Study harder."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'The teacher ', italic: true },
              { text: 'told us to study', bold: true },
              { text: ' harder.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Peticiones corteses',
          emoji: '🙏',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '🔑 ', emoji: '🔑' },
            { text: 'Usamos ', bold: true },
            { text: 'asked', code: true },
            { text: ' para peticiones corteses.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"Please help me."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She ', italic: true },
              { text: 'asked me to help', bold: true },
              { text: ' her.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Órdenes negativas',
          emoji: '🚫',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"Don\'t be late."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'He ', italic: true },
              { text: 'told me not to be', bold: true },
              { text: ' late.', italic: true }
            ],
            [
              { text: 'Directo: ', bold: true },
              { text: '"Don\'t touch that!"', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'She ', italic: true },
              { text: 'told me not to touch', bold: true },
              { text: ' that.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Consejos',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Directo: ', bold: true },
              { text: '"You should rest."', italic: true }
            ],
            [
              { text: 'Indirecto: ', bold: true },
              { text: 'The doctor ', italic: true },
              { text: 'advised me to rest', bold: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "\"I am tired,\" he said. → He said he ___ tired.",
      options: ["is", "was", "were", "am"],
      correctAnswer: 1,
      explanation: "\"Am\" cambia a \"was\" en Reported Speech (backshift al pasado)."
    },
    {
      question: "\"I will see you tomorrow,\" she said. → She said she would see me ___.",
      options: ["tomorrow", "the next day", "yesterday", "that day"],
      correctAnswer: 1,
      explanation: "\"Tomorrow\" se convierte en \"the next day\" en Reported Speech."
    },
    {
      question: "\"Do you like pizza?\" he asked. → He asked me if I ___ pizza.",
      options: ["like", "liked", "have liked", "am liking"],
      correctAnswer: 1,
      explanation: "Pregunta cerrada → usamos 'if' + backshift (\"like\" → \"liked\")."
    },
    {
      question: "\"Where are you going?\" she asked. → She asked me where I ___.",
      options: ["am going", "was going", "going", "go"],
      correctAnswer: 1,
      explanation: "En Reported Speech, no hay inversión ni signo de pregunta, y el tiempo retrocede (\"are\" → \"was\")."
    },
    {
      question: "\"Don't touch that!\" he said. → He told me ___ that.",
      options: ["to not touch", "not to touch", "don't touch", "not touch"],
      correctAnswer: 1,
      explanation: "Órdenes negativas → 'told me not to + verbo base'."
    },
    {
      question: "\"I can swim,\" he said. → He said he ___ swim.",
      options: ["can", "could", "was able", "is able"],
      correctAnswer: 1,
      explanation: "\"Can\" cambia a \"could\" en Reported Speech."
    },
    {
      question: "\"We have finished our work,\" they said. → They said they ___ finished their work.",
      options: ["have", "had", "were", "are"],
      correctAnswer: 1,
      explanation: "\"Have finished\" pasa a \"had finished\" (Presente Perfecto → Pasado Perfecto)."
    },
    {
      question: "\"Please sit down,\" the teacher said. → The teacher asked us ___ down.",
      options: ["sit", "to sit", "sitting", "sat"],
      correctAnswer: 1,
      explanation: "Petición cortés → 'asked + objeto + to + verbo base'."
    },
    {
      question: "\"I met her yesterday,\" he said. → He said he had met her ___.",
      options: ["yesterday", "the previous day", "last day", "that day"],
      correctAnswer: 1,
      explanation: "\"Yesterday\" se transforma en \"the previous day\" o \"the day before\"."
    },
    {
      question: "\"Here is my new car,\" she said. → She said that ___ was her new car.",
      options: ["this", "it", "there", "here"],
      correctAnswer: 1,
      explanation: "\"Here\" cambia el contexto y \"this\" se ajusta; en este caso, 'it' retoma el sujeto del discurso."
    }
  ]
};
