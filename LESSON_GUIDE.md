# 📚 Guía para Añadir Nuevas Lecciones

Esta guía te explica cómo añadir nuevas lecciones a tu aplicación de inglés de manera rápida y consistente.

## 🎯 ¿Qué se ha mejorado?

### Antes:
- Cada pantalla tenía código duplicado (200+ líneas)
- Datos de lección mezclados con la presentación
- Navegación y progreso codificados manualmente
- Difícil mantener consistencia entre lecciones

### Ahora:
- **Una sola línea de código** por lección (después de configurar los datos)
- Datos centralizados en `/src/data/lessons.ts`
- Navegación y progreso automáticos
- Consistencia garantizada entre todas las lecciones

## 🚀 Cómo Añadir una Nueva Lección

### Paso 1: Añadir los Datos de la Lección

Edita el archivo `/src/data/lessons.ts` y añade tu nueva lección al array `lessons`:

```typescript
{
  id: 3, // Número de la lección
  title: "Present Simple Tense",
  description: "Aprende el presente simple en inglés",
  welcomeEmoji: "⏰", // Opcional
  pageTitle: "English Learning - Present Simple", // Opcional
  metaDescription: "Domina el presente simple en inglés", // Opcional
  learningPoints: [
    "Cómo formar oraciones afirmativas en presente simple",
    "Cuándo usar 'do' y 'does' en preguntas y negaciones",
    "Verbos regulares vs irregulares en tercera persona"
  ],
  content: [
    {
      topic: "Formación del Presente Simple",
      explanation: "El presente simple se usa para hablar de rutinas, hechos y verdades universales...",
      examples: [
        "I work every day. (Trabajo todos los días)",
        "She speaks English. (Ella habla inglés)",
        "The sun rises in the east. (El sol sale por el este)"
      ]
    }
    // Añade más secciones de contenido...
  ],
  quiz: [
    {
      question: "¿Cuál es la forma correcta para 'she' + 'work'?",
      options: ["she work", "she works", "she working", "she worked"],
      correctAnswer: 1,
      explanation: "En tercera persona singular (he, she, it) añadimos 's' al verbo."
    }
    // Añade más preguntas...
  ]
}
```

### Paso 2: Crear el Archivo de la Lección

1. **Copia el template:**
   ```bash
   cp src/templates/lesson-template.astro src/pages/lesson-3.astro
   ```

2. **Edita el archivo copiado:**
   ```typescript
   // Cambia solo esta línea:
   const LESSON_NUMBER = 3; // Tu número de lección
   
   // Y personaliza la descripción de bienvenida:
   description="Domina el presente simple con ejemplos prácticos y ejercicios interactivos"
   ```

### Paso 3: ¡Listo!

Tu nueva lección estará disponible en `/lesson-3` con:
- ✅ Navegación automática entre lecciones
- ✅ Indicador de progreso calculado automáticamente
- ✅ Diseño consistente con las demás lecciones
- ✅ Quiz interactivo funcionando
- ✅ SEO optimizado (título y meta descripción)

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── LessonPage.astro      # Componente reutilizable principal
│   └── LessonScreen.astro    # Componente del contenido de la lección
├── data/
│   └── lessons.ts           # Datos centralizados de todas las lecciones
├── pages/
│   ├── index.astro          # Lección 1 (refactorizada)
│   ├── lesson-2.astro       # Lección 2 (refactorizada)
│   └── lesson-X.astro       # Nuevas lecciones
└── templates/
    └── lesson-template.astro # Template para copiar
```

## 🔧 Funciones Auxiliares Disponibles

En `/src/data/lessons.ts` tienes estas funciones útiles:

```typescript
// Obtener datos de una lección específica
const lesson = getLessonById(3);

// Obtener lección anterior
const prev = getPreviousLesson(3);

// Obtener siguiente lección  
const next = getNextLesson(3);

// Obtener total de lecciones
const total = getTotalLessons();

// Generar navegación automática
const nav = generateLessonNavigation(3);
```

## 🎨 Personalización Avanzada

### Emojis y Títulos Personalizados

```typescript
{
  id: 4,
  title: "Past Tense",
  welcomeEmoji: "⏰", // Aparece en "Welcome to Lesson 4! ⏰"
  pageTitle: "English Learning - Past Tense", // Título del navegador
  metaDescription: "Aprende el pasado en inglés", // Meta descripción para SEO
  // ... resto de la configuración
}
```

### Navegación Personalizada

Si necesitas una navegación especial, puedes sobrescribir las propiedades:

```typescript
<LessonPage
  // ... otras propiedades
  previousLesson={{
    title: "Título personalizado",
    url: "/ruta-personalizada"
  }}
  nextLesson={{
    title: "Siguiente personalizado", 
    url: "/otra-ruta"
  }}
/>
```

## ✅ Checklist para Nueva Lección

- [ ] Añadir datos en `/src/data/lessons.ts`
- [ ] Copiar template a `/src/pages/lesson-X.astro`
- [ ] Actualizar `LESSON_NUMBER` en el archivo copiado
- [ ] Personalizar descripción de bienvenida
- [ ] Probar la lección en el navegador
- [ ] Verificar navegación entre lecciones
- [ ] Confirmar que el quiz funciona correctamente

## 🚨 Notas Importantes

1. **IDs únicos:** Cada lección debe tener un `id` único y secuencial
2. **Índices de respuestas:** En el quiz, `correctAnswer` usa índices base-0 (0, 1, 2, 3)
3. **Orden de lecciones:** Las lecciones se muestran según su `id`, no según el orden en el array
4. **Navegación automática:** La navegación se genera automáticamente basada en los IDs

## 🔍 Ejemplo Completo

Aquí tienes un ejemplo completo de cómo se vería una nueva lección:

**En `/src/data/lessons.ts`:**
```typescript
{
  id: 3,
  title: "Present Simple Tense",
  description: "Master the present simple tense",
  welcomeEmoji: "⏰",
  learningPoints: [
    "How to form affirmative sentences",
    "When to use 'do' and 'does'",
    "Third person singular rules"
  ],
  content: [
    {
      topic: "Affirmative Form",
      explanation: "In present simple, we use the base form of the verb...",
      examples: [
        "I play football. (Yo juego fútbol)",
        "She plays tennis. (Ella juega tenis)"
      ]
    }
  ],
  quiz: [
    {
      question: "Complete: She _____ English every day.",
      options: ["study", "studies", "studying", "studied"],
      correctAnswer: 1,
      explanation: "Third person singular adds 's' to the verb."
    }
  ]
}
```

**En `/src/pages/lesson-3.astro`:**
```typescript
---
import LessonPage from '../components/LessonPage.astro';
import { getLessonById, generateLessonNavigation, getTotalLessons } from '../data/lessons';

const LESSON_NUMBER = 3;
const lessonData = getLessonById(LESSON_NUMBER);
const navigation = generateLessonNavigation(LESSON_NUMBER);
const totalLessons = getTotalLessons();

if (!lessonData) {
  throw new Error(`Lesson ${LESSON_NUMBER} not found`);
}
---

<LessonPage
  lessonNumber={LESSON_NUMBER}
  totalLessons={totalLessons}
  title={lessonData.title}
  description="Master the present simple tense with practical examples and interactive exercises"
  learningPoints={lessonData.learningPoints}
  content={lessonData.content}
  quiz={lessonData.quiz}
  previousLesson={navigation.previousLesson}
  nextLesson={navigation.nextLesson}
  welcomeEmoji={lessonData.welcomeEmoji}
  pageTitle={lessonData.pageTitle}
  metaDescription={lessonData.metaDescription}
/>
```

¡Y eso es todo! Con estos simples pasos puedes añadir tantas lecciones como necesites manteniendo un código limpio y consistente. 🎉
