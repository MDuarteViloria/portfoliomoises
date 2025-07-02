import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface Theme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const themes: Theme[] = [
  {
    id: 'ocean',
    name: 'Ocean Blue',
    colors: {
      primary: '#00d4ff',
      secondary: '#0099cc',
      accent: '#ff6b6b',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ffb347',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    colors: {
      primary: '#00ff88',
      secondary: '#00cc6a',
      accent: '#88ff00',
    },
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    colors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#f59e0b',
    },
  },
  {
    id: 'rose',
    name: 'Rose Pink',
    colors: {
      primary: '#f43f5e',
      secondary: '#e11d48',
      accent: '#06b6d4',
    },
  },
]

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themes[0])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.id)
  }, [theme])

  const value = {
    theme,
    setTheme,
    themes,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}