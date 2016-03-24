import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const App = ({ name, speed }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{speed}</div>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return { ...state.railgun }
}

// Connect props to component
export default connect(mapStateToProps)(App)
