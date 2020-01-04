const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = mode => ({
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode,
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: [paths.src + '/index.js'],

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  /**
   * Plugins
   *
   * Customize the Webpack build process.
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      title: 'Features of web components',
      favicon: paths.public + '/favicon.png',
      template: paths.public + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
});
