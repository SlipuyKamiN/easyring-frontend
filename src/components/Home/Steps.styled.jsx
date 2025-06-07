import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.lo100};

  background-clip: text;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const StepsList = styled.ul`
  max-width: 370px;
  margin: 0 auto;
  counter-reset: Steps;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    max-width: none;
  }
`;

export const StepItem = styled.li`
  position: relative;
  width: 155px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${({ theme }) => theme.colors.lo200};

  & > svg {
    margin-left: 70px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.mid100};
  }

  &::before {
    position: absolute;
    top: 0;
    left: 5px;
    content: counter(Steps) ".";
    counter-increment: Steps;

    font-family: Montserrat-Alt1;
    font-size: 105px;
    font-weight: 600;
    line-height: 1;

    background: ${({ theme }) => theme.colors.gradient};

    color: transparent;

    background-clip: text;
  }

  @media screen and (min-width: 768px) {
    width: 215px;
    padding: 5px;

    gap: 10px;

    font-size: 20px;

    & > svg {
      width: 80px;
      height: 80px;
      margin-left: auto;
      margin-right: 10px;
    }

    &::before {
      top: 0;
      left: 5px;

      font-size: 120px;
    }
  }
`;
