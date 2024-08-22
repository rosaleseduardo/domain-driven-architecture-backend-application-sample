import { Adapters } from '@core/application';
import { Enums, type Interfaces as CoreInterfaces } from '@core/domain';
import { Implementations } from '@core/infrastructure';

import type {
  ImplLogic,
  Interfaces as UsersInterfaces,
} from '../../../../../domain';

class Crud implements ImplLogic.CrudResponses {
  creationSucceeded(
    dataSource: Omit<UsersInterfaces.User, 'password'>,
  ): CoreInterfaces.Response.DataSourceOutput<
    Omit<UsersInterfaces.User, 'password'>
  > {
    const {
      Helpers: { appResponseLog },
    } = Implementations;
    const { dataSourceResponse } = Adapters;

    appResponseLog.success(
      // eslint-disable-next-line max-len
      'APP_LOGIC - CREATE_USER_USE_CASE: A new user has been created successfully',
    );

    return dataSourceResponse<Omit<UsersInterfaces.User, 'password'>>(
      'A new user has been created successfully',
      dataSource,
    );
  }

  creationFailed(): CoreInterfaces.Response.ApplicationFailedOutput {
    const {
      Helpers: { appResponseLog },
    } = Implementations;
    const { applicationFailedResponse } = Adapters;

    appResponseLog.warning(
      `APP_LOGIC - CREATE_USER_USE_CASE: The information provided is already
      associated to a pre-existing record`,
    );

    return applicationFailedResponse(
      Enums.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      'The information provided is already associated to a pre-existing record',
    );
  }
}

export default Crud;
