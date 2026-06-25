import React from 'react';
import { Link } from 'react-router-dom';
import './Samples.css';

const categories = ['Explainer Video', 'Product Demo', 'Marketing Video'];

const Samples = () => {
  return (
    <div className="samples-wrapper">
      <div className="samples-grid">
        {categories.map((category) => (
          <div className="sample-card" key={category}>
            <div className="sample-placeholder">
              <span className="sample-play">▶</span>
            </div>
            <p className="sample-category">{category}</p>
            <p className="sample-status">Sample coming soon</p>
          </div>
        ))}
      </div>
      <p className="samples-note">
        I'm building out my public reel right now — reach out and I can share
        work-in-progress examples in the meantime.
      </p>
      <Link to="/portfolio" className="samples-more-link">
        See full portfolio →
      </Link>
    </div>
  );
};

export default Samples;
