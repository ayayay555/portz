import { seeded } from '../lib/rand';

// Same grid of work three ways: done by hand, done by the system,
// and the few odd cases that still reach a person.
const COLS = 22;
const ROWS = 12;
const GAP = 13;

const rand = seeded(42);
const CELLS = Array.from({ length: COLS * ROWS }, (_, i) => ({
  cx: (i % COLS) * GAP + GAP / 2,
  cy: Math.floor(i / COLS) * GAP + GAP / 2,
  odd: rand() < 0.05,
}));

const PANELS = [
  {
    label: 'Manual',
    note: 'Every step done by a person, every day. Copy, check, paste, repeat.',
    dot: () => ({ r: 4.6, fill: 'var(--text-2)' }),
  },
  {
    label: 'Automated',
    note: 'The same steps, run by the system on a schedule or a trigger. Nobody touches them.',
    dot: () => ({ r: 3.4, fill: 'var(--green)' }),
  },
  {
    label: 'Exceptions',
    note: 'Only the odd cases reach a person, with the context to decide in a minute.',
    dot: (odd: boolean) => (odd ? { r: 4.6, fill: 'var(--amber)' } : { r: 1.6, fill: 'var(--dot)' }),
  },
];

export default function Shift() {
  return (
    <section id="shift">
      <div className="wrap">
        <span className="kicker">01 / 06 &middot; What automation changes</span>
        <h2>Automation takes the steps. People keep the judgement.</h2>
        <p className="lead">
          Most operations work is the same steps, repeated. I turn those steps
          into systems and send only the unusual cases to a person.
        </p>

        <div className="matrix">
          {PANELS.map(p => (
            <div key={p.label}>
              <svg viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP}`} aria-hidden="true">
                {CELLS.map(c => <circle key={`${c.cx}-${c.cy}`} cx={c.cx} cy={c.cy} {...p.dot(c.odd)} />)}
              </svg>
              <div className="panel-text">
                <span className="label">{p.label}</span>
                <p className="mono-note">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
