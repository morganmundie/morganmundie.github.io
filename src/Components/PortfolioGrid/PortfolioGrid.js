import React, { useState } from 'react';
import './PortfolioGrid.css';

const items = [
  { title: 'Explainer Video', orientation: 'long' },
  { title: 'Product Demo', orientation: 'long' },
  { title: 'Marketing Video', orientation: 'long' },
  { title: 'Social Teaser', orientation: 'short' },
  { title: 'Feature Highlight Reel', orientation: 'short' },
  { title: 'Quick Tip', orientation: 'short' },
];

const PortfolioGrid = () => {
  const [orientation, setOrientation] = useState('long');
  const filtered = items.filter((item) => item.orientation === orientation);

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-toggle" role="tablist" aria-label="Content orientation">
        <button
          type="button"
          role="tab"
          aria-selected={orientation === 'long'}
          className={orientation === 'long' ? 'active' : ''}
          onClick={() => setOrientation('long')}
        >
          Long Form
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={orientation === 'short'}
          className={orientation === 'short' ? 'active' : ''}
          onClick={() => setOrientation('short')}
        >
          Short Form
        </button>
      </div>

      <div className={`portfolio-grid ${orientation}`}>
        {filtered.map((item) => (
          <div className="portfolio-card" key={item.title}>
            <div className={`portfolio-placeholder ${orientation}`}>
              <span className="portfolio-play">▶</span>
            </div>
            <p className="portfolio-title">{item.title}</p>
            <p className="portfolio-status">Sample coming soon</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
