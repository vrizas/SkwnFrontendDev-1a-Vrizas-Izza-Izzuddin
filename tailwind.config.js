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
      'softBrown': '#817253',
      'darkBlue': '#101828',
      'lightBlue': '#667085',
      'lightGray': '#FCFAFA',
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