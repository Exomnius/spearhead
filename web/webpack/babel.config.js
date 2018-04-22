module.exports = {
  "presets": [
    ['babel-preset-env', {
      targets: {
        browsers: ['last 2 versions']
      }
    }],
    'babel-preset-stage-2',
    'babel-preset-react'
  ],
  "plugins": [
    'babel-plugin-transform-runtime',
    'babel-plugin-add-module-exports'
  ]
};
