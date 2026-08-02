import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('student@alagappa.ac.in');
  const [role, setRole] = useState('STUDENT');
  const { switchRole } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    switchRole(role);
    if (role === 'STUDENT') navigate('/student/dashboard');
    else if (role === 'FACULTY') navigate('/faculty/dashboard');
    else if (role === 'DEPT_ADMIN') navigate('/department/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-md w-full p-8 space-y-6">
        <div className="text-center space-y-2">
          <img src="/assets/alagappa_logo.svg" alt="Alagappa University Seal" className="w-16 h-16 mx-auto" />
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Alagappa University</h2>
          <p className="text-xs text-alagappa-blue dark:text-alagappa-gold font-semibold uppercase tracking-wider">
            NME Portal Single Sign-On
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Select User Role</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'STUDENT', label: '🎓 Student' },
                { key: 'FACULTY', label: '👨‍🏫 Faculty' },
                { key: 'DEPT_ADMIN', label: '🏛️ Dept Admin' },
                { key: 'SUPER_ADMIN', label: '⚡ Super Admin' }
              ].map(r => (
                <button
                  type="button"
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                    role === r.key 
                      ? 'bg-alagappa-blue text-white border-alagappa-blue shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-alagappa-gold'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Email / Registration ID</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                defaultValue="••••••••"
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-alagappa-blue to-alagappa-maroon hover:from-alagappa-darkblue hover:to-red-900 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Sign In to NME Desk</span>
            <ArrowRight className="w-4 h-4 text-alagappa-gold" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-700 text-center text-[11px] text-slate-500">
          <p>Protected by University SSO & 256-bit SSL Encryption</p>
        </div>
      </div>
    </div>
  );
}
