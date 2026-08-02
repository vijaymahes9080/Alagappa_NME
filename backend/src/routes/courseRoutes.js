const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', courseController.getAllCourses);
router.get('/recommendations', authenticateToken, courseController.getRecommendations);
router.get('/:id', courseController.getCourseById);
router.post('/', authenticateToken, courseController.createCourse);

module.exports = router;
