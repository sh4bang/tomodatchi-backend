import { FastifyReply, FastifyRequest } from "fastify"

import User, { UserType } from "../../models/User.js"

interface DeleteUsersParams {
    id: string
}

const deleteUsersController = async (
    request: FastifyRequest<{Params: DeleteUsersParams}>, 
    reply: FastifyReply
) => {
    const id = request.params.id
    const deletedUSer = await User.findOneAndDelete({ _id: id })
    if (!deletedUSer) {
        return reply.status(400).send({
            success: false,
            error: {
                message: "User not found"
            }
        } as ApiResponse<null>)
    }

    reply.status(200).send({
        success: true,
        data: deletedUSer
    } as ApiResponse<UserType>)
}

export default deleteUsersController