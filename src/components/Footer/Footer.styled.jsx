import styled from "@emotion/styled";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { transition } from "~/styles/common/vars";

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
  color: ${({ theme }) => theme.colors.mid100};

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
    color: ${({ theme }) => theme.colors.mid100};
  }
  a:hover,
  a:focus {
    color: ${({ theme }) => theme.colors.lo200};
  }
`;

export const ReactLink = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mid100};

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.accent.cyan};
  }
`;
