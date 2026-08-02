const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const { authenticateToken } = require('../middleware/auth');

router.get('/my', authenticateToken, registrationController.getMyRegistrations);
router.post('/', authenticateToken, registrationController.registerCourse);
router.delete('/:courseId', authenticateToken, registrationController.dropCourse);

module.exports = router;
