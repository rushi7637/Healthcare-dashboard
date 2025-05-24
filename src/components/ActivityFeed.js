import React, { useState } from 'react';
import '../components/ActivityFeed.css';
import activityData from '../data/activityData';

function ActivityFeed() {
  const [timePeriod, setTimePeriod] = useState('week');

  const data = timePeriod === 'week' ? activityData.week : activityData.month;

  return (
    <section className="activity-feed">
      <div className="activity-header">
        <h3>Activity Feed</h3>
        <div className="time-period-toggle">
          <button
            className={`toggle-btn ${timePeriod === 'week' ? 'active' : ''}`}
            onClick={() => setTimePeriod('week')}
          >
            Week
          </button>
          <button
            className={`toggle-btn ${timePeriod === 'month' ? 'active' : ''}`}
            onClick={() => setTimePeriod('month')}
          >
            Month
          </button>
        </div>
      </div>
      <p className="activity-summary">
        {data.reduce((sum, day) => sum + day.appointments, 0)} appointments in this {timePeriod}
      </p>
      <div className="activity-chart">
        {data.map((day, index) => (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{ height: `${Math.min(day.appointments * 20, 200)}px` }}
              title={`${day.label}: ${day.appointments} appointment(s)`}
            ></div>
            <span className="bar-label">{day.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;