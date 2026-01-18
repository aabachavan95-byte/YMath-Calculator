
import type * as React from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface ValidationRule {
  min?: number;
  max?: number;
  isInteger?: boolean;
  errorMessage: string;
}

export interface TopicInput {
  key: string;
  label: string;
  type: 'number' | 'text' | 'textarea';
  placeholder: string;
  unit?: string;
  validation?: ValidationRule;
}

export interface Topic {
  key: string;
  name: string;
  // Fix: Use React.ReactElement to avoid JSX namespace issues in a .ts file.
  icon: React.ReactElement;
  inputs?: TopicInput[];
  promptTemplate?: (inputs: Record<string, string>) => string;
  mcqPromptTemplate?: (difficulty: Difficulty) => string;
  expertPromptTemplate?: () => string;
  subTopics?: Topic[];
}

export interface GeminiResponse {
  answer: string;
  explanation: string;
}

export interface McqResponse {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface HistoryItem {
  id: string;
  type: 'text' | 'photo';
  topicName: string;
  inputs?: Record<string, string>;
  imagePreview?: string;
  prompt?: string;
  result: GeminiResponse;
  timestamp: number;
}

export interface TopicStats {
  name: string;
  total: number;
  correct: number;
}

export interface UserProgress {
  totalQuestions: number;
  totalCorrect: number;
  topicStats: Record<string, TopicStats>;
  dailyActivity: Record<string, number>;
}
