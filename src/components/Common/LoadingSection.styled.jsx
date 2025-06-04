import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const SpinnerWrapper = styled.div`
  svg {
    color: ${colors.light.darkGray};
    animation-name: loading;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const EmptyWrapper = styled.div`
  color: ${colors.light.darkGray};

  font-size: 36px;
  font-weight: 600;
  text-align: center;

  svg {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
`;
