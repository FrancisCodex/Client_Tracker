// AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import useLogin from '../../hooks/useLogin';
import useApi from '../../hooks/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const { login } = useLogin();
  const { data: user } = useApi([isAuthenticated]);

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    if (result) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;