import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import HomePage from '../Pages/Home';
import DashboardPage from '../Pages/Dashboard';

// Import the layout component
import Main from '../Layout/Main';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes with Main as the layout wrapper */}
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;