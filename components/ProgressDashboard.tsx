
import React, { useState, useEffect, useCallback } from 'react';
import { getProgress, clearProgress } from '../services/progressService';
import type { UserProgress, TopicStats } from '../types';
import { BackArrowIcon, TrashIcon, CheckIcon, CrossIcon } from './Icons';

interface ProgressDashboardProps {
  onBack: () => void;
}

// Custom Pie Chart that matches the reference image style and works well on mobile
const PerformancePieChart: React.FC<{ grades: { label: string, value: number, color: string }[] }> = ({ grades }) => {
    const total = grades.reduce((acc, curr) => acc + curr.value, 0);
    
    // Default mock data if no progress exists
    const displayGrades = total === 0 ? [
        { label: 'Grade A', value: 50, color: '#34a853' },
        { label: 'Grade B', value: 30, color: '#4285f4' },
        { label: 'Grade C', value: 20, color: '#ef4444' }
    ] : grades;
    
    const displayTotal = total === 0 ? 100 : total;
    let cumulativePercent = 0;

    const getCoordinatesForPercent = (percent: number) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
            <div className="relative w-full aspect-square max-w-[320px] mb-2 px-8">
                <svg viewBox="-1.6 -1.6 3.2 3.2" className="w-full h-full -rotate-90 overflow-visible">
                    {displayGrades.map((grade, index) => {
                        if (grade.value === 0) return null;
                        const startPercent = cumulativePercent;
                        const slicePercent = grade.value / displayTotal;
                        const endPercent = cumulativePercent + slicePercent;
                        cumulativePercent = endPercent;

                        const [startX, startY] = getCoordinatesForPercent(startPercent);
                        const [endX, endY] = getCoordinatesForPercent(endPercent);
                        const largeArcFlag = slicePercent > 0.5 ? 1 : 0;

                        const pathData = [
                            `M ${startX} ${startY}`,
                            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                            `L 0 0`,
                        ].join(' ');

                        // Calculate label position (outside the slice)
                        const labelPercent = startPercent + (slicePercent / 2);
                        const [lx, ly] = getCoordinatesForPercent(labelPercent);
                        
                        // Increase factor for Grade A to move it more to the right as requested
                        const factor = grade.label === 'Grade A' ? 1.6 : 1.35;
                        const labelX = lx * factor;
                        const labelY = ly * factor;

                        return (
                            <g key={index}>
                                <path d={pathData} fill={grade.color} stroke="#fff" strokeWidth="0.015" />
                                <text 
                                    x={labelX} 
                                    y={labelY} 
                                    fill={grade.color} 
                                    fontSize="0.14" 
                                    fontWeight="700"
                                    textAnchor={labelX > 0.1 ? "start" : (labelX < -0.1 ? "end" : "middle")} 
                                    dominantBaseline="middle"
                                    transform={`rotate(90, ${labelX}, ${labelY})`}
                                    className="font-sans select-none"
                                >
                                    {grade.label}: {Math.round(slicePercent * 100)}%
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
            
            {/* Legend - Responsive Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4">
                {displayGrades.map((grade, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm shadow-sm" style={{ backgroundColor: grade.color }}></div>
                        <span className="text-[12px] sm:text-[13px] font-bold text-slate-500 uppercase tracking-tight">{grade.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ onBack }) => {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleClearProgress = useCallback(() => {
    if (window.confirm("तुम्हाला नक्कीच सर्व प्रगती डेटा हटवायचा आहे का?")) {
      clearProgress();
      setProgress(getProgress());
    }
  }, []);

  if (!progress) return null;

  const totalCorrect = progress.totalCorrect;
  const totalQuestions = progress.totalQuestions;
  const totalIncorrect = totalQuestions - totalCorrect;
  const correctPercent = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
  const incorrectPercent = totalQuestions > 0 ? (totalIncorrect / totalQuestions) * 100 : 0;

  const calculateGrades = () => {
      let gradeA = 0, gradeB = 0, gradeC = 0;
      const statsArray = Object.values(progress.topicStats) as TopicStats[];
      
      if (statsArray.length === 0) return [];

      statsArray.forEach(stats => {
          const accuracy = (stats.correct / stats.total) * 100;
          if (accuracy >= 80) gradeA++;
          else if (accuracy >= 50) gradeB++;
          else gradeC++;
      });
      
      return [
          { label: 'Grade A', value: gradeA, color: '#34a853' },
          { label: 'Grade B', value: gradeB, color: '#4285f4' },
          { label: 'Grade C', value: gradeC, color: '#ef4444' },
      ].filter(g => g.value > 0);
  };

  const gradesData = calculateGrades();
  
  const topics = (Object.entries(progress.topicStats) as [string, TopicStats][])
    .sort(([, a], [, b]) => b.total - a.total)
    .slice(0, 5);

  const displayTopics = topics.length > 0 ? topics : [
      ['math', { name: 'Math', total: 10, correct: 7.5 }],
      ['science', { name: 'Science', total: 10, correct: 7.6 }],
      ['english', { name: 'English', total: 10, correct: 7.58 }],
      ['hindi', { name: 'Hindi', total: 10, correct: 7.8 }],
      ['sst', { name: 'SST', total: 10, correct: 7.7 }],
  ] as unknown as [string, TopicStats][];

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
       <div className="flex justify-between items-center mb-6">
            <button 
                onClick={onBack} 
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark transition-all active:scale-95">
                <BackArrowIcon />
                <span>मागे जा</span>
            </button>
            {progress.totalQuestions > 0 && (
                <button 
                    onClick={handleClearProgress}
                    className="p-1.5 text-red-400 hover:text-red-600 rounded-lg transition-colors"
                    title="प्रगती हटवा"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            )}
        </div>

      {/* Performance Statistics - Correct (Green) and Incorrect (Red) */}
      <div className="max-w-md mx-auto mb-10 p-5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">कामगिरी सारांश (Performance Summary)</h2>
          <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-green-200 shadow-sm text-center">
                  <div className="flex justify-center mb-1 text-green-500">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase">बरोबर उत्तरे</p>
                  <p className="text-2xl font-black text-green-600">{totalCorrect}</p>
                  <p className="text-[11px] font-bold text-green-500 mt-1">{correctPercent.toFixed(1)}%</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm text-center">
                  <div className="flex justify-center mb-1 text-red-500">
                    <CrossIcon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase">चुकीची उत्तरे</p>
                  <p className="text-2xl font-black text-red-600">{totalIncorrect}</p>
                  <p className="text-[11px] font-bold text-red-500 mt-1">{incorrectPercent.toFixed(1)}%</p>
              </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-xs font-medium text-slate-500">एकूण प्रश्न: <span className="font-bold text-slate-700">{totalQuestions}</span></p>
          </div>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-14 overflow-hidden">
          <h2 className="text-center text-[16px] font-bold text-slate-700 mb-6 font-sans">Grade वितरण (Grade Distribution)</h2>
          <PerformancePieChart grades={gradesData} />
      </div>

      {/* Subject Averages Bar Chart Section */}
      <div className="mt-10 max-w-2xl mx-auto px-2">
          <h2 className="text-center text-[16px] font-bold text-slate-700 mb-6 font-sans">विषयानुसार सरासरी (Subject Averages)</h2>
          
          <div className="relative h-56 sm:h-64 w-full flex items-end justify-between px-2 pt-4 border-b border-slate-400">
              {/* Y-Axis lines and labels */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none -left-8 w-[calc(100%+32px)]">
                  {[100, 75, 50, 25, 0].map(val => (
                      <div key={val} className="relative w-full border-t border-slate-200 border-dotted flex items-center h-0">
                          <span className="absolute -left-2 text-[10px] sm:text-[12px] font-bold text-slate-400 w-6 text-right pr-2">{val}</span>
                      </div>
                  ))}
              </div>

              {displayTopics.map(([key, stats]) => {
                  const avg = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
                  const heightPercent = avg;
                  
                  return (
                      <div key={key} className="relative flex-1 flex flex-col items-center group h-full">
                          <div className="absolute inset-x-0.5 sm:inset-x-1 top-0 bottom-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity z-0 border-x border-slate-200"></div>

                          <div className="absolute bottom-full mb-3 bg-white border border-slate-200 shadow-xl rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-150 z-20 pointer-events-none text-left transform -translate-y-1">
                              <p className="text-[12px] font-bold text-slate-800 border-b border-slate-100 pb-1 mb-1">{stats.name}</p>
                              <p className="text-[11px] text-blue-600 font-bold whitespace-nowrap">Average Marks : {avg.toFixed(1)}</p>
                          </div>

                          <div 
                              className="w-[80%] sm:w-16 bg-[#4285f4] transition-all duration-700 ease-out z-10"
                              style={{ height: `${heightPercent}%` }}
                          >
                          </div>

                          <div className="absolute top-full mt-2 w-full text-center">
                              <span className="text-[10px] sm:text-[13px] text-slate-500 font-bold block truncate px-0.5">
                                  {stats.name}
                              </span>
                          </div>
                      </div>
                  );
              })}
          </div>

          <div className="flex items-center justify-center gap-2 mt-14 pb-10">
              <div className="w-5 h-3 bg-[#4285f4] rounded-sm"></div>
              <span className="text-[12px] sm:text-[13px] text-slate-600 font-bold">Average Marks</span>
          </div>
      </div>
    </div>
  );
};
