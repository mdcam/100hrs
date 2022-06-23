/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}