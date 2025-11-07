import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

  background-color: ${({ theme }) => theme.colors.hi200};
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

  color: ${({ theme }) => theme.colors.lo200};
`;

export const AddressList = styled.ul`
  width: 100%;
  text-align: left;
`;

export const AddressListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lo200};
  border-radius: 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 16px;
  }

  &.description {
    flex-wrap: wrap;
  }

  &.price {
    text-transform: uppercase;
    font-size: 18px;

    div {
      max-width: 65%;
    }

    p {
      font-weight: bolder;
      line-height: 1;
    }

    b {
      font-size: 26px;
    }

    span {
      font-size: 12px;
      text-transform: none;
      line-height: 1;
    }
  }
`;
