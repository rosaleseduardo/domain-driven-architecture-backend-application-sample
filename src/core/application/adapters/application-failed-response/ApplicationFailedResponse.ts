import { type Response } from '@core/domain/interfaces';

const ApplicationFailedResponse = (
  httpStatusCode: number,
  message: string,
): Response.ApplicationFailedOutput => {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
};

export default ApplicationFailedResponse;
