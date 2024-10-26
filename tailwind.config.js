/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        plexSans: ["PlexSans"],
      },
      colors: {
        primaryYellow: "#C39351",
        secondaryYellow: "#CE8620",
        richBlack: "#00171F",
        },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
