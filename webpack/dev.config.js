const webpack = require('webpack');

const runner = require('./runner');

const complier = webpack({
  extensions: ['index.vue', 'index.js', 'js'],
});

runner(complier);
