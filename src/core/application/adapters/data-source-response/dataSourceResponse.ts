import { Enums, type Interfaces } from '../../../domain';

const dataSourceResponse = <T>(
  message: string,
  dataSource: T,
): Interfaces.Response.DataSourceOutput<T> => {
  return {
    httpStatusCode: Enums.SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
    data: {
      message,
      dataSource,
    },
  };
};

export default dataSourceResponse;
