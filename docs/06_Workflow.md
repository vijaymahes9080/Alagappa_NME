# System Architecture & Workflows

## 1. System Architecture Diagram

```
+-----------------------------------------------------------------------+
|                           CLIENT LAYER                                |
|   +---------------------------------------------------------------+   |
|   |                      Vite + React 19 UI                       |   |
|   |   - Redux Toolkit (State Management)                          |   |
|   |   - Socket.io Client (Real-time seat counter & alerts)       |   |
|   |   - i18next (English & Tamil Localization)                    |   |
|   |   - Framer Motion & Material UI / Tailwind Styling            |   |
|   +---------------------------------------------------------------+   |
+----------------------------------- stroke ----------------------------+
                                    |
                           HTTP REST / WebSockets
                                    v
+-----------------------------------------------------------------------+
|                           BACKEND LAYER                               |
|   +---------------------------------------------------------------+   |
|   |                     Express.js REST API                       |   |
|   |   - Auth Middleware (JWT & Refresh Tokens)                    |   |
|   |   - RBAC Guards (SuperAdmin, DeptAdmin, Faculty, Student)    |   |
|   |   - Business Engine (Conflict Check, Waitlist, Credit Cap)   |   |
|   +---------------------------------------------------------------+   |
|   |                     Socket.io Realtime Engine                 |   |
|   |   - Broadcasts seat changes to course channels                |   |
|   |   - Direct alerts for waiting list auto-promotions            |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------------------------------------------+
                                    |
                               Prisma ORM
                                    v
+-----------------------------------------------------------------------+
|                          DATABASE LAYER                               |
|   - SQLite / PostgreSQL (Users, Courses, Registrations, Waitlist)     |
+-----------------------------------------------------------------------+
```

## 2. Real-Time Student Registration Workflow

```mermaid
sequenceDiagram
    autonumber
    actor Student
    participant UI as React Frontend
    participant WS as Socket.io Server
    participant API as Express API
    participant DB as Prisma Database

    Student->>UI: Clicks "Register Course"
    UI->>API: POST /api/v1/registrations (CourseId)
    API->>DB: Check seat availability & Schedule Clash
    alt Seats Available & No Clash
        API->>DB: Create Registration Record & Decrement Seat Count
        DB-->>API: Registration Success
        API->>WS: Emit 'seat_updated' (courseId, remainingSeats)
        WS-->>UI: Broadcast new remaining seats to all users
        API-->>UI: Return Registration Slip & QR Code
        UI-->>Student: Display Success Modal & Registration Slip
    stroke
        API->>DB: Create Waiting List Record
        DB-->>API: Added to Waitlist Position N
        API-->>UI: Return Waitlisted Status (Position N)
        UI-->>Student: Display "Added to Waiting List #N"
    end
```
