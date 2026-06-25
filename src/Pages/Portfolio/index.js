import React from 'react';
import Section from '../../Components/Section/Section';
import PortfolioGrid from '../../Components/PortfolioGrid/PortfolioGrid';
import CallToAction from '../../Components/CallToAction/CallToAction';

const PortfolioPage = () => (
  <div>
    <Section id="portfolio" title="Portfolio">
      <PortfolioGrid />
    </Section>
    <CallToAction />
  </div>
);

export default PortfolioPage;
