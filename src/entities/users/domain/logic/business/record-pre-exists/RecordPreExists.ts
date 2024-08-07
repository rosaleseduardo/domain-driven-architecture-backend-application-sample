import type { Interfaces } from '@core/domain';

import type { ImplLogic } from '../../../../domain';
import { BusinessRuleResponses } from '../../../../infrastructure';

class RecordPreExists {
  private readonly _implementation: ImplLogic.Crud;

  constructor(implementation: ImplLogic.Crud) {
    this._implementation = implementation;
  }

  async invoke(email: string): Promise<Interfaces.Response.ApplicationGeneral> {
    const recordPreExists = await this._implementation.recordPreExists(email);

    return recordPreExists
      ? new BusinessRuleResponses.RecordPreExists().found()
      : new BusinessRuleResponses.RecordPreExists().notFound();
  }
}

export default RecordPreExists;
