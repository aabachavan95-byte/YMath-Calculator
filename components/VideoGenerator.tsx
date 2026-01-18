
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import type { GenerateVideosOperation } from "@google/genai";
import { BackArrowIcon, UploadIcon, VideoIcon } from './Icons';

interface VideoGeneratorProps {
  onBack: () => void;
}

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve((reader.result as string).split(',')[1]);
        };
        reader.onerror = error => reject(error);
    });
};

const loadingMessages = [
    "🤖 मॉडेल सुरू करत आहे...",
    "✨ कल्पनांना वास्तवात बदलत आहे...",
    " फ्रेम-बाय-फ्रेम तयार करत आहे...",
    "🎬 व्हिडिओ एकत्र जोडत आहे...",
    "⏳ यास काही मिनिटे लागू शकतात, कृपया थांबा...",
    "🎨 अंतिम स्वरूप देत आहे...",
    " 거의 पूर्ण झाले...",
];

export const VideoGenerator: React.FC<VideoGeneratorProps> = ({ onBack }) => {
    const [apiKeySelected, setApiKeySelected] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [resolution, setResolution] = useState<'720p' | '1080p'>('720p');
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
    
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const loadingIntervalRef = useRef<number | null>(null);

    const checkApiKey = useCallback(async () => {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setApiKeySelected(hasKey);
    }, []);

    useEffect(() => {
        checkApiKey();
        return () => {
            if (loadingIntervalRef.current) {
                clearInterval(loadingIntervalRef.current);
            }
        };
    }, [checkApiKey]);

    const handleSelectKey = async () => {
        await window.aistudio.openSelectKey();
        setApiKeySelected(true); // Assume success to avoid race condition
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 4 * 1024 * 1024) { // 4MB limit
                setError("फोटो 4MB पेक्षा कमी आकाराचा असावा.");
                return;
            }
            setError(null);
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };
    
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt && !image) {
            setError("व्हिडिओ तयार करण्यासाठी कृपया एक प्रॉम्प्ट किंवा फोटो द्या.");
            return;
        }
        
        setError(null);
        setVideoUrl(null);
        setIsLoading(true);

        // Start cycling through loading messages
        let messageIndex = 0;
        loadingIntervalRef.current = window.setInterval(() => {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            setLoadingMessage(loadingMessages[messageIndex]);
        }, 4000);

        try {
            // Re-create instance to get latest key
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const imagePayload = image ? {
                imageBytes: await fileToBase64(image),
                mimeType: image.type,
            } : undefined;

            let operation: GenerateVideosOperation = await ai.models.generateVideos({
                model: 'veo-3.1-fast-generate-preview',
                prompt,
                image: imagePayload,
                config: {
                    numberOfVideos: 1,
                    resolution,
                    aspectRatio,
                }
            });

            while (!operation.done) {
                await new Promise(resolve => setTimeout(resolve, 10000)); // Poll every 10 seconds
                operation = await ai.operations.getVideosOperation({ operation: operation });
            }

            const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
            if (downloadLink) {
                // The response.body contains the MP4 bytes. You must append an API key when fetching from the download link.
                const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
                if (!videoResponse.ok) {
                    throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
                }
                const videoBlob = await videoResponse.blob();
                setVideoUrl(URL.createObjectURL(videoBlob));
            } else {
                throw new Error("व्हिडिओ निर्मिती अयशस्वी झाली. कोणताही व्हिडिओ URI मिळाला नाही.");
            }

        } catch (err) {
            console.error("Video generation error:", err);
            let errorMessage = 'एक अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.';
            if (err instanceof Error) {
                if (err.message.includes("Requested entity was not found.")) {
                    errorMessage = "तुमची API की अवैध आहे किंवा बिलिंग सक्षम नाही. कृपया एक वैध की निवडा.";
                    setApiKeySelected(false); // Reset key state
                } else if (err.message.includes("429")) {
                    errorMessage = "खूप जास्त विनंत्या. कृपया काही वेळ थांबा आणि पुन्हा प्रयत्न करा.";
                } else {
                    errorMessage = err.message;
                }
            }
            setError(`त्रुटी: ${errorMessage}`);
        } finally {
            setIsLoading(false);
            if (loadingIntervalRef.current) {
                clearInterval(loadingIntervalRef.current);
            }
        }
    }, [prompt, image, resolution, aspectRatio]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-primary/90 flex flex-col items-center justify-center z-50 text-white p-4 animate-fade-in">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-6 text-xl font-bold">{loadingMessage}</p>
                <p className="mt-2 text-sm text-slate-200">व्हिडिओ तयार होत आहे...</p>
            </div>
        );
    }
    
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
                    <VideoIcon className="w-8 h-8 text-primary"/>
                    AI व्हिडिओ निर्मिती
                </h2>

                {!apiKeySelected ? (
                    <div className="text-center p-6 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                        <h3 className="text-lg font-bold text-slate-800">API की आवश्यक आहे</h3>
                        <p className="mt-2 text-slate-600">
                            Veo सह व्हिडिओ निर्मितीसाठी बिलिंग सक्षम असलेली API की आवश्यक आहे.
                        </p>
                        <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-1 block">
                            बिलिंगबद्दल अधिक जाणून घ्या
                        </a>
                        <button 
                            onClick={handleSelectKey} 
                            className="mt-4 inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
                        >
                            API की निवडा
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="prompt" className="block text-sm font-medium text-slate-600 mb-1">प्रॉम्प्ट (वर्णन)</label>
                                <textarea
                                    id="prompt"
                                    rows={4}
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="उदा. एक रोबोट लाल स्केटबोर्ड धरून आहे."
                                    className="w-full px-3 py-2 bg-slate-50 text-slate-900 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-light focus:border-primary-light placeholder:text-slate-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-1">फोटो अपलोड करा (ऐच्छिक)</label>
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
                                    {imagePreview ? (
                                        <div>
                                           <img src={imagePreview} alt="Preview" className="max-h-40 mx-auto rounded-md" />
                                           <p className="mt-4 font-semibold text-primary hover:underline">फोटो बदला</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center text-slate-500">
                                            <UploadIcon />
                                            <p className="mt-2 font-semibold text-slate-700">फोटो अपलोड करा</p>
                                            <p className="text-sm">सुरुवातीचा फोटो निवडा</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-2">रिझोल्यूशन</label>
                                    <div className="flex gap-4">
                                        {(['720p', '1080p'] as const).map(res => (
                                            <label key={res} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="resolution" value={res} checked={resolution === res} onChange={() => setResolution(res)} className="form-radio text-primary focus:ring-primary-light" />
                                                <span className="text-sm text-slate-700">{res}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-600 mb-2">आस्पेक्ट रेशो</label>
                                    <div className="flex gap-4">
                                        {(['16:9', '9:16'] as const).map(ratio => (
                                            <label key={ratio} className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="aspectRatio" value={ratio} checked={aspectRatio === ratio} onChange={() => setAspectRatio(ratio)} className="form-radio text-primary focus:ring-primary-light" />
                                                <span className="text-sm text-slate-700">{ratio}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light disabled:bg-primary/70 disabled:cursor-not-allowed transition-colors"
                        >
                            व्हिडिओ तयार करा
                        </button>
                    </form>
                )}
            </div>

            {error && <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}

            {videoUrl && (
                <div className="mt-6 bg-white text-slate-900 border border-slate-200 rounded-xl shadow-lg p-6 animate-fade-in">
                    <h3 className="text-xl font-bold mb-4">तुमचा व्हिडिओ तयार आहे!</h3>
                    <video src={videoUrl} controls className="w-full rounded-lg" />
                </div>
            )}
        </div>
    );
};
