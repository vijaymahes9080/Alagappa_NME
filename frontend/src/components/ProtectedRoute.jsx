import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert } from 'lucide-react';

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole && user.role !== 'SUPER_ADMIN') {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-3xl text-center space-y-3">
        <ShieldAlert className="w-12 h-12 text-rose-500 mx-auto" />
        <h3 className="font-serif font-bold text-lg text-rose-800 dark:text-rose-200">Access Denied (403 Unauthorized)</h3>
        <p className="text-xs text-rose-600 dark:text-rose-300">
          Your active account role (<strong>{user.role}</strong>) does not have authorization to view this desk. Please log in as a <strong>{requiredRole}</strong>.
        </p>
      </div>
    );
  }

  return children;
}
