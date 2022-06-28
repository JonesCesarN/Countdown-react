/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      colors: {
        "black": "var(--black)",
        "purple": "var(--purple)",
        "light-grey": "var(--light-grey)",
        "txt-color": "var(--text-color)",
      },
    },
  },
  plugins: [],
}
