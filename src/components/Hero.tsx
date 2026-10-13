import DotField from './DotField';
import Console from './Console';

const FACTS = [
  { num: '100+', label: 'Automations shipped', note: 'Workflows, syncs, alerts and agents in production.' },
  { num: '13', label: 'Systems built', note: 'End-to-end systems that replace a manual process.' },
  { num: '5', label: 'Industries, and counting', note: 'Law, e-commerce, plumbing, HVAC and web agencies.' },
];

export default function Hero() {
  return (
    <section className="hero">
      <DotField />
      <div className="wrap">
        <div className="hero-grid">
          <div className="copy">
            <span className="kicker">AI Automation Engineer</span>
            <h1>Work that runs itself.</h1>
            <p className="lead">
              I build automations and internal systems across five industries,
              and counting. Pipelines, integrations and AI agents that keep
              running when nobody is watching.
            </p>
            <div className="actions">
              <a href="#contact" className="btn primary">Book a call</a>
              <a href="#systems" className="btn">See the systems</a>
            </div>
          </div>
          <Console />
        </div>

        <div className="facts">
          {FACTS.map(f => (
            <div key={f.label}>
              <span className="num">{f.num}</span>
              <span className="label">{f.label}</span>
              <span className="note">{f.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
