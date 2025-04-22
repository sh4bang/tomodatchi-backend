import '@fastify/jwt';

declare module '@fastify/jwt' {
    interface FastifyJWT {
        // Payload type is used for signing and verifying
        payload: {
            id: string
            role: string
        }
        // User type is return type of `request.user` object
        user: {
            id: string
            role: string
        }
    }
}