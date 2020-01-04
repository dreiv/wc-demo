const webpackMerge = require('webpack-merge');

module.exports = (env, { mode = 'production' }) =>
	webpackMerge({
		entry: './src/index.js',
		output: {
			path: __dirname + '/dist',
			publicPath: '/',
			filename: 'bundle.js'
		},
	}, require(`./config/webpack.${mode}`)(mode)
	);
