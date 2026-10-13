const STEPS = [
  { num: '01', title: 'Map', desc: 'Watch the work as it is actually done, and find where time and data get lost.' },
  { num: '02', title: 'Design', desc: 'Decide the inputs, outputs, failure cases and checks before writing code.' },
  { num: '03', title: 'Build', desc: 'Ship a pipeline that handles bad input and tells someone when it breaks.' },
  { num: '04', title: 'Hand off', desc: 'Test, deploy and document it for the person who runs it next.' },
];

export default function Method() {
  return (
    <section id="method">
      <div className="wrap">
        <span className="kicker">04 / 06 &middot; Method</span>
        <h2>How a project runs.</h2>

        <div className="steps">
          {STEPS.map(s => (
            <div key={s.num}>
              <span className="label">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
