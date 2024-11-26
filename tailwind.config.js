/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],

      },
      fontSize: {
        '26px': '26px', // Custom font size of 26px
      },
      lineHeight: {
        '30': '30px', // Custom line height of 30px
      },
      colors: {
        customBlue: 'rgb(1, 153, 202)',
      }
      
    },
    
  },
  plugins: [],
}

