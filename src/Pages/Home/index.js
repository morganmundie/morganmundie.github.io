import React from 'react';
import Section from '../../Components/Section/Section';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Process from '../../Components/Process/Process';
import Samples from '../../Components/Samples/Samples';
import CallToAction from '../../Components/CallToAction/CallToAction';
import useInView from '../../hooks/useInView';
import './Home.css';

const HomePage = () => {
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      <Hero />
      <Section id="services" title="Services">
        <Services />
      </Section>
      <Section id="process" title="How It Works">
        <Process />
      </Section>
      <Section id="work" title="Sample Work">
        <Samples />
      </Section>
      <div ref={ctaRef} className={`cta-section${ctaInView ? ' in-view' : ''}`}>
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
