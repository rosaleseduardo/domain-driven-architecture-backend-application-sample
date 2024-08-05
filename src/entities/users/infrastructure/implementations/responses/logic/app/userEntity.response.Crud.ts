import type { User, UserEntityImplLogic } from 'entities/users';

import { Adapters } from '@core/application';
import { Enums, type Interfaces } from '@core/domain';
import { Implementations } from '@core/infrastructure';

export class Crud implements UserEntityImplLogic.CrudResponses {
  creationSucceeded(
    dataSource: Omit<User, 'password'>,
  ): Interfaces.Response.DataSourceOutput<Omit<User, 'password'>> {
    const { Helpers } = Implementations;
    const { DataSourceResponse } = Adapters;

    Helpers.AppResponseLog.success(
      // eslint-disable-next-line max-len
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully',
    );

    return DataSourceResponse<Omit<User, 'password'>>(
      'A new user has been created successfully',
      dataSource,
    );
  }

  creationFailed(): Interfaces.Response.ApplicationFailedOutput {
    const { Helpers } = Implementations;
    const { ApplicationFailedResponse } = Adapters;

    Helpers.AppResponseLog.warning(
      `APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already
      associated to a pre-existing record`,
    );

    return ApplicationFailedResponse(
      Enums.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  }
}
