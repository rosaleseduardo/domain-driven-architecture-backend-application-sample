/* eslint-disable max-len */
import type { Interfaces } from '@entities/users/domain';

import { dataSourceResponse } from '.';

describe('Adapter - DataSourceResponse', () => {
  it('It should return an object with the form of DataSourceResponseOutput', () => {
    const dataSource: Interfaces.User = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'TestName',
      age: 18,
    };

    const response = dataSourceResponse(
      'A new user has been created successfully',
      dataSource,
    );

    expect(Object.keys(response)).toStrictEqual(['httpStatusCode', 'data']);
    expect(typeof response.httpStatusCode).toBe('number');

    expect(typeof response.data).toBe('object');
    expect(Object.keys(response.data)).toStrictEqual(['message', 'dataSource']);
  });
});
