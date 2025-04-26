import React from 'react';

const ExperienceSection = ({ companyName, positions }) => {
    //todo add styling
  return (
    <div className="experience-section">
      <h2>{companyName}</h2>

      {positions.length === 0 ? (
        <p>No positions listed.</p>
      ) : (
        positions.map((position, index) => (
          <div key={index} className="position">
            <h3>{position.title}</h3>
            <p>{position.startDate} – {position.endDate}</p>
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
