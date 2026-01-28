/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        poppins: ["Poppins", "sans-serif"],
          manrope: ["Manrope", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [],
};