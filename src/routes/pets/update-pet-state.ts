import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.patch('/me/state', async(request, reply) => {
        const state = request.body as { hunger?: number; mood?: string };
        reply.send({ ...state, updated: true });
    })
}

export default route