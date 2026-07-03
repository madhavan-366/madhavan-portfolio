import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved !== 'light'; // default to dark
    setIsDark(dark);
    applyTheme(dark);
  }, []);

  const applyTheme = (dark) => {
    const html = document.documentElement;
    const body = document.body;
    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
      body.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      body.classList.add('light');
    }
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
}
