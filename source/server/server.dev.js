import createApp from 'server/app'
import webpack from 'webpack'
import config from '../../webpack.config.dev'

const NODE_PORT = process.env.NODE_PORT || 3000
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0'

const compiler = webpack(config)
const middlewares = [
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }),
  require('webpack-hot-middleware')(compiler)
]

const app = createApp(middlewares)

app.listen(NODE_PORT, NODE_HOST, error => {
  error ? console.error(error) : console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`)
})
