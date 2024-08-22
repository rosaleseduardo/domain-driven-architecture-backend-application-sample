import type { Interfaces } from '../../../domain';

const applicationFailedResponse = (
  httpStatusCode: number,
  message: string,
): Interfaces.Response.ApplicationFailedOutput => {
  return {
    httpStatusCode,
    data: {
      message,
    },
  };
};

export default applicationFailedResponse;
