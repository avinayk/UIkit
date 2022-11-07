/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mynormal': ['Avenir-Book'],
        'mysemibold': ['Avenir-Roman'],
        'mybold': ['Avenir-Black'],
      },
      colors: {
        'myprimary': '#ff4d1e',
        'mysecondary': '#353639',
        'mytertiary': '#f4f4f4',
        'myprimary-font': '#0f1d2a',
        'mysecondary-font': '#b3b3b3',
        'mycustom': '#ebeff7',
      },
    },
  },
  plugins: [],
}
