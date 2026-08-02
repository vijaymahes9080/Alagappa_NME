const jwt = require('jsonwebtoken');
const { users } = require('../data/mockStore');
const { JWT_SECRET } = require('../middleware/auth');

exports.login = (req, res) => {
  const { email, role } = req.body;
  
  // Find matching user or fallback to standard demo user for specified role
  let user = users.find(u => u.email === email);
  
  if (!user && role) {
    user = users.find(u => u.role === role.toUpperCase()) || users[3];
  }
  
  if (!user) {
    user = users[3]; // Default to student
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    JWT_SECRET,
    { expiresIn: '8h' }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    success: true,
    message: "Login successful",
    token,
    refreshToken,
    user
  });
};

exports.getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id) || users[3];
  res.json({
    success: true,
    user
  });
};

exports.refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: "Refresh token required" });

  jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });
    const newToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token: newToken });
  });
};
