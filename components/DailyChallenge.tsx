
import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { McqResponse, Difficulty } from '../types';
import { generateDailyChallenge, CHALLENGE_QUESTIONS } from '../services/geminiService';
import { addHistoryItem } from '../services/historyService';
import { Spinner } from './Spinner';
import { BackArrowIcon, CalendarIcon, CheckIcon, CrossIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

interface DailyChallengeProps {
  onBack: () => void;
  onComplete: () => void;
}

const CHALLENGE_TIME_LIMIT = 900; // 15 minutes in seconds

export const DailyChallenge: React.FC<DailyChallengeProps> = ({ onBack, onComplete }) => {
    const [stage, setStage] = useState<'intro' | 'loading' | 'active' | 'results'>('intro');
    const [questions, setQuestions] = useState<McqResponse[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>([]);
    const [timeLeft, setTimeLeft] = useState(CHALLENGE_TIME_LIMIT);
    const [difficulty, setDifficulty] = useState<Difficulty>(
        () => (localStorage.getItem('yashaviMathChallengeDifficulty') as Difficulty) || 'medium'
    );
    const [error, setError] = useState<string | null>(null);
    const timerRef = useRef<number | null>(null);

    const clearTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const startChallenge = useCallback(async () => {
        setStage('loading');
        setError(null);
        try {
            const response = await generateDailyChallenge(difficulty);
            if (response.length < CHALLENGE_QUESTIONS) {
                throw new Error("AI did not generate enough questions.");
            }
            setQuestions(response);
            setAnswers(new Array(response.length).fill(null));
            setCurrentIndex(0);
            setTimeLeft(CHALLENGE_TIME_LIMIT);
            setStage('active');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'चॅलेंज सुरू करताना समस्या आली.');
            setStage('intro');
        }
    }, [difficulty]);
    
    useEffect(() => {
        if (stage === 'active') {
            timerRef.current = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearTimer();
                        setStage('results');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearTimer();
    }, [stage, clearTimer]);

    const handleAnswer = (optionKey: string) => {
        const newAnswers = [...answers];
        newAnswers[currentIndex] = optionKey;
        setAnswers(newAnswers);

        // Move to next or finish
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setStage('results');
            clearTimer();
        }
    };

    const calculateScore = () => {
        return answers.reduce((score, answer, index) => {
            if (questions[index] && answer === questions[index].correctAnswer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    const handleCompleteAndSave = () => {
        questions.forEach((q, index) => {
            const userAnswerKey = answers[index];
            const userAnswerText = userAnswerKey ? `${userAnswerKey}. ${q.options[userAnswerKey as keyof typeof q.options]}` : 'उत्तर दिले नाही';
            addHistoryItem({
                type: 'text',
                topicName: `Daily Challenge प्रश्न: ${index + 1}`,
                inputs: { 'प्रश्न': q.question, 'तुमचे उत्तर': userAnswerText },
                result: {
                    answer: `बरोबर उत्तर: ${q.correctAnswer}. ${q.options[q.correctAnswer as keyof typeof q.options]}`,
                    explanation: q.explanation,
                },
            });
        });
        setStage('intro');
        onComplete();
    };
    
    const handleDifficultyChange = (newDifficulty: Difficulty) => {
        setDifficulty(newDifficulty);
        localStorage.setItem('yashaviMathChallengeDifficulty', newDifficulty);
    };

    const renderIntro = () => (
        <div className="text-center animate-fade-in">
            <CalendarIcon className="w-16 h-16 mx-auto text-amber-400" />
            <h2 className="text-2xl font-bold mt-4 text-slate-800">दैनिक आव्हान (Daily Challenge)</h2>
            <p className="text-slate-600 mt-2 max-w-md mx-auto">
                तुम्हाला {CHALLENGE_QUESTIONS} संमिश्र विषयांवरील प्रश्न मिळतील. तुमच्याकडे {CHALLENGE_TIME_LIMIT / 60} मिनिटे आहेत.
            </p>
            <div className="my-8">
                <label className="block text-center text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">काठिण्य पातळी निवडा</label>
                <div className="flex justify-center gap-2 sm:gap-4 p-1.5 bg-slate-100 rounded-xl max-w-xs mx-auto shadow-inner">
                    {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
                        <button
                            key={level}
                            onClick={() => handleDifficultyChange(level)}
                            className={`w-full px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 focus:outline-none ${
                                difficulty === level ? 'bg-primary text-white shadow-md scale-105' : 'text-slate-600 hover:bg-white/60'
                            }`}
                        >
                            {level === 'easy' ? 'सोपे' : level === 'medium' ? 'मध्यम' : 'कठीण'}
                        </button>
                    ))}
                </div>
            </div>
            {error && <div className="mt-4 p-3 bg-red-500/10 border border-red-400 text-red-600 rounded-lg">{error}</div>}
            <button onClick={startChallenge} className="mt-6 w-full sm:w-auto py-4 px-10 rounded-xl shadow-lg text-lg font-bold text-white bg-primary hover:bg-primary-dark transition-all active:scale-95">आव्हानाला सुरुवात करा</button>
        </div>
    );

    const renderLoading = () => (
        <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 font-bold text-slate-700 text-lg">तुमच्यासाठी दरवेळी नवीन प्रश्न तयार करत आहे...</p>
            <p className="text-sm text-slate-500 mt-2">पुनरावृत्ती टाळण्यासाठी काही वेळ लागू शकतो.</p>
        </div>
    );

    const renderActive = () => {
        const currentQuestion = questions[currentIndex];
        if (!currentQuestion) return null;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return (
            <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-bold text-slate-500">प्रश्न {currentIndex + 1} / {questions.length}</p>
                    <p className="text-sm font-bold text-slate-500">{minutes}:{seconds < 10 ? `0${seconds}` : seconds} शिल्लक</p>
                </div>
                <div className="relative h-2 bg-slate-100 rounded-full mb-8 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-300" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
                </div>
                <div className="prose prose-sm sm:prose-base max-w-none mb-10 font-bold text-center text-slate-800 whitespace-pre-wrap leading-relaxed">
                    <ReactMarkdown>{currentQuestion.question}</ReactMarkdown>
                </div>
                {/* Important: Key change on the container clears the focus border from previous question */}
                <div className="space-y-4" key={`q-container-${currentIndex}`}>
                    {Object.entries(currentQuestion.options).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => handleAnswer(key)}
                            className="w-full text-left p-4 sm:p-5 border-2 border-slate-200 rounded-xl transition-all duration-200 flex items-center gap-4 text-slate-800 bg-white hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-0 shadow-sm"
                        >
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary border border-slate-200">{key}</span>
                            <span className="font-semibold">{value}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderResults = () => {
        const score = calculateScore();
        return (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">चाचणी पूर्ण झाली!</h2>
                <div className="text-center p-8 bg-slate-50 rounded-2xl mb-10 border border-slate-200 shadow-inner">
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">तुमचा स्कोअर</p>
                    <p className="text-6xl font-black text-primary">{score}<span className="text-2xl text-slate-400">/{questions.length}</span></p>
                </div>
                <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">तुमची उत्तरे</h3>
                <div className="space-y-6">
                    {questions.map((q, index) => (
                        <div key={index} className="p-5 bg-white rounded-xl border border-slate-200 text-slate-800 shadow-sm">
                            <p className="font-bold mb-3 text-slate-800">प्रश्न {index + 1}: <ReactMarkdown className="inline">{q.question}</ReactMarkdown></p>
                            <p className="text-sm">तुमचे उत्तर: <span className={`font-bold ${answers[index] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>{answers[index] ? `${answers[index]}. ${q.options[answers[index] as keyof typeof q.options]}` : 'दिले नाही'}</span></p>
                            <p className="text-sm">बरोबर उत्तर: <span className="font-bold text-green-600">{q.correctAnswer}. {q.options[q.correctAnswer as keyof typeof q.options]}</span></p>
                        </div>
                    ))}
                </div>
                <button onClick={handleCompleteAndSave} className="mt-10 w-full py-4 rounded-xl shadow-lg text-lg font-bold text-white bg-primary hover:bg-primary-dark transition-all active:scale-95">पूर्ण झाले</button>
            </div>
        );
    };

    return (
        <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-sm rounded-xl shadow-md hover:bg-primary-dark transition-all active:scale-95 mb-6"><BackArrowIcon /><span>मागे जा</span></button>
            <div className="bg-white text-slate-800 rounded-2xl">
                {stage === 'intro' && renderIntro()}
                {stage === 'loading' && renderLoading()}
                {stage === 'active' && renderActive()}
                {stage === 'results' && renderResults()}
            </div>
        </div>
    );
};
