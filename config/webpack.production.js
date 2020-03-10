const OfflinePlugin = require('offline-plugin');

module.exports = () => ({
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
