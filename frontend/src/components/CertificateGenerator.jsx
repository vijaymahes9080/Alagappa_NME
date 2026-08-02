import React from 'react';
import { Award, Download, ShieldCheck } from 'lucide-react';

export default function CertificateGenerator({ studentName, courseTitle, completionDate }) {
  const handleDownload = () => {
    alert(`Generating official NME Completion Certificate PDF for ${studentName}...`);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-4 border-double border-alagappa-gold p-6 rounded-3xl shadow-xl space-y-4 max-w-lg mx-auto text-center">
      <img src="/assets/alagappa_logo.svg" alt="Alagappa Seal" className="w-16 h-16 mx-auto" />
      <h3 className="font-serif font-bold text-xl text-alagappa-blue dark:text-alagappa-gold uppercase tracking-wider">
        Alagappa University, Karaikudi
      </h3>
      <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Certificate of Elective Course Completion</p>

      <div className="py-2 border-y border-slate-200 dark:border-slate-800 space-y-1">
        <p className="text-xs text-slate-400">This is to certify that</p>
        <p className="font-serif font-bold text-lg text-slate-900 dark:text-white">{studentName || "K. Vijaykumar"}</p>
        <p className="text-xs text-slate-400">has successfully completed the Non-Major Elective Course</p>
        <p className="font-serif font-bold text-sm text-alagappa-blue dark:text-alagappa-gold">{courseTitle || "Python Programming for Data Analysis"}</p>
      </div>

      <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2">
        <p>Date: {completionDate || "August 2026"}</p>
        <p className="font-semibold text-slate-600 dark:text-slate-300">NME Cell Convener</p>
      </div>

      <button
        onClick={handleDownload}
        className="w-full py-2.5 bg-alagappa-blue hover:bg-alagappa-darkblue text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition"
      >
        <Download className="w-4 h-4 text-alagappa-gold" />
        <span>Download Official Verified Certificate</span>
      </button>
    </div>
  );
}
