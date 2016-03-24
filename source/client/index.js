import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from 'shared/reducers'
import App from 'shared/components/app'

// Add the reducer to your store on the `routing` key
const initialState = window.BOOTSTRAP_CLIENT_STATE
const store = createStore(combineReducers({...reducers}), initialState)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept()
}

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
