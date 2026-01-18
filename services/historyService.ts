import type { HistoryItem } from '../types';

const HISTORY_KEY = 'yashaviMathHistory';
const MAX_HISTORY_ITEMS = 50;

export const getHistory = (): HistoryItem[] => {
    try {
        const storedHistory = localStorage.getItem(HISTORY_KEY);
        return storedHistory ? JSON.parse(storedHistory) : [];
    } catch (error) {
        console.error("Could not load history from localStorage", error);
        return [];
    }
};

type HistoryItemPayload = Omit<HistoryItem, 'id' | 'timestamp'>;

export const addHistoryItem = (item: HistoryItemPayload): void => {
    const history = getHistory();
    const newItem: HistoryItem = {
        ...item,
        id: new Date().toISOString(),
        timestamp: Date.now()
    };
    const updatedHistory = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error("Could not save history to localStorage", error);
    }
};

export const clearHistory = (): void => {
    try {
        localStorage.removeItem(HISTORY_KEY);
        // Dispatch an event to notify components to update
        window.dispatchEvent(new Event('historyCleared'));
    } catch (error) {
        console.error("Could not clear history from localStorage", error);
    }
};
