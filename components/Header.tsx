
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-10 bg-primary-dark shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl font-bold text-white">यशस्वी गणित कॅल्क्युलेटर</h1>
                    <p className="text-[11px] sm:text-xs text-violet-200">स्पर्धा परीक्षेसाठी एकमेव सोपे आणि यशस्वी गणितीय कॅल्कुलेटर</p>
                </div>
            </div>
        </header>
    );
};
