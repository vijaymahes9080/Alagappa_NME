import React from 'react';
import { X, Printer, Download, CheckCircle2 } from 'lucide-react';

export default function RegistrationSlipModal({ registration, course, student, onClose }) {
  if (!registration || !course) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-alagappa-darkblue to-alagappa-maroon text-white p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="./assets/alagappa_logo.svg" alt="Alagappa Seal" className="w-9 h-9" />
            <div>
              <h2 className="font-serif font-bold text-base">Alagappa University, Karaikudi</h2>
              <p className="text-xs text-alagappa-gold">Official NME Course Registration Slip</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Pass Container */}
        <div className="p-6 space-y-5" id="printable-pass">
          <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Registration Status: CONFIRMED</span>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-500">Ref: {registration.registrationNo}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <p className="text-slate-400 font-medium">Student Name</p>
              <p className="font-bold text-slate-800 dark:text-white text-sm">{student?.name || "K. Vijaykumar"}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Register Number</p>
              <p className="font-mono font-bold text-alagappa-blue dark:text-alagappa-gold text-sm">{student?.registerNumber || "2024101001"}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Parent Department</p>
              <p className="font-semibold text-slate-700 dark:text-slate-200">{student?.departmentName || "Management Studies"}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Academic Year / Semester</p>
              <p className="font-semibold text-slate-700 dark:text-slate-200">2026-2027 (Semester 3)</p>
            </div>
          </div>

          {/* Course Details Box */}
          <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-mono font-bold text-alagappa-blue dark:text-alagappa-gold">{course.code}</span>
              <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-bold">{course.credits} Credits</span>
            </div>
            <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">{course.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">Instructor: <span className="font-semibold">{course.facultyName}</span></p>
            <p className="text-slate-600 dark:text-slate-300">Venue: <span className="font-semibold">{course.venue}</span></p>
            <p className="text-slate-600 dark:text-slate-300">Schedule: <span className="font-semibold">{course.scheduleDays} ({course.scheduleTime})</span></p>
          </div>

          {/* QR Code & Signature Section */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <img 
                src={registration.qrCodeUrl || `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${registration.registrationNo}`} 
                alt="Registration QR Code" 
                className="w-20 h-20 p-1 bg-white border border-slate-300 rounded-xl shadow-sm"
              />
              <div className="text-[11px] text-slate-500">
                <p className="font-bold text-slate-700 dark:text-slate-300">Attendance Verification QR</p>
                <p>Scan during classroom attendance</p>
                <p className="text-[10px] text-slate-400 mt-1">Generated: {new Date(registration.registeredAt || Date.now()).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="text-right border-t border-slate-300 dark:border-slate-700 pt-3">
              <div className="h-6 font-serif italic text-alagappa-blue dark:text-alagappa-gold text-xs font-bold">Convener Signature</div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">NME Cell, Alagappa University</p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-slate-100 dark:bg-slate-800/90 px-6 py-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-700">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition"
          >
            Close
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-alagappa-blue hover:bg-alagappa-darkblue text-white text-xs font-bold rounded-xl shadow transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
