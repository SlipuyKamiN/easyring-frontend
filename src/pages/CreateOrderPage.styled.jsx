import styled from "@emotion/styled";
import { Section } from "../components/SharedLayout/SharedLayout.styled";

export const ConfirmSection = styled(Section)`
  padding: 20px 0 40px;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
`;

export const DecorationBg = styled.div`
  width: 100%;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    background-color: ${({ theme }) => `${theme.colors.hi100}60`};
    backdrop-filter: blur(10px);
  }
`;
