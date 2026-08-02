module.exports = function initSocket(io) {
  io.on('connection', (socket) => {
    console.log(`[Socket.io] Client connected: ${socket.id}`);

    socket.on('join_course_room', (courseId) => {
      socket.join(`course:${courseId}`);
      console.log(`[Socket.io] Socket ${socket.id} joined course:${courseId}`);
    });

    socket.on('leave_course_room', (courseId) => {
      socket.leave(`course:${courseId}`);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket.io] Client disconnected: ${socket.id}`);
    });
  });
};
