import styled from "@emotion/styled";

export const SuccessHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  margin-bottom: 10px;

  color: ${({ theme }) => theme.base.success};

  h2 {
    display: block;

    line-height: 1;

    font-family: Montserrat-Alt1, sans-serif;
  }
`;

export const SuccessText = styled.p`
  max-width: 300px;
  margin: 0 auto 10px;

  @media screen and (min-width: 768px) {
    max-width: 315px;
    margin-bottom: 20px;
  }
`;

export const ToPayWrapper = styled.div`
  max-width: 275px;
  margin: 0 auto 20px;

  a {
    justify-content: center;
  }
`;

export const PaymentOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PaymentOption = styled.li`
  position: relative;
  overflow: hidden;
  max-width: 275px;
  border-radius: 12px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 95px;
    height: auto;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const IconsWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    padding: 0 5px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.lo200};

    font-size: 36px;
    width: 60px;
  }
`;
