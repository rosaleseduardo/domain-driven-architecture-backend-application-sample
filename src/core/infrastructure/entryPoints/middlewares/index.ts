import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { internalServerError } from './internalServerError';
import { resourceNotFound } from './resourceNorFound';

export const MIDDLEWARES = {
  CORS: cors({
    origin: [`http://localhost:${process.env.SERVER_PORT ?? 3000}`],
  }),
  MORGAN: morgan('dev'),
  HELMET: helmet(),
  RESOURCE_NOT_FOUND: resourceNotFound,
  INTERNAL_SERVER_ERROR: internalServerError,
};
