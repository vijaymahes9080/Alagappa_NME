import React, { useState } from 'react';
import DepartmentAnalyticsMatrix from '../components/DepartmentAnalyticsMatrix';
import { PlusCircle, Shield, CheckCircle2, AlertCircle, Edit3, Trash2 } from 'lucide-react';

export default function DepartmentDashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courses, setCourses] = useState([
    { code: 'NME-CSE-101', title: 'Python Programming for Data Analysis', seats: 60, filled: 42, faculty: 'Dr. R. Ramanathan', status: 'APPROVED' },
    { code: 'NME-CSE-102', title: 'Cyber Security & Personal Privacy', seats: 45, filled: 41, faculty: 'Prof. M. Suresh', status: 'APPROVED' }
  ]);

  const [formData, setFormData] = useState({
    code: '',
    title: '',
    description: '',
    faculty: '',
    seats: 60,
    credits: 3,
    venue: '',
    scheduleDays: 'Mon, Wed',
    scheduleTime: '10:00 AM - 11:30 AM'
  });

  const handleCreate = (e) => {
    e.preventDefault();
    setCourses(prev => [...prev, { ...formData, filled: 0, status: 'APPROVED' }]);
    setShowCreateModal(false);
    alert('NME Course created and submitted for university publication!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Dept Admin Banner */}
      <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon rounded-3xl p-6 text-white shadow-lg border border-alagappa-gold/30 flex justify-between items-center">
        <div>
          <span className="text-alagappa-gold text-xs font-bold uppercase tracking-wider">Department Administration</span>
          <h1 className="font-serif font-bold text-2xl">Department of Computer Science</h1>
          <p className="text-xs text-slate-200">Head of Dept: Dr. A. Nagarajan | Active Courses: 2</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-alagappa-gold text-alagappa-darkblue font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-amber-400 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Propose New NME Elective</span>
        </button>
      </div>

      <DepartmentAnalyticsMatrix />

      {/* Managed Courses Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">Department Offered Electives</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 font-semibold border-b border-slate-200 dark:border-slate-700 uppercase">
              <tr>
                <th className="p-4">Course Code</th>
                <th className="p-4">Title</th>
                <th className="p-4">Assigned Faculty</th>
                <th className="p-4">Seat Allocation</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {courses.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="p-4 font-mono font-bold text-alagappa-blue dark:text-alagappa-gold">{c.code}</td>
                  <td className="p-4 font-bold text-slate-800 dark:text-slate-100">{c.title}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{c.faculty}</td>
                  <td className="p-4">
                    <span className="font-bold text-slate-900 dark:text-white">{c.filled} / {c.seats} Seats</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold px-2.5 py-1 rounded-full text-[10px]">
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="text-alagappa-blue dark:text-alagappa-gold font-bold">Increase Seats</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Proposing New Course */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-700">
            <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Propose New NME Elective</h3>
            
            <form onSubmit={handleCreate} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300">Course Code</label>
                <input 
                  type="text" 
                  placeholder="e.g. NME-CSE-205"
                  required
                  value={formData.code}
                  onChange={e => setFormData({ ...formData, code: e.target.value })}
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300">Course Title</label>
                <input 
                  type="text" 
                  placeholder="Course title..."
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Total Seats</label>
                  <input 
                    type="number" 
                    value={formData.seats}
                    onChange={e => setFormData({ ...formData, seats: parseInt(e.target.value) })}
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Instructor Name</label>
                  <input 
                    type="text" 
                    placeholder="Faculty name..."
                    required
                    value={formData.faculty}
                    onChange={e => setFormData({ ...formData, faculty: e.target.value })}
                    className="w-full p-2 bg-slate-50 dark:bg-slate-800 border rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-alagappa-blue text-white rounded-xl font-bold"
                >
                  Publish Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
