import styled from "@emotion/styled";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { colors } from "~/styles/common/vars";

export const PageFooter = styled.footer`
  padding: 40px 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: #dddddd;

  &:hover,
  &:focus {
    color: ${colors.primaryAccent};
  }
`;

export const AddressListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: #dddddd;
  }
  a:hover,
  a:focus {
    color: ${colors.primaryAccent};
  }
`;
