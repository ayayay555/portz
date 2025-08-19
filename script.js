// Dark Mode Toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? "🌙" : "☀️";
});



//typing
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


// Kick off the loop
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
      details = "<h2>Sales Funnel Automation</h2><pr>A custom AI agent workflow automation tool for my client's sales funnel automation. </pr>";
      details += "<p>Boosts lead capture up to 1000+ per month using Meta Ads, Make.com, and Pipedrive CRM</p>";
      details += "<a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github' alt='GitHub'></i></a>";

    } else if (projectId === "2") {
      details = "<h2>Gym Instructor AI Agent</h2><p>Multi AI agent for personalized fitness coaching, developed with Google ADK.</p>";
      details += "<a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github' alt='GitHub'></i></a>";

    } else if (projectId === "3") {
      details = "<h2>Machine Learning - Image Recognition </h2><p>Trains a machine learning model to identify and classify objects in images. It was developed using Jupyter Notebook along with Python, TensorFlow/Keras, OpenCV, and other supporting libraries for data preprocessing, training, and evaluation. After being trained on a large set of labeled images, the model can analyze unseen images and accurately predict the objects detected in them.</p>";
      details += "<a href='https://github.com/ayayay555' target='_blank'><i class='fa fa-github' alt='GitHub'></i></a>";
    }

    modalBody.innerHTML = details;
    modal.style.display = "flex";
  }); 
});

closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
