const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
      teal: colors.teal
    }
  },
  variants: {
    extend: {},
    container: [],
  },
  plugins: [],
}
