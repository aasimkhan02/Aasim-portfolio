import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import PhytoclassImg from '../../assets/ocean.jpg';
import ConstructionImg from '../../assets/construction.jpg';

const featuredProjects = [
  {
    id: 'phytoclass',
    title: 'Phytoclass',
    subtitle: 'Google Summer of Code 2025',
    description: 'PhytoClass is an open-source platform for phytoplankton classification and flow cytometry analysis, designed to help researchers process, validate, and interpret scientific data through an interactive R/Shiny interface. As part of Google Summer of Code, I contributed by improving the analysis workflow, implementing session-based file isolation, adding report export capabilities, strengthening validation checks, and integrating automated testing to enhance reliability and multi-user support.',
    categories: ['R', 'Shiny', 'GitHub Actions', 'testthat'],
    coverImage: PhytoclassImg,
  },
  {
    id: 'evua',
    title: 'EVUA',
    subtitle: 'ACADEMIC PROJECT',
    description: 'EVUA is a legacy code modernization platform that automates large-scale code migrations using AST-based transformations with LLM-assisted fallbacks. It analyzes existing codebases, applies repository-wide refactoring, validates the generated changes, and streamlines the migration process through an intuitive web interface, making legacy software upgrades more reliable and maintainable.',
    categories: ['Python', 'FastAPI', 'React', 'SQLite'],
    coverImage: ConstructionImg,
  }
];

const Projects = () => {
  return (
    <section className="section-padding bg-white" id="projects" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <h2 className="projects-section-title mb-24 uppercase" data-aos="fade-up">Selected Work</h2>

        <div className="projects-list">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card" data-aos="fade-up">
              <div className="project-image-wrapper">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-details-grid">
                <div className="project-header-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
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