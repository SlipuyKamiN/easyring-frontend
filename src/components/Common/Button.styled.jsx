import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { transition } from "~/styles/common/vars";

export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;

  gap: 10px;

  height: 40px;

  padding: 10px 16px;

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mid100};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mid100};
    background-color: ${({ theme }) => theme.colors.hi100};
  }
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background: transparent;

  font-weight: 400;
  color: ${({ theme }) => theme.colors.lo200};
  background: ${({ theme }) => theme.colors.hi100};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mid100};
  }
`;

export const PrimaryBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  height: 40px;

  padding: 10px 16px;

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;
  border: none;

  transition: background-color ${transition.duration};

  color: ${({ theme }) => theme.colors.lo200};
  background-color: ${({ theme }) => theme.colors.hi200};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mid100};
  }
`;

export const SecondaryBtnLink = styled(PrimaryBtnLink)`
  font-weight: 400;

  background: transparent;
  color: ${({ theme }) => theme.colors.lo200};
  background: ${({ theme }) => theme.colors.hi100};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mid100};
  }
`;

export const HeroMainBtn = styled(PrimaryBtnLink)`
  color: ${({ theme }) => theme.colors.hi200};
  background: ${({ theme }) => theme.colors.gradient};
`;

export const CreatePickUpWrapper = styled.li`
  max-width: 85%;
  margin: 0 auto;
  padding: 20px 0 0;

  button {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.hi200};
    background: ${({ theme }) => theme.colors.gradient};
  }
`;

export const HeroSecondaryBtn = styled(SecondaryBtn)`
  background: none;
`;
