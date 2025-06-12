/** @type {import('tailwindcss').Config} */
export default {
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
