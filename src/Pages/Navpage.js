import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';
import ForgotPasswordPage from '../AuthPages/ForgotPasswordPage';
import DashboardPage from './DashboardPage';
import StaffEntryPage from './StaffEntryPage';
import CustomerAddingPage from './CustomerAddingPage';
import SalaryManagementPage from './SalaryManagementPage';

const Navpage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maindashboard />}>
          <Route path="ForgotPasswordPage" element={<ForgotPasswordPage />} />
          <Route path="DashboardPage" element={<DashboardPage />} />
          <Route path="StaffEntryPage" element={<StaffEntryPage />} />
          <Route path="CustomerAddingPage" element={<CustomerAddingPage />} />
          <Route path="SalaryManagementPage" element={<SalaryManagementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navpage;
