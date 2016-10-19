const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

var common = {
  /**
   *
   * @type {Object, String, Array}
   *
   * If you pass a string: The string is resolved to a module which is loaded upon startup.
   *
   * If you pass an array: All modules are loaded upon startup. The last one is exported.
   *    应该是说所有列出来的入口会被合并成module
   *
   * If you pass an object: Multiple entry bundles are created. The key is the chunk name. The value can be a string or an array.
   *    这个时候每个chunk都有一个webpack的runtime，一个页面只能import一个chunk，或者使用webpack.optimize.CommonsChunkPlugin来将runtime移入
   *    某个chunk中
   *
   */
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'webpack demo'})
  ]
};

var config;
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(common, {});
    break;
  default:
    config = merge(common, {});
}

module.exports = validate(config);
