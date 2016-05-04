const DECREASE_RANK = 'railgun/agents/DECREASE_RANK'
const INCREASE_RANK = 'railgun/agents/INCREASE_RANK'
const ADD_AGENT = 'railgun/agents/ADD_AGENT'
const DELETE_AGENT = 'railgun/agents/DELETE_AGENT'
const SET_EDIT = 'railgun/agents/SET_EDIT'
const SET_NAME = 'railgun/agents/SET_NAME'

const initialState = {
  '59D86614-8080-4294-B77F-615555EDFD38': { name: 'Sirra Kyrie', rank: 4, editing: false },
  'DE877F0F-0627-4067-A420-889021CC1072': { name: 'Haksi Kem', rank: 2, editing: false },
  '6F2180AE-BDB6-436D-A50C-E9BFC47DEB01': { name: 'Moria Missk', rank: 2, editing: false },
  'E3B49D83-1EE0-44B3-8376-B8BB328F8C3B': { name: 'Kumamity Kumoto', rank: 7, editing: false },
  'B61F2ED9-954F-48C4-B4FB-5EA867F44AAB': { name: 'Somsak Aiyara', rank: 1, editing: false }
}

export default (state = initialState, action) => {
  let newAgents = { ...state }
  switch (action.type) {
    case DECREASE_RANK:
      newAgents[action.id].rank -= 1
      return newAgents
    case INCREASE_RANK:
      newAgents[action.id].rank += 1
      return newAgents
    case ADD_AGENT:
      // Generate new UUID, please use 'gen-uuid' in real app
      const randomID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
      newAgents[randomID] = { name: 'Cute Chicken', rank: 1, editing: true }
      return newAgents
    case DELETE_AGENT:
      delete newAgents[action.id]
      return newAgents
    case SET_EDIT:
      newAgents[action.id].editing = action.editing
      return newAgents
    case SET_NAME:
      newAgents[action.id].name = action.name
      return newAgents
    default:
      return newAgents
  }
}

export function decreaseRank (id) {
  return { type: DECREASE_RANK, id }
}

export function increaseRank (id) {
  return { type: INCREASE_RANK, id }
}

export function addAgent () {
  return { type: ADD_AGENT }
}

export function deleteAgent (id) {
  return { type: DELETE_AGENT, id }
}

export function editAgent (id, editing) {
  return { type: SET_EDIT, id, editing }
}

export function setAgentName (id, name) {
  return { type: SET_NAME, id, name }
}
