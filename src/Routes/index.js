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
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

const HomePageWrapper = () => {
  const { aboutRef, experienceRef, projectsRef } = useOutletContext();
  return (
    <HomePage
      aboutRef={aboutRef}
      experienceRef={experienceRef}
      projectsRef={projectsRef}
    />
  );
};

export default AppRoutes;