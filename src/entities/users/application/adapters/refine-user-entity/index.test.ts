import type { Interfaces } from '../../../domain';

import { RefineUserEntity } from '.';

describe('Adapter - DataSourceResponse', () => {
  it('It should return an User object without the password', () => {
    const user: Interfaces.User = {
      email: 'test@gmail.com',
      password: '1234',
      name: 'TestName',
      age: 18,
    };

    const mockResponse: Omit<Interfaces.User, 'password'> = {
      id: undefined,
      email: 'test@gmail.com',
      name: 'TestName',
      age: 18,
    };

    const refinedUser = RefineUserEntity(user);

    expect(refinedUser).toStrictEqual(mockResponse);
  });
});
