/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: '',
  important: false,
  separator: ':',
  corePlugins: {
    preflight: true,
  },
}
