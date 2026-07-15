import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ProjectDetail.css';
import { projectsData } from '../../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [id]);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  return (
    <>
      <Navbar />
      <article className="project-detail-page bg-white" id="project-detail">
        {/* Hero Section */}
        <div className="project-hero">
          <div className="project-hero-image-wrapper">
            <img src={project.coverImage} alt={`${project.title} Cover`} className="project-hero-image" />
          </div>
          <div className="container project-hero-content">
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-summary">{project.summary}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container project-content-container">
          
          {/* The Problem */}
          {project.problem && project.problem !== 'N/A' && (
            <section className="project-section">
              <div className="project-section-header">
                <h2 className="project-section-title">The Problem</h2>
              </div>
              <div className="project-section-body text-secondary">
                <p>{project.problem}</p>
              </div>
            </section>
          )}

          {/* How It Works */}
          {project.howItWorks && project.howItWorks.length > 0 && (
            <section className="project-section">
              <div className="project-section-header">
                <h2 className="project-section-title">How It Works</h2>
              </div>
              <div className="project-section-body text-secondary">
                <div className="architecture-diagram-placeholder">
                  {project.howItWorks.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="arch-box">{step}</div>
                      {index < project.howItWorks.length - 1 && <div className="arch-arrow">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="project-section">
              <div className="project-section-header">
                <h2 className="project-section-title">Key Features</h2>
              </div>
              <div className="project-section-body">
                <ul className="feature-list text-secondary">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.title}:</strong> {feature.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Technical Challenges */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <section className="project-section">
              <div className="project-section-header">
                <h2 className="project-section-title">Technical Challenges</h2>
              </div>
              <div className="project-section-body text-secondary">
                {project.technicalChallenges.map((challenge, index) => (
                  <div key={index} className="challenge-item">
                    <h3 className="challenge-title">{challenge.title}</h3>
                    <p>{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What I Learned */}
          {project.learned && project.learned !== 'N/A' && (
            <section className="project-section">
              <div className="project-section-header">
                <h2 className="project-section-title">What I Learned</h2>
              </div>
              <div className="project-section-body text-secondary">
                <p>{project.learned}</p>
              </div>
            </section>
          )}

          {/* Links */}
          <section className="project-section border-none">
            <div className="project-section-header">
              <h2 className="project-section-title">Links</h2>
            </div>
            <div className="project-section-body">
              <div className="project-links-row">
                <a href={project.githubLink || '#'} className="project-external-link">
                  GitHub Repository <span className="arrow">↗</span>
                </a>
                <a href={project.liveLink || '#'} className="project-external-link">
                  Live Demo <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
};

export default ProjectDetail;
