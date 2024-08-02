import { CoreEntityEnum, type CoreEntityResponse } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';

import { ApplicationFailedResponse } from '../application-failed-response';

class UnhandledErrorResponse {
  private readonly functionName: string;
  private readonly message: string;

  constructor(functionName: string, message: string) {
    this.message = message;
    this.functionName = functionName;
  }

  invoke(): CoreEntityResponse.ApplicationFailedOutput {
    HELPERS.AppResponseLog.exception(
      // eslint-disable-next-line max-len
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );

    return ApplicationFailedResponse(
      CoreEntityEnum.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      // eslint-disable-next-line max-len
      `An unhandled error has happened on ${this.functionName}. Details: ${this.message}`,
    );
  }
}

export default UnhandledErrorResponse;
