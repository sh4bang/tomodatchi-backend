import { FastifyPluginAsync } from "fastify"

import listUsersController from "../../controllers/users/list-users.controller.js"

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get(
        '/',
        { onRequest: [fastify.authenticate, fastify.adminAuthorized] },
        listUsersController
    )}

export default route;