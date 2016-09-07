const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const common = {
  devtool: 'source-map',
  resolve: {
    root: path.join(__dirname, 'build')
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'build')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap')
      }
    ]
  }
}

const frontend = {
  entry: path.join(__dirname, 'build/client/index.js'),
  output: {
    path: path.join(__dirname, 'build/lib'),
    filename: 'frontend-bundle.js',
    publicPath: '/static/lib/'
  }
}

const backend = {
  entry: path.join(__dirname, 'build/server/main.js'),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: path.join(__dirname, 'build/lib'),
    filename: 'backend-bundle.js',
    publicPath: '/static'
    // publicPath: '/static/lib/'
  },
  externals: nodeExternals(),
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop'),
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
  ]
}

module.exports = [
  Object.assign({}, common, frontend),
  Object.assign({}, common, backend)
]
