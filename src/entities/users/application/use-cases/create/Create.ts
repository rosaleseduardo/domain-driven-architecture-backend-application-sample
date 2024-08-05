import {
  type User,
  USER_ENTITY,
  type UserEntityImplLogic,
} from 'entities/users';

import { Adapters as CoreAdapters } from '@core/application';
import type { Interfaces } from '@core/domain';

import { Adapters as UsersAdapters } from '../../adapters';

export class Create {
  private readonly _crudImpl: UserEntityImplLogic.Crud;
  private readonly _crudValidationImpl: UserEntityImplLogic.CrudValidation;
  private readonly _crudResponsesImpl: UserEntityImplLogic.CrudResponses;
  // eslint-disable-next-line max-len
  private readonly _crudValidationResponsesImpl: UserEntityImplLogic.CrudValidationResponses;

  constructor(
    crudImpl: UserEntityImplLogic.Crud,
    crudValidationImpl: UserEntityImplLogic.CrudValidation,
    crudResponsesImpl: UserEntityImplLogic.CrudResponses,
    crudValidationResponsesImpl: UserEntityImplLogic.CrudValidationResponses,
  ) {
    this._crudImpl = crudImpl;
    this._crudValidationImpl = crudValidationImpl;
    this._crudResponsesImpl = crudResponsesImpl;
    this._crudValidationResponsesImpl = crudValidationResponsesImpl;
  }

  async invoke(
    user: User,
  ): Promise<
    | Interfaces.Response.DataSourceOutput<User>
    | Interfaces.Response.ApplicationFailedOutput
  > {
    const { UnhandledErrorResponse } = CoreAdapters;
    const { RefineUserEntity } = UsersAdapters;

    const { BUSINESS_LOGIC } = USER_ENTITY;
    const INCOMING_USER_DATA_IS_VALID = new BUSINESS_LOGIC.CreateDataIsValid(
      user,
      this._crudValidationImpl,
      this._crudValidationResponsesImpl,
    );

    if (INCOMING_USER_DATA_IS_VALID.invoke()) {
      const { BUSINESS_LOGIC } = USER_ENTITY;
      const recordPreExists = await new BUSINESS_LOGIC.RecordPreExists(
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
          RefineUserEntity(user),
        );
      }

      return this._crudResponsesImpl.creationFailed();
    }

    return INCOMING_USER_DATA_IS_VALID.failed();
  }
}
