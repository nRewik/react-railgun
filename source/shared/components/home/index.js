import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Home = ({ name, speed }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{speed}</div>
    </div>
  )
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return { ...state.railgun }
}

// Connect props to component
export default connect(mapStateToProps)(Home)
