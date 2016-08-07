
const app = require('../app')
const debug = require('debug')('Questionnaire:server')
const http = require('http')

const normalizePort = (val: string): mixed => {
  const normalizedPort = parseInt(val, 10)

  if (isNaN(normalizedPort)) {
    // named pipe
    return val
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort
  }

  return false
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`) // eslint-disable-line no-console
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`) // eslint-disable-line no-console
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listened', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  debug(`Listening on ${bind}`)
})

