// Export all individual lessons
export { lesson1 } from './lesson-1';
export { lesson2 } from './lesson-2';
export { lesson3 } from './lesson-3';
export { lesson4 } from './lesson-4';
export { lesson5 } from './lesson-5';
export { lesson6 } from './lesson-6';
export { lesson7 } from './lesson-7';
export { lesson8 } from './lesson-8';

// Import all lessons for the lessons array
import { lesson1 } from './lesson-1';
import { lesson2 } from './lesson-2';
import { lesson3 } from './lesson-3';
import { lesson4 } from './lesson-4';
import { lesson5 } from './lesson-5';
import { lesson6 } from './lesson-6';
import { lesson7 } from './lesson-7';
import { lesson8 } from './lesson-8';

import type { LessonData } from '../lessons';

// Export the lessons array (maintaining the same interface)
export const allLessons: LessonData[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8
];
