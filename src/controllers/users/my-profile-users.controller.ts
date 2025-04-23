import { FastifyReply, FastifyRequest } from "fastify";

import User, {UserType} from "../../models/User.js";

const myProfileUsersController = async (request: FastifyRequest, reply: FastifyReply) => {
    // Get data from JWT token payload
    const { id } = request.user;

    const user = await User.findById({ _id: id })

    if (!user) {
        return reply.status(404).send({
            success: false,
            error: {
                message: "User not found"
            }
        } as ApiResponse<null>)
    }

    reply.send({
        success: true,
        data: user
    } as ApiResponse<UserType>)
}

export default myProfileUsersController