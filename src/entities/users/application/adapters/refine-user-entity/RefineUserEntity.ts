import type { Interfaces } from '../../../domain';

const RefineUserEntity = (
  user: Interfaces.User,
): Omit<Interfaces.User, 'password'> => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    age: user.age,
  };
};

export default RefineUserEntity;
