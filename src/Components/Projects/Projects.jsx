import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="section-padding bg-white" id="projects" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <h2 className="projects-section-title mb-24 uppercase">Selected Work</h2>

        <div className="projects-list">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-details-grid">
                <div className="project-header-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-subtitle">Academic project / GSoC 2025</p>
                </div>

                <div className="project-description-info">
                  <p className="project-description-text text-secondary">
                    {project.description}
                  </p>

                  <div className="project-tech-list uppercase font-bold">
                    {project.categories.map((cat, idx) => (
                      <span key={idx}>{cat}</span>
                    ))}
                  </div>

                  <div className="project-link-wrapper">
                    <Link to={`/project/${project.id}`} className="project-view-link">
                      View Project <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more-projects-wrapper">
          <Link to="/works" className="more-projects-btn">
            Checkout More Projects <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;