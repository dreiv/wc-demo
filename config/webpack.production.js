const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => ({
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  output: {
    publicPath: '/wc-demo/',
    filename: '[name].[contenthash:4].js',
  },
});
