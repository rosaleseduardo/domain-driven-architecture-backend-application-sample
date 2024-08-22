/* eslint-disable max-len */
import { Adapters } from '@core/application';
import { Enums, type Interfaces } from '@core/domain';
import { Implementations } from '@core/infrastructure';

import type { ImplLogic } from '../../../../../../domain';

class CrudValidationResponses implements ImplLogic.CrudValidationResponses {
  incompleteInputData(): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Not all the properties were provided',
    );

    return false;
  }

  completeInputData(): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All properties were provided',
    );

    return true;
  }

  invalidEmail(email: string): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.exception(`Email property value is not valid: ${email}`);

    return false;
  }

  invalidName(name: string): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.exception(`Name property value is no valid: ${name}`);

    return false;
  }

  invalidAge(age: number): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.exception(`Age property value is no valid: ${age}`);

    return false;
  }

  validPropertyValues(): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.info(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: All property values are well defined',
    );

    return true;
  }

  validInputData(): boolean {
    const {
      Helpers: { appResponseLog },
    } = Implementations;

    appResponseLog.success(
      'BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: Create User Data is valid to continue',
    );

    return true;
  }

  invalidInputData(): Interfaces.Response.ApplicationFailedOutput {
    const {
      Helpers: { appResponseLog },
    } = Implementations;
    const { applicationFailedResponse } = Adapters;

    appResponseLog.exception(
      `BUSINESS_LOGIC - CREATE_USER_DATA_IS_VALID: The information provided is
      incomplete or invalid, please verify it`,
    );

    return applicationFailedResponse(
      Enums.CLIENT_ERROR_HTTP_STATUS_CODE.BAD_REQUEST,
      'The information provided is incomplete or invalid, please verify it',
    );
  }
}

export default CrudValidationResponses;
