/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'sans-serif'],
        coral: ['"Coral Pixels"', 'sans-serif'],
        jacquard12: ['"Jacquard 12"', 'cursive'],
        jacquard24: ['"Jacquard 24 Charted"', 'cursive'],
        micro5: ['"Micro 5"', 'sans-serif'],
        micro5charted: ['"Micro 5 Charted"', 'sans-serif'],
        tiny5: ['"Tiny5"', 'sans-serif'],
      },
      colors: {
        'custom-black': '#061E29',
        'custom-navy': '#1D546D',
        'custom-teal': '#5F9598',
        'custom-grey': '#F3F4F4',
        'custom-beige': '#FAF3E1',
        'custom-beige2': '#F5E7C6',
        'custom-orange': '#FF6D1F',
        'custom-black2': '#222222',
      },
        keyframes: {
          gradient: {
            "0%": {backgroundPosition: "0%, 50%"}, 
            "100%": {backgroundPosition: "100%, 50%"}
          }
        },
        animation: {
        gradient: "gradient 6s linear infinite"
      }
    },
  },
  plugins: [],
}