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
