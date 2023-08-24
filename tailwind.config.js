const defaultTheme=require('tailwindcss/defaultTheme');

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
  // plugins: [require('@tailwindcss/typography')],
};
