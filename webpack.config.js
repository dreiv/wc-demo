const paths = require('./config/paths')
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
     * CopyWebpackPlugin
     *
     * Copies files from target to destination folder.
     */
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: 'assets',
        ignore: ['*.DS_Store'],
      },
    ]),

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],
	}, require(`./config/webpack.${mode}`)(mode)
	);
