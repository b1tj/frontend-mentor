/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'kumbh-sans': 'Kumbh Sans',
    },
    fontSize: {
      '18px': '18px',
    },
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'dark-grayrish-blue': 'hsl(227, 10%, 46%)',
        'very-dark-blue': 'hsl(229, 23%, 23%)',
        'dark-cyan': 'hsl(185, 75%, 39%)',
      },
    },
  },
  plugins: [],
}
