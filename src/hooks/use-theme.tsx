import { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from '@/lib/themes';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    ConfigProvider.config({
      theme: isDark ? lightTheme : darkTheme,
    });
    // Optional: Save theme preference
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return { isDark, toggleTheme };
};