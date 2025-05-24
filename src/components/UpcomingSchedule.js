import React, { useState } from 'react';
import '../components/UpcomingSchedule.css';
import appointments from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { FaPlus } from 'react-icons/fa';

function UpcomingSchedule() {
  const [activeDay, setActiveDay] = useState('thursday');

  const handleDayChange = (day) => {
    setActiveDay(day);
  };

  const handleAddAppointment = () => {
    console.log('Add new appointment clicked');
    alert('Add new appointment clicked!'); // Placeholder for modal or form
  };

  const days = [
    { key: 'thursday', label: 'Thursday' },
    { key: 'saturday', label: 'Saturday' },
  ];

  return (
    <section className="upcoming-schedule">
      <div className="schedule-header">
        <h3>The Upcoming Schedule</h3>
        <button className="add-appointment-btn" onClick={handleAddAppointment}>
          <FaPlus className="add-icon" /> Add Appointment
        </button>
      </div>
      <div className="day-tabs">
        {days.map((day) => (
          <button
            key={day.key}
            className={`day-tab ${activeDay === day.key ? 'active' : ''}`}
            onClick={() => handleDayChange(day.key)}
          >
            {day.label}
          </button>
        ))}
      </div>
      <div className="schedule-group">
        <h4>{activeDay === 'thursday' ? 'On Thursday' : 'On Saturday'}</h4>
        {appointments[activeDay].length > 0 ? (
          appointments[activeDay].map((appt, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appt.title}
              time={appt.time}
              icon={appt.icon}
              className="appointment-card-animated"
            />
          ))
        ) : (
          <p className="no-appointments">No appointments scheduled for this day.</p>
        )}
      </div>
    </section>
  );
}

export default UpcomingSchedule;