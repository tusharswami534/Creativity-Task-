/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        openSans : ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}