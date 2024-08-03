import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Main.css'; 

const Main = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="main">
      <Header
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <main>
        <Outlet context={{ aboutRef, experienceRef, projectsRef }} /> {/* Pass refs via context */}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
