import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const qa = [
  {
    q: 'How would you describe what you do?',
    a: 'I write systems that quietly do the boring, expensive parts of running an e-commerce business\u2014so the people who run it can do the parts that need them.',
  },
  {
    q: 'What got you into automation?',
    a: 'Watching good people spend mornings downloading reports, cross-referencing in Excel, then uploading different reports. It seemed like a problem code could be polite about.',
  },
  {
    q: 'What makes a good engagement?',
    a: 'A clear bottleneck, a stakeholder who can make decisions, and permission to write boring, durable code instead of flashy, fragile code.',
  },
];

const hobbies = ['Coffee', 'Photography', 'Travel', 'Gaming'];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={12} /> Close
            </button>

            <div className="section-header" style={{ marginBottom: 28 }}>
              <div className="label">About</div>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: 24 }}>
              Beyond the <span className="dim">terminal.</span>
            </h2>

            {qa.map((item, i) => (
              <div key={i} style={{ padding: '16px 0', borderBottom: i < qa.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)', marginBottom: 6 }}>
                  {item.q}
                </p>
                <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {item.a}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 8 }}>
                Offscreen
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                {hobbies.join(' / ')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
