import { FastifyPluginAsync } from "fastify"

import updateUsersController from "../../controllers/users/update-users.controller.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.put(
        '/:id',
        updateUsersController
    )}

export default route;