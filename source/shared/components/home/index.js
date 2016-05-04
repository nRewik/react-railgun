import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { decreaseRank, increaseRank, addAgent, deleteAgent, editAgent, setAgentName } from 'shared/redux/modules/agents'

import style from './home.css'

const Agent = ({ name, rank, editing, onDecreaseRank, onIncreaseRank, onDelete, onEditing, onSetName }) => {
  const turnOnEditing = () => { onEditing(true) }
  const turnOffEditing = () => { onEditing(false) }
  const submitName = () => { name.length > 0 ? turnOffEditing() : onDelete() }
  const handleTextChange = e => { onSetName(e.target.value) }
  const handleKeyPress = e => { if (e.key === 'Enter') { submitName() } }

  const nameComponent = editing
    ? <input type='text' value={name} onKeyPress={handleKeyPress} onChange={handleTextChange}
      onBlur={submitName}
      ref={function (input) { if (input) input.focus() }}
      />
    : <span onDoubleClick={turnOnEditing} >{name}</span>

  return (
    <li>
      <button className={style.increment} onClick={onDecreaseRank}>-</button>
      <button className={style.increment} onClick={onIncreaseRank}>+</button>
      {' '}{nameComponent}—rank {rank}
    </li>
  )
}

Agent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  editing: PropTypes.bool.isRequired,
  onEditing: PropTypes.func.isRequired,
  onSetName: PropTypes.func.isRequired,
  onDecreaseRank: PropTypes.func.isRequired,
  onIncreaseRank: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

const Home = ({ agents, actions }) => {
  const { decreaseRank, increaseRank, deleteAgent, editAgent, setAgentName, addAgent } = actions
  const renderAgent = agent => {
    const boundDecreaseRank = () => { decreaseRank(agent.id) }
    const boundIncreaseRank = () => { increaseRank(agent.id) }
    const boundDeleteAgent = () => { deleteAgent(agent.id) }
    const boundEditAgent = editing => { editAgent(agent.id, editing) }
    const boundSetAgentName = name => { setAgentName(agent.id, name) }
    return (
      <Agent {...agent} key={agent.id}
        onDecreaseRank={boundDecreaseRank}
        onIncreaseRank={boundIncreaseRank}
        onDelete={boundDeleteAgent}
        onEditing={boundEditAgent}
        onSetName={boundSetAgentName}
      />
    )
  }
  return (
    <div>
      <div>Railgun Agents</div>
      <ul>{agents.map(agent => { return renderAgent(agent) })}</ul>
      <button onClick={addAgent}>Add Agent</button>
      <br/><br/>
      <div>* double click at agent name to edit</div>
      <div>* type blank name to delete</div>
    </div>
  )
}

Home.propTypes = {
  agents: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const agents = []
  Object.keys(state.agents).forEach(id => {
    agents.push({ id: id, ...state.agents[id] })
  })
  return { agents: agents }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ increaseRank, decreaseRank, addAgent, deleteAgent, editAgent, setAgentName }, dispatch)
  }
}

// Connect props to component
export default connect(mapStateToProps, mapDispatchToProps)(Home)
