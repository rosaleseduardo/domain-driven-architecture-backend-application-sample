/* eslint-disable max-len */
import { Enums } from '../../../domain';

import { applicationFailedResponse } from '.';

describe('Adapter - ApplicationFailedResponse', () => {
  it('Should return an object with the form of ApplicationFailedResponseOutput', () => {
    const response = applicationFailedResponse(
      Enums.REDIRECTION_HTTP_STATUS_CODE.SEE_OTHER,

      'The information provided is already associated to a pre-existing record',
    );

    expect(Object.keys(response)).toStrictEqual(['httpStatusCode', 'data']);
    expect(typeof response.httpStatusCode).toBe('number');

    expect(typeof response.data).toBe('object');
    expect(Object.keys(response.data)).toStrictEqual(['message']);
  });
});
