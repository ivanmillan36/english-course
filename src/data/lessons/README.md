# Lessons Structure

This directory contains individual lesson files for better organization and maintainability.

## File Structure

```
lessons/
├── index.ts          # Exports all lessons and combines them into allLessons array
├── lesson-1.ts       # Lesson 1: English Fundamentals - Alphabet, Spelling & Punctuation
├── lesson-2.ts       # Lesson 2: Parts of Speech
├── lesson-3.ts       # Lesson 3: Present Simple Tense
└── README.md         # This file
```

## Adding a New Lesson

To add a new lesson (e.g., lesson-4):

1. **Create the lesson file**: `lesson-4.ts`
   ```typescript
   import type { LessonData } from '../lessons';

   export const lesson4: LessonData = {
     id: 4,
     title: "Your Lesson Title",
     description: "Your lesson description...",
     // ... rest of the lesson data
   };
   ```

2. **Update the index file**: Add the new lesson to `index.ts`
   ```typescript
   // Add the import
   export { lesson4 } from './lesson-4';
   import { lesson4 } from './lesson-4';

   // Add to the allLessons array
   export const allLessons: LessonData[] = [
     lesson1,
     lesson2,
     lesson3,
     lesson4  // Add here
   ];
   ```

3. **Create the page file**: Create `src/pages/lesson-4.astro` following the pattern of existing lesson pages.

## Benefits of This Structure

- **Maintainability**: Each lesson is in its own file, making it easier to edit and maintain
- **Scalability**: Easy to add new lessons without making the main file too large
- **Organization**: Clear separation of concerns
- **Collaboration**: Multiple developers can work on different lessons simultaneously
- **Version Control**: Changes to individual lessons don't affect other lessons in git history
