import React from 'react';
import '../components/DashboardMainContent.css';
import DashboardOverview from './DashboardOverview';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <DashboardOverview />
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;