/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '18px': '18px',
    },
    fontFamily: {
      outfit: 'outfit, sans-serif',
    },
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        main: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
}
