import express from 'express';
import type * as http from 'http';

import { EntryPoints, Implementations } from '../../..';

class Express {
  private readonly _port: string;
  private readonly _app: express.Express;
  private _httpServer?: http.Server;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(EntryPoints.Middlewares.cors);
    this._app.use(EntryPoints.Middlewares.morgan);
    this._app.use(EntryPoints.Middlewares.helmet);
    /**
     * It is a built-in middleware function in the Express framework for Node.js
     *
     * This middleware function is responsible for parsing incoming request
     * bodies that are in JSON format. It parses the JSON payload of the request
     * and makes it available on the req.body object of the request handler.
     *
     * @see {@link https://expressjs.com/en/api.html#express.json}
     */
    this._app.use(express.json());
    /**
     * It is a built-in middleware function in the Express framework for Node.js
     *
     * This middleware function is responsible for parsing incoming request
     * bodies that are in URL-encoded format. It parses the key-value pairs from
     * the request body and makes them available on the req.body object of the
     * request handler.
     *
     * @see {@link https://expressjs.com/en/api.html#express.urlencoded}
     */
    this._app.use(express.urlencoded({ extended: false }));

    this._app.use('/api', EntryPoints.Router);

    this._app.use(EntryPoints.Middlewares.resourceNotFound);
    this._app.use(EntryPoints.Middlewares.internalServerError);
  }

  async listen(): Promise<void> {
    const { Helpers } = Implementations;

    await new Promise<void>(resolve => {
      this._httpServer = this._app.listen(this._port, () => {
        Helpers.appResponseLog.success(
          `App is being served on http://localhost:${this._port}\n`,
        );
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this._httpServer != null) {
        this._httpServer?.close(error => {
          if (error != null) {
            reject(error);
            return;
          }

          return resolve;
        });
      }
    });
  }
}

export default Express;
