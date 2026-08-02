import React, { useState } from 'react';
import { Megaphone, Bell, CheckCircle } from 'lucide-react';

export default function AnnouncementBroadcaster() {
  const [announcement, setAnnouncement] = useState('');
  const [target, setTarget] = useState('ALL');
  const [sentList, setSentList] = useState([
    { text: "NME Course Registration for 2026-2027 Odd Semester is now OPEN across all departments!", target: "ALL", time: "09:00 AM" }
  ]);

  const handlePublish = (e) => {
    e.preventDefault();
    if (!announcement.trim()) return;

    setSentList(prev => [
      { text: announcement, target, time: new Date().toLocaleTimeString() },
      ...prev
    ]);
    setAnnouncement('');
    alert('Announcement broadcasted in real-time across all student & faculty dashboards!');
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
      <div className="flex items-center gap-2">
        <Megaphone className="w-5 h-5 text-alagappa-gold animate-bounce" />
        <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white">Live System Announcement Broadcaster</h3>
      </div>

      <form onSubmit={handlePublish} className="space-y-3 text-xs">
        <textarea
          rows={2}
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder="Type emergency notification or registration reminder..."
          className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl focus:outline-none"
        />

        <div className="flex justify-between items-center">
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border rounded-xl"
          >
            <option value="ALL">Target: All Users</option>
            <option value="STUDENTS">Target: Students Only</option>
            <option value="FACULTY">Target: Faculty Only</option>
          </select>

          <button
            type="submit"
            className="px-4 py-2 bg-alagappa-blue hover:bg-alagappa-darkblue text-white font-bold rounded-xl shadow transition"
          >
            Broadcast Notification
          </button>
        </div>
      </form>
    </div>
  );
}
