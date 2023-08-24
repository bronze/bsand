module.exports={
  tailwindConfig: './tailwind.config.js', // ⚠️ Set it so you're sure to call up the Tailwind config in the right place.
  useTabs: false,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: false,
  bracketSameLine: true,
  trailingComma: 'none',
  quoteProps: 'consistent',
  plugins: [
    'prettier-plugin-organize-attributes',
    'prettier-plugin-tailwindcss',  // ⚠️ Order is very important place Tailwind prettier plugin at the end
  ],
  overrides: [ // ⚠️ If you are using edge you need also set this to add support for edge
    {files: '*.njk', options: {parser: 'html', }, },
  ],
};
