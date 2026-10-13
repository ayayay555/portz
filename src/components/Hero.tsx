import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const STATS = [
  { val: '160 hrs', label: 'Reclaimed / mo' },
  { val: '$30K', label: 'Recovered' },
  { val: '60%', label: 'Support automated' },
  { val: '0', label: 'Missed SLAs' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.hero > .container > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
    });
  }, { scope: ref });

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          Available for new projects
        </div>

        <h1>
          I build systems that <span className="dim">do the boring work.</span>
        </h1>

        <p className="hero-sub">
          Automation engineer. I design and build pipelines, integrations, and
          internal tools that replace manual processes&mdash;so teams can
          focus on work that actually needs them. One build gave a company
          back <strong>160 hours a month</strong>.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn">Book a 15-min Diagnosis</a>
          <a href="#proof" className="btn btn-ghost">See the Work</a>
        </div>

        <div className="hero-stats">
          {STATS.map(s => (
            <div key={s.label} className="hero-stat-item">
              <div className="val">{s.val}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
