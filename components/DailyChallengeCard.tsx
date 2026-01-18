
import React from 'react';
import { CalendarIcon } from './Icons';

interface DailyChallengeCardProps {
  onSelect: () => void;
}

export const DailyChallengeCard: React.FC<DailyChallengeCardProps> = ({ onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="group w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white border border-amber-500 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
    >
      <CalendarIcon className="w-6 h-6 mb-1 text-white/90" />
      <span className="text-lg font-bold">दैनंदिन आव्हान</span>
    </button>
  );
};
