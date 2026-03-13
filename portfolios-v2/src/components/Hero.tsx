import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = '> Automating Complexity into Efficiency_';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background grid element */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)',
        opacity: 0.5,
        filter: 'blur(60px)',
        zIndex: -1,
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mono" 
            style={{ 
              color: 'var(--accent)', 
              marginBottom: '2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--bg-secondary)',
              padding: '0.5rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '4px'
            }}
          >
            <Terminal size={16} />
            <span>Available for new projects</span>
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            lineHeight: 1.1, 
            marginBottom: '2rem',
            letterSpacing: '-0.04em'
          }}>
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ display: 'inline-block', width: '20px', height: '1em', background: 'var(--accent)', verticalAlign: 'text-bottom', marginLeft: '8px' }}
            />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              maxWidth: '600px',
              borderLeft: '2px dashed var(--border)',
              paddingLeft: '1.5rem',
              marginLeft: '0.5rem'
            }}
          >
            High-impact Automation Engineer specializing in RAG-based AI, CRM integrations, and cross-platform synchronization. Building systems that scale, without the friction.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn">
              <Database size={18} />
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ borderStyle: 'dashed' }}>
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
