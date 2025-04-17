import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.post('/login', async(request, reply) => {
        const token = fastify.jwt.sign({
            id: 7,
            name: 'Loïc'
        })

        reply.send({
            success: true,
            token: token
        })
    })
}

export default route