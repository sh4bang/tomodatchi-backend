import type { FastifyInstance, FastifyRequest } from 'fastify'

// TODO : check declare module
declare module 'fastify' {
    interface FastifyInstance {
        authenticate: any
    }
}

declare module 'fastify' {
    interface FastifyInstance {
        adminAuthorized: any
    }
}

