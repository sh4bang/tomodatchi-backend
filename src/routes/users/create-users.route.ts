import { FastifyPluginAsync } from "fastify"

import createUsersController from "../../controllers/users/create-users.controller.js"

const route: FastifyPluginAsync = async (fastify) => {
    fastify.post(
        '/',
        { onRequest: [fastify.authenticate, fastify.adminAuthorized] },
        createUsersController
    )}

export default route