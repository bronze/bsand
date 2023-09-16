const defaultTheme=require('tailwindcss/defaultTheme');
const colors=require('tailwindcss/colors')

module.exports={
  content: ["./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,webc}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        // https://www.tailwindtoolbox.com/guides/adding-fonts-to-tailwind-css
        'sans': ['Inter Variable', ...defaultTheme.fontFamily.sans],
        'serif': ['Noto Serif Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        background: {
          DEFAULT: "rgb(var(--color-background-default) / <alpha-value>)",
          muted: "rgb(var(--color-background-muted) / <alpha-value>)",
          accent: "rgb(var(--color-background-accent) / <alpha-value>)",
          light: "rgb(var(--color-background-light) / <alpha-value>)",
          dark: "rgb(var(--color-background-dark) / <alpha-value>)",
        },
        text: {
          light: "rgb(var(--color-text-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-text-default) / <alpha-value>)",
          dark: "rgb(var(--color-text-dark) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
        'tahiti': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        // ...
      },
      typography: ({theme}) => {
        return {
          DEFAULT: {
            css: {
              '--tw-prose-headings': 'var(--color-text-default)', // opacity
              '--tw-prose-body': 'var(--color-text-default)',
              '--tw-prose-links': 'var(--color-text-default)',// opacity
              a: {
                // change anchor color and on hover
                // color: '#03989E',
                // color: 'rgb(var(--color-primary) / 1)',
                // https://stackoverflow.com/questions/72831003/tailwind-custom-theme-color-opacity-not-being-applied
                // https://tailwindcss.com/blog/tailwindcss-v3-1#easier-css-variable-color-configuration
                // color: withOpacity('--color-accent'),
                '&:hover': { // could be any. It's like extending css selector
                  // color: '#03989E',
                  color: 'rgb(var(--color-primary) / 1)',
                  // 'color': 'var(--color-primary)',
                  // color: withOpacity('--color-primary'),
                  // fill: withOpacity('--color-primary'),
                },
              },
            }
          },
        }
      },
    },

  },
  variants: {},
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  // plugins: [require('@tailwindcss/typography')],
};
