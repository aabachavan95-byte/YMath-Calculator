
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { DailyChallengeCard } from './components/DailyChallengeCard';
import { MainTopicCard } from './components/MainTopicCard';
import { Calculator } from './components/Calculator';
import { PhotoSolver } from './components/PhotoSolver';
import { History } from './components/History';
import { PracticeMode } from './components/PracticeMode';
import { DailyChallenge } from './components/DailyChallenge';
import { BottomNav } from './components/BottomNav';
import { SplashScreen } from './components/SplashScreen';
import { CameraIcon, BackArrowIcon, SearchIcon, CalendarIcon } from './components/Icons';
import { TOPICS } from './constants';
import type { Topic } from './types';

export type View = 'home' | 'calculator' | 'photo' | 'subtopics' | 'history' | 'practice' | 'daily_challenge';

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [view, setView] = useState<View>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentPracticeTopic, setCurrentPracticeTopic] = useState<Topic | null>(null);
  const [topicTrail, setTopicTrail] = useState<Topic[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Topic[][]>([]);
  const [showChallengeReminder, setShowChallengeReminder] = useState(false);

  useEffect(() => {
    if (view !== 'home') {
      setSearchQuery('');
    }
  }, [view]);

  // Check for Daily Challenge inactivity
  useEffect(() => {
    if (!isSplashVisible) {
      const lastCompletion = localStorage.getItem('yashaviLastChallengeDate');
      if (!lastCompletion) {
        // New user or key missing, initialize it
        localStorage.setItem('yashaviLastChallengeDate', new Date().toISOString());
      } else {
        const lastDate = new Date(lastCompletion);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        // If more than 2 days have passed, show reminder
        if (diffDays >= 2) {
          setShowChallengeReminder(true);
        }
      }
    }
  }, [isSplashVisible]);

  const searchTopicsRecursive = useCallback((topics: Topic[], query: string, path: Topic[] = []): Topic[][] => {
    const lowerCaseQuery = query.toLowerCase().trim();
    if (!lowerCaseQuery) return [];

    let results: Topic[][] = [];
    for (const topic of topics) {
        const currentPath = [...path, topic];
        if (topic.name.toLowerCase().includes(lowerCaseQuery)) {
            results.push(currentPath);
        } else if (topic.subTopics?.length) {
            results = results.concat(searchTopicsRecursive(topic.subTopics, query, currentPath));
        }
    }
    return results;
  }, []);
  
  useEffect(() => {
    if (searchQuery.trim()) {
        const results = searchTopicsRecursive(TOPICS, searchQuery);
        setSearchResults(results);
    } else {
        setSearchResults([]);
    }
  }, [searchQuery, searchTopicsRecursive]);

  const currentParentTopic = topicTrail.length > 0 ? topicTrail[topicTrail.length - 1] : null;

  const handleTopicSelect = useCallback((topic: Topic) => {
    if (topic.subTopics && topic.subTopics.length > 0) {
      setTopicTrail(prev => [...prev, topic]);
      setSelectedTopic(null);
      setView('subtopics');
    } else {
      setSelectedTopic(topic);
      setView('calculator');
    }
  }, []);

  const handleSearchResultSelect = useCallback((path: Topic[]) => {
      const targetTopic = path[path.length - 1];
      const parentTrail = path.slice(0, -1);

      if (targetTopic.subTopics && targetTopic.subTopics.length > 0) {
          setTopicTrail(path);
          setSelectedTopic(null);
          setView('subtopics');
      } else {
          setTopicTrail(parentTrail);
          setSelectedTopic(targetTopic);
          setView('calculator');
      }
  }, []);

  const handleStartPractice = useCallback((topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentPracticeTopic(topic);
    setView('practice');
  }, []);
  
  const handleStartDailyChallenge = useCallback(() => {
    setView('daily_challenge');
    setShowChallengeReminder(false);
  }, []);

  const handleBack = useCallback(() => {
    if (view === 'calculator' || view === 'practice') {
      setSelectedTopic(null);
      setCurrentPracticeTopic(null);
      if (topicTrail.length > 0) {
        setView('subtopics');
      } else {
        setView('home');
      }
    } else if (view === 'subtopics' && topicTrail.length > 0) {
      const newTrail = topicTrail.slice(0, -1);
      setTopicTrail(newTrail);
      if (newTrail.length === 0) {
        setView('home');
      }
    } else {
      setView('home');
      setSelectedTopic(null);
      setTopicTrail([]);
    }
  }, [view, topicTrail]);

  const renderContent = () => {
    switch (view) {
      case 'history':
        return <History onBack={handleBack} />;
      case 'practice':
        return currentPracticeTopic && <PracticeMode topic={currentPracticeTopic} onBack={handleBack} />;
      case 'daily_challenge':
        return <DailyChallenge onBack={handleBack} onComplete={() => { setView('home'); }} />;
      case 'calculator':
        return selectedTopic && <Calculator topic={selectedTopic} onBack={handleBack} onStartPractice={handleStartPractice} />;
      case 'photo':
        return <PhotoSolver onBack={handleBack} />;
      case 'subtopics':
        return currentParentTopic && (
          <div className="p-4 sm:p-6 animate-fade-in bg-white">
            <button 
                onClick={handleBack} 
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95 mb-4">
                <BackArrowIcon />
                <span>{topicTrail.length > 1 ? topicTrail[topicTrail.length - 2].name : 'सर्व विषय'}</span>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 text-primary-light">
                {currentParentTopic.icon}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{currentParentTopic.name}</h1>
                <p className="text-slate-500">कोणत्या उपविषयासाठी मदत हवी आहे?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {currentParentTopic.subTopics?.map((subTopic, idx) => {
                const colors = [
                  { border: 'border-orange-500', iconBg: 'bg-orange-50' },
                  { border: 'border-blue-500', iconBg: 'bg-blue-50' },
                  { border: 'border-emerald-500', iconBg: 'bg-emerald-50' },
                  { border: 'border-violet-500', iconBg: 'bg-violet-50' },
                  { border: 'border-indigo-500', iconBg: 'bg-indigo-50' },
                  { border: 'border-rose-500', iconBg: 'bg-rose-50' },
                  { border: 'border-teal-500', iconBg: 'bg-teal-50' },
                  { border: 'border-amber-500', iconBg: 'bg-amber-50' },
                ];
                const color = colors[idx % colors.length];
                return (
                  <TopicCard 
                    key={subTopic.key} 
                    topic={subTopic} 
                    onSelect={handleTopicSelect}
                    borderColor={color.border}
                    iconBgColor={color.iconBg}
                  />
                );
              })}
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <div className="bg-primary-dark p-4 sm:p-6 pb-12 sm:pb-16 text-white">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl font-bold">विषय निवडा</h1>
                        <p className="text-violet-200 mt-1">कोणत्या गणिताच्या विषयासाठी मदत हवी आहे?</p>
                    </div>
                    <button 
                        onClick={() => setView('photo')}
                        className="flex flex-col items-center bg-white text-slate-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-slate-100 transition-colors active:scale-95"
                    >
                        <CameraIcon className="w-6 h-6" />
                        <span className="text-xs mt-1">फोटो गणित</span>
                    </button>
                </div>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="विषय शोधा..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition text-slate-900 placeholder:text-slate-900"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="text-slate-900" />
                    </div>
                </div>
            </div>

            <main className="p-4 sm:p-6 bg-slate-50 flex-grow rounded-t-2xl -mt-4 relative z-0">
                {searchQuery.trim() ? (
                    <div className="animate-fade-in">
                        <h2 className="text-xl font-bold text-slate-700 mb-4">शोध परिणाम</h2>
                        {searchResults.length > 0 ? (
                            <div className="space-y-2">
                                {searchResults.map((path, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSearchResultSelect(path)}
                                        className="w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                                    >
                                        <p className="font-semibold text-slate-800">{path[path.length - 1].name}</p>
                                        <p className="text-xs text-slate-500">{path.map(p => p.name).join(' > ')}</p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-slate-500">कोणतेही परिणाम आढळले नाहीत.</p>
                        )}
                    </div>
                ) : (
                    <>
                        <DailyChallengeCard onSelect={handleStartDailyChallenge} />
                        
                        <div className="mt-8 mb-6 text-center">
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">मुख्य गणित विषय</h2>
                            <p className="text-slate-500 text-sm sm:text-base">प्रत्येक विषयाचे सखोल उपविषय आणि चरण-दर-चरण निराकरण पद्धती</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-8 mt-6">
                            {TOPICS.map((topic) => {
                                const colors: Record<string, { border: string; iconBg: string }> = {
                                    'percentage': { border: 'border-orange-500', iconBg: 'bg-orange-50' },
                                    'ratio_proportion': { border: 'border-blue-500', iconBg: 'bg-blue-50' },
                                    'profit_loss': { border: 'border-emerald-500', iconBg: 'bg-emerald-50' },
                                    'interest': { border: 'border-violet-500', iconBg: 'bg-violet-50' },
                                    'time_work': { border: 'border-indigo-500', iconBg: 'bg-indigo-50' },
                                    'speed_time_distance': { border: 'border-rose-500', iconBg: 'bg-rose-50' },
                                    'average': { border: 'border-slate-500', iconBg: 'bg-slate-50' },
                                    'area_volume': { border: 'border-teal-500', iconBg: 'bg-teal-50' },
                                    'algebra': { border: 'border-cyan-500', iconBg: 'bg-cyan-50' },
                                    'number_system': { border: 'border-amber-500', iconBg: 'bg-amber-50' },
                                    'probability': { border: 'border-pink-500', iconBg: 'bg-pink-50' },
                                    'series': { border: 'border-sky-500', iconBg: 'bg-sky-50' },
                                    'exponents': { border: 'border-lime-500', iconBg: 'bg-lime-50' },
                                };
                                const color = colors[topic.key] || { border: 'border-primary', iconBg: 'bg-primary/5' };
                                return (
                                    <MainTopicCard 
                                        key={topic.key} 
                                        topic={topic} 
                                        onSelect={handleTopicSelect}
                                        borderColor={color.border}
                                        iconBgColor={color.iconBg}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
            </main>
          </>
        );
    }
  };

  if (isSplashVisible) {
    return <SplashScreen onAnimationEnd={() => setIsSplashVisible(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      <Header />
      <div className="flex-grow pb-16 md:pb-20">
          {renderContent()}
      </div>
      <BottomNav currentView={view} setView={setView} />

      {/* Challenge Reminder Modal */}
      {showChallengeReminder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all">
            <div className="bg-primary p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30 shadow-inner">
                <CalendarIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white leading-tight">वेळ आहे एका नवीन आव्हानाची!</h2>
            </div>
            <div className="p-8 text-center">
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                तुम्ही काही दिवसांपासून दैनंदिन आव्हान सोडवलेले नाही. तुमची गणिताची पकड मजबूत ठेवण्यासाठी आजचे आव्हान आत्ताच सोडवा!
              </p>
              <div className="mt-8 space-y-3">
                <button 
                  onClick={handleStartDailyChallenge}
                  className="w-full py-4 bg-primary text-white font-black text-xl rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95"
                >
                  आता सोडवा
                </button>
                <button 
                  onClick={() => setShowChallengeReminder(false)}
                  className="w-full py-3 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                >
                  नंतर
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
