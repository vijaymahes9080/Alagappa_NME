# Non-Functional Requirements (NFR)

## 1. Performance & Scalability (NFR-PERF)
- **Sub-second Latency**: Real-time seat updates delivered to client UI within < 100ms via WebSocket connections.
- **High Concurrency**: System engineered to sustain 5,000+ concurrent student registration requests during peak enrollment windows.

## 2. Security & Compliance (NFR-SEC)
- **Data Protection**: Passwords hashed using Bcrypt with cost factor 12.
- **Transport Security**: TLS 1.3 encryption across HTTP and WebSocket endpoints.
- **OWASP Compliance**: Protection against SQL Injection, XSS, CSRF, and CORS unauthorized origins.
- **Audit Logging**: Comprehensive timestamped log of all user registrations, course edits, and mark entries.

## 3. Reliability & Availability (NFR-REL)
- **99.9% Uptime**: Resilience against server crashes with auto-reconnection in Socket.io client.
- **Transaction Safety**: Atomic database transactions using Prisma transaction API to prevent double-booking.

## 4. Usability & Accessibility (NFR-UX)
- **Bilingual Support**: Instant toggle between English and Tamil (தமிழ்).
- **Responsive Layout**: Mobile-first responsive UI powered by TailwindCSS & Material UI.
- **Dark Mode**: Native Dark/Light theme switching with persistent localStorage preference.
