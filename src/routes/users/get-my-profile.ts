import { FastifyPluginAsync } from "fastify";

import User, { UserType } from "../../models/User.js";

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get(
        '/me',
        { onRequest: [fastify.authenticate, fastify.adminAuthorized] },
        async(request, reply) => {
            // Check if the user is authenticated
            const { id, role } = request.user;

            const user = await User.findById({ _id: id })

            reply.send({
                success: true,
                data: user
            } as ApiResponse<UserType>)
        }
    )
}

export default route