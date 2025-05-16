import { ErrorText } from "../CreateOrderPage/CreateOrderPage.styled";

export const ValidationErrorText = ({ inputError }) => {
  if (!inputError) return;

  return <ErrorText>{inputError.message}</ErrorText>;
};
