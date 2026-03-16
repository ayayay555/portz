import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Terminal, Play, X } from 'lucide-react';

const openSourceProjects = [
  {
    title: "Lez Do It",
    tagline: "AI-Powered Funnel Mockup Generator",
    description: "I was too lazy to code a landing page, so I taught the Gemini CLI a 'Frontend Architect' skill to do it for me. It doesn’t just 'generate'—it consults. Built just for the vibes.",
    stack: ["Consultation AI", "Brutalist Design", "Cyberpunk UI", "Gemini CLI Skill"],
    video: "/images/fullcutDemo.mp4",
    features: [
      "AI agent interviews you about business goals and niche",
      "Injects answers into a brutalist/cyberpunk design DNA",
      "Outputs a fully coded, production-ready landing page in seconds"
    ],
    github: "https://github.com/ayayay555/Lez-do-it",
    live: "#"
  }
];

export default function OpenSource() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="opensource" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">0.1-A. Community & Labs</div>
          <h2 className="section-title">Open Source Initiatives</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                border: '1px solid var(--border)',
                background: 'var(--bg-secondary)',
                borderRadius: '0.5rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative accent top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--accent)' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent)' }}>
                  <Terminal size={24} />
                  <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{project.title}</h3>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <Github size={20} />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mono" style={{ fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '1rem' }}>
                {'>'} {project.tagline}
              </p>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {project.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '0.1rem' }}>▹</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--border)' }}>
                {project.video && (
                  <button 
                    onClick={() => setActiveVideo(project.video)}
                    className="btn" 
                    style={{ width: '100%', justifyContent: 'center', background: 'var(--bg-tertiary)', border: '1px solid var(--accent)', color: 'var(--accent)' }}
                  >
                    <Play size={16} style={{ fill: 'var(--accent)' }} />
                    <span>Watch Action Demo</span>
                  </button>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="mono" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'var(--bg-tertiary)', borderRadius: '1rem', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                width: '100%',
                maxWidth: '1200px',
                position: 'relative',
                background: 'var(--bg-primary)',
                border: '1px solid var(--accent)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(56, 189, 248, 0.1)'
              }}
            >
              {/* Modal Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1rem 2rem', 
                borderBottom: '1px dashed var(--border)',
                background: 'var(--bg-tertiary)'
              }}>
                <div className="mono" style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={16} />
                  <span>// SYSTEM_DEMO_EXECUTION</span>
                </div>
                <button 
                  onClick={() => setActiveVideo(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Video Player Container */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
