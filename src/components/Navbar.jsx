import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: null },
    { name: 'Software Engineer', icon: null },
    { name: 'Technical Educator', icon: null }, 
    { name: 'Developer Advocate', icon: null }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`navbar-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 