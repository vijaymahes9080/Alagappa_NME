# Security & OWASP Compliance Policy

## 1. Authentication & JWT Guard
- **Access Tokens**: Short-lived (8 hours) signed with HS256 / RS256 algorithm.
- **Refresh Tokens**: Stored securely with HTTP-only attribute.
- **Role Enforcement**: Middleware inspects `role` claim (`SUPER_ADMIN`, `DEPT_ADMIN`, `FACULTY`, `STUDENT`) on every protected route.

## 2. Threat Protections
- **SQL Injection**: Handled via Prisma ORM parameterized queries.
- **Cross-Site Scripting (XSS)**: Input sanitization and React JSX automatic HTML escaping.
- **CORS Protection**: Controlled origin headers preventing unauthorized cross-domain fetch calls.
- **Rate Limiting**: IP-based rate limiting (100 requests per 15 minutes per client).
- **Helmet Headers**: Content Security Policy (CSP), X-Frame-Options DENY, X-Content-Type-Options nosniff.
