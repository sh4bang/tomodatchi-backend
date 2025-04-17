import { FastifyPluginAsync } from "fastify";

import petActionRoute from './post-action.js'
import petCreateRoute from './create-pet.js'
import petGetRoute from './get-my-pet.js'
import petUpdateStateRoute from './update-pet-state.js'

const petRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.register(petGetRoute)
    fastify.register(petCreateRoute)
    fastify.register(petUpdateStateRoute)
    fastify.register(petActionRoute)
}

export default petRoutes