import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        merriweather: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          dark: '#2D2925', // Ink brown
          green: '#536B45', // Moss green
          teal: '#6D8B7B', // Muted field blue-green
          cream: '#F4EFE6', // Paper
          yellow: '#D9B86C', // Ochre
          brown: '#9B6344', // Clay
          'brown-dark': '#58352C', // Dark umber
        },
        gray: {
          50: '#F8F7F5',
          100: '#F1F2F2',
          200: '#DFE3E4',
          300: '#C6CCCF',
          400: '#8B949E',
          500: '#606875',
          600: '#525B69',
          700: '#414955',
          800: '#2F353E',
          900: '#1C1F23',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        'primary-accent': '#536B45',
      },
    },
  },
  plugins: [],
};
export default config;
