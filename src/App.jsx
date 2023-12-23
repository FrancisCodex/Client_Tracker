import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/modules/home/home';
import Dashboard from './components/modules/Dashboard/dashboard';
import Incomes from './components/modules/income/Incomes';
import IncomeCategories from './components/modules/income-category/IncomeCategories';
import Expenses from './components/modules/expense/Expense';
import ExpenseCategories from './components/modules/expense-category/ExpenseCategories';
import Visitors from './components/modules/visitors/visitors';
import Login from './components/auth/login';
import Register from './components/auth/Register';  
import Sidebar from './components/NavbarBars/Sidebar';
import AuthProvider from './components/authprovider/AuthProvider';
import {ToastContainer} from 'react-toastify';
import ProtectedRoute from './components/authprovider/Protected';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
    <Router>
      <AppContent />
    </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const hideSidebarFor = ['/login', '/register', '/'];

  return (
    <div className="app-container">
      {!hideSidebarFor.includes(location.pathname) && (
        <div className="sidebar-container d-none d-md-block">
        <Sidebar />
    </div>
      )}
      <div className={`route-container ${hideSidebarFor.includes(location.pathname) ? 'center-content' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/incomes" element={<ProtectedRoute> <Incomes /> </ProtectedRoute>} />
          <Route path="/income-categories" element={<ProtectedRoute> <IncomeCategories /> </ProtectedRoute>} />
          <Route path="/expenses" element={<ProtectedRoute> <Expenses /> </ProtectedRoute>} />
          <Route path="/expense-categories" element={<ProtectedRoute> <ExpenseCategories /> </ProtectedRoute>} />
          <Route path="/visitors" element={<Visitors />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;