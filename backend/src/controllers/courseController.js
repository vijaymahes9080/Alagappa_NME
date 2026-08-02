const { courses, departments } = require('../data/mockStore');

exports.getAllCourses = (req, res) => {
  const { department, semester, search, difficulty } = req.query;
  let filtered = [...courses];

  if (department && department !== 'ALL') {
    filtered = filtered.filter(c => c.departmentId === department || c.departmentName.toLowerCase().includes(department.toLowerCase()));
  }
  if (semester) {
    filtered = filtered.filter(c => c.semester === parseInt(semester));
  }
  if (difficulty && difficulty !== 'ALL') {
    filtered = filtered.filter(c => c.difficulty === difficulty);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.code.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.facultyName.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: filtered.length,
    courses: filtered
  });
};

exports.getCourseById = (req, res) => {
  const course = courses.find(c => c.id === req.params.id || c.code === req.params.id);
  if (!course) return res.status(404).json({ success: false, message: "Course not found" });

  res.json({
    success: true,
    course
  });
};

exports.getRecommendations = (req, res) => {
  // Hybrid recommendation algorithm
  // Returns top 3 courses outside student's own department with highest rating & available seats
  const studentDeptId = req.user?.departmentId || "dept-mgt";

  const recommended = courses
    .filter(c => c.departmentId !== studentDeptId && c.filledSeats < c.totalSeats)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  res.json({
    success: true,
    recommendations: recommended
  });
};

exports.createCourse = (req, res) => {
  const newCourse = {
    id: `crs-${Date.now()}`,
    code: req.body.code || `NME-${Math.floor(100 + Math.random() * 900)}`,
    title: req.body.title || "New NME Elective",
    description: req.body.description || "Course description...",
    departmentId: req.body.departmentId || "dept-cse",
    departmentName: req.body.departmentName || "Department of Computer Science",
    facultyName: req.body.facultyName || "Dr. Faculty",
    credits: req.body.credits || 3,
    semester: req.body.semester || 3,
    totalSeats: req.body.totalSeats || 60,
    filledSeats: 0,
    venue: req.body.venue || "Main Block Hall 1",
    scheduleDays: req.body.scheduleDays || "Mon, Wed",
    scheduleTime: req.body.scheduleTime || "10:00 AM - 11:30 AM",
    difficulty: req.body.difficulty || "Beginner",
    prerequisites: req.body.prerequisites || "None",
    rating: 5.0,
    status: "APPROVED"
  };

  courses.push(newCourse);

  // Real-time notification broadcast if io attached
  if (req.io) {
    req.io.emit('course_created', newCourse);
  }

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    course: newCourse
  });
};
