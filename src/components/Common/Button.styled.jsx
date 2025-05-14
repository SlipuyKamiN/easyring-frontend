import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, transition } from "~/styles/common/vars";

export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  min-height: 40px;

  padding: 10px 16px;

  background: ${colors.light.gradient};

  color: ${colors.light.darkGray};

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.light.gray};
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background: transparent;
  background-color: ${colors.light.silver};

  font-weight: 400;

  &:hover,
  &:focus {
    color: ${colors.light.darkGray};

    background-color: ${colors.light.gray};
  }
`;

export const BtnLink = styled(Link)`
  display: flex;
  align-items: center;

  gap: 10px;

  min-height: 40px;

  padding: 10px 16px;

  background: ${colors.light.gradient};

  color: ${colors.light.darkGray};

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.light.gray};
  }
`;

export const SecondaryBtnLink = styled(BtnLink)`
  background: transparent;
  background-color: ${colors.light.silver};

  font-weight: 400;

  &:hover,
  &:focus {
    color: ${colors.light.darkGray};

    background-color: ${colors.light.gray};
  }
`;
