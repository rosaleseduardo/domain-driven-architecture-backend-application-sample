/* eslint-disable max-len */
import { Enum } from '@core/domain/interfaces';

import { RecordPreExistsResponse } from '.';

describe('RecordPreExistsResponse', () => {
  // let mockHelperAppResponseLog: Log.AppResponseDefinition;

  // beforeEach(() => {
  //   mockHelperAppResponseLog = {
  //     warning: jest.fn(),
  //     info: jest.fn(),
  //   };
  // });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should log a warning message and return the correct response for found', () => {
    const recordPreExistsResponse = new RecordPreExistsResponse();

    const expectedResponse = {
      httpStatusCode: Enum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,
      passed: false,
      message: 'The provided record has previously been registered',
    };

    const result = recordPreExistsResponse.found();

    expect(result).toEqual(expectedResponse);
  });

  it('should log an info message and return the correct response for notFound', () => {
    const recordPreExistsResponse = new RecordPreExistsResponse();

    const expectedResponse = {
      httpStatusCode: Enum.SUCCESSFUL_HTTP_STATUS_CODE.OK,
      passed: true,

      message: `BUSINESS_LOGIC - RECORD_PRE_EXISTS: This record has not been found in
        our records. The process can continue.`,
    };

    const result = recordPreExistsResponse.notFound();

    expect(result).toEqual(expectedResponse);
  });
});
