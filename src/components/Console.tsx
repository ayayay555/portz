import type { CSSProperties } from 'react';
import { seeded } from '../lib/rand';

// A made-up run log. It shows the kind of work, not any client's data.
const RUNS = [
  { name: 'Intake call QA', when: '2m ago', state: 'done' },
  { name: 'Marketplace fee audit', when: '9m ago', state: 'flag' },
  { name: 'Order pipeline', when: 'now', state: 'live' },
  { name: 'Inventory sync', when: '14m ago', state: 'done' },
  { name: 'Sprint reconciliation', when: '1h ago', state: 'done' },
  { name: 'Missed-call booking', when: '1h ago', state: 'done' },
] as const;

const CHIP = { done: 'Done', flag: 'Flagged', live: 'Running' } as const;

// The strip at the bottom: one dot per step run today
const COLS = 72;
const ROWS = 4;
const rand = seeded(7);
const STRIP = Array.from({ length: COLS * ROWS }, (_, i) => {
  const r = rand();
  const fill = r < 0.62 ? 'var(--text-2)' : r < 0.88 ? 'var(--green)' : r < 0.96 ? 'var(--dot)' : 'var(--amber)';
  return { cx: (i % COLS) * 8 + 4, cy: Math.floor(i / COLS) * 8 + 4, fill };
});

export default function Console() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="console">
        <div className="titlebar">
          <i /><i /><i />
          <b>Runs</b>
          <small>13 systems &middot; all healthy</small>
        </div>
        <div className="stepsbar">
          <span data-n="1">Trigger</span>
          <span data-n="2">Fetch</span>
          <span data-n="3">Check</span>
          <span data-n="4" className="on">Act</span>
          <span data-n="5">Report</span>
        </div>

        <div className="console-body">
          <div className="side">
            <div className="on">All systems <span>13</span></div>
            <div>Scheduled</div>
            <div>Webhooks</div>
            <div>Agents</div>
            <div className="group">Industry</div>
            <div>Law</div>
            <div>Plumbing</div>
            <div>HVAC</div>
            <div>E-commerce</div>
            <div>Web agency</div>
          </div>

          <div className="runs">
            <div className="runs-head"><span>System</span><span>Last run</span><span>Status</span></div>
            {RUNS.map(r => (
              <div key={r.name} className="run">
                <span>{r.name}</span>
                <small>{r.when}</small>
                <span className={`chip ${r.state}`}>{CHIP[r.state]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bytemap">
          <svg viewBox={`0 0 ${COLS * 8} ${ROWS * 8}`}>
            {STRIP.map(d => <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r="2.6" fill={d.fill} />)}
          </svg>
          <div className="bytemap-legend">
            <span style={{ '--c': 'var(--text-2)' } as CSSProperties}>Step run</span>
            <span style={{ '--c': 'var(--dot)' } as CSSProperties}>Skipped</span>
            <span style={{ '--c': 'var(--amber)' } as CSSProperties}>Flagged to a person</span>
            <span style={{ '--c': 'var(--green)' } as CSSProperties}>Saved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
