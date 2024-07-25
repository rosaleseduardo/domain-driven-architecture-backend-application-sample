import chalk from 'chalk';

import { CoreEntityEnum, type CoreEntityLog } from '@core/domain';

/**
 * Defines the background color for successful output.
 */
const successOutput = chalk.bgGreenBright;
/**
 * Defines the background color for warning output.
 */
const warningOutput = chalk.bgYellowBright;
/**
 * Defines the background color for error output.
 */
const errorOutput = chalk.bgRedBright;
/**
 * Defines the background color for info output.
 */
const infoOutput = chalk.bgBlueBright;

const success = (message: string): void => {
  console.log(
    successOutput(
      `${chalk.bold(CoreEntityEnum.APP_RESPONSE_TYPE.SUCESS)}: ${message}`,
    ),
  );
};

const warning = (message: string): void => {
  console.log(
    warningOutput(
      `${chalk.bold(CoreEntityEnum.APP_RESPONSE_TYPE.WARNING)}: ${message}`,
    ),
  );
};

const exception = (message: string): void => {
  console.log(
    errorOutput(
      `${chalk.bold(CoreEntityEnum.APP_RESPONSE_TYPE.EXCEPTION)}: ${message}`,
    ),
  );
};

const info = (message: string): void => {
  console.log(
    infoOutput(
      `${chalk.bold(CoreEntityEnum.APP_RESPONSE_TYPE.INFO)}: ${message}`,
    ),
  );
};

/** Outputs the response from a process */
export const AppResponseLog: CoreEntityLog.AppResponseDefinition = {
  success,
  warning,
  exception,
  info,
};
