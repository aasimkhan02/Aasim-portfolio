import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    
    // Only apply the effect on desktop (min-width: 768px)
    if (circle && window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        const rect = circle.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        circle.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
      };

      const handleMouseLeave = () => {
        circle.style.transform = `translate(0, 0) scale(1)`;
      };

      circle.addEventListener('mousemove', handleMouseMove);
      circle.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        circle.removeEventListener('mousemove', handleMouseMove);
        circle.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <main className="hero">
      {/* Top/Middle Grid Section */}
      <section className="container hero-grid">
        {/* About Me Circle Button */}
        <div className="about-circle-wrapper">
          <a 
            href="#about" 
            className="about-circle"
            ref={circleRef}
          >
            About me
          </a>
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
