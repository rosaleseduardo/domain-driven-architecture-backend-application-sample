import chalk from 'chalk';

import { Enums, type Interfaces } from '../../../../domain';

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
    successOutput(`${chalk.bold(Enums.APP_RESPONSE_TYPE.SUCESS)}: ${message}`),
  );
};

const warning = (message: string): void => {
  console.log(
    warningOutput(`${chalk.bold(Enums.APP_RESPONSE_TYPE.WARNING)}: ${message}`),
  );
};

const exception = (message: string): void => {
  console.log(
    errorOutput(`${chalk.bold(Enums.APP_RESPONSE_TYPE.EXCEPTION)}: ${message}`),
  );
};

const info = (message: string): void => {
  console.log(
    infoOutput(`${chalk.bold(Enums.APP_RESPONSE_TYPE.INFO)}: ${message}`),
  );
};

/** Outputs the response from a process */
const appResponseLog: Interfaces.Log.AppResponseDefinition = {
  success,
  warning,
  exception,
  info,
};

export default appResponseLog;
