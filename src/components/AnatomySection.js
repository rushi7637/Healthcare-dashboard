import React from 'react';
import '../components/AnatomySection.css';
import healthIndicators from '../data/healthIndicators';

function AnatomySection() {
  return (
    <section className="anatomy-section">
      <h3>Anatomy Overview</h3>
      <img src="https://thumbs.dreamstime.com/z/ai-powered-mental-health-dashboard-laptop-displays-mental-health-dashboard-generated-ai-visualizing-key-metrics-380482706.jpg?ct=jpeg" alt="Anatomical Illustration" className="anatomy-image" />
      <div className="health-indicators">
        {healthIndicators.map((indicator, index) => (
          <div key={index} className={`indicator ${indicator.status}`}>
            <span>{indicator.name}</span>
            <span>{indicator.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;