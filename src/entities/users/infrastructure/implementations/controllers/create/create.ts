import type { Request, Response } from 'express';

import { Enums } from '@core/domain';
import { Implementations } from '@core/infrastructure';

import { UseCases } from '../../../../application';
import {
  BusinessRuleResponses,
  CrudResponses,
  CrudValidation,
  Repository,
} from '../../../../infrastructure';

const create = async (req: Request, res: Response): Promise<void> => {
  const {
    Helpers: { appResponseLog },
  } = Implementations;

  try {
    const useCaseCreateUser = await new UseCases.Create(
      new Repository(),
      new CrudValidation(),
      new CrudResponses(),
      new BusinessRuleResponses.CrudValidation(),
    ).invoke(req.body);

    res
      .status(useCaseCreateUser.httpStatusCode)
      .json({ data: useCaseCreateUser.data });
  } catch (error) {
    appResponseLog.exception(
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

export default create;
