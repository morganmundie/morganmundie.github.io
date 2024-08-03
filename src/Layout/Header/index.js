import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS for Header styling

const Header = ({ aboutRef, experienceRef, projectsRef }) => {
  const navigate = useNavigate();

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
  };

  return (
    <header className="header">
      <div className="container">
        <h1>Morgan Mundell Portfolio</h1>
        <nav>
          <ul>
          <li><a onClick={() => handleNavigation(aboutRef)}>About</a></li>
          <li><a onClick={() => handleNavigation(experienceRef)}>Experience</a></li>
          <li><a onClick={() => handleNavigation(projectsRef)}>Projects</a></li>
          <li><Link to="/contact">Contact</Link></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
