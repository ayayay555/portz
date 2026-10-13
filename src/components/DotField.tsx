// Dots behind the hero, swelling in a slow diagonal wave.
const COLS = 64;
const ROWS = 30;
const GAP = 20;

const DOTS = Array.from({ length: COLS * ROWS }, (_, i) => {
  const x = i % COLS;
  const y = Math.floor(i / COLS);
  const wave = (Math.sin(x * 0.22 - y * 0.18) + Math.sin(y * 0.31 + x * 0.07)) / 4 + 0.5;
  return { cx: x * GAP + GAP / 2, cy: y * GAP + GAP / 2, r: 0.8 + wave * 2.4 };
});

export default function DotField() {
  return (
    <svg
      className="dotfield"
      viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP}`}
      preserveAspectRatio="xMaxYMin slice"
      aria-hidden="true"
    >
      {DOTS.map(d => (
        <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={d.r} fill="currentColor" />
      ))}
    </svg>
  );
}
