const path = require('path')
const webpack = require('webpack')

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'))

module.exports = {
  devtool: 'eval',
  progress: true,
  resolve: {
    root: path.join(__dirname, 'build')
  },
  entry: [
    'webpack-hot-middleware/client',
    './build/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build/lib'),
    filename: 'bundle.js',
    publicPath: '/static/lib/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    webpackIsomorphicToolsPlugin.development()
  ],
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'build')
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[local]___[hash:base64:5]'
      }
    ],
    query: {
      'plugins': ['react-transform:after'],
      'extra': {
        'react-transform': {
          'transforms': [{
            'transform': 'react-transform-hmr',
            'imports': ['react'],
            'locals': ['module']
          }, {
            'transform': 'react-transform-catch-errors',
            'imports': ['react', 'redbox-react']
          }]
        }
      }
    }
  }
}
