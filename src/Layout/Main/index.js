import React, { useRef, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from "../Footer"


const Main = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

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
  }, []);

  return (
    <div className="main">
      <Header
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        activeSection={activeSection}
      />
      <main>
        <Outlet context={{ aboutRef, experienceRef, projectsRef }} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;