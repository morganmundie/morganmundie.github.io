import React, { useRef } from 'react';
import Section from '../../Components/Section';

const HomePage = ({ aboutRef, experienceRef, projectsRef }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Section ref={aboutRef} id="about" title="About">
        <p>About Section Content</p>
      </Section>
      <Section ref={experienceRef} id="experience" title="Experience">
        <p>Experience Section Content</p>
      </Section>
      <Section ref={projectsRef} id="projects" title="Projects">
        <p>Projects Section Content</p>
      </Section>
    </div>
  );
};

export default HomePage;