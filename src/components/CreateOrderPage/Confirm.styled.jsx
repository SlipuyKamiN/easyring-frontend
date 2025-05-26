import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "~/styles/common/vars";

export const ConfirmSectionWrapper = styled.div`
  background-color: ${`${colors.light.gray}60`};
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 40px;
`;

export const InfoSectionsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const InfoSection = styled.li`
  width: 275px;
  padding: 20px;

  background-color: ${colors.light.silver};
  border-radius: 16px;
`;

export const ListTitle = styled.h3`
  width: 100%;
  text-align: center;
`;

export const SectionTitle = styled(Link)`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const AddressList = styled.ul`
  width: 100%;
  text-align: left;
`;

export const AddressListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid ${colors.light.gray};
  border-radius: 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 16px;
  }
`;

export const ImportantDetails = styled.span`
  font-weight: 600;
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
