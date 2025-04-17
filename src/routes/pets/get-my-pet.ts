import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get('/me', async(request, reply) => {
        const pet = {
            name: "Pika",
            stage: "Egg",
            hunger: 100,
            mood: 'happy'
        }

        reply.send(pet);
    })
}

export default route