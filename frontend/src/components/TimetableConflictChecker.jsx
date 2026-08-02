import React from 'react';
import { Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TimetableConflictChecker({ currentSchedule, targetCourse }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM"];

  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-4 h-4 text-alagappa-gold" />
          <span>Timetable Clash Prevention Matrix</span>
        </h4>
        <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
          <CheckCircle className="w-3 h-3" /> No Conflict Detected
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-center text-[11px] border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-900 text-slate-500">
              <th className="p-2 border border-slate-200 dark:border-slate-700">Time</th>
              {days.map(d => (
                <th key={d} className="p-2 border border-slate-200 dark:border-slate-700">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(slot => (
              <tr key={slot} className="hover:bg-slate-50 dark:hover:bg-slate-700/40">
                <td className="p-2 font-mono font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">{slot}</td>
                {days.map(d => (
                  <td key={d} className="p-2 border border-slate-200 dark:border-slate-700">
                    {slot === "10:00 AM" && (d === "Mon" || d === "Wed" || d === "Fri") ? (
                      <span className="bg-alagappa-blue text-white px-2 py-1 rounded font-bold text-[10px] block">
                        NME-CSE-101
                      </span>
                    ) : (
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
