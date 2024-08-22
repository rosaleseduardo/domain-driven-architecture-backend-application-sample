import bcrypt from 'bcrypt';

import type { ImplLogic, Interfaces } from '../../../domain';
import { Collection } from '../../../infrastructure';

class Repository implements ImplLogic.Crud {
  async save(user: Interfaces.User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await Collection.insertOne({
      ...user,
      password: hashedPassword,
    });
  }

  async recordPreExists(email: string): Promise<boolean> {
    const recordFound = await Collection.findOne({
      email,
    });

    return Boolean(recordFound);
  }
}

export default Repository;
