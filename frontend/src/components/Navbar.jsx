import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useSocket } from '../context/SocketContext';
import { LanguageManager } from '../i18n/i18n';
import { 
  BookOpen, 
  User, 
  LogOut, 
  Sun, 
  Moon, 
  Globe, 
  Radio, 
  Shield, 
  LayoutDashboard,
  Calendar,
  Award
} from 'lucide-react';

export default function Navbar() {
  const { user, switchRole, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const { isConnected } = useSocket();
  const [lang, setLang] = useState(LanguageManager.currentLang);
  const navigate = useNavigate();

  const handleLangToggle = () => {
    const nextLang = lang === 'en' ? 'ta' : 'en';
    LanguageManager.setLanguage(nextLang);
    setLang(nextLang);
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon text-white">
      {/* Top Banner Stripe */}
      <div className="bg-black/20 text-xs py-1 px-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-alagappa-gold font-semibold">
            <Radio className={`w-3.5 h-3.5 ${isConnected ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}`} />
            {isConnected ? LanguageManager.get('liveCounter') : 'Realtime Engine Standby'}
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline text-slate-300">Academic Session: 2026-2027 (Odd Semester)</span>
        </div>

        {/* Demo Role Selector Pill */}
        <div className="flex items-center gap-2">
          <span className="text-slate-300 hidden sm:inline">{LanguageManager.get('quickRoleSwitch')}:</span>
          <select 
            value={user?.role || 'STUDENT'}
            onChange={(e) => switchRole(e.target.value)}
            className="bg-white/10 text-alagappa-gold border border-alagappa-gold/40 text-xs rounded px-2 py-0.5 font-medium cursor-pointer focus:outline-none"
          >
            <option value="STUDENT" className="bg-slate-800 text-white">🎓 {LanguageManager.get('student')}</option>
            <option value="FACULTY" className="bg-slate-800 text-white">👨‍🏫 {LanguageManager.get('faculty')}</option>
            <option value="DEPT_ADMIN" className="bg-slate-800 text-white">🏛️ {LanguageManager.get('deptAdmin')}</option>
            <option value="SUPER_ADMIN" className="bg-slate-800 text-white">⚡ {LanguageManager.get('superAdmin')}</option>
          </select>

          <button 
            onClick={handleLangToggle}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded border border-white/20 transition-all"
            title="Toggle English / Tamil"
          >
            <Globe className="w-3.5 h-3.5 text-alagappa-gold" />
            <span className="font-bold">{lang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <button 
            onClick={toggleDarkMode}
            className="p-1 rounded-full hover:bg-white/10 text-amber-300 transition"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Info */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/alagappa_logo.svg" 
            alt="Alagappa University Seal" 
            className="w-10 h-10 drop-shadow group-hover:scale-105 transition-transform" 
          />
          <div>
            <h1 className="font-serif font-bold text-lg leading-tight tracking-wide text-white group-hover:text-alagappa-gold transition-colors">
              {LanguageManager.get('university')}
            </h1>
            <p className="text-xs text-slate-200 opacity-90 hidden sm:block">
              {LanguageManager.get('subTitle')}
            </p>
          </div>
        </Link>

        {/* Dynamic Navigation Links based on Active User Role */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link 
            to="/courses" 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-alagappa-gold" />
            <span>{LanguageManager.get('courses')}</span>
          </Link>

          {user?.role === 'STUDENT' && (
            <>
              <Link 
                to="/student/dashboard" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4 text-sky-400" />
                <span>{LanguageManager.get('dashboard')}</span>
              </Link>
              <Link 
                to="/student/timetable" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors hidden md:flex"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{LanguageManager.get('timetable')}</span>
              </Link>
            </>
          )}

          {user?.role === 'FACULTY' && (
            <Link 
              to="/faculty/dashboard" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-sky-400" />
              <span>Faculty Desk</span>
            </Link>
          )}

          {user?.role === 'DEPT_ADMIN' && (
            <Link 
              to="/department/dashboard" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Dept Admin</span>
            </Link>
          )}

          {user?.role === 'SUPER_ADMIN' && (
            <Link 
              to="/admin/dashboard" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Super Admin</span>
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-white/20">
              <img 
                src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"} 
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-alagappa-gold object-cover" 
              />
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold text-white leading-tight">{user.name}</p>
                <p className="text-[10px] text-alagappa-gold font-medium">{user.role}</p>
              </div>
            </div>
          ) : (
            <Link 
              to="/login"
              className="bg-alagappa-gold hover:bg-amber-400 text-alagappa-darkblue px-4 py-1.5 rounded-lg font-semibold text-sm transition-all shadow-md"
            >
              {LanguageManager.get('login')}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
