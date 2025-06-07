import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

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

  transition: all ${transition.duration};

  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mid100};
    background-color: ${({ theme }) => theme.colors.hi100};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hi100};
    background-color: ${({ theme }) => theme.colors.hi200};
  }
`;

export const JoyLink = styled.a`
  display: block;
  flex-grow: 1;
  width: 120px;
  height: 100%;
  padding: 10px 25px 10px 0;

  border-radius: 16px;

  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;

  transition: all ${transition.duration};

  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mid100};
    background-color: ${({ theme }) => theme.colors.hi100};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hi100};
    background-color: ${({ theme }) => theme.colors.hi200};
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
  background-color: ${({ theme }) => theme.colors.mid100};
  border: 5px solid ${({ theme }) => theme.colors.mid100};
`;

export const PayButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 18px;

  font-weight: 600;
  line-height: 1;

  transition: all ${transition.duration};

  span {
    font-size: 14px;
  }

  transition: all ${transition.duration};

  color: ${({ theme }) => theme.base.error};
  background-color: ${({ theme }) => theme.colors.hi200};

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mid100};
    background-color: ${({ theme }) => theme.colors.hi100};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hi100};
    background-color: ${({ theme }) => theme.colors.hi200};
  }
`;
