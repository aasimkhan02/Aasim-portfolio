import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Magnetic from '../Common/Magnetic';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.25}>
            <div className="nav-brand">
              <div className="brand-dot"></div>
              <Link to="/">Aasim</Link>
            </div>
          </Magnetic>

          {/* Desktop Links */}
          <ul className="desktop-nav-links">
            <li>
              <Magnetic strength={0.35}>
                <a href="#about">About</a>
              </Magnetic>
            </li>
            <li>
              <Magnetic strength={0.35}>
                <a href="#skills">Skills</a>
              </Magnetic>
            </li>
            <li>
              <Magnetic strength={0.35}>
                <a href="#projects">Projects</a>
              </Magnetic>
            </li>
          </ul>

          {/* Mobile & Actions Section */}
          <div className="flex items-center gap-6">
            {/* Resume Link */}
            <Magnetic strength={0.3}>
              <a href="/Aasim_Khan_Resume.pdf" download="Aasim_Khan_Resume.pdf" className="resume-btn group">
                <span>Resume</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </Magnetic>

            {/* Mobile Toggle */}
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="menu-close" 
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <ul className="mobile-nav-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="/Aasim_Khan_Resume.pdf" download="Aasim_Khan_Resume.pdf" onClick={toggleMenu}>Resume ↗</a></li>
        </ul>

        <div className="mobile-socials">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;