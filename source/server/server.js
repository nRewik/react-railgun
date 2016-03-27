import createApp from 'server/app'

const port = process.env.APP_PORT || 3000
const app = createApp()

app.listen(port, error => {
  error ? console.error(error) : console.log(`Listening at http://localhost:${port}`)
})
