import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import RegistrationSlipModal from '../components/RegistrationSlipModal';
import CreditPointsLedger from '../components/CreditPointsLedger';
import CertificateGenerator from '../components/CertificateGenerator';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Award, 
  QrCode, 
  AlertTriangle,
  Download,
  Trash2
} from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [selectedSlip, setSelectedSlip] = useState(null);

  const myCourse = {
    id: "crs-101",
    code: "NME-CSE-101",
    title: "Python Programming for Data Analysis",
    departmentName: "Department of Computer Science",
    facultyName: "Dr. R. Ramanathan",
    credits: 3,
    venue: "Lab 3, Science Block A",
    scheduleDays: "Mon, Wed, Fri",
    scheduleTime: "10:00 AM - 11:00 AM",
    registrationNo: "NME-2026-88101",
    registeredAt: "2026-08-01T10:00:00.000Z",
    attendancePct: 94,
    internalMarks: 24.5
  };

  const waitlistCourse = {
    id: "crs-201",
    code: "NME-MGT-201",
    title: "Digital Marketing & Social Media Strategy",
    facultyName: "Dr. S. Kanthimathi",
    position: 1
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Student Profile Header Banner */}
      <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-alagappa-gold/30">
        <div className="flex items-center gap-5">
          <img 
            src={user?.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80"} 
            alt={user?.name}
            className="w-20 h-20 rounded-2xl border-4 border-alagappa-gold object-cover shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-2xl text-white">{user?.name || "K. Vijaykumar"}</h1>
              <span className="bg-alagappa-gold text-alagappa-darkblue text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                CGPA: {user?.cgpa || 8.85}
              </span>
            </div>
            <p className="text-xs text-slate-200 mt-1">Register No: <span className="font-mono text-alagappa-gold font-bold">{user?.registerNumber || "2024101001"}</span></p>
            <p className="text-xs text-slate-300">Department: {user?.departmentName || "Management Studies"}</p>
          </div>
        </div>

        <div className="flex gap-3 text-center">
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 min-w-[100px]">
            <p className="text-2xl font-bold text-alagappa-gold">1</p>
            <p className="text-[11px] text-slate-200">Registered NME</p>
          </div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 min-w-[100px]">
            <p className="text-2xl font-bold text-amber-400">1</p>
            <p className="text-[11px] text-slate-200">Waitlisted</p>
          </div>
        </div>
      </div>

      <CreditPointsLedger student={user} />

      <CertificateGenerator studentName={user?.name} courseTitle={myCourse.title} />

      {/* Main Registered Course Card */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <span>My Registered Elective Course</span>
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <span className="bg-alagappa-blue/10 dark:bg-alagappa-gold/10 text-alagappa-blue dark:text-alagappa-gold font-mono font-bold text-xs px-3 py-1 rounded-lg">
                {myCourse.code}
              </span>
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-xs px-3 py-1 rounded-full">
                Confirmed Seat
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">{myCourse.title}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              <p>Faculty: <span className="font-semibold text-slate-800 dark:text-slate-100">{myCourse.facultyName}</span></p>
              <p>Department: <span className="font-semibold text-slate-800 dark:text-slate-100">{myCourse.departmentName}</span></p>
              <p>Venue: <span className="font-semibold text-slate-800 dark:text-slate-100">{myCourse.venue}</span></p>
              <p>Schedule: <span className="font-semibold text-slate-800 dark:text-slate-100">{myCourse.scheduleDays} ({myCourse.scheduleTime})</span></p>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-col justify-between items-end gap-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 pt-4 lg:pt-0 lg:pl-6">
            <div className="flex gap-4 text-right">
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Attendance</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{myCourse.attendancePct}%</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Internal Score</p>
                <p className="text-xl font-bold text-alagappa-blue dark:text-alagappa-gold">{myCourse.internalMarks}/25</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSlip({ registration: { registrationNo: myCourse.registrationNo, registeredAt: myCourse.registeredAt }, course: myCourse })}
              className="flex items-center gap-2 px-5 py-2.5 bg-alagappa-blue hover:bg-alagappa-darkblue text-white font-bold text-xs rounded-xl shadow transition"
            >
              <QrCode className="w-4 h-4 text-alagappa-gold" />
              <span>View Registration Pass & QR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Waiting List Queue */}
      <div className="space-y-4">
        <h2 className="font-serif font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <span>Active Waiting List Queue</span>
        </h2>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">{waitlistCourse.code}</span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{waitlistCourse.title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Instructor: {waitlistCourse.facultyName}</p>
          </div>
          <div className="text-right">
            <span className="bg-amber-500 text-white font-bold text-xs px-3 py-1 rounded-full">
              Waitlist Position #{waitlistCourse.position}
            </span>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">Auto-promotes if someone drops!</p>
          </div>
        </div>
      </div>

      {selectedSlip && (
        <RegistrationSlipModal
          registration={selectedSlip.registration}
          course={selectedSlip.course}
          student={user}
          onClose={() => setSelectedSlip(null)}
        />
      )}
    </div>
  );
}
