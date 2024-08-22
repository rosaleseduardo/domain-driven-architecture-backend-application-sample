import type { NextFunction, Request, Response } from 'express';

import { Enums } from '../../../../domain';

/**
 * Handles errors by setting the appropriate status code and returning a JSON
 * response with error details.
 *
 * @param err - The error object that was thrown.
 * @param _req - The HTTP request object.
 * @param  res - The HTTP response object.
 * @param _next - The next middleware function.
 *
 * Reference: https://www.codeconcisely.com/posts/
 * how-to-handle-errors-in-express-with-typescript/
 * #creating-a-custom-error-handling-middleware
 */
const internalServerError = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(
    res.statusCode !== Enums.SUCCESSFUL_HTTP_STATUS_CODE.OK
      ? res.statusCode
      : Enums.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
  );
  res.json(
    process.env.NODE_ENV === 'production'
      ? {
          message: err.message,
          // @ts-expect-error: This is not introducing a bug
          cause: err.cause,
        }
      : {
          message: err.message,
          // @ts-expect-error: This is not introducing a bug
          cause: err.cause,
          stackTrace: err.stack,
        },
  );

  next(err);
};

export default internalServerError;
