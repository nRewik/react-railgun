import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Agent = ({ name, rank, onDecreaseRank, onIncreaseRank }) => {
  return (
    <li>
      <button onClick={onDecreaseRank}>-</button>
      <button onClick={onIncreaseRank}>+</button>
      {' '}{name}—rank {rank}
    </li>
  )
}

Agent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  onDecreaseRank: PropTypes.func.isRequired,
  onIncreaseRank: PropTypes.func.isRequired
}

const Home = ({ agents, onDecreaseRank, onIncreaseRank }) => {
  const renderAgent = agent => {
    const boundOnDecreaseRank = onDecreaseRank.bind(null, agent.id)
    const boundOnIncreaseRank = onIncreaseRank.bind(null, agent.id)
    return (
      <Agent {...agent} key={agent.id} onDecreaseRank={boundOnDecreaseRank} onIncreaseRank={boundOnIncreaseRank} />
    )
  }
  return (
    <div>
      <ul>{agents.map(agent => { return renderAgent(agent) })}</ul>
    </div>
  )
}

Home.propTypes = {
  agents: PropTypes.array.isRequired,
  onDecreaseRank: PropTypes.func.isRequired,
  onIncreaseRank: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { ...state.agents }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseRank: id => { dispatch({ type: 'INCREASE_RANK', id: id }) },
    onDecreaseRank: id => { dispatch({ type: 'DECREASE_RANK', id: id }) }
  }
}

// Connect props to component
export default connect(mapStateToProps, mapDispatchToProps)(Home)
