import { Implementations, Instances } from '../../../../infrastructure';
import type { Express } from '../../servers';

class Rest {
  server?: Express;

  async start(): Promise<void> {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    const port = process.env.SERVER_PORT as string;

    this.server = new Instances.servers.Express(port);

    try {
      await this.server.listen().then(() => {
        appResponseLog.success('API REST Services are up and running\n\n');
      });
    } catch (error) {
      await this.server.stop();

      appResponseLog.exception(
        // eslint-disable-next-line max-len
        `An unhandled error has occured when starting ExpressServer. Details: ${error}`,
      );
    }
  }

  async stop(): Promise<void> {
    await this.server?.stop();
  }
}

export default Rest;
