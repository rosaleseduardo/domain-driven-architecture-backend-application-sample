import { Adapters } from '../../../application';
import { Enums, type Interfaces } from '../../../domain';
import { Implementations } from '../../../infrastructure';

class UnhandledErrorResponse {
  private readonly functionName: string;
  private readonly message: string;

  constructor(functionName: string, message: string) {
    this.message = message;
    this.functionName = functionName;
  }

  invoke(): Interfaces.Response.ApplicationFailedOutput {
    const {
      Helpers: { appResponseLog },
    } = Implementations;
    const { applicationFailedResponse } = Adapters;

    appResponseLog.exception(
      // eslint-disable-next-line max-len
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );

    return applicationFailedResponse(
      Enums.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      // eslint-disable-next-line max-len
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );
  }
}

export default UnhandledErrorResponse;
