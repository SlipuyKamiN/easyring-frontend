import styled from "@emotion/styled";
import { transition } from "~/styles/common/vars";

export const PageHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  padding: 5px 0;

  backdrop-filter: blur(10px);
  border-bottom: 3px solid ${({ theme }) => theme.colors.lo100};
  box-shadow: ${({ theme }) => theme.colors.lo100} 0px 0px 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UiConfigWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LanguagePicker = styled.button`
  width: 32px;
  height: 23px;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.colors.lo200};

  filter: grayscale(100%) contrast(90%);

  transition: all ${transition.duration};

  &:hover,
  &:focus {
    filter: none;
  }

  svg {
    display: block;
    width: 32px;
    height: 32px;

    transform: translate(-1px, -5px) scale(1.05);
  }
`;

export const DarkModeToggler = styled.button`
  padding: 4px 0 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lo200};
`;
