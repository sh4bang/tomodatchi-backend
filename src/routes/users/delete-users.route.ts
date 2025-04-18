import { FastifyPluginAsync } from "fastify"

import deleteUsersController from "../../controllers/users/delete-users.controller.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.delete(
        '/:id',
        deleteUsersController
    )}

export default route;