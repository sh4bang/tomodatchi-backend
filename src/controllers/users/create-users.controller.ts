import { FastifyReply, FastifyRequest } from "fastify"

import User from "../../models/User.js"

const createUsersController = async (request: FastifyRequest, reply: FastifyReply) => {
    const newUser = await User.insertOne(request.body)
    if (!newUser) {
        return reply.status(400).send({ message: "User not created" })
    }

    reply.status(201).send(newUser)
}

export default createUsersController