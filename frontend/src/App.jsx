import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import CourseList from './pages/CourseList';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import DepartmentDashboard from './pages/DepartmentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TimetablePage from './pages/TimetablePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Student Routes */}
            <Route 
              path="/student/dashboard" 
              element={
                <ProtectedRoute requiredRole="STUDENT">
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/timetable" 
              element={
                <ProtectedRoute requiredRole="STUDENT">
                  <TimetablePage />
                </ProtectedRoute>
              } 
            />

            {/* Protected Faculty Routes */}
            <Route 
              path="/faculty/dashboard" 
              element={
                <ProtectedRoute requiredRole="FACULTY">
                  <FacultyDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Protected Department Admin Routes */}
            <Route 
              path="/department/dashboard" 
              element={
                <ProtectedRoute requiredRole="DEPT_ADMIN">
                  <DepartmentDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Protected Super Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute requiredRole="SUPER_ADMIN">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
