# Karl Gonzales | AI Automation Engineer

Portfolio site for my automation work: 100+ automations and 13 systems across law, e-commerce, plumbing, HVAC and web agencies.

**Live:** [karlauto.vercel.app](https://karlauto.vercel.app/)

Most of the work is under NDA, so the site shows what each system does and how it runs, not client names, data or screens.

## What's on the page

- **Hero:** headline numbers and a mock run console. The console is illustrative and holds no client data.
- **What automation changes:** a dot-matrix comparison of manual work, automated work and the exceptions that still reach a person.
- **Systems:** one card per system with its own SVG mark. Click a card to flip it and see the high-level flow, which lights up step by step.
- **How I work, Method, Stack, Contact.**
- **Light and dark mode:** follows the system setting, with a toggle in the nav that remembers your choice.

## Stack

- React 19 and TypeScript, built with Vite
- Plain CSS. Every colour is a token in `src/index.css` with a dark and a light value.
- Framer Motion for the About dialog
- Deployed on Vercel

## Project structure

```
src/
├── App.tsx               # Page layout, nav and footer
├── index.css             # Colour tokens and all styles
├── lib/rand.ts           # Seeded random for the dot drawings
└── components/
    ├── Hero.tsx          # Headline, numbers, dot field, run console
    ├── Console.tsx       # The tilted run console in the hero
    ├── DotField.tsx      # Wave of dots behind the hero
    ├── Shift.tsx         # Manual / automated / exceptions matrix
    ├── Systems.tsx       # System cards, flip and flows
    ├── Marks.tsx         # One SVG mark per system
    ├── Trust.tsx         # How the work can be checked privately
    ├── Method.tsx
    ├── StackBand.tsx
    ├── Close.tsx         # Contact
    ├── AboutModal.tsx
    └── ThemeToggle.tsx
```

To add or change a system, edit the `SYSTEMS` list in `src/components/Systems.tsx`. To give it a new mark, add one to `src/components/Marks.tsx`.

## Run it locally

```bash
git clone https://github.com/ayayay555/portz.git
cd portz
npm install
npm run dev
```

Build for production with `npm run build`. Check the code with `npm run lint`.
