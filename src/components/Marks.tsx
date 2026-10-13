// One mark per system. Drawn on a 48 grid in the text colour;
// the green stroke marks the moment the system does its job.
import type { ReactNode } from 'react';



function mark(children: ReactNode) {
  return (
    <svg
      className="mark"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const GO = 'var(--green)';

export const marks = {
  // Waveform of a call, one peak flagged
  intake: (
    mark(<>
      <path d="M4 26h5l3-8 4 16 4-22 4 18 3-6h3l3 4 3-4h8" opacity="0.55" />
      <path d="M20 12v-6l9 3-9 3" stroke={GO} />
      <circle cx="20" cy="12" r="1.5" fill={GO} stroke="none" />
    </>)
  ),
  // A missed call that comes back as a booked job
  plumbing: (
    mark(<>
      <path d="M8 12c0-2 1.5-4 4-4h3l3 7-4 2.5a18 18 0 0 0 8 8l2.5-4 7 3v3c0 2.5-2 4-4 4C16 31.5 8 23.5 8 12z" opacity="0.6" />
      <rect x="28" y="6" width="14" height="13" rx="2" stroke={GO} />
      <path d="M28 10.5h14" stroke={GO} />
      <path d="M32 15l2 2 4-4" stroke={GO} />
      <path d="M26 40h16" opacity="0.4" />
    </>)
  ),
  // Receipt under a lens
  audit: (
    mark(<>
      <path d="M10 6h22v32l-4-3-3 3-4-3-3 3-4-3-4 3z" opacity="0.55" />
      <path d="M15 14h12M15 20h12M15 26h6" opacity="0.55" />
      <circle cx="32" cy="30" r="7" stroke={GO} />
      <path d="M37 35l6 6" stroke={GO} />
    </>)
  ),
  // Two stores held in step
  sync: (
    mark(<>
      <rect x="5" y="14" width="12" height="20" rx="2" />
      <rect x="31" y="14" width="12" height="20" rx="2" />
      <path d="M17 20h14l-3-3" stroke={GO} />
      <path d="M31 28H17l3 3" stroke={GO} />
      <path d="M9 20h4M9 24h4M35 20h4M35 24h4" opacity="0.4" />
    </>)
  ),
  // A thermostat dial whose service date comes round on its own
  hvac: (
    mark(<>
      <circle cx="24" cy="24" r="17" opacity="0.5" />
      <path d="M24 13v3M35 24h-3M24 35v-3M13 24h3" opacity="0.5" />
      <path d="M24 7a17 17 0 0 1 17 17" stroke={GO} />
      <path d="M41 24l-3-3M41 24l3-3" stroke={GO} />
      <circle cx="24" cy="24" r="5" />
      <path d="M24 24l3.5-3.5" />
    </>)
  ),
  // Orders moving down a line without a hand on them
  orders: (
    mark(<>
      <rect x="6" y="16" width="9" height="9" rx="1.5" />
      <rect x="20" y="16" width="9" height="9" rx="1.5" opacity="0.7" />
      <rect x="34" y="16" width="9" height="9" rx="1.5" stroke={GO} />
      <path d="M4 32h40" />
      <circle cx="10" cy="36" r="2" opacity="0.5" />
      <circle cx="24" cy="36" r="2" opacity="0.5" />
      <circle cx="38" cy="36" r="2" opacity="0.5" />
    </>)
  ),
  // Board columns that reconcile themselves
  sprint: (
    mark(<>
      <rect x="5" y="8" width="10" height="32" rx="2" opacity="0.5" />
      <rect x="19" y="8" width="10" height="32" rx="2" opacity="0.5" />
      <rect x="33" y="8" width="10" height="32" rx="2" />
      <path d="M8 14h4M8 19h4M22 14h4" opacity="0.6" />
      <path d="M35 15l2.5 2.5 3.5-4" stroke={GO} />
    </>)
  ),
  // A question answered from the knowledge base
  agent: (
    mark(<>
      <path d="M8 10h32v20H22l-8 7v-7H8z" />
      <circle cx="17" cy="20" r="2" stroke={GO} />
      <circle cx="31" cy="20" r="2" stroke={GO} />
      <circle cx="24" cy="15" r="2" stroke={GO} />
      <path d="M18.5 19l4-3M25.5 16l4 3M19 20h10" stroke={GO} opacity="0.7" />
    </>)
  ),
  // One inbox in, the right desk out
  router: (
    mark(<>
      <path d="M4 24h14" />
      <circle cx="20" cy="24" r="2.5" />
      <path d="M22.5 24C30 24 30 12 40 12M22.5 24C30 24 30 36 40 36" opacity="0.45" />
      <path d="M22.5 24H40" stroke={GO} />
      <path d="M37 21l3 3-3 3" stroke={GO} />
    </>)
  ),
};
