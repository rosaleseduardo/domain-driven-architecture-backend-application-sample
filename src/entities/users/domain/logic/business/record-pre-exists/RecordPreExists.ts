import type { Interfaces } from '@core/domain';

import type { ImplLogic } from '../../../../domain';
import { BUSINESS_RULES_RESPONSES } from '../../../../infrastructure';

class RecordPreExists {
  private readonly _implementation: ImplLogic.Crud;

  constructor(implementation: ImplLogic.Crud) {
    this._implementation = implementation;
  }

  async invoke(email: string): Promise<Interfaces.Response.ApplicationGeneral> {
    const recordPreExists = await this._implementation.recordPreExists(email);

    return recordPreExists
      ? new BUSINESS_RULES_RESPONSES.RECORD_PRE_EXISTS().found()
      : new BUSINESS_RULES_RESPONSES.RECORD_PRE_EXISTS().notFound();
  }
}

export default RecordPreExists;
