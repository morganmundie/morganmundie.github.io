import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from "../Footer"
import './Main.css';


const Main = () => {
  const [activeSection, setActiveSection] = useState('');
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const workRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const sections = [
      { id: 'services', ref: servicesRef },
      { id: 'process', ref: processRef },
      { id: 'work', ref: workRef },
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
    <div className="main">
      <Header
        activeSection={activeSection}
        servicesRef={servicesRef}
        processRef={processRef}
        workRef={workRef}
        location={location}
      />
      <main>
        <Outlet context={{ servicesRef, processRef, workRef }} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
