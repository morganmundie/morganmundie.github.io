import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = ({ topicName, positions }) => {
      console.log(positions)

  return (
    <div className="experience-section">
      <h2>{topicName}</h2>

      {positions.length === 0 ? (
        <p>No positions listed.</p>
      ) : (
        positions.map((position, index) => (
          <div key={index} className="position">
            <h3>{position.title}</h3>
            <p className="dates">{position.tagline}</p>
            <ul>
              {position.responsiblities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ExperienceSection;
