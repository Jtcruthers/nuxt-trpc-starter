/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    darkTheme: false,
    themes: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
