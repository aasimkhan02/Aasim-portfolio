import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './ProjectDetail.css';
import Navbar from './../Navbar/Navbar'

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [id]);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  const sections = [
    { key: 'about', title: 'About the Project', data: project.about },
    { key: 'overview', title: 'Project overview', data: project.overview },
    { key: 'imageGallery', title: 'Image Gallery', data: project.imageGallery },
    { key: 'features', title: 'Features', data: project.features },
    { key: 'architecture', title: 'Architecture', data: project.architecture },
    { key: 'workflow', title: 'Workflow', data: project.workflow },
    { key: 'technicalHighlights', title: 'Technical Highlights', data: project.technicalHighlights },
    { key: 'challenges', title: 'Challenges', data: project.challenges },
    { key: 'techStack', title: 'Tech Stack', data: project.techStack },
    { key: 'developmentProcess', title: 'Development Process', data: project.developmentProcess },
    { key: 'performance', title: 'Performance / Benchmarks', data: project.performance },
    { key: 'implementationDetails', title: 'Implementation Details', data: project.implementationDetails },
    { key: 'lessonsLearned', title: 'Lessons Learned', data: project.lessonsLearned },
    { key: 'futureImprovements', title: 'Future Improvements', data: project.futureImprovements },
    { key: 'links', title: 'GitHub & Live Demo', data: { github: project.githubLink, live: project.liveLink } },
    { key: 'relatedProjects', title: 'Related Projects', data: project.relatedProjects }
  ].filter(section => {
    if (section.key === 'links') return section.data.github || section.data.live;
    if (Array.isArray(section.data)) return section.data.length > 0;
    return !!section.data;
  });

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (project.imageGallery) {
      setCurrentSlide((prev) => (prev + 1) % project.imageGallery.length);
    }
  };

  const prevSlide = () => {
    if (project.imageGallery) {
      setCurrentSlide((prev) => (prev === 0 ? project.imageGallery.length - 1 : prev - 1));
    }
  };

  const renderContent = (section) => {
    if (section.key === 'imageGallery') {
      return (
        <div className="gallery-slider">
          <img src={section.data[currentSlide]} alt={`Gallery slide ${currentSlide}`} className="gallery-image" />
          {section.data.length > 1 && (
            <div className="gallery-controls">
              <button onClick={prevSlide} className="gallery-btn">← PREV</button>
              <span className="gallery-counter">{currentSlide + 1} / {section.data.length}</span>
              <button onClick={nextSlide} className="gallery-btn">NEXT →</button>
            </div>
          )}
        </div>
      );
    }

    if (section.key === 'links') {
      return (
        <div className="detail-links">
          {section.data.github && <a href={section.data.github} target="_blank" rel="noreferrer" className="detail-link">GitHub Repository ↗</a>}
          {section.data.live && <a href={section.data.live} target="_blank" rel="noreferrer" className="detail-link">Live Demo ↗</a>}
        </div>
      );
    }

    if (Array.isArray(section.data)) {
      return (
        <ul className="detail-list">
          {section.data.map((item, idx) => (
            <li key={idx}>
              {typeof item === 'string' ? item : (
                <>
                  <strong>{item.title}:</strong> {item.desc}
                </>
              )}
            </li>
          ))}
        </ul>
      );
    }

    return <p className="detail-text">{section.data}</p>;
  };

  return (
    <article className="project-detail-page" id="project-detail">
      {/* Hero Section */}
      <section className="detail-hero">
        <Link to="/works" className="detail-back-btn">Back to projects</Link>
        <h1 className="detail-hero-title">{project.title}</h1>
      </section>

      {/* Parallax Image Break */}
      <div
        className="detail-parallax-break"
        style={{ backgroundImage: `url(${project.coverImage})` }}
      />

      <section className="detail-project-overview">
        <div className="detail-project-overview-content">
          {project.overview}
        </div>
      </section>

      {/* Numbered Content Grid */}
      <section className="detail-content-section">
        {sections.map((section) => {
          return (
            <div className="detail-row" key={section.key}>
              <h2 className="detail-heading">{section.title}</h2>
              <div className="detail-content-wrapper">
                {renderContent(section)}
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default ProjectDetail;
