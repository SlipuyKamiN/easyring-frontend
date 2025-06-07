import styled from "@emotion/styled";
import Barcode from "react-barcode";

export const BarcodeLabel = styled(Barcode)`
  border-radius: 16px;

  max-width: 210px;
  width: auto;

  background-color: ${({ theme }) => `${theme.base.white}dd`};
  padding: 5px;

  svg {
    fill: ${({ theme }) => theme.colors.hi200};
  }
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

  color: ${({ theme }) => theme.colors.lo100};

  p {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: left;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 15px;
    top: 36px;

    height: 38px;
    border: 2px solid ${({ theme }) => theme.colors.lo100};
    border-radius: 10px;
  }

  &:last-child::before {
    background-color: transparent;
  }

  &::before {
    content: "";

    width: 25px;
    height: 25px;
    border: 4px solid ${({ theme }) => theme.colors.lo100};
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.mid100};
  }
`;

export const DateWrapper = styled.span`
  display: flex;
  gap: 10px;
`;
