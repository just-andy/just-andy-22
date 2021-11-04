const { NONAME } = require('dns');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif'],
      header: ['Ostrich Sans, "Helvetica Neue",  Helvetica, Arial,"Lucida Grande",sans-serif']
    },
    colors: {
      primary: colors.sky,
      secondary: colors.violet,
      gray: colors.coolGray,
      white: colors.white,
      positive: colors.green,
      negative: colors.red,
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: 'Poppins, Helvetica, sans-serif',
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
          }
        }
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
