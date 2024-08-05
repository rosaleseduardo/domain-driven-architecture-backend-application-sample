import { USER_ENTITY } from 'entities/users';
import type { Request, Response } from 'express';

import { Enums } from '@core/domain';
import { HELPERS } from '@core/infrastructure/implementations/helpers';

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const useCaseCreateUser = await new USER_ENTITY.USE_CASES.Create(
      new USER_ENTITY.REPOSITORY(),
      new USER_ENTITY.VALIDATION_CRITERIA(),
      new USER_ENTITY.RESPONSES.CRUD_RESPONSES(),
      new USER_ENTITY.RESPONSES.CRUD_VALIDATION(),
    ).invoke(req.body);

    res
      .status(useCaseCreateUser.httpStatusCode)
      .json({ data: useCaseCreateUser.data });
  } catch (error) {
    HELPERS.AppResponseLog.exception(
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
