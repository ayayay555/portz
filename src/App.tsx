import { useState } from 'react';
import Hero from './components/Hero';
import Shift from './components/Shift';
import Systems from './components/Systems';
import Trust from './components/Trust';
import Method from './components/Method';
import StackBand from './components/StackBand';
import Close from './components/Close';
import AboutModal from './components/AboutModal';
import ThemeToggle from './components/ThemeToggle';

const NAV = [
  { href: '#systems', label: 'Systems' },
  { href: '#trust', label: 'How I work' },
  { href: '#method', label: 'Method' },
  { href: '#contact', label: 'Contact' },
];

const YEAR = String(new Date().getFullYear());

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="wrap">
          <a href="#" className="brand">
            <svg viewBox="0 0 32 32" fill="none" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 16h7c3 0 3-7 7-7h6M12 16c3 0 3 7 7 7h6" stroke="var(--text)" />
              <circle cx="26" cy="23" r="3" fill="var(--green)" />
            </svg>
            Karl Gonzales
          </a>
          <nav className="nav">
            {NAV.map(n => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Shift />
        <Systems />
        <Trust />
        <Method />
        <StackBand />
        <Close onAbout={() => setIsAboutOpen(true)} />
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>&copy; {YEAR} Karl Gonzales</span>
          <span>AI Automation Engineer &middot; Manila</span>
        </div>
      </footer>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}

export default App;
