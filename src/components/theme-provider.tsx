"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { lightTheme, darkTheme } from '@/lib/themes';

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "react-codex-theme",
  ...props
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (currentTheme === 'system') {
        setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange(); // Initial check
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [currentTheme]);

  const value = {
    theme: currentTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setCurrentTheme(theme);
    },
  };

  const effectiveTheme = currentTheme === 'system' 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')
    : currentTheme;

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      <ConfigProvider
        theme={{
          ...(effectiveTheme === 'dark' ? darkTheme : lightTheme),
          algorithm: effectiveTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};