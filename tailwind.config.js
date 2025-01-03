/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        jersey: ["JerseyM54", "sans-serif"],
        joan: ["Joan", "serif"],
      },
    },
  },
  plugins: [],
};
