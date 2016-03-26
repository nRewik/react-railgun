import React from 'react'
import { Router, Route } from 'react-router'
import App from 'shared/components/app'
import About from 'shared/components/about'

export default browserHistory => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route path='/about' component={About}/>
    </Router>
  )
}
