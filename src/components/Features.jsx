import React from 'react';

function Features() {
  const features = [
    {
      title: 'Intent-first workflow',
      description: 'Describe what you want and focus on the outcome, not file-by-file edits.'
    },
    {
      title: 'GitHub-native execution',
      description: 'Work in existing repositories with clean diffs and straightforward review.'
    },
    {
      title: 'Mobile full-stack shipping',
      description: 'Frontend, backend, and infra workflows from one mobile workspace.'
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-desc">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;