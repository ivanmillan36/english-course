// Export all individual lessons
export { lesson1 } from './lesson-1';
export { lesson2 } from './lesson-2';
export { lesson3 } from './lesson-3';

// Import all lessons for the lessons array
import { lesson1 } from './lesson-1';
import { lesson2 } from './lesson-2';
import { lesson3 } from './lesson-3';

import type { LessonData } from '../lessons';

// Export the lessons array (maintaining the same interface)
export const allLessons: LessonData[] = [
  lesson1,
  lesson2,
  lesson3
];
