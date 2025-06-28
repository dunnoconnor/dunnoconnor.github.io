import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { name: 'Home', icon: null },
    { name: 'Software Engineer', icon: null },
    { name: 'Technical Educator', icon: null }, 
    { name: 'Developer Advocate', icon: null }
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`mobile-tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 