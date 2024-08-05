import type { UserEntityImplLogic } from 'entities/users';

import { Implementations } from '@core/infrastructure';
export class UserValidation implements UserEntityImplLogic.CrudValidation {
  isValidEmail(email: string): boolean {
    const { Helpers } = Implementations;

    return Helpers.isValidEmail(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    const { Helpers } = Implementations;

    return Helpers.isEqual(valueOne, valueTwo);
  }
}
