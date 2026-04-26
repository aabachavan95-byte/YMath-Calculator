
import React, { useState, useCallback, useRef, useEffect } from 'react';
import type { Topic, GeminiResponse } from '../types';
import { solveTextProblem } from '../services/geminiService';
import { addHistoryItem } from '../services/historyService';
import { useForm } from '../hooks/useForm';
import { Spinner } from './Spinner';
import { BackArrowIcon, MicrophoneIcon, BrainIcon, LightbulbIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

// Add type definitions for the Web Speech API to resolve TypeScript errors.
interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
  readonly resultIndex: number;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionStatic {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionStatic;
    webkitSpeechRecognition: SpeechRecognitionStatic;
  }
}

import { useDarkMode } from '../hooks/useDarkMode';

interface CalculatorProps {
  topic: Topic;
  onBack: () => void;
  onStartPractice: (topic: Topic) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ topic, onBack, onStartPractice }) => {
  const { inputs, setInputs, errors, handleInputChange, validateForm, resetForm } = useForm({
    initialValues: {},
    topicInputs: topic.inputs || [],
  });
  
  const [result, setResult] = useState<GeminiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [micPermissionError, setMicPermissionError] = useState<string | null>(null);
  
  const [expertResult, setExpertResult] = useState<GeminiResponse | null>(null);
  const [isExpertLoading, setIsExpertLoading] = useState(false);
  const [expertError, setExpertError] = useState<string | null>(null);

  const [conceptResult, setConceptResult] = useState<GeminiResponse | null>(null);
  const [isConceptLoading, setIsConceptLoading] = useState(false);
  const [conceptError, setConceptError] = useState<string | null>(null);

  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [isExpertExplanationVisible, setIsExpertExplanationVisible] = useState(false);
  const [isConceptExplanationVisible, setIsConceptExplanationVisible] = useState(false);
  
  const [isFormulaVisible, setIsFormulaVisible] = useState(false);
  const [formula, setFormula] = useState<string | null>(null);
  const [explanationWithoutFormula, setExplanationWithoutFormula] = useState<string>('');


  const [isListening, setIsListening] = useState(false);
  const [voiceTarget, setVoiceTarget] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  
  // Get the label of the currently active input for voice
  const activeInputLabel = voiceTarget ? topic.inputs?.find(i => i.key === voiceTarget)?.label : null;
  
  const isSpeechRecognitionSupported = typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const inputsRef = useRef(inputs);
  useEffect(() => {
    inputsRef.current = inputs;
  }, [inputs]);

  const handleToggleVoiceInput = (key: string) => {
      if (!isSpeechRecognitionSupported) return;

      if (isListening) {
          if (recognitionRef.current) {
              recognitionRef.current.stop();
          }
          return;
      }

      setError(null);
      setMicPermissionError(null);
      setVoiceTarget(key);
      
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'mr-IN';
      recognition.interimResults = false; // Only final results for better reliability
      recognition.continuous = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      
      recognition.onresult = (event) => {
          let transcript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                  transcript += event.results[i][0].transcript;
              }
          }
          
          if (transcript) {
              let cleanTranscript = transcript.trim();
              
              // Convert Marathi number words to digits
              const marathiNumberMap: Record<string, string> = {
                'शून्य': '0', 'एक': '1', 'दोन': '2', 'तीन': '3', 'चार': '4', 'पाच': '5', 'सहा': '6', 'सात': '7', 'आठ': '8', 'नऊ': '9', 'दहा': '10',
                'अकरा': '11', 'बारा': '12', 'तेरा': '13', 'चौदा': '14', 'पंधरा': '15', 'सोळा': '16', 'सतरा': '17', 'अठरा': '18', 'एकोणीस': '19', 'वीस': '20',
                'एकवीस': '21', 'बावीस': '22', 'तेवीस': '23', 'चौवीस': '24', 'पंचवीस': '25', 'सव्वीस': '26', 'सत्तावीस': '27', 'अठ्ठावीस': '28', 'एकोणतीस': '29', 'तीस': '30',
                'एकतीस': '31', 'बत्तीस': '32', 'तेहतीस': '33', 'चौतीस': '34', 'पस्तीस': '35', 'छत्तीस': '36', 'सदुतीस': '37', 'अडुतीस': '38', 'एकोणचाळीस': '39', 'चाळीस': '40',
                'एकेचाळीस': '41', 'बेचाळीस': '42', 'तेहेचाळीस': '43', 'चव्वेचाळीस': '44', 'पंचेचाळीस': '45', 'सेहेचाळीस': '46', 'सत्तेचाळीस': '47', 'अठ्ठेचाळीस': '48', 'एकोणपन्नास': '49', 'पन्नास': '50',
                'एकावन्न': '51', 'बावन': '52', 'बावन्न': '52', 'त्रेपन्न': '53', 'चोपन्न': '54', 'पंचावन्न': '55', 'छप्पन': '56', 'छप्पन्न': '56', 'सत्तावन्न': '57', 'अठ्ठावन्न': '58', 'एकोणसाठ': '59', 'साठ': '60',
                'एकसष्ट': '61', 'बासष्ट': '62', 'त्रेसष्ट': '63', 'चौसष्ट': '64', 'पासष्ट': '65', 'सहासष्ट': '66', 'सदुसष्ट': '67', 'अडुसष्ट': '68', 'एकोणसत्तर': '69', 'सत्तर': '70',
                'एकाहत्तर': '71', 'बाहत्तर': '72', 'त्र्याहत्तर': '73', 'चौऱ्याहत्तर': '74', 'पंच्याहत्तर': '75', 'शहात्तर': '76', 'सत्याहत्तर': '77', 'अठ्ठ्याहत्तर': '78', 'एकोणऐंशी': '79', 'ऐंशी': '80',
                'एक्याऐंशी': '81', 'ब्याऐंशी': '82', 'त्र्याऐंशी': '83', 'चौऱ्याऐंशी': '84', 'पंच्याऐंशी': '85', 'शहाऐंशी': '86', 'सत्याऐंशी': '87', 'अठ्ठ्याऐंशी': '88', 'एकोणनव्वद': '89', 'नव्वद': '90',
                'एक्याण्णव': '91', 'ब्याण्णव': '92', 'त्र्याण्णव': '93', 'चौऱ्याण्णव': '94', 'पंच्याण्णव': '95', 'शहाण्णव': '96', 'सत्याण्णव': '97', 'अठ्ठ्याण्णव': '98', 'नव्व्याण्णव': '99', 'शंभर': '100',
                'दोनशे': '200', 'तीनशे': '300', 'चारशे': '400', 'पाचशे': '500', 'सहाशे': '600', 'सातशे': '700', 'आठशे': '800', 'नऊशे': '900', 'हजार': '1000'
              };

              // Sort keys by length descending so longer words (like 'एक्याण्णव') are replaced before shorter ones (like 'एक') if any overlap exists
              const sortedWords = Object.keys(marathiNumberMap).sort((a, b) => b.length - a.length);

              sortedWords.forEach(word => {
                // Use a regex that handles Marathi word boundaries including punctuation
                const regex = new RegExp(`(^|[\\s.,!?;:'"()\\-])(${word})(?=[\\s.,!?;:'"()\\-]|$)`, 'g');
                cleanTranscript = cleanTranscript.replace(regex, (match, p1) => `${p1}${marathiNumberMap[word]}`);
              });

              // Also convert Marathi digits (०-९) to English digits (0-9)
              const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
              cleanTranscript = cleanTranscript.replace(/[०-९]/g, (w) => marathiDigits.indexOf(w).toString());

              const currentVal = inputsRef.current[key] || '';
              const inputType = topic.inputs?.find(i => i.key === key)?.type;
              
              let newValue = '';
              if (inputType === 'number') {
                // For number inputs, if the transcript is a valid number, replace the value
                // Otherwise, try to extract the first number found
                const numberMatch = cleanTranscript.match(/\d+(\.\d+)?/);
                if (numberMatch) {
                  newValue = numberMatch[0];
                } else {
                  newValue = cleanTranscript;
                }
              } else {
                // For text/textarea, append the new transcript
                newValue = (currentVal + ' ' + cleanTranscript).trim();
              }
              
              handleInputChange(key, newValue);
          }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          setVoiceTarget(null);

          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
              setMicPermissionError("व्हॉइस इनपुट वापरण्यासाठी, कृपया तुमच्या ब्राउझरच्या ॲड्रेस बारमधील माइक आयकॉनवर क्लिक करून परवानगी द्या.");
          } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
              setError(`व्हॉइस ओळख त्रुटी: ${event.error}`);
          }
      };

      recognition.onend = () => {
          setIsListening(false);
          setVoiceTarget(null);
          recognitionRef.current = null;
      };

      recognitionRef.current = recognition;
      try {
        recognition.start();
      } catch (e) {
        console.error("Failed to start recognition:", e);
        setIsListening(false);
        setVoiceTarget(null);
      }
  };

  const handleClear = useCallback(() => {
    resetForm();
    setResult(null);
    setError(null);
    setMicPermissionError(null);
    setExpertResult(null);
    setExpertError(null);
    setConceptResult(null);
    setConceptError(null);
    setIsExplanationVisible(false);
    setIsExpertExplanationVisible(false);
    setIsConceptExplanationVisible(false);
    setFormula(null);
    setExplanationWithoutFormula('');
    setIsFormulaVisible(false);
  }, [resetForm]);

  // Utility to clean text from annoying '$' symbols
  const sanitizeText = (text: string) => text.replace(/\$/g, '');

  // Utility to convert Marathi digits to English digits
  const convertMarathiToEnglish = (text: string): string => {
    const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return text.replace(/[०-९]/g, (w) => marathiDigits.indexOf(w).toString());
  };

  // Utility to convert English digits to Marathi digits
  const convertEnglishToMarathi = (text: string): string => {
    const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return text.replace(/\d/g, (w) => marathiDigits[parseInt(w)]);
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    // Check if user is using Marathi digits in any input
    const hasMarathiDigits = Object.values(inputs).some(val => /[०-९]/.test(val));

    // Convert any Marathi digits in inputs to English digits for the AI prompt
    const processedInputs = { ...inputs };
    Object.keys(processedInputs).forEach(key => {
      if (typeof processedInputs[key] === 'string') {
        processedInputs[key] = convertMarathiToEnglish(processedInputs[key]);
      }
    });

    const fullPrompt = topic.promptTemplate ? topic.promptTemplate(processedInputs) : '';
    
    try {
      let response = await solveTextProblem(fullPrompt);
      
      // If user used Marathi digits, convert the entire response back to Marathi digits
      if (hasMarathiDigits) {
        response = {
          ...response,
          answer: convertEnglishToMarathi(response.answer),
          explanation: convertEnglishToMarathi(response.explanation)
        };
      }

      setResult(response);

      // More robust regex to match "सूत्र" (Formula) section
      // Matches "सूत्र" header and everything until "पायऱ्या", "स्पष्टीकरण", or end of string
      const formulaRegex = /(\*?\*?सूत्र\*?\*?:?\s*[\s\S]*?)(?=\*?\*?पायऱ्या\*?\*?|\*?\*?स्पष्टीकरण\*?\*?|$)/i;
      const formulaMatch = response.explanation.match(formulaRegex);
      
      if (formulaMatch && formulaMatch[1]) {
          const formulaText = formulaMatch[1].trim();
          // Check if it's not just the header (has content after "सूत्र:")
          const hasContent = formulaText.replace(/\*?\*?सूत्र\*?\*?:?/i, '').trim().length > 0;
          
          if (hasContent) {
              setFormula(formulaText);
              // Remove the formula section from the explanation to avoid duplication
              const remainingExplanation = response.explanation.replace(formulaRegex, '').trim();
              setExplanationWithoutFormula(remainingExplanation);
          } else {
              setFormula(null);
              setExplanationWithoutFormula(response.explanation);
          }
      } else {
          setFormula(null);
          setExplanationWithoutFormula(response.explanation);
      }
      
      setIsExplanationVisible(true);
      setIsFormulaVisible(true);

      addHistoryItem({
        type: 'text',
        topicName: topic.name,
        inputs,
        result: response,
      });
    } catch (err) {
      if (!navigator.onLine) {
          setError('🌐 इंटरनेट कनेक्शन उपलब्ध नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.');
      } else if (err instanceof Error) {
          setError(`🤔 एक समस्या आली: ${err.message}. कृपया काही वेळाने पुन्हा प्रयत्न करा.`);
      } else {
          setError('🤔 क्षमस्व, सर्व्हीसकडून उत्तर मिळवण्यात एक अनपेक्षित समस्या आली. कृपया काही वेळाने पुन्हा प्रयत्न करा.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [inputs, topic, validateForm]);
  
  const handleExplainConcept = useCallback(async () => {
    setIsConceptLoading(true);
    setConceptError(null);
    setConceptResult(null);

    const conceptPrompt = `Explain the concept of ${topic.name} in Marathi, focusing on its importance in competitive exams like MPSC and UPSC.`;

    try {
      const response = await solveTextProblem(conceptPrompt);
      setConceptResult(response);
      setIsConceptExplanationVisible(false);
      addHistoryItem({
        type: 'text',
        topicName: `${topic.name} (संकल्पना)`,
        inputs: { 'Request': 'Concept Explanation' },
        result: response,
      });
    } catch (err) {
      if (!navigator.onLine) {
          setConceptError('🌐 इंटरनेट कनेक्शन उपलब्ध नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.');
      } else if (err instanceof Error) {
          setConceptError(`🤔 संकल्पना समजावून सांगताना समस्या आली: ${err.message}.`);
      } else {
          setConceptError('🤔 क्षमस्व, संकल्पना समजावून सांगताना एक अनपेक्षित समस्या आली.');
      }
    } finally {
      setIsConceptLoading(false);
    }
  }, [topic]);

  const handleExpertSubmit = useCallback(async () => {
    if (!topic.expertPromptTemplate) return;

    setIsExpertLoading(true);
    setExpertError(null);
    setExpertResult(null);
    const expertPrompt = topic.expertPromptTemplate();
    
    try {
      const response = await solveTextProblem(expertPrompt);
      setExpertResult(response);
      setIsExpertExplanationVisible(false);
      addHistoryItem({
        type: 'text',
        topicName: `${topic.name} (तज्ञ मोड)`,
        inputs: { 'Problem Type': 'Expert Mode Challenge' },
        result: response,
      });
    } catch (err) {
      if (!navigator.onLine) {
          setExpertError('🌐 इंटरनेट कनेक्शन उपलब्ध नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.');
      } else if (err instanceof Error) {
          setExpertError(`🤔 एक समस्या आली: ${err.message}. कृपया काही वेळाने पुन्हा प्रयत्न करा.`);
      } else {
          setExpertError('🤔 क्षमस्व, तज्ञ मोड प्रश्न मिळवण्यात एक अनपेक्षित समस्या आली. कृपया काही वेळाने पुन्हा प्रयत्न करा.');
      }
    } finally {
      setIsExpertLoading(false);
    }
  }, [topic]);

  return (
    <div className="p-4 sm:p-6 animate-fade-in bg-white">
      <button 
        onClick={onBack} 
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95 mb-4">
        <BackArrowIcon />
        <span>मागे जा</span>
      </button>
      <div className="bg-white text-slate-900 border border-slate-200 rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap justify-between items-center gap-y-2 mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                <span className="text-primary-light">{topic.icon}</span>
                {topic.name} कॅल्क्युलेटर
            </h2>
            <button
                onClick={handleExplainConcept}
                disabled={isConceptLoading}
                className="flex items-center gap-2 px-3 py-1.5 bg-sky-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isConceptLoading ? <Spinner /> : <LightbulbIcon />}
                <span>संकल्पना समजून घ्या</span>
            </button>
        </div>
        
        {micPermissionError && (
            <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-r-lg" role="alert">
                <p className="font-bold">माइक परवानगी आवश्यक</p>
                <p className="text-sm">{micPermissionError}</p>
            </div>
        )}

        {isListening && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl shadow-sm flex flex-col items-center justify-center text-center animate-pulse transition-all">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <MicrophoneIcon className="w-6 h-6" />
                </div>
                <p className="font-bold text-red-700 text-lg">
                     {activeInputLabel ? `'${activeInputLabel}' साठी ऐकत आहे...` : 'ऐकत आहे... बोला...'}
                </p>
                <p className="text-sm text-red-600 mt-1">
                    वाक्य पूर्ण झाल्यावर टेक्स्ट आपोaap दिसेल.
                </p>
                 <button 
                    type="button"
                    onClick={() => {
                        if (recognitionRef.current) recognitionRef.current.stop();
                    }}
                    className="mt-3 px-4 py-1 bg-white border border-red-300 text-red-600 text-xs font-semibold rounded-full hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                    थांबवा
                </button>
            </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {topic.inputs?.map(input => (
              <div key={input.key} className={`transition-all duration-300`}>
                <label 
                    htmlFor={input.key} 
                    className={`block text-sm font-medium mb-1 transition-colors ${isListening && voiceTarget === input.key ? 'text-red-600' : 'text-slate-600'}`}
                >
                  {input.label}
                  {isListening && voiceTarget === input.key && <span className="ml-2 text-xs animate-pulse font-bold text-red-500">(बोलत आहे...)</span>}
                </label>
                {input.type === 'textarea' ? (
                  <div className="relative">
                    <textarea
                      id={input.key}
                      rows={4}
                      value={inputs[input.key] || ''}
                      onChange={e => handleInputChange(input.key, e.target.value)}
                      placeholder={input.placeholder}
                      className={`w-full px-3 py-2 pr-14 bg-slate-50 text-slate-900 border rounded-md shadow-sm focus:outline-none placeholder:text-slate-400 transition-all 
                        ${errors[input.key] ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-primary-light focus:border-primary-light'} 
                        ${isListening && voiceTarget === input.key ? 'border-red-500 ring-4 ring-red-100 bg-red-50' : ''}`}
                      required
                    />
                    {isSpeechRecognitionSupported && (
                      <button
                        type="button"
                        onClick={() => handleToggleVoiceInput(input.key)}
                        className={`absolute bottom-3 right-3 p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light shadow-sm ${
                            isListening && voiceTarget === input.key
                            ? 'bg-red-500 text-white shadow-red-300 scale-110 animate-pulse'
                            : 'bg-slate-200 text-slate-600 hover:bg-primary-light hover:text-white'
                        }`}
                      >
                        <MicrophoneIcon />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      id={input.key}
                      type="text"
                      inputMode={input.type === 'number' ? 'decimal' : 'text'}
                      value={inputs[input.key] || ''}
                      onChange={e => handleInputChange(input.key, e.target.value)}
                      placeholder={input.placeholder}
                      className={`w-full py-2 bg-slate-50 text-slate-900 border rounded-md shadow-sm focus:outline-none placeholder:text-slate-400 transition-all 
                        ${errors[input.key] ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-primary-light focus:border-primary-light'} 
                        ${input.unit ? 'pl-3 pr-24' : 'px-3 pr-14'}
                        ${isListening && voiceTarget === input.key ? 'border-red-500 ring-4 ring-red-100 bg-red-50' : ''}`}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                        {input.unit && (
                            <span className="text-slate-500 sm:text-sm mr-2 pointer-events-none">
                                {input.unit}
                            </span>
                        )}
                        {isSpeechRecognitionSupported && (
                            <button
                                type="button"
                                onClick={() => handleToggleVoiceInput(input.key)}
                                className={`p-2.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light shadow-sm ${
                                    isListening && voiceTarget === input.key
                                    ? 'bg-red-500 text-white shadow-red-300 scale-110 animate-pulse'
                                    : 'bg-slate-200 text-slate-600 hover:bg-primary-light hover:text-white'
                                }`}
                            >
                                <MicrophoneIcon />
                            </button>
                        )}
                    </div>
                  </div>
                )}
                 {errors[input.key] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[input.key]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap-reverse justify-end gap-3">
              <button
                  type="button"
                  onClick={handleClear}
                  className="w-full sm:w-auto flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors"
              >
                  पुन्हा लिहा
              </button>
              {topic.mcqPromptTemplate && (
                  <button
                      type="button"
                      onClick={() => onStartPractice(topic)}
                      className="w-full sm:w-auto flex justify-center py-2 px-4 border border-primary-light/50 rounded-md shadow-sm text-sm font-medium text-primary-dark bg-primary/10 hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors"
                  >
                      सराव प्रश्न
                  </button>
              )}
               {topic.expertPromptTemplate && (
                    <button
                        type="button"
                        onClick={handleExpertSubmit}
                        disabled={isExpertLoading}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-4 border border-secondary-light/50 rounded-md shadow-sm text-sm font-medium text-secondary-dark bg-secondary/10 hover:bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isExpertLoading ? <Spinner/> : <BrainIcon />}
                        <span>तज्ञ मोड</span>
                    </button>
                )}
              <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light disabled:bg-primary/70 disabled:cursor-not-allowed transition-colors"
              >
                  {isLoading ? <Spinner /> : 'उत्तर मिळवा'}
              </button>
          </div>
        </form>
      </div>

      {error && <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
      
      {result && (
        <div className="mt-8 bg-white text-slate-900 border-2 border-primary/20 rounded-3xl shadow-xl p-8 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BrainIcon className="w-24 h-24" />
          </div>
          <h3 className="text-2xl font-black mb-4 text-primary">मुख्य उत्तर</h3>
          <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl text-3xl font-black text-slate-800 mb-6 flex justify-between items-center flex-wrap gap-2 shadow-inner">
            <div className="whitespace-pre-wrap">{sanitizeText(result.answer)}</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
              {formula && (
                  <button 
                      onClick={() => setIsFormulaVisible(!isFormulaVisible)}
                      className="px-3 py-1.5 bg-secondary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-light transition-all duration-150 active:scale-95 flex items-center gap-2"
                  >
                      <BrainIcon className="w-4 h-4" />
                      {isFormulaVisible ? 'सूत्र लपवा' : 'सूत्र पहा'}
                  </button>
              )}
              <button 
                  onClick={() => setIsExplanationVisible(!isExplanationVisible)}
                  className="px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95 flex items-center gap-2"
              >
                  <LightbulbIcon className="w-4 h-4" />
                  {isExplanationVisible ? 'स्पष्टीकरण लपवा' : 'स्पष्टीकरण पहा'}
              </button>
          </div>
          
          {isFormulaVisible && formula && (
              <div className="animate-fade-in mb-6">
                  <h4 className="text-sm font-bold text-secondary-dark mb-2 uppercase tracking-wider">वापरलेले सूत्र:</h4>
                  <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 p-4 bg-amber-50 border border-amber-200 rounded-lg whitespace-pre-wrap prose-p:my-2 prose-li:my-2 shadow-inner">
                      <ReactMarkdown>{sanitizeText(formula)}</ReactMarkdown>
                  </div>
              </div>
          )}
          
          {isExplanationVisible && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-2">सविस्तर स्पष्टीकरण</h3>
              <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 whitespace-pre-wrap prose-p:my-2 prose-li:my-2">
                <ReactMarkdown>{sanitizeText(explanationWithoutFormula || result.explanation)}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {isConceptLoading && <div className="mt-6 flex justify-center items-center py-10"><div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}
      {conceptError && <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{conceptError}</div>}
      
      {conceptResult && (
        <div className="mt-6 bg-sky-50 text-slate-900 shadow-lg rounded-xl p-6 animate-fade-in border border-sky-200">
           <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <LightbulbIcon className="w-8 h-8 text-sky-500 flex-shrink-0" />
            {topic.name}: संकल्पना
          </h3>
          <div className="p-4 bg-white border border-slate-200 rounded-md text-lg font-bold text-slate-900 mb-4 flex justify-between items-center flex-wrap gap-2">
            <span>{sanitizeText(conceptResult.answer)}</span>
            <button 
              onClick={() => setIsConceptExplanationVisible(!isConceptExplanationVisible)}
              className="px-3 py-1.5 bg-sky-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-150 active:scale-95"
            >
              {isConceptExplanationVisible ? 'स्पष्टीकरण लपवा' : 'स्पष्टीकरण पहा'}
            </button>
          </div>
          
          {isConceptExplanationVisible && (
            <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 animate-fade-in whitespace-pre-wrap prose-p:my-2 prose-li:my-2">
               <ReactMarkdown>{sanitizeText(conceptResult.explanation)}</ReactMarkdown>
            </div>
          )}
        </div>
      )}

      {isExpertLoading && <div className="mt-6 flex justify-center items-center py-10"><div className="w-8 h-8 border-4 border-secondary-light border-t-transparent rounded-full animate-spin"></div></div>}
      {expertError && <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{expertError}</div>}
      
      {expertResult && (
        <div className="mt-6 bg-white text-slate-900 shadow-xl rounded-xl p-6 animate-fade-in border border-secondary-light/50">
           <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BrainIcon className="w-8 h-8 text-secondary-light flex-shrink-0" />
            तज्ञ मोड आव्हान
          </h3>
          <div className="p-4 bg-slate-100 border border-slate-200 rounded-md text-lg font-bold text-slate-900 mb-4 flex justify-between items-center flex-wrap gap-2">
            <span>{sanitizeText(expertResult.answer)}</span>
            <button 
              onClick={() => setIsExpertExplanationVisible(!isExpertExplanationVisible)}
              className="px-3 py-1.5 bg-secondary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-light transition-all duration-150 active:scale-95"
            >
              {isExpertExplanationVisible ? 'स्पष्टीकरण लपवा' : 'स्पष्टीकरण पहा'}
            </button>
          </div>
          
          {isExpertExplanationVisible && (
            <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 animate-fade-in whitespace-pre-wrap prose-p:my-2 prose-li:my-2">
               <ReactMarkdown>{sanitizeText(expertResult.explanation)}</ReactMarkdown>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
