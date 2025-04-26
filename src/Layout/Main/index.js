import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from "../Footer"


const Main = () => {
  const [activeSection, setActiveSection] = useState('');
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const sections = [
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: experienceRef },
      { id: 'projects', ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [location.pathname]);

  return (
    <div>
      <Header
        activeSection={activeSection}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        location={location}
      />
      <main>
        <Outlet context={{ aboutRef, experienceRef, projectsRef }} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
