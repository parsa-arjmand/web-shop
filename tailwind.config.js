/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#f0f0f3",
        primary: "#222222",
        textLight: "#4d4d4d",
      },
    },
  },
  plugins: [],
};
