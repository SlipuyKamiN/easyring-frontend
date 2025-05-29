import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, transition } from "~/styles/common/vars";

export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  height: 40px;

  padding: 10px 16px;
  background-color: ${colors.light.silver};

  color: ${colors.light.darkGray};

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    outline: none;
    background-color: ${colors.light.gray};
  }

  &:disabled {
    background-color: ${colors.light.gray};
    cursor: not-allowed;
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background: transparent;
  background: ${colors.light.gradient};

  font-weight: 400;

  &:hover,
  &:focus {
    color: ${colors.light.darkGray};

    background-color: ${colors.light.gray};
  }
`;

export const PrimaryBtnLink = styled(Link)`
  display: flex;
  align-items: center;

  gap: 10px;

  height: 40px;

  padding: 10px 16px;

  background-color: ${colors.light.silver};

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

export const SecondaryBtnLink = styled(PrimaryBtnLink)`
  background: transparent;
  background: ${colors.light.gradient};

  font-weight: 400;

  &:hover,
  &:focus {
    color: ${colors.light.darkGray};

    background-color: ${colors.light.gray};
  }
`;

export const HeroMainBtn = styled(PrimaryBtnLink)`
  font-weight: 600;
  background: ${colors.light.gradient};
`;

export const HeroSecondaryBtn = styled(SecondaryBtn)`
  background: none;
`;
