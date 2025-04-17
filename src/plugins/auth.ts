import fp from 'fastify-plugin';
import jwt from '@fastify/jwt'
import { FastifyPluginAsync } from 'fastify'

import { config } from '../configs/index.js';

// TODO : check declare module
declare module 'fastify' {
    interface FastifyInstance {
        authenticate: any;
    }
}

const authPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.register(jwt, {
        secret: config.jwtSecret,
        sign: {
            expiresIn: '15m',
        }
    })

    fastify.decorate("authenticate", async (request, reply) => {
        try {
          await request.jwtVerify()
        } catch (err) {
          reply.send(err)
        }
    })
}

export default fp(authPlugin)
