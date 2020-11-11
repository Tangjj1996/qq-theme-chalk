const path = require('path');

const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const runner = require('./runner');

const compiler = webpack({
  mode: 'production',
  entry: {
    index: path.resolve(process.cwd(), 'src/index.js'),
  },
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      '@asset': path.resolve(process.cwd(), 'asset'),
      '@src': path.resolve(process.cwd(), 'src'),
      '@package': path.resolve(process.cwd(), 'package'),
    },
    extensions: ['.vue', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
        exclude: /node_modules/,
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
