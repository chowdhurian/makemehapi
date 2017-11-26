const Hapi = require('hapi')

const server = Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080
})

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {
    // encodeURIComponent() is a more secure implementation
    // It escapes all characters except:
    //  alphabets, decimal digits, - _ . ! ~ * ' ( )
    // For an extensive resource on reasons for calling encodeURIComponent to
    //  sanitize all user input, see:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

    return `Hello ${encodeURIComponent(request.params.name)}`
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
