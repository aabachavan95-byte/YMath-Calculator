import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(topic)}
      className="group flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light focus:ring-offset-transparent"
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {topic.icon}
      </div>
      <span className="mt-2 text-center text-sm font-semibold text-slate-700 transition-colors">{topic.name}</span>
    </button>
  );
};