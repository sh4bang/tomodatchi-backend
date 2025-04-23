import { FastifyPluginAsync } from "fastify";

import myProfileUsersController from "../../controllers/users/my-profile-users.controller.js";
import User, { UserType } from "../../models/User.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get(
        '/me',
        { onRequest: [fastify.authenticate] },
        myProfileUsersController
    )
}

export default route