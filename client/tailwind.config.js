/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Noto Sans', 'sans-serif']
      },
      colors: {
        'dark-blue': '#003C43',
        'teal': '#135D66',
        'light-teal': '#77B0AA',
        'off-white': '#E3FEF7',
      },
      animation: {
        'fade-in-left': 'fadeInLeft 2s ease-in-out',
        'fade-in-right': 'fadeInRight 2s ease-in-out'
      },
    },
  },
  plugins: [],
}