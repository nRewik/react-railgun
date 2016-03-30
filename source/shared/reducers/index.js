import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const initialState = {
  agents: [
    { 'id': '59D86614-8080-4294-B77F-615555EDFD38', 'name': 'Sirra Kyrie', 'rank': 4 },
    { 'id': 'DE877F0F-0627-4067-A420-889021CC1072', 'name': 'Haksi Kem', 'rank': 2 },
    { 'id': '6F2180AE-BDB6-436D-A50C-E9BFC47DEB01', 'name': 'Moria Missk', 'rank': 2 },
    { 'id': 'E3B49D83-1EE0-44B3-8376-B8BB328F8C3B', 'name': 'Kumamity Kumoto', 'rank': 7 },
    { 'id': 'B61F2ED9-954F-48C4-B4FB-5EA867F44AAB', 'name': 'Somsak Aiyara', 'rank': 1 }
  ]
}

const agents = (state = initialState, action) => {
  let agents = state.agents.slice()
  switch (action.type) {
    case 'DECREASE_RANK':
      agents.forEach(agent => {
        if (agent.id === action.id) { agent.rank -= 1 }
      })
      break
    case 'INCREASE_RANK':
      agents.forEach(agent => {
        if (agent.id === action.id) { agent.rank += 1 }
      })
      break
    default: break
  }
  return { ...state, agents }
}

export default combineReducers({
  agents,
  routing: routerReducer
})
