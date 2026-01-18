
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

  const handleOptionSelect = (optionKey: string) => {
    if (isAnswered || questions.length === 0 || showResults) return;
    setSelectedOption(optionKey);
    setIsAnswered(true);
    
    const currentMcq = questions[currentIndex];
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
    const currentMcq = questions[currentIndex];
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

  const currentMcq = questions[currentIndex];

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
      <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark transition-all active:scale-95 mb-4"><BackArrowIcon /><span>कॅल्क्युलेटरवर परत जा</span></button>
      <div className="bg-white text-slate-800 border border-slate-200 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-1 flex items-center gap-3"><span className="text-primary-light">{topic.icon}</span>{topic.name}</h2>
        <p className="text-slate-600 mb-6">सराव प्रश्न (MCQ) - संच {currentIndex + 1}/{questions.length}</p>
        
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

        <div className="flex justify-center gap-4 sm:gap-8 mb-8 text-center flex-wrap">
            <div className="flex items-center gap-2 text-amber-500"><FireIcon /><div><p className="text-[10px] text-slate-500 uppercase font-bold">सलग</p><p className="text-xl font-bold">{streak}</p></div></div>
            <div className="flex items-center gap-2 text-green-600"><CheckIcon className="w-5 h-5"/><div><p className="text-[10px] text-slate-500 uppercase font-bold">बरोबर</p><p className="text-xl font-bold">{correctCount}</p></div></div>
            <div className="flex items-center gap-2 text-red-500"><CrossIcon className="w-5 h-5"/><div><p className="text-[10px] text-slate-500 uppercase font-bold">चूक</p><p className="text-xl font-bold">{wrongCount}</p></div></div>
            <div className="flex items-center gap-2 text-primary font-bold border-l pl-4 sm:pl-8">
                <div><p className="text-[10px] text-slate-500 uppercase font-bold">वेळ</p><p className={`text-xl ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>{formatTime(timeLeft)}</p></div>
            </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20 text-center animate-fade-in">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-bold text-primary">प्रश्नांचा संच तयार होत आहे...</p>
            <p className="text-slate-600 mt-2 font-medium">तुमच्या आव्हानाला सुरुवात होत आहे, कृपया थांबा.</p>
          </div>
        ) : error ? (
            <div className="text-center py-10">
                <p className="text-red-600 font-bold mb-4">{error}</p>
                <button onClick={() => fetchBatch(difficulty)} className="px-6 py-2 bg-primary text-white rounded-md">पुन्हा प्रयत्न करा</button>
            </div>
        ) : showResults ? (
            <div className="animate-fade-in text-center py-6">
                <TrophyIcon className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">निकाल (Results)</h3>
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-sm text-green-600 font-bold uppercase">बरोबर</p>
                        <p className="text-3xl font-black text-green-700">{correctCount}</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                        <p className="text-sm text-red-500 font-bold uppercase">चूक</p>
                        <p className="text-3xl font-black text-red-700">{wrongCount}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                    <button onClick={() => fetchBatch(difficulty)} className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg">नवीन संच सोडवा</button>
                    <button onClick={onBack} className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold border border-slate-200">कॅल्क्युलेटरवर परत जा</button>
                </div>
            </div>
        ) : (
          currentMcq && (
            <div className="animate-fade-in" key={currentIndex}>
              <div className="prose prose-sm max-w-none mb-6 font-semibold text-center text-slate-800 text-lg leading-relaxed">
                {/* Fixed line 216: ensured currentMcq.question is string by explicit casting to prevent 'unknown' error */}
                <ReactMarkdown>{sanitizeText(currentMcq.question as string)}</ReactMarkdown>
              </div>
              <div className="space-y-3 mb-6">
                {/* Fixed possible unknown type in Object.entries by casting value as string */}
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
                  <div className="prose prose-sm max-w-none text-slate-700">
                    {/* Fixed possible unknown type for explanation by casting as string */}
                    <ReactMarkdown>{sanitizeText(currentMcq.explanation as string)}</ReactMarkdown>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex justify-center">
                <button 
                    onClick={handleNextQuestion} 
                    className={`w-full sm:w-auto py-3 px-10 rounded-xl text-white font-bold shadow-lg transition-all active:scale-95 ${isAnswered ? 'bg-primary hover:bg-primary-dark' : 'bg-slate-300 cursor-not-allowed'}`}
                    disabled={!isAnswered}
                >
                    {currentIndex < questions.length - 1 ? 'पुढील प्रश्न' : 'निकाल पहा'}
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
