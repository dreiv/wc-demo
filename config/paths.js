const path = require('path')

module.exports = {
  // source files
  src: path.resolve(__dirname, '../src'),
  // production build files
  build: path.resolve(__dirname, '../dist'),
  // public files to copy to build folder
  public: path.resolve(__dirname, '../public'),
}
