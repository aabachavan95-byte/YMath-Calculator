
import React, { useState, useEffect, useCallback } from 'react';
import { getHistory, clearHistory } from '../services/historyService';
import type { HistoryItem } from '../types';
import { BackArrowIcon, TrashIcon, ChevronDownIcon, CalendarIcon } from './Icons';
import ReactMarkdown from 'react-markdown';

interface HistoryProps {
    onBack: () => void;
}

// Helper interface for grouped items
interface DailyChallengeGroup {
    type: 'group';
    id: string; // unique id for key
    dateKey: string; // For grouping comparison
    displayDate: string;
    timestamp: number; // For sorting the main list
    items: HistoryItem[];
}

type HistoryEntry = HistoryItem | DailyChallengeGroup;

const HistoryCard: React.FC<{ item: HistoryItem; isGroupItem?: boolean }> = ({ item, isGroupItem = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const formatTimestamp = (timestamp: number) => {
        return new Intl.DateTimeFormat('mr-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(new Date(timestamp));
    };

    const title = item.topicName;

    return (
        <div className={`bg-white text-slate-900 ${isGroupItem ? 'border-b last:border-b-0 border-slate-100 rounded-none shadow-none' : 'rounded-xl shadow-lg border border-slate-200'} overflow-hidden transition-all duration-300`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full text-left flex justify-between items-center ${isGroupItem ? 'p-3 hover:bg-slate-50' : 'p-4'}`}
                aria-expanded={isExpanded}
            >
                <div className="flex-1 pr-4">
                    <p className={`font-bold text-slate-800 truncate ${isGroupItem ? 'text-sm' : ''}`}>{title}</p>
                    {!isGroupItem && <p className="text-sm text-slate-500">{formatTimestamp(item.timestamp)}</p>}
                </div>
                <div className={`transform transition-transform duration-200 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className={isGroupItem ? "w-4 h-4" : "w-6 h-6"} />
                </div>
            </button>
            {isExpanded && (
                <div className={`border-t border-slate-200 animate-fade-in text-slate-700 ${isGroupItem ? 'p-3 bg-slate-50/50' : 'p-4'}`}>
                    {item.type === 'photo' && item.imagePreview && (
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2 text-slate-600">प्रश्न (फोटो):</h4>
                            <img src={item.imagePreview} alt="Math problem" className="max-w-xs mx-auto rounded-lg border border-slate-300" />
                        </div>
                    )}
                     {item.type === 'photo' && item.prompt && (
                        <div className="mb-4">
                             <h4 className="font-semibold mb-2 text-slate-600">तुमचा प्रश्न:</h4>
                             <p className="text-sm bg-slate-100 p-3 rounded-md text-slate-700">
                                {item.prompt}
                            </p>
                        </div>
                    )}
                     {item.type === 'text' && item.inputs && (
                        <div className="mb-4">
                             <h4 className="font-semibold mb-2 text-slate-600">
                                {item.topicName.includes("दैनंदिन") ? "प्रश्न तपशील:" : "दिलेली माहिती:"}
                             </h4>
                             <ul className="list-disc list-inside text-sm bg-slate-100 p-3 rounded-md">
                                {Object.entries(item.inputs).map(([key, value]) => (
                                    <li key={key} className="mb-1 last:mb-0">
                                        <span className="font-medium text-slate-800">{key}:</span> 
                                        <span className="ml-1 whitespace-pre-wrap">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <h4 className="font-semibold mb-2 text-slate-600">उत्तर:</h4>
                    <div className="p-3 bg-slate-100 border border-slate-200 rounded-md text-md font-bold text-slate-900 mb-4">
                        {item.result.answer}
                    </div>

                    <h4 className="font-semibold mb-2 text-slate-600">स्पष्टीकरण:</h4>
                    <div className="prose prose-sm sm:prose-base max-w-none text-slate-800 whitespace-pre-wrap prose-p:my-2 prose-li:my-2">
                        <ReactMarkdown>{item.result.explanation}</ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
};

const DailyChallengeGroupCard: React.FC<{ group: DailyChallengeGroup }> = ({ group }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white border border-indigo-100 rounded-xl shadow-md overflow-hidden mb-4">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-4 bg-gradient-to-r from-indigo-50 to-white flex justify-between items-start hover:from-indigo-100 transition-colors"
            >
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-500 text-white rounded-lg shadow-sm mt-1">
                        <CalendarIcon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-slate-800 text-lg leading-tight">दैनंदिन आव्हान</h3>
                        
                        <p className="text-sm text-indigo-700 font-bold mt-1">{group.displayDate}</p>
                        <p className="text-xs text-slate-600 font-medium mt-1">{group.items.length} प्रश्न सोडवले</p>
                    </div>
                </div>
                <div className={`transform transition-transform duration-200 text-indigo-400 mt-2 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </div>
            </button>
            
            {isExpanded && (
                <div className="border-t border-indigo-100 animate-fade-in bg-white">
                    {group.items.map(item => (
                        <HistoryCard key={item.id} item={item} isGroupItem={true} />
                    ))}
                </div>
            )}
        </div>
    );
};

export const History: React.FC<HistoryProps> = ({ onBack }) => {
    const [historyEntries, setHistoryEntries] = useState<HistoryEntry[]>([]);
    const [hasHistory, setHasHistory] = useState(false);

    const processHistory = useCallback((rawHistory: HistoryItem[]) => {
        if (rawHistory.length === 0) {
            setHistoryEntries([]);
            setHasHistory(false);
            return;
        }

        setHasHistory(true);
        const groups: Record<string, HistoryItem[]> = {};
        const otherItems: HistoryItem[] = [];

        rawHistory.forEach(item => {
            if (item.topicName.includes('दैनंदिन') || item.topicName.includes('Daily Challenge')) {
                const dateKey = new Date(item.timestamp).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                });
                
                if (!groups[dateKey]) {
                    groups[dateKey] = [];
                }
                groups[dateKey].push(item);
            } else {
                otherItems.push(item);
            }
        });

        const groupEntries: DailyChallengeGroup[] = Object.entries(groups).map(([dateKey, items]) => {
            const sortedItems = items.sort((a, b) => b.timestamp - a.timestamp);
            return {
                type: 'group',
                id: `group-${dateKey}`,
                dateKey,
                displayDate: new Date(items[0].timestamp).toLocaleDateString('mr-IN', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                }),
                timestamp: sortedItems[0].timestamp,
                items: sortedItems
            };
        });

        const combined = [...otherItems, ...groupEntries].sort((a, b) => b.timestamp - a.timestamp);
        setHistoryEntries(combined);
    }, []);

    useEffect(() => {
        const raw = getHistory();
        processHistory(raw);

        const handleHistoryUpdate = () => {
            const updatedRaw = getHistory();
            processHistory(updatedRaw);
        };
        window.addEventListener('historyCleared', handleHistoryUpdate);
        
        return () => {
            window.removeEventListener('historyCleared', handleHistoryUpdate);
        };
    }, [processHistory]);

    const handleClearHistory = useCallback(() => {
        if (window.confirm("तुम्हाला नक्कीच सर्व इतिहास हटवायचा आहे का? ही क्रिया पूर्ववत करता येणार नाही.")) {
            clearHistory();
        }
    }, []);

    return (
        <div className="p-4 sm:p-6 animate-fade-in bg-white min-h-screen">
            <div className="flex justify-between items-center mb-6 gap-4">
                <button 
                    onClick={onBack} 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light transition-all duration-150 active:scale-95">
                    <BackArrowIcon />
                    <span>मागे जा</span>
                </button>
                {hasHistory && (
                    <button 
                        onClick={handleClearHistory}
                        className="flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150 active:scale-95"
                    >
                        <TrashIcon />
                        <span>इतिहास हटवा</span>
                    </button>
                )}
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">तुमचा हिशोब इतिहास</h1>
            
            {hasHistory ? (
                <div className="space-y-4">
                    {historyEntries.map(entry => {
                        if ('type' in entry && entry.type === 'group') {
                            return <DailyChallengeGroupCard key={entry.id} group={entry} />;
                        } else {
                            return <HistoryCard key={(entry as HistoryItem).id} item={entry as HistoryItem} />;
                        }
                    })}
                </div>
            ) : (
                <div className="text-center py-10 px-4 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200">
                    <p className="text-slate-800">तुमचा कोणताही इतिहास उपलब्ध नाही.</p>
                    <p className="text-sm text-slate-500 mt-2">एकदा तुम्ही काही गणिते सोडवल्यानंतर, ती येथे दिसतील.</p>
                </div>
            )}
        </div>
    );
};
