import React from 'react';
import './About.css';
import ProfilePicture from "./../../assets/profile.png"

const About = () => {
  return (
    <section className="section-padding bg-surface-container-low" id="about">
      <div className="container about-grid items-start">
        <div className="about-image-container">
          <div className="about-image-wrapper" data-aos="fade-right">
            <img 
              alt="Mohd Aasim Portrait" 
              className="about-image" 
              src={ProfilePicture}
              loading="lazy"
            />
          </div>
          <div className="about-blob"></div>
        </div>
        
        <div className="about-content" data-aos="fade-left">
          <p className="section-label mb-6">About Me</p>
          <h2 className="about-headline">
            Building software through curiosity, consistency, and continuous learning.
          </h2>
          
          <div className="about-text-grid">
            <div>
              <p className="text-secondary body-md">
                I'm a software developer who enjoys learning by building. I like understanding how things work beneath the surface, experimenting with new technologies, and turning ideas into projects that help me grow as an engineer. Every project is an opportunity to learn something I didn't know before.
              </p>
            </div>
            <div>
              <p className="text-secondary body-md">
               This portfolio reflects that journey. It brings together the projects I've built, the technologies I've explored, and the progress I've made as I work toward becoming a better software engineer.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap mt-16 gap-12">
            <div>
              <p className="meta-label mb-2">Location</p>
              <p className="meta-value">Mumbai, India</p>
            </div>
            <div>
              <p className="meta-label mb-2">Focus</p>
              <p className="meta-value">Backend Engineering</p>
            </div>
            <div>
              <p className="meta-label mb-2">Career stage</p>
              <p className="meta-value">Entry level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
