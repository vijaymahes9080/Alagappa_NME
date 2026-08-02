const { courses, registrations, users } = require('../data/mockStore');

exports.getFacultyCourses = (req, res) => {
  const facultyId = req.user?.id || 'usr-faculty-1';
  const facultyCourses = courses.filter(c => c.facultyId === facultyId || facultyId === 'usr-admin-1');

  res.json({
    success: true,
    courses: facultyCourses
  });
};

exports.getCourseEnrolledStudents = (req, res) => {
  const { courseId } = req.params;
  
  const enrolled = registrations
    .filter(r => (r.courseId === courseId || courseId === 'ALL') && r.status === 'CONFIRMED')
    .map(r => {
      const student = users.find(u => u.id === r.studentId) || {
        id: r.studentId,
        name: "Student User",
        email: "student@alagappa.ac.in",
        registerNumber: "2024101001"
      };
      return {
        registrationId: r.id,
        registrationNo: r.registrationNo,
        student,
        registeredAt: r.registeredAt,
        attendancePct: 92,
        internalMark: 23.5
      };
    });

  res.json({
    success: true,
    count: enrolled.length,
    students: enrolled
  });
};

exports.saveAttendance = (req, res) => {
  const { courseId, attendanceList } = req.body;

  res.json({
    success: true,
    message: `Attendance updated for ${attendanceList?.length || 1} students.`
  });
};

exports.saveMarks = (req, res) => {
  const { courseId, marksList } = req.body;

  res.json({
    success: true,
    message: "Internal marks uploaded successfully."
  });
};
