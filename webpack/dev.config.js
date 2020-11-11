const path = require('path');

const webpack = require('webpack');

const express = require('express');

const devMiddleware = require('webpack-dev-middleware');

const hotMiddleware = require('webpack-hot-middleware');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');

const app = express();

const complier = webpack({
  mode: 'development',
  entry: {
    index: [
      path.resolve(process.cwd(), 'package/main.js'),
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name]_[fullhash:6].js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public/index.html'),
      filename: 'index.html',
      title: 'qq-theme-framework-app',
    }),
    new VueLoaderPlugin(),
  ],
});

app.use(devMiddleware(complier));
app.use(hotMiddleware(complier));

app.listen(7777);
