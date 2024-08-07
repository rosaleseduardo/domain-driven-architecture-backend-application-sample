import { mongodb } from '@core/infrastructure/instances/databases';

import type { Interfaces } from '../../../../../domain';

const Collection = mongodb.collection<Interfaces.User>('users');

export default Collection;
