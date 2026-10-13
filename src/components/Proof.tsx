import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECTS = [
  {
    num: '01',
    title: 'The Job That Runs Itself',
    tagline: 'An end-to-end pipeline retires a full-time role.',
    body: 'Order processing demanded one person, full-time, every day\u2014pulling orders, validating data, routing to fulfillment, confirming stock, generating labels. 160 hours a month of careful, repetitive, business-critical work.',
    outcome: 'Eliminated a full-time manual role. Orders process around the clock with zero hand-offs.',
    stat: '160',
    unit: 'HRS / MONTH',
    stack: ['Python', 'APIs', 'Webhooks', 'Orchestration'],
    image: null as string | null,
  },
  {
    num: '02',
    title: 'The $30K Audit',
    tagline: 'A reconciliation engine catches what vendors quietly overcharge.',
    body: 'Vendors overcharge by small amounts that accumulate at volume. Manually auditing fees across complex reports is time-consuming and error-prone.',
    outcome: '$30,000 identified in potential reimbursements across 6 regions.',
    stat: '$30K',
    unit: 'IDENTIFIED',
    stack: ['Python', 'Pandas', 'PostgreSQL', 'Airflow'],
    image: '/images/FBAFees.jpg',
  },
  {
    num: '03',
    title: 'A Chatbot That Reads',
    tagline: 'RAG-powered agent that knows the context before the user types it.',
    body: 'Manual replies, no 24/7 support, and inefficient routing forced the team to constantly context-switch. Common inquiries consumed the majority of support bandwidth.',
    outcome: '24/7 support coverage. 60% of common inquiries automated. Response times cut significantly.',
    stat: '60%',
    unit: 'AUTOMATED',
    stack: ['RAG', 'LLM', 'CRM Integration', 'Workflow Engine'],
    image: null as string | null,
  },
];

function ProofItem({ p }: { p: typeof PROJECTS[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="proof-item">
      <div>
        <div className="proof-num">{p.num}</div>
        <h3>{p.title}</h3>
        <p className="proof-tagline">{p.tagline}</p>
        <p className="proof-body">{p.body}</p>

        <div className="proof-outcome">
          <div className="outcome-label">Outcome</div>
          <p>{p.outcome}</p>
        </div>

        <div className="proof-stack">
          {p.stack.map((s, i) => (
            <span key={s}>
              {s}{i < p.stack.length - 1 && <span className="sep"> &middot; </span>}
            </span>
          ))}
        </div>
      </div>

      <div className="proof-visual">
        {p.image ? (
          <img src={p.image} alt={p.title} loading="lazy" />
        ) : (
          <div className="proof-visual-stat">
            <div className="number">{p.stat}</div>
            <div className="unit">{p.unit}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="section section-border">
      <div className="container">
        <div className="section-header">
          <div className="label">The Work</div>
          <h2>Three quiet <span className="dim">interventions.</span></h2>
        </div>

        {PROJECTS.map(p => (
          <ProofItem key={p.num} p={p} />
        ))}
      </div>
    </section>
  );
}
