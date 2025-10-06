// Dark Mode Toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? "🌙" : "☀️";
});

// Typing Text
const sentences = [
  "I am a Computer Engineer who thrives on all things related to tech",
  "With a strong focus on AI Agent Development, Workflows, Web Development, and IoT",
  "I enjoy building things that solve practical problems",
  "When offline or out of office, I love doing both outdoor and indoor activities like run, swim, and playing video games",
  "If I’ve piqued your interest, feel free to reach out"
];

const textElement = document.getElementById("text");
let index = 0;

function typeSentence(sentence, i = 0) {
  if (i < sentence.length) {
    textElement.textContent += sentence.charAt(i);
    setTimeout(() => typeSentence(sentence, i + 1), 70);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      index = (index + 1) % sentences.length;
      typeSentence(sentences[index]);
    }, 800);
  }
}
typeSentence(sentences[index]);

// Project Details Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.dataset.project;
    let details = "";

    if (projectId === "1") {
      details = `
        <h2>Sales Funnel Automation</h2>
        <p>A custom AI agent workflow automation tool for my client's sales funnel automation.</p>
        <p>Boosts lead capture up to 1000+ per month using Meta Ads, Make.com, and Pipedrive CRM.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    } else if (projectId === "2") {
      details = `
        <h2>Gym Instructor AI Agent</h2>
        <p>Multi AI agent for personalized fitness coaching, developed with Google ADK.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    } else if (projectId === "3") {
      details = `
        <h2>Machine Learning - Image Recognition</h2>
        <p>Trains a machine learning model to identify and classify objects in images using TensorFlow/Keras, OpenCV, and Python.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    } else if (projectId === "4") {
      details = `
        <h2>CRM & Lead Generation Automation</h2>
        <p>Developed CRM automation workflows for lead tracking, deal management, and streamlining sales and operations processes using Make, Pipedrive, and FacebookAds.</p>
        <p>Built lead generation automations to manage outreach, qualification, and follow-ups, improving pipeline efficiency and client engagement using Make and Pipedrive CRM.</p>
        <p>Enabled clients to generate up to <strong>500+ leads per month</strong>.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    } else if (projectId === "5") {
      details = `
        <h2>Customer Support Automation</h2>
        <p>Addressed slow response challenges with Customer Support automations using n8n, integrating AI chatbots, ticketing systems, and escalation workflows to improve customer satisfaction.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    } else if (projectId === "6") {
      details = `
        <h2>Database Chatbot (RAG + Pinecone)</h2>
        <p>Created a Database Chatbot using Retrieval-Augmented Generation (RAG) and Pinecone for document-based Q&A and knowledge retrieval.</p>
        <p>Enhances knowledge accessibility and customer interactions through efficient document search and AI-driven responses.</p>
        <a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github'></i></a>
      `;
    }

    modalBody.innerHTML = details;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = "none";
});
