import React from 'react';
import './Process.css';

const steps = [
  {
    title: 'Discovery Call',
    description: 'Understand your product, audience, and goals for the video.',
  },
  {
    title: 'Technical Deep Dive',
    description:
      "Take the time to learn your product and the technology behind it — docs, demos, codebase walkthroughs, etc.",
  },
  {
    title: 'Script & Storyboard',
    description: 'Draft a clear narrative and visual plan for your review.',
  },
  {
    title: 'Production',
    description: 'Record, animate, and edit the video using your brand assets.',
  },
  {
    title: 'Review & Revisions',
    description: 'Walk through a draft together and refine it based on your feedback.',
  },
  {
    title: 'Final Delivery',
    description: 'Receive final files in the formats and dimensions you need, ready to publish.',
  },
];

const Process = () => {
  return (
    <ol className="process-list">
      {steps.map((step, index) => (
        <li className="process-step" key={step.title}>
          <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Process;
