import bcrypt from 'bcrypt';
import {
  type User,
  USER_ENTITY,
  type UserEntityImplLogic,
} from 'entities/users';

export class Repository implements UserEntityImplLogic.Crud {
  async save(user: User): Promise<void> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await USER_ENTITY.COLLECTION.insertOne({
      ...user,
      password: hashedPassword,
    });
  }

  async recordPreExists(email: string): Promise<boolean> {
    const recordFound = await USER_ENTITY.COLLECTION.findOne({
      email,
    });

    return Boolean(recordFound);
  }
}
