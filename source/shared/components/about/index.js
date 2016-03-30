import React from 'react'
import { connect } from 'react-redux'

const About = () => {
  return (
    <div>
      react-railgun is an elegant universal react-redux starter kit.
      <div>Greatly inspired by {' '}
        <a href='https://github.com/cloverfield-tools/universal-react-boilerplate'>
          cloverfield-tools/universal-react-boilerplate
        </a>
      </div>
    </div>
  )
}

// Connect props to component
export default connect()(About)
