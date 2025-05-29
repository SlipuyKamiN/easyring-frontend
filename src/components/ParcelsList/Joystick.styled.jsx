import styled from "@emotion/styled";
import { colors, transition } from "~/styles/common/vars";

export const JoyList = styled.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const JoyButton = styled.button`
  display: block;
  flex-grow: 1;
  width: 125px;
  height: 100%;
  padding: 10px 0 10px 25px;
  border-radius: 16px;

  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  background-color: ${colors.light.silver};
  color: ${colors.light.darkGray};

  transition: all ${transition.duration};

  &:disabled {
    cursor: not-allowed;
    background-color: ${`${colors.light.darkGray}60`};
  }

  &:hover,
  &:focus {
    background-color: ${colors.light.gray};
  }
`;

export const JoyLink = styled.a`
  display: block;
  flex-grow: 1;
  width: 125px;
  height: 100%;
  padding: 10px 25px 10px 0;

  border-radius: 16px;

  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  background-color: ${colors.light.silver};
  color: ${colors.light.darkGray};
  transition: all ${transition.duration};

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${`${colors.light.darkGray}60`};
  }

  &:hover,
  &:focus {
    background-color: ${colors.light.gray};
  }
`;

export const PayWrapper = styled.li`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.light.gray};
  border: 5px solid ${colors.light.gray};
`;

export const PayButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;

  font-weight: 600;

  transition: all ${transition.duration};

  &:disabled {
    &:disabled {
      cursor: not-allowed;
      background-color: ${`${colors.light.darkGray}60`};
    }
  }

  &:hover,
  &:focus {
    background-color: ${colors.light.darkGray};
  }
`;
