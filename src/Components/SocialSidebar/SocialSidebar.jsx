import React from 'react';
import Magnetic from '../Common/Magnetic';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-sidebar-links">
        <Magnetic strength={0.4}>
          <a href="https://www.linkedin.com/in/aasimkhan78/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Magnetic>
        <Magnetic strength={0.4}>
          <a href="https://github.com/aasimkhan02" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Magnetic>
        <Magnetic strength={0.4}>
          <a href="https://www.instagram.com/aasim.khan08" target="_blank" rel="noopener noreferrer">Instagram</a>
        </Magnetic>
      </div>
    </div>
  );
};

export default SocialSidebar;
