import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a',
        },
        primary: '#d4a574',
        moss: '#8b9d6f',
        text: {
          DEFAULT: '#e8e8e8',
          muted: '#a8a8a8',
        },
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Palatino', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
      },
    },
  },
  plugins: [],
};

export default config;
