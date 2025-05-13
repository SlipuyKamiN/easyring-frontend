import styled from "@emotion/styled";
import { colors, transition } from "~/styles/common/vars";

export const SizeButtonsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SizeButton = styled.label`
  position: relative;

  display: block;
  height: 60px;
  width: 60px;

  border-radius: 14px;
  background-color: ${colors.light.gray};

  overflow: hidden;

  cursor: pointer;

  transition: all ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.light.darkGray};
  }

  &:hover > span,
  &:focus > span,
  &:hover > svg,
  &:focus > svg {
    color: ${colors.classicBlack};
  }

  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const SizeInput = styled.input`
  visibility: hidden;
  width: 100%;
  height: 100%;

  &:checked + span {
    color: ${colors.classicWhite};
    background-color: ${colors.light.darkGray};

    & + span {
      color: ${colors.classicWhite};
    }

    & svg {
      opacity: 0.5;
    }
  }
`;

export const SizeText = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 4px;

  text-align: left;
  font-size: 50px;
  line-height: 1;
  font-weight: 800;
  transition: all ${transition.duration};
  color: ${`${colors.light.darkGray}80`};

  & svg {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  @media screen and (min-width: 768px) {
    font-size: 60px;
    padding-left: 6px;

    & svg {
      width: 50px;
      height: 50px;

      top: 30px;
      left: 30px;
    }
  }
`;

export const SizeDescription = styled.span`
  position: absolute;
  bottom: 5px;
  left: 6px;
  font-size: 10px;

  transition: all ${transition.duration};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    bottom: 8px;
    left: 8px;
  }
`;
