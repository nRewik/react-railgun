if (process.env.NODE_ENV === 'development') {
  require('./server.dev')
} else {
  require('./server')
}
