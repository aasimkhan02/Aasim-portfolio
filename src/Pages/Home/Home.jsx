import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import SocialSidebar from '../../Components/SocialSidebar/SocialSidebar';
import Projects from '../../Components/Projects/Projects';
import FAQ from '../../Components/FAQ/FAQ';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FAQ />
      <Contact />
      <SocialSidebar />
    </>
  );
};

export default Home;
