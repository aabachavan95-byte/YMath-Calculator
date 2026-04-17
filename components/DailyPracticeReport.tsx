import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { BackArrowIcon } from './Icons';

interface DailyPracticeReportProps {
  onBack: () => void;
}

const COLORS = ['#10b981', '#ef4444', '#94a3b8'];

export const DailyPracticeReport: React.FC<DailyPracticeReportProps> = ({ onBack }) => {
  // Mock data based on user's request
  const data = [
    { name: 'संख्या पद्धती', Solved: 15, Wrong: 5, Unsolved: 10 },
    { name: 'टक्केवारी', Solved: 20, Wrong: 8, Unsolved: 5 },
    { name: 'गुणोत्तर व प्रमाण', Solved: 12, Wrong: 4, Unsolved: 8 },
    { name: 'वेळ आणि काम', Solved: 18, Wrong: 6, Unsolved: 4 },
    { name: 'वेग वेळ अंतर', Solved: 10, Wrong: 7, Unsolved: 12 },
    { name: 'नफा आणि तोटा', Solved: 22, Wrong: 3, Unsolved: 2 },
  ];

  const pieData = [
    { name: 'सोडवलेले प्रश्न', value: data.reduce((acc, curr) => acc + curr.Solved, 0) },
    { name: 'चुकीचे प्रश्न', value: data.reduce((acc, curr) => acc + curr.Wrong, 0) },
    { name: 'न सोडवलेले प्रश्न', value: data.reduce((acc, curr) => acc + curr.Unsolved, 0) },
  ];

  return (
    <div className="p-4 sm:p-6 bg-slate-50 min-h-screen animate-fade-in pb-24">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 bg-white rounded-full shadow-sm hover:bg-slate-100 transition-colors"
        >
          <BackArrowIcon />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">दैनंदिन सराव अहवाल</h1>
      </div>

      <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
        <h2 className="text-base sm:text-lg font-bold text-slate-700 mb-4">विषयनिहाय कामगिरी विश्लेषण (Bar Chart)</h2>
        <div className="h-72 sm:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10 }} 
                interval={0} 
                angle={-45} 
                textAnchor="end" 
                height={70}
                stroke="#64748b"
              />
              <YAxis tick={{ fontSize: 10 }} stroke="#64748b" />
              <Tooltip 
                cursor={{ fill: '#f1f5f9' }} 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }} 
              />
              <Legend 
                wrapperStyle={{ paddingTop: '10px', fontSize: '11px' }} 
                iconSize={10}
              />
              <Bar dataKey="Solved" name="सोडवलेले" fill="#10b981" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Wrong" name="चुकीचे" fill="#ef4444" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Unsolved" name="न सोडवलेले" fill="#94a3b8" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-6 rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <h2 className="text-base sm:text-lg font-bold text-slate-700 mb-4">एकूण कामगिरी (Pie Chart)</h2>
        <div className="h-64 sm:h-72 w-full flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 25, bottom: 10 }}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="55%"
                paddingAngle={5}
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={true}
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }} />
              <Legend 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                iconSize={10}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
