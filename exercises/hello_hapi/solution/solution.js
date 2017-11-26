const Hapi = require('hapi')

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello hapi'
  }
})

const init = async () => {
  try {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch (err) {
    console.log(err)
  }
}

init()
