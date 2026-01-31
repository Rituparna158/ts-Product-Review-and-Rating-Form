import { useState } from 'react';
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return { theme, toggleTheme };
};
export default useTheme;
