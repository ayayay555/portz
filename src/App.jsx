import React from 'react';
import './index.css'; // Global styles

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-headline">Engineering Autonomy into Business Growth.</h1>
        <p className="hero-subheadline">I design and deploy automated systems that eliminate manual bottlenecks. From customer experience architecture to backend operational logic, I build the infrastructure that scales.</p>
        <div className="keywords">
          <span>Workflow Engineering</span> | <span>API Integration</span> | <span>System Architecture</span>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h2>Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <h3>Omnichannel Support Systems</h3>
            <p>Scalable infrastructure for global customer service.</p>
          </div>
          <div className="capability-item">
            <h3>Operational Intelligence</h3>
            <p>Automated inventory and supply chain data synchronization.</p>
          </div>
          <div className="capability-item">
            <h3>Financial Recovery Logic</h3>
            <p>Programmatic auditing for revenue protection.</p>
          </div>
          <div className="capability-item">
            <h3>Conversational AI</h3>
            <p>Integrating LLMs into production workflows.</p>
          </div>
        </div>
      </section>

      {/* Project Case Studies Section */}
      <section className="projects-section">
        <h2>Project Case Studies</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Integrated Service Ecosystems</h3>
            <p>Showcasing the Zendesk/Shopify work as a "complex multi-platform sync".</p>
          </div>
          <div className="project-card">
            <h3>Automated Inventory & Supply Chain</h3>
            <p>Positioning the Amazon work as "cross-platform data integrity".</p>
          </div>
          <div className="project-card">
            <h3>Revenue Leakage Automation</h3>
            <p>The Amazon Reimbursement project—focused on the bottom line.</p>
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section className="toolbox-section">
        <h2>Toolbox</h2>
        <p className="toolbox-description">Tool agnostic implementation including Zendesk, Shopify, Amazon API, Python, and more.</p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Need a system that scales? Let’s build it.</h2>
      </section>
    </div>
  );
}

export default App;
