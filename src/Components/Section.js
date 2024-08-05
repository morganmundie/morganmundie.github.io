import React, { forwardRef } from 'react';

const Section = forwardRef(({ id, title, children }, ref) => (
  <section id={id} ref={ref} className="section">
    <h2>{title}</h2>
    {children}
  </section>
));

export default Section;
