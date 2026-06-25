import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'Explainer Videos',
    description:
      'Break down how your product works in a way a non-technical buyer can follow in under two minutes.',
  },
  {
    title: 'Product Marketing Videos',
    description:
      'Polished promotional videos that highlight your product’s value for landing pages, ads, and launches.',
  },
  {
    title: 'Technical Demo Videos',
    description:
      'Feature walkthroughs and demos that help technical buyers and new users understand exactly how to use your product.',
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="services-more-link">
        See all services →
      </Link>
    </div>
  );
};

export default Services;
