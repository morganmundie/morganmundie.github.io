import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ aboutRef, experienceRef, projectsRef, activeSection }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (ref) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/'; // Navigate to homepage if not already there
    }
    scrollToRef(ref) // Scroll to the referenced section
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => setIsNavOpen(false);
  }, [navigate]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const getActiveClass = (id) => {
    return activeSection === id ? 'active' : '';
  };

  
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Morgan Mundell Portfolio</h1>
        <button className="hamburger" onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </button>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavigation(aboutRef)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => handleNavigation(experienceRef)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavigation(projectsRef)}
              >
                Projects
              </a>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;
