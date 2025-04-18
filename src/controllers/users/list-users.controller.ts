import { FastifyReply, FastifyRequest } from "fastify"

import User, { UserType } from "../../models/User.js"

import type ApiResponse from "../../types/api-response.js"

const listUsersController = async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await User.find({}, {}, {
        sort: {
            createdAt: -1
        }
    })

    if (!users || users.length === 0) {
        return reply.status(404).send({
            success: false,
            error: {
                message: "No user found"
            }
        } as ApiResponse<null>)
    }

    reply.status(200).send({
        success: true,
        data: users
    } as ApiResponse<UserType[]>)
}

export default listUsersController