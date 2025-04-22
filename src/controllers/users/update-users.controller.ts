import { FastifyReply, FastifyRequest } from "fastify"

import User, { UserType } from "../../models/User.js"

interface UpdateUsersParams {
    id: string
}

type UpdateUsersBody = Partial<UserType>

const updateUsersController = async (
    request: FastifyRequest<{ Params: UpdateUsersParams; Body: UpdateUsersBody }>,
    reply: FastifyReply
) => {
    const id = request.params.id
    const updatedData = request.body
    updatedData.updatedAt = new Date()

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true })
    if (!updatedUser) {
        return reply.status(400).send({
            success: false,
            error: {
                message: "User not updated"
            }
        } as ApiResponse<null>)
    }

    reply.status(200).send({
        success: true,
        data: updatedUser
    } as ApiResponse<UserType>)
}

export default updateUsersController