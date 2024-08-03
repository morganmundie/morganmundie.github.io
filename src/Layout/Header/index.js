import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS for Header styling

const Header = ({ aboutRef, experienceRef, projectsRef }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    return () => setIsNavOpen(false);
  }, [navigate]);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (ref) => {
    if (window.location.pathname !== '/') {
      navigate('/'); // Navigate to homepage if not already there
    }
    scrollToRef(ref); // Scroll to the referenced section
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <button className="hamburger" onClick={toggleNav}>
          {isNavOpen ? '✖' : '☰'}
        </button>
        <h1 className="header-title">Morgan Mundell Portfolio</h1>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a onClick={() => handleNavigation(aboutRef)}>About</a></li>
            <li><a onClick={() => handleNavigation(experienceRef)}>Experience</a></li>
            <li><a onClick={() => handleNavigation(projectsRef)}>Projects</a></li>
            <li><a onClick={() => navigate('/contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
