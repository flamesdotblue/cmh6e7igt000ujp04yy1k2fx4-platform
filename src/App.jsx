import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsEducationBlogs from './components/SkillsEducationBlogs';

export default function App() {
  return (
    <div className="bg-[#121212] text-white scroll-smooth">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <SkillsEducationBlogs />
        </section>
      </main>
    </div>
  );
}
