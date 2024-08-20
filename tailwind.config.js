/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        customBlue: 'rgb(1, 153, 202)',
      }
      
    },
    
  },
  plugins: [],
}

