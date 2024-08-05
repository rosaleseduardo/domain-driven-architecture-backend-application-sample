import * as dotenv from 'dotenv';

import { Implementations } from '@core/infrastructure';

import { APIRest } from '../../instances';

try {
  dotenv.config();

  void new APIRest().start();
} catch (err) {
  const { Helpers } = Implementations;

  Helpers.AppResponseLog.exception(
    // eslint-disable-next-line max-len
    `An unhandled error has occured whren starting APIRestServices. Details: ${err}`,
  );
}
