const config = require('./webpack.config');
const babelConfig = require('../babel.config');
const webpack = require('webpack');

module.exports = {
  name: config.name,
  target: config.target,
  performance: config.webpack.performance,
  stats: config.webpack.stats,
  mode: 'development',
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  entry: {
    'main': [
      'babel-polyfill',
      config.paths.src('client.jsx')
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: config.paths.dist()
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: babelConfig,
      }, {
        loader: 'eslint-loader',
        options: config.eslint
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': true,
      '__DEVTOOLS__': true
    }),

    new webpack.IgnorePlugin(/webpack-stats\.json$/)
  ]
};
