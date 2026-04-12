
import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { Topic, McqResponse, Difficulty } from '../types';
import { generateMcqBatch } from '../services/geminiService';
import { Spinner } from './Spinner';
import { BackArrowIcon, FireIcon, TrophyIcon, CheckIcon, CrossIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

interface PracticeModeProps {
  topic: Topic;
  onBack: () => void;
}

// Total time for 25 questions: 22 minutes = 1320 seconds
const BATCH_TIME_LIMIT = 1320; 

export const PracticeMode: React.FC<PracticeModeProps> = ({ topic, onBack }) => {
  const [questions, setQuestions] = useState<McqResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>(
    () => (localStorage.getItem('yashaviMathDifficulty') as Difficulty) || 'medium'
  );
  const [timeLeft, setTimeLeft] = useState(BATCH_TIME_LIMIT);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const storedBestStreak = localStorage.getItem('yashaviMathBestStreak');
    if (storedBestStreak) setBestStreak(parseInt(storedBestStreak, 10));
  }, []);
  
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const fetchBatch = useCallback(async (level: Difficulty) => {
    setIsLoading(true);
    setError(null);
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongCount(0);
    setShowResults(false);
    setTimeLeft(BATCH_TIME_LIMIT);
    clearTimer();

    try {
      const response = await generateMcqBatch(topic.name, level, 25);
      if (response && response.length > 0) {
        setQuestions(response);
      } else {
        throw new Error("कोणतेही प्रश्न प्राप्त झाले नाहीत.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'प्रश्न तयार करताना त्रुटी आली.');
    } finally {
      setIsLoading(false);
    }
  }, [topic, clearTimer]);
  
  useEffect(() => {
    fetchBatch(difficulty);
  }, [difficulty, fetchBatch]);

  useEffect(() => {
    if (isLoading || questions.length === 0 || showResults) {
      clearTimer();
      return;
    }
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearTimer();
          setShowResults(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearTimer();
  }, [isLoading, questions, showResults, clearTimer]);

  const currentMcq = questions[currentIndex];

  const handleOptionSelect = (optionKey: string) => {
    if (isAnswered || questions.length === 0 || showResults) return;
    setSelectedOption(optionKey);
    setIsAnswered(true);
    
    if (optionKey === currentMcq.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setCorrectCount(prev => prev + 1);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem('yashaviMathBestStreak', newStreak.toString());
      }
    } else {
      setStreak(0);
      setWrongCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      clearTimer();
    }
  };

  const getOptionClass = (optionKey: string) => {
    if (!isAnswered) return 'border-slate-300 bg-white hover:border-primary-light hover:bg-primary-light/10';
    if (optionKey === currentMcq?.correctAnswer) return 'border-green-400 bg-green-50 ring-1 ring-green-400';
    if (optionKey === selectedOption) return 'border-red-400 bg-red-50';
    return 'border-slate-300 bg-white opacity-60';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Function to clean text from annoying '$' symbols
  const sanitizeText = (text: string) => text.replace(/\$/g, '');

  const percentage = questions.length > 0 ? ((correctCount / questions.length) * 100).toFixed(2) : '0.00';
  const numPercentage = parseFloat(percentage);
  let grade = 'C';
  let performanceText = 'Needs Improvement';
  if (numPercentage >= 80) {
    grade = 'A';
    performanceText = 'Excellent';
  } else if (numPercentage >= 60) {
    grade = 'B';
    performanceText = 'Good';
  }

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
      <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark transition-all active:scale-95 mb-4"><BackArrowIcon /><span>कॅल्क्युलेटरवर परत जा</span></button>
      <div className="bg-white text-slate-800 border border-slate-200 rounded-xl shadow-lg p-6">
        {!showResults && (
          <>
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-3"><span className="text-primary-light">{topic.icon}</span>{topic.name}</h2>
            <p className="text-slate-600 mb-6">सराव प्रश्न - संच {currentIndex + 1}/{questions.length}</p>
          </>
        )}
        
        {!showResults && (
            <div className="mb-6">
                <label className="block text-center text-sm font-medium text-slate-500 mb-2">काठिण्य पातळी निवडा</label>
                <div className="flex justify-center gap-2 sm:gap-4 p-1 bg-slate-100 rounded-lg">
                    {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
                        <button key={level} onClick={() => {
                            setDifficulty(level);
                            localStorage.setItem('yashaviMathDifficulty', level);
                        }} className={`w-full px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${difficulty === level ? 'bg-primary text-white' : 'text-slate-600 hover:bg-white/50'}`}>{level === 'easy' ? 'सोपे' : level === 'medium' ? 'मध्यम' : 'कठीण'}</button>
                    ))}
                </div>
            </div>
        )}

        {!showResults && (
          <div className="flex justify-center gap-4 sm:gap-8 mb-8 text-center flex-wrap">
              <div className="flex items-center gap-2 text-amber-500"><FireIcon /><div><p className="text-[10px] text-slate-500 uppercase font-bold">सलग</p><p className="text-xl font-bold">{streak}</p></div></div>
              <div className="flex items-center gap-2 text-green-600"><CheckIcon className="w-5 h-5"/><div><p className="text-[10px] text-slate-500 uppercase font-bold">बरोबर</p><p className="text-xl font-bold">{correctCount}</p></div></div>
              <div className="flex items-center gap-2 text-red-500"><CrossIcon className="w-5 h-5"/><div><p className="text-[10px] text-slate-500 uppercase font-bold">चूक</p><p className="text-xl font-bold">{wrongCount}</p></div></div>
              <div className="flex items-center gap-2 text-primary font-bold border-l pl-4 sm:pl-8">
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold">वेळ</p><p className={`text-xl ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>{formatTime(timeLeft)}</p></div>
              </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20 text-center animate-fade-in">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-bold text-primary">प्रश्नांचा संच तयार होत आहे...</p>
            <p className="text-slate-600 mt-2 font-medium">तुमच्या आव्हानाला सुरुवात होतارين, कृपया थांबा.</p>
          </div>
        ) : error ? (
            <div className="text-center py-10">
                <p className="text-red-600 font-bold mb-4">{error}</p>
                <button onClick={() => fetchBatch(difficulty)} className="px-6 py-2 bg-primary text-white rounded-md">पुन्हा प्रयत्न करा</button>
            </div>
        ) : showResults ? (
            <div className="animate-fade-in py-2 bg-white min-h-full">
              {/* Top Header */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <TrophyIcon className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-wide">{performanceText}</span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
                  <span className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">विषय</span>
                  <span className="font-bold text-slate-800 text-sm line-clamp-2">{topic.name}</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
                  <span className="text-xs text-slate-400 font-semibold mb-1 uppercase tracking-wider">काठिण्य पातळी</span>
                  <span className="font-bold text-slate-800 text-sm capitalize">{difficulty === 'easy' ? 'सोपे' : difficulty === 'medium' ? 'मध्यम' : 'कठीण'}</span>
                </div>
              </div>

              {/* Overall Score */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-6">Performance Summary</h3>
                <div className="flex justify-center items-center gap-6">
                  <div className="text-5xl font-black text-blue-600 tracking-tight">
                    {percentage}%
                  </div>
                  <div className="w-16 h-16 rounded-full bg-slate-50 border-4 border-blue-100 flex items-center justify-center shadow-inner">
                    <span className="text-2xl font-black text-slate-700">{grade}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10 px-2">
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Individual Paper Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-t-blue-500 border-x border-b border-slate-100">
                  <p className="text-sm text-slate-500 font-bold mb-1">बरोबर उत्तरे</p>
                  <p className="text-2xl font-black text-slate-800">{correctCount}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-t-purple-500 border-x border-b border-slate-100">
                  <p className="text-sm text-slate-500 font-bold mb-1">चुकीची उत्तरे</p>
                  <p className="text-2xl font-black text-slate-800">{wrongCount}</p>
                </div>
              </div>

              {/* Total Score */}
              <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 mb-8 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-600">Total Score:</span>
                <div className="text-xl font-bold text-slate-400">
                  <span className="text-3xl font-black text-pink-600">{correctCount}</span> / {questions.length}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <button onClick={() => fetchBatch(difficulty)} className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">नवीन संच सोडवा</button>
                  <button onClick={onBack} className="w-full py-3 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 shadow-sm hover:bg-slate-50 transition-all active:scale-95">कॅल्क्युलेटरवर परत जा</button>
              </div>
            </div>
        ) : (
          currentMcq && (
            <div className="animate-fade-in" key={currentIndex}>
              <div className="prose prose-sm max-w-none mb-6 font-semibold text-center text-slate-800 text-lg leading-relaxed">
                <ReactMarkdown>{sanitizeText(currentMcq.question as string)}</ReactMarkdown>
              </div>
              <div className="space-y-3 mb-6">
                {Object.entries(currentMcq.options).map(([key, value]) => (
                  <button key={key} onClick={() => handleOptionSelect(key)} className={`w-full text-left p-4 border rounded-xl transition-all flex items-center gap-3 focus:outline-none focus:ring-0 ${getOptionClass(key)}`}>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary border border-slate-200">{key}</span>
                    <span className="font-semibold">{sanitizeText(value as string)}</span>
                  </button>
                ))}
              </div>
              
              {isAnswered && (
                <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl animate-fade-in">
                  <h3 className="text-lg font-bold mb-2">
                    {selectedOption === currentMcq.correctAnswer 
                        ? <span className="text-green-600">अगदी बरोबर! 🎉</span> 
                        : <span className="text-red-600">उत्तर चुकले.</span>}
                  </h3>
                  <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap">
                    <ReactMarkdown>{sanitizeText(currentMcq.explanation as string)}</ReactMarkdown>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                    onClick={handleNextQuestion} 
                    className={`w-full sm:w-auto py-3 px-10 rounded-xl text-white font-bold shadow-lg transition-all active:scale-95 ${isAnswered ? 'bg-primary hover:bg-primary-dark' : 'bg-slate-300 cursor-not-allowed'}`}
                    disabled={!isAnswered}
                >
                    {currentIndex < questions.length - 1 ? 'पुढील प्रश्न' : 'निकाल पहा'}
                </button>
                <button 
                    onClick={() => {
                      setShowResults(true);
                      clearTimer();
                    }} 
                    className="w-full sm:w-auto py-3 px-10 rounded-xl text-red-500 bg-red-50 border border-red-200 font-bold shadow-sm hover:bg-red-100 transition-all active:scale-95"
                >
                    चाचणी समाप्त करा (End Test)
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
