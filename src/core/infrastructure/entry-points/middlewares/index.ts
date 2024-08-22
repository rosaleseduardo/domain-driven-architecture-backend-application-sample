import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { internalServerError } from './internal-server-error';
import { resourceNotFound } from './resource-not-found';

export const Middlewares = {
  cors: cors({
    origin: [`http://localhost:${process.env.SERVER_PORT ?? 3000}`],
  }),
  morgan: morgan('dev'),
  helmet: helmet(),
  resourceNotFound,
  internalServerError,
};
