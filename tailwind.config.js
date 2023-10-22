/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: '#4e54c8',
        secondary: '#8f94fb'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.customBackground': {
          'background': "url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg') no-repeat right 0.8em center / 1.4em, linear-gradient(to left, rgba(8, 145, 178, .5) 3em, rgba(8, 145, 178, 0.3) 3em)",
        },
        '.no-spin::-webkit-inner-spin-button, .no-spin::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.no-spin': {
          '-moz-appearance': 'textfield',
        },
        'circle': {
          'transition': 'left 0.3s ease'
        }
      };
      addUtilities(newUtilities);
    }
  ],
}

