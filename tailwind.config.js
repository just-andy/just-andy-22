const colors = require('tailwindcss/colors');
const { fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Baskervville, Times, serif'],
      sans: ['League Spartan, "Helvetica Neue",  Helvetica, Arial,"Lucida Grande",sans-serif'],
      header: ['League Spartan, "Helvetica Neue",  Helvetica, Arial,"Lucida Grande",sans-serif']
    },
    colors: {
      primary: {
          '50': '#fff7f5', 
          '100': '#ffefeb', 
          '200': '#ffd7cc', 
          '300': '#ffbfad', 
          '400': '#ff8e70', 
          '500': '#FF5E33', 
          '600': '#e6552e', 
          '700': '#bf4726', 
          '800': '#99381f', 
          '900': '#7d2e19'
      },
      secondary: {
        '50': '#fbf9f9', 
        '100': '#f7f3f2', 
        '200': '#eae1df', 
        '300': '#ddcfcb', 
        '400': '#c4aaa4', 
        '500': '#AB867D', 
        '600': '#9a7971', 
        '700': '#80655e', 
        '800': '#67504b', 
        '900': '#54423d'
    },
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
            fontFamily: 'Baskervville, Times, serif',
            h1: {
              color: theme('colors.gray.800')
            },
            h2: {
              color: theme('colors.gray.700')
            },
            h3: {
              color: theme('colors.gray.700')
            },
            h4: {
              color: theme('colors.gray.700')
            },
            h5: {
              color: theme('colors.gray.700')
            },
            h6: {
              color: theme('colors.gray.700')
            },
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            }
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
