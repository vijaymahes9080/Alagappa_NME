import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ShieldCheck, Key, ArrowRight, AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('student@alagappa.ac.in');
  const [password, setPassword] = useState('Student@2026');
  const [selectedRole, setSelectedRole] = useState('STUDENT');
  const [errorMsg, setErrorMsg] = useState('');

  const { loginWithCredentials } = useAuth();
  const navigate = useNavigate();

  const presets = [
    {
      role: 'STUDENT',
      label: '🎓 Student Portal',
      email: 'student@alagappa.ac.in',
      pass: 'Student@2026',
      desc: 'Course registration, QR slip, timetable'
    },
    {
      role: 'FACULTY',
      label: '👨‍🏫 Faculty Desk',
      email: 'ramanathan@alagappa.ac.in',
      pass: 'Faculty@2026',
      desc: 'Attendance scanner, internal marks'
    },
    {
      role: 'DEPT_ADMIN',
      label: '🏛️ Dept Admin',
      email: 'cs_admin@alagappa.ac.in',
      pass: 'DeptAdmin@2026',
      desc: 'Create electives, seat capacity'
    },
    {
      role: 'SUPER_ADMIN',
      label: '⚡ Super Admin',
      email: 'admin@alagappa.ac.in',
      pass: 'SuperAdmin@2026',
      desc: 'University analytics, audit logs'
    }
  ];

  const handleSelectPreset = (p) => {
    setSelectedRole(p.role);
    setEmail(p.email);
    setPassword(p.pass);
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const res = loginWithCredentials(email, password);

    if (!res.success) {
      setErrorMsg(res.message);
      return;
    }

    // Redirect to corresponding role dashboard
    const role = res.user.role;
    if (role === 'STUDENT') navigate('/student/dashboard');
    else if (role === 'FACULTY') navigate('/faculty/dashboard');
    else if (role === 'DEPT_ADMIN') navigate('/department/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-2xl w-full p-8 space-y-6">
        
        {/* University Header */}
        <div className="text-center space-y-2 border-b border-slate-200 dark:border-slate-700 pb-4">
          <img src="/assets/alagappa_logo.svg" alt="Alagappa University Seal" className="w-16 h-16 mx-auto" />
          <h2 className="font-serif font-bold text-2xl text-slate-900 dark:text-white">Alagappa University, Karaikudi</h2>
          <p className="text-xs text-alagappa-blue dark:text-alagappa-gold font-bold uppercase tracking-wider">
            NME Secure Single Sign-On Portal
          </p>
        </div>

        {/* Role Quick Selector Cards */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            Select Role Credentials Preset:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {presets.map(p => (
              <button
                type="button"
                key={p.role}
                onClick={() => handleSelectPreset(p)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  selectedRole === p.role 
                    ? 'bg-alagappa-blue text-white border-alagappa-blue shadow-md' 
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-alagappa-gold'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>{p.label}</span>
                  {selectedRole === p.role && <ShieldCheck className="w-4 h-4 text-alagappa-gold" />}
                </div>
                <p className="text-[11px] opacity-80 mt-1">{p.email}</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5 font-mono">Pass: {p.pass}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 rounded-2xl flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300 font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Username / Institutional Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email@alagappa.ac.in"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Account Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-alagappa-blue via-alagappa-darkblue to-alagappa-maroon hover:from-alagappa-darkblue hover:to-red-900 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-alagappa-gold" />
            <span>Authenticate &amp; Access Desk</span>
            <ArrowRight className="w-4 h-4 text-alagappa-gold" />
          </button>
        </form>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-center text-[11px] text-slate-500 flex justify-between items-center">
          <span>Protected by BCrypt &amp; JWT RBAC Security</span>
          <span className="font-mono text-alagappa-gold font-bold">256-Bit SSL Active</span>
        </div>
      </div>
    </div>
  );
}
