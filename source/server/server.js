import app from 'server/app'

const port = process.env.APP_PORT || 3000

app.listen(port, error => {
  if (error) {
    return console.log(error)
  }
  console.log(`Listening at http://localhost:${port}`)
})
