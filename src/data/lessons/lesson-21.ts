import type { LessonData, TitleData, ParagraphData, ListData, SeparatorData } from '../lessons';

export const lesson21: LessonData = {
  id: 21,
  title: "Texto de Repaso Integral — Consolidando todo lo aprendido",
  description: "Esta lección contiene un texto narrativo completo que integra todos los temas gramaticales y estructuras aprendidas en las lecciones anteriores. Está diseñado para ser leído múltiples veces, permitiéndote afianzar el idioma inglés a través de la repetición y la práctica constante. El texto incluye naturalmente todos los elementos gramaticales que has estudiado.",
  welcomeEmoji: "📚",
  pageTitle: "English Learning - Texto de Repaso Integral",
  metaDescription: "Texto de repaso integral que consolida todos los temas gramaticales aprendidos. Practica inglés leyendo este texto narrativo completo diseñado para afianzar el idioma.",
  learningPoints: [
    "Revisar y consolidar todos los temas gramaticales aprendidos",
    "Practicar la lectura comprensiva en inglés",
    "Familiarizarte con estructuras gramaticales en contexto real",
    "Mejorar tu fluidez lectora a través de la repetición",
    "Reconocer patrones gramaticales en un texto narrativo completo",
    "Afianzar el vocabulario y las estructuras aprendidas"
  ],
  content: [
    {
      topic: "Mi Viaje Aprendiendo Inglés — Una Historia Completa",
      explanation: "Este texto narra la historia de una persona que está aprendiendo inglés. Está diseñado para que lo leas varias veces, cada vez prestando atención a diferentes aspectos: primero la comprensión general, luego las estructuras gramaticales, después el vocabulario, y finalmente la fluidez. Lee el texto completo con atención y luego vuelve a leerlo las veces que necesites.",
      examples: [
        {
          type: 'title',
          text: 'Capítulo 1: Los Comienzos',
          emoji: '📖',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Hello! My name is Maria, and I am from Spain. I am twenty-eight years old, and I am learning English. This is my story.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "When I was a child, I didn't know English. I could only speak Spanish. My teachers were very kind, but they couldn't teach me English because there weren't any English classes in my school. If I had studied English when I was young, I would have learned it more easily. I wish I had started earlier!", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "Now, I am a teacher. I work in a school, and I teach children. My students are wonderful, and they are very smart. Every day, I wake up at seven o'clock in the morning. I have breakfast, and then I go to work. I usually take the bus because I don't have a car. If I had a car, I would drive to work, but I can't afford one right now.", italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Capítulo 2: Mi Rutina Diaria',
          emoji: '🌅',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "My daily routine is simple but busy. In the morning, I am always in a hurry. I drink coffee, eat some toast, and leave my house quickly. There are many people on the bus every morning. Some people are reading books, others are listening to music, and a few are sleeping. I usually read a book or study English on my phone.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'When I arrive at school, I greet my colleagues. I say "Hello! How are you?" and they usually answer "I\'m fine, thanks!" or "I\'m great!" We are all friends, and we help each other. If someone has a problem, we try to solve it together.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "My classroom is big and bright. There are many desks and chairs, and there is a big whiteboard on the wall. The children's books are on the shelves, and their backpacks are under their desks. I love my job because I can help children learn new things every day.", italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Capítulo 3: Aprendiendo Inglés',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Two years ago, I decided to learn English seriously. I thought, "If I study hard, I will improve my English." So, I started taking English classes. My English teacher is from London, and she is excellent. She has got blue eyes and brown hair, and she speaks very clearly. She can speak three languages: English, Spanish, and French.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'In my English class, we study grammar, vocabulary, and pronunciation. We practice speaking, writing, reading, and listening. Sometimes, I make mistakes, but my teacher always helps me. She told me that if I practiced every day, I would get better. I believe her because I have been studying for two years now, and I can see my progress. My teacher also said that I should practice more at home, and she was right. I must study every day if I want to improve, and I have to do my homework regularly.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "Last week, I had an exam. Before the exam, I had studied for many hours. I had been studying all week, so I was well prepared. I studied a lot, and I passed it! I was very happy. If I hadn't studied so much, I wouldn't have passed. My teacher was proud of me, and my classmates congratulated me. They asked me how I had prepared so well, and I told them that I had been practicing every day. I felt great!", italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Capítulo 4: Mis Amigos y Mi Familia',
          emoji: '👨‍👩‍👧‍👦',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "I have got two brothers and one sister. My brothers are older than me, and my sister is younger. They all speak English better than I do because they studied it at university. My oldest brother is a doctor, and he works in a hospital. He is the best English speaker in our family. He can speak English more fluently than anyone else because he reads medical books in English every day. When I was younger, I used to be afraid of speaking English, but now I am more confident.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'My sister is a student. She is studying at university, and she wants to be a translator. She can translate from English to Spanish and from Spanish to English. If she finishes her studies, she will get a good job. By next year, she will have finished her degree, and she will be working as a translator. I am sure she will be successful. She told me that she might work for an international company, and she may even move to another country.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'I have got many friends, too. Some of them are learning English with me, but not all of them. We practice together sometimes. We meet at a café, and we speak English for an hour. If we speak English regularly, we will improve faster. We also watch English movies and read English books together. My friend Ana told me that she had been studying English for three years. She said that she wanted to practice more with me. I asked her if she could help me with pronunciation, and she said yes.', italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Capítulo 5: Mis Pasatiempos y Sueños',
          emoji: '🎬',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "In my free time, I like reading books. I love reading novels, especially mystery novels. I hate reading boring books, but I enjoy reading exciting stories. I can read English books now, but I still need a dictionary sometimes. There isn't much time for reading during the week, but I read a lot on weekends. I don't have many English books at home, so I usually borrow them from the library. If I read more English books, I will learn more vocabulary. I also enjoy watching movies. I watch English movies with Spanish subtitles, and sometimes I watch them with English subtitles. If I watch movies without subtitles, I will improve my listening skills.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'I also like traveling. Last summer, I visited London for the first time. It was amazing! I saw Big Ben, the Tower Bridge, and many beautiful parks. The people were friendly, and I could practice my English. If I had more money, I would travel more often. I wish I could visit New York or Australia one day!', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "When I was in London, I stayed in a small hotel. There was a beautiful garden behind the hotel, and there were many flowers. The hotel's owner was very kind. He helped me when I had questions, and he recommended good restaurants. The hotel was located in the center of the city, and it was built many years ago. English is spoken everywhere in London, and many tourists are welcomed there every year. If I go back to London, I will be staying in that hotel again. By the time I visit again, I will have improved my English even more.", italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Capítulo 6: Reflexiones y Futuro',
          emoji: '🔮',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "Learning English has changed my life. Now, I can understand English songs, read English articles, and communicate with people from different countries. If I hadn't started learning English, I wouldn't have these opportunities. I am grateful for my teacher, my friends, and my family, who support me.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: "Sometimes, I think about the past. If I had learned English when I was a child, I would be fluent now. But I don't regret starting late. I believe that if you want something, you can achieve it with hard work and dedication. I wish I had more time to study, but I do my best with the time I have. My teacher told me that I shouldn't worry about my age, and she said that I was making excellent progress. She asked me if I was enjoying the classes, and I told her that I was loving them. She also told me that I should continue practicing every day.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'In the future, I want to become a better English speaker. If I continue studying, I will achieve my goals. I plan to take more advanced classes, read more books, and maybe even teach English to children one day. If I become an English teacher, I will help other people learn this beautiful language.', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'For now, I am happy with my progress. I can have conversations in English, I can write emails, and I can read books. If someone asks me "Can you speak English?" I can confidently say "Yes, I can!" And if they ask me "How are you?" I can answer "I\'m great, thanks!"', italic: true }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Conclusión',
          emoji: '✨',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: "This is my story. It is a story about learning, growing, and never giving up. If you are learning English too, remember: practice makes perfect. If you study every day, you will improve. If you make mistakes, don't worry—everyone makes mistakes. If you keep trying, you will succeed.", italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'I hope my story inspires you. Remember: learning a language is a journey, not a destination. Enjoy the process, celebrate your progress, and never stop learning. If I can do it, you can do it too!', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Best regards,', italic: true }
          ]
        } as ParagraphData,
        {
          type: 'paragraph',
          content: [
            { text: 'Maria', italic: true, bold: true }
          ]
        } as ParagraphData
      ]
    },
    {
      topic: "Elementos Gramaticales Incluidos en el Texto",
      explanation: "Este texto incluye naturalmente todos los temas que has aprendido en las lecciones anteriores. Aquí tienes una guía de qué buscar mientras lees el texto para consolidar tu aprendizaje.",
      examples: [
        {
          type: 'title',
          text: '1. Saludos y Presentaciones',
          emoji: '👋',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"Hello! My name is Maria..."', italic: true }
            ],
            [
              { text: '"How are you?" / "I\'m fine, thanks!"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '2. Verbo To Be (am, is, are, was, were)',
          emoji: '🔤',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I am from Spain"', italic: true }
            ],
            [
              { text: '"She is excellent"', italic: true }
            ],
            [
              { text: '"They were friendly"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '3. Estructura SVO y Pronombres Personales',
          emoji: '📝',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I teach children"', italic: true },
              { text: ' (Sujeto: I, Verbo: teach, Objeto: children)' }
            ],
            [
              { text: '"He works in a hospital"', italic: true }
            ],
            [
              { text: '"We practice together"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '4. Present Simple (rutinas y hechos)',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I wake up at seven o\'clock"', italic: true }
            ],
            [
              { text: '"I drink coffee"', italic: true }
            ],
            [
              { text: '"She speaks very clearly"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '5. Present Continuous (acciones en progreso)',
          emoji: '🔄',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"Some people are reading books"', italic: true }
            ],
            [
              { text: '"I am learning English"', italic: true }
            ],
            [
              { text: '"She is studying at university"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '6. Past Simple (acciones completadas)',
          emoji: '📅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I decided to learn English"', italic: true }
            ],
            [
              { text: '"I visited London"', italic: true }
            ],
            [
              { text: '"I saw Big Ben"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '7. Past Continuous (acciones en progreso en el pasado)',
          emoji: '⏳',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I was studying"', italic: true },
              { text: ' (implícito en el contexto)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '8. Past Perfect (acción anterior a otra en el pasado)',
          emoji: '📆',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"Before the exam, I had studied for many hours"', italic: true }
            ],
            [
              { text: '"They asked me how I had prepared so well"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '9. Past Perfect Continuous (duración hasta un punto en el pasado)',
          emoji: '⏰',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I had been studying all week"', italic: true }
            ],
            [
              { text: '"I told them that I had been practicing every day"', italic: true }
            ],
            [
              { text: '"She had been studying English for three years"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '10. Present Perfect (conexión pasado-presente)',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I have got two brothers"', italic: true }
            ],
            [
              { text: '"Learning English has changed my life"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '11. Present Perfect Continuous (acción que comenzó en el pasado y continúa)',
          emoji: '🔄',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I have been studying for two years now"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '12. Future Perfect (acción completada antes de un punto futuro)',
          emoji: '🔮',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"By next year, she will have finished her degree"', italic: true }
            ],
            [
              { text: '"By the time I visit again, I will have improved my English"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '13. Future Continuous (acción en progreso en el futuro)',
          emoji: '⏭️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"She will be working as a translator"', italic: true }
            ],
            [
              { text: '"I will be staying in that hotel again"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '14. Condicionales',
          emoji: '🔀',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Zero Conditional: ', bold: true },
              { text: '"If you heat ice, it melts"', italic: true },
              { text: ' (implícito en el concepto)' }
            ],
            [
              { text: 'First Conditional: ', bold: true },
              { text: '"If I study hard, I will improve"', italic: true }
            ],
            [
              { text: 'Second Conditional: ', bold: true },
              { text: '"If I had a car, I would drive"', italic: true }
            ],
            [
              { text: 'Third Conditional: ', bold: true },
              { text: '"If I had studied, I would have learned"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '15. I wish / If only',
          emoji: '💭',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I wish I had started earlier"', italic: true }
            ],
            [
              { text: '"I wish I could visit New York"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '16. There is / There are',
          emoji: '📍',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"There are many people on the bus"', italic: true }
            ],
            [
              { text: '"There is a big whiteboard"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '17. Have got (posesión)',
          emoji: '💼',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I have got two brothers"', italic: true }
            ],
            [
              { text: '"She has got blue eyes"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '18. Verbos Modales (Modal Verbs)',
          emoji: '✅',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Can/Could: ', bold: true },
              { text: '"I can help children"', italic: true },
              { text: ' / "I could practice my English"', italic: true }
            ],
            [
              { text: 'Should: ', bold: true },
              { text: '"I should practice more at home"', italic: true },
              { text: ' / "I shouldn\'t worry about my age"', italic: true }
            ],
            [
              { text: 'Must: ', bold: true },
              { text: '"I must study every day"', italic: true }
            ],
            [
              { text: 'Have to: ', bold: true },
              { text: '"I have to do my homework regularly"', italic: true }
            ],
            [
              { text: 'May/Might: ', bold: true },
              { text: '"She might work for an international company"', italic: true },
              { text: ' / "She may even move to another country"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '19. Reported Speech (Estilo Indirecto)',
          emoji: '🗣️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"She told me that if I practiced every day, I would get better"', italic: true },
              { text: ' (Direct: "If you practice every day, you will get better")' }
            ],
            [
              { text: '"My teacher also said that I should practice more"', italic: true }
            ],
            [
              { text: '"She asked me if I was enjoying the classes"', italic: true },
              { text: ' (Direct: "Are you enjoying the classes?")' }
            ],
            [
              { text: '"I told them that I had been practicing every day"', italic: true }
            ],
            [
              { text: '"My friend Ana told me that she had been studying English"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '20. Passive Voice (Voz Pasiva)',
          emoji: '🧾',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"The hotel was built many years ago"', italic: true },
              { text: ' (Active: "They built the hotel many years ago")' }
            ],
            [
              { text: '"English is spoken everywhere in London"', italic: true },
              { text: ' (Active: "People speak English everywhere in London")' }
            ],
            [
              { text: '"Many tourists are welcomed there every year"', italic: true },
              { text: ' (Active: "They welcome many tourists there every year")' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '21. Used to (hábitos pasados)',
          emoji: '⏮️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"When I was younger, I used to be afraid of speaking English"', italic: true },
              { text: ' (habito pasado que ya no ocurre)' }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '22. Comparativos y Superlativos',
          emoji: '🏆',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Comparativos: ', bold: true },
              { text: '"My brothers are older than me"', italic: true },
              { text: ' / "He can speak English more fluently than anyone else"', italic: true }
            ],
            [
              { text: 'Superlativos: ', bold: true },
              { text: '"He is the best English speaker in our family"', italic: true },
              { text: ' / "My oldest brother"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '23. Much/Many/Some/Any (cantidad)',
          emoji: '📊',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: 'Much (incontables): ', bold: true },
              { text: '"There isn\'t much time for reading"', italic: true }
            ],
            [
              { text: 'Many (contables): ', bold: true },
              { text: '"I don\'t have many English books"', italic: true },
              { text: ' / "There are many people on the bus"', italic: true }
            ],
            [
              { text: 'Some: ', bold: true },
              { text: '"Some of them are learning English"', italic: true },
              { text: ' / "I eat some toast"', italic: true }
            ],
            [
              { text: 'Any: ', bold: true },
              { text: '"There weren\'t any English classes"', italic: true },
              { text: ' / "but not all of them"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '24. Gerundios (like/love/hate + -ing)',
          emoji: '❤️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I like reading books"', italic: true }
            ],
            [
              { text: '"I love reading novels"', italic: true }
            ],
            [
              { text: '"I hate reading boring books"', italic: true }
            ],
            [
              { text: '"I enjoy reading exciting stories"', italic: true }
            ],
            [
              { text: '"I enjoy watching movies"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '25. Sustantivos y Artículos',
          emoji: '📚',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"a teacher" / "the bus" / "an exam"', italic: true }
            ],
            [
              { text: 'Plurales: ', bold: true },
              { text: '"books", "children", "friends"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '26. Adjetivos y Pronombres',
          emoji: '🎨',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"My classroom is big"', italic: true }
            ],
            [
              { text: '"Their backpacks"', italic: true }
            ],
            [
              { text: '"I love my job"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '27. Adverbios',
          emoji: '⚡',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"I usually read"', italic: true }
            ],
            [
              { text: '"She speaks very clearly"', italic: true }
            ],
            [
              { text: '"I always help"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '28. Preposiciones',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"at seven o\'clock"', italic: true }
            ],
            [
              { text: '"in the morning"', italic: true }
            ],
            [
              { text: '"on the bus"', italic: true }
            ],
            [
              { text: '"under their desks"', italic: true }
            ]
          ]
        } as ListData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: '29. Conectores y Estructuras Complejas',
          emoji: '🔗',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [
              { text: '"because", "and", "but", "so"', italic: true }
            ],
            [
              { text: '"When I was a child"', italic: true }
            ],
            [
              { text: '"If I study hard"', italic: true }
            ]
          ]
        } as ListData
      ]
    },
    {
      topic: "Cómo Usar Este Texto para Mejorar tu Inglés",
      explanation: "Este texto está diseñado para ser leído múltiples veces. Cada lectura te ayudará a consolidar diferentes aspectos del idioma. Aquí tienes algunas estrategias para aprovecharlo al máximo.",
      examples: [
        {
          type: 'title',
          text: 'Primera Lectura: Comprensión General',
          emoji: '👁️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lee el texto completo una vez sin detenerte. No te preocupes si no entiendes todas las palabras. El objetivo es entender la historia general y el mensaje principal.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Segunda Lectura: Identificar Estructuras Gramaticales',
          emoji: '🔍',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lee el texto nuevamente, pero esta vez identifica las estructuras gramaticales que conoces. Busca los tiempos verbales, los condicionales, las estructuras "there is/are", "have got", "can/can\'t", etc.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Tercera Lectura: Vocabulario',
          emoji: '📖',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'En esta lectura, subraya o anota las palabras que no conoces. Busca su significado y trata de entenderlas en contexto. Presta atención a cómo se usan las palabras que ya conoces.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Cuarta Lectura: Pronunciación',
          emoji: '🗣️',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lee el texto en voz alta. Esto te ayudará a practicar la pronunciación y a mejorar tu fluidez. No te preocupes por la velocidad; concéntrate en pronunciar correctamente.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Quinta Lectura: Fluidez',
          emoji: '💨',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Lee el texto una vez más, esta vez tratando de leerlo con fluidez y naturalidad. Imagina que estás contando la historia a un amigo.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Lecturas Adicionales: Repetición Espaciada',
          emoji: '🔄',
          level: 3
        } as TitleData,
        {
          type: 'paragraph',
          content: [
            { text: 'Vuelve a leer este texto después de unos días, luego después de una semana, y después de un mes. La repetición espaciada ayuda a consolidar el aprendizaje a largo plazo.' }
          ]
        } as ParagraphData,
        { type: 'separator' } as SeparatorData,
        {
          type: 'title',
          text: 'Actividades Adicionales',
          emoji: '✍️',
          level: 3
        } as TitleData,
        {
          type: 'list',
          items: [
            [{ text: 'Escribe un resumen del texto en inglés' }],
            [{ text: 'Haz preguntas sobre el texto y respóndelas' }],
            [{ text: 'Identifica todos los ejemplos de cada estructura gramatical' }],
            [{ text: 'Intenta reescribir algunas oraciones usando diferentes estructuras' }],
            [{ text: 'Practica contando la historia con tus propias palabras' }]
          ]
        } as ListData
      ]
    }
  ],
  quiz: [
    {
      question: "According to the text, what is Maria's profession?",
      options: ["She is a doctor", "She is a teacher", "She is a student", "She is a translator"],
      correctAnswer: 1,
      explanation: "The text states: 'Now, I am a teacher. I work in a school, and I teach children.'"
    },
    {
      question: "How long has Maria been studying English?",
      options: ["One year", "Two years", "Three years", "Four years"],
      correctAnswer: 1,
      explanation: "The text mentions: 'I have been studying for two years now'"
    },
    {
      question: "What conditional structure is used in: 'If I study hard, I will improve my English'?",
      options: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
      correctAnswer: 1,
      explanation: "First Conditional: If + Present Simple, will + infinitive. This expresses a real possibility in the future."
    },
    {
      question: "Which structure expresses regret about the past in the text?",
      options: ["If I had a car", "I wish I had started earlier", "If I study hard", "I can speak English"],
      correctAnswer: 1,
      explanation: "'I wish I had started earlier' uses 'I wish + Past Perfect' to express regret about something in the past."
    },
    {
      question: "What does Maria use to go to work?",
      options: ["Her car", "The bus", "Her bike", "She walks"],
      correctAnswer: 1,
      explanation: "The text states: 'I usually take the bus because I don't have a car.'"
    },
    {
      question: "How many siblings does Maria have?",
      options: ["One brother and one sister", "Two brothers and one sister", "One brother and two sisters", "Two brothers and two sisters"],
      correctAnswer: 1,
      explanation: "The text says: 'I have got two brothers and one sister.'"
    },
    {
      question: "Which city did Maria visit last summer?",
      options: ["New York", "London", "Paris", "Madrid"],
      correctAnswer: 1,
      explanation: "The text mentions: 'Last summer, I visited London for the first time.'"
    },
    {
      question: "What structure is used in: 'There are many people on the bus'?",
      options: ["Have got", "There is/are", "Can/Could", "Present Perfect"],
      correctAnswer: 1,
      explanation: "'There are' is used to describe what exists or is present in a place. 'Many people' is plural, so we use 'are'."
    },
    {
      question: "What does Maria like to do in her free time?",
      options: ["Watch TV only", "Read books and watch movies", "Only travel", "Play sports"],
      correctAnswer: 1,
      explanation: "The text states: 'In my free time, I like reading books... I also enjoy watching movies.'"
    },
    {
      question: "What is Maria's goal for the future?",
      options: ["To become a doctor", "To become a better English speaker and maybe teach English", "To travel to Australia only", "To stop learning English"],
      correctAnswer: 1,
      explanation: "The text mentions: 'In the future, I want to become a better English speaker... and maybe even teach English to children one day.'"
    }
  ]
};

