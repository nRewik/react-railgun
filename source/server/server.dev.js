import webpack from 'webpack'
import chokidar from 'chokidar'
import rimraf from 'rimraf'

import createApp from 'server/app'
import config from '../../webpack.config.dev'

const NODE_PORT = process.env.NODE_PORT || 3000
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0'

const compiler = webpack(config)
const middlewares = [
  (request, response, next) => {
    global.webpackIsomorphicTools.refresh()
    next()
  },
  require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }),
  require('webpack-hot-middleware')(compiler)
]

const app = createApp(middlewares)
app.listen(NODE_PORT, NODE_HOST, error => {
  error ? console.error(error) : console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`)
})

// Do 'hot-reloading' of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const clearCache = () => {
  Object.keys(require.cache).forEach(id => {
    if (/[\/\\]build[\/\\]/.test(id)) delete require.cache[id]
  })
}

// rebuild a babel file from ./source to ./build
const rebuild = sourcePath => {
  const filePath = sourcePath.split('/').slice(1).join('/')
  const buildPath = require('path').join('build', filePath)
  const parentDirectory = require('path').dirname(buildPath)

  const extension = require('path').extname(sourcePath)
  if (extension !== 'js') {
    require('cp')(sourcePath, buildPath, error => {
      if (error) { return console.log(error) }
      clearCache()
      console.log(`rebuilt ${filePath}`)
    })
    return
  }

  require('mkdirp')(parentDirectory, error => {
    if (error) { console.log(error) }
    require('child_process').exec(`babel ${sourcePath} --out-file ${buildPath}`,
      (error, stdout, stderr) => {
        if (error) { console.log(error) }
        clearCache()
        console.log(`rebuilt ${filePath}`)
      }
    )
  })
}

// remove a file in ./build
const remove = sourcePath => {
  const filePath = sourcePath.split('/').slice(1).join('/')
  const buildPath = require('path').join('build', filePath)
  rimraf(buildPath, require('fs'), error => {
    if (error) { console.log(error) }
    clearCache()
    console.log(`deleted ${filePath}`)
  })
}

// watch files in ./source
var watcher = chokidar.watch('./source')
watcher.on('ready', () => {
  watcher.on('add', rebuild)
  watcher.on('change', rebuild)
  watcher.on('unlink', remove)
})

// clear require's cache after built webpack
compiler.plugin('done', () => {
  clearCache()
})
