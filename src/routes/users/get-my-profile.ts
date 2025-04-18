import { FastifyPluginAsync } from "fastify";

import User, { UserType } from "../../models/User.js";
import type ApiResponse from "../../types/api-response.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get(
        '/me',
        { onRequest: [fastify.authenticate] },
        async(request, reply) => {
            const { _id, role } = request.user;

            const user = await User.findById({ _id })

            reply.send({
                success: true,
                data: user
            } as ApiResponse<UserType>)
        }
    )
}

export default route