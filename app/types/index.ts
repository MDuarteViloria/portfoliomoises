export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    highlight: string;
    accent: string;
  };
}

export interface Translations {
  nav: {
    home: string;
    skills: string;
    projects: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    github: string;
    linkedin: string;
    email: string;
  };
  skills: {
    title: string;
    levels: {
      novice: string;
      intermediate: string;
      advanced: string;
      expert: string;
    };
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
}