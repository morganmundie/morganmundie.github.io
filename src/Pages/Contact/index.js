import React from 'react';
import Section from '../../Components/Section/Section';
import './Contact.css';

const ContactPage = () => {
  return (
    <Section id="contact" title="Contact">
      <p>
        Have a question or want to work together? Reach out through any of the
        channels below.
      </p>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <a href="mailto:morganmundell2@gmail.com">morganmundell2@gmail.com</a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/morgan-mundell"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/morgan-mundell
          </a>
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a
            href="https://github.com/morganmundie"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/morganmundie
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default ContactPage;
