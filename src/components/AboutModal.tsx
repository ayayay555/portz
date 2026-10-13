import { AnimatePresence, motion } from 'framer-motion';

const qa = [
  {
    q: 'What do you do?',
    a: 'I build systems that handle the repetitive, expensive parts of running a business, so the people in it can spend their time on the parts that need them.',
  },
  {
    q: 'How did you get into automation?',
    a: 'Watching people spend their mornings downloading reports, cross-checking them in Excel and uploading new ones. That work belongs to code.',
  },
  {
    q: 'What makes a good project?',
    a: 'A clear bottleneck, someone who can make decisions, and room to build something durable rather than something flashy.',
  },
];

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
            className="card modal-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>Close</button>
            <span className="kicker">About</span>
            <h2>Karl Gonzales</h2>

            {qa.map(item => (
              <div key={item.q} className="qa">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}

            <p className="muted" style={{ marginTop: 24 }}>
              Off screen: coffee, photography, travel, gaming.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
