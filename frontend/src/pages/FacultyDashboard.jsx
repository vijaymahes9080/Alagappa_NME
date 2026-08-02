import React, { useState } from 'react';
import { 
  Users, 
  CheckSquare, 
  Award, 
  QrCode, 
  Upload, 
  FileSpreadsheet, 
  Search 
} from 'lucide-react';

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('STUDENTS');
  const [search, setSearch] = useState('');

  const studentsList = [
    { id: "1", regNo: "2024101001", name: "K. Vijaykumar", dept: "Management", attendance: "PRESENT", mark: 24.5 },
    { id: "2", regNo: "2024101002", name: "S. Anitha", dept: "Commerce", attendance: "PRESENT", mark: 22.0 },
    { id: "3", regNo: "2024101003", name: "M. Karthik", dept: "Physics", attendance: "ABSENT", mark: 19.5 },
    { id: "4", regNo: "2024101004", name: "R. Priyadharshini", dept: "Mathematics", attendance: "PRESENT", mark: 25.0 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Faculty Banner */}
      <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon rounded-3xl p-6 text-white shadow-lg border border-alagappa-gold/30 flex justify-between items-center">
        <div>
          <span className="text-alagappa-gold text-xs font-bold uppercase tracking-wider">Faculty Portal</span>
          <h1 className="font-serif font-bold text-2xl">Dr. R. Ramanathan Desk</h1>
          <p className="text-xs text-slate-200">Course: NME-CSE-101 Python Programming (Enrolled: 42 / 60)</p>
        </div>
        <button className="flex items-center gap-2 bg-alagappa-gold text-alagappa-darkblue font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-amber-400 transition">
          <QrCode className="w-4 h-4" />
          <span>Launch QR Attendance Scanner</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 border-b border-slate-200 dark:border-slate-700 text-xs font-bold">
        <button
          onClick={() => setActiveTab('STUDENTS')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'STUDENTS' 
              ? 'border-alagappa-blue dark:border-alagappa-gold text-alagappa-blue dark:text-alagappa-gold' 
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Enrolled Students (42)</span>
        </button>

        <button
          onClick={() => setActiveTab('MARKS')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'MARKS' 
              ? 'border-alagappa-blue dark:border-alagappa-gold text-alagappa-blue dark:text-alagappa-gold' 
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Internal Assessment Marks</span>
        </button>
      </div>

      {/* Content Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search student..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs"
            />
          </div>

          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow hover:bg-emerald-700 transition">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Export Excel Sheet</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-700 uppercase tracking-wider">
              <tr>
                <th className="p-4">Reg No</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Parent Dept</th>
                <th className="p-4">Today's Attendance</th>
                <th className="p-4">Internal Score (/25)</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {studentsList.map(st => (
                <tr key={st.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="p-4 font-mono font-bold text-alagappa-blue dark:text-alagappa-gold">{st.regNo}</td>
                  <td className="p-4 font-bold text-slate-800 dark:text-slate-100">{st.name}</td>
                  <td className="p-4 text-slate-500">{st.dept}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      st.attendance === 'PRESENT' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {st.attendance}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{st.mark} / 25</td>
                  <td className="p-4 text-right">
                    <button className="text-alagappa-blue dark:text-alagappa-gold hover:underline font-bold">Edit Mark</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
