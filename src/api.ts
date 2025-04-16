import { config } from './configs/index.js';
import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import routes from './routes/api.routes.js'
import dbConnector from './services/mongodb-connector.js'

const fastify: FastifyInstance = Fastify({
  logger: true
})

fastify.register(dbConnector)
fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen({ port: config.port })
    const address = fastify.server.address()
    const port = typeof address === 'string' ? address : address?.port
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()