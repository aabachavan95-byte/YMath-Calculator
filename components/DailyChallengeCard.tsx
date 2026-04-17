
import React from 'react';
import { CalendarIcon } from './Icons';

interface DailyChallengeCardProps {
  onSelect: () => void;
}

export const DailyChallengeCard: React.FC<DailyChallengeCardProps> = ({ onSelect }) => {
  return (
    <div className="mb-8 w-full px-1">
      <button
        onClick={onSelect}
        style={{
          background: 'linear-gradient(to right, #f59e0b, #ea580c)',
          boxShadow: '0 4px 14px 0 rgba(234, 88, 12, 0.39)',
        }}
        className="w-full flex flex-col items-center justify-center py-8 text-white rounded-xl transition-all duration-300 active:scale-[0.98] border-none"
      >
        <CalendarIcon className="w-8 h-8 mb-2 text-white" />
        <h3 className="text-xl font-bold text-white tracking-wide">दैनंदिन आव्हान</h3>
      </button>
    </div>
  );
};
