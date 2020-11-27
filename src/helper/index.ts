import { AxiosError } from 'axios';

export const AxiosErrorHandler = (error: AxiosError) => {
  const { response } = error;

  if (response) {
    const { status, statusText } = response;
    return {
      status,
      statusText,
    };
  }
  return {
    status: 500,
    statusText: '서버에러 발생',
  };
};
