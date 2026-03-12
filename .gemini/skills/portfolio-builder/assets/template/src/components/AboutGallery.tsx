import { motion, AnimatePresence } from 'framer-motion';
import { X, Coffee, Camera, Plane, Gamepad2, User } from 'lucide-react';

const hobbies = [
  { id: 1, icon: <Coffee size={40} />, title: "Coffee Enthusiast", desc: "Dialing in the perfect extraction and exploring single-origin beans." },
  { id: 2, icon: <Camera size={40} />, title: "Photography", desc: "Capturing moments and framing the world outside the terminal." },
  { id: 3, icon: <Plane size={40} />, title: "Traveling", desc: "Switching environments and experiencing new cultures." },
  { id: 4, icon: <Gamepad2 size={40} />, title: "Gaming", desc: "Decompressing with immersive interactive worlds." }
];

interface AboutGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutGallery({ isOpen, onClose }: AboutGalleryProps) {
  return (
    <AnimatePresence>
      {isOpen && (
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
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 100,
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
              background: 'var(--bg-primary)',
              border: '1px solid var(--accent)',
              width: '100%',
              maxWidth: '900px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.1)',
              borderRadius: '0.5rem'
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
                <User size={16} />
                // USER_PROFILE: KARL_OFFLINE
              </div>
              <button 
                onClick={onClose}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '3rem 2rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Beyond the Terminal</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                  When I'm not orchestrating automated workflows or writing Python scripts, you can find me exploring the world in analog mode. Here are some of the modules I run off-screen.
                </p>
              </div>

              <div className="tech-grid">
                {hobbies.map((hobby, idx) => (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="col-span-6"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      padding: '2rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ color: 'var(--accent)', background: 'var(--accent-muted)', padding: '1rem', borderRadius: '50%' }}>
                      {hobby.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem' }}>{hobby.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{hobby.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
