import type { Interfaces } from '@entities/users/domain';

export const RefineUserEntity = (
  user: Interfaces.User,
): Omit<Interfaces.User, 'password'> => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    age: user.age,
  };
};
