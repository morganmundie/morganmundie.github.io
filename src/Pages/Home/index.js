import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Section from '../../Components/Section/Section';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Process from '../../Components/Process/Process';
import Samples from '../../Components/Samples/Samples';
import CallToAction from '../../Components/CallToAction/CallToAction';
import useInView from '../../hooks/useInView';
import './Home.css';

const HomePage = () => {
  const { servicesRef, processRef, workRef } = useOutletContext();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      <Hero />
      <Section id="services" ref={servicesRef} title="Services">
        <Services />
      </Section>
      <Section id="process" ref={processRef} title="How It Works">
        <Process />
      </Section>
      <Section id="work" ref={workRef} title="Sample Work">
        <Samples />
      </Section>
      <div ref={ctaRef} className={`cta-section${ctaInView ? ' in-view' : ''}`}>
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
