import type { User, UserEntityImplLogic } from 'entities/users';

import {
  ApplicationFailedResponse,
  DataSourceResponse,
} from '@core/application/adapters';
import { CoreEntityEnum, type CoreEntityResponse } from '@core/domain';
import { HELPERS } from '@core/infrastructure/helpers';

export class Crud implements UserEntityImplLogic.CrudResponses {
  creationSucceeded(
    dataSource: Omit<User, 'password'>,
  ): CoreEntityResponse.DataSourceOutput<Omit<User, 'password'>> {
    HELPERS.AppResponseLog.success(
      // eslint-disable-next-line max-len
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully',
    );

    return DataSourceResponse<Omit<User, 'password'>>(
      'A new user has been created successfully',
      dataSource,
    );
  }

  creationFailed(): CoreEntityResponse.ApplicationFailedOutput {
    HELPERS.AppResponseLog.warning(
      `APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already
      associated to a pre-existing record`,
    );

    return ApplicationFailedResponse(
      CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  }
}
