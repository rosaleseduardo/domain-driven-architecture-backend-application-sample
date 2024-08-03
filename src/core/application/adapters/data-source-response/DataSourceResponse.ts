import { Enum, type Response } from '@core/domain/interfaces';

const DataSourceResponse = <T>(
  message: string,
  dataSource: T,
): Response.DataSourceOutput<T> => {
  return {
    httpStatusCode: Enum.SUCCESSFUL_HTTP_STATUS_CODE.CREATED,
    data: {
      message,
      dataSource,
    },
  };
};

export default DataSourceResponse;
