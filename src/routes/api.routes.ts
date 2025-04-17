import { FastifyPluginAsync } from 'fastify'

interface IQuerystring {
    username: string;
    password: string;
}

interface IHeaders {
    'h-Custom': string;
}

interface IReply {
    200: { success: boolean };
    302: { url: string };
    '4xx': { error: string };
}

const routes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get<{
        Querystring: IQuerystring,
        Headers: IHeaders,
        Reply: IReply
    }>(
        '/auth', 
        {
            preValidation: (request, reply, done) => {
                const { username, password } = request.query
                done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
            }
        }, 
        async (request, reply) => {
            const { username, password } = request.query
            const customerHeader = request.headers['h-Custom']
            // do something with request data

            // chaining .statusCode/.code calls with .send allows type narrowing. For example:
            // this works
            return reply.code(200).send({ success: true });
            // but this gives a type error
            // reply.code(200).send('uh-oh');
            // it even works for wildcards
            // reply.code(404).send({ error: 'Not found' });
            // return `logged in!`
        }
    )
}

export default routes;