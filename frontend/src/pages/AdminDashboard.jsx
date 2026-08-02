import React from 'react';
import AnnouncementBroadcaster from '../components/AnnouncementBroadcaster';
import SystemHealthMonitor from '../components/SystemHealthMonitor';
import { 
  Users, 
  BookOpen, 
  Building2, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle, 
  Download,
  Activity
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: "Total Registered Students", count: "4,820", sub: "+38 today", icon: Users, color: "text-sky-500" },
    { title: "University Departments", count: "10", sub: "All active", icon: Building2, color: "text-emerald-500" },
    { title: "NME Courses Offered", count: "24", sub: "Semester 3", icon: BookOpen, color: "text-alagappa-gold" },
    { title: "Overall Seat Fill Rate", count: "84.2%", sub: "1,240 / 1,470 seats", icon: TrendingUp, color: "text-amber-500" }
  ];

  const auditLogs = [
    { id: "1", user: "K. Vijaykumar (2024101001)", action: "REGISTER_COURSE", details: "Registered NME-CSE-101 Python Programming", time: "10:02 AM" },
    { id: "2", user: "Dr. A. Nagarajan (Dept Admin)", action: "CREATE_COURSE", details: "Proposed NME-CSE-102 Cyber Security", time: "09:45 AM" },
    { id: "3", user: "S. Anitha (2024101002)", action: "WAITLIST_JOINED", details: "Joined waitlist position #1 for NME-MGT-201", time: "09:30 AM" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Super Admin Header */}
      <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4 border border-alagappa-gold/30">
        <div>
          <span className="text-alagappa-gold text-xs font-bold uppercase tracking-wider">University Super Admin</span>
          <h1 className="font-serif font-bold text-2xl">Alagappa NME Control Desk</h1>
          <p className="text-xs text-slate-200">Real-Time University Enrollment & Analytical Control</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl text-xs font-bold transition border border-white/20">
            <Download className="w-4 h-4 text-alagappa-gold" />
            <span>Download Excel Audit</span>
          </button>
        </div>
      </div>

      {/* Analytics Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-semibold">{st.title}</span>
                <Icon className={`w-5 h-5 ${st.color}`} />
              </div>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{st.count}</p>
              <p className="text-[11px] text-slate-400 font-medium">{st.sub}</p>
            </div>
          );
        })}
      </div>

      <SystemHealthMonitor />

      <AnnouncementBroadcaster />

      {/* Visual Analytics Simulation Bar */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-alagappa-gold" />
            <span>Department-wise NME Seat Fill Ratios</span>
          </h3>
          <span className="text-xs text-emerald-500 font-bold">● Realtime Sync</span>
        </div>

        <div className="space-y-3 text-xs">
          {[
            { dept: "Computer Science", fill: 92, count: "212 / 230 seats" },
            { dept: "Management Studies", fill: 100, count: "180 / 180 seats (FULL)" },
            { dept: "Commerce", fill: 68, count: "170 / 250 seats" },
            { dept: "Tamil Literature", fill: 45, count: "90 / 200 seats" },
            { dept: "Bio-Technology", fill: 78, count: "156 / 200 seats" }
          ].map((d, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                <span>{d.dept}</span>
                <span className="font-mono">{d.fill}% ({d.count})</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    d.fill >= 100 ? 'bg-rose-500' : d.fill >= 80 ? 'bg-amber-500' : 'bg-alagappa-blue dark:bg-alagappa-gold'
                  }`}
                  style={{ width: `${d.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Realtime Audit Log */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">Recent System Audit Logs</h3>
        <div className="space-y-2 text-xs">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-2xl flex justify-between items-center border border-slate-100 dark:border-slate-800">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">{log.user}</span>
                <p className="text-slate-500">{log.details}</p>
              </div>
              <span className="font-mono text-[11px] text-slate-400 font-semibold">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
