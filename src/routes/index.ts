import { FastifyPluginAsync } from "fastify";

import petRoutes from "./pets/index.js";
import userRoutes from "./users/index.js";

const routes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.register(userRoutes, { prefix: '/users' })
    fastify.register(petRoutes, { prefix: '/pets' })

    fastify.log.info('Routes registered !');
}

export default routes