/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        alagappa: {
          blue: '#003366',
          darkblue: '#002244',
          maroon: '#800000',
          gold: '#D4AF37',
          goldlight: '#F6D365',
          accent: '#0284C7'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
