
import React, { useState, useEffect, useCallback } from 'react';
import { getProgress, clearProgress } from '../services/progressService';
import type { UserProgress, TopicStats } from '../types';
// Fixed missing TrophyIcon in the imports
import { BackArrowIcon, TrashIcon, CheckIcon, FireIcon, ChartBarIcon, TrophyIcon } from './Icons';

interface ProgressDashboardProps {
  onBack: () => void;
}

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

  // Calculate Last 7 Days Activity for the Bar Chart
  const getLast7DaysData = () => {
    const data = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateKey = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('mr-IN', { day: 'numeric', month: 'short' });
      data.push({
        label,
        value: progress.dailyActivity[dateKey] || 0
      });
    }
    return data;
  };

  const barData = getLast7DaysData();
  const maxValue = Math.max(...barData.map(d => d.value), 5); // Ensure at least scale of 5

  const overallAccuracy = progress.totalQuestions > 0 
    ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100) 
    : 0;

  const todayStr = new Date().toISOString().split('T')[0];
  const questionsToday = progress.dailyActivity[todayStr] || 0;

  const sortedTopics = (Object.entries(progress.topicStats) as [string, TopicStats][]).sort(([, a], [, b]) => {
      if (b.total !== a.total) return b.total - a.total;
      const accuracyA = (a.correct / a.total);
      const accuracyB = (b.correct / b.total);
      return accuracyB - accuracyA;
  });

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-slate-50 min-h-screen">
       <div className="flex justify-between items-center mb-6 gap-4">
            <button 
                onClick={onBack} 
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95">
                <BackArrowIcon />
                <span>मागे जा</span>
            </button>
            {progress.totalQuestions > 0 && (
                <button 
                    onClick={handleClearProgress}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150 active:scale-95"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            )}
        </div>

      <div className="flex flex-col items-center mb-8">
          <ChartBarIcon className="w-24 h-24 text-primary mb-2" />
          <h1 className="text-3xl font-bold text-slate-800">तुमची प्रगती</h1>
      </div>

      {/* Main Activity Bar Chart - Replacing the Circular Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 mb-8">
          <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-700">साप्ताहिक सराव कल</h2>
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-sm"></div>
                  <span className="text-xs text-slate-500 font-medium">प्रश्न संख्या</span>
              </div>
          </div>
          
          <div className="relative h-48 w-full flex items-end justify-between gap-2 pt-6">
              {/* Y-Axis Lines (Simplified like the reference image) */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-l border-b border-slate-200">
                  <div className="w-full border-t border-slate-100"></div>
                  <div className="w-full border-t border-slate-100"></div>
                  <div className="w-full border-t border-slate-100"></div>
                  <div className="w-full border-t border-slate-100"></div>
                  <div className="w-full"></div>
              </div>

              {barData.map((d, i) => {
                  const heightPercent = (d.value / maxValue) * 100;
                  return (
                      <div key={i} className="relative flex-1 flex flex-col items-center group">
                          <div 
                              className="w-full max-w-[40px] bg-primary rounded-t-sm transition-all duration-500 ease-out hover:bg-primary-dark relative"
                              style={{ height: `${heightPercent}%` }}
                          >
                              {/* Tooltip on hover */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                  {d.value} प्रश्न
                              </div>
                          </div>
                          <span className="text-[10px] text-slate-500 mt-2 font-medium rotate-[-45deg] sm:rotate-0 origin-center truncate w-full text-center">
                              {d.label}
                          </span>
                      </div>
                  );
              })}
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Total Questions */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
            <div>
                <p className="text-3xl font-bold text-slate-800">{progress.totalQuestions}</p>
                <p className="text-slate-500 text-sm font-medium">एकूण सोडवलेले प्रश्न</p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full shadow-inner">
                <CheckIcon className="w-8 h-8"/>
            </div>
        </div>

        {/* Today's Activity */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
             <div>
                <p className="text-3xl font-bold text-slate-800">{questionsToday}</p>
                <p className="text-slate-500 text-sm font-medium">आज सोडवलेले प्रश्न</p>
            </div>
             <div className="p-3 bg-orange-100 text-orange-600 rounded-full shadow-inner">
                <FireIcon className="w-8 h-8"/>
            </div>
        </div>

        {/* Accuracy Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
             <div>
                <p className="text-3xl font-bold text-slate-800">{overallAccuracy}%</p>
                <p className="text-slate-500 text-sm font-medium">एकूण अचूकता</p>
            </div>
             <div className="p-3 bg-green-100 text-green-600 rounded-full shadow-inner">
                <TrophyIcon className="w-8 h-8"/>
            </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 text-slate-700 border-b-2 border-primary w-max pb-1">विषयानुसार कामगिरी</h2>
      
      {sortedTopics.length > 0 ? (
        <div className="space-y-4">
            {sortedTopics.map(([key, stats]) => {
                const accuracy = Math.round((stats.correct / stats.total) * 100);
                const barColor = accuracy >= 80 ? 'bg-green-500' : accuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500';
                
                return (
                    <div key={key} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-slate-800">{stats.name}</h3>
                            <span className="text-sm font-bold text-slate-600">{stats.correct}/{stats.total} ({accuracy}%)</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3 shadow-inner">
                            <div className={`h-3 rounded-full ${barColor} transition-all duration-1000 ease-out`} style={{ width: `${accuracy}%` }}></div>
                        </div>
                    </div>
                );
            })}
        </div>
      ) : (
          <div className="text-center py-10 px-4 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200">
            <p className="text-slate-800 font-medium">अद्याप कोणताही डेटा उपलब्ध नाही.</p>
            <p className="text-sm text-slate-500 mt-2">सराव मोडमध्ये प्रश्न सोडवल्यानंतर तुमची प्रगती येथे दिसेल.</p>
        </div>
      )}
    </div>
  );
};
