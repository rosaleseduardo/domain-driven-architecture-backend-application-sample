import { CoreEntityEnum, type CoreEntityResponse } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';

export class RecordPreExistsResponse {
  found(): CoreEntityResponse.ApplicationGeneral {
    const process = {
      httpStatusCode: CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    HELPERS.AppResponseLog.warning(
      // eslint-disable-next-line max-len
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered',
    );

    return process;
  }

  notFound(): CoreEntityResponse.ApplicationGeneral {
    const process = {
      httpStatusCode: CoreEntityEnum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      // eslint-disable-next-line max-len
      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in our records. The process can continue.`,
    };

    HELPERS.AppResponseLog.info(process.message);

    return process;
  }
}
