import type { LessonData } from '../lessons';

export const lesson9: LessonData = {
  id: 9,
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
        "**Comparación básica:**",
        "• **Estilo directo:** He said, \"I'm tired.\"",
        "• **Estilo indirecto:** He said (that) he was tired.",
        "",
        "**Más ejemplos:**",
        "• **Directo:** \"I work here,\" she said.",
        "• **Indirecto:** She said she worked there.",
        "",
        "• **Directo:** \"We will arrive soon,\" they said.",
        "• **Indirecto:** They said they would arrive soon.",
        "",
        "**Nota importante:**",
        "• He said he was tired. ✅ (sin 'that')",
        "• He said that he was tired. ✅ (con 'that')"
      ]
    },
    {
      topic: "Cambios de tiempo verbal (Backshift)",
      explanation: "Cuando el verbo introductorio (por ejemplo, *said*, *told*, *asked*) está en **pasado**, los tiempos verbales del discurso **retroceden un tiempo** en inglés. Esto se llama **\"backshift\"**. Si el verbo introductorio está en **presente** (*He says he is tired*), o si el hecho sigue siendo cierto, el tiempo puede mantenerse igual. El backshift es automático cuando reportamos algo dicho en el pasado.",
      examples: [
        "**Tabla de cambios de tiempo:**",
        "",
        "| **Estilo directo** | **Reported Speech** | **Traducción** |",
        "|-------------------|-------------------|----------------|",
        "| \"I am tired.\" | He said he **was** tired. | Dijo que **estaba** cansado. |",
        "| \"I work here.\" | He said he **worked** there. | Dijo que **trabajaba** allí. |",
        "| \"I have finished.\" | He said he **had finished**. | Dijo que **había terminado**. |",
        "| \"I will go.\" | He said he **would go**. | Dijo que **iría**. |",
        "| \"I can swim.\" | He said he **could swim**. | Dijo que **podía** nadar. |",
        "",
        "**Ejemplos adicionales:**",
        "• \"She is happy.\" → He said she **was** happy.",
        "• \"They have arrived.\" → He said they **had arrived**.",
        "• \"I must leave.\" → She said she **had to leave**."
      ]
    },
    {
      topic: "Cambios de pronombres y marcadores de tiempo/lugar",
      explanation: "Cuando transformamos una oración al estilo indirecto, debemos **ajustar los pronombres personales** y las **expresiones de tiempo o lugar** para que tengan sentido desde la perspectiva del hablante. Los pronombres cambian según quién habla y de quién se habla. Las expresiones temporales y espaciales se ajustan al momento y lugar desde donde se reporta la información.",
      examples: [
        "**Cambios de pronombres:**",
        "• I → he / she",
        "• my → his / her",
        "• we → they",
        "• our → their",
        "",
        "**Cambios de tiempo y lugar:**",
        "• today → that day",
        "• tomorrow → the next day / the following day",
        "• yesterday → the previous day / the day before",
        "• now → then",
        "• here → there",
        "• this → that",
        "",
        "**Ejemplo completo:**",
        "• **Directo:** \"I will call you tomorrow.\"",
        "• **Indirecto:** She said she would call me **the next day**.",
        "",
        "• **Directo:** \"I live here now.\"",
        "• **Indirecto:** He said he lived **there then**."
      ]
    },
    {
      topic: "Reportar preguntas",
      explanation: "Al reportar preguntas, **no usamos signos de interrogación** ni invertimos el orden (sujeto + verbo). Para **preguntas cerradas (yes/no)** usamos *if* o *whether*. Para **preguntas con palabra interrogativa (wh-)** mantenemos la palabra interrogativa (*what, where, who, when, why, how*), pero cambiamos los tiempos y pronombres. El orden se vuelve afirmativo: sujeto + verbo.",
      examples: [
        "**Preguntas cerradas (yes/no):**",
        "• **Directo:** \"Are you happy?\"",
        "• **Indirecto:** He asked me **if I was happy**.",
        "",
        "• **Directo:** \"Do you like coffee?\"",
        "• **Indirecto:** She asked me **if I liked coffee**.",
        "",
        "**Preguntas con wh- (what, where, who, etc.):**",
        "• **Directo:** \"Where do you live?\"",
        "• **Indirecto:** She asked me **where I lived**.",
        "",
        "• **Directo:** \"What time is it?\"",
        "• **Indirecto:** He asked **what time it was**.",
        "",
        "• **Directo:** \"Why are you late?\"",
        "• **Indirecto:** The teacher asked **why I was late**."
      ]
    },
    {
      topic: "Reportar órdenes, consejos y solicitudes",
      explanation: "Para reportar **órdenes o peticiones**, usamos la estructura: **told / asked + objeto + to + verbo base**. Para reportar **órdenes negativas**, usamos: **told / asked + objeto + not to + verbo base**. Usamos **told** para órdenes directas y **asked** para peticiones corteses. También podemos usar **ordered** para órdenes muy formales o autoritarias.",
      examples: [
        "**Órdenes afirmativas:**",
        "• **Directo:** \"Close the door.\"",
        "• **Indirecto:** He **told me to close** the door.",
        "",
        "• **Directo:** \"Study harder.\"",
        "• **Indirecto:** The teacher **told us to study** harder.",
        "",
        "**Peticiones corteses:**",
        "• **Directo:** \"Please help me.\"",
        "• **Indirecto:** She **asked me to help** her.",
        "",
        "**Órdenes negativas:**",
        "• **Directo:** \"Don't be late.\"",
        "• **Indirecto:** He **told me not to be** late.",
        "",
        "• **Directo:** \"Don't touch that!\"",
        "• **Indirecto:** She **told me not to touch** that.",
        "",
        "**Consejos:**",
        "• **Directo:** \"You should rest.\"",
        "• **Indirecto:** The doctor **advised me to rest**."
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
