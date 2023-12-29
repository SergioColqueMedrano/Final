const { theme } = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('../img/adventista.png')"
      }),
    colors:{
      "crema": "#c5c5bd",
      "verde-oscuro": "#325b4b"
    }
    },
  },
  variants: {

  },
  plugins: [],
}
