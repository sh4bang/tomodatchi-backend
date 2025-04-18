import { FastifyPluginAsync } from "fastify";

import loginUsersController from "../../controllers/users/login-users.controller.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.post('/login', loginUsersController)
}

export default route