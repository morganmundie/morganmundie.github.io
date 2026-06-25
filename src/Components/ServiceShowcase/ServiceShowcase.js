import React from 'react';
import './ServiceShowcase.css';

const services = [
  {
    title: 'Explainer Videos',
    description:
      "Break down how your product works in a way a non-technical buyer can follow in under two minutes. Built for landing pages and onboarding flows where clarity matters more than spectacle.",
  },
  {
    title: 'Product Marketing Videos',
    description:
      "Polished promotional videos that highlight your product's value for landing pages, ads, and launches. Crafted to turn viewers into leads.",
  },
  {
    title: 'Technical Demo Videos',
    description:
      "Feature walkthroughs and demos that help technical buyers and new users understand exactly how to use your product, grounded in a real understanding of the underlying technology.",
  },
];

const ServiceShowcase = () => (
  <div className="service-showcase">
    {services.map((service, index) => (
      <div
        className={`service-row${index % 2 === 1 ? ' reverse' : ''}`}
        key={service.title}
      >
        <div className="service-image-placeholder" aria-hidden="true" />
        <div className="service-copy">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ServiceShowcase;
