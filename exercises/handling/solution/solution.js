const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080
})

const init = async () => {
  try {
    await server.register(Inert)

    server.route({
      path: '/',
      method: 'GET',
      handler: {
        file: Path.join(__dirname, 'handling-index.html')
      }
    })

    await server.start()
  } catch (err) {

  }
}

init()
