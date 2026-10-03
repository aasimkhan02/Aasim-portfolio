import React from 'react';
import './Experience.css';
import GsocImg from '../../assets/gsoc.png';

const experiences = [
  {
    id: 'phytoclass',
    type: 'OPEN SOURCE',
    title: 'Google Summer of Code 2025',
    role: 'Open Source Contributor',
    project: 'Phytoclass',
    duration: 'May 2025 - Aug 2025',
    description: 'PhytoClass is an open-source platform for phytoplankton classification and flow cytometry analysis. As part of Google Summer of Code, I contributed by improving the analysis workflow, implementing session-based file isolation, adding report export capabilities, strengthening validation checks, and integrating automated testing to enhance reliability and multi-user support.',
    technologies: ['R', 'Shiny', 'GitHub Actions', 'testthat'],
    githubLink: 'https://github.com/phytoclass',
    blogLink: 'https://gsoc25-ioos-phytoclass.hashnode.dev/gsoc-2025-ioos-phytoclass', // replace with actual blog link
    logo: GsocImg
  }
];

const Experience = () => {
  return (
    <section className="section-padding bg-white" id="experience" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <div className="experience-section-header" data-aos="fade-up">
          <div className="experience-title-area">
            <h2 className="experience-section-title uppercase">Experience</h2>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item" data-aos="fade-up">
              <div className="experience-logo-col">
                <div className="experience-logo-wrapper">
                  <img src={exp.logo} alt={exp.title} className="experience-logo" />
                </div>
              </div>
              <div className="experience-content-col">
                <span className="experience-type uppercase">{exp.type}</span>
                
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                
                <div className="experience-role-project">
                  <span className="experience-role text-brand-orange uppercase font-bold">{exp.role}</span>
                  <span className="experience-divider">|</span>
                  <span className="experience-project uppercase font-bold">{exp.project}</span>
                </div>
                
                <p className="experience-description text-secondary mt-4">
                  {exp.description}
                </p>

                <div className="experience-tech-list uppercase font-bold">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="experience-footer">
                  <div className="experience-links">
                    {exp.blogLink && (
                      <a href={exp.blogLink} target="_blank" rel="noopener noreferrer" className="experience-link">
                        View Blog <span className="arrow">→</span>
                      </a>
                    )}
                    {exp.githubLink && (
                      <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="experience-link">
                        GitHub <span className="arrow">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
