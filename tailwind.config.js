const defaultTheme=require('tailwindcss/defaultTheme');
const colors=require('tailwindcss/colors')

module.exports={
  content: ["./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,webc}"],
  darkMode: 'class',
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
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
