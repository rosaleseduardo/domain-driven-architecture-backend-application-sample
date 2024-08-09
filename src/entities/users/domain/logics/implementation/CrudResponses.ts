import type { Interfaces as CoreInterfaces } from '@core/domain';

import type { Interfaces as UsersInterfaces } from '../../../domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'CRUD Responses' to the
 * required resource
 */
export interface CrudResponses {
  creationSucceeded: (
    dataSource: Omit<UsersInterfaces.User, 'password'>,
  ) => CoreInterfaces.Response.DataSourceOutput<
    Omit<UsersInterfaces.User, 'password'>
  >;
  creationFailed: () => CoreInterfaces.Response.ApplicationFailedOutput;
}
