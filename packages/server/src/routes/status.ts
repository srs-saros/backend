import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const routes: FastifyPluginAsync = async (app): Promise<void> => {
  app.route({
    url: process.env.API_PREFIX + '/status',
    logLevel: 'warn',
    method: 'GET',
    handler: async (_req, rep) => rep.send({ date: new Date(), up: true })
  });

  app.route({
    url: process.env.API_PREFIX + '/auth/user/login',
    logLevel: 'warn',
    method: 'POST',
    handler: async (_req, rep) => rep.send('Hello world')
  });
};

export default fp(routes);
