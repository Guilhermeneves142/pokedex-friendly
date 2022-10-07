/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#919191",
        pokedex: "#e3350d",
        games: "#ee6b2f",
        berries: "#e6bc2f",
        pokemon: "#4dad5b"
      }
    },
  },
  plugins: [],
};
