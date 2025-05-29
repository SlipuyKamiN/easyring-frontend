import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const Card = styled.li`
  padding: 20px;
  border-radius: 20px;
  background-color: ${`${colors.light.gray}60`};

  width: 290px;

  @media screen and (min-width: 768px) {
    width: 290px;
    max-width: none;
  }
`;
