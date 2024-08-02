import { type CoreEntityResponse } from '@core/domain';

const ApplicationFailedResponse = (
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

export default ApplicationFailedResponse;
