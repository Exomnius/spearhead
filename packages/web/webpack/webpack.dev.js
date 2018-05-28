const config = require('./webpack.config');
const babelConfig = require('../babel.config');
const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  name: 'client',
  target: 'web',
  performance: config.webpack.performance,
  stats: config.webpack.stats,
  mode: 'development',
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  entry: {
    'main': [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
      'babel-polyfill',
      config.paths.src('client.jsx')
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: config.paths.dist('js')
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
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.HotModuleReplacementPlugin(),
    new ReactLoadablePlugin({
      filename: config.paths.dist('react-loadable.json')
    })
  ]
};
