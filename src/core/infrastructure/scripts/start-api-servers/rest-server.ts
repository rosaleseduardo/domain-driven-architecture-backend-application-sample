import * as dotenv from 'dotenv';

import { Implementations, Instances } from '../../../infrastructure';

try {
  dotenv.config();

  const { apis } = Instances;

  void new apis.Rest().start();
} catch (err) {
  const {
    Helpers: { appResponseLog },
  } = Implementations;

  appResponseLog.exception(
    // eslint-disable-next-line max-len
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`,
  );
}
