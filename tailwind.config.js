const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Baskervville, Times, serif'],
      sans: ['Cartridge, "Helvetica Neue",  Helvetica, Arial,"Lucida Grande",sans-serif'],
      header: ['Cartridge, "Helvetica Neue",  Helvetica, Arial,"Lucida Grande",sans-serif']
    },
    colors: {
      primary: {
          '50': '#f5f4f2', 
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
      gray: colors.warmGray,
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
            color: theme('colors.gray.800'),
            h1: {
              color: theme('colors.gray.900')
            },
            h2: {
              color: theme('colors.gray.800')
            },
            h3: {
              color: theme('colors.gray.800')
            },
            h4: {
              color: theme('colors.gray.600')
            },
            h5: {
              color: theme('colors.gray.600')
            },
            h6: {
              color: theme('colors.gray.600')
            },
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            blockquote: {
              borderLeft: 'none',
              fontStyle: 'normal',
              fontSize: '2em',
              paddingLeft: '0',
              lineHeight: '1.25em'
            },
            figure: {
              figcaption: {
                fontSize: '1.5em'
              }
            },
            'ul > li::before': {
              backgroundColor: theme('colors.primary.500')
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
