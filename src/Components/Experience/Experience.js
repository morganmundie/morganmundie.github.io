import React from 'react';
import data from '../../Middleware/experiencedata.json'
import ExperienceSection from './ExperienceSection/ExperienceSection';

const Experience = () => {

  return (
    <div className='experience'>
        {data.map((company, index) => (
        <ExperienceSection key={index} {...company} />
      ))}
    </div>
  );
};

export default Experience;
