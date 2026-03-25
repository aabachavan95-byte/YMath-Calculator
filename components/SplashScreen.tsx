
import React, { useEffect, useState } from 'react';
import { AppLogoIcon } from './Icons';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const t = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - t, 3); // cubic ease out
      const newProgress = Math.min(Math.round(easeOut * 100), 100);
      
      setProgress(newProgress);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50 animate-splash-fade-out"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) {
          onAnimationEnd();
        }
      }}
    >
      <div className="flex flex-col items-center justify-center flex-grow pb-16">
        <div className="p-4 rounded-full">
          <AppLogoIcon className="w-56 h-56" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-6 text-center px-4">यशस्वी गणित कॅल्क्युलेटर</h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-200 mt-3 text-center px-6 max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed">स्पर्धा परीक्षेसाठी एकमेव सोपे आणि यशस्वी गणितीय कॅल्कुलेटर</p>
      </div>
      <div className="w-64 mb-20">
        <div className="flex justify-between items-end mb-2 px-1">
          <span className="text-slate-300 text-xs font-medium tracking-wider">Initializing modules...</span>
          <span className="text-white font-bold text-sm">{progress}%</span>
        </div>
        <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
