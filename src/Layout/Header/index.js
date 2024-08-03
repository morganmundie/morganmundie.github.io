import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for Header styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Stock Application</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;