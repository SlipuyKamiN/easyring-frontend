import styled from "@emotion/styled";

export const SpinnerWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.lo100};
    animation-name: loading;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const EmptyWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lo100};

  font-size: 36px;
  font-weight: 600;
  text-align: center;

  svg {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
`;
