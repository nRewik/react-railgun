import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const initialState = {
  name: 'railgun',
  speed: 100
}

const railgun = (state = initialState, action) => {
  return state
}

export default combineReducers({
  railgun,
  routing: routerReducer
})
