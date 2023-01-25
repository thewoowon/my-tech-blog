/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xss: '390px',
      // => @media (min-width: 390px) { ... }
      xs: '475px',
      // => @media (min-width: 475px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: colors.teal,
      gray: colors.neutral,
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.600')} !important`,
            },
            code: { color: theme('colors.primary.400') },
          },
          h1: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900'),
          },
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.900'),
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.900'),
          },
          'h4,h5,h6': {
            color: theme('colors.gray.900'),
          },
          pre: {
            backgroundColor: theme('colors.gray.800'),
          },
          code: {
            color: theme('colors.pink.500'),
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem',
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          details: {
            backgroundColor: theme('colors.gray.100'),
            paddingLeft: '4px',
            paddingRight: '4px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '0.25rem',
          },
          hr: { borderColor: theme('colors.gray.200') },
          'ol li::marker': {
            fontWeight: '600',
            color: theme('colors.gray.500'),
          },
          'ul li::marker': {
            backgroundColor: theme('colors.gray.500'),
          },
          strong: { color: theme('colors.gray.600') },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.200'),
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.400')} !important`,
            },
            code: { color: theme('colors.primary.400') },
          },
          h1: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.100'),
          },
          h2: {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.100'),
          },
          h3: {
            fontWeight: '600',
            color: theme('colors.gray.100'),
          },
          'h4,h5,h6': {
            color: theme('colors.gray.100'),
          },
          pre: {
            backgroundColor: theme('colors.gray.800'),
          },
          code: {
            backgroundColor: theme('colors.gray.800'),
          },
          details: {
            backgroundColor: theme('colors.gray.800'),
          },
          hr: { borderColor: theme('colors.gray.700') },
          'ol li::marker': {
            fontWeight: '600',
            color: theme('colors.gray.400'),
          },
          'ul li::marker': {
            backgroundColor: theme('colors.gray.400'),
          },
          strong: { color: theme('colors.gray.100') },
          thead: {
            th: {
              color: theme('colors.gray.100'),
            },
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
          blockquote: {
            color: theme('colors.gray.100'),
            borderLeftColor: theme('colors.gray.700'),
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
};
