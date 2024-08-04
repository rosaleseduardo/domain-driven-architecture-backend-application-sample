import { type User } from 'entities/users';

import { mongodb } from '@core/infrastructure/instances/databases';

export const COLLECTION = mongodb.collection<User>('users');
