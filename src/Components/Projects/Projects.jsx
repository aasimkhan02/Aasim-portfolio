import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import PhytoclassImg from '../../assets/Phytoclass.png';
import EVUAImg from '../../assets/EVUA.png';
import ThreatboxImg from '../../assets/Threatbox.png';

const featuredProjects = [
  {
    id: 'threatbox',
    title: 'THREATBOX',
    subtitle: 'MALWARE ANALYSIS',
    description: 'ThreatBox is a malware analysis platform designed to process suspicious files through a structured analysis pipeline. It uses a Go backend with PostgreSQL to manage samples, analysis jobs, workers, events, and results. The system separates job scheduling from processing and is designed to collect system-level activity during malware execution for behavioral analysis.',
    categories: ['Go', 'PostgreSQL', 'Docker', 'REST API'],
    coverImage: ThreatboxImg,
    containImage: true,
    backgroundColor: '#0F172A' // Change this color for Threatbox
  },
  {
    id: 'evua',
    title: 'EVUA',
    subtitle: 'ACADEMIC PROJECT',
    description: 'EVUA is a legacy code modernization platform that automates large-scale code migrations using AST-based transformations with LLM-assisted fallbacks. It analyzes existing codebases, applies repository-wide refactoring, validates the generated changes, and streamlines the migration process through an intuitive web interface, making legacy software upgrades more reliable and maintainable.',
    categories: ['Python', 'FastAPI', 'React', 'SQLite'],
    coverImage: EVUAImg,
    containImage: true,
    backgroundColor: '#1E1B4B' // Change this color for EVUA
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
                  className={`project-image ${project.containImage ? 'project-image-contain' : ''}`}
                  style={project.containImage && project.backgroundColor ? { backgroundColor: project.backgroundColor } : {}}
                  loading="lazy"
                  decoding="async"
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