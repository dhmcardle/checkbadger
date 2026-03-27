/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B1F3A",
          light: "#1E3A5F",
        },
        accent: {
          DEFAULT: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};