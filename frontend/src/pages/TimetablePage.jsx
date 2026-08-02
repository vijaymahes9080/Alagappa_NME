import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function TimetablePage() {
  const schedule = [
    { day: "Monday", time: "10:00 AM - 11:00 AM", code: "NME-CSE-101", title: "Python Programming", venue: "Lab 3, Science Block A" },
    { day: "Wednesday", time: "10:00 AM - 11:00 AM", code: "NME-CSE-101", title: "Python Programming", venue: "Lab 3, Science Block A" },
    { day: "Friday", time: "10:00 AM - 11:00 AM", code: "NME-CSE-101", title: "Python Programming", venue: "Lab 3, Science Block A" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon rounded-3xl p-6 text-white shadow-lg border border-alagappa-gold/30">
        <h1 className="font-serif font-bold text-2xl">My Registered NME Timetable</h1>
        <p className="text-xs text-slate-200">Academic Session 2026-2027 (Semester 3)</p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-alagappa-gold" />
          <span>Weekly Schedule Grid</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {schedule.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="bg-alagappa-blue text-white dark:bg-alagappa-gold dark:text-alagappa-darkblue font-bold text-xs px-3 py-1 rounded-full">
                {item.day}
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2">{item.title}</h4>
              <p className="font-mono text-xs text-alagappa-gold font-semibold">{item.code}</p>
              <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-sky-500" /> {item.time}</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-500" /> {item.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
