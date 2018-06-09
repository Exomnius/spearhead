const path = require('path');

/**
 * default configuration
 */
const config = {
  /**
   * project structure
   */
  path_base: '.',
  dir_src: 'src',
  dir_dist: 'dist',

  /**
   * webpack configuration
   */
  webpack: {
    performance: {
      hints: false
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true,
      errorDetails: true
    },
  }
};

config.paths = {
  root: base,
  src: base.bind(null, config.dir_src),
  dist: base.bind(null, config.dir_dist)
};

/**
 * eslint
 */
config.eslint = {
  configFile: config.paths.root('.eslintrc.json'),
  ignorePattern: '*.test.*',
  extensions: ['js', 'jsx'],
  cwd: config.paths.src()
};


/**
 * Construct a path starting of from the base_path
 */
function base() {
  const args = [config.path_base, ...arguments];
  return path.resolve.apply(path, args);
}

module.exports = config;
