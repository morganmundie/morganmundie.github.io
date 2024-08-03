// src/components/Section.js

import React from 'react';

const Section = React.forwardRef(({ id, title, children }, ref) => {
  return (
    <section ref={ref} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
});

export default Section;
