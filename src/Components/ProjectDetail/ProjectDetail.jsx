import React from 'react';
import './ProjectDetail.css';
import CoverImage from '../../assets/ocean.jpg';

const ProjectDetail = () => {
  return (
    <article className="project-detail-page bg-white" id="project-detail">
      {/* Hero Section */}
      <div className="project-hero">
        <div className="project-hero-image-wrapper">
          <img src={CoverImage} alt="EVUA Cover" className="project-hero-image" />
        </div>
        <div className="container project-hero-content">
          <h1 className="project-hero-title">EVUA</h1>
          <p className="project-hero-summary">
            A legacy code modernization platform automating the migration of outdated codebases using AST-based transformations and LLM-assisted fallbacks.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container project-content-container">
        
        {/* The Problem */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">The Problem</h2>
          </div>
          <div className="project-section-body text-secondary">
            <p>
              Legacy code migrations are historically painful, error-prone, and manually intensive. I built EVUA to tackle the massive bottleneck of rewriting outdated codebases, removing the friction from large-scale refactoring and ensuring a more reliable transition process.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">How It Works</h2>
          </div>
          <div className="project-section-body text-secondary">
            <div className="architecture-diagram-placeholder">
              <div className="arch-box">AST Parsing</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Transformation</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">LLM Fallback</div>
              <div className="arch-arrow">→</div>
              <div className="arch-box">Validation</div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">Key Features</h2>
          </div>
          <div className="project-section-body">
            <ul className="feature-list text-secondary">
              <li>
                <strong>AST transformations:</strong> Precise syntax tree manipulations ensuring accurate code rewrites without risking logic errors.
              </li>
              <li>
                <strong>Repository-wide orchestration:</strong> Handling massive multi-file dependencies concurrently for seamless project transitions.
              </li>
              <li>
                <strong>LLM fallbacks:</strong> Smart AI interventions that automatically trigger when deterministic AST rules fail.
              </li>
              <li>
                <strong>Validation pipeline:</strong> Automated testing injected directly into the workflow to verify modernized code correctness instantly.
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">Technical Challenges</h2>
          </div>
          <div className="project-section-body text-secondary">
            <div className="challenge-item">
              <h3 className="challenge-title">Why Tree-sitter?</h3>
              <p>Provides extremely robust, fast, and language-agnostic parsing to generate syntax trees critical for safe transformations across large codebases.</p>
            </div>
            <div className="challenge-item">
              <h3 className="challenge-title">Why FastAPI?</h3>
              <p>Chosen for its high performance and async capabilities, perfectly handling the I/O intensive nature of continuous LLM and parsing operations.</p>
            </div>
            <div className="challenge-item">
              <h3 className="challenge-title">Why SQLite?</h3>
              <p>Ensures lightweight, embedded tracking of migration states without the massive configuration overhead of a full database service.</p>
            </div>
            <div className="challenge-item">
              <h3 className="challenge-title">Edge Cases</h3>
              <p>Handling malformed legacy syntax was a major hurdle. We implemented fallback pipelines where failed AST rewrites gracefully trigger an LLM-assisted correction, validated immediately by the core test suites.</p>
            </div>
          </div>
        </section>

        {/* Screenshots / Demo */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">Screenshots & Demo</h2>
          </div>
          <div className="project-section-body">
            <div className="screenshot-placeholder">
              <span className="text-secondary">[ Interface Screenshot / Video Demo Placeholder ]</span>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="project-section">
          <div className="project-section-header">
            <h2 className="project-section-title">What I Learned</h2>
          </div>
          <div className="project-section-body text-secondary">
            <p>
              This project profoundly deepened my understanding of compiler theory, syntax trees, and how to orchestrate AI reliably within deterministic development workflows. Managing repository-wide state and rollback mechanisms taught me invaluable lessons in building fault-tolerant software architecture.
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="project-section border-none">
          <div className="project-section-header">
            <h2 className="project-section-title">Links</h2>
          </div>
          <div className="project-section-body">
            <div className="project-links-row">
              <a href="#github" className="project-external-link">
                GitHub Repository <span className="arrow">↗</span>
              </a>
              <a href="#live" className="project-external-link">
                Live Demo <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
};

export default ProjectDetail;
