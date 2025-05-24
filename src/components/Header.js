import React, { useState } from 'react';
import '../components/Header.css';
import { FaSearch, FaBell, FaUserCircle, FaPlus } from 'react-icons/fa';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search query:', e.target.value);
    // Add search logic here (e.g., filter data or make an API call)
  };

  const handleNotificationClick = () => {
    console.log('Notification icon clicked');
    // Add logic to show notifications (e.g., toggle a dropdown)
    alert('Notifications clicked!'); // Temporary feedback
  };

  const handleAddClick = () => {
    console.log('Add button clicked');
    // Add logic to open a modal or form (e.g., for adding an appointment)
    alert('Add button clicked!'); // Temporary feedback
  };

  return (
    <header className="header">
      <div className="header-logo"> Health Dashboard</div>
      <div className="header-actions">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <FaBell
          className="notification-icon"
          onClick={handleNotificationClick}
          style={{ cursor: 'pointer' }}
        />
        <div className="user-profile">
          <FaUserCircle className="profile-icon" />
          <span>Dr. Rushikesh Patil</span>
        </div>
        <button className="add-button" onClick={handleAddClick}>
          <FaPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;