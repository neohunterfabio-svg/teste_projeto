
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationScreen from './screens/RegistrationScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddDebtScreen from './screens/AddDebtScreen';
import HistoryScreen from './screens/HistoryScreen';
import ReportsScreen from './screens/ReportsScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RegistrationScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/add-debt" element={<AddDebtScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/reports" element={<ReportsScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App; 
