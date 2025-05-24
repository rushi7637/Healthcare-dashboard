import React from 'react';
import '../components/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
      <div className="appointment-icon">{icon}</div>
      <div className="appointment-details">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;