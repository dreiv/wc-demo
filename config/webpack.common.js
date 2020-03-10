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
      favicon: paths.public + '/favicon.svg',
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
        test: /\.s[ac]ss$/,
        exclude: /[\\/]cases[\\/].*\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      /**
       * Styles
       *
       * Transforming SCSS file into CSS string.
       */
      {
        test: /\.scss$/,
        include: /[\\/]cases[\\/].*\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },

      /**
       * Export into HTML files
       *
       * exporting the HTML into their own .html file,
       * to serve them directly instead of injecting with javascript.
       */
      {
        test: /\.html$/,
        exclude: /public/,
        use: [
          // Writes the html file
          'file-loader?name=[name].[ext]',
          // Parses the javascript back into a proper html file
          'extract-loader',
          // Parses the URLs
          'html-loader',
        ],
      },
    ],
  },
});
