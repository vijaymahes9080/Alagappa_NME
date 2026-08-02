import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import RegistrationSlipModal from '../components/RegistrationSlipModal';
import AIChatbot from '../components/AIChatbot';
import { useAuth } from '../context/AuthContext';
import { useSocket } from '../context/SocketContext';
import { LanguageManager } from '../i18n/i18n';
import { 
  Search, 
  Filter, 
  Sparkles, 
  BookOpen, 
  Layers, 
  AlertCircle,
  Radio
} from 'lucide-react';

const initialCourses = [
  {
    id: "crs-101",
    code: "NME-CSE-101",
    title: "Python Programming for Data Analysis",
    description: "Learn fundamental Python scripting, NumPy, Pandas, and Data Visualization techniques tailored for all non-major disciplines.",
    departmentId: "dept-cse",
    departmentName: "Department of Computer Science",
    facultyName: "Dr. R. Ramanathan",
    credits: 3,
    semester: 3,
    totalSeats: 60,
    filledSeats: 42,
    venue: "Lab 3, Science Block A",
    scheduleDays: "Mon, Wed, Fri",
    scheduleTime: "10:00 AM - 11:00 AM",
    difficulty: "Beginner",
    rating: 4.9
  },
  {
    id: "crs-201",
    code: "NME-MGT-201",
    title: "Digital Marketing & Social Media Strategy",
    description: "Comprehensive guide to SEO, Google Analytics, content strategy, brand building, and social media ad execution.",
    departmentId: "dept-mgt",
    departmentName: "Department of Management Studies",
    facultyName: "Dr. S. Kanthimathi",
    credits: 3,
    semester: 3,
    totalSeats: 50,
    filledSeats: 50,
    venue: "Seminar Hall 2, Management Tower",
    scheduleDays: "Tue, Thu",
    scheduleTime: "02:00 PM - 03:30 PM",
    difficulty: "Intermediate",
    rating: 4.8
  },
  {
    id: "crs-102",
    code: "NME-CSE-102",
    title: "Cyber Security & Personal Privacy",
    description: "Protecting personal identity online, network security basics, safe web browsing, encryption, and threat prevention.",
    departmentId: "dept-cse",
    departmentName: "Department of Computer Science",
    facultyName: "Prof. M. Suresh",
    credits: 3,
    semester: 3,
    totalSeats: 45,
    filledSeats: 41,
    venue: "Room 204, Science Block A",
    scheduleDays: "Mon, Wed",
    scheduleTime: "02:00 PM - 03:30 PM",
    difficulty: "Beginner",
    rating: 4.7
  },
  {
    id: "crs-105",
    code: "NME-COM-105",
    title: "Financial Literacy & Mutual Fund Investment",
    description: "Practical guide to budgeting, stock market basics, tax planning, mutual funds, and long-term personal wealth management.",
    departmentId: "dept-com",
    departmentName: "Department of Commerce",
    facultyName: "Dr. V. Meenakshi",
    credits: 2,
    semester: 3,
    totalSeats: 80,
    filledSeats: 25,
    venue: "Auditorium B, Commerce Complex",
    scheduleDays: "Tue, Thu",
    scheduleTime: "10:00 AM - 11:30 AM",
    difficulty: "Beginner",
    rating: 4.95
  },
  {
    id: "crs-301",
    code: "NME-TAM-101",
    title: "Applied Tamil Literature & Folk Art Heritage (தமிழ்க் கலைகள்)",
    description: "Exploration of classical Tamil poetry, traditional music, folk dance, and cultural history of Tamil Nadu.",
    departmentId: "dept-tam",
    departmentName: "Department of Tamil",
    facultyName: "Dr. P. Thirunavukkarasu",
    credits: 3,
    semester: 3,
    totalSeats: 50,
    filledSeats: 18,
    venue: "Tamil Sangam Hall, Humanities Block",
    scheduleDays: "Mon, Fri",
    scheduleTime: "03:30 PM - 05:00 PM",
    difficulty: "Beginner",
    rating: 4.9
  }
];

export default function CourseList() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [diffFilter, setDiffFilter] = useState('ALL');
  const [registeredCourseIds, setRegisteredCourseIds] = useState(['crs-101']);
  const [waitlistCourseIds, setWaitlistCourseIds] = useState([]);
  const [activeRegistrationSlip, setActiveRegistrationSlip] = useState(null);
  
  const { user } = useAuth();
  const { socket, lastSeatUpdate } = useSocket();

  // Listen to live seat updates from Socket.io
  useEffect(() => {
    if (lastSeatUpdate) {
      setCourses(prev => prev.map(c => {
        if (c.id === lastSeatUpdate.courseId) {
          return { ...c, filledSeats: lastSeatUpdate.filledSeats };
        }
        return c;
      }));
    }
  }, [lastSeatUpdate]);

  const handleRegister = (course) => {
    const remaining = Math.max(0, course.totalSeats - course.filledSeats);

    if (remaining > 0) {
      // Confirm registration
      setRegisteredCourseIds(prev => [...prev, course.id]);
      setCourses(prev => prev.map(c => c.id === course.id ? { ...c, filledSeats: c.filledSeats + 1 } : c));
      
      const newSlip = {
        registrationNo: `NME-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        registeredAt: new Date().toISOString(),
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NME-2026-${course.id}`
      };
      
      setActiveRegistrationSlip({ registration: newSlip, course });
    } else {
      // Add to waitlist
      setWaitlistCourseIds(prev => [...prev, course.id]);
      alert(`Seats for ${course.code} are full. You have been added to the Waiting List (Position #1). You will be notified automatically if a seat opens up!`);
    }
  };

  const filteredCourses = courses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                        c.code.toLowerCase().includes(search.toLowerCase()) ||
                        c.facultyName.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'ALL' || c.departmentId === deptFilter;
    const matchDiff = diffFilter === 'ALL' || c.difficulty === diffFilter;
    return matchSearch && matchDept && matchDiff;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-alagappa-maroon text-white p-8 md:p-12 border border-alagappa-gold/30">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-alagappa-gold/20 text-alagappa-gold text-xs font-bold rounded-full border border-alagappa-gold/40">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            {LanguageManager.get('liveCounter')}
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl leading-tight">
            Non-Major Elective (NME) Courses
          </h1>
          <p className="text-sm text-slate-200 leading-relaxed">
            Select high-impact elective courses across university departments. Seats update in real-time. Clash detection & AI recommendations active.
          </p>
        </div>
      </div>

      {/* AI Recommendation Spotlight */}
      <div className="bg-gradient-to-r from-sky-900/10 via-amber-500/10 to-indigo-900/10 dark:from-slate-800 dark:to-slate-800 p-6 rounded-3xl border border-amber-500/30">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-alagappa-gold animate-spin" />
          <h2 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
            {LanguageManager.get('recommendationTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.slice(0, 3).map(c => (
            <div key={`rec-${c.id}`} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold text-alagappa-blue dark:text-alagappa-gold font-mono">{c.code}</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-semibold">
                  {c.totalSeats - c.filledSeats} Seats Open
                </span>
              </div>
              <h4 className="font-bold text-xs text-slate-800 dark:text-slate-100 line-clamp-1">{c.title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{c.facultyName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={LanguageManager.get('searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-alagappa-blue dark:focus:ring-alagappa-gold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs font-medium">
            <div className="flex items-center gap-1 text-slate-500">
              <Filter className="w-4 h-4" />
              <span>Filters:</span>
            </div>

            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none"
            >
              <option value="ALL">{LanguageManager.get('allDepartments')}</option>
              <option value="dept-cse">Computer Science</option>
              <option value="dept-mgt">Management</option>
              <option value="dept-com">Commerce</option>
              <option value="dept-tam">Tamil Literature</option>
            </select>

            <select
              value={diffFilter}
              onChange={(e) => setDiffFilter(e.target.value)}
              className="px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none"
            >
              <option value="ALL">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onRegister={handleRegister}
            isRegistered={registeredCourseIds.includes(course.id)}
            isWaitlisted={waitlistCourseIds.includes(course.id)}
          />
        ))}
      </div>

      {/* Registration Slip Modal Trigger */}
      {activeRegistrationSlip && (
        <RegistrationSlipModal
          registration={activeRegistrationSlip.registration}
          course={activeRegistrationSlip.course}
          student={user}
          onClose={() => setActiveRegistrationSlip(null)}
        />
      )}

      {/* AI Assistant Floating Widget */}
      <AIChatbot courses={courses} />
    </div>
  );
}
