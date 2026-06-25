import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';
import './Header.css';

const Header = ({ location }) => {
  const headerRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);

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
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname === '/services' ? 'active' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={location.pathname === '/portfolio' ? 'active' : ''}
              >
                Portfolio
              </Link>
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
