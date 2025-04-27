// tailwind.config.mjs
import { type } from 'tailwindcss'
const {heroui} = require("@heroui/react");

export default {
  darkMode: 'selector', // o 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        highlight: 'var(--highlight-color)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      duration: {
        fast: "1s",
        normal: "3s",
        slow: "5s",
    },
    },
  },
  plugins: [
    require('@designbycode/tailwindcss-text-glitch'),
    heroui(),
  ],
  
}
