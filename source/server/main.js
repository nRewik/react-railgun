const projectBasePath = require('path').resolve(__dirname, '../../')

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../../webpack-isomorphic-tools'))
  .development(process.env.NODE_ENV === 'development')
  .server(projectBasePath, () => {
    const server = process.env.NODE_ENV === 'development' ? './server.dev' : './server'
    require(server)
  })
