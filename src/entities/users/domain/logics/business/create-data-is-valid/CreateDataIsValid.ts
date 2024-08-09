import type { Interfaces as CoreInterfaces } from '@core/domain';

import type {
  ImplLogic,
  Interfaces as UsersInterfaces,
} from '../../../../domain';

class CreateDataIsValid {
  private readonly _user: UsersInterfaces.User;
  private readonly _crudValidationImpl: ImplLogic.CrudValidation;
  // eslint-disable-next-line max-len
  private readonly _crudValidationResponsesImpl: ImplLogic.CrudValidationResponses;

  constructor(
    user: UsersInterfaces.User,
    crudValidationImpl: ImplLogic.CrudValidation,
    crudValidationResponsesImpl: ImplLogic.CrudValidationResponses,
  ) {
    this._user = user;
    this._crudValidationImpl = crudValidationImpl;
    this._crudValidationResponsesImpl = crudValidationResponsesImpl;
  }

  propertiesWereProvided(): boolean {
    const sampleUser: UsersInterfaces.User = {
      email: '',
      password: '',
      name: '',
      age: 0,
    };

    if (
      !this._crudValidationImpl.areEqual(
        Object.keys(this._user),
        Object.keys(sampleUser),
      )
    ) {
      return this._crudValidationResponsesImpl.incompleteInputData();
    }

    return this._crudValidationResponsesImpl.completeInputData();
  }

  propertyValuesAreWellDefined(): boolean {
    if (!this._crudValidationImpl.isValidEmail(this._user.email)) {
      return this._crudValidationResponsesImpl.invalidEmail(this._user.email);
    } else if (!(typeof this._user.name === 'string')) {
      return this._crudValidationResponsesImpl.invalidName(this._user.name);
    } else if (!(typeof this._user.age === 'number')) {
      return this._crudValidationResponsesImpl.invalidAge(this._user.age);
    }

    return this._crudValidationResponsesImpl.validPropertyValues();
  }

  invoke(): boolean {
    const propertiesValidationPassed = this.propertiesWereProvided();
    const propertyValuesValidationPassed = this.propertyValuesAreWellDefined();

    if (!propertiesValidationPassed || !propertyValuesValidationPassed) {
      return false;
    }

    return this._crudValidationResponsesImpl.validInputData();
  }

  failed(): CoreInterfaces.Response.ApplicationFailedOutput {
    return this._crudValidationResponsesImpl.invalidInputData();
  }
}

export default CreateDataIsValid;
