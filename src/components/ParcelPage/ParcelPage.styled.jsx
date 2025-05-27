import styled from "@emotion/styled";
import Barcode from "react-barcode";
import { colors } from "~/styles/common/vars";

export const BarcodeLabel = styled(Barcode)`
  border-radius: 16px;

  max-width: 210px;
  width: auto;

  background-color: ${colors.light.silver};
  padding: 5px;
`;

export const TrackingList = styled.ul`
  padding: 20px;
`;

export const TrackingItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 30px;

  color: ${colors.light.darkGray};

  p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: left;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 15px;
    top: 36px;

    height: 38px;
    border: 2px solid ${colors.light.darkGray};
    border-radius: 10px;
  }

  &:last-child::before {
    background-color: ${colors.light.gray};
  }

  &::before {
    content: "";

    width: 25px;
    height: 25px;
    border: 4px solid ${colors.light.darkGray};
    border-radius: 50%;

    background-color: ${colors.light.gradient};
  }
`;

export const DateWrapper = styled.span`
  display: flex;
  gap: 10px;
`;
