import { useState, type CSSProperties } from 'react';
import { marks } from './Marks';

type Industry = 'Law' | 'E-commerce' | 'Plumbing' | 'HVAC' | 'Web agency';

type System = {
  mark: keyof typeof marks;
  industry: Industry;
  title: string;
  desc: string;
  result: string;
  flow: string[];
};

// Flows are high level on purpose: the shape of each system, not its internals.
const SYSTEMS: System[] = [
  {
    mark: 'intake',
    industry: 'Law',
    title: 'Intake call QA',
    desc: 'Reviews every intake call against the script and flags the ones that need coaching.',
    result: 'Every call checked',
    flow: ['Intake call ends', 'Transcribe the recording', 'Check it against the script', 'Flag the weak spots', 'Coaching email to the team'],
  },
  {
    mark: 'audit',
    industry: 'E-commerce',
    title: 'Marketplace fee audit',
    desc: 'Recalculates fulfillment and settlement fees line by line and files the overcharges.',
    result: '$30K recovered',
    flow: ['Pull settlement and fee reports', 'Recalculate the expected fee', 'Compare line by line', 'Flag every overcharge', 'File the reimbursement claim'],
  },
  {
    mark: 'orders',
    industry: 'E-commerce',
    title: 'Order pipeline',
    desc: 'Pulls, validates and routes orders to fulfillment, then generates the labels.',
    result: '160 hrs / month saved',
    flow: ['New order comes in', 'Validate address and stock', 'Route to fulfillment', 'Generate the shipping label', 'Confirm to the customer'],
  },
  {
    mark: 'sync',
    industry: 'E-commerce',
    title: 'Multi-brand inventory sync',
    desc: 'Keeps stock in step across brands and channels and alerts the team before anything runs out.',
    result: 'Zero stock-outs',
    flow: ['Read stock from every channel', 'Match by SKU', 'Push corrections', 'Alert on low or zero stock'],
  },
  {
    mark: 'agent',
    industry: 'E-commerce',
    title: 'Support agent',
    desc: 'Answers routine questions from the knowledge base and hands the rest to a person with context.',
    result: '60% answered automatically',
    flow: ['Customer asks a question', 'Search the knowledge base', 'Draft an answer', 'Confident? Reply. If not, hand off', 'Log it to the CRM'],
  },
  {
    mark: 'plumbing',
    industry: 'Plumbing',
    title: 'Missed-call booking',
    desc: 'Turns a missed call into a booked job before the customer rings the next plumber.',
    result: 'No missed jobs',
    flow: ['Call goes unanswered', 'Text back within a minute', 'Collect the job details', 'Book a slot in the calendar', 'Notify the technician'],
  },
  {
    mark: 'hvac',
    industry: 'HVAC',
    title: 'Service reminders',
    desc: 'Brings customers back for maintenance when their unit is due, and fills the schedule on its own.',
    result: 'Schedule fills itself',
    flow: ['Service date comes due', 'Send the reminder', 'Customer picks a time', 'Assign a technician', 'Ask for a review after'],
  },
  {
    mark: 'sprint',
    industry: 'Web agency',
    title: 'Sprint reconciliation',
    desc: 'Matches shipped work to the board every morning and posts it to the right sprint.',
    result: 'Board stays true',
    flow: ['Read merged pull requests', 'Match them to tasks', 'Update the tracking sheet', 'Post to the current sprint'],
  },
  {
    mark: 'router',
    industry: 'Web agency',
    title: 'Request router',
    desc: 'Reads incoming email and chat and sends each request to the right person with a summary.',
    result: 'One inbox, no triage',
    flow: ['Email or chat comes in', 'Classify the request', 'Summarize it', 'Route to the right person', 'Track until it is done'],
  },
];

function SystemCard({ s }: { s: System }) {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(f => !f);

  return (
    <div
      className={`flip${flipped ? ' is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={flip}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
      }}
    >
      <div className="flip-inner">
        <div className="card face front" aria-hidden={flipped}>
          <div className="system-top">
            {marks[s.mark]}
            <span className="label">{s.industry}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div className="face-foot">
            <span className="result">{s.result}</span>
            <span className="hint">Flow &rarr;</span>
          </div>
        </div>

        <div className="card face back" aria-hidden={!flipped}>
          <div className="system-top">
            <span className="label">How it runs</span>
            <span className="label">{s.industry}</span>
          </div>
          <h3>{s.title}</h3>
          <ol className="flow">
            {s.flow.map((step, i) => (
              <li
                key={step}
                className={i === s.flow.length - 1 ? 'last' : undefined}
                style={{ '--i': i } as CSSProperties}
              >
                {step}
              </li>
            ))}
          </ol>
          <div className="face-foot">
            <span className="result">{s.result}</span>
            <span className="hint">&larr; Back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Systems() {
  return (
    <section id="systems">
      <div className="wrap">
        <span className="kicker">02 / 06 &middot; Systems</span>
        <h2>13 systems across five industries.</h2>
        <p className="lead">
          A selection. Client names and data stay private, so each system is
          described by what it does. Click a card to see how it runs.
        </p>

        <div className="systems">
          {SYSTEMS.map(s => <SystemCard key={s.title} s={s} />)}
        </div>
      </div>
    </section>
  );
}
