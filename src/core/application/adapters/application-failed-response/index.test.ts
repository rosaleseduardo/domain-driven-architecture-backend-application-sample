/* eslint-disable max-len */
import { CoreEntityEnum } from '@core/domain';

import { ApplicationFailedResponse } from '.';

describe('Adapter - ApplicationFailedResponse', () => {
  it('Should return an object with the form of ApplicationFailedResponseOutput', () => {
    const response = ApplicationFailedResponse(
      CoreEntityEnum.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,

      'The information provided is already associated to a pre-existing record',
    );

    expect(Object.keys(response)).toStrictEqual(['httpStatusCode', 'data']);
    expect(typeof response.httpStatusCode).toBe('number');

    expect(typeof response.data).toBe('object');
    expect(Object.keys(response.data)).toStrictEqual(['message']);
  });
});
