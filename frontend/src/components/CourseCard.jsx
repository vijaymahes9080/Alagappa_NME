import React, { useState } from 'react';
import SeatBadge from './SeatBadge';
import { 
  BookOpen, 
  MapPin, 
  Clock, 
  Award, 
  UserCheck, 
  Star, 
  FileText, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export default function CourseCard({ course, onRegister, isRegistered, isWaitlisted, waitlistPosition }) {
  const [showDetails, setShowDetails] = useState(false);
  const remainingSeats = Math.max(0, course.totalSeats - course.filledSeats);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* Header Bar with Department tag */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="bg-alagappa-blue/10 dark:bg-alagappa-gold/10 text-alagappa-blue dark:text-alagappa-gold font-mono text-xs font-bold px-2.5 py-1 rounded-md border border-alagappa-blue/20 dark:border-alagappa-gold/30">
            {course.code}
          </span>
          <SeatBadge totalSeats={course.totalSeats} filledSeats={course.filledSeats} />
        </div>

        <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-alagappa-blue dark:group-hover:text-alagappa-gold transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Course Info Grid */}
      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-y border-slate-100 dark:border-slate-700/50 grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <UserCheck className="w-3.5 h-3.5 text-alagappa-blue dark:text-alagappa-gold" />
          <span className="truncate">{course.facultyName || "Faculty Instructor"}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>{course.credits} Credits • Sem {course.semester}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-emerald-500" />
          <span className="truncate">{course.venue}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
          <Clock className="w-3.5 h-3.5 text-sky-500" />
          <span className="truncate">{course.scheduleDays} ({course.scheduleTime})</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
          <Star className="w-4 h-4 fill-amber-400" />
          <span>{course.rating || 4.8}</span>
          <span className="text-slate-400 font-normal">({course.difficulty})</span>
        </div>

        <div>
          {isRegistered ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-xl border border-emerald-300 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
              Registered
            </span>
          ) : isWaitlisted ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold rounded-xl border border-amber-300 dark:border-amber-800">
              <AlertTriangle className="w-4 h-4" />
              Waitlist #{waitlistPosition || 1}
            </span>
          ) : (
            <button
              onClick={() => onRegister(course)}
              className={`px-4 py-2 text-xs font-bold rounded-xl shadow transition-all ${
                remainingSeats > 0
                  ? "bg-alagappa-blue hover:bg-alagappa-darkblue text-white dark:bg-alagappa-gold dark:text-alagappa-darkblue dark:hover:bg-amber-400"
                  : "bg-amber-600 hover:bg-amber-700 text-white"
              }`}
            >
              {remainingSeats > 0 ? "Register Course" : "Join Waitlist"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
