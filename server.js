const fastify = require('fastify')({ logger: false })

fastify.get('/items' , (req , reply ) => {
    reply.send({test: "hello"})
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()
