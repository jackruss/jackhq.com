var atomify = require('atomify');

atomify({
  debug: true,
  css: {
    entry: './app/index.css',
    alias: 'bundle.css',
    assets: {
      prefix: '/font/',
      dest: 'public/fonts'
    }
  },
  js: {
    entry: './app/index.js',
    output: './public/bundle.js'
  }
});