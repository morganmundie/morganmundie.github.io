import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from '../Pages/Home';
import ServicesPage from '../Pages/Services';
import PortfolioPage from '../Pages/Portfolio';
import AboutPage from '../Pages/About';
import ContactPage from '../Pages/Contact';

// Import the layout component
import Main from '../Layout/Main';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default AppRoutes;