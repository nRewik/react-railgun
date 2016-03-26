import React from 'react'
import { Router, Route } from 'react-router'

import Home from 'shared/components/home'
import About from 'shared/components/about'

export default browserHistory => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Router>
  )
}
