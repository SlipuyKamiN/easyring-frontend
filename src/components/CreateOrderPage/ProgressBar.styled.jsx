import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors, transition } from "~/styles/common/vars";

export const ProgressList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

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
    left: 35px;
    width: 70px;
    border-bottom: 4px solid black;
    border-radius: 8px;
    transition: border-color ${transition.duration};
    border-color: ${colors.light.gray};
  }

  &.active,
  &.active::after {
    color: ${colors.accent.cyan};
    border-color: ${colors.accent.cyan};
  }
`;
