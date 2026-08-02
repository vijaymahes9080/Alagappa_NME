import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const roleCredentialsDatabase = {
  "admin@alagappa.ac.in": {
    password: "SuperAdmin@2026",
    user: {
      id: "usr-admin-1",
      email: "admin@alagappa.ac.in",
      name: "Dr. M. Shanmugam",
      role: "SUPER_ADMIN",
      departmentId: "dept-cse",
      departmentName: "University NME Cell",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
    }
  },
  "cs_admin@alagappa.ac.in": {
    password: "DeptAdmin@2026",
    user: {
      id: "usr-deptadmin-1",
      email: "cs_admin@alagappa.ac.in",
      name: "Dr. A. Nagarajan",
      role: "DEPT_ADMIN",
      departmentId: "dept-cse",
      departmentName: "Computer Science",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
    }
  },
  "ramanathan@alagappa.ac.in": {
    password: "Faculty@2026",
    user: {
      id: "usr-faculty-1",
      email: "ramanathan@alagappa.ac.in",
      name: "Dr. R. Ramanathan",
      role: "FACULTY",
      departmentId: "dept-cse",
      departmentName: "Computer Science",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
    }
  },
  "student@alagappa.ac.in": {
    password: "Student@2026",
    user: {
      id: "usr-student-1",
      email: "student@alagappa.ac.in",
      name: "K. Vijaykumar",
      role: "STUDENT",
      registerNumber: "2024101001",
      departmentId: "dept-mgt",
      departmentName: "Management Studies",
      cgpa: 8.85,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80"
    }
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('alagappa_user');
    return saved ? JSON.parse(saved) : roleCredentialsDatabase["student@alagappa.ac.in"].user;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('alagappa_auth') === 'true';
  });

  const loginWithCredentials = (email, password) => {
    const record = roleCredentialsDatabase[email?.toLowerCase().trim()];

    if (!record) {
      return { success: false, message: "User account not found. Check email address." };
    }

    if (record.password !== password) {
      return { success: false, message: "Invalid password for specified account." };
    }

    setUser(record.user);
    setIsAuthenticated(true);
    localStorage.setItem('alagappa_user', JSON.stringify(record.user));
    localStorage.setItem('alagappa_auth', 'true');

    return { success: true, user: record.user };
  };

  const switchRole = (roleKey) => {
    const emailMap = {
      STUDENT: "student@alagappa.ac.in",
      FACULTY: "ramanathan@alagappa.ac.in",
      DEPT_ADMIN: "cs_admin@alagappa.ac.in",
      SUPER_ADMIN: "admin@alagappa.ac.in"
    };
    const email = emailMap[roleKey] || "student@alagappa.ac.in";
    const record = roleCredentialsDatabase[email];
    setUser(record.user);
    setIsAuthenticated(true);
    localStorage.setItem('alagappa_user', JSON.stringify(record.user));
    localStorage.setItem('alagappa_auth', 'true');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('alagappa_user');
    localStorage.setItem('alagappa_auth', 'false');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginWithCredentials, switchRole, logout, roleCredentialsDatabase }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
