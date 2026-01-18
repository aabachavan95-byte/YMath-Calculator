
import React from 'react';
import { AppLogoIcon } from './Icons';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  return (
    <div 
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50 animate-splash-fade-out"
      onAnimationEnd={onAnimationEnd}
    >
      <div className="flex flex-col items-center justify-center flex-grow pb-16">
        <div className="p-4 rounded-full">
          <AppLogoIcon className="w-56 h-56" />
        </div>
        <h1 className="text-2xl font-bold text-white mt-6 text-center px-4">यशस्वी गणित कॅल्क्युलेटर</h1>
        <p className="text-sm text-slate-200 mt-2 text-center px-4 whitespace-nowrap">स्पर्धा परीक्षेसाठी एकमेव सोपे आणि यशस्वी गणितीय कॅल्कुलेटर</p>
      </div>
      <div className="w-64 h-1.5 bg-white/30 rounded-full overflow-hidden mb-20">
        <div className="h-full bg-white rounded-full animate-progress-fill"></div>
      </div>
    </div>
  );
};
