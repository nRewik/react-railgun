import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
// import { RouterContext } from 'react-router'
import createApp from 'shared/components/app'

// TODO: Use router

export default React => (renderProps, store) => {
  const App = createApp(React)
  return renderToStaticMarkup(
    <Provider store={store}>
      <App { ...renderProps }/>
    </Provider>
  )
}

// <RouterContext { ...renderProps } />
