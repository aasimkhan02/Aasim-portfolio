import React from 'react';
import Magnetic from '../Common/Magnetic';
import './Hero.css';

const Hero = () => {
  return (
    <main className="hero">
      {/* Top/Middle Grid Section */}
      <section className="container hero-grid">
        {/* Scroll To Explore Circle Indicator */}
        <div className="about-circle-wrapper">
          <Magnetic strength={0.25} scale={1.02}>
            <div className="about-circle">
              <div className="about-circle-content">
                <span>SCROLL TO</span>
                <span>EXPLORE</span>
                <svg 
                  className="scroll-arrow" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.25" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 1v22M17 18l-5 5-5-5" />
                </svg>
              </div>
            </div>
          </Magnetic>
        </div>

        {/* Professional Title */}
        <div className="hero-text">
          <h1 className="hero-title">
            Developer,<br className="hidden md:block" />
            Designer &amp; Engineer
          </h1>
          <p className="hero-subtitle">
            Based in Mumbai, India
          </p>
        </div>
      </section>

      {/* Massive Marquee Section */}
      <section className="marquee-container">
        <div className="marquee-wrapper">
          <div className="animate-marquee">
            {/* Text Sets for seamless loop */}
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="marquee-text">
                Mohd Aasim <span className="text-brand">—</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
