import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";
import { PrimaryBtn } from "../Common/Button.styled";

export const ConfirmSectionWrapper = styled.section`
  background-color: ${`${colors.light.gray}60`};
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 40px;
`;

export const SuccessHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  color: limegreen;

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

export const PaymentOptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PaymentOption = styled.li`
  max-width: 275px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 95px;
    border-radius: 12px;
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
    border: 1px solid ${colors.light.darkGray};

    font-size: 36px;
    width: 60px;
  }
`;

export const ConfirmBtn = styled(PrimaryBtn)`
  margin: 0 auto;
`;
