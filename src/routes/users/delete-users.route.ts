import { FastifyPluginAsync } from "fastify"

import deleteUsersController from "../../controllers/users/delete-users.controller.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.delete(
        '/:id',
        { onRequest: [fastify.authenticate, fastify.adminAuthorized] },
        deleteUsersController
    )}

export default route;