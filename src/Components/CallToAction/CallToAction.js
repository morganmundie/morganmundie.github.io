import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-banner">
      <h2>Have a product that's hard to explain?</h2>
      <p>Let's make a video that makes it click.</p>
      <Link to="/contact" className="button button-primary">
        Start a Project
      </Link>
    </div>
  );
};

export default CallToAction;
