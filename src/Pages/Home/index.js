import React, { forwardRef } from 'react';
import Section from '../../Components/Section';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Section id="about" ref={useOutletContext().aboutRef} title="About">
        <p>About Section Content</p>
      </Section>
      <Section id="experience" ref={useOutletContext().experienceRef} title="Experience">
        <p>Experience Section Content</p>
      </Section>
      <Section id="projects" ref={useOutletContext().projectsRef} title="Projects">
        <p>Projects Section Content</p>
      </Section>
    </div>
  );
};

export default HomePage;
