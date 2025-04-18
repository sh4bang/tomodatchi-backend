import fp from 'fastify-plugin'
import jwt from '@fastify/jwt'

import { config } from '../configs/index.js'

import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import type ApiResponse from '../types/api-response.js'

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

    fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send({
                success: false,
                error: {
                    message: `Unauthorized : ${err}`,
                    statusCode: 401
                }
            } as ApiResponse<null>)
        }
    })
}

export default fp(authPlugin)
