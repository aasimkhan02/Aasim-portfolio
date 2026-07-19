import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './ProjectDetail.css';
import Navbar from './../Navbar/Navbar'

const AutoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: 'translateX(0)' }}>
          <div className="carousel-slide active" style={{ left: '7.5%' }}>
            <img src={images[0]} alt="Gallery slide 0" loading="lazy" />
          </div>
        </div>
      </div>
    );
  }

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedImages.length]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track" 
        style={{ 
          transform: `translateX(-${currentSlide * 87}%)`,
          transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
        }}
      >
        {extendedImages.map((img, idx) => (
          <div
            key={idx}
            className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ left: `${idx * 87 + 7.5}%` }}
          >
            <img src={img} alt={`Gallery slide ${idx}`} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx + 1 === (currentSlide === extendedImages.length - 1 ? 1 : currentSlide) ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentSlide(idx + 1);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
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
    { key: 'features', title: 'Key Features', data: project.features },
    { key: 'architecture', title: 'Architecture', data: project.architecture },
    { key: 'challenges', title: 'Challenges', data: project.challenges },
    { key: 'imageGallery', data: project.imageGallery },
    { key: 'links', title: 'Links', data: { github: project.githubLink, live: project.liveLink } }
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

    if (section.key === 'features') {
      return (
        <div className="modern-features">
          {section.data.map((item, idx) => (
            <div key={idx} className="modern-feature-card">
              <span className="modern-feature-index">{(idx + 1).toString().padStart(2, '0')}</span>
              <h3 className="modern-feature-title">{item.title}</h3>
              <p className="modern-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      );
    }

    if (section.key === 'architecture') {
      return (
        <div className="modern-architecture">
          <div className="architecture-diagram-placeholder">
            [ ARCHITECTURE DIAGRAM ]
          </div>
          <p className="architecture-text">{section.data}</p>
        </div>
      );
    }

    if (section.key === 'challenges') {
      if (Array.isArray(section.data)) {
        return (
          <div className="modern-challenges">
            {section.data.map((item, idx) => (
              <div key={idx} className="modern-challenge-row">
                <div className="challenge-col challenge-problem">
                  <span className="challenge-label">Problem.</span>
                  <p>{item.problem}</p>
                </div>
                <div className="challenge-col challenge-solution">
                  <span className="challenge-label">Solution.</span>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }
      return <p className="detail-text">{section.data}</p>;
    }

    if (section.key === 'links') {
      return (
        <div className="modern-links">
          {section.data.github && <a href={section.data.github} target="_blank" rel="noreferrer" className="modern-button">GitHub ↗</a>}
          {section.data.live && <a href={section.data.live} target="_blank" rel="noreferrer" className="modern-button">Live Demo ↗</a>}
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
            <div className={`detail-row ${section.splitLayout ? 'split-layout' : ''}`} key={section.key} data-aos="fade-up">
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
