
import React from 'react';
import type { View } from '../App';
import { HomeIcon, CameraIcon, HistoryIcon } from './Icons';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const navItems: { view: View; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { view: 'home', label: 'मुख्यपृष्ठ', icon: HomeIcon },
  { view: 'photo', label: 'फोटो', icon: CameraIcon },
  { view: 'history', label: 'इतिहास', icon: HistoryIcon },
];

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-primary-dark shadow-[0_-2px_6px_rgba(0,0,0,0.15)] z-20">
      <div className="flex justify-around items-center h-16 md:h-20 max-w-4xl mx-auto w-full">
        {navItems.map(item => {
          const isActive = currentView === item.view;
          // The sub-views should also highlight their parent nav item
          const isHomeParent = (item.view === 'home' && (currentView === 'subtopics' || currentView === 'calculator' || currentView === 'practice' || currentView === 'daily_challenge'));

          const activeState = isActive || isHomeParent;

          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 focus:outline-none ${
                activeState ? 'text-white scale-105 border-b-4 border-secondary' : 'text-violet-200 hover:text-white border-b-4 border-transparent'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className="w-6 h-6 md:w-7 md:h-7 mb-1" />
              <span className={`text-[10px] md:text-sm ${activeState ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
