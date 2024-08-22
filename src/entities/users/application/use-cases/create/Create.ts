import { Adapters as CoreAdapters } from '@core/application';
import type { Interfaces as CoreInterfaces } from '@core/domain';

import { Adapters as UsersAdapters } from '../../../application';
import {
  BusinessLogic,
  type ImplLogic,
  type Interfaces as UsersInterfaces,
} from '../../../domain';

class Create {
  private readonly _crudImpl: ImplLogic.Crud;
  private readonly _crudValidationImpl: ImplLogic.CrudValidation;
  private readonly _crudResponsesImpl: ImplLogic.CrudResponses;
  // eslint-disable-next-line max-len
  private readonly _crudValidationResponsesImpl: ImplLogic.CrudValidationResponses;

  constructor(
    crudImpl: ImplLogic.Crud,
    crudValidationImpl: ImplLogic.CrudValidation,
    crudResponsesImpl: ImplLogic.CrudResponses,
    crudValidationResponsesImpl: ImplLogic.CrudValidationResponses,
  ) {
    this._crudImpl = crudImpl;
    this._crudValidationImpl = crudValidationImpl;
    this._crudResponsesImpl = crudResponsesImpl;
    this._crudValidationResponsesImpl = crudValidationResponsesImpl;
  }

  async invoke(
    user: UsersInterfaces.User,
  ): Promise<
    | CoreInterfaces.Response.DataSourceOutput<UsersInterfaces.User>
    | CoreInterfaces.Response.ApplicationFailedOutput
  > {
    const { UnhandledErrorResponse } = CoreAdapters;
    const { refineUserEntity } = UsersAdapters;

    const INCOMING_USER_DATA_IS_VALID = new BusinessLogic.CreateDataIsValid(
      user,
      this._crudValidationImpl,
      this._crudValidationResponsesImpl,
    );

    if (INCOMING_USER_DATA_IS_VALID.invoke()) {
      const recordPreExists = await new BusinessLogic.RecordPreExists(
        this._crudImpl,
      ).invoke(user.email);

      if (recordPreExists.passed) {
        try {
          await this._crudImpl.save(user);
        } catch (error) {
          return new UnhandledErrorResponse(
            'CreateUserUseCase',
            error as string,
          ).invoke();
        }

        return this._crudResponsesImpl.creationSucceeded(
          refineUserEntity(user),
        );
      }

      return this._crudResponsesImpl.creationFailed();
    }

    return INCOMING_USER_DATA_IS_VALID.failed();
  }
}

export default Create;
