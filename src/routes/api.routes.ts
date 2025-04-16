import { FastifyInstance } from 'fastify'

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

async function routes (fastify: FastifyInstance, options: any) {
    
    const collection = fastify.mongo.db!.collection('animals')

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

    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/animals', async (request, reply) => {
        const result = await collection.find().toArray()
        if (result.length === 0) {
          throw new Error('No documents found')
        }
        return result
      })
    
      fastify.get('/animals/:animal', async (request, reply) => {
        const result = await collection.findOne({ animal: request.params.animal })
        if (!result) {
          throw new Error('Invalid value')
        }
        return result
      })
    
      const animalBodyJsonSchema = {
        type: 'object',
        required: ['animal'],
        properties: {
          animal: { type: 'string' },
        },
      }
    
      const schema = {
        body: animalBodyJsonSchema,
      }
    
      fastify.post('/animals', { schema }, async (request, reply) => {
        // we can use the `request.body` object to get the data sent by the client
        const result = await collection.insertOne({ animal: request.body.animal })
        return result
      })
}

export default routes;