const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  modules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
