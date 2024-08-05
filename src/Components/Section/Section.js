import React, { forwardRef } from 'react';
import './Section.css'

const Section = forwardRef(({ id, title, children }, ref) => (
  <section id={id} ref={ref} className="section">
    {title ? <h2 className='section-heading'>{title}</h2> : null}
    {children}
  </section>
));

export default Section;
