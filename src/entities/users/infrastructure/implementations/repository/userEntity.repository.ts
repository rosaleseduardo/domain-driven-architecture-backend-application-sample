import bcrypt from 'bcrypt';
import { type User, type UserEntityImplLogic } from 'entities/users';

import { Collection } from '../../instances';

export class Repository implements UserEntityImplLogic.Crud {
  async save(user: User): Promise<void> {
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
