import React from 'react';
import type { Topic } from '../types';

interface MainTopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
  borderColor?: string;
  iconBgColor?: string;
}

export const MainTopicCard: React.FC<MainTopicCardProps> = ({ 
  topic, 
  onSelect, 
  borderColor = 'border-orange-500',
  iconBgColor = 'bg-orange-50'
}) => {
  // Extract subtopics for the list (limit to 8 as in image)
  const subTopics = topic.subTopics || [];
  const displaySubTopics = subTopics.slice(0, 4);

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${borderColor} flex flex-col h-full transition-transform hover:-translate-y-1 duration-300`}>
      <div className="p-3 sm:p-4 flex-grow">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${iconBgColor} flex-shrink-0`}>
            {React.cloneElement(topic.icon as React.ReactElement<any>, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 leading-tight truncate">{topic.name}</h3>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">{topic.englishName}</p>
          </div>
        </div>

        {/* Subtopics List */}
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          {displaySubTopics.map((sub, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-1.5 sm:gap-2 text-slate-700 group cursor-pointer" 
              onClick={() => onSelect(sub)}
            >
              <span className="text-orange-500 font-bold text-sm sm:text-base">›</span>
              <span className="text-[11px] sm:text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                {sub.name.replace(/^\d+\)\s*/, '')}
              </span>
            </div>
          ))}
          {subTopics.length > 4 && (
            <p className="text-[10px] text-black font-extrabold italic pl-4">आणखी विषय...</p>
          )}
        </div>
      </div>

      {/* Footer Button */}
      <div className="p-2 sm:p-4 pt-0 mt-auto">
        <button 
          onClick={() => onSelect(topic)}
          className="w-full py-2 sm:py-2.5 px-2 sm:px-4 bg-[#f5f0e8] text-slate-800 font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl flex items-center justify-center gap-1 sm:gap-2 hover:bg-[#ede4d5] transition-colors active:scale-[0.98] whitespace-nowrap overflow-hidden"
        >
          <span className="truncate">{topic.name} सोडवा</span>
          <span className="text-sm sm:text-base flex-shrink-0">›</span>
        </button>
      </div>
    </div>
  );
};
