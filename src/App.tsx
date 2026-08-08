import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { GithubSection } from './components/GithubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white film-grain selection:bg-crimson selection:text-white">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Section 01: Hero */}
        <Hero />

        {/* Marquee Ticker */}
        <Marquee />

        {/* Section 02: About (Stark White Block Contrast) */}
        <About />

        {/* Section 03: Skills (Inky Black Block) */}
        <Skills />

        {/* Section 04: Projects (Inky Black Block Grid) */}
        <Projects />

        {/* Section 05: Experience & Education (Stark White Block Contrast) */}
        <Experience />
        <Education />

        {/* Section 06: Achievements & GitHub (Inky Black Block) */}
        <Achievements />
        <GithubSection />

        {/* Section 07: Contact (Stark White Block Contrast with Crimson Accents) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
