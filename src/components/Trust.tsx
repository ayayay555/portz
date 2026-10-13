const POINTS = [
  {
    title: 'Private by default',
    desc: 'Client systems run on client data, so names, screens and numbers stay under NDA. You get the same treatment.',
  },
  {
    title: 'Shown live, not in screenshots',
    desc: 'On a call I can walk through any system above, running, with the data redacted. Ask about the one closest to your problem.',
  },
  {
    title: 'Built to be handed over',
    desc: 'Every system ships with documentation, alerts when something breaks, and a person on your side who knows how it works.',
  },
];

export default function Trust() {
  return (
    <section id="trust">
      <div className="wrap">
        <span className="kicker">03 / 06 &middot; How I work</span>
        <h2>Most of my work is private. Here is how you can still check it.</h2>

        <div className="steps three">
          {POINTS.map((p, i) => (
            <div key={p.title}>
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
