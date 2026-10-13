import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Close({ onAbout }: { onAbout: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.close-content', {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
    });
  }, { scope: ref });

  return (
    <section id="contact" className="close-section section-border" ref={ref}>
      <div className="close-content">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <div className="label" style={{ textAlign: 'center' }}>Get in touch</div>
        </div>
        <h2>
          Let's find the work <span className="dim">worth automating.</span>
        </h2>
        <p className="close-sub">
          Fifteen minutes. Bring your worst bottleneck&mdash;I'll bring the
          diagnosis and a sketch of what an engineered answer looks like.
        </p>

        <a
          href="mailto:karljhunzgonzales@gmail.com?subject=Let's%20talk%20automation&body=Hi%20Karl%2C%0A%0A"
          className="btn"
        >
          Book a 15-min Diagnosis
        </a>

        <div className="close-links">
          <a href="https://github.com/ayayay555" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="sep">&middot;</span>
          <a href="https://www.linkedin.com/in/kjgonzales08" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="sep">&middot;</span>
          <button
            onClick={onAbout}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--ink-3)',
              font: 'inherit',
              fontSize: 13,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            About me
          </button>
        </div>
      </div>
    </section>
  );
}
