import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
// import { routeReducer } from 'react-router-redux'
import reducers from 'shared/reducers'

const logger = createLogger()
const rootReducer = combineReducers(Object.assign({}, reducers))
// const rootReducer = combineReducers(Object.assign({}, reducers, {
//   routing: routeReducer
// }))

const configureStore = (initialState = {}) => {
  const store = compose(applyMiddleware(thunkMiddleware, logger))(createStore)(rootReducer, initialState)
  // Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //   module.hot.accept('shared/reducers', () => {
  //     const nextReducers = require('shared/reducers')
  //     const nextRootReducer = combineReducers(Object.assign({}, nextReducers))
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store
}

export default configureStore
