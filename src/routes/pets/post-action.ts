import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.post('/me/action', async(request, reply) => {
        const { type } = request.body as { type: 'feed' | 'sleep' | 'play' };
        reply.send({ result: `Action performed : ${type} !` });
    })
}

export default route