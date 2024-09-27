
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/cantores', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createCantor(body);
    return reply.status(201).send();
})

// READE
server.get('/cantores', async () => {
    const cantores = await databasePostgres.listCantores();
    return cantores;
});

// UPDATE
server.put('/cantores/:id', async (request, reply) => {
    const cantorID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUser(cantorID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/cantores/:id', async (request, reply) => {
    const cantorID = request.params.id;
    await databasePostgres.deleteCantor(cantorID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
