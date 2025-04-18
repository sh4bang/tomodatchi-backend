import fp from 'fastify-plugin'
import mongoose from 'mongoose'

import { config } from '../configs/index.js'

import { type FastifyPluginAsync } from 'fastify'

const mongoosePlugin: FastifyPluginAsync = async (fastify) => {
    await mongoose.connect(config.mongoUri)
    fastify.log.info('MongoDB connected via Mongoose !')

    fastify.addHook('onClose', async () => {
        await mongoose.disconnect()
        fastify.log.info('MongoDB disconnected.')
    })
}

export default fp(mongoosePlugin)