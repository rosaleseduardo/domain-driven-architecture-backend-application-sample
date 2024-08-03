import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { HELPERS } from '../../implementations/helpers';

const envFile = path.join(__dirname, '../../../../../') + '.env';

if (fs.existsSync(envFile)) {
  HELPERS.AppResponseLog.info('Starting the app');
  execSync(
    // eslint-disable-next-line max-len
    'ts-node-dev -r tsconfig-paths/register ./src/core/infrastructure/scripts/start-services/rest-services.ts',
    {
      stdio: 'inherit',
    },
  );
}

HELPERS.AppResponseLog.exception(
  'Please, create your .env file, it is required to continue\n',
);
HELPERS.AppResponseLog.info('App was stopped\n');
