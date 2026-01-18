import { useEffect, useState } from 'react';

export const useDarkMode = (): ['dark' | 'light', (theme: 'dark' | 'light') => void] => {
  const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  const [theme, setTheme] = useState<'dark' | 'light'>(storedTheme || 'light');

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
