import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECTS = [
  {
    label: 'Logistics',
    title: 'An Inbox That Reads Itself',
    sub: 'Python + LLM turned unstructured vendor emails into a live visibility layer.',
    result: 'Real-time visibility',
  },
  {
    label: 'Inventory',
    title: 'Zero Stock-Outs, Six Regions',
    sub: 'A scheduled sync keeps multiple sales channels honest with each other.',
    result: '0 stock-outs',
  },
  {
    label: 'Operations',
    title: 'On Measuring a Box',
    sub: 'A scraper and internal data quietly file disputes on vendor mis-measurements.',
    result: 'Capital recovered',
  },
  {
    label: 'Analytics',
    title: 'One Dashboard, All Channels',
    sub: 'Multiple APIs and a data warehouse give leadership a single source of truth.',
    result: 'Days \u2192 seconds',
  },
  {
    label: 'Workflow',
    title: 'A Room With One Door',
    sub: 'Consolidated email, Slack, and partner inquiries into a single workspace.',
    result: 'Unified flow',
  },
  {
    label: 'Pricing',
    title: 'The Price That Knows Itself',
    sub: 'Dynamic engine reads forex, competitors, and margin targets in real time.',
    result: 'Margin protection',
  },
];

export default function Archive() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.archive-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
    });
  }, { scope: ref });

  return (
    <section id="archive" className="section section-border" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="label">More Work</div>
          <h2>The full <span className="dim">archive.</span></h2>
        </div>

        <div className="archive-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="archive-card">
              <div className="card-label">{p.label}</div>
              <h3>{p.title}</h3>
              <p className="card-sub">{p.sub}</p>
              <div className="card-result">{p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
