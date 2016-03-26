import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerReducer } from 'react-router-redux'

import reducers from 'shared/reducers'

const logger = createLogger()
const rootReducer = combineReducers({ ...reducers, routing: routerReducer })

const configureStore = (initialState = {}) => {
  const store = compose(applyMiddleware(thunkMiddleware, logger))(createStore)(rootReducer, initialState)
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('shared/reducers', () => {
      // FIXME: still produce error when hot reload reducer
      const nextReducers = require('shared/reducers')
      const nextRootReducer = combineReducers({ ...nextReducers, routing: routerReducer })
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore
