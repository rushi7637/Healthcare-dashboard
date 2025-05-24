import React from 'react';
import '../components/HealthStatusCards.css';
import healthIndicators from '../data/healthIndicators';

function HealthStatusCards() {
  return (
    <section className="health-status-cards">
      {healthIndicators.slice(1).map((card, index) => (
        <div key={index} className="health-card">
          <h4>{card.name}</h4>
          <p>Date: {card.date}</p>
          <p>Status: {card.status}</p>
        </div>
      ))}
    </section>
  );
}

export default HealthStatusCards;