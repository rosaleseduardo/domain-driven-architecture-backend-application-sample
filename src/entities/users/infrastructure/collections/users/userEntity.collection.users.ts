import { type User } from 'entities/users';

import { mongodb } from '@core/infrastructure/instances/db-clients';

export const COLLECTION = mongodb.collection<User>('users');
