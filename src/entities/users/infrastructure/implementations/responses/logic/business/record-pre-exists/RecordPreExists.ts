import { Enums, type Interfaces } from '@core/domain';
import { Implementations } from '@core/infrastructure';

class RecordPreExists {
  found(): Interfaces.Response.ApplicationGeneral {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    const process = {
      httpStatusCode: Enums.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    appResponseLog.warning(
      // eslint-disable-next-line max-len
      'BUSINESS_LOGIC - RECORD_PRE_EXISTS: The provided record has previously been registered',
    );

    return process;
  }

  notFound(): Interfaces.Response.ApplicationGeneral {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    const process = {
      httpStatusCode: Enums.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,
      // eslint-disable-next-line max-len
      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in our records. The process can continue.`,
    };

    appResponseLog.info(process.message);

    return process;
  }
}

export default RecordPreExists;
