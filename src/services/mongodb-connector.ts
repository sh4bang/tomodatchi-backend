import { config } from '../configs/index.js';
import { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

async function dbConnector (fastify: FastifyInstance, options: any) {
  fastify.register(fastifyMongo, {
    // Force to close the mongodb connection when app stopped. The default value is false
    forceClose: true,
    url: config.mongoUri
  })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector)