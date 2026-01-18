import type { UserProgress } from '../types';

const PROGRESS_KEY = 'yashaviMathProgress';

const getInitialProgress = (): UserProgress => ({
  totalQuestions: 0,
  totalCorrect: 0,
  topicStats: {},
  dailyActivity: {}
});

export const getProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored ? JSON.parse(stored) : getInitialProgress();
  } catch {
    return getInitialProgress();
  }
};

export const updateProgress = (topicKey: string, topicName: string, isCorrect: boolean) => {
  try {
    const progress = getProgress();
    const today = new Date().toISOString().split('T')[0];

    progress.totalQuestions += 1;
    if (isCorrect) progress.totalCorrect += 1;

    if (!progress.topicStats[topicKey]) {
      progress.topicStats[topicKey] = { name: topicName, total: 0, correct: 0 };
    }
    progress.topicStats[topicKey].total += 1;
    if (isCorrect) progress.topicStats[topicKey].correct += 1;

    progress.dailyActivity[today] = (progress.dailyActivity[today] || 0) + 1;

    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to update progress:", error);
  }
};

export const clearProgress = () => {
    try {
        localStorage.removeItem(PROGRESS_KEY);
        // Dispatch event if needed
    } catch (error) {
        console.error("Failed to clear progress", error);
    }
};