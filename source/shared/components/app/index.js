import { connect } from 'react-redux'

const createApp = React => ({ railgun }) => {
  return (
    <div>name: {railgun.name} speed: {railgun.speed}</div>
  )
}

const mapStateToProps = state => {
  const { title } = state
  return { title }
}

// Connect props to component
export default React => {
  const App = createApp(React)
  return connect(mapStateToProps)(App)
}
