import React from 'react';
import './SoftwareEngineer.css';

const SoftwareEngineer = () => {
  const projects = [
    {
      id: 1,
      title: 'Adoption AI MCP',
      description: 'An AI-powered tool for adoption agencies to streamline the matching process between children and prospective parents using machine learning algorithms.',
      image: 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Adoption+AI',
      link: 'https://github.com/Multiversers/adoption-ai-mcp',
      technologies: ['AI/ML', 'Python', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Sklearn Tools - Apprentice Withdrawal Risk',
      description: 'A predictive model using scikit-learn to analyze apprentice withdrawal risk from apprenticeship programs, achieving 98.37% accuracy with k-neighbors classification.',
      image: 'https://via.placeholder.com/300x200/50C878/FFFFFF?text=ML+Model',
      link: 'https://github.com/dunnoconnor/sklearn-tools',
      technologies: ['Python', 'Scikit-learn', 'Data Science', 'Jupyter']
    },
    {
      id: 3,
      title: 'Nav-CS - Computer Science Program Navigator',
      description: 'A React.js tool for students to compare computer science degree programs using U.S. Department of Education data with interactive visualizations and maps.',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Nav-CS',
      link: 'https://github.com/dunnoconnor/nav-cs',
      technologies: ['React.js', 'JavaScript', 'Google Charts', 'Heroku']
    },
    {
      id: 4,
      title: 'DSA Demo Python',
      description: 'A comprehensive demonstration of data structures and algorithms implemented in Python, showcasing fundamental computer science concepts.',
      image: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=DSA+Demo',
      link: 'https://github.com/dunnoconnor/dsa_demo_python',
      technologies: ['Python', 'Data Structures', 'Algorithms']
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="software-engineer">
      <div className="software-engineer-header">
        <h1>Software Engineering Projects</h1>
        <p>Explore my latest projects showcasing full-stack development, machine learning, and data science skills.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-link">
                <span>View on GitHub →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareEngineer; 