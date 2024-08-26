/* eslint-disable import/no-unresolved */
export const formatErrors = error => {
  if (typeof error?.response?.data === 'string') return error.response.data;

  return Object.keys(error?.response?.data?.errors).map(key => [
    key,
    error.response.data.errors[key]
  ]);
};

export const formatMessagesErrors = error => {
  const errors = formatErrors(error);

  if (error.message === 'Request failed with status code 500') {
    const formatError = errors.map(item => item[1]);
    return [formatError.toString().replace(/,/g, '')];
  }

  const formatError =
    typeof errors === 'string'
      ? [errors]
      : errors.map(item => item[1].message || item[1]);

  return formatError;
};
