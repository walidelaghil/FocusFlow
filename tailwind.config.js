import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glass: 'rgba(20, 20, 23, 0.65)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        primary: '#EAEAEA',
        muted: '#888888',
        accent: '#3B82F6',
        warning: '#F59E0B',
        critical: '#EF4444'
      },
      borderRadius: {
        pill: '9999px',
        card: '24px'
      },
      boxShadow: {
        glow: '0px 10px 40px -10px rgba(0,0,0,0.5)'
      },
      fontFamily: {
        sans: ['Satoshi', 'Manrope', 'sans-serif']
      }
    }
  },
  plugins: [forms]
};
