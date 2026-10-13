export default function Close({ onAbout }: { onAbout: () => void }) {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span className="kicker">06 / 06 &middot; Contact</span>
        <h2>Have a process that should run itself?</h2>
        <p className="lead">
          Send me the bottleneck. I&rsquo;ll reply with how I&rsquo;d automate it and what it would take.
        </p>
        <div className="actions row">
          <a
            href="mailto:karljhunzgonzales@gmail.com?subject=Automation%20project"
            className="btn primary"
          >
            Email me
          </a>
        </div>

        <div className="links">
          <a href="https://github.com/ayayay555" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kjgonzales08" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <button className="linkbtn" onClick={onAbout}>About me</button>
        </div>
      </div>
    </section>
  );
}
