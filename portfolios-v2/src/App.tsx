import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, User } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import Skills from './components/Skills';
import AboutGallery from './components/AboutGallery';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
<header className="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <a href="#hero" className="logo mono" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
            <Terminal size={20} color="var(--accent)" />
            <span>Karl.Gonzales</span>
          </a>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#projects" className="mono" style={{ fontSize: '0.875rem' }}>// Projects</a>
            <a href="#skills" className="mono" style={{ fontSize: '0.875rem' }}>// Skills</a>
            <a href="mailto:karljhunzgonzales@gmail.com" className="btn">Contact Me</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Process />
        <Skills />
        
        <section id="contact" style={{ textAlign: 'center', borderTop: '1px dashed var(--border)', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 0' }}
            >
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to scale your operations?</h2>
              <p style={{ marginBottom: '3rem' }}>Let's engineer a solution to your operational bottlenecks. I'm available for a 15-minute consultation.</p>
              <a href="mailto:karljhunzgonzales@gmail.com" className="btn" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                <Mail size={18} />
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            &copy; {new Date().getFullYear()} Karl Gonzales. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button 
              onClick={() => setIsAboutOpen(true)}
              className="mono"
              style={{ 
                background: 'transparent', 
                border: '1px dashed var(--border)', 
                color: 'var(--text-secondary)', 
                padding: '0.5rem 1rem', 
                fontSize: '0.75rem', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '0.25rem',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <User size={14} />
              Know more about Karl
            </button>
            <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>
            <a href="https://github.com/ayayay555" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/kjgonzales08" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>

      <AboutGallery isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}

export default App;
