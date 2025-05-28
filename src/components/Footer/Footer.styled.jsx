import styled from "@emotion/styled";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { colors } from "~/styles/common/vars";
import { Link } from "react-router-dom";

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
  justify-content: center;
  gap: 20px;
`;

export const IconLink = styled.a`
  color: ${colors.light.gray};

  &.whats-app:hover,
  &.whats-app:focus {
    color: #25d366;
  }

  &.telegram:hover,
  &.telegram:focus {
    color: #0088cc;
  }

  &.instagram:hover,
  &.instagram:focus {
    color: #fd1d1d;
  }
`;

export const AddressListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: ${colors.light.gray};
  }
  a:hover,
  a:focus {
    color: ${colors.light.darkGray};
  }
`;

export const ReactLink = styled(Link)`
  color: ${colors.light.gray};

  &:hover,
  &:focus {
    color: ${colors.accent.cyan};
  }
`;
