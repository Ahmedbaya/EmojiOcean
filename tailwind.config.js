/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'float': 'float 6s infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      backgroundImage: {
        'ocean-pattern': 'linear-gradient(to bottom, #3B82F6, #1E40AF)',
      },
    },
  },
  plugins: [],
};