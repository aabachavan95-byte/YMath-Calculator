import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
  borderColor?: string;
  iconBgColor?: string;
  gradientColor?: string;
}

export const TopicCard: React.FC<TopicCardProps> = ({ 
  topic, 
  onSelect,
  borderColor = 'border-primary',
  iconBgColor = 'bg-primary/5',
  gradientColor = 'from-white to-slate-50/50'
}) => {
  const subTopics = topic.subTopics || [];
  const displaySubTopics = subTopics.slice(0, 10); // Show up to 10 sub-subtopics

  return (
    <div className={`bg-gradient-to-br ${gradientColor} rounded-xl shadow-md overflow-hidden border-l-4 ${borderColor} flex flex-col h-full transition-transform hover:-translate-y-1 duration-300`}>
      <div className="p-3 sm:p-4 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${iconBgColor} flex-shrink-0`}>
            {React.cloneElement(topic.icon as React.ReactElement<any>, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight line-clamp-2">{topic.name}</h3>
            {topic.englishName && (
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">{topic.englishName}</p>
            )}
          </div>
        </div>

        {/* Subtopics List */}
        <div className="space-y-1 mb-3">
          {displaySubTopics.map((sub, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-1.5 text-slate-700 group cursor-pointer p-1.5 -ml-1.5 rounded-md hover:bg-black/5 transition-colors" 
              onClick={(e) => {
                e.stopPropagation();
                onSelect(sub);
              }}
            >
              <span className="text-orange-500 font-bold text-sm sm:text-base transition-transform group-hover:translate-x-0.5">›</span>
              <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                {sub.name.replace(/^\d+\)\s*/, '')}
              </span>
            </div>
          ))}
          {subTopics.length > 10 && (
            <p className="text-xs text-black font-extrabold italic pl-4 p-1.5">आणखी विषय...</p>
          )}
        </div>
      </div>

      {/* Footer Button */}
      <div className="p-3 pt-0 mt-auto">
        <button 
          onClick={() => onSelect(topic)}
          className="w-full py-2 px-3 bg-[#f5f0e8] text-slate-800 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#ede4d5] transition-colors active:scale-[0.98]"
        >
          <span>सराव करा</span>
          <span className="text-sm">›</span>
        </button>
      </div>
    </div>
  );
};
