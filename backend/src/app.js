const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

function createApp(io) {
  const app = express();

  app.use(cors({
    origin: '*',
    credentials: true
  }));
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Attach io to request object for controllers to trigger real-time events
  app.use((req, res, next) => {
    req.io = io;
    next();
  });

  // API Routes
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/courses', courseRoutes);
  app.use('/api/v1/registrations', registrationRoutes);
  app.use('/api/v1/admin', adminRoutes);
  app.use('/api/v1/faculty', facultyRoutes);

  // Health check endpoint
  app.get('/api/v1/health', (req, res) => {
    res.json({
      status: 'UP',
      service: 'Alagappa University NME Portal API',
      timestamp: new Date().toISOString()
    });
  });

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint not found' });
  });

  return app;
}

module.exports = createApp;
