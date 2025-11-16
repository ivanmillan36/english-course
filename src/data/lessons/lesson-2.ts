import type { LessonData, TitleData, ParagraphData, CodeData, ListData, SeparatorData, TextPart } from '../lessons';

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
        {
          type: 'title',
          text: 'Tipos de sustantivos',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los sustantivos pueden nombrar diferentes tipos de cosas:' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Persona:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'woman', code: true },
              { text: ', ' },
              { text: 'teacher', code: true },
              { text: ', ' },
              { text: 'David', code: true },
              { text: ', ' },
              { text: 'sister', code: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lugar:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'hospital', code: true },
              { text: ', ' },
              { text: 'park', code: true },
              { text: ', ' },
              { text: 'Paris', code: true },
              { text: ', ' },
              { text: 'school', code: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Cosa:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'book', code: true },
              { text: ', ' },
              { text: 'computer', code: true },
              { text: ', ' },
              { text: 'water', code: true },
              { text: ', ' },
              { text: 'music', code: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Animal:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'dog', code: true },
              { text: ', ' },
              { text: 'elephant', code: true },
              { text: ', ' },
              { text: 'eagle', code: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Idea:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'love', code: true },
              { text: ', ' },
              { text: 'freedom', code: true },
              { text: ', ' },
              { text: 'happiness', code: true },
              { text: ', ' },
              { text: 'time', code: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Sustantivos comunes vs. propios',
          emoji: '💡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Sustantivos comunes (common nouns): ', bold: true },
            { text: 'No se capitalizan, son generales' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'city, dog, teacher, book',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Sustantivos propios (proper nouns): ', bold: true },
            { text: 'Siempre se capitalizan, son específicos' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'London, Max, Ms. Johnson, Paris',
          inline: true
        } as CodeData
      ]
    },
    {
      topic: "The Verb (El Verbo)",
      explanation: "Un verbo es una palabra que expresa una acción (what you do) o un estado (how you are). Es el corazón de la oración; sin un verbo, no hay oración. Los verbos pueden cambiar de forma para indicar tiempo (pasado, presente, futuro).",
      examples: [
        {
          type: 'title',
          text: 'Tipos de verbos',
          emoji: '⚡',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true },
            { text: 'Sin un verbo, no hay oración. El verbo es esencial.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Verbos de acción (Action verbs):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Expresan lo que haces o realizas.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'run', code: true },
              { text: ' (correr)' }
            ],
            [
              { text: 'eat', code: true },
              { text: ' (comer)' }
            ],
            [
              { text: 'write', code: true },
              { text: ' (escribir)' }
            ],
            [
              { text: 'think', code: true },
              { text: ' (pensar)' }
            ],
            [
              { text: 'study', code: true },
              { text: ' (estudiar)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'paragraph',
          content: [
            { text: 'Verbos de estado (State verbs):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Expresan cómo eres o cómo te sientes. Incluyen verbos como ' },
            { text: 'to be', code: true },
            { text: ', ' },
            { text: 'to have', code: true },
            { text: ', ' },
            { text: 'to feel', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'am', code: true },
              { text: ', ' },
              { text: 'is', code: true },
              { text: ', ' },
              { text: 'are', code: true },
              { text: ' (formas de "to be")' }
            ],
            [
              { text: 'was', code: true },
              { text: ', ' },
              { text: 'were', code: true },
              { text: ' (formas pasadas de "to be")' }
            ],
            [
              { text: 'have', code: true },
              { text: ', ' },
              { text: 'has', code: true },
              { text: ' (formas de "to have")' }
            ],
            [
              { text: 'feel', code: true },
              { text: ', ' },
              { text: 'seem', code: true },
              { text: ' (sentir, parecer)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Ejemplos en oraciones',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I ', italic: true },
              { text: 'run', code: true, italic: true },
              { text: ' every morning.', italic: true },
              { text: ' (Verbo de acción)' }
            ],
            [
              { text: 'She ', italic: true },
              { text: 'is', code: true, italic: true },
              { text: ' happy.', italic: true },
              { text: ' (Verbo de estado)' }
            ],
            [
              { text: 'They ', italic: true },
              { text: 'study', code: true, italic: true },
              { text: ' English.', italic: true },
              { text: ' (Verbo de acción)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "The Adjective (El Adjetivo)",
      explanation: "Un adjetivo es una palabra que describe o modifica a un sustantivo. Proporciona más información sobre él, respondiendo a preguntas como: What kind? (¿Qué tipo?), Which one? (¿Cuál?), How many? (¿Cuántos?). Generalmente van antes del sustantivo o después de un verbo de estado (como 'be').",
      examples: [
        {
          type: 'title',
          text: 'Función del adjetivo',
          emoji: '🎨',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los adjetivos responden a preguntas como: ' },
            { text: 'What kind?', code: true },
            { text: ' (¿Qué tipo?), ' },
            { text: 'Which one?', code: true },
            { text: ' (¿Cuál?), ' },
            { text: 'How many?', code: true },
            { text: ' (¿Cuántos?)' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Posición del adjetivo',
          emoji: '📍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Antes del sustantivo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The ', italic: true },
              { text: 'red', code: true, bold: true, italic: true },
              { text: ' car', italic: true },
              { text: ' (¿Qué tipo de auto? Uno rojo)' }
            ],
            [
              { text: 'I have ', italic: true },
              { text: 'three', code: true, bold: true, italic: true },
              { text: ' books', italic: true },
              { text: ' (¿Cuántos libros? Tres)' }
            ],
            [
              { text: "It's a ", italic: true },
              { text: 'beautiful', code: true, bold: true, italic: true },
              { text: ', ', italic: true },
              { text: 'sunny', code: true, bold: true, italic: true },
              { text: ' day', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Después de un verbo de estado (como "be"):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She is ', italic: true },
              { text: 'intelligent', code: true, bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (Ella es inteligente - describe "she")' }
            ],
            [
              { text: 'The car is ', italic: true },
              { text: 'red', code: true, bold: true, italic: true },
              { text: '.', italic: true }
            ],
            [
              { text: 'They are ', italic: true },
              { text: 'happy', code: true, bold: true, italic: true },
              { text: '.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tipos de adjetivos',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Adjetivos descriptivos: ', bold: true },
            { text: 'Describen cualidades' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'big, small, beautiful, intelligent, red, happy',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Adjetivos numéricos: ', bold: true },
            { text: 'Indican cantidad' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'one, two, three, first, second, many, few',
          inline: true
        } as CodeData
      ]
    },
    {
      topic: "The Adverb (El Adverbio)",
      explanation: "Un adverbio es una palabra que describe o modifica a un verbo, un adjetivo, o a otro adverbio. A menudo responden a las preguntas: How? (¿Cómo?), When? (¿Cuándo?), Where? (¿Dónde?), To what extent? (¿Hasta qué punto?). Muchos adverbios en inglés terminan en -ly.",
      examples: [
        {
          type: 'title',
          text: 'Función del adverbio',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los adverbios responden a preguntas como: ' },
            { text: 'How?', code: true },
            { text: ' (¿Cómo?), ' },
            { text: 'When?', code: true },
            { text: ' (¿Cuándo?), ' },
            { text: 'Where?', code: true },
            { text: ' (¿Dónde?), ' },
            { text: 'To what extent?', code: true },
            { text: ' (¿Hasta qué punto?)' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Nota: ', bold: true },
            { text: 'Muchos adverbios en inglés terminan en ' },
            { text: '-ly', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Qué puede modificar un adverbio',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Modifica un verbo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She speaks ', italic: true },
              { text: 'quickly', code: true, bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (¿Cómo habla? Rápidamente)' }
            ],
            [
              { text: 'He runs ', italic: true },
              { text: 'fast', code: true, bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (¿Cómo corre? Rápido)' }
            ],
            [
              { text: 'They study ', italic: true },
              { text: 'hard', code: true, bold: true, italic: true },
              { text: '.', italic: true },
              { text: ' (¿Cómo estudian? Con esfuerzo)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Modifica un adjetivo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'It is ', italic: true },
              { text: 'extremely', code: true, bold: true, italic: true },
              { text: ' hot.', italic: true },
              { text: ' (¿Hasta qué punto hace calor? Extremadamente)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'very', code: true, bold: true, italic: true },
              { text: ' intelligent.', italic: true },
              { text: ' (¿Cuán inteligente? Muy)' }
            ],
            [
              { text: 'The movie is ', italic: true },
              { text: 'really', code: true, bold: true, italic: true },
              { text: ' interesting.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Modifica otro adverbio:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She sings ', italic: true },
              { text: 'very', code: true, bold: true, italic: true },
              { text: ' beautifully.', italic: true },
              { text: ' (¿Cuán bellamente? Muy)' }
            ],
            [
              { text: 'He drives ', italic: true },
              { text: 'quite', code: true, bold: true, italic: true },
              { text: ' slowly.', italic: true },
              { text: ' (¿Cuán lentamente? Bastante)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Adverbios comunes por categoría',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Tiempo (When?):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'always, never, often, sometimes, today, yesterday, now',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lugar (Where?):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'here, there, everywhere, nowhere, inside, outside',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Modo (How?):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'quickly, slowly, well, badly, carefully, easily',
          inline: true
        } as CodeData
      ]
    },
    {
      topic: "The Article (El Artículo)",
      explanation: "Un artículo es una palabra que se coloca antes de un sustantivo para definir si es específico o no específico. Son pequeños pero muy importantes. Solo hay tres: a, an, y the. A/An (Indefinite articles): Se usan con sustantivos singulares no específicos. A va antes de sonidos de consonante; An va antes de sonidos de vocal. The (Definite article): Se usa con sustantivos específicos.",
      examples: [
        {
          type: 'title',
          text: 'Los tres artículos',
          emoji: '📌',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Solo hay tres artículos en inglés: ' },
            { text: 'a', code: true },
            { text: ', ' },
            { text: 'an', code: true },
            { text: ', y ' },
            { text: 'the', code: true },
            { text: '.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'A / An (Artículos indefinidos)',
          emoji: '🔤',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usan con sustantivos singulares no específicos (cualquiera, uno entre muchos).' }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Regla: ', bold: true },
            { text: 'A', code: true },
            { text: ' va antes de sonidos de consonante; ' },
            { text: 'An', code: true },
            { text: ' va antes de sonidos de vocal.' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I need ', italic: true },
              { text: 'a', code: true, bold: true, italic: true },
              { text: ' pencil.', italic: true },
              { text: ' (necesito un lápiz, cualquiera)' }
            ],
            [
              { text: 'She is ', italic: true },
              { text: 'an', code: true, bold: true, italic: true },
              { text: ' artist.', italic: true },
              { text: ' (es una artista, una entre muchas)' }
            ],
            [
              { text: 'He has ', italic: true },
              { text: 'a', code: true, bold: true, italic: true },
              { text: ' car.', italic: true },
              { text: ' (tiene un auto, cualquiera)' }
            ],
            [
              { text: 'It is ', italic: true },
              { text: 'an', code: true, bold: true, italic: true },
              { text: ' hour.', italic: true },
              { text: ' (es una hora - "hour" empieza con sonido de vocal)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '💡 ', emoji: '💡' },
            { text: 'Importante: ', bold: true },
            { text: 'Se usa el sonido, no la letra. Por ejemplo: ' },
            { text: 'an hour', code: true },
            { text: ' (la "h" es muda, suena como vocal) y ' },
            { text: 'a university', code: true },
            { text: ' (la "u" suena como consonante "yu").' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'The (Artículo definido)',
          emoji: '🎯',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Se usa con sustantivos específicos (uno en particular, ya conocido o mencionado).' }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '', italic: true },
              { text: 'The', code: true, bold: true, italic: true },
              { text: ' book you gave me is great.', italic: true },
              { text: ' (el libro específico que me diste)' }
            ],
            [
              { text: 'I saw ', italic: true },
              { text: 'the', code: true, bold: true, italic: true },
              { text: ' movie yesterday.', italic: true },
              { text: ' (la película específica que ambos conocemos)' }
            ],
            [
              { text: '', italic: true },
              { text: 'The', code: true, bold: true, italic: true },
              { text: ' sun is bright today.', italic: true },
              { text: ' (el sol - solo hay uno)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Comparación: A/An vs The',
          emoji: '⚖️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'I need ', italic: true },
              { text: 'a', code: true, bold: true, italic: true },
              { text: ' pen.', italic: true },
              { text: ' (cualquier bolígrafo)' }
            ],
            [
              { text: 'I need ', italic: true },
              { text: 'the', code: true, bold: true, italic: true },
              { text: ' pen.', italic: true },
              { text: ' (el bolígrafo específico que mencionamos antes)' }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "The Pronoun (El Pronombre)",
      explanation: "Un pronombre es una palabra que reemplaza a un sustantivo para evitar repetirlo. 'He' es más fácil de decir que 'John' todo el tiempo. Los pronombres tienen diferentes casos: sujeto (I, you, he, she, it, we, they), objeto (me, you, him, her, it, us, them), posesivo (my, your, his, her, its, our, their).",
      examples: [
        {
          type: 'title',
          text: 'Función del pronombre',
          emoji: '🔄',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Los pronombres reemplazan sustantivos para evitar repetición. Por ejemplo, es más fácil decir ' },
            { text: '"He"', code: true },
            { text: ' que repetir ' },
            { text: '"John"', code: true },
            { text: ' todo el tiempo.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tipos de pronombres',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. Pronombres de sujeto (Subject pronouns):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Realizan la acción en la oración.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'I, you, he, she, it, we, they',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: '', italic: true },
              { text: 'Maria', code: true, bold: true, italic: true },
              { text: ' is smart. ', italic: true },
              { text: 'She', code: true, bold: true, italic: true },
              { text: ' studies every day.', italic: true },
              { text: ' ("She" reemplaza a "Maria")' }
            ],
            [
              { text: '', italic: true },
              { text: 'John', code: true, bold: true, italic: true },
              { text: ' and ', italic: true },
              { text: 'Mary', code: true, bold: true, italic: true },
              { text: ' are friends. ', italic: true },
              { text: 'They', code: true, bold: true, italic: true },
              { text: ' study together.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. Pronombres de objeto (Object pronouns):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Reciben la acción en la oración.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'me, you, him, her, it, us, them',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'We told ', italic: true },
              { text: 'them', code: true, bold: true, italic: true },
              { text: ' the story.', italic: true },
              { text: ' ("Them" funciona como el objeto que recibe la acción)' }
            ],
            [
              { text: 'She called ', italic: true },
              { text: 'me', code: true, bold: true, italic: true },
              { text: ' yesterday.', italic: true }
            ],
            [
              { text: 'I saw ', italic: true },
              { text: 'him', code: true, bold: true, italic: true },
              { text: ' at the store.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '3. Pronombres posesivos (Possessive pronouns):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Indican posesión o pertenencia.' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'my, your, his, her, its, our, their',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'This is ', italic: true },
              { text: 'my', code: true, bold: true, italic: true },
              { text: ' book.', italic: true },
              { text: ' ("My" indica posesión y reemplaza a "the book of me")' }
            ],
            [
              { text: 'That is ', italic: true },
              { text: 'her', code: true, bold: true, italic: true },
              { text: ' car.', italic: true }
            ],
            [
              { text: 'These are ', italic: true },
              { text: 'their', code: true, bold: true, italic: true },
              { text: ' books.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tabla de pronombres',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Comparación de los diferentes casos:' }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'Subject: I → Object: me → Possessive: my',
          inline: false
        } as CodeData,
        {
          type: 'code',
          code: 'Subject: you → Object: you → Possessive: your',
          inline: false
        } as CodeData,
        {
          type: 'code',
          code: 'Subject: he → Object: him → Possessive: his',
          inline: false
        } as CodeData,
        {
          type: 'code',
          code: 'Subject: she → Object: her → Possessive: her',
          inline: false
        } as CodeData,
        {
          type: 'code',
          code: 'Subject: we → Object: us → Possessive: our',
          inline: false
        } as CodeData,
        {
          type: 'code',
          code: 'Subject: they → Object: them → Possessive: their',
          inline: false
        } as CodeData
      ]
    },
    {
      topic: "The Preposition (La Preposición)",
      explanation: "Una preposición es una palabra que muestra la relación entre un sustantivo (o pronombre) y otra palabra en la oración. Indican lugar, tiempo, dirección, modo, etc. Forman parte de frases preposicionales (in the house, at 5 pm, with my friend).",
      examples: [
        {
          type: 'title',
          text: 'Función de la preposición',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Las preposiciones muestran relaciones entre palabras. Forman parte de ' },
            { text: 'frases preposicionales', code: true },
            { text: ' (por ejemplo: ' },
            { text: 'in the house', code: true },
            { text: ', ' },
            { text: 'at 5 pm', code: true },
            { text: ', ' },
            { text: 'with my friend', code: true },
            { text: ').' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tipos de preposiciones',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lugar (Where?):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'The cat is ', italic: true },
              { text: 'on', code: true, bold: true, italic: true },
              { text: ' the table.', italic: true }
            ],
            [
              { text: 'She lives ', italic: true },
              { text: 'in', code: true, bold: true, italic: true },
              { text: ' Madrid.', italic: true }
            ],
            [
              { text: 'The book is ', italic: true },
              { text: 'under', code: true, bold: true, italic: true },
              { text: ' the bed.', italic: true }
            ],
            [
              { text: 'We are ', italic: true },
              { text: 'at', code: true, bold: true, italic: true },
              { text: ' the park.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Tiempo (When?):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'We meet ', italic: true },
              { text: 'at', code: true, bold: true, italic: true },
              { text: ' 5 o\'clock.', italic: true }
            ],
            [
              { text: 'I will see you ', italic: true },
              { text: 'on', code: true, bold: true, italic: true },
              { text: ' Monday.', italic: true }
            ],
            [
              { text: 'She arrives ', italic: true },
              { text: 'in', code: true, bold: true, italic: true },
              { text: ' the morning.', italic: true }
            ],
            [
              { text: 'The class starts ', italic: true },
              { text: 'at', code: true, bold: true, italic: true },
              { text: ' 9 a.m.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: 'Dirección/Relación:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'They went ', italic: true },
              { text: 'to', code: true, bold: true, italic: true },
              { text: ' the cinema.', italic: true }
            ],
            [
              { text: 'This letter is ', italic: true },
              { text: 'for', code: true, bold: true, italic: true },
              { text: ' you.', italic: true }
            ],
            [
              { text: 'She came ', italic: true },
              { text: 'from', code: true, bold: true, italic: true },
              { text: ' Spain.', italic: true }
            ],
            [
              { text: 'I went ', italic: true },
              { text: 'with', code: true, bold: true, italic: true },
              { text: ' my friend.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Preposiciones comunes',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lugar:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'in, on, at, under, over, above, below, beside, between, among',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Tiempo:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'at, on, in, before, after, during, for, since',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Dirección:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'to, from, into, out of, toward, away from',
          inline: true
        } as CodeData,
        {
          type: 'paragraph',
          content: [
            { text: 'Relación/Otro:', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'code',
          code: 'with, without, for, of, by, about',
          inline: true
        } as CodeData
      ]
    },
    {
      topic: "The Conjunction (La Conjunción)",
      explanation: "Una conjunción es una palabra que conecta palabras, frases o cláusulas dentro de una oración. Son los 'pegamentos' del lenguaje. Las más comunes son and (suma), but (contraste), or (alternativa), because (causa), if (condición).",
      examples: [
        {
          type: 'title',
          text: 'Función de la conjunción',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Las conjunciones son los "pegamentos" del lenguaje. Conectan palabras, frases o cláusulas dentro de una oración.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Conjunciones más comunes',
          emoji: '📋',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: '1. ', bold: true },
            { text: 'And', code: true },
            { text: ' (suma/adición):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I like coffee ', italic: true },
              { text: 'and', code: true, bold: true, italic: true },
              { text: ' tea.', italic: true },
              { text: ' (conecta dos palabras)' }
            ],
            [
              { text: 'She studies hard ', italic: true },
              { text: 'and', code: true, bold: true, italic: true },
              { text: ' gets good grades.', italic: true },
              { text: ' (conecta dos cláusulas)' }
            ],
            [
              { text: 'We need bread, milk, ', italic: true },
              { text: 'and', code: true, bold: true, italic: true },
              { text: ' eggs.', italic: true },
              { text: ' (conecta elementos en una lista)' }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '2. ', bold: true },
            { text: 'But', code: true },
            { text: ' (contraste):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'She wants to go, ', italic: true },
              { text: 'but', code: true, bold: true, italic: true },
              { text: ' she is tired.', italic: true },
              { text: ' (conecta dos ideas contrastantes)' }
            ],
            [
              { text: 'I like coffee, ', italic: true },
              { text: 'but', code: true, bold: true, italic: true },
              { text: ' I don\'t like tea.', italic: true }
            ],
            [
              { text: 'He is smart, ', italic: true },
              { text: 'but', code: true, bold: true, italic: true },
              { text: ' he is lazy.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '3. ', bold: true },
            { text: 'Or', code: true },
            { text: ' (alternativa):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'You can have cake ', italic: true },
              { text: 'or', code: true, bold: true, italic: true },
              { text: ' ice cream.', italic: true },
              { text: ' (conecta dos alternativas)' }
            ],
            [
              { text: 'Do you want coffee ', italic: true },
              { text: 'or', code: true, bold: true, italic: true },
              { text: ' tea?', italic: true }
            ],
            [
              { text: 'We can go now ', italic: true },
              { text: 'or', code: true, bold: true, italic: true },
              { text: ' wait until later.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '4. ', bold: true },
            { text: 'Because', code: true },
            { text: ' (causa):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: 'I stayed home ', italic: true },
              { text: 'because', code: true, bold: true, italic: true },
              { text: ' it was raining.', italic: true },
              { text: ' (conecta una causa y un efecto)' }
            ],
            [
              { text: 'She is happy ', italic: true },
              { text: 'because', code: true, bold: true, italic: true },
              { text: ' she passed the exam.', italic: true }
            ],
            [
              { text: 'We left early ', italic: true },
              { text: 'because', code: true, bold: true, italic: true },
              { text: ' we were tired.', italic: true }
            ]
          ]
        } as ListData,
        {
          type: 'paragraph',
          content: [
            { text: '5. ', bold: true },
            { text: 'If', code: true },
            { text: ' (condición):', bold: true }
          ]
        } as ParagraphData,
        {
          type: 'list',
          items: [
            [
              { text: '', italic: true },
              { text: 'If', code: true, bold: true, italic: true },
              { text: ' it rains, we will stay home.', italic: true },
              { text: ' (conecta una condición y su resultado)' }
            ],
            [
              { text: '', italic: true },
              { text: 'If', code: true, bold: true, italic: true },
              { text: ' you study, you will pass.', italic: true }
            ],
            [
              { text: 'I will help you ', italic: true },
              { text: 'if', code: true, bold: true, italic: true },
              { text: ' you need me.', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Otras conjunciones comunes',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'code',
          code: 'so (por lo tanto), although (aunque), while (mientras), since (desde/ya que), until (hasta)',
          inline: true
        } as CodeData,
        {
          type: 'list',
          items: [
            [
              { text: 'I was tired, ', italic: true },
              { text: 'so', code: true, bold: true, italic: true },
              { text: ' I went to bed early.', italic: true }
            ],
            [
              { text: '', italic: true },
              { text: 'Although', code: true, bold: true, italic: true },
              { text: ' it was cold, we went outside.', italic: true }
            ],
            [
              { text: 'I will wait ', italic: true },
              { text: 'until', code: true, bold: true, italic: true },
              { text: ' you arrive.', italic: true }
            ]
          ]
        } as ListData
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
