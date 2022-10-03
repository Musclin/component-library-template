const plugins = [
  require('tailwindcss')('./tailwind.config.js'),
  require('postcss-import'),
  require('@tailwindcss/nesting')(require('postcss-nesting')),
  require('autoprefixer'),
]

if (process.env.NODE_ENV == 'production') {
  plugins.push(require('cssnano')({ preset: 'default' }));
}

module.exports = {
  plugins
};
