// Centralized lesson data configuration
export interface TableData {
  type: 'table';
  headers: string[];
  rows: string[][];
  alignments?: ('left' | 'center' | 'right')[];
}

export interface TitleData {
  type: 'title';
  text: string;
  emoji?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export interface ParagraphData {
  type: 'paragraph';
  content: TextPart[];
  className?: string;
}

export interface CodeData {
  type: 'code';
  code: string;
  inline?: boolean;
  language?: string;
  className?: string;
}

export interface ListData {
  type: 'list';
  items: TextPart[][];
  ordered?: boolean;
  className?: string;
}

export interface SeparatorData {
  type: 'separator';
  className?: string;
}

export interface TextPart {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  emoji?: string;
}

export type ItemType = string | TableData | TitleData | ParagraphData | CodeData | ListData | SeparatorData;

export interface LessonContent {
  topic: string;
  explanation: string;
  examples?: ItemType[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface LessonData {
  id: number;
  title: string;
  description: string;
  learningPoints: string[];
  content: LessonContent[];
  quiz: QuizQuestion[];
  // Optional customizations
  welcomeEmoji?: string;
  pageTitle?: string;
  metaDescription?: string;
}

// Import all lessons from individual files
import { allLessons } from './lessons/index';

// All lessons configuration - now imported from individual files
export const lessons = allLessons;

// Helper functions
export function getLessonById(id: number): LessonData | undefined {
  return lessons.find((lesson: LessonData) => lesson.id === id);
}

export function getPreviousLesson(currentId: number): LessonData | undefined {
  return lessons.find((lesson: LessonData) => lesson.id === currentId - 1);
}

export function getNextLesson(currentId: number): LessonData | undefined {
  return lessons.find((lesson: LessonData) => lesson.id === currentId + 1);
}

export function getTotalLessons(): number {
  return lessons.length;
}

// Generate navigation data for a lesson
export function generateLessonNavigation(lessonId: number) {
  const previousLesson = getPreviousLesson(lessonId);
  const nextLesson = getNextLesson(lessonId);
  
  return {
    previousLesson: previousLesson ? {
      title: previousLesson.title,
      url: previousLesson.id === 1 ? '/' : `/lesson-${previousLesson.id}`
    } : undefined,
    nextLesson: nextLesson ? {
      title: nextLesson.title,
      url: `/lesson-${nextLesson.id}`
    } : undefined
  };
}