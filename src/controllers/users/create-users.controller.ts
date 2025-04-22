import bcrypt from "bcrypt"

import { FastifyReply, FastifyRequest } from "fastify"

import User from "../../models/User.js"

import type { UserType } from "../../models/User.js"

type CreateUsersBody = Pick<UserType, "email" | "password" | "firstName" | "lastName" | "role">

const createUsersController = async (request: FastifyRequest<{Body: CreateUsersBody}>, reply: FastifyReply) => {
    const { email, password, firstName, lastName, role } = request.body

    if (!email || !password || !firstName || !lastName) {
        return reply.status(400).send({
            success: false,
            error: {
                message: 'Fields "email", "password", "firstName", "lastName" are required'
            }
        } as ApiResponse<null>)
    }

    const newUser = await User.insertOne({
        email,
        password: await bcrypt.hash(password, 10),
        firstName,
        lastName,
        role: role || "user",
    })

    if (!newUser) {
        return reply.status(400).send({
            success: false,
            error: {
                message: "User creation failed"
            }
        } as ApiResponse<null>)
    }

    reply.status(201).send({
        success: true,
        data: newUser
    } as ApiResponse<UserType>)
}

export default createUsersController