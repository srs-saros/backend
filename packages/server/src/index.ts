import { Server, IncomingMessage, ServerResponse } from 'http';
import fastify, { FastifyInstance } from 'fastify';
import statusRoutes from './routes/status';
import * as dotenv from 'dotenv';

dotenv.config();

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true
});

app.register(statusRoutes);

const start = async () => {
  try {
    await app.listen(process.env.PORT || 8080, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', (error: unknown) => {
  app.log.error(error);
});
process.on('unhandledRejection', (error: unknown) => {
  app.log.error(error);
});

start();
