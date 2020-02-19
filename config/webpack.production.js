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
  output: {
    publicPath: '/wc-demo/',
    filename: '[name].[contenthash:8].js',
  },
});
