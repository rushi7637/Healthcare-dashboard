import React from 'react';
import '../components/DashboardOverview.css';

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <h2 className="dashboard-overview__title">Dashboard Overview</h2>
      <p className="dashboard-overview__description">Summary of your health metrics and recent activities.</p>
      
      {/* Health Metrics Cards */}
      <div className="dashboard-overview__metrics">
        <div className="metric-card">
          <h3 className="metric-card__title">Heart Rate</h3>
          <p className="metric-card__value">72 bpm</p>
          <p className="metric-card__info">Normal range: 60-100 bpm</p>
        </div>
        <div className="metric-card">
          <h3 className="metric-card__title">Steps Today</h3>
          <p className="metric-card__value">8,245</p>
          <p className="metric-card__info">Goal: 10,000 steps</p>
        </div>
        <div className="metric-card">
          <h3 className="metric-card__title">Calories Burned</h3>
          <p className="metric-card__value">450 kcal</p>
          <p className="metric-card__info">Daily goal: 600 kcal</p>
        </div>
      </div>

      {/* Health Image (Inline SVG for a heart icon) */}
      <div className="dashboard-overview__image-container">
        <svg
          className="dashboard-overview__heart-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <p className="dashboard-overview__image-caption">Your heart health is being monitored.</p>
    </section>
  );
}

export default DashboardOverview;