import path from 'path'
import express from 'express'

import settings from 'server/settings'
import mainRoute from 'server/routes/main'

export default (middlewares = []) => {
  const app = express()

  // Apply other middlewares first
  middlewares.map(middleware => {
    app.use(middleware)
  })

  const libDir = path.join(settings.APP_HOME, '/build/lib')
  app.use('/static/lib', express.static(libDir))

  const staticDir = path.join(settings.APP_HOME, '/static')
  app.use('/static', express.static(staticDir))

  app.use('/', mainRoute)

  return app
}
