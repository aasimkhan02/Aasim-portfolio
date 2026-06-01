import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section-padding bg-surface-container-low" id="about">
      <div className="container about-grid items-start">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <img 
              alt="Mohd Aasim Portrait" 
              className="about-image" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk5uGZn6ih_VVHINsJrhCm1-CoYkTHGWXZYaf-WCq8TcB7dMuxqwz0eMDYcurbxXmlxyBapFpr_sr8ZvnuG_d_3nxxr7P3MyFJU3SVoTYC4A4PFXNXubqHUrldEAJcJ-jevYW_dMAKZjSwEvocO0vHAQkMqE8pT0mPeogcmgWoA8GucOAZoBIG7-jcaN_Qq3ZwoP2OAr6hBLYF-NwVpgxMr6BebOaXx-W90BU3Nt-N6JBGUN828isMV1uimQ-lb-xwuIHRusgdNhY"
            />
          </div>
          <div className="about-blob"></div>
        </div>
        
        <div className="about-content">
          <p className="section-label mb-6">About Me</p>
          <h2 className="about-headline">
            Crafting digital experiences through engineering and minimalist design.
          </h2>
          
          <div className="about-text-grid">
            <div>
              <p className="text-secondary body-md">
                I am a multi-disciplinary developer focused on building functional, high-performance interfaces that bridge the gap between design and code. My approach is rooted in simplicity, accessibility, and precision.
              </p>
            </div>
            <div>
              <p className="text-secondary body-md">
                With over 5 years of experience in the industry, I help brands and startups translate their vision into meaningful digital products that leave a lasting impression.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap mt-16 gap-12">
            <div>
              <p className="meta-label mb-2">Location</p>
              <p className="meta-value">New Delhi, India</p>
            </div>
            <div>
              <p className="meta-label mb-2">Focus</p>
              <p className="meta-value">Product Engineering</p>
            </div>
            <div>
              <p className="meta-label mb-2">Experience</p>
              <p className="meta-value">5+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
