const path = require('path');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const runner = require('./runner');

const compiler = webpack({
  mode: 'production',
  entry: path.resolve(process.cwd(), 'src/index.js'),
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: 'index.js',
  },
  module: {
    rules: [],
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
});

runner(compiler);
