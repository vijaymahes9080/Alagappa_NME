const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');
const { authenticateToken } = require('../middleware/auth');

router.get('/courses', authenticateToken, facultyController.getFacultyCourses);
router.get('/courses/:courseId/students', authenticateToken, facultyController.getCourseEnrolledStudents);
router.post('/attendance', authenticateToken, facultyController.saveAttendance);
router.post('/marks', authenticateToken, facultyController.saveMarks);

module.exports = router;
