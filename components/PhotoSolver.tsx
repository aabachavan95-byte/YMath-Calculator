import React, { useState, useCallback, useRef } from 'react';
import type { GeminiResponse } from '../types';
import { solveImageProblem } from '../services/geminiService';
import { addHistoryItem } from '../services/historyService';
import { Spinner } from './Spinner';
import { BackArrowIcon, CameraIcon, UploadIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

interface PhotoSolverProps {
  onBack: () => void;
}

const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target?.result as string);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
};

export const PhotoSolver: React.FC<PhotoSolverProps> = ({ onBack }) => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<GeminiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formula, setFormula] = useState<string | null>(null);
    const [explanationWithoutFormula, setExplanationWithoutFormula] = useState<string>('');
    const [isExplanationVisible, setIsExplanationVisible] = useState(true);
    const [isFormulaVisible, setIsFormulaVisible] = useState(true);

    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            setResult(null);
            setError(null);
            setPrompt(''); // Clear prompt on new image selection
        }
    };

    const handleSubmit = useCallback(async () => {
        if (!image) {
            setError("🖼️ कृपया उत्तर मिळवण्यासाठी प्रथम तुमच्या गणिताच्या प्रश्नाचा फोटो निवडा.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const dataUri = await fileToDataUri(image);
            const base64Data = dataUri.split(',')[1];
            
            // Detect if Marathi digits are used in the prompt
            const hasMarathiDigits = /[०-९]/.test(prompt);
            
            const finalPrompt = hasMarathiDigits 
                ? convertMarathiToEnglish(prompt.trim()) || `Solve the math problem shown in this image.`
                : prompt.trim() || `Solve the math problem shown in this image.`;

            let response = await solveImageProblem(base64Data, image.type, finalPrompt);
            
            // If Marathi digits were used, convert response back
            if (hasMarathiDigits) {
                response = {
                    ...response,
                    answer: convertEnglishToMarathi(response.answer),
                    explanation: convertEnglishToMarathi(response.explanation)
                };
            }

            setResult(response);

            // Formula extraction logic
            const formulaRegex = /(\*?\*?सूत्र\*?\*?:?\s*[\s\S]*?)(?=\*?\*?पायऱ्या\*?\*?|\*?\*?स्पष्टीकरण\*?\*?|$)/i;
            const formulaMatch = response.explanation.match(formulaRegex);
            
            if (formulaMatch && formulaMatch[1]) {
                const formulaText = formulaMatch[1].trim();
                const hasContent = formulaText.replace(/\*?\*?सूत्र\*?\*?:?/i, '').trim().length > 0;
                
                if (hasContent) {
                    setFormula(formulaText);
                    setExplanationWithoutFormula(response.explanation.replace(formulaRegex, '').trim());
                } else {
                    setFormula(null);
                    setExplanationWithoutFormula(response.explanation);
                }
            } else {
                setFormula(null);
                setExplanationWithoutFormula(response.explanation);
            }

            addHistoryItem({
                type: 'photo',
                topicName: 'फोटो गणित सोलव्हर',
                imagePreview: dataUri,
                prompt: prompt.trim(),
                result: response,
            });
        } catch (err) {
            if (!navigator.onLine) {
                setError('🌐 इंटरनेट कनेक्शन उपलब्ध नाही. कृपया तुमचे कनेक्शन तपासा आणि पुन्हा प्रयत्न करा.');
            } else if (err instanceof Error) {
                setError(`🤔 फोटोमधील प्रश्नाचे उत्तर मिळवताना समस्या आली: ${err.message}`);
            } else {
                setError('🤔 क्षमस्व, फोटोमधील प्रश्नाचे उत्तर मिळवताना एक अनपेक्षित समस्या आली.');
            }
        } finally {
            setIsLoading(false);
        }
    }, [image, prompt]);

    return (
        <div className="p-4 sm:p-6 animate-fade-in bg-white">
            <button 
                onClick={onBack} 
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95 mb-4">
                <BackArrowIcon />
                <span>मागे जा</span>
            </button>
            <div className="bg-white text-slate-900 border border-slate-200 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <CameraIcon />
                    फोटो गणित सोलव्हर
                </h2>
                <div 
                    className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary-light hover:bg-slate-50 transition-colors duration-200"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {preview ? (
                        <div>
                           <img src={preview} alt="Problem preview" className="max-h-60 mx-auto rounded-md" />
                           <p className="mt-4 font-semibold text-primary hover:underline">फोटो बदला</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-slate-500">
                            <UploadIcon />
                            <p className="mt-2 font-semibold text-slate-700">फोटो अपलोड करा</p>
                            <p className="text-sm">तुमच्या गणिताच्या प्रश्नाचा फोटो निवडा</p>
                        </div>
                    )}
                </div>

                {preview && (
                    <div className="mt-4">
                        <label htmlFor="custom-prompt" className="block text-sm font-medium text-slate-600 mb-1">
                            तुमचा विशिष्ट प्रश्न येथे लिहा (ऐच्छिक)
                        </label>
                        <textarea
                            id="custom-prompt"
                            rows={3}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="उदा. या प्रश्नातील पायथागोरस प्रमेय समजावून सांगा."
                            className="w-full px-3 py-2 bg-slate-50 text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light placeholder:text-slate-400"
                        />
                    </div>
                )}

                 <button
                    onClick={handleSubmit}
                    disabled={isLoading || !image}
                    className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light disabled:bg-primary/70 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? <Spinner /> : 'उत्तर मिळवा'}
                </button>
            </div>
            
            {error && <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
      
            {result && (
                <div className="mt-6 bg-white text-slate-900 border border-slate-200 rounded-xl shadow-lg p-6 animate-fade-in">
                    <h3 className="text-xl font-bold mb-2">उत्तर</h3>
                    <div className="p-4 bg-slate-100 border border-slate-200 rounded-md text-lg font-bold text-slate-900 mb-4 whitespace-pre-wrap">
                        {result.answer}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {formula && (
                            <button 
                                onClick={() => setIsFormulaVisible(!isFormulaVisible)}
                                className="px-3 py-1.5 bg-secondary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-light transition-all duration-150 active:scale-95 flex items-center gap-2"
                            >
                                {isFormulaVisible ? 'सूत्र लपवा' : 'सूत्र पहा'}
                            </button>
                        )}
                        <button 
                            onClick={() => setIsExplanationVisible(!isExplanationVisible)}
                            className="px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95 flex items-center gap-2"
                        >
                            {isExplanationVisible ? 'स्पष्टीकरण लपवा' : 'स्पष्टीकरण पहा'}
                        </button>
                    </div>

                    {isFormulaVisible && formula && (
                        <div className="animate-fade-in mb-6">
                            <h4 className="text-sm font-bold text-secondary-dark mb-2 uppercase tracking-wider">वापरलेले सूत्र:</h4>
                            <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 p-4 bg-amber-50 border border-amber-200 rounded-lg whitespace-pre-wrap prose-p:my-2 prose-li:my-2 shadow-inner">
                                <ReactMarkdown>{formula}</ReactMarkdown>
                            </div>
                        </div>
                    )}
                    
                    {isExplanationVisible && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold mb-2">सविस्तर स्पष्टीकरण</h3>
                            <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 whitespace-pre-wrap prose-p:my-2 prose-li:my-2">
                                <ReactMarkdown>{explanationWithoutFormula || result.explanation}</ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};