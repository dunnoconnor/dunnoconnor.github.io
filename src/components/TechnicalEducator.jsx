import React from 'react';
import './TechnicalEducator.css';

const TechnicalEducator = () => {
  const videos = [
    {
      id: 1,
      title: 'GitHub Copilot Jira MCP Demo',
      description: 'A comprehensive demonstration of integrating GitHub Copilot with Jira using Model Context Protocol (MCP) for enhanced project management workflows.',
      videoUrl: 'https://youtu.be/RHwBF22mFn4?si=GQYVdUiQdQzLMcXC',
      embedUrl: 'https://www.youtube.com/embed/RHwBF22mFn4',
      platform: 'YouTube',
      duration: '15:30'
    },
    {
      id: 2,
      title: 'ChatGPT for Data Analysis Workshop',
      description: 'Learn how to leverage ChatGPT for data analysis tasks, including data cleaning, visualization, and statistical analysis techniques.',
      videoUrl: 'https://vimeo.com/1074339613/e6a0683bec',
      embedUrl: 'https://player.vimeo.com/video/1074339613',
      platform: 'Vimeo',
      duration: '45:15'
    },
    {
      id: 3,
      title: 'Introduction to Algorithmic Problem Solving',
      description: 'Master the fundamentals of algorithmic thinking and problem-solving strategies used in technical interviews and real-world programming challenges.',
      videoUrl: 'https://youtu.be/OgI2jbfDLNg?si=irLkvbkAqW0gtzrn',
      embedUrl: 'https://www.youtube.com/embed/OgI2jbfDLNg',
      platform: 'YouTube',
      duration: '32:45'
    },
    {
      id: 4,
      title: 'UI Design Principles',
      description: 'Explore essential UI design principles including visual hierarchy, user experience, accessibility, and modern design patterns for web applications.',
      videoUrl: 'https://youtu.be/1X2pfSdiopw?si=Zqxqp8rgIyLFW4gg',
      embedUrl: 'https://www.youtube.com/embed/1X2pfSdiopw',
      platform: 'YouTube',
      duration: '28:20'
    }
  ];

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="technical-educator">
      <div className="technical-educator-header">
        <h1>Technical Education Content</h1>
        <p>Explore my educational videos covering software development, data analysis, algorithms, and design principles.</p>
      </div>
      
      <div className="videos-grid">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => handleVideoClick(video.videoUrl)}
          >
            <div className="video-container">
              <iframe
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
              <div className="video-overlay">
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="video-content">
              <div className="video-header">
                <h3 className="video-title">{video.title}</h3>
                <div className="video-meta">
                  <span className="platform-tag">{video.platform}</span>
                  <span className="duration">{video.duration}</span>
                </div>
              </div>
              
              <p className="video-description">{video.description}</p>
              
              <div className="video-link">
                <span>Watch on {video.platform} →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalEducator; 