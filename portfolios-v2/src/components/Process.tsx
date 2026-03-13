import { motion } from 'framer-motion';
import { Search, PenTool, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery & Analysis',
    desc: 'Deep dive into existing workflows. Identify bottlenecks and data silos.',
    icon: <Search size={24} color="var(--accent)" />
  },
  {
    id: '02',
    title: 'Architecture Design',
    desc: 'Design custom automation logic, mapping API endpoints and data schemas.',
    icon: <PenTool size={24} color="var(--accent)" />
  },
  {
    id: '03',
    title: 'Build & Orchestrate',
    desc: 'Write scripts, configure webhooks, and orchestrate serverless functions.',
    icon: <Cpu size={24} color="var(--accent)" />
  },
  {
    id: '04',
    title: 'Deploy & Handoff',
    desc: 'Rigorous edge-case testing, deployment to production, and team documentation.',
    icon: <CheckCircle size={24} color="var(--accent)" />
  }
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-label">02. My Process</div>
          <h2 className="section-title">How I Work</h2>
        </div>

        <div className="tech-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="col-span-3"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                padding: '2rem',
                position: 'relative',
                borderRadius: '0.5rem'
              }}
            >
              {/* Connector line between steps (hide on last and mobile) */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '4rem',
                  right: '-1.5rem',
                  width: '1.5rem',
                  height: '1px',
                  background: 'var(--border)',
                  zIndex: -1
                }} className="hidden-mobile" />
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'var(--bg-primary)', 
                  border: '1px dashed var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.25rem'
                }}>
                  {step.icon}
                </div>
                <div className="mono" style={{ fontSize: '2rem', color: 'var(--border-focus)', fontWeight: 'bold' }}>
                  {step.id}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{step.title}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @media (max-width: 1024px) {
            .hidden-mobile { display: none !important; }
            .col-span-3 { grid-column: span 12 !important; }
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .col-span-3 { grid-column: span 6 !important; }
          }
          @media (min-width: 1025px) {
            .col-span-3 { grid-column: span 3; }
          }
        `}
      </style>
    </section>
  );
}
