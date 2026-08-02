import React, { useState } from 'react';
import { Award, Plus, Check } from 'lucide-react';

export default function GradingRubricBuilder() {
  const [rubrics, setRubrics] = useState([
    { title: "Continuous Assessment Test I", maxScore: 10, weight: "40%" },
    { title: "Assignment & Practical Code Demo", maxScore: 10, weight: "40%" },
    { title: "Class Attendance & Seminar Participation", maxScore: 5, weight: "20%" }
  ]);

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-alagappa-gold" />
          <span>Internal Assessment Evaluation Rubric</span>
        </h4>
        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
          Total Weight: 100% (25 Marks)
        </span>
      </div>

      <div className="space-y-2 text-xs">
        {rubrics.map((r, i) => (
          <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl flex justify-between items-center border border-slate-200 dark:border-slate-700">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{r.title}</p>
              <p className="text-slate-500">Max Score: {r.maxScore} Marks</p>
            </div>
            <span className="font-mono font-bold text-alagappa-blue dark:text-alagappa-gold bg-alagappa-blue/10 dark:bg-alagappa-gold/10 px-2.5 py-1 rounded-lg">
              {r.weight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
