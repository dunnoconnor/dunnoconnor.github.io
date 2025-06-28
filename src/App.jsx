import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import SoftwareEngineer from './components/SoftwareEngineer'
import TechnicalEducator from './components/TechnicalEducator'
import DeveloperAdvocate from './components/DeveloperAdvocate'
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
        return <TechnicalEducator />;
      case 'Developer Advocate':
        return <DeveloperAdvocate />;
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
