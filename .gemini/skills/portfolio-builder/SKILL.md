---
name: portfolio-builder
description: Agentic portfolio builder that scans a user's uploaded resume (or accepts input text) and generates a complete, visually appealing portfolio using a specialized template based on their data.
---

# Portfolio Builder

This skill provides a complete workflow for taking a user's resume, extracting their information using AI, and applying it to a robust React-based portfolio template.

## Quick Start

When a user asks you to build a portfolio from their resume or provides their professional details:

1.  **Extract Information**: Scan the user's provided resume (PDF, docx, or text) or the text they provided. Analyze their experience, skills, projects, and contact information.
2.  **Generate Portfolio Data**: Map the extracted information into the expected structure for the portfolio components.
3.  **Copy Template**: Copy the base template from `assets/template/` to a new directory for the user's portfolio.
4.  **Inject Data**: Update the components in the newly created portfolio with the user's specific data.

## Template Structure

The provided template is a modern React application using Vite and Framer Motion. Key files to update:

*   `src/components/Hero.tsx`: Update the main heading, subheading, and contact links.
*   `src/components/Projects.tsx`: Update the `projects` array with the user's experience/projects.
*   `src/components/Skills.tsx`: Update the `skillCategories` array with the user's skills grouped logically.
*   `src/components/AboutGallery.tsx`: (If applicable) Update with personal details.
*   `src/App.tsx`: Update navigation links or global layout elements if necessary.
*   `index.html`: Update the title and meta descriptions.

## Data Extraction Guidelines

When analyzing the resume:
*   Identify the core narrative: Are they a backend engineer? Frontend? Designer? Data Scientist? The portfolio's tone should match.
*   Extract 3-5 major projects or work experiences for the `Projects` section. If no formal projects exist, frame their work experience as projects with a "Challenge, Solution, Outcome" format.
*   Group skills into logical categories (e.g., "Frontend", "Backend", "Tools", "Soft Skills") for the `Skills` section.
*   Extract social links (LinkedIn, GitHub) and email for the contact sections.

## Example Workflow

1.  **User**: "I want a portfolio based on my resume here: [resume.pdf]"
2.  **Agent**: Reads `resume.pdf`.
3.  **Agent**: "I've analyzed your resume. I'll create a portfolio highlighting your experience in [Area] and your projects like [Project 1]. Sound good?"
4.  **User**: "Yes."
5.  **Agent**: Copies `assets/template/` to a new folder (e.g., `user-portfolio/`).
6.  **Agent**: Uses `replace` or `write_file` to update `Hero.tsx`, `Projects.tsx`, and `Skills.tsx` in `user-portfolio/src/components/` with the extracted data.
7.  **Agent**: Informs the user the portfolio is ready and provides instructions to run it (`npm install` && `npm run dev`).
