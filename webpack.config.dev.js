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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'source'),
        path.join(__dirname, 'app-home.js')
      ]
    }],
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
