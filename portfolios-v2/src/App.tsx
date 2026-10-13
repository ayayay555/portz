import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Archive from './components/Archive';
import Method from './components/Method';
import StackBand from './components/StackBand';
import Close from './components/Close';
import AboutModal from './components/AboutModal';

const NAV = [
  { href: '#proof', label: 'Work' },
  { href: '#method', label: 'Method' },
  { href: '#archive', label: 'Archive' },
];

const YEAR = String(new Date().getFullYear());

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="masthead-inner">
            <a href="#hero" className="masthead-logo" onClick={closeNav}>
              Karl Gonzales<span className="dot">.</span>
            </a>

            <button
              className={`hamburger${isNavOpen ? ' is-open' : ''}`}
              onClick={() => setIsNavOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {isNavOpen ? <X size={16} /> : <Menu size={16} />}
            </button>

            <nav className={`masthead-nav${isNavOpen ? ' open' : ''}`}>
              {NAV.map(n => (
                <a key={n.href} href={n.href} onClick={closeNav}>{n.label}</a>
              ))}
              <a href="#contact" className="nav-cta" onClick={closeNav}>
                Book a call
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Proof />
        <Archive />
        <Method />
        <StackBand />
        <Close onAbout={() => setIsAboutOpen(true)} />

        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-logo">
                Karl Gonzales<span className="dot">.</span>
              </div>
              <div className="footer-copy">
                &copy; {YEAR} Karl Gonzales &middot; Automation Engineer &middot; Manila
              </div>
            </div>
          </div>
        </footer>
      </main>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}

export default App;
