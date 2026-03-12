import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Automation & Orchestration",
    skills: ["Python", "n8n", "Make (Integromat)", "JavaScript", "CronJobs"]
  },
  {
    category: "AI & LLM Operations",
    skills: ["RAG Architecture", "Gemini API", "Claude API", "Pinecone (Vector DB)", "Agentic Workflows"]
  },
  {
    category: "Data & Infrastructure",
    skills: ["PostgreSQL & SQL", "Microsoft Graph API", "REST APIs", "JSON & Webhooks", "ETL Pipelines"]
  },
  {
    category: "E-commerce & CX",
    skills: ["Amazon SP-API", "Shopify API", "Zendesk Admin", "Pipedrive CRM", "Cross-Platform Sync"]
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">03. Skills & Technologies</div>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="tech-grid">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="col-span-6"
              style={{
                background: 'var(--bg-primary)',
                border: '1px dashed var(--border)',
                padding: '2rem',
                borderRadius: '0.5rem'
              }}
            >
              <h3 className="mono" style={{ 
                color: 'var(--accent)', 
                fontSize: '1rem', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: 'var(--text-secondary)' }}>&gt;</span> {group.category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border)',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                      borderRadius: '0.25rem'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
