import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'shared/redux/modules/'

const configureStore = (initialState = {}) => {
  const logger = createLogger()
  const store = compose(applyMiddleware(thunkMiddleware, logger))(createStore)(rootReducer, initialState)
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('shared/redux/modules/', () => {
      const nextRootReducer = require('shared/redux/modules/').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore
