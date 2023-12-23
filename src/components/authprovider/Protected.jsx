// ProtectedRoute.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Loading from '../buttons/loading';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) {
    return <Loading />;
  }

  return isAuthenticated ? <>{children || <Outlet />}</> : null;
};

export default ProtectedRoute;