import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const FormWrapper = styled.form`
  margin: 0 auto;
  padding: 40px;

  max-width: 450px;
  border-radius: 16px;
  background-color: ${`${colors.light.silver}80`};
  backdrop-filter: blur(10px);
`;
