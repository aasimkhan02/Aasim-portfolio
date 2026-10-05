import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';
import SocialSidebar from '../../Components/SocialSidebar/SocialSidebar';
import { projectsData } from '../../data/projectsData';
import './Works.css';

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.type === activeCategory);

  const projectRows = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    projectRows.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <>
      <Navbar />

      <main className="works-page bg-white">
        <section className="works-hero section-padding pb-0">
          <div className="container works-hero-container">
            <h1 className="works-hero-title" data-aos="fade-up">
              SELECTED<br />WORKS
            </h1>
            <div className="works-hero-desc">
              <p>
                A selection of systems, products, and experiences I’ve built across engineering and design, combining technical thinking with thoughtful interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="works-categories">
          <div className="container">
            <div className="categories-wrapper">
              <button className={`category-btn ${activeCategory === 'ALL' ? 'active' : ''}`} onClick={() => setActiveCategory('ALL')}>ALL</button>
              <button className={`category-btn ${activeCategory === 'BACKEND' ? 'active' : ''}`} onClick={() => setActiveCategory('BACKEND')}>BACKEND</button>
              <button className={`category-btn ${activeCategory === 'SOFTWARE' ? 'active' : ''}`} onClick={() => setActiveCategory('SOFTWARE')}>SOFTWARE</button>
              <button className={`category-btn ${activeCategory === 'INFRASTRUCTURE' ? 'active' : ''}`} onClick={() => setActiveCategory('INFRASTRUCTURE')}>INFRASTRUCTURE</button>
            </div>
          </div>
        </section>

        <section className="works-reference-grid">
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="works-row">
              {row.map((project) => (
                <Link to={`/project/${project.id}`} key={project.id} className="works-ref-card" data-aos="fade-up">
                  <div className="ref-image-wrapper">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className={`ref-image ${project.containImage ? 'ref-image-contain' : ''}`} 
                      style={project.containImage && project.backgroundColor ? { backgroundColor: project.backgroundColor } : {}}
                      loading="lazy" 
                      decoding="async" 
                    />
                  </div>
                  <h3 className="ref-title">{project.title}</h3>
                </Link>
              ))}
            </div>
          ))}
        </section>

        <Contact />
      </main>
      <SocialSidebar />
    </>
  );
};

export default Works;
