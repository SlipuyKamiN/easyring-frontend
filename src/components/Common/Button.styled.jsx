import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PrimaryBtn = styled.button`
  padding: 10px 16px;

  background-color: #dddddd;
  border-radius: 8px;
  border: none;
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background-color: transparent;
  color: #fff;
`;

export const BtnLink = styled(Link)`
  padding: 10px 16px;

  background: linear-gradient(
    90deg,
    rgba(224, 224, 224, 0.8) 0%,
    rgba(100, 100, 100, 0.6) 60%,
    rgba(100, 100, 100, 0.2) 100%
  );
  color: #000;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-position 300ms linear;

  &:hover,
  &:focus {
    background-size: 200%;
  }
`;

export const SecondaryBtnLink = styled(BtnLink)`
  background: none;
  background-color: #dddddd66;
  color: #000;
  font-weight: 400;

  &:hover,
  &:focus {
    color: #000;

    background-color: #ddddddaa;
  }
`;
