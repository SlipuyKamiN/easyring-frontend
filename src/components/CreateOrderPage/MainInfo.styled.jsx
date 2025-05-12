import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

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
  padding: 2px;

  border-radius: 8px;
  background-color: ${colors.light.silver};

  overflow: hidden;

  & > input {
    visibility: hidden;
  }

  & input:checked + span {
    color: ${colors.accent.cyan};
  }

  span {
    position: absolute;
    top: -2px;
    left: 2px;
    font-size: 50px;
    line-height: 1;
    font-weight: 800;
    opacity: 0.4;
  }

  svg {
    position: absolute;
    top: 27px;
    left: 25px;
    opacity: 0.4;
  }
`;
