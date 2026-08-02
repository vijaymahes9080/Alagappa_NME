# 🏛️ Alagappa University Real-Time NME Course Registration System

[![Alagappa University](https://img.shields.io/badge/University-Alagappa%20University%2C%20Karaikudi-003366?style=for-the-badge&logo=education)](https://nme.alagappa.ac.in)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-10B981?style=for-the-badge)](file:///d:/intership/Alagappa_NME/docs)
[![License](https://img.shields.io/badge/License-Academic%20Enterprise-D4AF37?style=for-the-badge)](#)

An enterprise-grade, real-time Non-Major Elective (NME) Course Registration Portal engineered for **Alagappa University, Karaikudi**. Designed to digitize elective course selection, eliminate timetable conflicts, provide sub-second live seat tracking, auto-manage waiting lists, and support bilingual access (**English & Tamil தமிழ்**).

---

## 🎨 Official Alagappa University Theme & Branding

| Primary Brand Color | Hex Code | Role |
| :--- | :--- | :--- |
| **Royal Academic Blue** | `#003366` | Header backgrounds, primary buttons & navigation branding |
| **Deep University Navy** | `#002244` | Dark mode container fill & footer backgrounds |
| **Crimson Maroon** | `#800000` | Accent stripes, warning badges & department highlights |
| **Warm Gold** | `#D4AF37` | Text highlights, active tabs, seals & icons |

*The official vector logo asset is located at [`assets/alagappa_logo.svg`](file:///d:/intership/Alagappa_NME/assets/alagappa_logo.svg).*

---

## ⚡ Key System Features

- **🔴🟡🟢 Real-Time Seat Counter**: Live Socket.io seat synchronization with color indicators (Green > 20% available, Amber ≤ 20% left, Red = FULL / Waitlist).
- **🎓 Role-Based Dashboards**:
  - **Super Admin**: University-wide registration analytics, department fill ratio charts, live audit logs.
  - **Department Admin**: Course proposals, faculty assignment, seat limit adjustments, approval workflows.
  - **Faculty**: Enrolled student rosters, QR attendance scanner, internal assessment mark uploader.
  - **Student**: Live course search & filter, AI recommendations, conflict-free registration, printable **Registration Pass with QR Code**, timetable schedule viewer.
- **🌐 Bilingual UI**: Instant toggle between **English** and **Tamil (தமிழ்)**.
- **🤖 AI Course Advisor**: Embedded floating AI chatbot providing personalized elective recommendations based on department, credits, and schedule compatibility.
- **⏳ Automatic Waitlist Engine**: Automatically queue students when a course hits capacity, with auto-promotion when a registered student drops.
- **📱 QR Code Pass**: Instant QR code generation on registration slips for classroom attendance scanning.

---

## 📁 Repository Directory Structure

```
Alagappa_NME/
├── frontend/             # Vite + React 19 + Redux Toolkit + Socket.io-client + Tailwind/MUI
├── backend/              # Node.js + Express.js + Socket.io Server + Prisma ORM + JWT Auth
├── database/             # Prisma Schema (schema.prisma) & SQLite/PostgreSQL setup
├── database-schema/      # Standalone SQL schema definitions (schema.sql)
├── docs/                 # 13 SRS & Technical Specifications (Architecture, DFD, ERD, Security)
├── assets/               # SVG Branding (alagappa_logo.svg, nme_banner.svg)
├── wireframes/           # Text & SVG UI/UX Wireframes (UI_Wireframes.md)
├── postman/              # Ready-to-import Postman API Collection (NME_API_Collection.json)
├── swagger/              # OpenAPI 3.0 API Specification (openapi.json)
├── testing/              # API Integration and Unit Tests (api_tests.spec.js)
├── deployment/           # Production Nginx Server Configuration (deploy_nginx.conf)
├── reports/              # Sample JSON/PDF Export Templates (Sample_Analytics_Report.json)
├── security/             # Security Policies & OWASP Compliance Checklist (Security_Policy.md)
├── diagrams/             # Mermaid Architecture & Registration Sequence Flowcharts
└── prompts/              # AI Engine prompts & documentation rules (system_prompts.md)
```

---

## 🚀 Quick Start Guide (No Docker Required)

### 1. Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### 2. Launch Backend API & Socket Server
```bash
cd backend
npm run dev
```
- API Base URL: `http://localhost:5000/api/v1`
- Socket.io Endpoint: `ws://localhost:5000`

### 3. Launch Frontend Web Application
```bash
cd frontend
npm run dev
```
- Web Application URL: `http://localhost:3000`

---

## 🔐 Demo User Credentials (Quick Role Switcher)

Use the dropdown in the top navigation bar or log in with these roles:

| Role | Email | Features Available |
| :--- | :--- | :--- |
| **Student** | `student@alagappa.ac.in` | Course Registration, QR Slip, Waitlist, Timetable, AI Bot |
| **Faculty** | `ramanathan@alagappa.ac.in` | Class Roster, QR Attendance Scanner, Internal Mark Entry |
| **Department Admin** | `cs_admin@alagappa.ac.in` | Propose Courses, Assign Instructors, Seat Adjustments |
| **Super Admin** | `admin@alagappa.ac.in` | University Analytics, Department Trends, Audit Logs |

---

## 📄 Documentation Links

- [Requirement Analysis](file:///d:/intership/Alagappa_NME/docs/01_Requirement_Analysis.md)
- [Functional Requirements](file:///d:/intership/Alagappa_NME/docs/02_Functional_Requirements.md)
- [System Architecture & Workflow](file:///d:/intership/Alagappa_NME/docs/06_Workflow.md)
- [Postman API Collection](file:///d:/intership/Alagappa_NME/postman/NME_API_Collection.json)
- [Swagger OpenAPI Spec](file:///d:/intership/Alagappa_NME/swagger/openapi.json)

---

© 2026 Alagappa University, Karaikudi. All rights reserved.
