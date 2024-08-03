import type { UserEntityImplLogic } from 'entities/users';

import { HELPERS } from '@core/infrastructure/implementations/helpers';

export class UserValidation implements UserEntityImplLogic.CrudValidation {
  isValidEmail(email: string): boolean {
    return HELPERS.isValidEmail(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    return HELPERS.isEqual(valueOne, valueTwo);
  }
}
