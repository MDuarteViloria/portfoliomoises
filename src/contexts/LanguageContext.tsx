import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Language {
  code: 'en' | 'es'
  name: string
  flag: string
}

interface Translations {
  nav: {
    home: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    description: string
    cta: string
    github: string
    linkedin: string
    email: string
  }
  skills: {
    title: string
    subtitle: string
    levels: {
      beginner: string
      intermediate: string
      advanced: string
      expert: string
    }
  }
  projects: {
    title: string
    subtitle: string
    viewProject: string
    viewCode: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
    success: string
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
]

const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Moises Duarte',
      title: 'Fullstack Developer',
      description: 'Passionate about creating elegant and functional solutions. I love learning and experimenting with new technologies. Currently looking for opportunities to grow and contribute to exciting projects.',
      cta: 'Get In Touch',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies I work with',
      levels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Moises Duarte',
      title: 'Desarrollador Fullstack',
      description: 'Apasionado por crear soluciones elegantes y funcionales. Me encanta aprender y experimentar con nuevas tecnologías. Actualmente busco oportunidades para crecer y contribuir en proyectos emocionantes.',
      cta: 'Contáctame',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      subtitle: 'Tecnologías con las que trabajo',
      levels: {
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto',
      },
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunos de mis trabajos recientes',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'Trabajemos juntos',
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado exitosamente!',
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0])

  const value = {
    language,
    setLanguage,
    t: translations[language.code],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { languages }