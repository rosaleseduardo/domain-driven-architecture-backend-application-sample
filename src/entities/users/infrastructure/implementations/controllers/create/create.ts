import { USER_ENTITY } from 'entities/users';
import type { Request, Response } from 'express';

import { Enums } from '@core/domain';
import { Implementations } from '@core/infrastructure';

import { UseCases } from '../../../../application';
import { UserValidation } from '../../validations';

export const create = async (req: Request, res: Response): Promise<void> => {
  const { Helpers } = Implementations;

  try {
    const useCaseCreateUser = await new UseCases.Create(
      new USER_ENTITY.REPOSITORY(),
      new UserValidation(),
      new USER_ENTITY.RESPONSES.CRUD_RESPONSES(),
      new USER_ENTITY.RESPONSES.CRUD_VALIDATION(),
    ).invoke(req.body);

    res
      .status(useCaseCreateUser.httpStatusCode)
      .json({ data: useCaseCreateUser.data });
  } catch (error) {
    Helpers.AppResponseLog.exception(
      // eslint-disable-next-line max-len
      `An unhanlded error has occurred when creating the user. Details: ${error as string}`,
    );

    res.status(Enums.SERVER_ERROR_HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      data: {
        // eslint-disable-next-line max-len
        message: `An unhanlded error has occurred when creating the user. Details: ${
          error as string
        }`,
      },
    });
  }
};
