import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { Provider } from 'react-redux'

export default (renderProps, store) => {
  return renderToStaticMarkup(
    <Provider store={store}>
      <RouterContext { ...renderProps }/>
    </Provider>
  )
}
