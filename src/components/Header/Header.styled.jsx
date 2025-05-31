import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const PageHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  padding: 5px 0;

  backdrop-filter: blur(10px);
  border-bottom: 3px solid ${colors.primaryAccent};
  box-shadow: ${colors.primaryAccent} 0px 0px 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DarkModeToggler = styled.button`
  padding: 4px 0 0;
  background-color: transparent;
  color: ${colors.light.darkGray};
`;
