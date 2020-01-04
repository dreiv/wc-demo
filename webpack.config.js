const merge = require('webpack-merge');

module.exports = (env, { mode = 'production' }) =>
  merge(
    require('./config/webpack.common')(mode),
    require(`./config/webpack.${mode}`)(),
  );
