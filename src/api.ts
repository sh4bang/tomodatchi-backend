import { config } from './configs/index.js'
import Fastify, { FastifyInstance } from 'fastify'

import routes from './routes/index.js'

import { envToLogger } from './utils/logger.js'
import mongoose from './plugins/mongoose.js'
import authPlugin from './plugins/auth.js'

const fastify: FastifyInstance = Fastify({
    logger: envToLogger[config.appEnv] ?? true
})

fastify.register(mongoose)
fastify.register(authPlugin)
fastify.register(routes)

const start = async () => {
    try {
        await fastify.listen({ port: config.port })
        // const address = fastify.server.address()
        // const port = typeof address === 'string' ? address : address?.port
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()