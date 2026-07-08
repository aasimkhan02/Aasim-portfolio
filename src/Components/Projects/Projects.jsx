import React from 'react';
import './Projects.css';
import HealthWaveImg from '../../assets/healthwave.png';
import Phytoclass from './../../assets/ocean.jpg'
import ConstructionImg from '../../assets/construction.jpg';

const Projects = () => {
  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container">
        <h2 className="projects-section-title mb-24 uppercase">Selected Work</h2>

        <div className="projects-list">
          {/* Phytoclass Project Card */}
          <article className="project-card">
            <div className="project-image-wrapper">
              <img
                src={Phytoclass}
                alt="Phytoclass"
                className="project-image"
              />
            </div>

            <div className="project-details-grid">
              <div className="project-header-info">
                <h3 className="project-card-title">Phytoclass</h3>
                <p className="project-subtitle">Google Summer of Code - IOOS • 2025</p>
              </div>

              <div className="project-description-info">
                <p className="project-description-text text-secondary">
                  Phytoclass is an open-source phytoplankton classification platform that provides an interactive interface for analyzing and validating flow cytometry data. During Google Summer of Code, I improved the analysis workflow by implementing session isolation, report exports, validation checks, and automated testing to enhance reliability and multi-user support.
                </p>

                <div className="project-tech-list uppercase font-bold">
                  <span>R</span>
                  <span>Shiny</span>
                  <span>GitHub Actions</span>
                  <span>testthat</span>
                  <span>Git</span>
                </div>

                <div className="project-link-wrapper">
                  <a href="#projects" className="project-view-link">
                    View Project <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* EVUA Project Card */}
          <article className="project-card">
            <div className="project-image-wrapper">
              <img
                src={ConstructionImg}
                alt="EVUA"
                className="project-image"
              />
            </div>

            <div className="project-details-grid">
              <div className="project-header-info">
                <h3 className="project-card-title">EVUA - Enhanced version upgrade assitant</h3>
                <p className="project-subtitle">Academic project 2025-2026</p>
              </div>

              <div className="project-description-info">
                <p className="project-description-text text-secondary">
                  EVUA is a legacy code modernization platform that automates the migration of outdated codebases using AST-based transformations and LLM-assisted fallbacks. It streamlines repository-wide upgrades through automated refactoring, validation, and testing workflows, making large-scale code migrations more reliable and maintainable.
                </p>

                <div className="project-tech-list uppercase font-bold">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React</span>
                  <span>SQLite</span>
                </div>

                <div className="project-link-wrapper">
                  <a href="#projects" className="project-view-link">
                    View Project <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Projects;