import { useState } from 'react';

type Theme = 'dark' | 'light';

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'dark' || set === 'light') return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const dark = theme === 'dark';

  const flip = () => {
    const next: Theme = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage blocked: still switch for this visit */ }
    setTheme(next);
  };

  return (
    <button className="toggle" role="switch" aria-checked={dark} aria-label="Dark mode" onClick={flip}>
      <span className="track">
        <span className="knob">
          {dark ? (
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M10.5 1.5a6.5 6.5 0 1 0 4 11.6A6 6 0 0 1 10.5 1.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="8" cy="8" r="3" />
              <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" />
            </svg>
          )}
        </span>
      </span>
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}
