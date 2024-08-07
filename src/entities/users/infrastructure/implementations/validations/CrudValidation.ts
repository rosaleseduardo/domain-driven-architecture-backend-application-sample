import { Implementations } from '@core/infrastructure';

import type { ImplLogic } from '../../../domain';

class CrudValidation implements ImplLogic.CrudValidation {
  isValidEmail(email: string): boolean {
    const { Helpers } = Implementations;

    return Helpers.isValidEmail(email);
  }

  areEqual(valueOne: string[], valueTwo: string[]): boolean {
    const { Helpers } = Implementations;

    return Helpers.isEqual(valueOne, valueTwo);
  }
}

export default CrudValidation;
