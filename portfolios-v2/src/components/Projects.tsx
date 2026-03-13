import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Maximize2, X, Terminal, ZoomIn } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Driven Supply Chain Tracking",
    subtitle: "MS Graph API & LLM-based logistics automation",
    challenge: "Processing unstructured Amazon email updates into a structured, actionable dashboard.",
    solution: "Orchestrated a Python-based system that fetches emails via MS Graph API and employs LLM analysis to extract critical shipment metadata (Shipment ID, SKU, ETA, etc.).",
    outcome: "Reduced stakeholder decision time and eliminated manual report downloads, providing real-time inventory visibility.",
    code: `def get_outlook_email(content):\n    # Process unstructured email content using LLM\n    metadata = llm_analyze(content)\n\n    return {\n        "ship_id": metadata.get("ship_id"),\n        "shipment_name": metadata.get("shipment_name"),\n        "skus": metadata.get("skus"),\n        "shipment_date": metadata.get("shipment_date"),\n        "eta_date": metadata.get("eta_date"),\n        "location": metadata.get("location")\n    }`
  },
  {
    id: 2,
    title: "Multi Market Inventory Synchronization",
    subtitle: "Auto-sync inventory between Amazon FBA and Shopify",
    challenge: "Inventory levels were inconsistent among Shopify and Amazon, leading to missed fulfillment cases.",
    solution: "Implemented a synchronization system that runs every 8 hours via CronJob. The system prevents underselling and triggers internal MS Teams notifications for missing SKUs or low stock levels.",
    outcome: "Eliminated missed fulfillment cases due to stock mismatches. Operational and logistics teams are now proactively notified of low-stock items.",
    image: "/images/multiMarket.jpg",
    code: `import requests\nimport json\n\ndef sync_inventory():\n    # Fetch Amazon FBA Stock\n    fba_stock = get_amazon_stock()\n    \n    # Update Shopify Inventory\n    for item in fba_stock:\n        if item['sku'] in shopify_inventory:\n            update_shopify(item['sku'], item['quantity'])\n        else:\n            send_teams_alert(f"Missing SKU: {item['sku']}")\n\n# Triggered every 8 hours via Cron\nsync_inventory()`
  },
  {
    id: 3,
    title: "Amazon FBA Fee Audit System",
    subtitle: "Custom audit system using Python and PostgreSQL",
    challenge: "Amazon often overcharges sellers by small amounts that accumulate into significant losses due to high sales volume. Manually auditing these fees across 2-4 complex reports is time-consuming and prone to errors.",
    solution: "Developed a system that reconciles reports from a Postgres database against internal MasterData. It calculates expected fees, flags discrepancies, and provides a transaction-level breakdown dashboard for stakeholders.",
    outcome: "Identified a potential $30,000 in reimbursements for the USA marketplace alone, with $5,000 currently recovered across 6 global marketplaces.",
    image: "/images/fbaAudit.jpg",
    code: `import pandas as pd\n\ndef audit_fba_fees(settlement_report, master_data):\n    # Merge reports with company master data\n    df = pd.merge(settlement_report, master_data, on='sku')\n    \n    # Calculate discrepancy\n    df['expected_fee'] = df.apply(calculate_correct_fee, axis=1)\n    df['discrepancy'] = df['amazon_fee'] - df['expected_fee']\n    \n    # Flag overcharges\n    overcharges = df[df['discrepancy'] > 0]\n    return overcharges\n\n# Identifies potential reimbursements at transaction level\naudit_results = audit_fba_fees(db_report, internal_data)`
  },
  {
    id: 4,
    title: "Customer Service Automation",
    subtitle: "Zendesk & Shopify integration with RAG-based AI chatbot",
    challenge: "Manual replies, no 24/7 support, and inefficient ticket routing forced agents to constantly switch tabs.",
    solution: "Integrated Zendesk with Shopify, implementing a RAG-powered AI chatbot and automated workflow orchestration. Configured intelligent auto-routing, auto-assignment, and auto-escalation logic.",
    outcome: "Achieved 24/7 customer support and automated 60% of common inquiries. Significantly reduced agent workload and accelerated response times.",
    code: `// Zendesk Workflow Automation Logic (Conceptual)\n{\n  "trigger": "ticket_created",\n  "conditions": {\n    "subject": ["refund", "order status", "shipping"],\n    "channel": "chat"\n  },\n  "actions": [\n    {\n      "call_rag_api": {\n        "context": "shopify_order_details",\n        "llm": "gemini-pro"\n      }\n    },\n    {\n      "auto_route": {\n        "group": "tier_1_support",\n        "priority": "high"\n      }\n    }\n  ]\n}`
  },
  {
    id: 5,
    title: "Zendesk Internal Workflow Automation",
    subtitle: "Centralizing multi-channel communication & B2B inquiries",
    challenge: "Fragmented communication across multiple channels and stakeholders in different timezones made streamlining B2B inquiries and customer queries difficult.",
    solution: "Configured a centralized internal workflow within Zendesk, consolidating all communication streams into a single workspace. Eliminated the need for fragmented SaaS tools by unifying multi-channel inputs into a streamlined environment.",
    outcome: "Created an all-in-one workplace that simplified stakeholder coordination and centralized all B2B and customer communication, significantly improving operational efficiency.",
    code: `# Internal Workflow Configuration (YAML)\nworkflow_centralization:\n  channels:\n    - type: b2b_email\n      integration: direct_imap\n    - type: slack_bridge\n      sync: bidirectional\n    - type: wholesale_portal\n      api: custom_webhook\n\n  routing_logic:\n    - condition: timezone_aware_assignment\n      priority: based_on_sla\n    - action: consolidate_to_unified_view\n      view_id: global_stakeholder_dashboard\n\n  outcome: "Fragmented tools -> Unified Workspace"`
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">01. Featured Projects</div>
          <h2 className="section-title">Recent Work</h2>
        </div>

        {/* Carousel Concept Container */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Main Display Window */}
          <div style={{ 
            border: '1px dashed var(--border)', 
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Terminal Top Bar */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '0.75rem 1rem', 
              borderBottom: '1px solid var(--border)',
              background: 'var(--bg-tertiary)'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)' }} />
              </div>
              <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                PROJECT: {activeProject.id}409
              </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}
              >
                {/* Left Side: Meta */}
                <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRight: '1px dashed var(--border)', paddingRight: '2rem' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>// RECORD_{activeProject.id}</div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activeProject.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', borderLeft: '2px solid var(--accent-muted)', paddingLeft: '1rem' }}>
                      {activeProject.subtitle}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(currentIndex)}
                    className="btn" 
                    style={{ width: '100%', justifyContent: 'space-between', marginTop: 'auto' }}
                  >
                    <span>View Details</span>
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Right Side: Image Preview / Code Fallback */}
                <div style={{ gridColumn: 'span 7', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {activeProject.image ? (
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setIsZoomed(true)}
                      style={{ cursor: 'zoom-in', width: '100%', position: 'relative' }}
                    >
                      <img 
                        src={activeProject.image} 
                        alt={activeProject.title} 
                        style={{ 
                          width: '100%', 
                          maxHeight: '300px', 
                          objectFit: 'cover', 
                          borderRadius: '0.75rem',
                          border: '1px solid var(--border)',
                          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                        }} 
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '1rem', 
                        right: '1rem', 
                        background: 'rgba(0,0,0,0.6)', 
                        borderRadius: '50%', 
                        padding: '0.5rem',
                        color: 'white',
                        backdropFilter: 'blur(4px)'
                      }}>
                        <ZoomIn size={16} />
                      </div>
                    </motion.div>
                  ) : (
                    <div style={{ 
                      width: '100%', 
                      background: 'var(--bg-secondary)', 
                      padding: '1.5rem', 
                      borderRadius: '0.75rem', 
                      border: '1px solid var(--border)', 
                      overflow: 'hidden' 
                    }}>
                      <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Terminal size={14} /> main.py
                      </div>
                      <pre style={{ margin: 0, overflowX: 'auto', color: '#a1a1aa' }}>
                        <code className="mono" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                          {activeProject.code}
                        </code>
                      </pre>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Pagination Grid */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={prevProject} className="btn btn-secondary" style={{ padding: '0.75rem', minWidth: '48px' }} aria-label="Previous Project">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextProject} className="btn btn-secondary" style={{ padding: '0.75rem', minWidth: '48px' }} aria-label="Next Project">
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: '32px',
                    height: '4px',
                    background: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="mono" style={{ fontSize: '0.875rem' }}>
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--accent)',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 0 40px rgba(56, 189, 248, 0.1)',
                borderRadius: '0.5rem'
              }}
            >
              {/* Modal Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1rem 2rem', 
                borderBottom: '1px dashed var(--border)',
                background: 'var(--bg-tertiary)'
              }}>
                <div className="mono" style={{ color: 'var(--accent)' }}>// {projects[selectedProject].title.toUpperCase()}</div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 className="mono" style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>[ CHALLENGE ]</h4>
                  <p style={{ color: 'var(--text-primary)' }}>{projects[selectedProject].challenge}</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 className="mono" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>[ SOLUTION ]</h4>
                  <p style={{ color: 'var(--text-primary)' }}>{projects[selectedProject].solution}</p>
                </div>

                <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--accent-muted)', borderLeft: '2px solid var(--accent)', borderRadius: '0.25rem' }}>
                  <h4 className="mono" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>[ OUTCOME ]</h4>
                  <p style={{ color: 'var(--text-primary)', margin: 0 }}>{projects[selectedProject].outcome}</p>
                </div>

                <div>
                  <h4 className="mono" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>[ CORE LOGIC ]</h4>
                  <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', border: '1px solid var(--border)', overflowX: 'auto', borderRadius: '0.25rem' }}>
                    <pre style={{ margin: 0, color: '#a1a1aa' }}>
                      <code className="mono" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                        {projects[selectedProject].code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(5px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
            >
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '85vh', 
                  borderRadius: '0.5rem',
                  border: '1px solid var(--accent)'
                }} 
              />
              <div className="mono" style={{ 
                marginTop: '1rem', 
                textAlign: 'center', 
                color: 'white',
                background: 'rgba(0,0,0,0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '4px'
              }}>
                {activeProject.title}
              </div>
              <button 
                onClick={() => setIsZoomed(false)}
                style={{
                  position: 'absolute',
                  top: '-3rem',
                  right: '0',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
