require('babel-polyfill');

const babelConfig = require('./../babel.config');

if (Array.isArray(babelConfig.plugins)) {
    babelConfig.plugins.push('dynamic-import-node');
}

require('babel-register')(babelConfig);