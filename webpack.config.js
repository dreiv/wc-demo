const paths = require('./config/paths')
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode = 'production' }) =>
	webpackMerge({
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
	}, require(`./config/webpack.${mode}`)(mode)
	);
