import { type CoreEntityResponse } from '@core/domain';

export const ApplicationFailedResponse = (
  httpStatusCode: number,
  message: string,
): CoreEntityResponse.ApplicationFailedOutput => {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
};
