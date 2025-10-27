import type { LessonData } from '../lessons';

export const lesson11: LessonData = {
  id: 7,
  title: "Sustantivos y Artículos — Cómo nombrar, contar y expresar posesión correctamente",
  description: "Los sustantivos (nouns) son las palabras que usamos para nombrar personas, lugares, cosas o ideas. Son el corazón de casi todas las oraciones. Aprende a usar artículos, formar plurales y expresar posesión correctamente.",
  welcomeEmoji: "🧩",
  pageTitle: "English Learning - Sustantivos y Artículos",
  metaDescription: "Domina los sustantivos y artículos en inglés. Aprende a usar a/an/the, formar plurales regulares e irregulares, y usar el genitivo sajón ('s) para expresar posesión.",
  learningPoints: [
    "Qué son los sustantivos y cómo se clasifican",
    "Cómo usar correctamente los artículos a/an y the",
    "Cómo formar el plural de los sustantivos (regulares e irregulares)",
    "Cómo usar el genitivo sajón ('s) para expresar posesión",
    "Cuándo no usar artículos (casos especiales)",
    "Los errores más comunes y cómo evitarlos"
  ],
  content: [
    {
      topic: "Artículos en inglés: a / an / the",
      explanation: "En inglés, los **artículos** son palabras que acompañan a los sustantivos para indicar si estamos hablando de **algo general o algo específico**. Hay dos tipos: artículos indefinidos (a/an) y el artículo definido (the).",
      examples: [
        "**1. Artículos indefinidos (a / an)**",
        "",
        "Se usan cuando **mencionamos algo por primera vez** o **no es específico**.",
        "",
        "• **'A'** se usa antes de palabras que **empiezan con sonido consonante**.",
        "• **'An'** se usa antes de palabras que **empiezan con sonido vocal** (a, e, i, o, u).",
        "",
        "👉 **Estructura:** `a / an + sustantivo singular contable`",
        "",
        "**Ejemplos:**",
        "• a cat → *un gato*",
        "• an apple → *una manzana*",
        "• a university → *una universidad* (empieza con sonido /ju/, no con vocal)",
        "• an hour → *una hora* (empieza con sonido vocálico /aʊ/)",
        "",
        "💡 **Nota:** 'A' y 'an' **solo se usan con sustantivos singulares contables.**",
        "No se dicen cosas como ❌ *an information* o ❌ *a water*.",
        "",
        "**2. Artículo definido (the)**",
        "",
        "Se usa cuando hablamos de **algo específico o conocido** por el hablante y el oyente.",
        "Funciona igual en singular y plural.",
        "",
        "**Ejemplos:**",
        "• The cat is sleeping. → *El gato está durmiendo.*",
        "• The apples are fresh. → *Las manzanas están frescas.*",
        "• The sun is bright today. → *El sol brilla hoy.*",
        "",
        "💡 **Casos donde no se usa 'the':**",
        "• Antes de nombres propios: ❌ *The Maria*",
        "• Antes de idiomas o comidas en general: ❌ *The English is hard*, ✅ *English is hard.*",
        "• Antes de países (salvo excepciones como *the United States*, *the Netherlands*)."
      ]
    },
    {
      topic: "Plurales regulares",
      explanation: "La mayoría de los sustantivos forman el plural **añadiendo una terminación al final**. Sin embargo, hay pequeñas variaciones según cómo termina la palabra.",
      examples: [
        "**Reglas principales:**",
        "",
        "**1. Palabras que terminan en consonante + nada especial:**",
        "➜ Agregamos **-s**",
        "• cat → cats",
        "• car → cars",
        "• table → tables",
        "",
        "**2. Palabras que terminan en -s, -ss, -sh, -ch, -x, o -z:**",
        "➜ Agregamos **-es**",
        "• bus → buses",
        "• box → boxes",
        "• watch → watches",
        "",
        "**3. Palabras que terminan en consonante + 'y':**",
        "➜ Cambiamos la 'y' por 'ies'",
        "• city → cities",
        "• baby → babies",
        "",
        "**4. Palabras que terminan en vocal + 'y':**",
        "➜ Solo agregamos 's'",
        "• boy → boys",
        "• day → days",
        "",
        "💡 **Importante:**",
        "En inglés **no se agrega un artículo plural indefinido** (no existe *a cats*). Solo se usa **'some'** o **nada**:",
        "> I have **some cats**. / I have **cats**."
      ]
    },
    {
      topic: "Plurales irregulares",
      explanation: "Algunos sustantivos **no siguen las reglas regulares** y cambian completamente su forma en plural. Estos son muy frecuentes, por lo que conviene memorizarlos.",
      examples: [
        "**Tabla de plurales irregulares comunes:**",
        "",
        "| Singular | Plural   | Ejemplo                               |",
        "| -------- | -------- | ------------------------------------- |",
        "| man      | men      | The men are working.                  |",
        "| woman    | women    | The women are doctors.                |",
        "| child    | children | There are three children in the park. |",
        "| foot     | feet     | My feet hurt.                         |",
        "| tooth    | teeth    | I brush my teeth every day.           |",
        "| person   | people   | People are friendly here.             |",
        "",
        "**Ejemplos en contexto:**",
        "• The **men** are working. → *Los hombres están trabajando.*",
        "• The **women** are doctors. → *Las mujeres son doctoras.*",
        "• There are three **children** in the park. → *Hay tres niños en el parque.*",
        "• My **feet** hurt. → *Me duelen los pies.*",
        "• I brush my **teeth** every day. → *Me lavo los dientes todos los días.*",
        "• **People** are friendly here. → *La gente es amable aquí.*",
        "",
        "💡 **Tip:**",
        "La palabra **'people'** es plural de 'person', aunque muchas veces se usa como plural general ('personas' en español)."
      ]
    },
    {
      topic: "El Genitivo Sajón ('s) — Posesión",
      explanation: "El **genitivo sajón** es una forma muy natural en inglés de expresar **pertenencia** o **relación**. En español usamos 'de': *el libro de María*. En inglés, cambiamos el orden: *Maria's book* → 'el libro de María'.",
      examples: [
        "**Estructura:**",
        "👉 `Sujeto + 's + objeto poseído`",
        "",
        "**Ejemplos básicos:**",
        "• Maria's book → *el libro de María*",
        "• The company's website → *el sitio web de la empresa*",
        "• My brother's car → *el auto de mi hermano*",
        "",
        "**Reglas especiales:**",
        "",
        "**1. Si el sustantivo termina en -s (como 'James'):**",
        "Se puede escribir de dos formas:",
        "• James's car ✅ o James' car ✅ (ambas son aceptadas).",
        "",
        "**2. Si hay varios poseedores:**",
        "El apóstrofo va **después de la 's' plural**:",
        "• The teachers' lounge → *el salón de los profesores*.",
        "",
        "**3. También puede encadenarse para varias posesiones:**",
        "• My sister's friend's house → *la casa del amigo de mi hermana*.",
        "",
        "💡 **Comparación con 'of':**",
        "Usamos ''s' generalmente con **personas, animales o grupos vivos**.",
        "Usamos **of** con **cosas o conceptos inanimados**:",
        "",
        "> The door of the car ✅ / The car's door ✅ (ambos posibles)",
        "> The name of the book ✅ / ❌ The book's name (poco común)"
      ]
    }
  ],
  quiz: [
    {
      question: "She has ___ cat.",
      options: ["a", "an", "the", "some"],
      correctAnswer: 0,
      explanation: "Sustantivo singular que empieza con sonido consonante → usamos 'a'. Es la primera vez que mencionamos el gato, por lo que es indefinido."
    },
    {
      question: "I saw ___ elephant at the zoo.",
      options: ["a", "an", "the", "some"],
      correctAnswer: 1,
      explanation: "Comienza con sonido vocal → usamos 'an'. Es la primera vez que mencionamos el elefante, por lo que es indefinido."
    },
    {
      question: "___ sun rises in the east.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Único y específico: el sol → usamos 'the'. Solo hay un sol, por lo que es definido y específico."
    },
    {
      question: "I have two ___ (child).",
      options: ["childs", "children", "childrens", "child"],
      correctAnswer: 1,
      explanation: "Plural irregular de 'child' → 'children'. No se agrega solo 's', sino que cambia completamente la forma."
    },
    {
      question: "My ___ names are Tom and Jerry.",
      options: ["brother", "brothers'", "brother's", "brothers"],
      correctAnswer: 1,
      explanation: "Plural poseedor → apóstrofe después de la 's': 'brothers''. Hay varios hermanos y queremos mostrar posesión, por eso el apóstrofe va después de la 's' del plural."
    },
    {
      question: "This is my ___ (woman - plural).",
      options: ["womans", "women", "womanes", "womens"],
      correctAnswer: 1,
      explanation: "Plural irregular de 'woman' → 'women'. No se agrega solo 's', la 'a' cambia a 'e'."
    },
    {
      question: "There are many ___ in the room. (box)",
      options: ["boxs", "boxes", "boxies", "box"],
      correctAnswer: 1,
      explanation: "Termina en 'x', se agrega '-es' → 'boxes'. Las palabras que terminan en -s, -ss, -sh, -ch, -x, o -z forman el plural con '-es'."
    },
    {
      question: "___ water in the glass is cold.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Agua específica, ya mencionada o visible → usamos 'the'. Es el agua en el vaso (específica), no cualquier agua."
    },
    {
      question: "___ book on the table is mine.",
      options: ["A", "The", "An", "Some"],
      correctAnswer: 1,
      explanation: "Libro específico, ya identificado → usamos 'the'. Es el libro en la mesa (específico), no cualquier libro."
    },
    {
      question: "That is Maria___ car.",
      options: ["s", "s'", "'s", ""],
      correctAnswer: 2,
      explanation: "Genitivo sajón → Maria's car = el auto de María. Para expresar posesión, agregamos 's con apóstrofe antes de la 's'."
    }
  ]
};

