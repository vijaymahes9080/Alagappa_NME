import React from 'react';
import { BarChart3, TrendingUp, Download, PieChart } from 'lucide-react';

export default function DepartmentAnalyticsMatrix({ data }) {
  const departments = [
    { name: "Computer Science", fill: 92, status: "High Demand", trending: "+14%" },
    { name: "Management Studies", fill: 100, status: "Capacity Reached", trending: "+22%" },
    { name: "Commerce", fill: 68, status: "Moderate", trending: "+5%" },
    { name: "Bio-Technology", fill: 78, status: "High Demand", trending: "+12%" },
    { name: "Tamil Literature", fill: 45, status: "Seats Open", trending: "+2%" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-alagappa-gold" />
          <span>Department Registration Velocity Matrix</span>
        </h3>
        <button className="flex items-center gap-1 text-xs font-bold text-alagappa-blue dark:text-alagappa-gold hover:underline">
          <Download className="w-4 h-4" /> Export CSV Matrix
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((d, idx) => (
          <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-900 dark:text-white">{d.name}</span>
              <span className="bg-emerald-500/10 text-emerald-600 font-bold px-2 py-0.5 rounded">{d.trending}</span>
            </div>

            <div className="flex justify-between text-slate-500">
              <span>Status: <strong className="text-slate-700 dark:text-slate-300">{d.status}</strong></span>
              <span className="font-mono font-bold text-alagappa-blue dark:text-alagappa-gold">{d.fill}% Capacity</span>
            </div>

            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${d.fill >= 100 ? 'bg-rose-500' : 'bg-alagappa-blue dark:bg-alagappa-gold'}`} 
                style={{ width: `${d.fill}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
