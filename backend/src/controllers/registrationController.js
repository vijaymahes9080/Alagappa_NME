const { courses, registrations, waitingList, auditLogs } = require('../data/mockStore');

exports.registerCourse = (req, res) => {
  const { courseId } = req.body;
  const studentId = req.user?.id || 'usr-student-1';
  const studentName = req.user?.name || 'K. Vijaykumar';

  const course = courses.find(c => c.id === courseId || c.code === courseId);
  if (!course) return res.status(404).json({ success: false, message: "Course not found" });

  // 1. Check if already registered
  const existing = registrations.find(r => r.studentId === studentId && r.courseId === course.id && r.status === 'CONFIRMED');
  if (existing) {
    return res.status(400).json({ success: false, message: "You are already registered for this course!" });
  }

  // 2. Check seats available
  const remainingSeats = course.totalSeats - course.filledSeats;

  if (remainingSeats <= 0) {
    // Enroll in Waiting List
    const currentWait = waitingList.filter(w => w.courseId === course.id);
    const position = currentWait.length + 1;

    const waitlistRecord = {
      id: `wl-${Date.now()}`,
      studentId,
      studentName,
      courseId: course.id,
      position,
      createdAt: new Date().toISOString()
    };

    waitingList.push(waitlistRecord);

    auditLogs.push({
      id: `log-${Date.now()}`,
      userId: studentId,
      action: "WAITLIST_JOINED",
      details: `Joined waitlist position #${position} for ${course.code}`,
      timestamp: new Date().toISOString()
    });

    return res.json({
      success: true,
      isWaitlisted: true,
      position,
      message: `Course is currently full. You have been added to the Waiting List at position #${position}.`
    });
  }

  // 3. Confirm Registration & Decrement Seat
  course.filledSeats += 1;
  const newRegNo = `NME-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const newReg = {
    id: `reg-${Date.now()}`,
    registrationNo: newRegNo,
    studentId,
    courseId: course.id,
    status: "CONFIRMED",
    registeredAt: new Date().toISOString(),
    qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${newRegNo}`
  };

  registrations.push(newReg);

  auditLogs.push({
    id: `log-${Date.now()}`,
    userId: studentId,
    action: "REGISTER_COURSE",
    details: `Registered successfully for ${course.code}`,
    timestamp: new Date().toISOString()
  });

  // 4. Emit Real-time Socket Event for Seat update
  if (req.io) {
    req.io.emit('seat_updated', {
      courseId: course.id,
      filledSeats: course.filledSeats,
      totalSeats: course.totalSeats,
      remainingSeats: course.totalSeats - course.filledSeats
    });
  }

  res.status(201).json({
    success: true,
    isWaitlisted: false,
    message: "Registration successful! Slip and QR generated.",
    registration: newReg,
    course
  });
};

exports.dropCourse = (req, res) => {
  const { courseId } = req.params;
  const studentId = req.user?.id || 'usr-student-1';

  const regIndex = registrations.findIndex(r => (r.courseId === courseId || r.id === courseId) && r.studentId === studentId && r.status === 'CONFIRMED');

  if (regIndex === -1) {
    return res.status(404).json({ success: false, message: "Active registration not found" });
  }

  const reg = registrations[regIndex];
  reg.status = 'DROPPED';

  const course = courses.find(c => c.id === reg.courseId);
  if (course) {
    course.filledSeats = Math.max(0, course.filledSeats - 1);

    // Auto-promote top student from waitlist if any
    const courseWaitlist = waitingList.filter(w => w.courseId === course.id).sort((a, b) => a.position - b.position);
    
    if (courseWaitlist.length > 0) {
      const topWait = courseWaitlist[0];
      // Auto promote
      course.filledSeats += 1;
      const promotedReg = {
        id: `reg-${Date.now()}`,
        registrationNo: `NME-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        studentId: topWait.studentId,
        courseId: course.id,
        status: "CONFIRMED",
        registeredAt: new Date().toISOString(),
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PROMOTED-${topWait.studentId}`
      };
      registrations.push(promotedReg);
      
      // Remove from waitlist
      const wlIndex = waitingList.findIndex(w => w.id === topWait.id);
      if (wlIndex !== -1) waitingList.splice(wlIndex, 1);

      if (req.io) {
        req.io.emit('waitlist_promoted', {
          studentId: topWait.studentId,
          courseCode: course.code
        });
      }
    }

    if (req.io) {
      req.io.emit('seat_updated', {
        courseId: course.id,
        filledSeats: course.filledSeats,
        totalSeats: course.totalSeats,
        remainingSeats: course.totalSeats - course.filledSeats
      });
    }
  }

  res.json({
    success: true,
    message: "Course dropped successfully."
  });
};

exports.getMyRegistrations = (req, res) => {
  const studentId = req.user?.id || 'usr-student-1';
  
  const myRegs = registrations.filter(r => r.studentId === studentId && r.status === 'CONFIRMED').map(r => {
    const course = courses.find(c => c.id === r.courseId);
    return {
      ...r,
      course
    };
  });

  const myWaitlist = waitingList.filter(w => w.studentId === studentId).map(w => {
    const course = courses.find(c => c.id === w.courseId);
    return {
      ...w,
      course
    };
  });

  res.json({
    success: true,
    registrations: myRegs,
    waitingList: myWaitlist
  });
};
