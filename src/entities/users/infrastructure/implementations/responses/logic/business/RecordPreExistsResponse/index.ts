import { Enum, type Response } from '@core/domain/interfaces';
import { HELPERS } from '@core/infrastructure/helpers';

export class RecordPreExistsResponse {
  found(): Response.ApplicationGeneral {
    const process = {
      httpStatusCode: Enum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    HELPERS.AppResponseLog.warning(
      // eslint-disable-next-line max-len
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered',
    );

    return process;
  }

  notFound(): Response.ApplicationGeneral {
    const process = {
      httpStatusCode: Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      // eslint-disable-next-line max-len
      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in our records. The process can continue.`,
    };

    HELPERS.AppResponseLog.info(process.message);

    return process;
  }
}
