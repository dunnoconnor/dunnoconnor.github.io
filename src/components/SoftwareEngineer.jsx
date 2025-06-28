import React from 'react';
import sklearn_logo from '../assets/Scikit_learn_logo_small.png';
import python_logo from '../assets/Python-logo-notext.png';
import react_logo from '../assets/react.svg';
import './SoftwareEngineer.css';

const SoftwareEngineer = () => {
  const projects = [
    {
      id: 1,
      title: 'Apprentice Withdrawal Risk Predictive Model',
      description: 'A predictive model using scikit-learn to analyze apprentice withdrawal risk from apprenticeship programs, achieving 98.37% accuracy with k-neighbors classification.',
      image: sklearn_logo,
      link: 'https://github.com/dunnoconnor/sklearn-tools',
      technologies: ['Python', 'Scikit-learn', 'Data Science', 'Jupyter']
    },
    {
      id: 2,
      title: 'Nav-CS - Computer Science Program Navigator',
      description: 'A React.js tool for students to compare computer science degree programs using U.S. Department of Education data with interactive visualizations and maps.',
      image: react_logo,
      link: 'https://github.com/dunnoconnor/nav-cs',
      technologies: ['React.js', 'JavaScript', 'Google Charts', 'Heroku']
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms Demo',
      description: 'A comprehensive demonstration of data structures and algorithms implemented in Python, showcasing fundamental computer science concepts.',
      image: python_logo,
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