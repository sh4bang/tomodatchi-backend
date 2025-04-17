import { FastifyPluginAsync } from "fastify";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get(
        '/me',
        {
            onRequest: [fastify.authenticate]
        },
        async(request, reply) => {
            const userData = {
                username: "Reboot",
                level: 7,
            }

            reply.send(userData);
        }
    )
}

export default route