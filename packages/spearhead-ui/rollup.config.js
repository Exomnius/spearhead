import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import pkg from './package.json'


const FORMATS = {
  UMD: 'umd',
  ES: 'es',
  CJS: 'cjs'
};
const allowedFormats = [FORMATS.UMD, FORMATS.ES, FORMATS.CJS];

const bundle = (fileFormat, {format, minify}) => {
  if (!allowedFormats.includes(format)) {
    throw new Error(`Invalid format given: ${format}`);
  }

  const shouldMinify = minify && format === FORMATS.UMD;
  const cssExportMap = {};
  const externals = format === FORMATS.UMD
    ? Object.keys(pkg.peerDependencies || {})
    : [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ];

  return {
    input: 'src/index.js',
    output: {
      file: fileFormat.replace('{format}', shouldMinify ? `${format}.min` : format),
      format,
      name: 'spearhead-ui',
      exports: 'named',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    },
    external: externals,
    plugins: [
      resolve({ jsnext: true, main: true }),
      postcss({
        plugins: [
          postcssModules({
            getJSON (id, exportTokens) {
              cssExportMap[id] = exportTokens;
            }
          })
        ],
        getExportNamed: false,
        getExport (id) {
          return cssExportMap[id];
        },
        extract: 'dist/styles.css',
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
      format === FORMATS.UMD
        ?  replace({'process.env.NODE_ENV': JSON.stringify(shouldMinify ? 'production' : 'development')})
        : null,
      shouldMinify ? uglify() : null
    ].filter(Boolean)
  };
};

export default [
  bundle('dist/spearhead-ui.{format}.js', {format: FORMATS.UMD, minify: true}),
  bundle('dist/spearhead-ui.{format}.js', {format: FORMATS.CJS}),
  bundle('dist/spearhead-ui.{format}.js', {format: FORMATS.ES})
];
