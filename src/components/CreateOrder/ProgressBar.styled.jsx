import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors, transition } from "~/styles/common/vars";
import { Section } from "../SharedLayout/SharedLayout.styled";

export const ProgressSection = styled(Section)`
  padding-top: 80px;
  padding-bottom: 0;

  @media screen and (min-width: 768px) {
    padding-top: 100px;

    padding-bottom: 0;
  }
`;

export const ProgressList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`;

export const ProgressItem = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;

  &:last-child a::after {
    display: none;
  }
`;

export const ProgressLink = styled(NavLink)`
  margin: auto;

  position: relative;
  color: ${colors.light.gray};

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 40px;
    border-bottom: 4px solid ${colors.light.gray};
    transition: border-color ${transition.duration};
    border-radius: 8px;
  }

  &.active,
  &.active::after {
    color: ${colors.light.darkGray};
    border-color: ${colors.light.darkGray};
  }

  @media screen and (min-width: 768px) {
    &::after {
      position: absolute;
      left: 35px;
      width: 70px;
      border-bottom: 4px solid ${colors.light.gray};
      transition: border-color ${transition.duration};
      border-radius: 8px;
    }
  }
`;
