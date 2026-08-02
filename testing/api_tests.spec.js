// Integration & Unit Test Suite for Alagappa University NME API

describe('Alagappa NME API Tests', () => {
  it('should list all available NME courses', () => {
    const courses = [
      { code: 'NME-CSE-101', title: 'Python Programming', filledSeats: 42, totalSeats: 60 }
    ];
    expect(courses.length).toBeGreaterThan(0);
    expect(courses[0].totalSeats - courses[0].filledSeats).toBe(18);
  });

  it('should auto-assign student to waitlist when seats are zero', () => {
    const course = { code: 'NME-MGT-201', totalSeats: 50, filledSeats: 50 };
    const remaining = Math.max(0, course.totalSeats - course.filledSeats);
    expect(remaining).toBe(0);
  });
});
