import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './ProjectDetail.css';
import Navbar from './../Navbar/Navbar'

const AutoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 87}%)` }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ left: `${idx * 87 + 7.5}%` }}
          >
            <img src={img} alt={`Gallery slide ${idx}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const renderIcon = (type) => {
  switch (type) {
    case 'cpu':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>;
    case 'network':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><circle cx="5" cy="19" r="3"></circle><circle cx="19" cy="19" r="3"></circle><line x1="10" y1="7.5" x2="6" y2="16.5"></line><line x1="14" y1="7.5" x2="18" y2="16.5"></line></svg>;
    case 'shield':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
    default:
      return null;
  }
};

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
    { key: 'about', title: 'About the Project', data: project.about, splitLayout: true },
    { key: 'tagline', data: project.tagline, splitLayout: true, hideInMap: true },
    { key: 'techStack', title: 'Tech Stack', data: project.techStack },
    { key: 'contributions', title: 'My Contributions', data: project.contributions },
    { key: 'imageGallery', data: project.imageGallery },
    { key: 'features', title: 'Features', data: project.features },
    { key: 'architecture', title: 'Architecture', data: project.architecture },
    { key: 'workflow', title: 'Workflow', data: project.workflow },
    { key: 'technicalHighlights', title: 'Technical Highlights', data: project.technicalHighlights },
    { key: 'challenges', title: 'Challenges', data: project.challenges },
    { key: 'developmentProcess', title: 'Development Process', data: project.developmentProcess },
    { key: 'performance', title: 'Performance / Benchmarks', data: project.performance },
    { key: 'implementationDetails', title: 'Implementation Details', data: project.implementationDetails },
    { key: 'lessonsLearned', title: 'Lessons Learned', data: project.lessonsLearned },
    { key: 'futureImprovements', title: 'Future Improvements', data: project.futureImprovements },
    { key: 'links', title: 'GitHub & Live Demo', data: { github: project.githubLink, live: project.liveLink } },
    { key: 'relatedProjects', title: 'Related Projects', data: project.relatedProjects }
  ].filter(section => {
    if (section.hideInMap) return false;
    if (section.key === 'links') return section.data.github || section.data.live;
    if (Array.isArray(section.data)) return section.data.length > 0;
    return !!section.data;
  });

  const renderContent = (section) => {
    if (section.key === 'techStack') {
      const techs = typeof section.data === 'string' ? section.data.split(',').map(t => t.trim()) : section.data;
      return (
        <div className="tech-stack-container">
          {techs.map((tech, idx) => (
            <span key={idx} className="tech-square">{tech}</span>
          ))}
        </div>
      );
    }

    if (section.key === 'imageGallery') {
      return <AutoSlider images={section.data} />;
    }

    if (section.key === 'contributions') {
      return (
        <div className="contributions-grid">
          {section.data.map((item, idx) => (
            <div key={idx} className="contribution-card">
              <div className="contribution-icon">
                <div className="icon-box">
                  {renderIcon(item.icon)}
                </div>
              </div>
              <div className="contribution-meta">
                <span className="contribution-step">{item.step}</span> / <span className="contribution-category">{item.category}</span>
              </div>
              <h3 className="contribution-title">{item.title}</h3>
              <p className="contribution-desc">{item.desc}</p>
            </div>
          ))}
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
          {project.tagline}
        </div>
      </section>

      <section className="detail-content-section">
        {sections.map((section) => {
          return (
            <div className={`detail-row ${section.splitLayout ? 'split-layout' : ''}`} key={section.key}>
              {section.title && <h2 className="detail-heading">{section.title}</h2>}
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
