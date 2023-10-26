/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": "Clash Display",
      },
      width: {
        58: "14.5rem",
        98: "31.063rem",
      },
      height: {
        66: "17rem",
        84: "22rem",
        99: "37.313rem",
      },
    },
  },
  plugins: [],
}

