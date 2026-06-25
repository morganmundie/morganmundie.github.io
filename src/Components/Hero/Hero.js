import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ onSeeWorkClick }) => {
  return (
    <div className="hero">
      <p className="hero-eyebrow">Video production for technical companies</p>
      <h1 className="hero-heading">
        Technical videos that make complex products make sense.
      </h1>
      <p className="hero-subheading">
        I produce marketing and explainer videos for engineering and product
        teams — turning dense technical work into clear stories that
        customers actually watch and understand.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="button button-primary">
          Get a Quote
        </Link>
        <a href="#work" className="button button-secondary" onClick={onSeeWorkClick}>
          See Sample Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
