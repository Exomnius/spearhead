global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEV__ = process.env.NODE_ENV !== 'production';

const babelConfig  = require('./../babel.config');
require('babel-core/register')({
  ...babelConfig,
  plugins: [
    ...babelConfig.plugins,
    'syntax-dynamic-import',
    'dynamic-import-node'
  ]
});

require('./server.jsx');
