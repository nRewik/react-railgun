const initialState = {
  '59D86614-8080-4294-B77F-615555EDFD38': { name: 'Sirra Kyrie', rank: 4, editing: false },
  'DE877F0F-0627-4067-A420-889021CC1072': { name: 'Haksi Kem', rank: 2, editing: false },
  '6F2180AE-BDB6-436D-A50C-E9BFC47DEB01': { name: 'Moria Missk', rank: 2, editing: false },
  'E3B49D83-1EE0-44B3-8376-B8BB328F8C3B': { name: 'Kumamity Kumoto', rank: 7, editing: false },
  'B61F2ED9-954F-48C4-B4FB-5EA867F44AAB': { name: 'Somsak Aiyara', rank: 1, editing: false }
}

const actionHandler = {
  'DECREASE_RANK': (agents, action) => {
    let newAgents = { ...agents }
    newAgents[action.id].rank -= 1
    return newAgents
  },
  'INCREASE_RANK': (agents, action) => {
    let newAgents = { ...agents }
    newAgents[action.id].rank += 1
    return newAgents
  },
  'ADD_AGENT': (agents, action) => {
    let newAgents = { ...agents }
    // Generate new UUID, please use 'gen-uuid' in real app
    const randomID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    newAgents[randomID] = { name: 'Cute Chicken', rank: 1, editing: true }
    return newAgents
  },
  'DELETE_AGENT': (agents, action) => {
    let newAgents = { ...agents }
    delete newAgents[action.id]
    return newAgents
  },
  'SET_EDIT': (agents, action) => {
    let newAgents = { ...agents }
    newAgents[action.id].editing = action.editing
    return newAgents
  },
  'SET_NAME': (agents, action) => {
    let newAgents = { ...agents }
    newAgents[action.id].name = action.name
    return newAgents
  }
}

export default (state = initialState, action) => {
  if (actionHandler.hasOwnProperty(action.type)) {
    return actionHandler[action.type](state, action)
  }
  return state
}
