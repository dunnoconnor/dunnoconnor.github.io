import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import SoftwareEngineer from './components/SoftwareEngineer'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Profile />;
      case 'Software Engineer':
        return <SoftwareEngineer />;
      case 'Technical Educator':
        return <div className="coming-soon">Technical Educator content coming soon...</div>;
      case 'Developer Advocate':
        return <div className="coming-soon">Developer Advocate content coming soon...</div>;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default App
