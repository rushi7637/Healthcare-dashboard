import React, { useState } from 'react';
import '../components/CalendarView.css';
import calendarData from '../data/calendarData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function CalendarView() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState({ month: 'October', year: 2021 });

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const monthIndex = months.indexOf(prev.month);
      if (monthIndex === 0) {
        return { month: months[11], year: prev.year - 1 };
      }
      return { month: months[monthIndex - 1], year: prev.year };
    });
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const monthIndex = months.indexOf(prev.month);
      if (monthIndex === 11) {
        return { month: months[0], year: prev.year + 1 };
      }
      return { month: months[monthIndex + 1], year: prev.year };
    });
    setSelectedDay(null);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>&larr; Prev</button>
        <h3>{`${currentMonth.month} ${currentMonth.year}`}</h3>
        <button className="nav-button" onClick={handleNextMonth}>Next &rarr;</button>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {calendarData.days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day.appointment ? 'has-appointment' : ''} ${selectedDay?.date === day.date ? 'selected' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <span>{day.date}</span>
            {day.appointment && <span className="appointment-time">{day.appointment}</span>}
          </div>
        ))}
      </div>
      <div className="calendar-appointments">
        <h4 className="appointments-title">Upcoming Appointments</h4>
        {selectedDay && selectedDay.appointment ? (
          <div className="appointment-detail">
            <p>Selected: {selectedDay.date} {currentMonth.month} {currentMonth.year}</p>
            <p>Appointment: {selectedDay.appointment}</p>
          </div>
        ) : (
          <>
            <SimpleAppointmentCard title="Dentist" time="09:00" icon={<span>🦷</span>} />
            <SimpleAppointmentCard title="Physiotherapy" time="11:00" icon={<span>💪</span>} />
          </>
        )}
      </div>
    </section>
  );
}

export default CalendarView;