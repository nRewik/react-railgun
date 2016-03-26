import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import createRoutes from 'shared/routes'

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      {createRoutes(history)}
    </Provider>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
