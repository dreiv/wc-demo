const OfflinePlugin = require('offline-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ],
  },
  plugins: [
    new OfflinePlugin({
      publicPath: '/wc-demo/',
      autoUpdate: true,
    }),
  ],
  output: {
    publicPath: '/wc-demo/',
    filename: '[name].[contenthash:4].js',
  },
});
