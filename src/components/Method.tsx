import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Map the actual workflow\u2014not the documented one\u2014to find where time and data get lost.' },
  { num: '02', title: 'Architecture', desc: 'Endpoints, schemas, failure modes, and checkpoints decided on paper before any code.' },
  { num: '03', title: 'Build', desc: 'Scripts, APIs, scheduled jobs, and routing brought into a pipeline that survives bad input.' },
  { num: '04', title: 'Handoff', desc: 'Testing, deploy, and documentation written for the person who inherits it\u2014not the person who built it.' },
];

export default function Method() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.set('.method-step', { opacity: 0, y: 20 });
    gsap.to('.method-step', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
    });
  }, { scope: ref });

  return (
    <section id="method" className="section section-border" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="label">Method</div>
          <h2>How the pipeline <span className="dim">thinks.</span></h2>
        </div>

        <div className="method-grid">
          {STEPS.map(s => (
            <div key={s.num} className="method-step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
