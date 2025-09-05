import type { LessonData } from '../lessons';

export const lesson4: LessonData = {
  id: 4,
  title: "Fundamentos Esenciales: Tu Primera Toolbox en Inglés",
  description: "Esta es la base de todo. No aprenderás teoría complicada, sino las palabras y frases que necesitas para sobrevivir en cualquier situación desde el primer día. Dominarás cómo decir la fecha, describir el mundo a tu alrededor y entender cantidades. Es práctico, directo y te dará la confianza para empezar a usar el inglés inmediatamente.",
  welcomeEmoji: "🔧",
  pageTitle: "English Learning - Números, Fechas y Colores",
  metaDescription: "Aprende los fundamentos esenciales del inglés: números cardinales y ordinales, días de la semana, meses del año y colores básicos",
  learningPoints: [
    "A contar y usar números en inglés del 1 al 100, tanto cardinales (para contar) como ordinales (para poner cosas en orden)",
    "A nombrar los días de la semana, los meses del año y las estaciones con confianza",
    "A identificar y usar colores básicos y adjetivos comunes para describir personas, objetos y sentimientos"
  ],
  content: [
    {
      topic: "Números: Contando y Ordenando el Mundo",
      explanation: "Los números son universales. Los usarás para decir tu edad, tu número de teléfono, precios, cantidades y para poner cosas en orden (primero, segundo, tercero...). Los dividimos en dos tipos: **Cardinales (Cardinal Numbers):** Son los números normales que usas para contar (one, two, three). **Ordinales (Ordinal Numbers):** Indican orden o posición (first, second, third). La clave está en memorizar los patrones. Del 1 al 12 son únicos, del 13 al 19 casi todos terminan en \"-teen\", y las decenas (20, 30, 40...) terminan en \"-ty\". Los ordinales, en su mayoría, se forman añadiendo \"-th\" al número cardinal.",
      examples: [
        "**Cardinales:**",
        "1-10: one, two, three, four, five, six, seven, eight, nine, ten",
        "11-15: eleven, twelve, thirteen, fourteen, fifteen",
        "Decenas: twenty (20), thirty (30), forty (40), fifty (50), sixty (60)",
        "Números compuestos: twenty-**one** (21), thirty-**five** (35), ninety-**nine** (99)",
        "**Ordinales:**",
        "1st - first (No es \"oneth\", es irregular)",
        "2nd - second (No es \"twoth\", es irregular)",
        "3rd - third (No es \"threeth\", es irregular)",
        "4th - fourth",
        "5th - fifth (cambia \"ve\" a \"f\")",
        "10th - tenth",
        "21st - twenty-**first** (¡Usamos el ordinal solo en el último número!)"
      ]
    },
    {
      topic: "Tiempo y Fechas: Organizando tu Vida",
      explanation: "Para quedar con alguien, planificar un viaje o simplemente saber qué día es, necesitas este vocabulario. Una regla crucial en inglés: **los días de la semana y los meses del año siempre se escriben con MAYÚSCULA**. No es opcional, es una regla gramatical.",
      examples: [
        "**Días de la semana (Days of the Week):** Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
        "*\"I play soccer on **Saturday**.\"* (Juego al fútbol el sábado.)",
        "**Meses del año (Months of the Year):** January, February, March, April, May, June, July, August, September, October, November, December",
        "*\"My birthday is in **October**.\"* (Mi cumpleaños es en octubre.)",
        "**Estaciones (Seasons):** Spring, Summer, Autumn (o Fall), Winter",
        "*\"It snows in **winter**.\"* (Nieva en invierno.) *Nota: Las estaciones no suelen llevar mayúscula.*"
      ]
    },
    {
      topic: "Colores y Adjetivos: Pintando y Describiendo tu Realidad",
      explanation: "Estas palabras te permiten dar información extra y hacer tus frases más interesantes. Los **colores** son adjetivos. Los **adjetivos comunes** describen cualidades, tamaños, estados de ánimo y más. En inglés, el adjetivo casi siempre va **ANTES** del sustantivo que describe (a diferencia del español). Ejemplo: \"A **big** house\" (Una casa grande).",
      examples: [
        "**Colores Básicos (Basic Colors):** Red, blue, yellow, green, orange, purple, black, white, brown, gray",
        "*\"I have a **red** car.\"* (Tengo un coche rojo.)",
        "**Adjetivos Comunes (Common Adjectives):**",
        "Tamaño: **big** (grande), **small** (pequeño), **long** (largo), **short** (corto)",
        "Estado de ánimo: **happy** (feliz), **sad** (triste), **tired** (cansado)",
        "Otras características: **good** (bueno), **bad** (malo), **hot** (caliente), **cold** (frío), **new** (nuevo), **old** (viejo)",
        "*\"She is a **happy** person.\"* (Ella es una persona feliz.)",
        "*\"It's a **long** road.\"* (Es un camino largo.)"
      ]
    }
  ],
  quiz: [
    {
      question: "¿Cómo se escribe el número 43 en inglés?",
      options: ["forty-three", "fourty-three", "forty three"],
      correctAnswer: 0,
      explanation: "Sigue la regla: decena (forty) + guión + unidad (three). 'Fourty' es un error común, la decena correcta es 'forty' (sin 'u'). Los números compuestos llevan guión."
    },
    {
      question: "¿Cuál es la forma ordinal de \"five\" (5)?",
      options: ["fiveth", "fifth", "fifeth"],
      correctAnswer: 1,
      explanation: "Es irregular: five → fifth (cambia \"ve\" por \"f\" y añade \"th\")."
    },
    {
      question: "La frase \"My birthday is on july\" tiene un error. ¿Cuál es?",
      options: ["La preposición \"on\"", "La palabra \"birthday\"", "La palabra \"july\""],
      correctAnswer: 2,
      explanation: "Los meses siempre llevan mayúscula: **July**. Además, se usa \"in\" para meses: \"My birthday is in July\"."
    },
    {
      question: "¿Cómo se dice \"martes\" en inglés?",
      options: ["Monday", "Tuesday", "Thursday"],
      correctAnswer: 1,
      explanation: "Tuesday es martes. Monday es lunes y Thursday es jueves."
    },
    {
      question: "Si algo es \"small\", es...",
      options: ["Grande", "Pequeño", "Feliz"],
      correctAnswer: 1,
      explanation: "\"Small\" significa pequeño. \"Big\" es grande y \"happy\" es feliz."
    },
    {
      question: "¿Cuál es el orden CORRECTO de la frase en inglés?",
      options: ["house big", "big house", "A big house"],
      correctAnswer: 1,
      explanation: "En inglés, el adjetivo va ANTES del sustantivo: \"big house\". La opción C también es correcta pero incluye el artículo."
    },
    {
      question: "¿Cómo se dice \"tercer\" en inglés (por ejemplo, \"el tercer piso\")?",
      options: ["three", "third", "threeth"],
      correctAnswer: 1,
      explanation: "\"Third\" es el ordinal (tercero). \"Three\" es el cardinal (tres) y \"threeth\" no existe."
    },
    {
      question: "¿Qué estación viene después del invierno (winter)?",
      options: ["Spring (Primavera)", "Summer (Verano)", "Fall (Otoño)"],
      correctAnswer: 0,
      explanation: "El ciclo es: Winter → Spring → Summer → Autumn/Fall."
    },
    {
      question: "El color entre \"red\" y \"yellow\" es...",
      options: ["Green", "Orange", "Purple"],
      correctAnswer: 1,
      explanation: "El naranja (orange) se hace con rojo y amarillo. Green se hace con blue y yellow, purple se hace con blue y red."
    },
    {
      question: "La frase \"He is a sad boy\" significa:",
      options: ["Él es un niño feliz", "Él es un niño alto", "Él es un niño triste"],
      correctAnswer: 2,
      explanation: "\"Sad\" significa triste. \"Happy\" sería feliz y \"tall\" sería alto."
    }
  ]
};
