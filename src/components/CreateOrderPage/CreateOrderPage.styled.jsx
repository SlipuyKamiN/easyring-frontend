import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 40px;

  max-width: 450px;
  border-radius: 40px;
  background-color: ${`${colors.light.gray}60`};
  backdrop-filter: blur(10px);
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 14px;
  color: ${colors.errorRed};
`;
