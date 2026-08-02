import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const rolePresets = {
  STUDENT: {
    id: "usr-student-1",
    email: "student@alagappa.ac.in",
    name: "K. Vijaykumar",
    role: "STUDENT",
    registerNumber: "2024101001",
    departmentId: "dept-mgt",
    departmentName: "Management Studies",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80"
  },
  FACULTY: {
    id: "usr-faculty-1",
    email: "ramanathan@alagappa.ac.in",
    name: "Dr. R. Ramanathan",
    role: "FACULTY",
    departmentId: "dept-cse",
    departmentName: "Computer Science",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
  },
  DEPT_ADMIN: {
    id: "usr-deptadmin-1",
    email: "cs_admin@alagappa.ac.in",
    name: "Dr. A. Nagarajan (Dept Admin)",
    role: "DEPT_ADMIN",
    departmentId: "dept-cse",
    departmentName: "Computer Science",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
  },
  SUPER_ADMIN: {
    id: "usr-admin-1",
    email: "admin@alagappa.ac.in",
    name: "Dr. M. Shanmugam (Super Admin)",
    role: "SUPER_ADMIN",
    departmentId: "dept-cse",
    departmentName: "University NME Cell",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('alagappa_user');
    return saved ? JSON.parse(saved) : rolePresets.STUDENT;
  });

  const switchRole = (roleKey) => {
    const newUser = rolePresets[roleKey] || rolePresets.STUDENT;
    setUser(newUser);
    localStorage.setItem('alagappa_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('alagappa_user');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, switchRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
