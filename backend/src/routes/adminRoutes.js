const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, requireRole } = require('../middleware/auth');

router.get('/dashboard', authenticateToken, adminController.getDashboardStats);
router.get('/audit-logs', authenticateToken, adminController.getAuditLogs);
router.get('/users', authenticateToken, adminController.getAllUsers);

module.exports = router;
