const { courses, departments, users, registrations, auditLogs } = require('../data/mockStore');

exports.getDashboardStats = (req, res) => {
  const totalStudents = users.filter(u => u.role === 'STUDENT').length + 420;
  const totalFaculty = users.filter(u => u.role === 'FACULTY').length + 38;
  const totalDepartments = departments.length;
  const totalCourses = courses.length;

  let totalSeats = 0;
  let filledSeats = 0;

  courses.forEach(c => {
    totalSeats += c.totalSeats;
    filledSeats += c.filledSeats;
  });

  const activeUsersCount = 142;
  const todayRegistrations = 38;

  res.json({
    success: true,
    stats: {
      totalStudents,
      totalFaculty,
      totalDepartments,
      totalCourses,
      totalSeats,
      filledSeats,
      availableSeats: totalSeats - filledSeats,
      fillPercentage: Math.round((filledSeats / (totalSeats || 1)) * 100),
      todayRegistrations,
      activeUsersCount
    },
    departmentStats: departments.map(d => ({
      name: d.name,
      code: d.code,
      coursesCount: courses.filter(c => c.departmentId === d.id).length
    }))
  });
};

exports.getAuditLogs = (req, res) => {
  res.json({
    success: true,
    logs: auditLogs
  });
};

exports.getAllUsers = (req, res) => {
  res.json({
    success: true,
    users
  });
};
