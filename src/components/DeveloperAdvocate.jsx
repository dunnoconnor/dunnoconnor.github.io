import React from 'react';
import aiaiTeam from '../assets/aiai_team.jpg';
import communityEvent from '../assets/community_event.png';
import './DeveloperAdvocate.css';

const DeveloperAdvocate = () => {
  const events = [
    {
      id: 1,
      title: 'AI Accelerator Institute Conference',
      image: aiaiTeam,
      link: 'https://world.aiacceleratorinstitute.com/location/caionewyork/agenda',
      description: 'Presented on actionable steps for leaders to drive successful AI adoption across technical teams',
      cta: 'View Conference Agenda'
    },
    {
      id: 2,
      title: 'Multiverse Community Event',
      image: communityEvent,
      link: 'https://vimeo.com/1074339613/e6a0683bec',
      description: 'Led a workshop on generative AI best practices for 555 data analysts - the most popular event in the history of this series',
      cta: 'Watch Event Video'
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="developer-advocate">
      <div className="developer-advocate-header">
        <h1>Developer Advocacy Highlights</h1>
        <p>Explore my recent talks and workshops focused on AI adoption and community education.</p>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleCardClick(event.link)}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-link">
                <span>{event.cta} →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperAdvocate; 