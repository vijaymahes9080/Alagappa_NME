import React from 'react';
import { Activity, Server, Database, Radio, Cpu, ShieldCheck } from 'lucide-react';

export default function SystemHealthMonitor() {
  const metrics = [
    { title: "WebSocket Latency", val: "24 ms", status: "Optimal", icon: Radio, color: "text-emerald-500" },
    { title: "Active Socket Rooms", val: "24 Channels", status: "Healthy", icon: Server, color: "text-sky-500" },
    { title: "Prisma DB Query Time", val: "3.2 ms", status: "Sub-second", icon: Database, color: "text-alagappa-gold" },
    { title: "Memory Allocation", val: "142 MB", status: "Normal", icon: Cpu, color: "text-amber-500" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-500" />
          <span>Real-Time Socket & Infrastructure Diagnostics</span>
        </h3>
        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" /> 100% Operational
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">{m.title}</span>
                <Icon className={`w-4 h-4 ${m.color}`} />
              </div>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white">{m.val}</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{m.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
