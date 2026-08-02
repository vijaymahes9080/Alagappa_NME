# Functional Requirements Document (FRD)

## 1. User Management & Authentication (FR-AUTH)
- **FR-AUTH-1**: Multi-role login support (Super Admin, Department Admin, Faculty, Student).
- **FR-AUTH-2**: JWT Access & Refresh Token rotation mechanism.
- **FR-AUTH-3**: SSO / Google OAuth & OTP passwordless login integration readiness.
- **FR-AUTH-4**: Role-based access control (RBAC) route guarding on frontend and backend.

## 2. Course Management (FR-CRS)
- **FR-CRS-1**: CRUD operations for NME course offerings with rich metadata (Credits, Syllabus PDF link, Instructor, Room/Venue, Time Slots).
- **FR-CRS-2**: Dynamic seat management with seat threshold alerts (Green > 20%, Amber ≤ 20%, Red = 0%).
- **FR-CRS-3**: Approval workflow for newly proposed NME courses by Department Admins.

## 3. Real-Time Registration & Waiting List (FR-REG)
- **FR-REG-1**: Instant seat reservation check preventing race conditions.
- **FR-REG-2**: Automatic timetable clash detection against existing registered courses.
- **FR-REG-3**: Automated waiting list queueing when course seats hit 0.
- **FR-REG-4**: Automatic promotion from waiting list to confirmed seat upon registration drop.
- **FR-REG-5**: Dynamic Socket.io seat update broadcasts to all connected clients.

## 4. Assessment & Attendance (FR-EVAL)
- **FR-EVAL-1**: Faculty portal to mark student attendance (Manual + QR Scanner).
- **FR-EVAL-2**: Upload and publication of internal marks with CSV/Excel bulk import.
- **FR-EVAL-3**: Automated registration slip generator with QR Code verification.

## 5. Analytics & AI Engine (FR-AI)
- **FR-AI-1**: AI Course Recommendation based on student branch, academic history, and credit requirements.
- **FR-AI-2**: Comprehensive admin analytics (Department breakdown, registration trends, seat fill ratios).
