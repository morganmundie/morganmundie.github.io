import React from 'react';
import { BrowserRouter as Router, Routes, Route, useOutletContext } from 'react-router-dom';

// Import page components
import HomePage from '../Pages/Home';
import ContactPage from '../Pages/Contact';

// Import the layout component
import Main from '../Layout/Main';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default AppRoutes;