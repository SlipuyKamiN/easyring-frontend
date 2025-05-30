import styled from "@emotion/styled";
import { colors } from "~/styles/common/vars";

export const UpdateRoleRadioList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const RoleLabel = styled.label`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 0 16px 16px 0;

  text-transform: uppercase;
  color: ${colors.light.gray};
  background-color: ${colors.light.silver};

  &.left {
    border-radius: 16px 0 0 16px;
  }
`;

export const RoleInput = styled.input`
  visibility: hidden;
  position: absolute;
  margin: 0;
  width: 1px;

  &:checked + label {
    font-weight: 600;
    color: ${colors.light.silver};
    background-color: ${colors.light.darkGray};
  }
`;
