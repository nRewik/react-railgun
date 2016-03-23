const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  resolve: {
    root: path.join(__dirname, 'source')
  },
  entry: [
    'webpack-hot-middleware/client',
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'source'),
        path.join(__dirname, 'app-home.js')
      ]
    }]
  }
}
