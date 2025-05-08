import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { transition } from "~/styles/common/vars";

export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;

  padding: 10px 16px;

  background: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.4) 0%,
    rgba(100, 100, 100, 0.6) 60%,
    rgba(100, 100, 100, 0.2) 100%
  );
  color: #000;

  text-transform: uppercase;
  font-size: 16px;

  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: #dddddd;
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background: transparent;
  background-color: #dddddd66;
  font-weight: 400;

  &:hover,
  &:focus {
    color: #000;

    background-color: #ddddddaa;
  }
`;

export const BtnLink = styled(Link)`
  display: flex;
  align-items: center;

  gap: 10px;

  min-height: 36px;

  padding: 10px 16px;

  background: linear-gradient(
    90deg,
    rgba(100, 100, 100, 0.4) 0%,
    rgba(100, 100, 100, 0.6) 60%,
    rgba(100, 100, 100, 0.2) 100%
  );
  color: #000;

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: #dddddd;
  }
`;

export const SecondaryBtnLink = styled(BtnLink)`
  background: none;
  background-color: #dddddd66;
  font-weight: 400;

  &:hover,
  &:focus {
    color: #000;

    background-color: #ddddddaa;
  }
`;
