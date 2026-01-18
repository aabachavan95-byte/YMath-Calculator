
import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { Topic, McqResponse, Difficulty } from '../types';
import { generateMcqProblem } from '../services/geminiService';
import { Spinner } from './Spinner';
import { BackArrowIcon, FireIcon, TrophyIcon, CheckIcon, CrossIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

interface PracticeModeProps {
  topic: Topic;
  onBack: () => void;
}

const TIME_LIMITS: Record<Difficulty, number> = {
  easy: 45,
  medium: 30,
  hard: 20,
};

export const PracticeMode: React.FC<PracticeModeProps> = ({ topic, onBack }) => {
  const [mcq, setMcq] = useState<McqResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [newBestStreak, setNewBestStreak] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>(
    () => (localStorage.getItem('yashaviMathDifficulty') as Difficulty) || 'medium'
  );
  const [timeLeft, setTimeLeft] = useState(TIME_LIMITS[difficulty]);
  const [isTimeUp, setIsTimeUp] = useState(false);
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

  const handleGenerateQuestion = useCallback(async (level: Difficulty) => {
    setIsLoading(true);
    setError(null);
    setMcq(null);
    setSelectedOption(null);
    setIsAnswered(false);
    setNewBestStreak(false);
    setIsTimeUp(false);
    setTimeLeft(TIME_LIMITS[level]);
    clearTimer();

    try {
      const response = await generateMcqProblem(topic.mcqPromptTemplate!(level));
      setMcq(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'प्रश्न तयार करताना त्रुटी आली.');
    } finally {
      setIsLoading(false);
    }
  }, [topic, clearTimer]);
  
  useEffect(() => {
    handleGenerateQuestion(difficulty);
  }, [difficulty, handleGenerateQuestion]);

  useEffect(() => {
    if (isLoading || !mcq || isAnswered) {
      clearTimer();
      return;
    }
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearTimer();
          setIsTimeUp(true);
          setIsAnswered(true);
          setStreak(0);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearTimer();
  }, [isLoading, mcq, isAnswered, clearTimer]);

  const handleOptionSelect = (optionKey: string) => {
    if (isAnswered || !mcq) return;
    clearTimer();
    setSelectedOption(optionKey);
    setIsAnswered(true);
    if (optionKey === mcq.correctAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem('yashaviMathBestStreak', newStreak.toString());
        setNewBestStreak(true);
      }
    } else {
      setStreak(0);
    }
  };

  const getOptionClass = (optionKey: string) => {
    if (!isAnswered) return 'border-slate-300 bg-white hover:border-primary-light hover:bg-primary-light/10';
    if (optionKey === mcq?.correctAnswer) return 'border-green-400 bg-green-50 ring-1 ring-green-400';
    if (optionKey === selectedOption) return 'border-red-400 bg-red-50';
    return 'border-slate-300 bg-white opacity-60';
  };

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
      <button onClick={onBack} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark transition-all active:scale-95 mb-4"><BackArrowIcon /><span>कॅल्क्युलेटरवर परत जा</span></button>
      <div className="bg-white text-slate-800 border border-slate-200 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-1 flex items-center gap-3"><span className="text-primary-light">{topic.icon}</span>{topic.name}</h2>
        <p className="text-slate-600 mb-6">सराव प्रश्न (MCQ)</p>
        <div className="mb-6">
            <label className="block text-center text-sm font-medium text-slate-500 mb-2">काठिण्य पातळी निवडा</label>
            <div className="flex justify-center gap-2 sm:gap-4 p-1 bg-slate-100 rounded-lg">
                {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
                    <button key={level} onClick={() => setDifficulty(level)} className={`w-full px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${difficulty === level ? 'bg-primary text-white' : 'text-slate-600 hover:bg-white/50'}`}>{level === 'easy' ? 'सोपे' : level === 'medium' ? 'मध्यम' : 'कठीण'}</button>
                ))}
            </div>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-center">
            <div className="flex items-center gap-2 text-amber-500"><FireIcon /><div><p className="text-sm text-slate-500">सलग</p><p className="text-xl font-bold">{streak}</p></div></div>
            <div className="flex items-center gap-2 text-primary"><TrophyIcon /><div><p className="text-sm text-slate-500">उच्चांक</p><p className="text-xl font-bold">{bestStreak}</p></div></div>
        </div>
        {isLoading ? <div className="flex justify-center items-center py-20"><Spinner /></div> : (
          mcq && (
            <div className="animate-fade-in" key={mcq.question}>
              <div className="prose prose-sm max-w-none mb-6 font-semibold text-center text-slate-800"><ReactMarkdown>{mcq.question}</ReactMarkdown></div>
              <div className="space-y-3 mb-6">
                {Object.entries(mcq.options).map(([key, value]) => (
                  <button key={key} onClick={() => handleOptionSelect(key)} className={`w-full text-left p-3 border rounded-lg transition-all flex items-center gap-3 focus:outline-none focus:ring-0 ${getOptionClass(key)}`}>
                    <span className="font-bold text-primary">{key}.</span><span>{value}</span>
                  </button>
                ))}
              </div>
              {isAnswered && (
                <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg animate-fade-in">
                  <h3 className="text-lg font-bold mb-2">{selectedOption === mcq.correctAnswer ? <span className="text-green-600">अगदी बरोबर!</span> : <span className="text-red-600">उत्तर चुकले.</span>}</h3>
                  <ReactMarkdown>{mcq.explanation}</ReactMarkdown>
                </div>
              )}
              <div className="mt-8 flex justify-center"><button onClick={() => handleGenerateQuestion(difficulty)} className="w-full sm:w-auto py-2 px-6 rounded-md text-white bg-primary hover:bg-primary-dark transition-colors">पुढील प्रश्न</button></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
