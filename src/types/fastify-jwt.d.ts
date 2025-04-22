import '@fastify/jwt';

declare module '@fastify/jwt' {
    interface FastifyJWT {
        payload: { id: string; role: string }; // Payload type is used for signing and verifying
        user: { id: string; role: string }; // User type is return type of `request.user` object
    }
}