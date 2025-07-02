'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, ColorPalette, Translations } from '@/app/types';

interface AppContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  colorPalette: ColorPalette;
  setColorPalette: (palette: ColorPalette) => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  translations: Translations;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export const colorPalettes: ColorPalette[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    colors: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      tertiary: '#1E3A8A',
      highlight: '#60A5FA',
      accent: '#DBEAFE',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    colors: {
      primary: '#F97316',
      secondary: '#EA580C',
      tertiary: '#C2410C',
      highlight: '#FB923C',
      accent: '#FED7AA',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    colors: {
      primary: '#059669',
      secondary: '#047857',
      tertiary: '#065F46',
      highlight: '#34D399',
      accent: '#A7F3D0',
    },
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    colors: {
      primary: '#7C3AED',
      secondary: '#6D28D9',
      tertiary: '#5B21B6',
      highlight: '#A78BFA',
      accent: '#DDD6FE',
    },
  },
  {
    id: 'rose',
    name: 'Rose Pink',
    colors: {
      primary: '#E11D48',
      secondary: '#BE123C',
      tertiary: '#9F1239',
      highlight: '#FB7185',
      accent: '#FECDD3',
    },
  },
];

const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    home: {
      title: 'Moises Duarte',
      subtitle: 'Desarrollador Fullstack',
      description: '¡Hola! Soy Moises, un desarrollador fullstack apasionado por crear soluciones elegantes y funcionales. Me encanta aprender y experimentar con nuevas tecnologías. Actualmente estoy buscando oportunidades para crecer y contribuir en proyectos emocionantes.',
      github: 'Github',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    skills: {
      title: 'Habilidades',
      levels: {
        novice: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto',
      },
    },
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema',
    },
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      title: 'Moises Duarte',
      subtitle: 'Fullstack Developer',
      description: 'Hello! I\'m Moises, a fullstack developer passionate about creating elegant and functional solutions. I love learning and experimenting with new technologies. I\'m currently looking for opportunities to grow and contribute to exciting projects.',
      github: 'Github',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    skills: {
      title: 'Skills',
      levels: {
        novice: 'Novice',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',
      },
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
  },
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [colorPalette, setColorPalette] = useState<ColorPalette>(colorPalettes[0]);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const savedPalette = localStorage.getItem('colorPalette');
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system';

    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setLanguage(lang);
    }

    if (savedPalette) {
      const palette = colorPalettes.find(p => p.id === savedPalette);
      if (palette) setColorPalette(palette);
    }

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  useEffect(() => {
    applyColorPalette(colorPalette);
  }, [colorPalette]);

  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
  };

  const applyColorPalette = (palette: ColorPalette) => {
    const root = window.document.documentElement;
    root.style.setProperty('--primary-color', palette.colors.primary);
    root.style.setProperty('--secondary-color', palette.colors.secondary);
    root.style.setProperty('--tertiary-color', palette.colors.tertiary);
    root.style.setProperty('--highlight-color', palette.colors.highlight);
    root.style.setProperty('--accent-color', palette.colors.accent);
  };

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage.code);
  };

  const handleSetColorPalette = (newPalette: ColorPalette) => {
    setColorPalette(newPalette);
    localStorage.setItem('colorPalette', newPalette.id);
  };

  const handleSetTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        colorPalette,
        setColorPalette: handleSetColorPalette,
        theme,
        setTheme: handleSetTheme,
        translations: translations[language.code],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};