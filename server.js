const fastify = require('fastify')({ logger: false })

const items = require('./Items')

fastify.get('/items' , (req , reply ) => {
    reply.send({items})
})

fastify.get('/items/:id', (req , reply ) => {
    const {id} = req.params

    const item = items.find((item) => item.id === id)

    reply.send({item})
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
