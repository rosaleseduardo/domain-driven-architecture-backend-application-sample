import { type Interfaces } from '../../../domain';

const ApplicationFailedResponse = (
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

export default ApplicationFailedResponse;
