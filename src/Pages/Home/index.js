import React, { forwardRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import Section from '../../Components/Section/Section';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Experience from '../../Components/Experience/Experience';

const HomePage = () => {
  return (
    <div>
      <Section id="about" ref={useOutletContext().aboutRef} >
        <AboutMe />
      </Section>
      <Section id="experience" ref={useOutletContext().experienceRef} title="Experience">
        <Experience />
      </Section>
      <Section id="projects" ref={useOutletContext().projectsRef} title="Projects">
        <p>Projects Section Content</p>
      </Section>
    </div>
  );
};

export default HomePage;
