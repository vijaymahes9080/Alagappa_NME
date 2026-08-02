-- Alagappa University Real-Time NME System SQL Schema

CREATE TABLE IF NOT EXISTS departments (
    id VARCHAR(36) PRIMARY KEY,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    building VARCHAR(100) NOT NULL,
    head_of_dept VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(30) NOT NULL CHECK (role IN ('SUPER_ADMIN', 'DEPT_ADMIN', 'FACULTY', 'STUDENT')),
    register_number VARCHAR(50) UNIQUE,
    department_id VARCHAR(36) REFERENCES departments(id) ON DELETE SET NULL,
    phone VARCHAR(20),
    avatar VARCHAR(255),
    cgpa NUMERIC(3, 2) DEFAULT 8.50,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses (
    id VARCHAR(36) PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    department_id VARCHAR(36) NOT NULL REFERENCES departments(id) ON DELETE CASCADE,
    faculty_id VARCHAR(36) REFERENCES users(id) ON DELETE SET NULL,
    credits INT DEFAULT 3,
    semester INT DEFAULT 3,
    total_seats INT DEFAULT 60,
    filled_seats INT DEFAULT 0,
    venue VARCHAR(150) DEFAULT 'Science Block Room 102',
    schedule_days VARCHAR(50) DEFAULT 'Mon, Wed, Fri',
    schedule_time VARCHAR(50) DEFAULT '10:00 AM - 11:00 AM',
    difficulty VARCHAR(30) DEFAULT 'Beginner',
    prerequisites VARCHAR(255) DEFAULT 'None',
    rating NUMERIC(2, 1) DEFAULT 4.8,
    syllabus_url VARCHAR(255),
    status VARCHAR(20) DEFAULT 'APPROVED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS registrations (
    id VARCHAR(36) PRIMARY KEY,
    registration_no VARCHAR(50) UNIQUE NOT NULL,
    student_id VARCHAR(36) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id VARCHAR(36) NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'CONFIRMED',
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    qr_code_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS waiting_list (
    id VARCHAR(36) PRIMARY KEY,
    student_id VARCHAR(36) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id VARCHAR(36) NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    position INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, course_id)
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
