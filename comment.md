# 📜 Project Comments, Requirements & Decision Log
## Alagappa University Real-Time NME Course Registration System

---

## 1. Initial User Request & Objective
- **System Goal**: Develop a complete, modern enterprise-level Real-Time Non-Major Elective (NME) Course Registration System for Alagappa University, Karaikudi.
- **Guidance**: Refer to the Alagappa University NME Portal workflow without cloning the website directly. Create an entirely new, modern system.
- **Tech Stack**:
  - **Frontend**: React 19, Vite, Material UI, TailwindCSS, Redux Toolkit, React Router, React Hook Form, Axios, Framer Motion, Chart.js.
  - **Backend**: Node.js, Express.js, Socket.io.
  - **Database**: PostgreSQL / SQLite via Prisma ORM.
  - **Security & Services**: JWT, Refresh Tokens, RBAC, Nodemailer, Firebase Cloud Messaging, QR Code generation.
- **Required User Roles**:
  - **Super Admin**: System-wide analytics, department management, course approval, user management, audit logs, PDF/Excel export.
  - **Department Admin**: Course creation, instructor assignment, seat capacity management, approval workflow.
  - **Faculty**: Student roster, QR/manual attendance marking, internal assessment marks entry, alerts.
  - **Student**: Course search & filter, live seat status, registration, timetable clash detection, printable QR pass, AI recommendations.

---

## 2. Refinements & User Feedback
- **Styling & Assets**: Strictly follow Alagappa University's signature colors:
  - Royal Academic Deep Blue (`#003366`)
  - Deep University Navy (`#002244`)
  - Crimson Maroon (`#800000`)
  - Warm Gold (`#D4AF37`)
- **Assets Folder**: Keep high-resolution vector logos and graphics in a separate `/assets` folder (`alagappa_logo.svg`, `nme_banner.svg`).
- **No Docker Constraint**: Avoid requiring Docker for execution. Ensure zero-friction local execution via standard `npm install` and `npm run dev` commands for both backend and frontend.
- **Developer & Git Setup**:
  - Git Author Name: `Vijay Mahes`
  - Git Author Email: `Vijaypradhap2004@gmail.com`
  - GitHub Remote Repository: `https://github.com/vijaymahes9080/Alagappa_NME.git`
  - Primary Branch: `main`

---

## 3. Implemented Architecture & Folder Structure

| Directory | Purpose | Key Files |
| :--- | :--- | :--- |
| `frontend/` | Vite + React 19 Client | `App.jsx`, `CourseList.jsx`, `StudentDashboard.jsx`, `Navbar.jsx`, `SeatBadge.jsx`, `AIChatbot.jsx` |
| `backend/` | Express + Socket.io Server | `server.js`, `app.js`, `mockStore.js`, `courseController.js`, `registrationController.js` |
| `database/` | Prisma ORM Schema | `schema.prisma` |
| `database-schema/` | Standalone SQL Schema | `schema.sql` |
| `docs/` | SRS & Design Documents | `01_Requirement_Analysis.md`, `02_Functional_Requirements.md`, `06_Workflow.md` |
| `assets/` | University Vector Branding | `alagappa_logo.svg`, `nme_banner.svg` |
| `wireframes/` | UI/UX Wireframes | `UI_Wireframes.md` |
| `postman/` | Postman API Collection v2.1 | `NME_API_Collection.json` |
| `swagger/` | OpenAPI 3.0 API Spec | `openapi.json` |
| `testing/` | API Integration Specs | `api_tests.spec.js` |
| `deployment/` | Production Nginx Config | `deploy_nginx.conf` |
| `reports/` | Export Templates | `Sample_Analytics_Report.json` |
| `security/` | Security Policy | `Security_Policy.md` |
| `diagrams/` | Flowcharts | `system_flowchart.mermaid` |
| `prompts/` | AI Engine Rules | `system_prompts.md` |

---

## 4. 🚀 10 Enterprise Innovations Implemented (Activity Surge)

1. **AI Speech & Voice-Search Controller** (`VoiceSearch.jsx`): Enables Web Speech API voice search for courses in English and Tamil.
2. **Automated QR Code Attendance Scanner** (`QRScannerModal.jsx`): Faculty camera scanner to verify registration slips and record attendance.
3. **Timetable Conflict Matrix Visualizer** (`TimetableConflictChecker.jsx`): Visual Mon-Fri matrix preventing schedule overlap.
4. **Credit Points & Fee Waiver Ledger** (`CreditPointsLedger.jsx`): Govt of Tamil Nadu fee waiver tracking & credit progress.
5. **Certificate Generator** (`CertificateGenerator.jsx`): Official Alagappa University NME completion certificate renderer.
6. **Department Analytics Matrix** (`DepartmentAnalyticsMatrix.jsx`): Dynamic department fill velocity and trending matrix.
7. **Faculty Assessment Rubric Builder** (`GradingRubricBuilder.jsx`): Internal assessment weighting and rubric calculator.
8. **PWA Engine & Service Worker** (`sw.js` & `manifest.json`): Offline course caching and PWA installation support.
9. **Real-Time Announcement Broadcaster** (`AnnouncementBroadcaster.jsx`): Super Admin emergency notification broadcaster.
10. **System Health & Socket.io Diagnostic Monitor** (`SystemHealthMonitor.jsx`): Infrastructure diagnostic monitor tracking WebSocket latency and DB query performance.

---

## 5. Key Functional Features Summary

1. **Real-Time Seat Counter (Socket.io)**:
   - Green badge (>20% seats left).
   - Amber badge (≤20% seats left - urgency indicator).
   - Red badge (FULL - automatic waitlist queue active).
2. **Timetable Clash Detection**: Automatically verifies day/time schedule overlap before confirming student registrations.
3. **Automated Waitlist Promotion**: When a registered student drops a course, the #1 waitlisted student is automatically promoted to a confirmed seat.
4. **Bilingual Localization**: Instant English and Tamil (தமிழ்) UI translation switcher.
5. **AI Course Advisor**: Floating chatbot offering personalized course recommendations based on department, credits, and schedule.
6. **Printable QR Pass**: Instant QR code generation on student registration slips for classroom attendance scanning.

---

## 5. Execution & Git Command Summary

```bash
# 1. Start Backend API & Socket Server
cd backend
npm install
npm run dev

# 2. Start Frontend React Web Application
cd frontend
npm install
npm run dev

# 3. Git Operations Performed
git config user.name "Vijay Mahes"
git config user.email "Vijaypradhap2004@gmail.com"
git remote add origin https://github.com/vijaymahes9080/Alagappa_NME.git
git branch -M main
git push -u origin main
```
