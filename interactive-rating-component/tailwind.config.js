/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: false,
    },
    fontFamily: {
      overpass: ['overpass', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        background: '#141519',
        orange: '#fc7613',
        'dark-blue': '#252a33',
        'very-dark-blue': '#171e28',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'light-grey': 'hsl(217, 12%, 63%)',
      },
    },
  },
  plugins: [],
}
