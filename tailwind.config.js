/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'base': '1200px',
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
}