/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri", "serif"],
        qsans: ["Quattrocento Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
