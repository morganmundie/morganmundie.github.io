import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';
import './Header.css';

const Header = ({ activeSection, servicesRef, processRef, workRef, location }) => {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const [pendingRef, setPendingRef] = useState(null); // ref if coming from another page
  const [navOpen, setNavOpen] = useState(false);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (e, ref) => {
    e.preventDefault();
    e.stopPropagation();
    setNavOpen(false);
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
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <Link to="/" className="brand" onClick={() => setNavOpen(false)}>
          <span className="brand-name">Morgan Mundell</span>
          <span className="brand-tag">Technical Video Production</span>
        </Link>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="hamburger"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className={`nav ${navOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="#services"
                className={isActive('services') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, servicesRef)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={isActive('process') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, processRef)}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={isActive('work') ? 'active' : ''}
                onClick={(e) => handleNavigation(e, workRef)}
              >
                Work
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-cta">
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
