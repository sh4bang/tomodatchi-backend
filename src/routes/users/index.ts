import { FastifyPluginAsync } from "fastify";

import createUsersRoute from './create-users.route.js'
import listUsersRoute from './list-users.route.js'
import updateUsersRoute from './update-users.route.js'
import userGetProfileRoute from './get-my-profile.js'
import loginRoute from './login.js'

const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.register(createUsersRoute)
    fastify.register(listUsersRoute)
    fastify.register(updateUsersRoute)
    fastify.register(userGetProfileRoute)
    fastify.register(loginRoute)
}

export default userRoutes