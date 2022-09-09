export interface ErrorDetails {
  context: { label: string; value: any; key: string };
  message: string;
}
export const getFieldError = (
  errorDetails: ErrorDetails[],
  key: string
): string => {
  const errorDetail = errorDetails?.find((item) => {
    return item.context.key === key;
  });
  return errorDetail ? errorDetail.message : '';
};
