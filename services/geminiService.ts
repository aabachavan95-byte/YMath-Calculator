
import { GoogleGenAI, Type, HarmCategory, HarmBlockThreshold } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";
import type { GeminiResponse, McqResponse, Difficulty } from '../types';

// NOTE: We initialize the AI client inside each function to ensure 
// we capture the API key correctly at the time of execution.

const model = 'gemini-3-flash-preview';

const systemInstruction = `You are YashaviMath, an expert math tutor for competitive exams in Maharashtra, India. Your purpose is to solve math problems and provide clear, concise, and accurate step-by-step explanations. 

IMPORTANT:
1. All your responses MUST be in simple, clear Marathi.
2. DO NOT use LaTeX, '\frac', or '$' symbols for mathematical formulas. 
3. Use simple plain text characters for math (e.g., use '/', '*', '+', '-' and standard numbers like 150/25).
4. You must ONLY return a valid JSON object. Do not add any markdown formatting like \`\`\`json or \`\`\` outside the JSON structure.
5. Do not include any introductory or concluding text. Just the JSON.`;

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        answer: {
            type: Type.STRING,
            description: "The final numerical or symbolic answer to the math problem."
        },
        explanation: {
            type: Type.STRING,
            description: 'A detailed step-by-step explanation in Marathi. Use markdown for formatting inside this string. Use standard arithmetic symbols like /, *, +, -. DO NOT USE $ or LaTeX.'
        }
    },
    required: ["answer", "explanation"]
};

const mcqResponseSchema = {
    type: Type.OBJECT,
    properties: {
        question: {
            type: Type.STRING,
            description: "The multiple-choice question in Marathi."
        },
        options: {
            type: Type.OBJECT,
            properties: {
                A: { type: Type.STRING, description: "Option A" },
                B: { type: Type.STRING, description: "Option B" },
                C: { type: Type.STRING, description: "Option C" },
                D: { type: Type.STRING, description: "Option D" },
            },
            required: ["A", "B", "C", "D"]
        },
        correctAnswer: {
            type: Type.STRING,
            description: "The key of the correct option (A, B, C, or D)."
        },
        explanation: {
            type: Type.STRING,
            description: 'A detailed step-by-step explanation in Marathi for the correct answer. Use simple math symbols like /, *, +, -. NO LaTeX or $.'
        }
    },
    required: ["question", "options", "correctAnswer", "explanation"]
};

const mcqBatchResponseSchema = {
    type: Type.ARRAY,
    items: mcqResponseSchema,
};

const dailyChallengeResponseSchema = {
    type: Type.ARRAY,
    items: mcqResponseSchema,
};

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

const extractJson = (text: string, isArray: boolean = false): string => {
    let cleanText = text.trim();
    cleanText = cleanText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/, '');
    const firstChar = isArray ? '[' : '{';
    const lastChar = isArray ? ']' : '}';
    const firstIndex = cleanText.indexOf(firstChar);
    const lastIndex = cleanText.lastIndexOf(lastChar);
    if (firstIndex !== -1 && lastIndex !== -1 && lastIndex > firstIndex) {
        return cleanText.substring(firstIndex, lastIndex + 1);
    }
    return cleanText;
};

const geminiRequestWithRetry = async (
    requestFn: () => Promise<GenerateContentResponse>,
    retries = 3,
    delay = 1000
): Promise<GenerateContentResponse> => {
    try {
        return await requestFn();
    } catch (error) {
        const isRetryable = error instanceof Error && 
                            (error.message.toLowerCase().includes('failed to fetch') || 
                             error.message.toLowerCase().includes('network request failed') ||
                             error.message.includes('503') || 
                             error.message.includes('429'));
        const isClientError = error instanceof Error && 
                              (error.message.includes('400') || 
                               error.message.includes('401') || 
                               error.message.includes('403'));
        if (isRetryable && !isClientError && retries > 0) {
            await new Promise(res => setTimeout(res, delay));
            return geminiRequestWithRetry(requestFn, retries - 1, delay * 2);
        }
        throw error;
    }
};

const handleApiError = (error: unknown, contextMessage: string): Error => {
    console.error(`Gemini API Error [${contextMessage}]:`, error);
    let userMessage = "क्षमस्व, एक अनपेक्षित त्रुटी आली आहे.";
    if (error instanceof Error) {
        const msg = error.message.toLowerCase();
        if (msg.includes('failed to fetch') || msg.includes('network request failed')) {
            userMessage = "नेटवर्क समस्या: इंटरनेट कनेक्शन उपलब्ध नाही.";
        } else if (msg.includes('429')) {
            userMessage = "विनंती मर्यादा ओलांडली: कृपया थोडा वेळ थांबा.";
        } else {
             userMessage = `तांत्रिक त्रुटी: ${error.message}`;
        }
    }
    return new Error(`${contextMessage} ${userMessage}`);
};

const parseGeminiResponse = (response: GenerateContentResponse): GeminiResponse => {
    try {
        if (!response.candidates || response.candidates.length === 0) throw new Error("No candidates returned.");
        const text = response.text?.trim();
        if (!text) throw new Error("Response text is empty");
        const cleanedText = extractJson(text, false);
        const parsed = JSON.parse(cleanedText);
        if (parsed.answer && parsed.explanation) {
            return { answer: String(parsed.answer), explanation: String(parsed.explanation) };
        }
        throw new Error("Invalid JSON structure");
    } catch (error) {
        throw new Error("AI कडून मिळालेला प्रतिसाद वाचता आला नाही.");
    }
};

const parseMcqResponse = (response: GenerateContentResponse): McqResponse => {
    try {
        const text = response.text?.trim();
        if (!text) throw new Error("Received empty response.");
        const cleanedText = extractJson(text, false);
        const parsed = JSON.parse(cleanedText);
        if (parsed.question && parsed.options && parsed.correctAnswer && parsed.explanation) {
            return parsed as McqResponse;
        }
        throw new Error("Invalid MCQ JSON");
    } catch (error) {
        throw new Error("सराव प्रश्न लोड करताना त्रुटी आली.");
    }
};

const parseMcqBatchResponse = (response: GenerateContentResponse): McqResponse[] => {
    try {
        const text = response.text?.trim();
        if (!text) throw new Error("Received empty response.");
        const cleanedText = extractJson(text, true);
        const parsedArray = JSON.parse(cleanedText);
        return parsedArray as McqResponse[];
    } catch (error) {
        throw new Error("सराव प्रश्न संच लोड करताना त्रुटी आली.");
    }
};

const parseDailyChallengeResponse = (response: GenerateContentResponse): McqResponse[] => {
    try {
        const text = response.text?.trim();
        if (!text) throw new Error("Received empty response.");
        const cleanedText = extractJson(text, true);
        const parsedArray = JSON.parse(cleanedText);
        return parsedArray;
    } catch (error) {
        throw new Error("Daily Challenge लोड करताना त्रुटी आली.");
    }
};

const getAiClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) throw new Error("API Key उपलब्ध नाही.");
    return new GoogleGenAI({ apiKey });
};

export const solveTextProblem = async (problem: string): Promise<GeminiResponse> => {
    try {
        const ai = getAiClient();
        const response = await geminiRequestWithRetry(() => ai.models.generateContent({
            model: model,
            contents: problem,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                safetySettings: safetySettings,
            },
        }));
        return parseGeminiResponse(response);
    } catch (error) {
        throw handleApiError(error, "प्रश्नाचे उत्तर मिळवण्यात अडचण:");
    }
};

export const generateMcqProblem = async (prompt: string): Promise<McqResponse> => {
    try {
        const ai = getAiClient();
        const response = await geminiRequestWithRetry(() => ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: mcqResponseSchema,
                safetySettings: safetySettings,
                temperature: 1.0,
            },
        }));
        return parseMcqResponse(response);
    } catch (error) {
        throw handleApiError(error, "सराव प्रश्न तयार करताना अडचण:");
    }
};

export const generateMcqBatch = async (topicName: string, level: Difficulty, count: number = 25): Promise<McqResponse[]> => {
    const randomKey = Math.random().toString(36).substring(7);
    const batchPrompt = `तुम्ही एक अत्यंत तज्ञ गणित प्राध्यापक आहात. '${topicName}' या विषयावर ${count} पूर्णपणे नवीन आणि वेगळे बहुपर्यायी प्रश्न (MCQs) तयार करा. 
    
    महत्त्वाचे नियम (वेग आणि विविधतेसाठी):
    १. रँडम सीड: ${randomKey}.
    २. काठीण्य पातळी: ${level === 'easy' ? 'सोपे' : level === 'medium' ? 'मध्यम' : 'कठीण'}.
    ३. प्रश्न पुन्हा येता कामा नये: प्रत्येक प्रश्नातील संख्या, नावे आणि रचना पूर्णपणे नवीन असावी.
    ४. स्पष्टीकरणे: स्पष्टीकरणे अचूक पण अत्यंत संक्षिप्त (Brief) ठेवा. 
    ५. गणीती चिन्हे: स्पष्टीकरणात '$' चिन्ह किंवा LaTeX (उदा. \\frac) वापरू नका. त्याऐवजी साधी चिन्हे (उदा. 150/25) वापरा.
    ६. अचूकता: सर्व गणिती उत्तरे आणि पर्याय तपासून घ्या.`;

    try {
        const ai = getAiClient();
        const response = await geminiRequestWithRetry(() => ai.models.generateContent({
            model: model,
            contents: batchPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: mcqBatchResponseSchema,
                safetySettings: safetySettings,
                temperature: 1.0,
                thinkingConfig: { thinkingBudget: 0 } // Fast response mode
            },
        }));
        return parseMcqBatchResponse(response);
    } catch (error) {
        throw handleApiError(error, "सराव प्रश्न संच तयार करताना अडचण:");
    }
};

export const solveImageProblem = async (base64Image: string, mimeType: string, prompt: string): Promise<GeminiResponse> => {
    try {
        const ai = getAiClient();
        const response = await geminiRequestWithRetry(() => ai.models.generateContent({
            model: model,
            contents: { parts: [{ inlineData: { data: base64Image, mimeType } }, { text: prompt }] },
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                safetySettings: safetySettings,
            },
        }));
        return parseGeminiResponse(response);
    } catch (error) {
        throw handleApiError(error, "फोटोवरून उत्तर मिळवण्यात अडचण:");
    }
};

export const CHALLENGE_QUESTIONS = 15;

export const generateDailyChallenge = async (difficulty: Difficulty): Promise<McqResponse[]> => {
    const sessionId = Date.now() + Math.random().toString(36).substring(7);
    const prompt = `तुम्ही एक अत्यंत तज्ञ गणित प्राध्यापक आहात. ${CHALLENGE_QUESTIONS} पूर्णपणे नवीन MCQs तयार करा. आयडी: ${sessionId}. विविधता आणि अचूकता महत्त्वाची. स्पष्टीकरणात '$' किंवा LaTeX वापरू नका.`;
    
    try {
        const ai = getAiClient();
        const response = await geminiRequestWithRetry(() => ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: dailyChallengeResponseSchema,
                safetySettings: safetySettings,
                temperature: 1.0,
                thinkingConfig: { thinkingBudget: 0 }
            },
        }));
        return parseDailyChallengeResponse(response);
    } catch (error) {
        throw handleApiError(error, "Daily Challenge तयार करण्यात अडचण:");
    }
};
