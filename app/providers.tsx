// app/providers.tsx
'use client';
import { HeroUIProvider } from '@heroui/react';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Contexto del tema
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement;
  
    // Determina si el modo oscuro debe aplicarse
    const isDark =
      theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
    console.log(`Applying theme: ${theme}, isDark: ${isDark}`); // Depuración
  
    // Elimina las clases existentes
    root.classList.remove('light', 'dark');
  
    // Agrega la clase correspondiente
    root.classList.add(isDark ? 'dark' : 'light');
  };

  const handleSetTheme = (newTheme: Theme) => {
    console.log(`Setting theme: ${newTheme}`); // Depuración
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Proveedor principal
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HeroUIProvider>
  );
}