import bcrypt from "bcrypt"

import { FastifyReply, FastifyRequest } from "fastify"

import User from "../../models/User.js"

interface LoginUsersBody {
    email: string
    password: string
}

const loginUsersController = async (
    request: FastifyRequest<{ Body: LoginUsersBody }>,
    reply: FastifyReply
) => {
    const { email, password } = request.body
    if (!email || !password) {
        return reply.status(400).send({
            success: false,
            error: {
                message: "Email and password are required"
            }
        } as ApiResponse<null>)
    }

    const user = await User.findOne({ email }, { password: 1, role: 1 })
    if (!user) {
        return reply.status(401).send({
            success: false,
            error: {
                message: "Invalid credentials"
            }
        } as ApiResponse<null>)
    }    

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return reply.status(401).send({
            success: false,
            error: {
                message: "Invalid credentials"
            }
        } as ApiResponse<null>)
    }
    
    // Generate JWT token
    const token = request.server.jwt.sign({
        id: user._id.toString(),
        role: user.role
    })

    reply.send({
        success: true,
        data: {
            token: token
        }
    } as ApiResponse<{ token: string }>)
}

export default loginUsersController