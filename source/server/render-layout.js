export default ({ settings, rootMarkup, initialState }) => {
  const styleTag = process.env.NODE_ENV === 'development'
    ? ''
    : '<link rel="stylesheet" type="text/css" href="/static/lib/bundle.css">'
  return `
    <!doctype html>
    <html>
      <head>
        <title>${settings.TITLE}</title>
        ${styleTag}
      </head>
      <body>
        <div id='root'>${rootMarkup}</div>
        <script>
          window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/lib/frontend-bundle.js"></script>
      </body>
    </html>
  `
}
