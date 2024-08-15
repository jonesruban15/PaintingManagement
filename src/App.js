import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './AuthPages/LoginPage';
import ForgotPasswordPage from './AuthPages/ForgotPasswordPage';
import DashboardPage from './Pages/DashboardPage';
import StaffEntryPage from './Pages/StaffEntryPage';
import CustomerAddingPage from './Pages/CustomerAddingPage';
import SalaryManagementPage from './Pages/SalaryManagementPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="ForgotPasswordPage" element={<ForgotPasswordPage/>} />
        <Route path="DashboardPage" element={<DashboardPage/>} />
        <Route path="StaffEntryPage" element={<StaffEntryPage/>} />
        <Route path="CustomerAddingPage" element={<CustomerAddingPage/>} />
        <Route path="SalaryManagementPage" element={<SalaryManagementPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
