import { ErrorText } from "../Common/Form.styled";

export const ValidationErrorText = ({ inputError }) => {
  if (!inputError) return;

  return <ErrorText>{inputError.message}</ErrorText>;
};
