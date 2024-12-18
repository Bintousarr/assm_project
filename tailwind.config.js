/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sable-bg': "url('/assets/fond.jpg')",
      },
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
        newRED:'#9B1D21'
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-10px)' },
        },
       'slide-up': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'bounceCustom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'bounceCustom': 'bounceCustom 1s ease-in-out infinite',

      },
    },
    
  },
  plugins: [],
}

