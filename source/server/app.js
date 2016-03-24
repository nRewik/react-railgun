import path from 'path'
import express from 'express'
import settings from 'server/settings'

// import mainRoute from './routes/main'

const app = express()

const buildDir = '/build'
const staticDir = path.join(settings.APP_HOME, buildDir)

app.use('/static', express.static(staticDir))
// app.use('/', mainRoute)

// TODO: Use react-redux-router
//
import React from 'react'
import render from 'server/render'
import renderLayout from 'server/render-layout'
import configureStore from 'shared/configure-store'

const store = configureStore()
const initialState = store.getState()

app.get('/', (request, response) => {
  const renderProps = initialState
  const rootMarkup = render(React)(renderProps, store)
  response.status(200).send(renderLayout({ settings, rootMarkup, initialState }))
})

export default app
