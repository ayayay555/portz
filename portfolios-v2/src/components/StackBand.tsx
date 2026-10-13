const GROUPS = [
  { title: 'Automation', items: ['Python', 'n8n', 'Make', 'JavaScript', 'Cron'] },
  { title: 'AI / LLM', items: ['RAG', 'Gemini', 'Claude', 'Pinecone', 'Agents'] },
  { title: 'Data', items: ['PostgreSQL', 'REST APIs', 'Graph API', 'Webhooks', 'ETL'] },
  { title: 'Platforms', items: ['Shopify', 'Zendesk', 'Pipedrive', 'Custom APIs'] },
];

export default function StackBand() {
  return (
    <section className="section section-border">
      <div className="container">
        <div className="section-header">
          <div className="label">Stack</div>
          <h2>Tools that <span className="dim">earn their keep.</span></h2>
        </div>

        <div className="stack-row">
          {GROUPS.map(g => (
            <div key={g.title} className="stack-group">
              <div className="group-label">{g.title}</div>
              <div className="group-items">
                {g.items.map((item, i) => (
                  <span key={item}>
                    {item}{i < g.items.length - 1 && <span className="sep">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
