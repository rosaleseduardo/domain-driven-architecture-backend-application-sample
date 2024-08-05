import type { User } from 'entities/users';

import type { Interfaces } from '@core/domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of 'CRUD Responses' to the
 * required resource
 */
export interface CrudResponses {
  creationSucceeded: (
    dataSource: Omit<User, 'password'>,
  ) => Interfaces.Response.DataSourceOutput<Omit<User, 'password'>>;
  creationFailed: () => Interfaces.Response.ApplicationFailedOutput;
}
