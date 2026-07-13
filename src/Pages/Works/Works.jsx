import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';
import SocialSidebar from '../../Components/SocialSidebar/SocialSidebar';
import './Works.css';
import HealthWaveImg from '../../assets/healthwave.png';
import Phytoclass from '../../assets/ocean.jpg';
import ConstructionImg from '../../assets/construction.jpg';

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  const projects = [
    {
      id: 1,
      title: 'PHYTOCLASS',
      categories: ['R', 'Shiny', 'GitHub Actions', 'testthat'],
      description: 'Phytoclass is an open-source phytoplankton classification platform that provides an interactive interface for analyzing and validating flow cytometry data. During Google Summer of Code, I improved the analysis workflow by implementing session isolation, report exports, validation checks, and automated testing to enhance reliability and multi-user support.',
      image: Phytoclass,
      link: '#',
    },
    {
      id: 2,
      title: 'EVUA',
      categories: ['Python', 'FastAPI', 'React', 'SQLite'],
      description: 'EVUA is a legacy code modernization platform that automates the migration of outdated codebases using AST-based transformations and LLM-assisted fallbacks. It streamlines repository-wide upgrades through automated refactoring, validation, and testing workflows, making large-scale code migrations more reliable and maintainable.',
      image: ConstructionImg,
      link: '#',
    },
    {
      id: 3,
      title: 'HEALTHWAVE',
      categories: ['React', 'Node.js', 'MongoDB'],
      description: 'A modern healthcare management application designed to streamline patient records and appointment scheduling. Features include real-time updates, secure authentication, and a responsive dashboard for medical professionals.',
      image: HealthWaveImg,
      link: '#',
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="works-page bg-white">
        <section className="works-hero section-padding pb-0">
          <div className="container works-hero-container">
            <h1 className="works-hero-title">
              SELECTED<br/>WORKS
            </h1>
            <div className="works-hero-desc">
              <p>
                An archive of technical precision and aesthetic rigor. We build systems that bridge the gap between architectural form and digital infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="works-categories">
          <div className="container">
            <div className="categories-wrapper">
              <button className="category-btn active">ALL</button>
              <button className="category-btn">BACKEND</button>
              <button className="category-btn">SOFTWARE</button>
              <button className="category-btn">INFRASTRUCTURE</button>
            </div>
          </div>
        </section>

        <section className="works-list-section section-padding pt-0">
          <div className="container">
            <div className="works-list">
              {projects.map((project) => (
                <article key={project.id} className="works-list-item">
                  <div className="works-item-sidebar">
                    <div className="works-item-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1"/>
                        <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="1"/>
                      </svg>
                    </div>
                    <h2 className="works-item-title">{project.title}</h2>
                    <ul className="works-item-tags">
                      {project.categories.map((cat, idx) => (
                        <li key={idx}>{cat}</li>
                      ))}
                    </ul>
                    <a href={project.link} className="works-item-link">
                      VIEW PROJECT
                    </a>
                  </div>
                  
                  <div className="works-item-content">
                    <p className="works-item-desc text-secondary">{project.description}</p>
                    <div className="works-item-image-wrapper">
                      <img src={project.image} alt={project.title} className="works-item-image" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SocialSidebar />
    </>
  );
};

export default Works;
