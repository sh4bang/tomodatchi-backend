import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.post('/pet', async(request, reply) => {
        const pet = {
            id: 123,
            message: "New pet created",
        }

        reply.send(pet);
    })
}

export default route