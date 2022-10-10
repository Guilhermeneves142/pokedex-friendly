/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#919191",
        dark: "#313131",
        pokedex: "#e3350d",
        games: "#ee6b2f",
        berries: "#e6bc2f",
        pokemon: "#4dad5b",
        bug: "#729f3f",
        dragon: "#53a4cf",
        fairy: "#fdb9e9",
        fire: "#fd7d24",
        ghost: "#7b62a3",
        ground: "#ab9842",
        normal: "#a4acaf",
        psyquic: "#f366b9",
        steel: "#9eb7b8",
        dark: "#707070",
        electric: "#eed535",
        fight: "#d56723",
        flying: "#3dc7ef",
        leaf: "#9bcc50",
        ice: "#51c4e7",
        poison: "#b97fc9",
        rock: "#a38c21",
        water: "#4592c4"
      }
    },
  },
  plugins: [],
};
