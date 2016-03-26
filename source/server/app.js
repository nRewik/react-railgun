import path from 'path'
import express from 'express'

import settings from 'server/settings'
import mainRoute from 'server/routes/main'

export default (middlewares = []) => {
  const app = express()

  const buildDir = '/build'
  const staticDir = path.join(settings.APP_HOME, buildDir)
  app.use('/static', express.static(staticDir))

  middlewares.map(middleware => {
    app.use(middleware)
  })

  app.use('/', mainRoute)
  return app
}
