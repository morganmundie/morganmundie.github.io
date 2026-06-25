import React, { forwardRef } from 'react';
import useInView from '../../hooks/useInView';
import './Section.css'

const Section = forwardRef(({ id, title, children }, forwardedRef) => {
  const [revealRef, inView] = useInView();

  const setRefs = (node) => {
    revealRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  return (
    <section id={id} ref={setRefs} className={`section${inView ? ' in-view' : ''}`}>
      {title ? <h2 className='section-heading'>{title}</h2> : null}
      {children}
    </section>
  );
});

export default Section;
