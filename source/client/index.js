import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'shared/components/app'
import configureStore from 'shared/configure-store'

// Add the reducer to your store on the `routing` key
const initialState = window.BOOTSTRAP_CLIENT_STATE
const store = configureStore(initialState)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
)
