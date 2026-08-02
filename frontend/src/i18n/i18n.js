import i18n from 'i18n-js';

// Simple lightweight translation layer
const translations = {
  en: {
    university: "Alagappa University",
    subTitle: "Non-Major Elective (NME) Course Registration Portal",
    home: "Home",
    courses: "NME Courses",
    myCourses: "My Registered Courses",
    timetable: "Timetable",
    dashboard: "Dashboard",
    login: "Login",
    logout: "Logout",
    availableSeats: "Available Seats",
    filledSeats: "Filled Seats",
    registerNow: "Register Now",
    alreadyRegistered: "Already Registered",
    joinWaitlist: "Join Waiting List",
    searchPlaceholder: "Search by course title, code, instructor, department...",
    allDepartments: "All Departments",
    recommendationTitle: "AI Recommended Electives For You",
    liveCounter: "Live Real-Time Seat Counter Active",
    quickRoleSwitch: "Switch Demo Role",
    student: "Student",
    faculty: "Faculty",
    deptAdmin: "Dept Admin",
    superAdmin: "Super Admin"
  },
  ta: {
    university: "அழகப்பா பல்கலைக்கழகம்",
    subTitle: "துணைப் பாடவிருப்ப (NME) பாடம் பதிவு இணையதளம்",
    home: "முகப்பு",
    courses: "NME பாடங்கள்",
    myCourses: "என் பதிவான பாடங்கள்",
    timetable: "கால அட்டவணை",
    dashboard: "டாஷ்போர்டு",
    login: "உள்நுழைவு",
    logout: "வெளியேறு",
    availableSeats: "இருப்பிலுள்ள இடங்கள்",
    filledSeats: "நிரப்பப்பட்ட இடங்கள்",
    registerNow: "இப்போதே பதிவு செய்",
    alreadyRegistered: "ஏற்கனவே பதிவு செய்யப்பட்டது",
    joinWaitlist: "காத்திருப்போர் பட்டியலில் சேர்",
    searchPlaceholder: "பாடம், குறியீடு, பேராசிரியர் பெயர் மூலம் தேடவும்...",
    allDepartments: "அனைத்து துறைகளும்",
    recommendationTitle: "உங்களுக்கான AI பரிந்துரைக்கப்பட்ட பாடங்கள்",
    liveCounter: "நேரலை இடங்கள் எண்ணிக்கை இயங்குகிறது",
    quickRoleSwitch: "டெமோ பங்கினை மாற்றுக",
    student: "மாணவர்",
    faculty: "பேராசிரியர்",
    deptAdmin: "துறை நிர்வாகி",
    superAdmin: "முதன்மை நிர்வாகி"
  }
};

export class LanguageManager {
  static currentLang = localStorage.getItem('alagappa_nme_lang') || 'en';

  static get(key) {
    return translations[this.currentLang]?.[key] || translations['en'][key] || key;
  }

  static setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('alagappa_nme_lang', lang);
  }
}
