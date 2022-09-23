/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#2F241F',
      'secondary': '#553B33',
      'caramel': '#E5F0B6',
      'soft-brown': '#817253',
      'dark-blue': '#101828',
      'light-blue': '#667085',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {
      gridTemplateColumns: {
        'hero': '2fr 1fr',
      }
    }
  },
  plugins: [],
}