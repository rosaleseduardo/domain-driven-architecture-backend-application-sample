import * as dotenv from 'dotenv';

import { APIRest } from '@core/infrastructure/entry-points';
import { HELPERS } from '@core/infrastructure/implementations/helpers';

try {
  dotenv.config();

  void new APIRest().start();
} catch (err) {
  HELPERS.AppResponseLog.exception(
    // eslint-disable-next-line max-len
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`,
  );
}
