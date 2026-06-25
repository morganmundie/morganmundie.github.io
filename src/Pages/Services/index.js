import React from 'react';
import Section from '../../Components/Section/Section';
import ServiceShowcase from '../../Components/ServiceShowcase/ServiceShowcase';
import CallToAction from '../../Components/CallToAction/CallToAction';

const ServicesPage = () => (
  <div>
    <Section id="services" title="Services">
      <ServiceShowcase />
    </Section>
    <CallToAction />
  </div>
);

export default ServicesPage;
