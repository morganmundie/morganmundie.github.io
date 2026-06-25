import React from 'react';
import Section from '../../Components/Section/Section';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Experience from '../../Components/Experience/Experience';

const AboutPage = () => {
  return (
    <div>
      <Section id="about">
        <AboutMe />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
    </div>
  );
};

export default AboutPage;
