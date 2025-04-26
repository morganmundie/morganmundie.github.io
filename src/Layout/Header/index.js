import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation, useOutletContext } from 'react-router-dom';
import './Header.css';

const Header = ({ activeSection, aboutRef, experienceRef, projectsRef, location }) => {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const [pendingRef, setPendingRef] = useState(null); // ref if coming from contacts page
  const [navOpen, setNavOpen] = useState(false);


  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (e, ref) => {
    e.preventDefault();
    e.stopPropagation();
    if (location.pathname !== '/') {
      setPendingRef(ref);
      navigate('/'); // Navigate to homepage if not already there
    }
    else {
      scrollToRef(ref); // Scroll to the referenced section
    }
  };

  const isActive = (section) => location.pathname === '/' && activeSection === section;

  // since navigate is synchronous, need to wait
  useEffect(() => {
    if (location.pathname === '/' && pendingRef) {
      scrollToRef(pendingRef);
      setPendingRef(null); // reset
    }
  }, [location, pendingRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => setNavOpen(false);
  }, [navigate]);


  const getActiveClass = (id) => {
    return activeSection === id ? 'active' : '';
  };

  
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Morgan Mundell Portfolio</h1>
        <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
          ☰
        </button>
        <nav className={`nav ${navOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="#"
                className={isActive('about') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, aboutRef)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={isActive('experience') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, experienceRef)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className={isActive('projects') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, projectsRef)}
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
              >
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