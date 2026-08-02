import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/alagappa_logo.svg" alt="Alagappa University" className="w-8 h-8" />
            <h3 className="font-serif font-bold text-white text-base">Alagappa University</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            A State University Accredited with A+ Grade by NAAC (CGPA: 3.64) in the 3rd Cycle, Graded as Category-I University by MHRD-UGC.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm mb-3">NME Portal Links</h4>
          <ul className="space-y-1.5 text-xs">
            <li><a href="/courses" className="hover:text-alagappa-gold transition">Browse Elective Courses</a></li>
            <li><a href="/student/dashboard" className="hover:text-alagappa-gold transition">Student Dashboard</a></li>
            <li><a href="/docs" className="hover:text-alagappa-gold transition">NME Guidelines & Syllabus</a></li>
            <li><a href="/help" className="hover:text-alagappa-gold transition">Support & Help Desk</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm mb-3">University Contact</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Alagappapuram, Karaikudi - 630 003<br/>
            Sivaganga District, Tamil Nadu, India<br/>
            Email: nme-support@alagappa.ac.in<br/>
            Phone: +91 4565 226001
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm mb-3">Realtime Status</h4>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-xs space-y-1">
            <div className="flex justify-between text-slate-300">
              <span>Socket.io Engine:</span>
              <span className="text-emerald-400 font-medium">Online</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Database Sync:</span>
              <span className="text-emerald-400 font-medium">Active</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>AI Recommendation:</span>
              <span className="text-amber-400 font-medium">Ready</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2026 Alagappa University. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Real-Time Enterprise NME Course Registration System v1.0</p>
      </div>
    </footer>
  );
}
