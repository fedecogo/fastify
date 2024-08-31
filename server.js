const fastify = require('fastify')({ logger: true })

fastify.register(require('@fastify/swagger'), {
  swagger: {
    info: {
      title: 'fastify-api',
      description: 'API documentation',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
})

fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs', // prefisso per la UI Swagger
  swagger: {
    info: {
      title: 'fastify-api',
      description: 'API documentation',
      version: '1.0.0'
    }
  },
  exposeRoute: true
})

// Registrazione delle route
fastify.register(require('./routes/items'))

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()

