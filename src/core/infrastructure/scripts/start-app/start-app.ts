import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { Implementations } from '../../implementations';

const {
  Helpers: { appResponseLog },
} = Implementations;

const envFile = path.join(__dirname, '../../../../../') + '.env';

if (fs.existsSync(envFile)) {
  appResponseLog.info('Starting the app');
  execSync(
    // eslint-disable-next-line max-len
    'ts-node-dev -r tsconfig-paths/register ./src/core/infrastructure/scripts/start-api-servers/rest-server.ts',
    {
      stdio: 'inherit',
    },
  );
}

appResponseLog.exception(
  'Please, create your .env file, it is required to continue\n',
);
appResponseLog.info('App was stopped\n');
