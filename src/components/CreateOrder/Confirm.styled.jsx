import styled from "@emotion/styled";
import { PrimaryBtn } from "../Common/Button.styled";

export const ConfirmSectionWrapper = styled.section`
  background-color: ${({ theme }) => `${theme.colors.hi100}60`};
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

export const ConfirmBtn = styled(PrimaryBtn)`
  margin: 0 auto;
`;
