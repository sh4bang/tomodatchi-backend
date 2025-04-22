import fp from 'fastify-plugin'
import jwt from '@fastify/jwt'

import { config } from '../configs/index.js'

import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'

const authPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.register(jwt, {
        secret: config.jwtSecret,
        sign: {
            expiresIn: config.jwtExpire,
        }
    })

    fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.status(401).send({
                success: false,
                error: {
                    message: `Unauthorized : ${err}`
                }
            } as ApiResponse<null>)
        }
    })
}

export default fp(authPlugin)
