const path = require('path');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

const runner = require('./runner');

const compiler = webpack({
  mode: 'production',
  entry: path.resolve(process.cwd(), 'src/index.js'),
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '@src': path.resolve(process.cwd(), 'src'),
      '@package': path.resolve(process.cwd(), 'package'),
    },
    extensions: ['.vue', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
});

runner(compiler);
