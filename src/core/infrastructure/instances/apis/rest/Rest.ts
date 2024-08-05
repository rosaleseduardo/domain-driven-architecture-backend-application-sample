import { Implementations } from '@core/infrastructure';
import { Express } from '@core/infrastructure/instances/servers';

export class Rest {
  server?: Express;

  async start(): Promise<void> {
    const { Helpers } = Implementations;

    const port = process.env.SERVER_PORT as string;

    this.server = new Express(port);

    try {
      await this.server.listen().then(() => {
        Helpers.AppResponseLog.success(
          'API REST Services are up and running\n\n',
        );
      });
    } catch (error) {
      await this.server.stop();

      Helpers.AppResponseLog.exception(
        // eslint-disable-next-line max-len
        `An unhandled error has occured when starting ExpressServer. Details: ${error}`,
      );
    }
  }

  async stop(): Promise<void> {
    await this.server?.stop();
  }
}
