/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
      vazir: ['Vazir', 'sans-serif'],
    },
     screens: {
        'md': '768px', 
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}

