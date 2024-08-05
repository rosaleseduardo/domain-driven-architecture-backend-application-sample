import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { Implementations } from '../../implementations';

const envFile = path.join(__dirname, '../../../../../') + '.env';

if (fs.existsSync(envFile)) {
  const { Helpers } = Implementations;

  Helpers.AppResponseLog.info('Starting the app');
  execSync(
    // eslint-disable-next-line max-len
    'ts-node-dev -r tsconfig-paths/register ./src/core/infrastructure/scripts/start-api-servers/rest-server.ts',
    {
      stdio: 'inherit',
    },
  );
}

Implementations.Helpers.AppResponseLog.exception(
  'Please, create your .env file, it is required to continue\n',
);
Implementations.Helpers.AppResponseLog.info('App was stopped\n');
