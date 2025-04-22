import fp from 'fastify-plugin'

import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'

const authPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.decorate("adminAuthorized", async (request: FastifyRequest, reply: FastifyReply) => {
        if (!request.user || request.user.role !== 'admin') {
            return reply.status(403).send({
                success: false,
                error: {
                    message: "Forbidden : You don't have permission to access this resource"
                }
            } as ApiResponse<null>)
        }
    })
}

export default fp(authPlugin)
