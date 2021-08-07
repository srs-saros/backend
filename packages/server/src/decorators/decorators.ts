import fp from 'fastify-plugin';
import { Tokens } from '../auth';

export default fp(async (app, opts) => {
  app.decorate('createAccessAndRefreshTokens', (userId: string): Tokens => {
    return {
      accessToken: app.jwt.sign(
        { sub: userId, scope: 'USER' },
        { expiresIn: process.env.APP_JWT_ACCESS_TOKEN_EXPIRATION_TIME }
      ),
      refreshToken: app.jwt.sign(
        { sub: userId },
        { expiresIn: process.env.APP_JWT_REFRESH_TOKEN_EXPIRATION_TIME }
      )
    };
  });

  app.decorate('verifyAndDecodeToken', (token: string) => {
    return app.jwt.verify(token, (error, decoded) => {
      if (error) app.log.error('Not trusted token provided');
      return decoded;
    });
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    createAccessAndRefreshTokens(): string;
  }
}
