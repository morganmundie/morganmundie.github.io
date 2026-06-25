import React from 'react';
import './Footer.css'; // Import CSS for Footer styling

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li>
            <a href="mailto:morganmundell2@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/morgan-mundell"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/morganmundie"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p>&copy; {year} Morgan Mundell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;