// Mock & Runtime Store for Alagappa University NME Portal

const departments = [
  { id: "dept-cse", code: "CSE", name: "Department of Computer Science", building: "Science Block A", headOfDept: "Dr. A. Nagarajan" },
  { id: "dept-mgt", code: "MGT", name: "Department of Management Studies", building: "Management Tower", headOfDept: "Dr. S. Kanthimathi" },
  { id: "dept-com", code: "COM", name: "Department of Commerce", building: "Commerce Complex", headOfDept: "Dr. V. Meenakshi" },
  { id: "dept-tam", code: "TAM", name: "Department of Tamil", building: "Humanities Block", headOfDept: "Dr. P. Thirunavukkarasu" },
  { id: "dept-bio", code: "BIO", name: "Department of Bio-Technology", building: "Bio Block", headOfDept: "Dr. K. Anand" },
  { id: "dept-eng", code: "ENG", name: "Department of English", building: "Humanities Block", headOfDept: "Prof. S. Janaki" }
];

const users = [
  {
    id: "usr-admin-1",
    email: "admin@alagappa.ac.in",
    passwordHash: "$2a$10$w8T0J4q7H1N3A2Z0eX1Y2u3V4W5X6Y7Z8A9B0C1D2E3F4G5H6", // admin123
    name: "Dr. M. Shanmugam (Super Admin)",
    role: "SUPER_ADMIN",
    departmentId: "dept-cse",
    phone: "+91 9842100001",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "usr-deptadmin-1",
    email: "cs_admin@alagappa.ac.in",
    passwordHash: "$2a$10$w8T0J4q7H1N3A2Z0eX1Y2u3V4W5X6Y7Z8A9B0C1D2E3F4G5H6",
    name: "Dr. A. Nagarajan (CSE Admin)",
    role: "DEPT_ADMIN",
    departmentId: "dept-cse",
    phone: "+91 9842100002",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "usr-faculty-1",
    email: "ramanathan@alagappa.ac.in",
    passwordHash: "$2a$10$w8T0J4q7H1N3A2Z0eX1Y2u3V4W5X6Y7Z8A9B0C1D2E3F4G5H6",
    name: "Dr. R. Ramanathan",
    role: "FACULTY",
    departmentId: "dept-cse",
    phone: "+91 9842100003",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: "usr-student-1",
    email: "student@alagappa.ac.in",
    passwordHash: "$2a$10$w8T0J4q7H1N3A2Z0eX1Y2u3V4W5X6Y7Z8A9B0C1D2E3F4G5H6", // student123
    name: "K. Vijaykumar",
    role: "STUDENT",
    registerNumber: "2024101001",
    departmentId: "dept-mgt",
    phone: "+91 9842199999",
    cgpa: 8.85,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80"
  }
];

const courses = [
  {
    id: "crs-101",
    code: "NME-CSE-101",
    title: "Python Programming for Data Analysis",
    description: "Learn fundamental Python scripting, NumPy, Pandas, and Data Visualization techniques tailored for all non-major disciplines.",
    departmentId: "dept-cse",
    departmentName: "Department of Computer Science",
    facultyId: "usr-faculty-1",
    facultyName: "Dr. R. Ramanathan",
    credits: 3,
    semester: 3,
    totalSeats: 60,
    filledSeats: 42,
    venue: "Lab 3, Science Block A",
    scheduleDays: "Mon, Wed, Fri",
    scheduleTime: "10:00 AM - 11:00 AM",
    difficulty: "Beginner",
    prerequisites: "Basic Computer Literacy",
    rating: 4.9,
    syllabusUrl: "/assets/sample_syllabus.pdf",
    status: "APPROVED"
  },
  {
    id: "crs-201",
    code: "NME-MGT-201",
    title: "Digital Marketing & Social Media Strategy",
    description: "Comprehensive guide to SEO, Google Analytics, content strategy, brand building, and social media ad execution.",
    departmentId: "dept-mgt",
    departmentName: "Department of Management Studies",
    facultyId: "usr-faculty-1",
    facultyName: "Dr. S. Kanthimathi",
    credits: 3,
    semester: 3,
    totalSeats: 50,
    filledSeats: 50, // FULL - trigger waitlist demo
    venue: "Seminar Hall 2, Management Tower",
    scheduleDays: "Tue, Thu",
    scheduleTime: "02:00 PM - 03:30 PM",
    difficulty: "Intermediate",
    prerequisites: "None",
    rating: 4.8,
    syllabusUrl: "/assets/sample_syllabus.pdf",
    status: "APPROVED"
  },
  {
    id: "crs-102",
    code: "NME-CSE-102",
    title: "Cyber Security & Personal Privacy",
    description: "Protecting personal identity online, network security basics, safe web browsing, encryption, and threat prevention.",
    departmentId: "dept-cse",
    departmentName: "Department of Computer Science",
    facultyId: "usr-faculty-1",
    facultyName: "Prof. M. Suresh",
    credits: 3,
    semester: 3,
    totalSeats: 45,
    filledSeats: 41, // Amber seat indicator
    venue: "Room 204, Science Block A",
    scheduleDays: "Mon, Wed",
    scheduleTime: "02:00 PM - 03:30 PM",
    difficulty: "Beginner",
    prerequisites: "None",
    rating: 4.7,
    syllabusUrl: "/assets/sample_syllabus.pdf",
    status: "APPROVED"
  },
  {
    id: "crs-105",
    code: "NME-COM-105",
    title: "Financial Literacy & Mutual Fund Investment",
    description: "Practical guide to budgeting, stock market basics, tax planning, mutual funds, and long-term personal wealth management.",
    departmentId: "dept-com",
    departmentName: "Department of Commerce",
    facultyId: "usr-faculty-1",
    facultyName: "Dr. V. Meenakshi",
    credits: 2,
    semester: 3,
    totalSeats: 80,
    filledSeats: 25,
    venue: "Auditorium B, Commerce Complex",
    scheduleDays: "Tue, Thu",
    scheduleTime: "10:00 AM - 11:30 AM",
    difficulty: "Beginner",
    prerequisites: "None",
    rating: 4.95,
    syllabusUrl: "/assets/sample_syllabus.pdf",
    status: "APPROVED"
  },
  {
    id: "crs-301",
    code: "NME-TAM-101",
    title: "Applied Tamil Literature & Folk Art Heritage (தமிழ்க் கலைகள்)",
    description: "Exploration of classical Tamil poetry, traditional music, folk dance, and cultural history of Tamil Nadu.",
    departmentId: "dept-tam",
    departmentName: "Department of Tamil",
    facultyId: "usr-faculty-1",
    facultyName: "Dr. P. Thirunavukkarasu",
    credits: 3,
    semester: 3,
    totalSeats: 50,
    filledSeats: 18,
    venue: "Tamil Sangam Hall, Humanities Block",
    scheduleDays: "Mon, Fri",
    scheduleTime: "03:30 PM - 05:00 PM",
    difficulty: "Beginner",
    prerequisites: "Basic Tamil Reading",
    rating: 4.9,
    syllabusUrl: "/assets/sample_syllabus.pdf",
    status: "APPROVED"
  }
];

const registrations = [
  {
    id: "reg-901",
    registrationNo: "NME-2026-88101",
    studentId: "usr-student-1",
    courseId: "crs-101",
    status: "CONFIRMED",
    registeredAt: "2026-08-01T10:00:00.000Z",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NME-2026-88101"
  }
];

const waitingList = [
  {
    id: "wl-001",
    studentId: "usr-student-1",
    studentName: "K. Vijaykumar",
    courseId: "crs-201",
    position: 1,
    createdAt: "2026-08-01T11:15:00.000Z"
  }
];

const auditLogs = [
  { id: "log-1", userId: "usr-student-1", action: "LOGIN", details: "User logged into Student Dashboard", timestamp: "2026-08-02T06:30:00Z" },
  { id: "log-2", userId: "usr-student-1", action: "REGISTER_COURSE", details: "Registered for NME-CSE-101 Python Programming", timestamp: "2026-08-01T10:00:00Z" }
];

module.exports = {
  departments,
  users,
  courses,
  registrations,
  waitingList,
  auditLogs
};
