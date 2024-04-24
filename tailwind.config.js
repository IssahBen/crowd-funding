/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '540px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {

        moderate_cyan: 'hsl(176, 50%, 47%)',
        dark_cyan: 'hsl(176, 72%, 28%)',
        black: 'hsl(0, 0%, 0%)',
        dark_gray: 'hsl(0, 0%, 48%)'
      },
      fontFamily: {
        sans: ['Commissioner', 'sans serif'],

      }
    },
  },
  plugins: [],
}

