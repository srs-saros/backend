import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const statusHandler: FastifyPluginAsync = async (app) => {
  app.route({
    url: process.env.API_PREFIX + '/status',
    logLevel: 'warn',
    method: ['GET'],
    handler: async (_req, rep) => rep.send({ date: new Date(), up: true })
  });
};

export default fp(statusHandler);
