import React from 'react';
import '../components/Sidebar.css';
import navigationLinks from '../data/navigationLinks';

const Sidebar = () => {
  if (!Array.isArray(navigationLinks)) {
    console.error('navigationLinks is not an array:', navigationLinks);
    return <div></div>;
  }

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;