/** @type {import('tailwindcss').Config} */
const { Orbitron } = require("next/font/google");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
