const GROUPS = [
  { title: 'Automation', items: ['n8n', 'Make', 'Python', 'JavaScript', 'Cron'] },
  { title: 'AI', items: ['Claude', 'Gemini', 'RAG', 'Pinecone', 'Agents'] },
  { title: 'Data', items: ['PostgreSQL', 'REST APIs', 'Graph API', 'Webhooks', 'ETL'] },
  { title: 'Platforms', items: ['Amazon', 'Shopify', 'Zendesk', 'Pipedrive', 'Monday.com'] },
];

export default function StackBand() {
  return (
    <section id="stack">
      <div className="wrap">
        <span className="kicker">05 / 06 &middot; Stack</span>
        <h2>What I build with.</h2>

        <div className="stack">
          {GROUPS.map(g => (
            <div key={g.title}>
              <span className="label">{g.title}</span>
              <ul>
                {g.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
