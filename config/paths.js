const path = require('path')

module.exports = {
  // source files
  src: path.resolve(__dirname, '../src'),
  // production build files
  build: path.resolve(__dirname, '../dist'),
  // static files to copy to build folder
  static: path.resolve(__dirname, '../public'),
}
