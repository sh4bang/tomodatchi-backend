import { FastifyReply, FastifyRequest } from "fastify"

import User from "../../models/User.js"

const listUsersController = async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await User.find({}, {}, {
        sort: {
            createdAt: -1
        }
    })

    if (!users || users.length === 0) {
        return reply.status(404).send({ message: "No user found" })
    }

    reply.status(200).send(users)
}

export default listUsersController