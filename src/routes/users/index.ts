import { FastifyPluginAsync } from "fastify";

import createUsersRoute from './create-users.route.js'
import listUsersRoute from './list-users.route.js'
import updateUsersRoute from './update-users.route.js'
import deleteUsersRoute from './delete-users.route.js'

import loginRoute from './login.route.js'
import userGetProfileRoute from './get-my-profile.js'

const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.register(createUsersRoute)
    fastify.register(listUsersRoute)
    fastify.register(updateUsersRoute)
    fastify.register(deleteUsersRoute)

    fastify.register(loginRoute)
    fastify.register(userGetProfileRoute)
}

export default userRoutes